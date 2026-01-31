export type ProductType = "Биметалл";

export type Product = {
  id: string;
  slug: string;
  name: string;
  series: string; // TT Bimetal
  type: ProductType;
  heightMm: 350 | 500 | 700;
  sections: 6 | 8 | 10 | 12 | 14;
  powerW: number; // условная тепловая мощность
  pressureAtm: number; // рабочее давление
  warrantyYears: number;
  priceKzt: number;
  finish: "Матовый белый" | "Сатин графит" | "Премиум белый";
  connection: "Боковое" | "Нижнее";
  inStock: boolean;
  short: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "tt-bimetal-350-6",
    name: "TT Bimetal 350 / 6",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 350,
    sections: 6,
    powerW: 720,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 32900,
    finish: "Премиум белый",
    connection: "Боковое",
    inStock: true,
    short: "Компактное решение для кухонь, детских и небольших комнат."
  },
  {
    id: "2",
    slug: "tt-bimetal-350-8",
    name: "TT Bimetal 350 / 8",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 350,
    sections: 8,
    powerW: 960,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 39900,
    finish: "Матовый белый",
    connection: "Боковое",
    inStock: true,
    short: "Баланс мощности и размера — универсальный формат."
  },
  {
    id: "3",
    slug: "tt-bimetal-350-10",
    name: "TT Bimetal 350 / 10",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 350,
    sections: 10,
    powerW: 1200,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 48900,
    finish: "Сатин графит",
    connection: "Боковое",
    inStock: true,
    short: "Когда важна мощность, но нужен низкий радиатор."
  },
  {
    id: "4",
    slug: "tt-bimetal-500-6",
    name: "TT Bimetal 500 / 6",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 500,
    sections: 6,
    powerW: 1020,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 41900,
    finish: "Премиум белый",
    connection: "Боковое",
    inStock: true,
    short: "Классический стандарт высоты для квартир и домов."
  },
  {
    id: "5",
    slug: "tt-bimetal-500-8",
    name: "TT Bimetal 500 / 8",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 500,
    sections: 8,
    powerW: 1360,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 54900,
    finish: "Матовый белый",
    connection: "Боковое",
    inStock: true,
    short: "Оптимальный выбор для гостиной и спальни."
  },
  {
    id: "6",
    slug: "tt-bimetal-500-10",
    name: "TT Bimetal 500 / 10",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 500,
    sections: 10,
    powerW: 1700,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 64900,
    finish: "Сатин графит",
    connection: "Боковое",
    inStock: true,
    short: "Повышенная мощность — для больших помещений."
  },
  {
    id: "7",
    slug: "tt-bimetal-500-12",
    name: "TT Bimetal 500 / 12",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 500,
    sections: 12,
    powerW: 2040,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 75900,
    finish: "Премиум белый",
    connection: "Нижнее",
    inStock: true,
    short: "Аккуратный монтаж + стильный вид без лишних труб."
  },
  {
    id: "8",
    slug: "tt-bimetal-700-8",
    name: "TT Bimetal 700 / 8",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 700,
    sections: 8,
    powerW: 1840,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 79900,
    finish: "Матовый белый",
    connection: "Боковое",
    inStock: true,
    short: "Максимальная теплоотдача — для высоких потолков и холлов."
  },
  {
    id: "9",
    slug: "tt-bimetal-700-10",
    name: "TT Bimetal 700 / 10",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 700,
    sections: 10,
    powerW: 2300,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 92900,
    finish: "Сатин графит",
    connection: "Боковое",
    inStock: true,
    short: "Флагман для требовательных интерьеров и проектов."
  },
  {
    id: "10",
    slug: "tt-bimetal-500-14",
    name: "TT Bimetal 500 / 14",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 500,
    sections: 14,
    powerW: 2380,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 88900,
    finish: "Премиум белый",
    connection: "Боковое",
    inStock: false,
    short: "Для больших помещений — под заказ / уточняйте наличие."
  },
  {
    id: "11",
    slug: "tt-bimetal-350-12",
    name: "TT Bimetal 350 / 12",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 350,
    sections: 12,
    powerW: 1440,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 61900,
    finish: "Матовый белый",
    connection: "Нижнее",
    inStock: true,
    short: "Тепло и эстетика — скрытая подводка выглядит премиально."
  },
  {
    id: "12",
    slug: "tt-bimetal-700-12",
    name: "TT Bimetal 700 / 12",
    series: "TT Bimetal",
    type: "Биметалл",
    heightMm: 700,
    sections: 12,
    powerW: 2760,
    pressureAtm: 25,
    warrantyYears: 10,
    priceKzt: 104900,
    finish: "Премиум белый",
    connection: "Боковое",
    inStock: true,
    short: "Мощность с запасом — идеален для коттеджей и коммерции."
  }
];
