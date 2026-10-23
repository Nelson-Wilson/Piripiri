"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import { gallery } from "@/data/menu";
import { mapsHref } from "@/lib/site";

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const [all, setAll] = useState(false);
  const strip = [1, 2, 3, 5]; // frango, prato, sala, frango (índices de data.gallery)

  const close = useCallback(() => setIdx(null), []);
  const next = useCallback(() => setIdx((i) => (i === null ? i : (i + 1) % gallery.length)), []);
  const prev = useCallback(
    () => setIdx((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [idx, close, next, prev]);

  return (
    <section id="galeria" className="relative overflow-hidden bg-ink-900 bg-[url('/images/bg/texture.webp')] bg-cover bg-[position:center_30%] py-14 md:py-16">
      <div className="container-x relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[3fr_1fr]">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {strip.map((gi) => (
              <button key={gi} onClick={() => setIdx(gi)} aria-label={`Ampliar: ${gallery[gi].alt}`} data-cursor="grow"
                className="group relative aspect-[4/3.2] overflow-hidden rounded-[10px] border border-gold-400/25">
                <Image src={gallery[gi].src} alt={gallery[gi].alt} fill sizes="(max-width: 1024px) 45vw, 260px" className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.08]" />
              </button>
            ))}
          </div>
          <Reveal>
            <span className="slant font-script text-[48px] font-bold leading-none text-gold-400">Galeria</span>
            <p className="mt-2 max-w-[220px] text-[13px] leading-relaxed text-cream/75">Momentos que mostram o nosso sabor.</p>
            <button onClick={() => setAll((v) => !v)} className="btn btn-ghost mt-5 !border-gold-400/60 !px-5 !py-2.5 !text-[10.5px] !text-gold-300">
              {all ? "Ver Menos" : "Ver Mais Fotos"}
            </button>
            <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cream/60 hover:text-gold-300">
              <Navigation className="h-3.5 w-3.5 text-gold-400" /> Visitar o restaurante
            </a>
          </Reveal>
        </div>

        <div className={`${all ? "" : "hidden"} mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4`}>
          {gallery.map((g, i) => (
            <Reveal
              key={g.src}
              delay={0.03 * (i % 4)}
              className={g.wide ? "col-span-2" : ""}
            >
              <button
                onClick={() => setIdx(i)}
                className={`group relative block w-full overflow-hidden rounded-[16px] border border-cream/10 ${
                  g.wide ? "aspect-[16/9.4]" : "aspect-[3/4]"
                }`}
                aria-label={`Ampliar: ${g.alt}`}
                data-cursor="grow"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 46vw, 290px"
                  className="object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.1]"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-left text-[10px] leading-snug text-cream/75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.alt}
                </span>
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-gold-400/40" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            className="fixed inset-0 z-[160] flex items-center justify-center bg-ink-900/95 p-4 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Anterior"
              className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-gold-400 hover:text-gold-300 md:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Seguinte"
              className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-gold-400 hover:text-gold-300 md:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[820px]"
            >
              <Image
                src={gallery[idx].src}
                alt={gallery[idx].alt}
                width={gallery[idx].w}
                height={gallery[idx].h}
                className="max-h-[80vh] w-full rounded-xl object-contain"
                sizes="90vw"
              />
              <p className="mt-3 text-center text-[11px] tracking-wide text-cream/55">{gallery[idx].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
