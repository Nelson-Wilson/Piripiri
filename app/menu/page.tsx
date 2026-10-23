import type { Metadata } from "next";
import MenuPage from "./MenuPage";

export const metadata: Metadata = {
  title: "Menu completo",
  description: "Menu completo do Restaurante Píri Píri, Maputo — disponível em português e inglês.",
  alternates: { canonical: "/menu" },
};

export default function Page() {
  return <MenuPage />;
}
