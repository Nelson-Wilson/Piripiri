"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Navigation } from "lucide-react";
import { telHref, waHref, mapsHref } from "@/lib/site";

/** Barra fixa de ação no mobile: ligar, WhatsApp, rota. */
export default function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[110] border-t border-gold-500/20 bg-ink-900/92 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl transition-transform duration-500 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-2">
        <a href={telHref} className="btn btn-gold flex-1 !py-3 !text-[10.5px]">
          <Phone className="h-3.5 w-3.5" /> Ligar
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-fire flex-1 !py-3 !text-[10.5px]"
        >
          <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
        </a>
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Como chegar"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/20 text-cream"
        >
          <Navigation className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
