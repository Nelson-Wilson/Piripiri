"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Flame } from "lucide-react";
import Reveal from "./Reveal";
import { categories, dishes, menuBook, type Category } from "@/data/menu";
import { waHref } from "@/lib/site";
import { categoryEn, tr, ui } from "@/data/menu-en";
import { useMenuLang, LangSwitch } from "./useMenuLang";

export default function MenuSection() {
  const [active, setActive] = useState<Category>("Carnes");
  const [lang, setLang] = useMenuLang();
  const t = ui[lang];
  const cards = useMemo(() => dishes.filter((d) => d.cat === active && d.img), [active]);
  const book = menuBook[active];
  const rail = useRef<HTMLDivElement>(null);
  const scrollRail = (d: number) => rail.current?.scrollBy({ left: d * 280, behavior: "smooth" });

  return (
    <section id="menu" className="relative overflow-hidden bg-ink-900 bg-[url('/images/bg/clean.webp')] bg-cover bg-center py-14 md:py-16">
      <div aria-hidden className="pointer-events-none absolute -bottom-6 -left-4 h-[300px] w-[460px] bg-[url('/images/bg/embers.webp')] bg-cover bg-left-bottom opacity-90 [mask-image:linear-gradient(90deg,#000_55%,transparent)]" />
      <div className="container-x relative z-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="slant font-script text-[44px] font-bold leading-none text-gold-400">{t.kicker}</span>
            <h2 className="h-display text-[13vw] leading-[0.95] text-cream sm:text-[9vw] lg:text-[56px]">{t.title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-start gap-3 md:items-end">
            <LangSwitch lang={lang} setLang={setLang} />
            <p className="max-w-[300px] text-[12.5px] leading-relaxed text-cream/50 md:text-right">
              {t.sub}
            </p>
          </Reveal>
        </div>

        {/* tabs */}
        <div className="mt-9 -mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-full border px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  active === c
                    ? "border-gold-400/60 text-gold-200"
                    : "border-cream/12 text-cream/45 hover:border-cream/25 hover:text-cream/75"
                }`}
              >
                {active === c && (
                  <motion.span
                    layoutId="tabGlow"
                    className="absolute inset-0 -z-10 rounded-full bg-gold-400/10 shadow-[0_0_30px_-8px_rgba(232,163,61,0.7)]"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                {lang === "en" ? categoryEn[c] : c}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-8">
          <button onClick={() => scrollRail(-1)} aria-label={t.prev} className="absolute -left-3 top-1/3 z-20 hidden h-10 w-10 place-items-center rounded-full bg-flame-500 text-cream shadow-lg md:grid"><ChevronLeft className="h-5 w-5" /></button>
          <button onClick={() => scrollRail(1)} aria-label={t.next} className="absolute -right-3 top-1/3 z-20 hidden h-10 w-10 place-items-center rounded-full bg-flame-500 text-cream shadow-lg md:grid"><ChevronRight className="h-5 w-5" /></button>
        <div ref={rail} className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <AnimatePresence mode="popLayout">
            {cards.map((d, i) => (
              <motion.article
                key={d.name}
                layout
                initial={{ opacity: 0, y: 26, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.55, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex w-[200px] shrink-0 snap-start flex-col overflow-hidden rounded-[10px] border border-gold-400/25 bg-ink-900 sm:w-[216px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.img as string}
                    alt={tr(lang, d.name)}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 300px"
                    className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.08]"
                    style={{ objectPosition: d.pos }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/25 to-transparent" />
                  {d.badge && (
                    <span className="absolute left-3 top-3 rounded-full border border-gold-400/30 bg-ink-900/70 px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.16em] text-gold-200 backdrop-blur-md">
                      {tr(lang, d.badge)}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-3">
                  <h3 className="font-display text-[14px] uppercase leading-tight tracking-wide text-cream">{tr(lang, d.name)}</h3>
                  <p className={`mt-1 flex-1 font-display text-[19px] leading-none ${d.price ? "text-gold-400" : "text-cream/35 !text-[11px] tracking-[0.14em] uppercase"}`}>
                    {d.price ?? tr(lang, "Preço sob consulta")}
                  </p>
                  <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-3 !rounded-full !px-3 !py-2 !text-[11px]">
                    {t.order}
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
        </div>

        {/* carta da categoria */}
        <Reveal delay={0.05}>
          <div className="mt-6 rounded-[14px] border border-cream/10 bg-ink-900/85 p-5 backdrop-blur-sm sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[9.5px] uppercase tracking-[0.3em] text-gold-400/80">{t.book} · {lang === "en" ? categoryEn[active] : active}</p>
              <span className="hidden text-[9px] uppercase tracking-[0.24em] text-cream/25 sm:block">
                {t.bilingual}
              </span>
            </div>
            <ul className="mt-4 grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
              {book.map((l) => (
                <li key={l.name} className="flex items-baseline gap-3">
                  <span className="text-[12.5px] text-cream/75">{tr(lang, l.name)}</span>
                  {l.note && (
                    <span className="text-[10px] uppercase tracking-[0.14em] text-cream/30">{tr(lang, l.note ?? "")}</span>
                  )}
                  <span className="mx-0.5 h-px flex-1 border-b border-dotted border-cream/15" />
                  <span className={`shrink-0 font-display text-[12.5px] tracking-wide ${l.price ? "text-gold-300" : "text-cream/25"}`}>
                    {l.price ?? tr(lang, "consultar")}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[10px] leading-relaxed text-cream/30">
              {t.note}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-[14px] border border-cream/10 bg-ink-900/85 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-500/25">
                <Flame className="h-4 w-4 text-gold-400" />
              </span>
              <p className="text-[11.5px] leading-snug text-cream/55">
                {t.avg} <span className="text-cream">800 – 1 400 MZN</span> · {t.dayDish}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-gold !py-2.5 !text-[10px]">
                {t.orderBtn}
              </a>
              <a href="/menu" className="btn btn-ghost !py-2.5 !text-[10px]">
                {t.full}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#galeria" className="btn btn-ghost !py-2.5 !text-[10px]">
                {t.photos}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
