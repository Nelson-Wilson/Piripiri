export type Category = "Entradas" | "Carnes" | "Aves" | "Peixe & Marisco" | "Pratos Nacionais" | "Pratos Vegetarianos" | "Acompanhamentos" | "Omeletes" | "Sandes" | "Tostas" | "Sobremesas" | "Bebidas";

export const categoryEmojis: Record<Category | "Outros", string> = {
  Entradas: "🥗",
  Carnes: "🍖",
  Aves: "🍗",
  "Peixe & Marisco": "🐟",
  "Pratos Nacionais": "🇲🇿",
  "Pratos Vegetarianos": "🍃",
  Acompanhamentos: "🍟",
  Omeletes: "🍳",
  Sandes: "🥪",
  Tostas: "🥪",
  Sobremesas: "🍰",
  Bebidas: "🍷",
  Outros: "🍽️",
};

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
  "Entradas",
  "Carnes",
  "Aves",
  "Peixe & Marisco",
  "Pratos Nacionais",
  "Pratos Vegetarianos",
  "Acompanhamentos",
  "Omeletes",
  "Sandes",
  "Tostas",
  "Sobremesas",
  "Bebidas",
];

/**
 * Nomes de pratos retirados do menu/documento oficial fornecido (Cardapio_Piri_Piri_Maputo.docx).
 * Preços atualizados conforme documento.
 */
export const dishes: Dish[] = [
  {
    name: "Franguinho",
    desc: "O prato mais famoso da casa. 40 min. de confeção para atingir a perfeição na brasa.",
    img: "/images/fotos/frango-inteiro.webp",
    price: "665 MT",
    cat: "Aves",
  },
  {
    name: "Frango à Píri-píri",
    desc: "Frango marinado no nosso piri-piri, grelhado lentamente sobre brasa viva.",
    img: "/images/p37.webp",
    price: "625 – 895 MT",
    cat: "Aves",
  },
  {
    name: "Prego no Prato",
    desc: "Bife de vaca grelhado no carvão, servido com batata frita, arroz e ovo.",
    img: "/images/p03.webp",
    price: "550 MT",
    cat: "Carnes",
  },
  {
    name: "Bife Filete",
    desc: "Bife de filete (250g) grelhado no ponto, suculento e macio.",
    img: "/images/fotos/bife-panado.webp",
    price: "1 330 MT",
    cat: "Carnes",
  },
  {
    name: "T-Bone",
    desc: "Corte de carne generoso grelhado na brasa.",
    img: "/images/p03.webp",
    price: "990 MT",
    cat: "Carnes",
  },
  {
    name: "Camarão Grelhado",
    desc: "Camarão (8) grelhado na brasa com alho, limão e um fio de azeite.",
    img: "/images/fotos/camarao-grelhado.webp",
    price: "1 170 MT",
    cat: "Peixe & Marisco",
  },
  {
    name: "Caril de Camarão",
    desc: "Camarão cozido lentamente em caril aromático da casa.",
    img: "/images/p06.webp",
    price: "880 MT",
    cat: "Peixe & Marisco",
  },
  {
    name: "Matapa com Caranguejo",
    desc: "Tradicional matapa moçambicana preparada com caranguejo fresco.",
    img: "/images/fotos/xima-estufado.webp",
    price: "600 MT",
    cat: "Pratos Nacionais",
  },
  {
    name: "Camarão Alhinho",
    desc: "Camarão salteado em alho e azeite, uma entrada clássica.",
    img: "/images/p04.webp",
    price: "650 MT",
    cat: "Entradas",
  },
  {
    name: "Batata Frita",
    desc: "Batata dourada e crocante, o acompanhamento perfeito.",
    img: "/images/p50.webp",
    price: "165 MT",
    cat: "Acompanhamentos",
  },
  {
    name: "Pudim Flan",
    desc: "Pudim caseiro com calda de caramelo.",
    img: "/images/p47.webp",
    price: "330 MT",
    cat: "Sobremesas",
  },
  {
    name: "Mousse de Chocolate",
    desc: "Mousse de chocolate caseira, rica e cremosa.",
    img: "/images/p47.webp",
    price: "330 MT",
    cat: "Sobremesas",
  },
];

type Line = { name: string; note?: string; price?: string };

