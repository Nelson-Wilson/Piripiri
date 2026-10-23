import Image from "next/image";
import { cn } from "@/lib/site";

export function FlameMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-9 w-9", className)} aria-hidden>
      <defs>
        <linearGradient id="flameMark" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#8c1209" />
          <stop offset="0.5" stopColor="#e8391b" />
          <stop offset="1" stopColor="#ffd489" />
        </linearGradient>
      </defs>
      <path
        d="M32 4c2.8 9.6 10.4 12.8 10.4 23.6 0 2.9-.8 5.2-2.1 7 2.1-1.1 3.8-3 4.8-5.4 1.3 3.5 2 6.9 2 10C47.1 52.6 40.3 60 32 60S16.9 52.6 16.9 39.2c0-9.8 5.8-13.7 8.3-20.3.7 3.8-.4 6.9-2.1 9.5 3.8-2.8 6-6.9 6-12.5 0-4 1.6-8.2 2.9-11.9Z"
        fill="url(#flameMark)"
      />
    </svg>
  );
}

export function Wordmark({ className, small }: { className?: string; small?: boolean }) {
  return (
    <span className={cn("flex items-center", className)}>
      <Image
        src="/images/logo-piripiri-trumpet.png"
        alt="Piri Piri Maputo"
        width={420}
        height={399}
        priority
        className={cn("w-auto transition-all duration-500", small ? "h-10" : "h-12")}
      />
    </span>
  );
}
