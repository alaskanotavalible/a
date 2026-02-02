"use client";

import { X, Check } from "lucide-react";

interface FiltersProps {
  selectedHeight: number | null;
  onHeightChange: (h: number | null) => void;
  
  selectedDepth: number | null;
  onDepthChange: (d: number | null) => void;

  selectedColor: string | null;
  onColorChange: (c: string | null) => void;

  onReset: () => void;
  totalCount: number;
}

export default function Filters({
  selectedHeight,
  onHeightChange,
  selectedDepth,
  onDepthChange,
  selectedColor,
  onColorChange,
  onReset,
  totalCount,
}: FiltersProps) {
  
  const colors = [
    { name: "Белый", bgClass: "bg-white", borderClass: "border-gray-200" },
    { name: "Черный", bgClass: "bg-zinc-900", borderClass: "border-zinc-800" },
    { name: "Серебро", bgClass: "bg-gray-400", borderClass: "border-gray-400" },
  ];

  return (
    <div className="bg-card border border-border rounded-3xl p-6 shadow-xl">
      {/* Заголовок + Сброс */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">Фильтры</h3>
          <p className="text-xs text-muted mt-1">Быстрый подбор</p>
        </div>
        {(selectedHeight || selectedDepth || selectedColor) && (
          <button
            onClick={onReset}
            className="text-xs text-heat hover:underline font-bold transition-colors flex items-center gap-1"
          >
            Сбросить
          </button>
        )}
      </div>

      <div className="space-y-8">
        
        {/* 1. Высота */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-muted uppercase tracking-wider">
            Высота (мм)
          </div>
          <div className="flex gap-2">
            {[350, 500].map((h) => (
              <button
                key={h}
                onClick={() => onHeightChange(selectedHeight === h ? null : h)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                  selectedHeight === h
                    ? "bg-heat text-white border-heat shadow-lg shadow-orange-500/20"
                    : "bg-background border-border text-muted hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Глубина (Межосевое) */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-muted uppercase tracking-wider">
            Глубина (мм)
          </div>
          <div className="flex gap-2">
            {[80, 100].map((d) => (
              <button
                key={d}
                onClick={() => onDepthChange(selectedDepth === d ? null : d)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                  selectedDepth === d
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background border-border text-muted hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Цвет */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-muted uppercase tracking-wider">
            Цвет
          </div>
          <div className="flex flex-wrap gap-2">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => onColorChange(selectedColor === c.name ? null : c.name)}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${
                  selectedColor === c.name
                    ? "bg-secondary border-heat text-foreground ring-1 ring-heat"
                    : "bg-background border-border text-muted hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                <span className={`w-3 h-3 rounded-full border ${c.bgClass} ${c.borderClass}`} />
                {c.name}
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="text-xs text-muted flex justify-between items-center">
          <span>Найдено моделей:</span>
          <span className="font-bold text-foreground text-base">{totalCount}</span>
        </div>
      </div>
    </div>
  );
}