export const menuBook: Record<Category, Line[]> = {
  Entradas: [
    { name: "Camarão cozido (20)", price: "650 MT" },
    { name: "Camarão alhinho", price: "650 MT" },
    { name: "Moela (frita / guizada)", price: "330 MT" },
    { name: "Fígados e moela fritas", price: "330 MT" },
    { name: "Sopa do dia", price: "250 MT" },
    { name: "Sopa de peixe", price: "370 MT" },
    { name: "Rissóis de camarão (4)", price: "290 MT" },
    { name: "Chamussas de camarão (4)", price: "290 MT" },
    { name: "Chamussas de carne (4)", price: "290 MT" },
    { name: "Azeitonas (pretas / verdes)", price: "315 MT" },
    { name: "Amendoim torrado", price: "110 MT" },
    { name: "Tremoços", price: "190 MT" },
    { name: "Pão de alho", price: "55 MT" },
    { name: "Pão de alho c/ queijo", price: "135 MT" },
  ],
  Carnes: [
    { name: "Prego no prato", price: "550 MT" },
    { name: "Bife filete (250 g)", price: "1 330 MT" },
    { name: "Bife alcatra", price: "1 075 MT" },
    { name: "Bife filete recheado (250 g)", price: "1 400 MT" },
    { name: "Carne assada c/ esparguete ou puré", price: "615 MT" },
    { name: "T-bone", price: "990 MT" },
    { name: "Carne de panela", price: "850 MT" },
    { name: "Prego panado à piri-piri", price: "630 MT" },
    { name: "Bife tomahawk", price: "1 700 MT" },
  ],
  Aves: [
    { name: "Franguinho (40 min.)", price: "665 MT" },
    { name: "1/2 frango", price: "625 MT" },
    { name: "Caril de frango", price: "600 MT" },
    { name: "Frango à piri-piri", price: "625 – 895 MT" },
  ],
  "Peixe & Marisco": [
    { name: "Bacalhau cozido / assado", price: "2 300 MT" },
    { name: "Serra grelhada", price: "650 MT" },
    { name: "Peixe vermelho grelhado", price: "910 MT" },
    { name: "Posta de garoupa grelhada", price: "1 050 MT" },
    { name: "Filete de serra grelhado", price: "900 MT" },
    { name: "Filete de serra panado", price: "970 MT" },
    { name: "Espetada de marisco", price: "1 170 MT" },
    { name: "Lulas fritas / grelhadas", price: "1 080 MT" },
    { name: "Camarão pequeno grelhado (12)", price: "990 MT" },
    { name: "Camarão grelhado (8)", price: "1 170 MT" },
    { name: "Camarão médio grelhado (5)", price: "2 000 MT" },
    { name: "Camarão grande grelhado (4)", price: "2 940 MT" },
    { name: "Caril de camarão", price: "880 MT" },
  ],
  "Pratos Nacionais": [
    { name: "Matapa com caranguejo", price: "600 MT" },
    { name: "Caril de frango com amendoim", price: "600 MT" },
    { name: "Mboa com caranguejo e camarão", price: "600 MT" },
  ],
  "Pratos Vegetarianos": [
    { name: "Caril de vegetais", price: "390 MT" },
  ],
  Acompanhamentos: [
    { name: "Batata frita", price: "165 MT" },
    { name: "Salada mista", price: "190 MT" },
    { name: "Vegetais cozidos", price: "215 MT" },
    { name: "Pãozinho", price: "35 MT" },
    { name: "Manteiguinha", price: "40 MT" },
    { name: "Ovo", price: "35 MT" },
    { name: "Papri (Papadums)", price: "55 MT" },
    { name: "Arroz branco", price: "85 MT" },
    { name: "Puré de batata", price: "165 MT" },
    { name: "Arroz do dia", price: "200 MT" },
    { name: "Xima", price: "85 MT" },
    { name: "Molhos extras", price: "110 MT" },
  ],
  Omeletes: [
    { name: "Omelete simples", price: "240 MT" },
    { name: "Omelete de queijo ou fiambre", price: "350 MT" },
    { name: "Omelete de camarão", price: "650 MT" },
    { name: "Omelete mista", price: "510 MT" },
  ],
  Sandes: [
    { name: "Prego", price: "350 MT" },
    { name: "Prego de picanha", price: "450 MT" },
    { name: "Sandes de carne assada", price: "210 MT" },
    { name: "Sandes mista", price: "200 MT" },
    { name: "Sandes de queijo ou fiambre", price: "140 MT" },
    { name: "Sandes de ovo", price: "95 MT" },
    { name: "Sandes simples", price: "65 MT" },
  ],
  Tostas: [
    { name: "Tosta de carne assada", price: "250 MT" },
    { name: "Tosta mista", price: "240 MT" },
    { name: "Tosta de queijo ou fiambre", price: "150 MT" },
    { name: "Tosta de frango c/ maionese", price: "250 MT" },
    { name: "Tosta de ovo", price: "100 MT" },
    { name: "Tosta simples", price: "70 MT" },
  ],
  Sobremesas: [
    { name: "Arroz doce", price: "330 MT" },
    { name: "Pudim flan", price: "330 MT" },
    { name: "Pudim de maracujá", price: "330 MT" },
    { name: "Bolas de sorvete (3)", price: "330 MT" },
    { name: "Salada de fruta", price: "330 MT" },
    { name: "Salada de fruta c/ sorvete", price: "330 MT" },
    { name: "Mousse de chocolate", price: "330 MT" },
    { name: "Chiffon de chocolate (fatia)", price: "330 MT" },
    { name: "Tarte de leite", price: "110 MT" },
  ],
  Bebidas: [
    { name: "Draft Beer", price: "180 MT" },
    { name: "Heineken Draft 250ml", price: "220 MT" },
    { name: "Refrigerantes", price: "90 MT" },
    { name: "Águas", price: "75 MT" },
    { name: "Expresso", price: "80 MT" },
  ],
};

