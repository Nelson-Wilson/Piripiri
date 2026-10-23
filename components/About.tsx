"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import { reviews } from "@/data/content";

/** "Sobre nós" + testemunhos numa única faixa, como no mockup. */
export default function About() {
  const [i, setI] = useState(0);
  const go = useCallback((d: number) => setI((v) => (v + d + reviews.length) % reviews.length), []);
  useEffect(() => {
    const t = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(t);
  }, [go]);
  const r = reviews[i];

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-ink-900 bg-[url('/images/bg/texture.webp')] bg-cover bg-center lg:grid lg:grid-cols-[34%_1fr]"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
        <Image
          src="/images/p13.jpg"
          alt="Fachada do Restaurante Píri Píri na Av. 24 de Julho, Maputo"
          fill
          sizes="(max-width: 1024px) 100vw, 34vw"
          className="object-cover photo-grade"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink-900/70 max-lg:bg-gradient-to-t max-lg:from-ink-900/80" />
      </div>

      <div className="relative grid items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:px-10 lg:py-10 xl:pr-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-flame-400">Sobre nós</p>
          <h2 className="h-display mt-2 text-[10vw] leading-[0.98] text-gold-400 sm:text-[6vw] lg:text-[36px] xl:text-[40px]">
            Uma tradição que
            <br />
            atravessa gerações
          </h2>
          <p className="mt-4 max-w-[430px] text-[13.5px] leading-[1.75] text-cream/80">
            Há décadas servimos o verdadeiro sabor do frango na brasa e os melhores camarões grelhados de Maputo. O
            Restaurante Piri Piri tornou-se uma referência pela qualidade, tradição e atendimento.
          </p>
          <a href="#contactos" className="btn btn-gold mt-5 !px-6 !py-3 !text-[11px]">
            Conheça-nos <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div id="criticas" className="scroll-mt-28 rounded-[14px] border border-gold-400/20 bg-ink-900/90 p-5 shadow-card backdrop-blur-sm">
            <Quote className="h-6 w-6 fill-gold-400 text-gold-400" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="min-h-[150px]"
              >
                <p className="mt-2 text-[13px] leading-relaxed text-cream/90">{r.quote}</p>
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className={`h-3.5 w-3.5 ${k < r.stars ? "fill-gold-400 text-gold-400" : "text-gold-400/25"}`} />
                  ))}
                </div>
                <p className="mt-2 text-[11px] text-cream/55">
                  {r.author} · {r.meta}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-3 flex justify-end gap-1.5">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Crítica ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-5 bg-gold-400" : "w-2 bg-cream/30"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
