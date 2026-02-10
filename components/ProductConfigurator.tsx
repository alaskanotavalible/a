"use client";

import { useState } from "react";
import { Button } from "@/components/ui"; // Проверь правильность импорта Button
import { formatPriceKZT } from "@/lib/utils"; // Проверь путь к utils
import Link from "next/link";

// Типизация продукта (можно импортировать из types, если есть)
interface Product {
  name: string;
  priceKzt: number;
  slug: string;
}

const colors = [
  { name: "Белый", bgClass: "bg-white", borderClass: "border-gray-200" },
  { name: "Черный", bgClass: "bg-zinc-900", borderClass: "border-zinc-800" },
  { name: "Графит", bgClass: "bg-gray-400", borderClass: "border-gray-400" },
];

export default function ProductConfigurator({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState("Белый");

  // Функция для WhatsApp с учетом выбранного цвета
  const handleOrderClick = () => {
    const message = `Здравствуйте! Меня интересует радиатор: ${product.name}. Цвет: ${selectedColor}. Цена: ${product.priceKzt} ₸.`;
    const url = `https://wa.me/77000000000?text=${encodeURIComponent(message)}`; // Замени номер на свой
    window.open(url, "_blank");
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-xl relative overflow-hidden">
      <div className="text-sm font-bold tracking-wide text-muted uppercase mb-4">
        Конфигурация и цена
      </div>

      {/* Выбор цвета */}
      <div className="mb-6">
        <div className="text-xs font-bold text-foreground mb-3">Выберите цвет: <span className="text-heat">{selectedColor}</span></div>
        <div className="flex flex-wrap gap-2">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setSelectedColor(c.name)}
              className={`px-4 py-3 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${
                selectedColor === c.name
                  ? "bg-secondary border-heat text-foreground ring-1 ring-heat shadow-lg shadow-orange-500/10"
                  : "bg-background border-border text-muted hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              <span className={`w-4 h-4 rounded-full border shadow-sm ${c.bgClass} ${c.borderClass}`} />
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Блок цены */}
      <div className="rounded-2xl bg-secondary p-6 border border-border mb-6">
        <div className="text-xs text-muted mb-1 font-medium">Розничная цена</div>
        <div className="text-4xl font-bold tracking-tight text-foreground">
          {formatPriceKZT(product.priceKzt)}
        </div>
        <div className="mt-3 text-[10px] leading-relaxed text-muted uppercase tracking-tighter">
          Стоимость может варьироваться в зависимости от объёма заказа.
        </div>
      </div>

      {/* Кнопки */}
      <div className="grid gap-3">
        <Button 
            onClick={handleOrderClick}
            className="w-full bg-heat text-white hover:bg-heat/90 py-6 text-lg font-bold shadow-lg shadow-orange-500/20"
        >
          Заказать в WhatsApp
        </Button>
        
        <Link href="/contacts">
          <Button variant="outline" className="w-full bg-transparent border-border text-foreground hover:bg-secondary py-6">
            Связаться с нами
          </Button>
        </Link>
        <Link href="/catalog">
          <Button variant="ghost" className="w-full text-muted hover:text-foreground">
            Вернуться в каталог
          </Button>
        </Link>
      </div>

      <div className="mt-8 text-[10px] font-bold uppercase tracking-widest text-muted text-center border-t border-border pt-6">
        Гарантия 10 лет · Сертификат CT-KZ · Доставка РК
      </div>
    </div>
  );
}