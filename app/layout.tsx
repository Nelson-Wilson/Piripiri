import type { Metadata, Viewport } from "next";
import "./fonts.css";
import "./globals.css";

const SITE = "https://piripiri.maputo.co.mz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Piri Piri Maputo — O Verdadeiro Sabor do Frango na Brasa",
    template: "%s · Piri Piri Maputo",
  },
  description:
    "Restaurante Píri Píri, Av. 24 de Julho, Maputo. Frango na brasa, camarão grelhado, prego no prato e lulas grelhadas. 4,0★ com 1 341 críticas. Comer no local ou take away — 84 672 4350.",
  keywords: [
    "Piri Piri Maputo",
    "frango na brasa Maputo",
    "restaurante Maputo",
    "frango piri piri",
    "camarão grelhado Maputo",
    "take away Maputo",
    "Av. 24 de Julho",
  ],
  authors: [{ name: "Restaurante Píri Píri" }],
  creator: "Restaurante Píri Píri",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: SITE,
    siteName: "Piri Piri Maputo",
    title: "Piri Piri Maputo — O Verdadeiro Sabor do Frango na Brasa",
    description:
      "Brasa, carvão e tradição no coração de Maputo. Frango piri-piri, camarão grelhado e prego no prato desde sempre na Av. 24 de Julho.",
    images: [{ url: "/images/hero-chicken.jpg", width: 1200, height: 630, alt: "Frango piri-piri na brasa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piri Piri Maputo — O Verdadeiro Sabor do Frango na Brasa",
    description: "Frango na brasa, camarão grelhado e tradição na Av. 24 de Julho, Maputo.",
    images: ["/images/hero-chicken.jpg"],
  },
  robots: { index: true, follow: true },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#050305",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-MZ" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/hero-chicken.jpg" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
