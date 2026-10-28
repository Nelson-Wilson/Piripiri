import type { Category } from "./menu";

export type Lang = "pt" | "en";

export const categoryEn: Record<Category, string> = {
  Carnes: "Meats",
  "Peixe & Marisco": "Fish & Seafood",
  Entradas: "Starters",
  Acompanhamentos: "Sides",
  Sobremesas: "Desserts",
  Bebidas: "Drinks",
};

/** Tradução (EN) de nomes, descrições, selos e notas. Chave = texto original em PT. */
export const en: Record<string, string> = {
  // pratos
  "Frango à Píri-píri": "Piri-piri Chicken",
  "Frango à Píri-píri · Meio": "Piri-piri Chicken · Half",
  "O prato da casa. Frango marinado no nosso piri-piri, grelhado lentamente sobre brasa viva até ficar dourado e suculento.":
    "The house special. Chicken marinated in our piri-piri, slowly grilled over live embers until golden and juicy.",
  "Meio frango na brasa, com batata frita, salada de cebola e limão. A dose de quem não quer partilhar.":
    "Half a charcoal-grilled chicken with fries, onion salad and lemon. For those who don't want to share.",
  "Prego no Prato": "Steak on a Plate (Prego)",
  "Bife de vaca grelhado no carvão, servido com batata frita, arroz e ovo. O clássico de Maputo, feito como sempre foi.":
    "Charcoal-grilled beef steak served with fries, rice and egg. The Maputo classic, made the way it's always been.",
  "Prego no Pão": "Steak Sandwich (Prego)",
  "Bife grelhado dentro do pão, alho, piri-piri e batata frita. Simples, rápido, memorável.":
    "Grilled steak in a bread roll with garlic, piri-piri and fries. Simple, quick, memorable.",
  "Moelas Estufadas": "Stewed Gizzards",
  "Moelas cozinhadas devagar no nosso molho, com pão para acompanhar.":
    "Gizzards slow-cooked in our sauce, served with bread.",
  "Camarão Grelhado": "Grilled Prawns",
  "Camarão médio e tigre na brasa, alho, limão e um fio de azeite. Servido com batata frita e salada.":
    "Medium and tiger prawns grilled over embers with garlic, lemon and a drizzle of olive oil. Served with fries and salad.",
  "Caril de Camarão": "Prawn Curry",
  "Camarão cozido lentamente em caril aromático da casa, para molhar o pão até ao fim.":
    "Prawns slowly cooked in our aromatic house curry, perfect for dipping bread.",
  "Lulas Grelhadas": "Grilled Squid",
  "Lulas tenras na grelha, alho e limão, com arroz e legumes salteados.":
    "Tender grilled squid with garlic and lemon, served with rice and sautéed vegetables.",
  "Peixe Vermelho": "Red Fish",
  "Peixe vermelho fresco do dia, grelhado inteiro na brasa, com limão e salada.":
    "Fresh red fish of the day, grilled whole over embers, with lemon and salad.",
  "Peixe Grelhado com Legumes": "Grilled Fish with Vegetables",
  "Filete grelhado com legumes salteados — leve, fresco e cheio de sabor a carvão.":
    "Grilled fillet with sautéed vegetables — light, fresh and full of charcoal flavour.",
  "Camarão Alhinho": "Garlic Prawns",
  "Camarão salteado em alho e azeite, a fumegar na travessa.":
    "Prawns sautéed in garlic and olive oil, served sizzling on the dish.",
  "Rissóis e Empadas": "Rissoles & Pies",
  "Rissóis e empadas de carne e peixe, fritos na hora.": "Meat and fish rissoles and pies, fried to order.",
  "Azeitonas Marinadas": "Marinated Olives",
  "Azeitonas marinadas na casa — o início perfeito antes da brasa.":
    "House-marinated olives — the perfect start before the grill.",
  "Batata Frita": "French Fries",
  "Batata dourada, crocante por fora — o acompanhamento de sempre.":
    "Golden potatoes, crispy outside — the classic side.",
  "Batatas Salteadas": "Sautéed Potatoes",
  "Batatas pequenas salteadas em manteiga e ervas.": "Baby potatoes sautéed in butter and herbs.",
  "Sorvete Servido na Taça": "Ice Cream in a Cup",
  "Gelado cremoso servido na taça clássica, para fechar a refeição.":
    "Creamy ice cream served in a classic cup to finish the meal.",
  Expresso: "Espresso",
  "Café expresso curto, bem tirado — a assinatura do fim da refeição.":
    "A short, well-pulled espresso — the signature end to a meal.",
  "Heineken Draft 250ml": "Heineken Draft 250ml",
  "Cerveja gelada de pressão, servida no copo alto.": "Ice-cold draught beer served in a tall glass.",
  "Draft Beer": "Draft Beer",
  "Imperial bem gelada, para acompanhar o frango na brasa.": "Ice-cold draught, made for grilled chicken.",
  // novos pratos (fotos novas)
  "Bife Panado com Ovo": "Breaded Steak with Egg",
  "Bife panado e estaladiço com ovo estrelado e batata frita dourada.":
    "Crispy breaded steak topped with a fried egg, served with golden fries.",
  "Caril de Frango": "Chicken Curry",
  "Frango no molho de caril da casa, servido com arroz branco.":
    "Chicken in our house curry sauce, served with white rice.",
  "Arroz de Marisco": "Seafood Rice",
  "Arroz cozinhado com camarão e marisco, finalizado com ervas frescas.":
    "Rice cooked with prawns and seafood, finished with fresh herbs.",
  Cocktails: "Cocktails",
  "Cocktails frutados servidos bem frios ao balcão.": "Fruity cocktails served ice cold at the bar.",
  "Piña Colada": "Piña Colada",
  "Cremosa, gelada e decorada com ananás.": "Creamy, ice-cold and garnished with pineapple.",
  Sangria: "Sangria",
  "Sangria fresca com fruta, servida no copo e no jarro de barro.":
    "Fresh fruit sangria, served by the glass and in a clay jug.",
  // selos / notas
  Inteiro: "Whole",
  Meio: "Half",
  "Prato do dia": "Dish of the day",
  "Take away": "Take away",
  "1/2 dose · dose": "Half portion · portion",
  "Fritas · Grelhadas": "Fried · Grilled",
  "Inteiro · Meio": "Whole · Half",
  "com batata, arroz e ovo": "with fries, rice and egg",
  "Preço sob consulta": "Price on request",
  consultar: "ask",
  // carta
  "Camarão Tigre Grelhado": "Grilled Tiger Prawns",
  "Camarão Cozido": "Boiled Prawns",
  "Lulas Grelhadas ou Fritas": "Grilled or Fried Squid",
  "Filete de Peixe Panado / Grelhado": "Breaded / Grilled Fish Fillet",
  "Espetada de Marisco": "Seafood Skewer",
  "Bacalhau Cozido / Assado": "Boiled / Roasted Cod",
  "Azeitonas Simples": "Plain Olives",
  "Rissóis de Camarão": "Prawn Rissoles",
  "Chamussas de Camarão": "Prawn Samosas",
  "Chamussas de Carne": "Meat Samosas",
  "Sopa do Dia": "Soup of the Day",
  "Pão de Alho": "Garlic Bread",
  Arroz: "Rice",
  Salada: "Salad",
  "Legumes Salteados": "Sautéed Vegetables",
  "Doce do Dia": "Dessert of the Day",
  Refrigerantes: "Soft Drinks",
  Águas: "Water",
};

