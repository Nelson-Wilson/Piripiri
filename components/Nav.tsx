"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Wordmark } from "./Logo";
import { telHref } from "@/lib/site";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#menu", label: "Menu" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
  { href: "#criticas", label: "Críticas" },
  { href: "#contactos", label: "Contactos" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[120] transition-all duration-500 ${
          scrolled
            ? "border-b border-gold-500/15 bg-ink-900/70 py-2.5 backdrop-blur-2xl supports-[backdrop-filter]:bg-ink-900/55"
            : "border-b border-transparent bg-gradient-to-b from-ink-900/85 to-transparent py-4"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <a href="#inicio" aria-label="Piri Piri Maputo — início" className="shrink-0">
            <Wordmark small={scrolled} />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={telHref}
              className="hidden items-center gap-2 text-[12px] font-semibold tracking-wide text-cream/80 transition-colors hover:text-gold-300 xl:flex"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-gold-500/30 bg-gold-500/5">
                <Phone className="h-3.5 w-3.5 text-gold-400" />
              </span>
              84 672 4350
            </a>
            <a href="#contactos" className="btn btn-gold hidden !px-5 !py-2.5 !text-[10.5px] sm:inline-flex">
              Pedir agora
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[130] flex flex-col bg-ink-900 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(90% 60% at 50% 0%, rgba(194,32,15,0.28), transparent 65%), radial-gradient(60% 40% at 80% 90%, rgba(232,163,61,0.16), transparent 70%)",
              }}
            />
            <div className="relative flex items-center justify-between px-5 py-4">
              <Wordmark small />
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="relative flex flex-1 flex-col justify-center gap-1 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline justify-between border-b border-cream/8 py-3.5"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display text-[30px] uppercase leading-none text-cream group-hover:text-gold-300">
                    {l.label}
                  </span>
                  <span className="text-[10px] tracking-[0.3em] text-gold-500/50">0{i + 1}</span>
                </motion.a>
              ))}
            </nav>
            <div className="relative px-6 pb-8">
              <a href={telHref} className="btn btn-gold w-full">
                <Phone className="h-4 w-4" /> 84 672 4350
              </a>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.32em] text-cream/40">
                Av. 24 de Julho · Maputo
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
