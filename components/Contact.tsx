"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import { telHref, mapsHref, coordinates } from "@/lib/site";
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
      className="relative overflow-hidden border-t border-cream/10 bg-ink-900 py-10 md:py-12"
    >
      <div aria-hidden className="absolute inset-0 bg-[#c8102e]/75" />
      <div className="container-x relative z-10 grid items-start gap-6 lg:grid-cols-[0.9fr_1fr_1.35fr]">
        <Reveal className="flex items-center gap-3">
          <span className="hidden text-flame-400 sm:block"><MapPin className="h-7 w-7 fill-flame-500 text-flame-500" /></span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Contacte-nos</p>
            <h2 className="font-sans text-[20px] font-extrabold leading-tight text-cream">Estamos sempre à sua disposição</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="grid content-start gap-5">
          <div className="flex items-start gap-3">
            <Dot><MapPin className="h-4 w-4" /></Dot>
            <div className="text-[12px] leading-snug">
              <p className="font-semibold text-cream">Av. 24 de Julho</p>
              <p className="text-cream/75">Maputo, Moçambique</p>
              <p className="text-cream/65">{facts.plusCode}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Dot><Phone className="h-4 w-4" /></Dot>
            <div className="text-[12px] leading-snug">
              <a href={telHref} className="font-semibold text-cream hover:text-gold-300">84 672 4350</a>
              <p className="text-cream/75">(Chamadas / WhatsApp)</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex items-start gap-3 lg:col-span-2">
            <Dot><Clock className="h-4 w-4" /></Dot>
            <div className="min-w-0 flex-1 text-[12px] leading-snug">
              <p className="font-semibold text-cream">
                {openNow === null ? "Horário" : openNow ? <span className="text-gold-400">Aberto agora</span> : <span className="text-gold-400">Fechado agora</span>}
              </p>
              <ul className="mt-1 grid gap-x-8 gap-y-px text-[10.5px] text-cream/75 sm:grid-cols-2">
                {hours.map((h, i) => (
                  <li key={h.day} className={`flex justify-between gap-3 ${i === today ? "font-semibold text-cream" : ""}`}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-start-3 lg:row-start-1 lg:row-span-2">
            <div className="group relative h-[250px] overflow-hidden rounded-[10px] border border-cream/25 lg:h-full lg:min-h-[250px]">
              <iframe
                title="Mapa — Restaurante Píri Píri, Av. 24 de Julho, Maputo"
                src={mapSrc}
                className="absolute inset-0 h-full w-full opacity-100 contrast-[1.08]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-ink-900/95 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-gold-300 shadow-lg"
              >
                Como chegar <Navigation className="h-3 w-3" />
              </a>
            </div>
        </Reveal>
      </div>
    </section>
  );
}
