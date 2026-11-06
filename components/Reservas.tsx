"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, CalendarCheck, CalendarDays, Check, ChevronDown, Clock, MapPinned, Maximize2, Minus, Phone, Plus, Soup, User, Users, Utensils, X } from "lucide-react";
import Reveal from "./Reveal";
import TableMap3D from "./TableMap3D";
import FloorPlanModal from "./FloorPlanModal";
import { categories, categoryEmojis, menuBook, type Category } from "@/data/menu";
import {
  blockedTables,
  closeMinutes,
  maxPeople,
  openMinutes,
  seatsFor,
  slotStep,
  stayMinutes,
  storageKey,
  tables,
  type TableZone,
  zoneConfig,
} from "@/data/reservas";
import { telHref, waReservasLink } from "@/lib/site";
import { categoryEn, reservasUi, tr } from "@/data/menu-en";
import { useMenuLang, LangSwitch } from "./useMenuLang";

type BookingItem = { name: string; quantity: number };

type Booking = {
  date: string; // yyyy-mm-dd
  time: string; // HH:MM
  table: number;
  people: number;
  name: string;
  phone: string;
  dishes: BookingItem[];
};
type Status = "available" | "reserved" | "unavailable";
type Errors = Partial<Record<"name" | "phone" | "date" | "time" | "table", string>>;

/* ---------- helpers ---------- */
const pad = (n: number) => String(n).padStart(2, "0");
const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};
const slots: string[] = [];
for (let m = openMinutes; m <= closeMinutes; m += slotStep) slots.push(`${pad(Math.floor(m / 60))}:${pad(m % 60)}`);

/** Hora actual em Maputo (UTC+2). */
function maputoNow() {
  const d = new Date(Date.now() + 2 * 3600 * 1000);
  return {
    today: d.toISOString().slice(0, 10),
    nowMin: d.getUTCHours() * 60 + d.getUTCMinutes(),
  };
}
const fmtDate = (iso: string) => iso.split("-").reverse().join("/");
const fmtPhone = (v: string) => {
  let d = v.replace(/\D/g, "");
  if (d.startsWith("258") && d.length > 9) d = d.slice(3);
  d = d.slice(0, 9);
  return [d.slice(0, 2), d.slice(2, 5), d.slice(5, 9)].filter(Boolean).join(" ");
};

/* ---------- ícone de mesa (o mesmo do design, usado em 3 sítios) ---------- */
function TableIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 10h14M7 10v9M17 10v9M12 10v4" />
      <path d="M3 10h18" />
      <path d="M4 4h3v4M20 4h-3v4" />
    </svg>
  );
}

/* ---------- campos ---------- */
const fieldCls =
  "h-10 w-full rounded-lg border border-gold-400/55 bg-ink-800/90 px-3 text-[12.5px] text-cream outline-none transition placeholder:text-cream/35 focus:border-gold-300 focus:ring-1 focus:ring-gold-300 aria-[invalid=true]:border-flame-400";

function Field({ id, label, icon, error, children, className = "" }: { id: string; label: string; icon: ReactNode; error?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-2 text-[11px] font-medium text-cream">
        <span className="text-gold-400">{icon}</span>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1 text-[10.5px] text-flame-300">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectWrap({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-400" />
    </div>
  );
}

