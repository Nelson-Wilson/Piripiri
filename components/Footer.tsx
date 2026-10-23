import { Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Wordmark } from "./Logo";
import { telHref, waHref, mapsHref, facebookHref, instagramHref } from "@/lib/site";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#menu", label: "Menu" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#galeria", label: "Galeria" },
  { href: "#criticas", label: "Críticas" },
  { href: "#contactos", label: "Contacto" },
];

const social = [
  { href: facebookHref, label: "Facebook", Icon: Facebook },
  { href: instagramHref, label: "Instagram", Icon: Instagram },
  { href: waHref, label: "WhatsApp", Icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-ink-900 bg-[url('/images/bg/texture.webp')] bg-cover bg-bottom pb-24 pt-8 lg:pb-6">
      <div aria-hidden className="absolute inset-0 bg-ink-900/70" />
      <div className="container-x relative z-10">
        <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto_auto_auto]">
          <Wordmark />
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[11px] text-cream/75 transition-colors hover:text-gold-300">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2.5">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} do Restaurante Píri Píri`}
                className="grid h-8 w-8 place-items-center rounded-full bg-cream/90 text-ink-900 transition-colors hover:bg-gold-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a href={telHref} className="flex items-center gap-2 text-cream hover:text-gold-300">
            <Phone className="h-4 w-4 text-gold-400" />
            <span className="font-display text-[16px] tracking-wide">84 672 4350</span>
          </a>
          <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-[11px] leading-snug text-cream/65 hover:text-cream">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
            <span>Av. 24 de Julho, Maputo<br />Moçambique</span>
          </a>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[10px] tracking-[0.12em] text-cream/45">
            © {new Date().getFullYear()} Restaurante Píri Píri. Todos os direitos reservados.
          </p>
          <p className="slant font-script text-[24px] font-bold leading-none text-gold-400">O Verdadeiro Sabor de Maputo!</p>
        </div>
      </div>
    </footer>
  );
}
