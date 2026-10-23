"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Drumstick, Fish, UtensilsCrossed, CupSoda } from "lucide-react";
import Reveal from "./Reveal";
import { specialties } from "@/data/menu";

const icons = [Drumstick, Fish, UtensilsCrossed, CupSoda];

export default function Specialties() {
  return (
    <section id="especialidades" className="relative overflow-hidden bg-ink-900 bg-[url('/images/bg/texture.webp')] bg-cover bg-center py-10 md:py-12">

      <div className="container-x relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,3.1fr)]">
        <Reveal className="pt-6">
          <span className="slant font-script text-[44px] font-bold leading-none text-gold-400">Nossas</span>
          <h2 className="h-display text-[13vw] leading-[0.95] text-cream sm:text-[9vw] lg:text-[44px]">
            Especialidades
          </h2>
          <p className="mt-3 max-w-[260px] text-[13px] leading-relaxed text-cream/70">
            Pratos preparados com ingredientes frescos e muito amor.
          </p>
          <a href="#menu" className="btn btn-ghost mt-5 !border-gold-400/60 !px-5 !py-2.5 !text-[10.5px] !text-gold-300">
            Ver Menu Completo <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {specialties.map((s, i) => {
            const Icon = icons[i] ?? UtensilsCrossed;
            return (
              <Reveal key={s.title} delay={0.07 * i}>
                <motion.a
                  href={s.href}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group relative block overflow-hidden rounded-[14px] border border-gold-400/25 bg-ink-900 shadow-card"
                  data-cursor="grow"
                >
                  <div className="relative aspect-[4/4.3] overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 45vw, 250px"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
                  </div>
                  <div className="relative px-3.5 pb-4 pt-6">
                    <span className="absolute -top-[18px] left-3 grid h-9 w-9 place-items-center rounded-full bg-flame-500 shadow-[0_6px_18px_rgba(0,0,0,0.6)] ring-2 ring-ink-900">
                      <Icon className="h-4 w-4 text-cream" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-[15px] uppercase leading-tight tracking-wide text-cream">{s.title}</h3>
                    <p className="mt-1.5 text-[11.5px] leading-snug text-cream/65">{s.desc}</p>
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
