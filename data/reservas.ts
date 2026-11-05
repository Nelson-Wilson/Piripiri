/**
 * Configuração da secção "Reservas" — planta 3D real do restaurante.
 *
 * As coordenadas (x / y) seguem o sistema da planta original
 * ("Mapa de Mesas 3D.html"): píxeis da imagem, convertidos para unidades 3D
 * pela escala `scale` (1 px = 0,01 unidades).
 *
 * Zonas:
 *  - "interior": mesas 1 a 21
 *  - "explanada": mesas 101 a 115
 *
 * Para pôr uma mesa fora de serviço, adicione o seu número a `blockedTables`.
 */
export type TableZone = "interior" | "explanada";
export type TableShape = "lg" | "sq" | "pt";

export type TableDef = {
  id: number;
  zone: TableZone;
  shape: TableShape;
  x: number;
  y: number;
  /** Cadeiras nas cabeceiras (acrescenta 2 lugares às mesas grandes). */
  sides?: boolean;
};

/** Mesas na planta real do restaurante. */
export const tables: TableDef[] = [
  // ---------- Interior ----------
  { id: 18, zone: "interior", shape: "lg", x: 55, y: 35, sides: true },
  { id: 15, zone: "interior", shape: "lg", x: 420, y: 32, sides: true },
  { id: 7, zone: "interior", shape: "lg", x: 750, y: 35, sides: true },
  { id: 3, zone: "interior", shape: "lg", x: 1158, y: 42, sides: true },
  { id: 19, zone: "interior", shape: "lg", x: 20, y: 200 },
  { id: 17, zone: "interior", shape: "lg", x: 213, y: 203 },
  { id: 14, zone: "interior", shape: "lg", x: 422, y: 205 },
  { id: 8, zone: "interior", shape: "sq", x: 638, y: 152, sides: true },
  { id: 6, zone: "interior", shape: "lg", x: 772, y: 197 },
  { id: 2, zone: "interior", shape: "lg", x: 1167, y: 202 },
  { id: 20, zone: "interior", shape: "sq", x: 30, y: 405, sides: true },
  { id: 16, zone: "interior", shape: "sq", x: 240, y: 470, sides: true },
  { id: 12, zone: "interior", shape: "sq", x: 443, y: 462, sides: true },
  { id: 9, zone: "interior", shape: "sq", x: 638, y: 353, sides: true },
  { id: 10, zone: "interior", shape: "sq", x: 635, y: 462, sides: true },
  { id: 5, zone: "interior", shape: "sq", x: 822, y: 465, sides: true },
  { id: 4, zone: "interior", shape: "lg", x: 1003, y: 367 },
  { id: 1, zone: "interior", shape: "sq", x: 1208, y: 525, sides: true },
  { id: 21, zone: "interior", shape: "sq", x: 37, y: 585, sides: true },
  { id: 11, zone: "interior", shape: "sq", x: 443, y: 602, sides: true },

  // ---------- Explanada ----------
  { id: 102, zone: "explanada", shape: "pt", x: 40, y: 385, sides: true },
  { id: 104, zone: "explanada", shape: "pt", x: 256, y: 385, sides: true },
  { id: 106, zone: "explanada", shape: "pt", x: 472, y: 385, sides: true },
  { id: 108, zone: "explanada", shape: "pt", x: 688, y: 385, sides: true },
  { id: 110, zone: "explanada", shape: "pt", x: 904, y: 385, sides: true },
  { id: 112, zone: "explanada", shape: "pt", x: 1120, y: 385, sides: true },
  { id: 114, zone: "explanada", shape: "pt", x: 1336, y: 385, sides: true },
  { id: 101, zone: "explanada", shape: "pt", x: 40, y: 780, sides: true },
  { id: 103, zone: "explanada", shape: "pt", x: 256, y: 780, sides: true },
  { id: 105, zone: "explanada", shape: "pt", x: 472, y: 780, sides: true },
  { id: 107, zone: "explanada", shape: "pt", x: 688, y: 780, sides: true },
  { id: 109, zone: "explanada", shape: "pt", x: 904, y: 780, sides: true },
  { id: 111, zone: "explanada", shape: "pt", x: 1120, y: 780, sides: true },
  { id: 115, zone: "explanada", shape: "pt", x: 1336, y: 780, sides: true },
];

/** Lugares por mesa, seguindo a planta original. */
export const seatsFor = (t: TableDef) => (t.shape === "lg" && t.sides ? 6 : 4);

/** 1 px da planta original = 0,01 unidades 3D. */
export const scale = 0.01;

/** Dimensões de cada tipo de mesa: [largura, profundidade]. */
export const tableDims = {
  lg: [1.52, 0.75],
  sq: [0.76, 0.76],
  pt: [1.5, 1.95],
} as const;

/** Geometria e câmara de cada zona. */
export const zoneConfig = {
  interior: {
    name: "Interior",
    w: 1500,
    h: 720,
    cz: 0,
    tile: 1.8,
    light: "#a8a8a8",
    dark: "#5b5b5d",
    top: 13.5,
    persp: [9.5, 8.5],
  },
  explanada: {
    name: "Explanada",
    w: 1560,
    h: 1000,
    cz: 10.2,
    tile: 0.76,
    light: "#e3e1dd",
    dark: "#3f7d57",
    top: 15.5,
    persp: [11, 9.5],
  },
} as const;

/** Mesas fora de serviço (aparecem a cinzento, "Indisponível"). */
export const blockedTables: number[] = [];

export const maxPeople = 6;

/** Horário de reservas (10:00 — 22:00), em intervalos de 30 min. */
export const openMinutes = 10 * 60;
export const closeMinutes = 22 * 60;
export const slotStep = 30;

/** Tempo durante o qual uma mesa reservada fica ocupada (min). */
export const stayMinutes = 120;

export const storageKey = "piripiri:reservas:v1";
