"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { zoneConfig, type TableZone } from "@/data/reservas";

type Props = {
  initialZone: TableZone;
  onClose: () => void;
};

const plans = {
  interior: {
    src: "/images/planta-interior.png",
    width: 2707,
    height: 1440,
    alt: "Planta do Interior do Restaurante Píri Píri com as mesas numeradas de 1 a 21",
    caption: "Interior · mesas 1 a 21",
  },
  explanada: {
    src: "/images/planta-explanada.png",
    width: 3110,
    height: 1457,
    alt: "Planta da Explanada do Restaurante Píri Píri com as mesas numeradas de 101 a 115",
    caption: "Explanada · mesas 101 a 115",
  },
} as const;

/**
 * Vista de referência das plantas reais do restaurante.
 * As imagens têm as posições reais das mesas, mas as cores são estáticas:
 * a disponibilidade em tempo real continua a ser mostrada no mapa 3D.
 */
export default function FloorPlanModal({ initialZone, onClose }: Props) {
  const [zone, setZone] = useState<TableZone>(initialZone);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const plan = plans[zone];

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[160] flex items-center justify-center bg-ink-900/90 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Plantas reais das mesas"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-[1100px] flex-col overflow-hidden rounded-[14px] border border-gold-400/50 bg-ink-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 border-b border-cream/10 px-4 py-3 sm:px-5">
          <div>
            <h3 className="h-display slant text-[22px] leading-none text-gold-400 sm:text-[26px]">
              Planta real
            </h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-cream/45">
              Posições reais das mesas
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar planta"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cream/20 text-cream/70 transition hover:border-gold-400/60 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 px-4 pt-3 sm:px-5">
          <div
            className="flex rounded-full border border-cream/15 bg-ink-800 p-0.5"
            role="tablist"
            aria-label="Zona da planta"
          >
            {(["interior", "explanada"] as const).map((z) => (
              <button
                key={z}
                type="button"
                role="tab"
                aria-selected={zone === z}
                onClick={() => setZone(z)}
                className={`rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition ${
                  zone === z ? "bg-gold-400 text-ink-900" : "text-cream/60 hover:text-cream"
                }`}
              >
                {zoneConfig[z].name}
              </button>
            ))}
          </div>
          <a
            href={plan.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-300/90 transition hover:text-gold-200"
          >
            <Maximize2 className="h-3 w-3" /> Tamanho real
          </a>
        </div>

        <div className="min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-4">
          <div className="mx-auto w-[820px] max-w-none sm:w-full">
            <Image
              src={plan.src}
              alt={plan.alt}
              width={plan.width}
              height={plan.height}
              className="h-auto w-full rounded-md border border-cream/10 bg-ink-800"
            />
          </div>
        </div>

        <p className="shrink-0 border-t border-cream/10 px-4 py-2 text-center text-[10px] leading-relaxed text-cream/45">
          {plan.caption} · Imagem de referência. A disponibilidade em tempo real está no mapa 3D.
          <span className="sm:hidden"> Arraste para os lados para ver toda a planta.</span>
        </p>
      </div>
    </div>
  );
}
