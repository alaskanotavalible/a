"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { Container, Button } from "@/components/ui";
import ProductCard from "@/components/ProductCard";
import Filters, { defaultFilters, FilterState } from "@/components/Filters";

export default function CatalogClient() {
  // Инициализация фильтров с учетом максимальной цены из данных
  const [filters, setFilters] = useState<FilterState>({
    ...defaultFilters,
    maxPrice: Math.max(...products.map((p) => p.priceKzt)),
  });

  // Логика фильтрации
  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.heightMm !== "all" && p.heightMm !== filters.heightMm)
        return false;
      if (filters.sections !== "all" && p.sections !== filters.sections)
        return false;
      if (p.powerW < filters.minPower) return false;
      if (p.priceKzt > filters.maxPrice) return false;
      if (filters.inStockOnly && !p.inStock) return false;
      return true;
    });
  }, [filters]);

  const resetFilters = () => {
    setFilters({
      ...defaultFilters,
      maxPrice: Math.max(...products.map((p) => p.priceKzt)),
    });
  };

  return (
    // bg-background — основа для смены тем
    <section className="py-20 bg-background min-h-screen relative overflow-hidden transition-colors duration-300">
      
      {/* Фоновые эффекты (адаптированы) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heat/10 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-60" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10 pt-10">
          
          <div>
             <div className="text-heat text-xs font-bold uppercase tracking-widest mb-2">Каталог</div>
             <h1 className="text-4xl font-bold text-foreground">Биметаллические радиаторы</h1>
             <p className="text-muted mt-2 max-w-xl">Подберите высоту, мощность и количество секций под ваш объект.</p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="bg-transparent border-border text-foreground hover:bg-secondary"
              onClick={resetFilters}
            >
              Сбросить фильтры
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Колонка фильтров (Sticky) */}
          <div className="lg:sticky lg:top-[100px] lg:h-fit">
            {/* ВАЖНО: Убедись, что внутри компонента Filters 
                используются классы bg-card, text-foreground и border-border 
            */}
            <Filters products={products} value={filters} onChange={setFilters} />
          </div>

          {/* Сетка товаров */}
          <div>
            <div className="mb-6 text-sm text-muted">
              Найдено моделей: <span className="font-bold text-foreground ml-1">{filtered.length}</span>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
                <div className="text-xl font-bold text-foreground mb-2">
                  Ничего не найдено
                </div>
                <div className="text-sm text-muted mb-6">
                  Попробуйте изменить параметры фильтрации.
                </div>
                 <Button 
                   onClick={resetFilters}
                   className="!bg-heat !text-white border-0 font-bold"
                 >
                    Очистить фильтры
                 </Button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}