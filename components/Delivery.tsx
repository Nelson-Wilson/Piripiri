"use client";

import { Phone, ArrowRight } from "lucide-react";
import { telHref, waHref } from "@/lib/site";

/** Painel vermelho promocional (faixa "Porque escolher") — mantém ligação, WhatsApp e mapa. */
export default function Delivery() {
  return (
    <div className="relative overflow-hidden rounded-[14px] bg-[#7a0b10] bg-[url('/images/bg/delivery-moto.webp')] bg-cover bg-[52%_center] p-5 sm:p-6">
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(100deg,rgba(70,4,8,0.9)_0%,rgba(100,8,12,0.55)_45%,rgba(122,11,16,0)_85%)]" />
      <div className="relative">
        <p className="text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-cream">Entrega ao domicílio</p>
        <p className="font-display text-[34px] uppercase leading-none text-gold-400">Cidade de Maputo</p>
        <a href={telHref} className="mt-3 flex items-center gap-3 text-cream">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900/50 ring-1 ring-gold-400/60">
            <Phone className="h-4 w-4 text-gold-400" />
          </span>
          <span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-cream/80">Ligue agora</span>
            <span className="font-display text-[26px] leading-none tracking-wide">84 672 4350</span>
          </span>
        </a>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-gold !px-4 !py-2 !text-[10px]">
            WhatsApp <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a href="#contactos" className="text-[10px] uppercase tracking-[0.2em] text-cream/85 underline-offset-4 hover:underline">
            Ver mapa e horários
          </a>
        </div>
      </div>
    </div>
  );
}
