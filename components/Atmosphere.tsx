"use client";

import { motion, useReducedMotion } from "framer-motion";

const embers = [
  { x: 8, y: 82, s: 3, d: 0, t: 14 },
  { x: 15, y: 64, s: 2, d: 2.4, t: 17 },
  { x: 22, y: 90, s: 4, d: 1.2, t: 15 },
  { x: 31, y: 70, s: 2, d: 3.6, t: 19 },
  { x: 40, y: 86, s: 3, d: 0.6, t: 13 },
  { x: 48, y: 58, s: 2, d: 4.4, t: 18 },
  { x: 56, y: 92, s: 4, d: 2.1, t: 16 },
  { x: 63, y: 74, s: 2, d: 5.2, t: 20 },
  { x: 70, y: 88, s: 3, d: 1.7, t: 15 },
  { x: 77, y: 62, s: 2, d: 3.1, t: 17 },
  { x: 84, y: 84, s: 4, d: 0.9, t: 14 },
  { x: 91, y: 70, s: 2, d: 4.8, t: 19 },
  { x: 96, y: 92, s: 3, d: 2.7, t: 16 },
  { x: 12, y: 96, s: 2, d: 5.6, t: 21 },
  { x: 44, y: 66, s: 3, d: 6.1, t: 18 },
  { x: 67, y: 96, s: 2, d: 1.4, t: 20 },
];

/** Camada atmosférica reutilizável: brasas, fumo e vinheta. Puramente decorativa. */
export default function Atmosphere({ ember = true }: { ember?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* fumo */}
      <div
        className="absolute -left-1/4 top-0 h-[70%] w-[80%] animate-smoke rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(120,110,105,0.18), transparent 65%)" }}
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[65%] w-[70%] animate-smoke rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(255,122,24,0.14), transparent 68%)",
          animationDelay: "-8s",
        }}
      />
      {/* brasas */}
      {ember && !reduce && (
        <div className="absolute inset-0">
          {embers.map((p, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.s,
                height: p.s,
                background: "radial-gradient(circle, #ffd489 0%, #ff7a18 55%, rgba(194,32,15,0) 100%)",
                boxShadow: "0 0 10px rgba(255,122,24,0.8)",
              }}
              animate={{ y: [0, -130, -260], opacity: [0, 0.95, 0], x: [0, 12, -8] }}
              transition={{ duration: p.t, delay: p.d, repeat: Infinity, ease: "easeOut" }}
            />
          ))}
        </div>
      )}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 50% 40%, transparent 40%, rgba(3,2,3,0.75) 100%)" }}
      />
    </div>
  );
}
