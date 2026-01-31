"use client";

import { Product } from "@/data/products";
import { Button, Card, Divider, Pill } from "./ui";

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
      <div className="mb-2 flex items-center justify-between text-xs text-stone-600">
        <span className="font-medium tracking-premium">{label}</span>
        <Pill>{value}</Pill>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-[#D18B2C]"
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
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold tracking-premium text-ink">
            Фильтры
          </div>
          <div className="mt-1 text-xs text-stone-500">
            Быстрый подбор под вашу задачу
          </div>
        </div>

        <Button
          variant="ghost"
          onClick={() => onChange({ ...defaultFilters, maxPrice: priceMax })}
        >
          Сбросить
        </Button>
      </div>

      <Divider className="my-4" />

      <div className="grid gap-4">
        <div>
          <div className="mb-2 text-xs font-medium tracking-premium text-stone-600">
            Высота
          </div>
          <div className="flex flex-wrap gap-2">
            {(["all", 350, 500, 700] as const).map((h) => (
              <button
                key={String(h)}
                onClick={() => onChange({ ...value, heightMm: h })}
                className={`rounded-xl border px-3 py-2 text-xs transition ${
                  value.heightMm === h
                    ? "border-heat/40 bg-heat/10 text-ink"
                    : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                }`}
              >
                {h === "all" ? "Любая" : `${h} мм`}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2 text-xs font-medium tracking-premium text-stone-600">
            Секции
          </div>
          <div className="flex flex-wrap gap-2">
            {(["all", 6, 8, 10, 12, 14] as const).map((s) => (
              <button
                key={String(s)}
                onClick={() => onChange({ ...value, sections: s })}
                className={`rounded-xl border px-3 py-2 text-xs transition ${
                  value.sections === s
                    ? "border-heat/40 bg-heat/10 text-ink"
                    : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                }`}
              >
                {s === "all" ? "Любые" : s}
              </button>
            ))}
          </div>
        </div>

        <Range
          label="Минимальная мощность (W)"
          value={value.minPower}
          setValue={(v) => onChange({ ...value, minPower: v })}
          min={0}
          max={powerMax}
          step={20}
        />

        <Range
          label="Максимальная цена (₸)"
          value={value.maxPrice}
          setValue={(v) => onChange({ ...value, maxPrice: v })}
          min={0}
          max={priceMax}
          step={500}
        />

        <label className="flex cursor-pointer items-center justify-between rounded-xl border border-stone-200 bg-white px-3 py-3 text-sm">
          <div>
            <div className="font-medium tracking-premium text-ink">
              Только в наличии
            </div>
            <div className="text-xs text-stone-500">
              Показать позиции доступные сейчас
            </div>
          </div>

          <input
            type="checkbox"
            checked={value.inStockOnly}
            onChange={(e) =>
              onChange({ ...value, inStockOnly: e.target.checked })
            }
            className="h-5 w-5 accent-[#D18B2C]"
          />
        </label>
      </div>
    </Card>
  );
}