export const ui = {
  pt: {
    kicker: "Menu em",
    title: "Destaque",
    sub: "Os nossos pratos mais pedidos pelos clientes.",
    order: "Pedir Agora",
    book: "Carta",
    bilingual: "Menu bilingue PT / EN",
    note: "Preços retirados do menu impresso da casa. Pratos e disponibilidade podem variar — confirme por telefone antes de encomendar.",
    avg: "Preço médio por pessoa",
    dayDish: "Prato do dia disponível.",
    orderBtn: "Encomendar",
    photos: "Ver fotografias",
    full: "Ver menu completo",
    prev: "Pratos anteriores",
    next: "Pratos seguintes",
    back: "Voltar ao site",
    pageTitle: "Menu completo",
    pageSub: "Carta completa do Restaurante Píri Píri.",
    toggle: "Traduzir para inglês",
  },
  en: {
    kicker: "Featured",
    title: "Menu",
    sub: "Our customers' most-ordered dishes.",
    order: "Order Now",
    book: "Menu",
    bilingual: "Bilingual menu PT / EN",
    note: "Prices taken from the restaurant's printed menu. Dishes and availability may vary — please confirm by phone before ordering.",
    avg: "Average price per person",
    dayDish: "Dish of the day available.",
    orderBtn: "Order",
    photos: "See photos",
    full: "View full menu",
    prev: "Previous dishes",
    next: "Next dishes",
    back: "Back to site",
    pageTitle: "Full menu",
    pageSub: "The complete Píri Píri Restaurant menu.",
    toggle: "Translate to English",
  },
} as const;

export const tr = (lang: Lang, s: string) => (lang === "en" ? en[s] ?? s : s);