export const specialties = [
  {
    n: "01",
    title: "Franguinho",
    kicker: "A assinatura da casa",
    desc: "40 min. de confeção na brasa para atingir o sabor autêntico.",
    img: "/images/fotos/frango-inteiro.webp",
    href: "#menu",
  },
  {
    n: "02",
    title: "Camarão Grelhado",
    kicker: "Do mar para a brasa",
    desc: "Camarão tigre e médio, alho, limão e azeite.",
    img: "/images/fotos/camarao-grelhado.webp",
    href: "#menu",
  },
  {
    n: "03",
    title: "Pratos Nacionais",
    kicker: "Sabor de Moçambique",
    desc: "Matapa, Caril de Amendoim e Mboa com caranguejo.",
    img: "/images/fotos/xima-estufado.webp",
    href: "#menu",
  },
  {
    n: "04",
    title: "Bebidas",
    kicker: "Geladas, sempre",
    desc: "Cerveja de pressão, vinhos e refrigerantes.",
    img: "/images/p53.webp",
    href: "#menu",
  },
];

export const gallery = [
  { src: "/images/p13.webp", alt: "Fachada do Restaurante Píri Píri na Av. 24 de Julho", w: 1100, h: 825, wide: true },
  { src: "/images/fotos/ambiente-terraco.webp", alt: "Cliente a saborear uma bebida na esplanada", w: 1000, h: 1249 },
  { src: "/images/fotos/pina-colada.webp", alt: "Piña colada gelada ao balcão", w: 1000, h: 1250 },
  { src: "/images/fotos/caril-frango.webp", alt: "Caril de frango com arroz branco", w: 1000, h: 1249 },
  { src: "/images/fotos/cocktails.webp", alt: "Cocktails frutados com palhinhas coloridas", w: 1000, h: 1250 },
  { src: "/images/fotos/camarao-grelhado.webp", alt: "Camarão tigre grelhado com salada e batata frita", w: 1200, h: 798, wide: true },
  { src: "/images/fotos/frango-inteiro.webp", alt: "Frango à Píri-píri com batata frita e limão", w: 1200, h: 798, wide: true },
  { src: "/images/fotos/cocktail-maracuja.webp", alt: "Cocktail de maracujá com laranja e guarda-chuva", w: 1000, h: 1250 },
  { src: "/images/fotos/cerveja-draft.webp", alt: "Cerveja de pressão gelada", w: 1000, h: 1250 },
  { src: "/images/fotos/xima-estufado.webp", alt: "Estufado servido com xima", w: 1000, h: 1250 },
  { src: "/images/fotos/sangria.webp", alt: "Sangria com fruta e jarro de barro", w: 1000, h: 1250 },
  { src: "/images/fotos/arroz-marisco.webp", alt: "Arroz de marisco com camarão", w: 1200, h: 798, wide: true },
  { src: "/images/fotos/bife-panado.webp", alt: "Bife panado com ovo estrelado e batata frita", w: 1200, h: 798, wide: true },
  { src: "/images/fotos/cafe-com-leite.webp", alt: "Café com leite em copo de vidro", w: 1000, h: 1250 },
  { src: "/images/fotos/expresso-pastel.webp", alt: "Expresso com pastel de nata", w: 1000, h: 1250 },
  { src: "/images/fotos/takeaway.webp", alt: "Embalagens para take away ao balcão", w: 1200, h: 798, wide: true },
  { src: "/images/p14.webp", alt: "Sala do restaurante com mesas e toalhas", w: 1100, h: 619, wide: true },
  { src: "/images/fotos/peixe-legumes.webp", alt: "Peixe grelhado com legumes e azeitonas", w: 1200, h: 676, wide: true },
  { src: "/images/p15.webp", alt: "Interior do restaurante ao fim do dia", w: 1100, h: 619, wide: true },
];
