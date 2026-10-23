"use client";

import { useEffect, useRef, useState } from "react";

/** Cursor personalizado: anel dourado + ponto, com estado de "hover" sobre elementos interativos. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let mx = rx;
    let my = ry;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      const t = e.target as HTMLElement;
      const interactive = !!t.closest("a, button, [data-cursor='grow']");
      setActive(interactive);
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[150] hidden md:block">
      <div
        ref={ring}
        className="cursor-ring absolute left-0 top-0 h-10 w-10 rounded-full border transition-[width,height,opacity,background-color,border-color] duration-300"
        style={{
          borderColor: active ? "rgba(255,212,137,0.95)" : "rgba(232,163,61,0.45)",
          backgroundColor: active ? "rgba(232,163,61,0.12)" : "transparent",
          boxShadow: active ? "0 0 40px rgba(232,163,61,0.35)" : "none",
        }}
      />
      <div
        ref={dot}
        className="cursor-dot absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-gold-300 shadow-[0_0_12px_rgba(255,212,137,0.9)]"
      />
    </div>
  );
}
