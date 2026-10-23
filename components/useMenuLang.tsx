"use client";

import { useEffect, useState, useCallback } from "react";
import type { Lang } from "@/data/menu-en";

const KEY = "pp-menu-lang";

/** Idioma do menu (PT/EN), guardado no navegador e partilhado entre a secção e a página /menu. */
export function useMenuLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v === "en" || v === "pt") setLangState(v);
    } catch {}
    const onChange = (e: Event) => setLangState((e as CustomEvent<Lang>).detail);
    window.addEventListener("pp-lang", onChange);
    return () => window.removeEventListener("pp-lang", onChange);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {}
    window.dispatchEvent(new CustomEvent("pp-lang", { detail: l }));
  }, []);

  return [lang, setLang];
}

export function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div role="group" aria-label="Language / Idioma" className="inline-flex items-center rounded-full border border-gold-400/40 bg-ink-900/70 p-0.5 text-[10.5px] font-bold uppercase tracking-[0.18em]">
      {(["pt", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 transition-colors ${lang === l ? "bg-gold-400 text-ink-900" : "text-cream/60 hover:text-cream"}`}
        >
          {l === "pt" ? "PT" : "EN"}
        </button>
      ))}
    </div>
  );
}
