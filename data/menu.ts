export type Category = "Carnes" | "Peixe & Marisco" | "Entradas" | "Acompanhamentos" | "Sobremesas" | "Bebidas";

export type Dish = {
  name: string;
  desc: string;
  img?: string;
  /** object-position do recorte 4:3 (ex.: "50% 20%") */
  pos?: string;
  price?: string;
  badge?: string;
  cat: Category;
};

export const categories: Category[] = [
  "Carnes",
  "Peixe & Marisco",
  "Entradas",
  "Acompanhamentos",
  "Sobremesas",
  "Bebidas",
];

/**
 * Nomes de pratos retirados do menu/documento oficial fornecido (carta bilingue PT/EN).
 * Preços: apenas os legíveis no menu impresso digitalizado (carta de Entradas).
 */
export const dishes: Dish[] = [
  {
    name: "Frango à Píri-píri",
    desc: "O prato da casa. Frango marinado no nosso piri-piri, grelhado lentamente sobre brasa viva até ficar dourado e suculento.",
    img: "/images/fotos/frango-inteiro.jpg",
    badge: "Inteiro",
    cat: "Carnes",
  },
  {
    name: "Frango à Píri-píri · Meio",
    desc: "Meio frango na brasa, com batata frita, salada de cebola e limão. A dose de quem não quer partilhar.",
    img: "/images/p37.jpg",
    badge: "Meio",
    cat: "Carnes",
  },
  {
    name: "Prego no Prato",
    desc: "Bife de vaca grelhado no carvão, servido com batata frita, arroz e ovo. O clássico de Maputo, feito como sempre foi.",
    img: "/images/p03.jpg",
    badge: "Prato do dia",
    cat: "Carnes",
  },
  {
    name: "Prego no Pão",
    desc: "Bife grelhado dentro do pão, alho, piri-piri e batata frita. Simples, rápido, memorável.",
    img: "/images/p08.jpg",
    badge: "Take away",
    cat: "Carnes",
  },
  {
    name: "Bife Panado com Ovo",
    desc: "Bife panado e estaladiço com ovo estrelado e batata frita dourada.",
    img: "/images/fotos/bife-panado.jpg",
    cat: "Carnes",
  },
  {
    name: "Caril de Frango",
    desc: "Frango no molho de caril da casa, servido com arroz branco.",
    img: "/images/fotos/caril-frango.jpg",
    pos: "50% 55%",
    cat: "Carnes",
  },
  {
    name: "Moelas Estufadas",
    desc: "Moelas cozinhadas devagar no nosso molho, com pão para acompanhar.",
    img: "/images/p46.jpg",
    price: "265,00 MT",
    cat: "Carnes",
  },
  {
    name: "Camarão Grelhado",
    desc: "Camarão médio e tigre na brasa, alho, limão e um fio de azeite. Servido com batata frita e salada.",
    img: "/images/fotos/camarao-grelhado.jpg",
    badge: "1/2 dose · dose",
    cat: "Peixe & Marisco",
  },
  {
    name: "Caril de Camarão",
    desc: "Camarão cozido lentamente em caril aromático da casa, para molhar o pão até ao fim.",
    img: "/images/p06.jpg",
    cat: "Peixe & Marisco",
  },
  {
    name: "Arroz de Marisco",
    desc: "Arroz cozinhado com camarão e marisco, finalizado com ervas frescas.",
    img: "/images/fotos/arroz-marisco.jpg",
    cat: "Peixe & Marisco",
  },
  {
    name: "Lulas Grelhadas",
    desc: "Lulas tenras na grelha, alho e limão, com arroz e legumes salteados.",
    img: "/images/p09.jpg",
    badge: "Fritas · Grelhadas",
    cat: "Peixe & Marisco",
  },
  {
    name: "Peixe Vermelho",
    desc: "Peixe vermelho fresco do dia, grelhado inteiro na brasa, com limão e salada.",
    img: "/images/p10.jpg",
    cat: "Peixe & Marisco",
  },
  {
    name: "Peixe Grelhado com Legumes",
    desc: "Filete grelhado com legumes salteados — leve, fresco e cheio de sabor a carvão.",
    img: "/images/fotos/peixe-legumes.jpg",
    cat: "Peixe & Marisco",
  },
  {
    name: "Camarão Alhinho",
    desc: "Camarão salteado em alho e azeite, a fumegar na travessa.",
    img: "/images/p04.jpg",
    price: "650,00 MT",
    cat: "Entradas",
  },
  {
    name: "Rissóis e Empadas",
    desc: "Rissóis e empadas de carne e peixe, fritos na hora.",
    img: "/images/p07.jpg",
    price: "245,00 MT",
    cat: "Entradas",
  },
  {
    name: "Azeitonas Marinadas",
    desc: "Azeitonas marinadas na casa — o início perfeito antes da brasa.",
    img: "/images/p40.jpg",
    price: "250,00 MT",
    cat: "Entradas",
  },
  {
    name: "Batata Frita",
    desc: "Batata dourada, crocante por fora — o acompanhamento de sempre.",
    img: "/images/p50.jpg",
    price: "85,00 MT",
    cat: "Acompanhamentos",
  },
  {
    name: "Batatas Salteadas",
    desc: "Batatas pequenas salteadas em manteiga e ervas.",
    img: "/images/p56.jpg",
    cat: "Acompanhamentos",
  },
  {
    name: "Sorvete Servido na Taça",
    desc: "Gelado cremoso servido na taça clássica, para fechar a refeição.",
    img: "/images/p47.jpg",
    cat: "Sobremesas",
  },
  {
    name: "Expresso",
    desc: "Café expresso curto, bem tirado — a assinatura do fim da refeição.",
    img: "/images/fotos/expresso-pastel.jpg",
    pos: "50% 70%",
    cat: "Bebidas",
  },
  {
    name: "Heineken Draft 250ml",
    desc: "Cerveja gelada de pressão, servida no copo alto.",
    img: "/images/p53.jpg",
    cat: "Bebidas",
  },
  {
    name: "Draft Beer",
    desc: "Imperial bem gelada, para acompanhar o frango na brasa.",
    img: "/images/fotos/cerveja-draft.jpg",
    pos: "50% 15%",
    cat: "Bebidas",
  },
  {
    name: "Cocktails",
    desc: "Cocktails frutados servidos bem frios ao balcão.",
    img: "/images/fotos/cocktails.jpg",
    pos: "50% 65%",
    cat: "Bebidas",
  },
  {
    name: "Piña Colada",
    desc: "Cremosa, gelada e decorada com ananás.",
    img: "/images/fotos/pina-colada.jpg",
    pos: "50% 60%",
    cat: "Bebidas",
  },
  {
    name: "Sangria",
    desc: "Sangria fresca com fruta, servida no copo e no jarro de barro.",
    img: "/images/fotos/sangria.jpg",
    cat: "Bebidas",
  },
];