/* ---------- secção ---------- */
export default function Reservas() {
  const [lang, setLang] = useMenuLang();
  const t = reservasUi[lang];

  const [clock, setClock] = useState({ today: "", nowMin: 0 });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [people, setPeople] = useState(2);
  const [dishes, setDishes] = useState<BookingItem[]>([]);
  const [customDish, setCustomDish] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuCat, setMenuCat] = useState<Category>("Aves");
  const [plansOpen, setPlansOpen] = useState(false);
  const [mapZone, setMapZone] = useState<TableZone>("interior");
  const [table, setTable] = useState<number | null>(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [done, setDone] = useState<Booking | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  /* relógio de Maputo + data por omissão (hoje) */
  useEffect(() => {
    const tick = () => setClock(maputoNow());
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (clock.today && !date) setDate(clock.today);
  }, [clock.today, date]);

  /* menu de escolha de pratos: bloqueia o scroll e fecha com Esc */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
    };
  }, [menuOpen]);

  /* reservas guardadas neste dispositivo */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        // compatibilidade com reservas antigas
        const parsed = JSON.parse(raw) as any[];
        setBookings(
          parsed.map((b) => {
            let normalizedDishes: BookingItem[] = [];
            if (Array.isArray(b.dishes)) {
              normalizedDishes = b.dishes.map((d: any) =>
                typeof d === "string" ? { name: d, quantity: 1 } : d
              );
            } else if (typeof b.dish === "string" && b.dish !== "Decidir no local") {
              normalizedDishes = [{ name: b.dish, quantity: 1 }];
            }
            return { ...b, dishes: normalizedDishes };
          })
        );
      }
    } catch {
      /* sem armazenamento disponível */
    }
  }, []);

  /* horários: no próprio dia, os que já passaram ficam desactivados */
  const slotDisabled = (s: string) => date === clock.today && toMin(s) <= clock.nowMin;
  const enabledSlots = slots.filter((s) => !slotDisabled(s));
  useEffect(() => {
    if (!date) return;
    if (time && slots.includes(time) && !slotDisabled(time)) return;
    setTime(enabledSlots.includes("19:00") ? "19:00" : enabledSlots[0] ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, clock.nowMin]);

  /* estado de cada mesa para a data/hora/nº de pessoas escolhidos */
  const reserved = useMemo(() => {
    const set = new Set<number>();
    if (!time) return set;
    for (const b of bookings) if (b.date === date && Math.abs(toMin(b.time) - toMin(time)) < stayMinutes) set.add(b.table);
    return set;
  }, [bookings, date, time]);

  const statuses = useMemo(() => {
    const map: Record<number, Status> = {};
    for (const t of tables) {
      map[t.id] =
        blockedTables.includes(t.id) || seatsFor(t) < people
          ? "unavailable"
          : reserved.has(t.id)
            ? "reserved"
            : "available";
    }
    return map;
  }, [reserved, people]);

  const statusOf = (id: number): Status => statuses[id] ?? "unavailable";

  const availableCount = tables.filter((t) => statusOf(t.id) === "available").length;

  /* se a mesa escolhida deixar de estar livre, passa para a primeira livre */
  useEffect(() => {
    if (table !== null && statusOf(table) === "available") return;
    const first = tables.find((t) => statusOf(t.id) === "available");
    setTable(first ? first.id : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reserved, people]);

  const pick = (id: number) => {
    if (statusOf(id) !== "available") return;
    setTable(id);
    setErrors((e) => ({ ...e, table: undefined }));
  };

  const toggleDish = (name: string) =>
    setDishes((prev) =>
      prev.some((d) => d.name === name)
        ? prev.filter((d) => d.name !== name)
        : [...prev, { name, quantity: 1 }]
    );

  const updateDishQty = (name: string, delta: number) => {
    setDishes((prev) =>
      prev
        .map((d) => (d.name === name ? { ...d, quantity: Math.max(0, d.quantity + delta) } : d))
        .filter((d) => d.quantity > 0)
    );
  };

  const addCustomDish = () => {
    const name = customDish.trim();
    if (!name) return;
    setDishes((prev) => {
      const existing = prev.find((d) => d.name.toLowerCase() === name.toLowerCase());
      if (existing) {
        return prev.map((d) =>
          d.name.toLowerCase() === name.toLowerCase() ? { ...d, quantity: d.quantity + 1 } : d
        );
      }
      return [...prev, { name, quantity: 1 }];
    });
    setCustomDish("");
  };

  const removeDish = (name: string) => setDishes((prev) => prev.filter((d) => d.name !== name));

  const validate = (): Errors => {
    const e: Errors = {};
    if (name.trim().length < 3) e.name = t.nameError;
    if (!/^8[2-7]\d{7}$/.test(phone.replace(/\D/g, ""))) e.phone = t.phoneError;
    if (!date || date < clock.today) e.date = t.dateError;
    if (!time) e.time = t.timeError;
    if (table === null || statusOf(table) !== "available") e.table = t.tableError;
    return e;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = (["name", "phone", "date", "time", "table"] as const).find((k) => e[k]);
      if (first) formRef.current?.querySelector<HTMLElement>(`#res-${first}`)?.focus();
      return;
    }
    const booking: Booking = { date, time, table: table as number, people, name: name.trim(), phone, dishes };
    const next = [...bookings, booking];
    setBookings(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      /* ignora */
    }
    setDone(booking);
    window.open(waReservasLink(waMessage(booking, lang)), "_blank", "noopener,noreferrer");
  };

  const reset = () => {
    setDone(null);
    setName("");
    setPhone("");
    setDishes([]);
    setCustomDish("");
  };

  const selected = table;

  return (
    <section
      id="reservas"
      className="relative scroll-mt-20 overflow-hidden border-t border-cream/10 bg-ink-900 bg-clean bg-cover bg-center py-14 lg:py-16"
    >
      {/* frango na brasa, canto superior direito (como no design) */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-[46%] w-full lg:h-[52%] lg:w-[64%]">
        <Image src="/images/bg/hero.webp" alt="" fill sizes="64vw" className="object-cover object-[75%_20%] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
      </div>

      <div className="container-x relative z-10">
        {/* título */}
        <div className="grid items-center gap-5 lg:grid-cols-[auto_1fr] lg:gap-8">
          <Reveal className="flex items-center gap-3 sm:gap-4">
            <TableIcon className="h-12 w-12 shrink-0 text-gold-400 sm:h-14 sm:w-14" />
            <h2 className="h-display text-[9.5vw] leading-[0.95] text-cream sm:text-[6vw] lg:text-[34px] xl:text-[40px]">
              {t.title1}
              <span className="slant mt-1 block text-[1.55em] leading-[0.9] text-gold-400">{t.title2}</span>
              <span className="mt-1 block text-[0.78em]">{t.title3}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:border-l lg:border-cream/20 lg:pl-8">
            <div className="flex flex-col items-start gap-4">
              <LangSwitch lang={lang} setLang={setLang} />
              <p className="max-w-[330px] text-[14px] leading-relaxed text-cream/90">
                {t.description}
              </p>
            </div>
            <span aria-hidden className="paint-r mt-3 block h-2 w-48 -rotate-2" />
          </Reveal>
        </div>

        {/* formulário + mapa */}
        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[0.96fr_1.04fr]">
          {/* ---- formulário ---- */}
          <Reveal>
            <div className="relative h-full rounded-[14px] border border-gold-400/70 bg-ink-900/85 p-5 backdrop-blur-sm sm:p-6">
              {done ? (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center" role="status">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gold-400 text-ink-900">
                    <Check className="h-7 w-7" strokeWidth={3} />
                  </span>
                  <h3 className="h-display mt-4 text-[26px] text-gold-400">{t.doneTitle}</h3>
                  <p className="mt-3 max-w-[340px] text-[13px] leading-relaxed text-cream/85">
                    {t.doneSub1
                      .replace("{table}", String(done.table))
                      .replace("{people}", String(done.people))
                      .replace("{pLabel}", done.people === 1 ? t.person.toLowerCase() : t.people.toLowerCase())
                      .replace("{date}", fmtDate(done.date))
                      .replace("{time}", done.time)}
                    {" "}
                    {done.dishes.length > 0
                      ? t.doneSub2.replace("{dishes}", done.dishes.map((d) => `${d.quantity}x ${tr(lang, d.name)}`).join(", "))
                      : ""}
                  </p>
                  <p className="mt-2 max-w-[340px] text-[12px] leading-relaxed text-cream/60">
                    {t.doneNote}
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <a href={waReservasLink(waMessage(done, lang))} target="_blank" rel="noopener noreferrer" className="btn btn-gold !px-6 !py-3 !text-[11px]">
                      {t.sendWa}
                    </a>
                    <button type="button" onClick={reset} className="btn btn-ghost !px-6 !py-3 !text-[11px]">
                      {t.newBooking}
                    </button>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={submit} noValidate className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                  <Field id="res-name" label={t.nameLabel} icon={<User className="h-4 w-4" />} error={errors.name}>
                    <input
                      id="res-name"
                      type="text"
                      autoComplete="name"
                      placeholder={t.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "res-name-err" : undefined}
                      className={fieldCls}
                    />
                  </Field>
                  <Field id="res-phone" label={t.phoneLabel} icon={<Phone className="h-4 w-4" />} error={errors.phone}>
                    <input
                      id="res-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel-national"
                      placeholder={t.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(fmtPhone(e.target.value))}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "res-phone-err" : undefined}
                      className={fieldCls}
                    />
                  </Field>

                  <Field id="res-date" label={t.dateLabel} icon={<CalendarDays className="h-4 w-4" />} error={errors.date}>
                    <input
                      id="res-date"
                      type="date"
                      min={clock.today || undefined}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      aria-invalid={!!errors.date}
                      aria-describedby={errors.date ? "res-date-err" : undefined}
                      className={`${fieldCls} [color-scheme:dark]`}
                    />
                  </Field>
                  <Field id="res-time" label={t.timeLabel} icon={<Clock className="h-4 w-4" />} error={errors.time}>
                    <SelectWrap>
                      <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        aria-invalid={!!errors.time}
                        aria-describedby={errors.time ? "res-time-err" : undefined}
                        className={`${fieldCls} appearance-none pr-9`}
                      >
                        {!time && <option value="">—</option>}
                        {slots.map((s) => (
                          <option key={s} value={s} disabled={slotDisabled(s)}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </SelectWrap>
                  </Field>

                  <Field id="res-people" label={t.peopleLabel} icon={<Users className="h-4 w-4" />}>
                    <SelectWrap>
                      <select id="res-people" value={people} onChange={(e) => setPeople(Number(e.target.value))} className={`${fieldCls} appearance-none pr-9`}>
                        {Array.from({ length: maxPeople }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? t.person : t.people}
                          </option>
                        ))}
                      </select>
                    </SelectWrap>
                  </Field>

                  <Field id="res-table" label={t.tableLabel} icon={<TableIcon className="h-4 w-4" />} error={errors.table}>
                    <SelectWrap>
                      <select
                        id="res-table"
                        value={table ?? ""}
                        onChange={(e) => pick(Number(e.target.value))}
                        aria-invalid={!!errors.table}
                        aria-describedby={errors.table ? "res-table-err" : undefined}
                        className={`${fieldCls} appearance-none pr-9`}
                      >
                        {table === null && <option value="">{t.noTables}</option>}
                        {(["interior", "explanada"] as const).map((z) => (
                          <optgroup key={z} label={lang === "en" ? (z === "interior" ? t.zoneInterior : t.zoneExplanada) : zoneConfig[z].name}>
                            {tables
                              .filter((t) => t.zone === z)
                              .slice()
                              .sort((a, b) => a.id - b.id)
                              .map((tb) => {
                                const st = statusOf(tb.id);
                                return (
                                  <option key={tb.id} value={tb.id} disabled={st !== "available"}>
                                    {t.tableLabel.split(" ")[0]} {tb.id}
                                    {st === "reserved" ? ` — ${t.tableReserved}` : st === "unavailable" ? ` — ${t.tableUnavailable}` : ""}
                                  </option>
                                );
                              })}
                          </optgroup>
                        ))}
                      </select>
                    </SelectWrap>
                  </Field>

                  <div className="sm:col-span-2">
                    <p className="mb-1.5 flex flex-wrap items-center gap-2 text-[11px] font-medium text-cream">
                      <span className="text-gold-400">
                        <Utensils className="h-4 w-4" />
                      </span>
                      {t.dishesLabel}
                      <span className="text-[10px] font-normal text-cream/40">
                        ({t.dishesSub.toLowerCase()})
                      </span>
                    </p>
                    <div className="rounded-lg border border-gold-400/55 bg-ink-800/90 p-3">
                      {dishes.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {dishes.map((item) => (
                            <span
                              key={item.name}
                              className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/50 bg-gold-400/15 py-1 pl-2.5 pr-1.5 text-[10.5px] text-gold-100"
                            >
                              <span className="font-bold text-gold-400">{item.quantity}x</span>
                              {tr(lang, item.name)}
                              <button
                                type="button"
                                onClick={() => removeDish(item.name)}
                                aria-label={`Remover ${tr(lang, item.name)}`}
                                className="grid h-4 w-4 place-items-center rounded-full text-gold-300 transition hover:bg-gold-400/25 hover:text-white"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[11px] leading-relaxed text-cream/40">
                          {t.menuEmptyOrder}.
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() => setMenuOpen(true)}
                        className="btn btn-gold mt-3 w-full !py-2.5 !text-[10.5px]"
                      >
                        <Utensils className="h-4 w-4" />
                        {dishes.length > 0 ? t.dishesBtn.replace("Selecionar", "Editar") : t.dishesBtn}
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 flex justify-center sm:col-span-2">
                    <button type="submit" className="btn btn-fire !px-9 !py-4 !text-[12px]">
                      <CalendarCheck className="h-5 w-5" />
                      {t.confirmBtn}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* ---- mapa das mesas ---- */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-[14px] border border-gold-400/70 bg-ink-900/85 p-4 backdrop-blur-sm sm:p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <div className="flex items-center gap-3">
                  <MapPinned className="h-8 w-8 text-gold-400" strokeWidth={1.6} />
                  <div>
                    <h3 className="h-display slant text-[22px] leading-none text-gold-400 sm:text-[26px]">{t.mapTitle}</h3>
                    <span aria-hidden className="paint-r mt-1 block h-1.5 w-40 -rotate-1" />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setPlansOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-ink-800/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-gold-300 transition hover:border-gold-400 hover:text-gold-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{t.viewFloorPlan}</span>
                  <span className="sm:hidden">{t.viewFloorPlan.replace("Ver planta", "Planta")}</span>
                </button>
              </div>

              <div className="grid items-start gap-3 sm:grid-cols-[1fr_auto]">
                <TableMap3D
                  tables={tables}
                  statuses={statuses}
                  selected={selected}
                  onSelect={pick}
                  onZoneChange={setMapZone}
                />

                <div className="grid gap-3 sm:w-[132px]">
                  <ul className="grid gap-2.5 rounded-[10px] border border-gold-400/30 bg-ink-800/80 p-3 text-[11px] text-cream sm:gap-3.5">
                    <li className="flex items-center gap-2.5">
                      <span className="h-4 w-4 shrink-0 rounded-full bg-gold-400" /> {t.available}
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="h-4 w-4 shrink-0 rounded-full bg-flame-400" /> {t.reserved}
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="h-4 w-4 shrink-0 rounded-full bg-zinc-500" /> {t.unavailable}
                    </li>
                  </ul>
                  <div className="rounded-[10px] border border-gold-400/30 bg-ink-800/80 p-2.5 text-center">
                    <p className="text-[13px] font-extrabold text-gold-400">{selected ? `${t.tableLabel.split(" ")[0]} ${selected}` : t.noTableSelected}</p>
                    <div className="relative mt-2 aspect-[4/3] overflow-hidden rounded-md border border-gold-400/30 sm:aspect-[1/1]">
                      <Image
                        src="/images/interior.webp"
                        alt={selected ? `Ambiente junto à mesa ${selected}` : "Sala do restaurante"}
                        fill
                        sizes="132px"
                        className="object-cover object-[62%_80%] photo-grade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {plansOpen && (
          <FloorPlanModal initialZone={mapZone} onClose={() => setPlansOpen(false)} />
        )}

        {/* faixa informativa */}
        <Reveal delay={0.1}>
          <ul className="mx-auto mt-8 grid max-w-[1000px] items-center gap-6 text-center sm:grid-cols-3 sm:gap-0 sm:text-left">
            <li className="flex items-center justify-center gap-4 sm:px-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-gold-400 text-gold-400">
                <Clock className="h-7 w-7" />
              </span>
              <div>
                <p className="text-[12px] text-cream/90">{t.bookingHours}</p>
                <p className="font-display text-[22px] leading-tight tracking-wide text-gold-400">10:00 — 22:00</p>
              </div>
            </li>
            <li className="flex items-center justify-center gap-4 sm:border-x sm:border-cream/15 sm:px-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-gold-400 text-gold-400">
                <TableIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="text-[14px] font-bold text-cream">
                  {availableCount} {availableCount === 1 ? t.tableAvailable : t.tablesAvailable}
                </p>
                <p className="text-[11px] text-cream/70">{t.capacityNote}</p>
              </div>
            </li>
            <li className="flex items-center justify-center gap-4 sm:px-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center text-gold-400">
                <Soup className="h-10 w-10" strokeWidth={1.5} />
              </span>
              <p className="max-w-[230px] text-[12.5px] leading-snug text-cream/90">
                {t.preOrderNote}
              </p>
            </li>
          </ul>
          <p className="mt-5 text-center text-[11px] text-cream/50">
            {t.phoneBooking}{" "}
            <a href={telHref} className="font-semibold text-gold-300 hover:text-gold-200">
              84 672 4350
            </a>
          </p>
        </Reveal>
      </div>

      {/* ---- tela do menu para escolher os pratos ---- */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[150] flex flex-col bg-ink-900/97 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={t.menuModalLabel}
        >
          <div className="border-b border-gold-400/20 bg-ink-900/95">
            <div className="container-x flex flex-wrap items-center justify-between gap-3 py-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-400/40 text-gold-400">
                  <Utensils className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-gold-400/80">{t.menuModalKicker}</p>
                  <h2 className="h-display text-[26px] leading-none text-cream sm:text-[30px]">{t.menuTitle}</h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="btn btn-ghost !px-5 !py-2.5 !text-[10px]"
              >
                <ArrowLeft className="h-4 w-4" /> {t.back}
              </button>
            </div>

            <div className="container-x flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setMenuCat(c)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition ${
                    menuCat === c
                      ? "border-gold-400/70 bg-gold-400/15 text-gold-200"
                      : "border-cream/12 text-cream/50 hover:border-cream/25 hover:text-cream/80"
                  }`}
                >
                  {lang === "en" ? categoryEn[c] : c}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain">
            <div className="container-x py-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {menuBook[menuCat].map((l) => {
                  const item = dishes.find((d) => d.name === l.name);
                  const on = !!item;
                  const nameTr = tr(lang, l.name);
                  const noteTr = l.note ? tr(lang, l.note) : "";
                  return (
                    <div
                      key={l.name}
                      className={`flex items-center gap-3 rounded-xl border p-3 transition ${
                        on ? "border-gold-400/60 bg-gold-400/10" : "border-cream/10 bg-ink-800/60"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-[12.5px] leading-snug text-cream">{nameTr}</p>
                        {l.note && (
                          <p className="mt-0.5 text-[9.5px] uppercase tracking-[0.14em] text-cream/35">{noteTr}</p>
                        )}
                      </div>
                      {l.price && (
                        <span className="shrink-0 font-display text-[12px] text-gold-300">{l.price}</span>
                      )}

                      {on ? (
                        <div className="flex items-center gap-2 rounded-full border border-gold-400/50 bg-ink-900/50 p-1">
                          <button
                            type="button"
                            onClick={() => updateDishQty(l.name, -1)}
                            className="grid h-6 w-6 place-items-center rounded-full text-gold-400 transition hover:bg-gold-400/20"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-[1.2rem] text-center text-[11px] font-bold text-cream">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateDishQty(l.name, 1)}
                            className="grid h-6 w-6 place-items-center rounded-full text-gold-400 transition hover:bg-gold-400/20"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => toggleDish(l.name)}
                          className="inline-flex shrink-0 items-center gap-1 rounded-full border border-gold-400/40 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-gold-300 transition hover:bg-gold-400/15"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          {t.menuAddCustom}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border border-cream/10 bg-ink-800/60 p-4">
                <p className="text-[11px] text-cream/70">{t.menuSearchPlaceholder.replace("Pesquisar prato...", "Não encontrou o prato que quer?")}</p>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    value={customDish}
                    onChange={(e) => setCustomDish(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addCustomDish();
                      }
                    }}
                    placeholder={t.menuSearchPlaceholder.replace("Pesquisar prato...", "Escreva o nome do prato…")}
                    aria-label={t.menuModalLabel.replace("escolher pratos", "adicionar outro prato")}
                    className={`${fieldCls} flex-1`}
                  />
                  <button
                    type="button"
                    onClick={addCustomDish}
                    disabled={!customDish.trim()}
                    className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-gold-400/60 bg-gold-400/10 px-4 text-[10.5px] font-bold uppercase tracking-[0.12em] text-gold-200 transition hover:bg-gold-400/20 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Plus className="h-3.5 w-3.5" /> {t.menuAddCustom} à reserva
                  </button>
                </div>
              </div>

              {dishes.length > 0 && (
                <div className="mt-6">
                  <p className="text-[9.5px] uppercase tracking-[0.24em] text-gold-400/80">
                    {t.menuSelected} ({dishes.reduce((acc, d) => acc + d.quantity, 0)})
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {dishes.map((item) => (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/50 bg-gold-400/15 py-1 pl-2.5 pr-1.5 text-[10.5px] text-gold-100"
                      >
                        <span className="font-bold text-gold-400">{item.quantity}x</span>
                        {tr(lang, item.name)}
                        <button
                          type="button"
                          onClick={() => removeDish(item.name)}
                          aria-label={`Remover ${tr(lang, item.name)}`}
                          className="grid h-4 w-4 place-items-center rounded-full text-gold-300 transition hover:bg-gold-400/25 hover:text-white"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gold-400/20 bg-ink-900/95">
            <div className="container-x flex flex-wrap items-center justify-between gap-3 py-3">
              <p className="text-[11px] text-cream/60">
                {dishes.length === 0
                  ? t.menuEmptyOrder + " — " + t.dishesSub.toLowerCase() + "."
                  : `${dishes.length} ${dishes.length === 1 ? "prato escolhido" : "pratos escolhidos"} para a reserva.`}
              </p>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="btn btn-gold !px-6 !py-3 !text-[10.5px]"
              >
                {t.confirmBtn.replace("Confirmar Reserva", "Voltar ao formulário")} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/** Agrupa os pratos escolhidos pelas categorias da carta. */
function groupDishes(selected: BookingItem[]) {
  const used = new Set<string>();
  const groups: { cat: string; emoji: string; items: BookingItem[] }[] = [];

  for (const cat of categories) {
    const items = selected.filter(
      (s) => !used.has(s.name) && menuBook[cat].some((l) => l.name === s.name)
    );
    items.forEach((item) => used.add(item.name));
    if (items.length > 0) groups.push({ cat, emoji: categoryEmojis[cat], items });
  }

  const others = selected.filter((s) => !used.has(s.name));
  if (others.length > 0) groups.push({ cat: "Outros", emoji: categoryEmojis.Outros, items: others });

  return groups;
}

function waMessage(b: Booking, lang: "pt" | "en" = "pt") {
  const isEn = lang === "en";
  const lines = [
    isEn ? "Hello Piri Piri! I would like to book a table." : "Olá Piri Piri! Gostaria de reservar uma mesa.",
    "",
    `${isEn ? "Name" : "Nome"}: ${b.name}`,
    `${isEn ? "Phone" : "Telefone"}: ${b.phone}`,
    `${isEn ? "Date" : "Data"}: ${fmtDate(b.date)}`,
    `${isEn ? "Time" : "Horário"}: ${b.time}`,
    `${isEn ? "People" : "Pessoas"}: ${b.people}`,
    `${isEn ? "Table" : "Mesa"}: ${b.table}`,
  ];

  const groups = groupDishes(b.dishes);
  if (groups.length === 0) {
    lines.push(`${isEn ? "Dishes" : "Pratos"}: ${isEn ? "To decide on site" : "A decidir no local"}`);
  } else {
    lines.push(`${isEn ? "Dishes" : "Pratos"}:`);
    for (const g of groups) {
      const itemsStr = g.items.map((i) => `${i.quantity}x ${isEn ? tr("en", i.name) : i.name}`).join(", ");
      const catLabel = isEn ? categoryEn[g.cat as Category] ?? g.cat : g.cat;
      lines.push(`${g.emoji} ${catLabel}: ${itemsStr}`);
    }
  }

  lines.push("", isEn ? "I look forward to your booking confirmation." : "Aguardo a confirmação da reserva.");
  return lines.join("\n");
}
