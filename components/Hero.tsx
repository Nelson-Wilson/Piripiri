"use client";

import { ArrowRight, Phone, Zap, ShoppingBag, Bike } from "lucide-react";
import { telHref } from "@/lib/site";

const perks = [
  { icon: Zap, label: "Atendimento\nRápido" },
  { icon: ShoppingBag, label: "Take Away\nDisponível" },
  { icon: Bike, label: "Entrega ao Domicílio\nem Maputo" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-ink-900 bg-[url('/images/bg/hero-mobile.webp')] bg-cover bg-[position:60%_0] bg-no-repeat lg:bg-[url('/images/bg/hero.webp')] lg:bg-[position:right_40%]">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink-900/40 lg:via-transparent" />

      <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-end pb-14 pt-28 lg:min-h-[max(620px,43vw)] lg:justify-center lg:pb-10 lg:pt-24">
        <div className="max-w-[600px]">
          <p className="hero-anim text-[11px] font-semibold uppercase tracking-[0.5em] text-gold-400" style={{ animationDelay: "0.05s" }}>
            Restaurante Piri Piri
          </p>

          <h1 className="h-display mt-4 text-[14vw] leading-[0.92] text-cream sm:text-[10vw] lg:text-[5.4vw] xl:text-[78px]">
            <span className="hero-anim block" style={{ animationDelay: "0.15s" }}>O verdadeiro sabor</span>
            <span className="hero-anim slant mt-1 block origin-left text-gold-400" style={{ animationDelay: "0.25s" }}>
              do frango na brasa
            </span>
          </h1>

          <p className="hero-anim mt-6 max-w-[430px] text-[14px] leading-relaxed text-cream/80" style={{ animationDelay: "0.38s" }}>
            Somos a tradição do bom frango na brasa há décadas, e servimos os melhores camarões
            grelhados da praça.
          </p>

          <div className="hero-anim mt-7 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.48s" }}>
            <a href="#menu" className="btn btn-gold group">
              Ver Menu
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={telHref} className="btn btn-redline">
              <Phone className="h-4 w-4 text-gold-400" />
              Pedir Agora
            </a>
          </div>

          <ul className="hero-anim mt-9 flex flex-wrap gap-x-7 gap-y-4" style={{ animationDelay: "0.6s" }}>
            {perks.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon className="h-7 w-7 shrink-0 text-gold-400" strokeWidth={1.4} />
                <span className="whitespace-pre-line text-[11px] leading-tight text-cream/85">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="hero-anim absolute bottom-10 right-6 hidden -rotate-[8deg] text-right font-script text-[40px] font-bold leading-[0.95] text-cream drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] lg:block xl:right-12" style={{ animationDelay: "0.72s" }}>
          Mais Sabor,
          <br />
          <span className="text-gold-400">Mais Tradição!</span>
        </p>
      </div>

    </section>
  );
}
