"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [done, setDone] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("noanim") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    setDone(false);
    document.documentElement.classList.add("no-scroll");
    const t = window.setTimeout(() => {
      setDone(true);
      document.documentElement.classList.remove("no-scroll");
    }, 1500);
    return () => {
      window.clearTimeout(t);
      document.documentElement.classList.remove("no-scroll");
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 62%, rgba(194,32,15,0.32), transparent 70%), radial-gradient(40% 30% at 50% 40%, rgba(232,163,61,0.18), transparent 70%)",
            }}
          />
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/logo-piripiri-trumpet.png"
              alt="Piri Piri Maputo"
              width={420}
              height={399}
              priority
              className="h-40 w-auto sm:h-48"
            />
            <p className="mt-2 text-[10px] uppercase tracking-[0.55em] text-gold-400/70">Maputo · desde sempre</p>
            <div className="relative mt-7 h-[2px] w-40 overflow-hidden bg-cream/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-flame-600 via-ember to-gold-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.35, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