type Line = { name: string; note?: string; price?: string };

/** Carta completa, por categoria — nomes tal como aparecem no menu da casa. */
export const menuBook: Record<Category, Line[]> = {
  Carnes: [
    { name: "Frango à Píri-píri", note: "Inteiro · Meio" },
    { name: "Prego no Prato", note: "com batata, arroz e ovo" },
    { name: "Prego no Pão" },
    { name: "Moelas Estufadas", price: "265,00 MT" },
  ],
  "Peixe & Marisco": [
    { name: "Camarão Grelhado", note: "1/2 dose · dose" },
    { name: "Camarão Tigre Grelhado", note: "1/2 dose · dose" },
    { name: "Camarão Cozido", price: "585,00 MT" },
    { name: "Caril de Camarão" },
    { name: "Lulas Grelhadas ou Fritas" },
    { name: "Peixe Vermelho" },
    { name: "Peixe Grelhado com Legumes" },
    { name: "Filete de Peixe Panado / Grelhado" },
    { name: "Espetada de Marisco" },
    { name: "Bacalhau Cozido / Assado" },
  ],
  Entradas: [
    { name: "Camarão Alhinho", price: "650,00 MT" },
    { name: "Camarão Cozido", price: "585,00 MT" },
    { name: "Azeitonas Marinadas", price: "250,00 MT" },
    { name: "Azeitonas Simples", price: "220,00 MT" },
    { name: "Rissóis e Empadas", price: "245,00 MT" },
    { name: "Rissóis de Camarão", price: "165,00 MT" },
    { name: "Chamussas de Camarão", price: "165,00 MT" },
    { name: "Chamussas de Carne", price: "165,00 MT" },
    { name: "Sopa do Dia", price: "180,00 MT" },
    { name: "Pão de Alho" },
  ],
  Acompanhamentos: [
    { name: "Batata Frita", price: "85,00 MT" },
    { name: "Batatas Salteadas" },
    { name: "Arroz" },
    { name: "Salada" },
    { name: "Legumes Salteados" },
  ],
  Sobremesas: [
    { name: "Sorvete Servido na Taça" },
    { name: "Doce do Dia" },
  ],
  Bebidas: [
    { name: "Draft Beer" },
    { name: "Heineken Draft 250ml" },
    { name: "Refrigerantes" },
    { name: "Águas" },
    { name: "Expresso" },
  ],
};

