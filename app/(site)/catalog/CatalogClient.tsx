"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/ui";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";
import { products } from "@/data/products"; // Твой новый файл с данными

export default function CatalogClient() {
  // Состояния фильтров
  const [height, setHeight] = useState<number | null>(null);
  const [depth, setDepth] = useState<number | null>(null);
  const [color, setColor] = useState<string | null>(null);

  // Логика фильтрации
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // 1. Фильтр по высоте
      if (height && p.heightMm !== height) return false;
      
      // 2. Фильтр по глубине (межосевое)
      if (depth && p.depthMm !== depth) return false;

      // 3. Фильтр по цвету
      // @ts-ignore
      if (color && p.colors && !p.colors.includes(color)) return false;

      return true;
    });
  }, [height, depth, color]);

  // Сброс всех фильтров
  const resetFilters = () => {
    setHeight(null);
    setDepth(null);
    setColor(null);
  };

  return (
    <section className="py-12 bg-background min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Сайдбар с фильтрами */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <Filters
                selectedHeight={height}
                onHeightChange={setHeight}
                selectedDepth={depth}
                onDepthChange={setDepth}
                onReset={resetFilters}
                totalCount={filteredProducts.length}
              />
            </div>
          </aside>

          {/* Сетка товаров */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-dashed border-border bg-card/30">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-foreground">Ничего не найдено</h3>
                <p className="text-muted mt-2">Попробуйте сбросить фильтры.</p>
                <button 
                  onClick={resetFilters}
                  className="mt-6 px-6 py-2 bg-heat text-white rounded-lg font-bold hover:bg-orange-600 transition"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
          
        </div>
      </Container>
    </section>
  );
}