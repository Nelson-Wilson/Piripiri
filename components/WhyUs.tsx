"use client";

import { Flame, Star, ChefHat } from "lucide-react";
import Reveal from "./Reveal";
import Delivery from "./Delivery";

const items = [
  { icon: Flame, title: "Receitas Tradicionais", desc: "O verdadeiro sabor de sempre." },
  { icon: Star, title: "Qualidade Garantida", desc: "Ingredientes frescos e selecionados." },
  { icon: ChefHat, title: "Décadas de Experiência", desc: "Tradição que se sente em cada prato." },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden border-y border-cream/10 bg-ink-900 bg-[url('/images/bg/red-strokes.webp')] bg-cover bg-center py-9 md:py-10">
      <div className="container-x relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_2.2fr_1.35fr]">
        <Reveal>
          <p className="slant font-script text-[34px] font-bold leading-[0.95] text-cream">
            Porque escolher
            <br />
            <span className="text-flame-400">o Piri Piri?</span>
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-cream/10">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={0.06 * i} className="text-center sm:px-4">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-gold-400 bg-ink-900">
                  <Icon className="h-6 w-6 text-gold-400" strokeWidth={1.6} />
                </span>
                <h3 className="mt-3 font-display text-[14px] uppercase tracking-wide text-cream">{it.title}</h3>
                <p className="mt-1 text-[11.5px] leading-snug text-cream/60">{it.desc}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <Delivery />
        </Reveal>
      </div>
    </section>
  );
}
