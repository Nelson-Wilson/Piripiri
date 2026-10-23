"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { categories, dishes, menuBook } from "@/data/menu";
import { categoryEn, tr, ui } from "@/data/menu-en";
import { waHref } from "@/lib/site";
import { useMenuLang, LangSwitch } from "@/components/useMenuLang";

export default function MenuPage() {
  const [lang, setLang] = useMenuLang();
  const t = ui[lang];
  return (
    <main className="min-h-screen bg-ink-900 bg-[url('/images/bg/clean.webp')] bg-cover bg-fixed bg-center py-8 text-cream">
      <div className="absolute inset-0 -z-0 bg-ink-900/80" aria-hidden />
      <div className="container-x relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70 hover:text-gold-300">
            <ArrowLeft className="h-4 w-4" /> {t.back}
          </a>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>

        <h1 className="h-display mt-8 text-[13vw] leading-[0.95] sm:text-[9vw] lg:text-[56px]">{t.pageTitle}</h1>
        <p className="mt-2 text-[13px] text-cream/55">{t.pageSub}</p>

        <div className="mt-10 space-y-12">
          {categories.map((c) => {
            const cards = dishes.filter((d) => d.cat === c);
            return (
              <section key={c}>
                <h2 className="font-display text-[26px] uppercase text-gold-400">{lang === "en" ? categoryEn[c] : c}</h2>
                {cards.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {cards.map((d) => (
                      <article key={d.name} className="overflow-hidden rounded-[10px] border border-gold-400/25 bg-ink-900">
                        {d.img && (
                          <div className="relative aspect-[4/3]">
                            <Image src={d.img} alt={tr(lang, d.name)} fill sizes="(max-width:640px) 45vw, 220px" className="object-cover" />
                          </div>
                        )}
                        <div className="p-3">
                          <h3 className="font-display text-[14px] uppercase leading-tight tracking-wide">{tr(lang, d.name)}</h3>
                          <p className="mt-1 text-[11.5px] leading-snug text-cream/55">{tr(lang, d.desc)}</p>
                          <p className="mt-2 font-display text-[16px] text-gold-400">{d.price ?? ""}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
                <ul className="mt-5 grid gap-x-10 gap-y-2.5 rounded-[14px] border border-cream/10 bg-ink-900/85 p-5 sm:grid-cols-2">
                  {menuBook[c].map((l) => (
                    <li key={l.name} className="flex items-baseline gap-3">
                      <span className="text-[12.5px] text-cream/75">{tr(lang, l.name)}</span>
                      {l.note && <span className="text-[10px] uppercase tracking-[0.14em] text-cream/30">{tr(lang, l.note)}</span>}
                      <span className="mx-0.5 h-px flex-1 border-b border-dotted border-cream/15" />
                      <span className={`shrink-0 font-display text-[12.5px] tracking-wide ${l.price ? "text-gold-300" : "text-cream/25"}`}>
                        {l.price ?? tr(lang, "consultar")}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <p className="mt-10 text-[10.5px] leading-relaxed text-cream/35">{t.note}</p>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-5">
          {t.orderBtn}
        </a>
      </div>
    </main>
  );
}
