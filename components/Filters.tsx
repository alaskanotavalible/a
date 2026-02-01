"use client";

import { Product } from "@/data/products";

export type FilterState = {
  heightMm: "all" | 350 | 500 | 700;
  sections: "all" | 6 | 8 | 10 | 12 | 14;
  minPower: number;
  maxPrice: number;
  inStockOnly: boolean;
};

export const defaultFilters: FilterState = {
  heightMm: "all",
  sections: "all",
  minPower: 0,
  maxPrice: 200000,
  inStockOnly: false
};

// Адаптивный ползунок
function Range({
  label,
  value,
  setValue,
  min,
  max,
  step
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs">
        {/* text-muted для подписи */}
        <span className="font-bold text-muted uppercase tracking-wider">{label}</span>
        {/* Адаптивный бэйдж значения */}
        <span className="bg-secondary text-foreground px-2 py-1 rounded text-[10px] font-bold border border-border">
            {value.toLocaleString()}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        // bg-secondary для трека слайдера
        className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-heat hover:accent-orange-500 transition-all"
      />
    </div>
  );
}

export default function Filters({
  products,
  value,
  onChange
}: {
  products: Product[];
  value: FilterState;
  onChange: (next: FilterState) => void;
}) {
  const powerMax = Math.max(...products.map((p) => p.powerW), 3000);
  const priceMax = Math.max(...products.map((p) => p.priceKzt), 150000);

  return (
    // bg-card (белый/черный), border-border (серый/прозрачный)
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors duration-300">
      
      {/* Заголовок и Сброс */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-bold tracking-widest text-foreground uppercase">
            Фильтры
          </div>
          <div className="mt-1 text-[10px] text-muted font-medium uppercase tracking-tight">
            Быстрый подбор под задачу
          </div>
        </div>

        <button
          onClick={() => onChange({ ...defaultFilters, maxPrice: priceMax })}
          className="text-xs font-bold text-heat hover:underline transition-all"
        >
          Сбросить
        </button>
      </div>

      {/* Разделитель на базе border-border */}
      <div className="my-5 h-px bg-border" />

      <div className="grid gap-6">
        
        {/* Высота */}
        <div>
          <div className="mb-3 text-[10px] font-bold tracking-widest text-muted uppercase">
            Высота
          </div>
          <div className="flex flex-wrap gap-2">
            {(["all", 350, 500, 700] as const).map((h) => (
              <button
                key={String(h)}
                onClick={() => onChange({ ...value, heightMm: h })}
                className={`rounded-lg border px-3 py-2 text-xs font-bold transition-all ${
                  value.heightMm === h
                    ? "border-heat bg-heat text-white shadow-lg shadow-orange-500/20"
                    : "border-border bg-secondary text-muted hover:text-foreground hover:border-heat/50"
                }`}
              >
                {h === "all" ? "Любая" : `${h} мм`}
              </button>
            ))}
          </div>
        </div>

        {/* Секции */}
        <div>
          <div className="mb-3 text-[10px] font-bold tracking-widest text-muted uppercase">
            Секции
          </div>
          <div className="flex flex-wrap gap-2">
            {(["all", 6, 8, 10, 12, 14] as const).map((s) => (
              <button
                key={String(s)}
                onClick={() => onChange({ ...value, sections: s })}
                className={`rounded-lg border px-3 py-2 text-xs font-bold transition-all ${
                  value.sections === s
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-secondary text-muted hover:text-foreground hover:border-heat/50"
                }`}
              >
                {s === "all" ? "Любые" : s}
              </button>
            ))}
          </div>
        </div>

        {/* Слайдеры */}
        <Range
          label="Мин. мощность (Вт)"
          value={value.minPower}
          setValue={(v) => onChange({ ...value, minPower: v })}
          min={0}
          max={powerMax}
          step={20}
        />

        <Range
          label="Макс. цена (₸)"
          value={value.maxPrice}
          setValue={(v) => onChange({ ...value, maxPrice: v })}
          min={0}
          max={priceMax}
          step={500}
        />

        {/* Чекбокс */}
        <label className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-secondary/50 px-4 py-3 transition-all hover:bg-secondary">
          <div>
            <div className="text-sm font-bold text-foreground">
              Только в наличии
            </div>
            <div className="text-[10px] text-muted mt-0.5 font-medium uppercase">
              Скрыть товары под заказ
            </div>
          </div>

          <div className="relative">
            <input
                type="checkbox"
                checked={value.inStockOnly}
                onChange={(e) =>
                onChange({ ...value, inStockOnly: e.target.checked })
                }
                className="peer sr-only"
            />
            {/* Адаптивный кастомный переключатель */}
            <div className="h-6 w-11 rounded-full bg-border peer-checked:bg-heat after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </div>
        </label>
      </div>
    </div>
  );
}