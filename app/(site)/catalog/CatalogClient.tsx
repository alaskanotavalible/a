"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { Container, Button } from "@/components/ui";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import Filters, { defaultFilters, FilterState } from "@/components/Filters";

export default function CatalogClient() {
  const [filters, setFilters] = useState<FilterState>({
    ...defaultFilters,
    maxPrice: Math.max(...products.map((p) => p.priceKzt)),
  });

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

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Каталог"
            title="Биметаллические радиаторы"
            description="Подберите высоту, мощность и количество секций под ваш объект. Нажмите “Запросить расчёт” — мы подскажем оптимальный вариант."
          />

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() =>
                setFilters({
                  ...defaultFilters,
                  maxPrice: Math.max(...products.map((p) => p.priceKzt)),
                })
              }
            >
              Сбросить
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[360px_1fr]">
          <div className="lg:sticky lg:top-[92px] lg:h-fit">
            <Filters products={products} value={filters} onChange={setFilters} />
          </div>

          <div>
            <div className="mb-4 text-sm text-stone-600">
              Найдено моделей: <span className="font-semibold text-ink">{filtered.length}</span>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-stone-100 bg-white p-8 text-center shadow-soft">
                <div className="text-lg font-semibold tracking-premium text-ink">
                  Ничего не найдено
                </div>
                <div className="mt-2 text-sm text-stone-600">
                  Ослабьте фильтры или сбросьте их.
                </div>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
