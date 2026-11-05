export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const telHref = "tel:+258846724350";
export const waHref =
  "https://wa.me/258846724350?text=Ol%C3%A1%20Piri%20Piri%2C%20gostaria%20de%20fazer%20um%20pedido.";
/** Link de WhatsApp para o restaurante com texto pré-preenchido. */
export const waLink = (text: string) => `https://wa.me/258846724350?text=${encodeURIComponent(text)}`;
/** Número de WhatsApp dedicado às reservas de mesa (+258 86 647 3065). */
export const waReservasNumber = "258866473065";
/** Link de WhatsApp para enviar o pedido de reserva. */
export const waReservasLink = (text: string) =>
  `https://wa.me/${waReservasNumber}?text=${encodeURIComponent(text)}`;
export const mapsHref =
  "https://www.google.com/maps/dir/?api=1&destination=-25.9766875,32.5928125";
export const mapsPlaceHref =
  "https://www.google.com/maps/search/?api=1&query=Restaurante+Piri+Piri+Av.+24+de+Julho+Maputo";
export const facebookHref = "https://www.facebook.com/restaurantepiripirimaputo/";
export const instagramHref = "https://www.instagram.com/restaurantepiripirimaputo";

/** Coordenadas decodificadas do Plus Code público do restaurante (2HFV+84 Maputo). */
export const coordinates = { lat: -25.9766875, lng: 32.5928125 };
