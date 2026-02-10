"use client";

import { useState } from "react";
import { Container, Button } from "@/components/ui";
import Link from "next/link";
import { formatPriceKZT } from "@/lib/utils";
import Radiator3D from "./Radiator3D";

// Типы (упрощенно)
interface Product {
    slug: string;
    name: string;
    priceKzt: number;
    warrantyYears: number;
    series: string;
    short: string;
    heightMm?: number;
    sections?: number;
    powerW?: number;
    pressureAtm?: number;
    depthMm?: number; 
    inStock?: boolean;
}

const colors = [
  { name: "Белый", bgClass: "bg-white", borderClass: "border-gray-200" },
  { name: "Черный", bgClass: "bg-zinc-900", borderClass: "border-zinc-800" },
  { name: "Графит", bgClass: "bg-gray-400", borderClass: "border-gray-400" },
];

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState("Белый");

  const handleOrderClick = () => {
    const message = `Здравствуйте! Интересует: ${product.name}. Цвет: ${selectedColor}. Цена: ${product.priceKzt}`;
    window.open(`https://wa.me/77000000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-24 sm:py-32 bg-background min-h-screen relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heat/10 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-30" />
      
      <Container className="relative z-10">
        <div className="mb-8 flex items-center justify-between gap-3">
            <Link href="/catalog" className="text-sm font-medium text-muted hover:text-heat transition-colors">
            ← Назад в каталог
            </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="space-y-6">
            {/* 3D МОДЕЛЬ */}
            <Radiator3D 
                sections={product.sections || 10}
                heightMm={product.heightMm || 500}
                depthMm={product.depthMm || 80}
                color={selectedColor}
            />

            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="text-xs font-bold tracking-widest text-heat uppercase mb-2">{product.series}</div>
                <h1 className="text-3xl font-bold text-foreground sm:text-5xl">{product.name}</h1>
                <p className="mt-4 text-base text-muted">{product.short}</p>
                
                {/* Характеристики (можно вынести в массив если надо) */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                   <div className="bg-secondary/30 p-4 rounded-xl">
                      <div className="text-xs text-muted uppercase">Высота</div>
                      <div className="text-lg font-bold">{product.heightMm} мм</div>
                   </div>
                   <div className="bg-secondary/30 p-4 rounded-xl">
                      <div className="text-xs text-muted uppercase">Секций</div>
                      <div className="text-lg font-bold">{product.sections}</div>
                   </div>
                   {/* Добавь остальные характеристики по желанию */}
                </div>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА (Конфигуратор) */}
          <div className="h-fit lg:sticky lg:top-24">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
                <div className="text-sm font-bold tracking-wide text-muted uppercase mb-4">Конфигурация</div>
                
                {/* Выбор цвета */}
                <div className="mb-6">
                    <div className="text-xs font-bold text-foreground mb-3">Цвет: <span className="text-heat">{selectedColor}</span></div>
                    <div className="flex flex-wrap gap-2">
                    {colors.map((c) => (
                        <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`px-4 py-3 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${
                            selectedColor === c.name
                            ? "bg-secondary border-heat text-foreground ring-1 ring-heat"
                            : "bg-background border-border text-muted hover:border-foreground/30"
                        }`}
                        >
                        <span className={`w-4 h-4 rounded-full border shadow-sm ${c.bgClass} ${c.borderClass}`} />
                        {c.name}
                        </button>
                    ))}
                    </div>
                </div>

                {/* Цена и кнопка */}
                <div className="rounded-2xl bg-secondary p-6 border border-border mb-6">
                    <div className="text-4xl font-bold text-foreground">{formatPriceKZT(product.priceKzt)}</div>
                </div>
                <Button onClick={handleOrderClick} className="w-full bg-heat text-white py-6 text-lg font-bold">
                    Заказать в WhatsApp
                </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}