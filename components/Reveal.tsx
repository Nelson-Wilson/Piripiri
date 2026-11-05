"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

type RevealStyle = CSSProperties & { "--reveal-y"?: string };

/** Scroll reveal leve: IntersectionObserver + transição CSS (sem framer-motion). */
export default function Reveal({ children, delay = 0, y = 34, className, once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style: RevealStyle = {
    "--reveal-y": `${y}px`,
    transitionDelay: `${delay}s`,
  };

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className ?? ""}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
