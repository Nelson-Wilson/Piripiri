"use client";

import { useEffect, useState } from "react";

type Phase = "visible" | "leaving" | "hidden";

/**
 * Abertura de 1,5 s + saída suave.
 * Implementada com CSS puro para manter a animação sem atrasar o carregamento.
 */
export default function Preloader() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.remove("pp-loaded");

    if (params.has("noanim") || reduce) {
      document.documentElement.classList.add("pp-loaded");
      setPhase("hidden");
      return;
    }

    document.documentElement.classList.add("no-scroll");

    const hold = window.setTimeout(() => {
      document.documentElement.classList.add("pp-loaded");
      setPhase("leaving");
    }, 1500);

    const remove = window.setTimeout(() => {
      document.documentElement.classList.remove("no-scroll");
      setPhase("hidden");
    }, 2400);

    return () => {
      window.clearTimeout(hold);
      window.clearTimeout(remove);
      document.documentElement.classList.remove("no-scroll");
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      aria-hidden
      className={`pp-preloader fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-900 ${
        phase === "leaving" ? "pp-preloader-out" : ""
      }`}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 62%, rgba(194,32,15,0.32), transparent 70%), radial-gradient(40% 30% at 50% 40%, rgba(232,163,61,0.18), transparent 70%)",
        }}
      />
      <div className="pp-preloader-logo relative z-10 flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-piripiri-trumpet.png"
          alt="Piri Piri Maputo"
          width={420}
          height={399}
          fetchPriority="high"
          className="h-40 w-auto sm:h-48"
        />
        <p className="mt-2 text-[10px] uppercase tracking-[0.55em] text-gold-400/70">
          Maputo · desde sempre
        </p>
        <div className="relative mt-7 h-[2px] w-40 overflow-hidden bg-cream/10">
          <div className="pp-preloader-bar absolute inset-y-0 left-0 bg-gradient-to-r from-flame-600 via-ember to-gold-300" />
        </div>
      </div>
    </div>
  );
}
