export type ProductType = "Биметалл";

export type Product = {
  id: string;
  slug: string;
  name: string;
  series: string; // TT Bimetal
  type: ProductType;
  heightMm: 350 | 500; // Только 350 и 500
  depthMm: 80 | 100;   // Глубина (межосевое)
  sections: 6 | 8 | 10 | 12 | 14;
  powerW: number; // условная тепловая мощность
  pressureAtm: number; // рабочее давление
  warrantyYears: number;
  priceKzt: number;
  colors: ("Белый" | "Черный" | "Серебро")[]; // Доступные цвета
  connection: "Боковое" | "Нижнее";
  inStock: boolean;
  short: string;
  image: string;
};

export const products: Product[] = [
  // --- МОДЕЛИ 350 мм ---
  {
    id: "1",
    slug: "tt-bimetal-350-80-6",
    name: "TT Bimetal 350/80 (6 секций)",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 350,
    depthMm: 80,
    sections: 6,
    powerW: 840,
    pressureAtm: 30,
    warrantyYears: 10,
    priceKzt: 28900,
    colors: ["Белый", "Черный", "Серебро"],
    connection: "Боковое",
    inStock: true,
    short: "Компактный радиатор для низких подоконников.",
    image: "/radiator-350.png"
  },
  {
    id: "2",
    slug: "tt-bimetal-350-80-8",
    name: "TT Bimetal 350/80 (8 секций)",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 350,
    depthMm: 80,
    sections: 8,
    powerW: 1120,
    pressureAtm: 30,
    warrantyYears: 10,
    priceKzt: 34900,
    colors: ["Белый", "Черный", "Серебро"],
    connection: "Боковое",
    inStock: true,
    short: "Универсальный размер для спальни или кухни.",
    image: "/radiator-350.png"
  },
  {
    id: "3",
    slug: "tt-bimetal-350-80-10",
    name: "TT Bimetal 350/80 (10 секций)",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 350,
    depthMm: 80,
    sections: 10,
    powerW: 1400,
    pressureAtm: 30,
    warrantyYears: 10,
    priceKzt: 42900,
    colors: ["Белый", "Черный", "Серебро"],
    connection: "Боковое",
    inStock: true,
    short: "Мощный радиатор небольшой высоты.",
    image: "/radiator-350.png"
  },
  {
    id: "4",
    slug: "tt-bimetal-350-80-12",
    name: "TT Bimetal 350/80 (12 секций)",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 350,
    depthMm: 80,
    sections: 12,
    powerW: 1680,
    pressureAtm: 30,
    warrantyYears: 10,
    priceKzt: 49900,
    colors: ["Белый", "Черный", "Серебро"],
    connection: "Боковое",
    inStock: true,
    short: "Максимальная ширина для больших окон.",
    image: "/radiator-350.png"
  },

  // --- МОДЕЛИ 500 мм (Глубина 80) ---
  {
    id: "5",
    slug: "tt-bimetal-500-80-6",
    name: "TT Bimetal 500/80 (6 секций)",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 500,
    depthMm: 80,
    sections: 6,
    powerW: 1140,
    pressureAtm: 30,
    warrantyYears: 10,
    priceKzt: 32900,
    colors: ["Белый", "Черный", "Серебро"],
    connection: "Боковое",
    inStock: true,
    short: "Стандарт для небольших комнат.",
    image: "/radiator-500.png"
  },
  {
    id: "6",
    slug: "tt-bimetal-500-80-8",
    name: "TT Bimetal 500/80 (8 секций)",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 500,
    depthMm: 80,
    sections: 8,
    powerW: 1520,
    pressureAtm: 30,
    warrantyYears: 10,
    priceKzt: 41900,
    colors: ["Белый", "Черный", "Серебро"],
    connection: "Боковое",
    inStock: true,
    short: "Классический выбор для гостиной.",
    image: "/radiator-500.png"
  },
  {
    id: "7",
    slug: "tt-bimetal-500-80-10",
    name: "TT Bimetal 500/80 (10 секций)",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 500,
    depthMm: 80,
    sections: 10,
    powerW: 1900,
    pressureAtm: 30,
    warrantyYears: 10,
    priceKzt: 51900,
    colors: ["Белый", "Черный", "Серебро"],
    connection: "Боковое",
    inStock: true,
    short: "Высокая теплоотдача для залов.",
    image: "/radiator-500.png"
  },
  {
    id: "8",
    slug: "tt-bimetal-500-80-12",
    name: "TT Bimetal 500/80 (12 секций)",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 500,
    depthMm: 80,
    sections: 12,
    powerW: 2280,
    pressureAtm: 30,
    warrantyYears: 10,
    priceKzt: 61900,
    colors: ["Белый", "Черный", "Серебро"],
    connection: "Боковое",
    inStock: true,
    short: "Максимальная мощность в стандартном корпусе.",
    image: "/radiator-500.png"
  },

  // --- МОДЕЛИ 500 мм (Глубина 100 - Усиленные) ---
  {
    id: "9",
    slug: "tt-bimetal-500-100-8",
    name: "TT Bimetal 500/100 (8 секций)",
    series: "TT Bimetal PRO",
    type: "Биметалл",
    heightMm: 500,
    depthMm: 100,
    sections: 8,
    powerW: 1640,
    pressureAtm: 35,
    warrantyYears: 15,
    priceKzt: 46900,
    colors: ["Белый"],
    connection: "Боковое",
    inStock: true,
    short: "Увеличенная глубина и теплоотдача.",
    image: "/radiator-500-pro.png"
  },
  {
    id: "10",
    slug: "tt-bimetal-500-100-10",
    name: "TT Bimetal 500/100 (10 секций)",
    series: "TT Bimetal PRO",
    type: "Биметалл",
    heightMm: 500,
    depthMm: 100,
    sections: 10,
    powerW: 2050,
    pressureAtm: 35,
    warrantyYears: 15,
    priceKzt: 58900,
    colors: ["Белый"],
    connection: "Боковое",
    inStock: true,
    short: "Флагманская мощность для угловых комнат.",
    image: "/radiator-500-pro.png"
  }
];