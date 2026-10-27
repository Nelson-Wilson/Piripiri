"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, Navigation, Send, Check } from "lucide-react";
import Reveal from "./Reveal";
import { telHref, mapsHref, coordinates, cn } from "@/lib/site";
import { facts } from "@/data/content";

const bbox = [coordinates.lng - 0.006, coordinates.lat - 0.004, coordinates.lng + 0.006, coordinates.lat + 0.004].join("%2C");
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${coordinates.lat}%2C${coordinates.lng}`;

/** Índice 0 = domingo (igual a Date.getDay()). */
const hours = [
  { day: "domingo", time: "09:00–00:00", open: 9, close: 24 },
  { day: "segunda-feira", time: "09:00–00:00", open: 9, close: 24 },
  { day: "terça-feira", time: "09:00–00:00", open: 9, close: 24 },
  { day: "quarta-feira", time: "09:00–00:00", open: 9, close: 24 },
  { day: "quinta-feira", time: "09:00–00:00", open: 9, close: 24 },
  { day: "sexta-feira", time: "09:00–02:00", open: 9, close: 26 },
  { day: "sábado", time: "09:00–02:00", open: 9, close: 26 },
];

/** Hora actual em Maputo (UTC+2). Devolve o dia da semana (0–6) e horas decimais. */
function maputoNow() {
  const d = new Date(Date.now() + 2 * 3600 * 1000);
  return { dow: d.getUTCDay(), h: d.getUTCHours() + d.getUTCMinutes() / 60 };
}

const isOpen = (dow: number, h: number) => {
  if (h >= hours[dow].open && h < Math.min(hours[dow].close, 24)) return true;
  const prev = hours[(dow + 6) % 7];
  return prev.close > 24 && h < prev.close - 24;
};

const Dot = ({ children }: { children: React.ReactNode }) => (
  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flame-500 text-cream">{children}</span>
);

const WA_NUMBER = "258846724350";

/** Formulário "Faça o seu Pedido": não há servidor (site estático), por isso o pedido segue por WhatsApp para o restaurante. */
function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) next.name = "Indique o seu nome.";
    if (phone.replace(/\D/g, "").length < 9) next.phone = "Telefone inválido.";
    setErrors(next);
    setSent(false);
    if (next.name || next.phone) return;
    const text =
      "Olá Piri Piri, gostaria de fazer um pedido." +
      `\nNome: ${name.trim()}` +
      `\nTelefone: ${phone.trim()}` +
      (msg.trim() ? `\nMensagem: ${msg.trim()}` : "");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setName("");
    setPhone("");
    setMsg("");
  };

  const field =
    "w-full rounded-[8px] border bg-ink-900/60 px-3 py-2.5 text-[11.5px] text-cream placeholder:text-cream/45 outline-none transition-colors focus:border-gold-400";

  return (
    <form
      onSubmit={submit}
      noValidate
      aria-label="Faça o seu pedido"
      className="rounded-[12px] border border-cream/15 bg-ink-900/60 p-3.5 backdrop-blur-md"
    >
      <h3 className="mb-2.5 font-sans text-[13.5px] font-extrabold text-cream">Faça o seu Pedido</h3>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="pp-nome" className="sr-only">Nome</label>
          <input
            id="pp-nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={cn(field, errors.name ? "border-flame-400" : "border-cream/15")}
          />
          {errors.name && <p className="mt-1 text-[10px] text-flame-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="pp-tel" className="sr-only">Telefone</label>
          <input
            id="pp-tel"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className={cn(field, errors.phone ? "border-flame-400" : "border-cream/15")}
          />
          {errors.phone && <p className="mt-1 text-[10px] text-flame-300">{errors.phone}</p>}
        </div>
      </div>
      <label htmlFor="pp-msg" className="sr-only">Mensagem (opcional)</label>
      <textarea
        id="pp-msg"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        rows={2}
        placeholder="Mensagem (opcional)"
        className={cn(field, "mt-2 resize-none border-cream/15")}
      />
      <button
        type="submit"
        data-cursor="grow"
        className="btn btn-fire mt-2.5 w-full !px-4 !py-2.5 !text-[12px] !tracking-[0.1em]"
      >
        Enviar Pedido <Send className="h-3.5 w-3.5" />
      </button>
      <p role="status" aria-live="polite" className={cn("mt-2 flex items-start gap-1.5 text-[10px] leading-snug", sent ? "text-green-400" : "text-cream/45")}>
        {sent ? (
          <>
            <Check className="mt-px h-3 w-3 shrink-0" />
            A abrir o WhatsApp com o seu pedido. Só fica confirmado após resposta do restaurante.
          </>
        ) : (
          "O pedido segue por WhatsApp para o restaurante."
        )}
      </p>
    </form>
  );
}

export default function Contact() {
  const [today, setToday] = useState(-1);
  const [openNow, setOpenNow] = useState<boolean | null>(null);
  useEffect(() => {
    const tick = () => {
      const { dow, h } = maputoNow();
      setToday(dow);
      setOpenNow(isOpen(dow, h));
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <section
      id="contactos"
      className="relative overflow-hidden border-t border-cream/10 bg-ink-900 bg-[url('/images/bg/clean.webp')] bg-cover bg-center py-7"
    >
      <div aria-hidden className="absolute inset-0 bg-ink-900/80" />
      <div className="container-x relative z-10 grid items-center gap-6 lg:grid-cols-[0.95fr_0.85fr_1.15fr_1.05fr_0.9fr]">
        <Reveal className="flex items-center gap-3">
          <span className="hidden text-flame-400 sm:block"><MapPin className="h-7 w-7 fill-flame-500 text-flame-500" /></span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-flame-400">Contacte-nos</p>
            <h2 className="font-sans text-[20px] font-extrabold leading-tight text-cream">Estamos sempre à sua disposição</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
          <Dot><MapPin className="h-4 w-4" /></Dot>
          <div className="text-[12px] leading-snug">
            <p className="font-semibold text-cream">Av. 24 de Julho</p>
            <p className="text-cream/60">Maputo, Moçambique</p>
            <p className="text-cream/40">{facts.plusCode}</p>
          </div>
          </div>
          <div className="flex items-center gap-3">
          <Dot><Phone className="h-4 w-4" /></Dot>
          <div className="text-[12px] leading-snug">
            <a href={telHref} className="font-semibold text-cream hover:text-gold-300">84 672 4350</a>
            <p className="text-cream/60">(Chamadas / WhatsApp)</p>
          </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <OrderForm />
        </Reveal>

        <Reveal delay={0.15} className="flex items-center gap-3">
          <Dot><Clock className="h-4 w-4" /></Dot>
          <div className="text-[12px] leading-snug">
            <p className="font-semibold text-cream">
              {openNow === null ? "Horário" : openNow ? <span className="text-green-400">Aberto agora</span> : <span className="text-flame-400">Fechado agora</span>}
            </p>
            <ul className="mt-1 space-y-px text-[10.5px] text-cream/60">
              {hours.map((h, i) => (
                <li key={h.day} className={`flex justify-between gap-3 whitespace-nowrap ${i === today ? "font-semibold text-cream" : ""}`}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="group relative h-[112px] overflow-hidden rounded-[10px] border border-cream/15">
            <iframe
              title="Mapa — Restaurante Píri Píri, Av. 24 de Julho, Maputo"
              src={mapSrc}
              className="absolute inset-0 h-full w-full opacity-75 grayscale-[0.5] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-1.5 right-1.5 flex items-center gap-1.5 rounded-full bg-ink-900/90 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-gold-300"
            >
              Como chegar <Navigation className="h-3 w-3" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