export const specialties = [
  {
    n: "01",
    title: "Frango na Brasa",
    kicker: "A assinatura da casa",
    desc: "Marinado no dia, grelhado sobre carvão até a pele estalar.",
    img: "/images/fotos/frango-inteiro.jpg",
    href: "#menu",
  },
  {
    n: "02",
    title: "Camarão Grelhado",
    kicker: "Do mar para a brasa",
    desc: "Camarão tigre e médio, alho, limão e azeite.",
    img: "/images/fotos/camarao-grelhado.jpg",
    href: "#menu",
  },
  {
    n: "03",
    title: "Acompanhamentos",
    kicker: "Tudo é feito na hora",
    desc: "Batata frita, arroz, salada fresca e legumes salteados.",
    img: "/images/p50.jpg",
    href: "#menu",
  },
  {
    n: "04",
    title: "Bebidas",
    kicker: "Geladas, sempre",
    desc: "Cerveja de pressão, vinhos e refrigerantes.",
    img: "/images/p53.jpg",
    href: "#menu",
  },
];

export const gallery = [
  { src: "/images/p13.jpg", alt: "Fachada do Restaurante Píri Píri na Av. 24 de Julho", w: 1100, h: 825, wide: true },
  { src: "/images/fotos/ambiente-terraco.jpg", alt: "Cliente a saborear uma bebida na esplanada", w: 1000, h: 1249 },
  { src: "/images/fotos/pina-colada.jpg", alt: "Piña colada gelada ao balcão", w: 1000, h: 1250 },
  { src: "/images/fotos/caril-frango.jpg", alt: "Caril de frango com arroz branco", w: 1000, h: 1249 },
  { src: "/images/fotos/cocktails.jpg", alt: "Cocktails frutados com palhinhas coloridas", w: 1000, h: 1250 },
  { src: "/images/fotos/camarao-grelhado.jpg", alt: "Camarão tigre grelhado com salada e batata frita", w: 1200, h: 798, wide: true },
  { src: "/images/fotos/frango-inteiro.jpg", alt: "Frango à Píri-píri com batata frita e limão", w: 1200, h: 798, wide: true },
  { src: "/images/fotos/cocktail-maracuja.jpg", alt: "Cocktail de maracujá com laranja e guarda-chuva", w: 1000, h: 1250 },
  { src: "/images/fotos/cerveja-draft.jpg", alt: "Cerveja de pressão gelada", w: 1000, h: 1250 },
  { src: "/images/fotos/xima-estufado.jpg", alt: "Estufado servido com xima", w: 1000, h: 1250 },
  { src: "/images/fotos/sangria.jpg", alt: "Sangria com fruta e jarro de barro", w: 1000, h: 1250 },
  { src: "/images/fotos/arroz-marisco.jpg", alt: "Arroz de marisco com camarão", w: 1200, h: 798, wide: true },
  { src: "/images/fotos/bife-panado.jpg", alt: "Bife panado com ovo estrelado e batata frita", w: 1200, h: 798, wide: true },
  { src: "/images/fotos/cafe-com-leite.jpg", alt: "Café com leite em copo de vidro", w: 1000, h: 1250 },
  { src: "/images/fotos/expresso-pastel.jpg", alt: "Expresso com pastel de nata", w: 1000, h: 1250 },
  { src: "/images/fotos/takeaway.jpg", alt: "Embalagens para take away ao balcão", w: 1200, h: 798, wide: true },
  { src: "/images/p14.jpg", alt: "Sala do restaurante com mesas e toalhas", w: 1100, h: 619, wide: true },
  { src: "/images/fotos/peixe-legumes.jpg", alt: "Peixe grelhado com legumes e azeitonas", w: 1200, h: 676, wide: true },
  { src: "/images/p15.jpg", alt: "Interior do restaurante ao fim do dia", w: 1100, h: 619, wide: true },
];
