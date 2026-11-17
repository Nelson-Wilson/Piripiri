"use client";

import { ArrowRight, Phone, Zap, ShoppingBag, Bike } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { telHref } from "@/lib/site";

const heroPhotos = [
  { src: "/images/bg/hero.webp", alt: "Frango Piri Piri acabado de grelhar na brasa" },
  { src: "/images/hero-chicken.jpg", alt: "Frango grelhado, especialidade da casa Piri Piri" },
  { src: "/images/fotos/frango-inteiro.webp", alt: "Frango inteiro Piri Piri servido com acompanhamentos" },
  { src: "/images/fotos/camarao-grelhado.webp", alt: "Camarão grelhado, uma das especialidades Piri Piri" },
];

const perks = [
  { icon: Zap, label: "Atendimento\nRápido" },
  { icon: ShoppingBag, label: "Take Away\nDisponível" },
  { icon: Bike, label: "Entrega ao Domicílio\nem Maputo" },
];

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % heroPhotos.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="inicio" aria-label="Destaques Piri Piri" className="relative w-full overflow-hidden bg-ink-900">
      <div className="absolute inset-0" aria-hidden="true">
        {heroPhotos.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-1000 lg:object-[right_40%] ${index === activePhoto ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/25 lg:to-transparent" />

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

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2" role="group" aria-label="Fotografias em destaque">
        {heroPhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Mostrar fotografia ${index + 1}: ${photo.alt}`}
            aria-pressed={index === activePhoto}
            onClick={() => setActivePhoto(index)}
            className={`h-2 rounded-full border border-white/80 transition-all duration-300 ${index === activePhoto ? "w-7 bg-gold-400" : "w-2 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>

    </section>
  );
}
