"use client";

import { useState } from "react";
import { Container, Button } from "@/components/ui";
import { useModal } from "./ModalProvider";

export default function Calculator() {
  const [area, setArea] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);
  const { open } = useModal();

  const calculate = () => {
    if (typeof area === "number" && area > 0) {
      // 100 Вт на 1 м2 (грубый расчет), секция = 160 Вт
      // Формула: (Площадь * 100) / 160
      const sections = Math.ceil((area * 100) / 160);
      setResult(sections);
    }
  };

  return (
    // bg-background (адаптивный фон секции)
    <section className="py-20 bg-background border-t border-border transition-colors duration-300">
      <Container>
        {/* bg-card (адаптивный фон карточки) */}
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-xl overflow-hidden relative">
          
          {/* Декор (чуть видный в обеих темах) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-heat/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Форма */}
            <div>
              <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">
                Калькулятор
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Рассчитайте количество секций
              </h2>
              <p className="text-muted mb-8">
                Введите площадь помещения (м²), чтобы получить примерный расчёт для радиаторов 500/80.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="number"
                  placeholder="Площадь комнаты, м²"
                  value={area}
                  onChange={(e) => setArea(parseFloat(e.target.value))}
                  className="flex-1 rounded-xl border border-border bg-secondary px-5 py-4 text-foreground placeholder:text-muted focus:border-heat focus:outline-none text-lg transition-all"
                />
                <Button 
                    onClick={calculate} 
                    className="py-4 px-8 text-lg font-bold bg-heat text-white hover:bg-orange-600 border-0"
                >
                    Рассчитать
                </Button>
              </div>
            </div>

            {/* Результат */}
            <div className="rounded-2xl border border-border bg-secondary/30 p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
              {result ? (
                <>
                   <div className="text-muted text-sm font-medium uppercase tracking-wide mb-2">Вам понадобится примерно</div>
                   <div className="text-6xl font-bold text-foreground mb-2">
                     {result} <span className="text-2xl text-muted">секций</span>
                   </div>
                   <div className="text-xs text-muted mb-6">
                      *Предварительный расчёт для потолков до 3м.
                   </div>
                   <Button 
                      variant="outline" 
                      onClick={() => open("request", { productName: `Расчет: ${area}м2 -> ${result} секций` })}
                      className="border-border text-foreground hover:bg-secondary"
                   >
                       Заказать расчёт с менеджером
                   </Button>
                </>
              ) : (
                <div className="text-muted opacity-50">
                   <span className="text-4xl mb-2 block">🧮</span>
                   Введите площадь, чтобы увидеть результат
                </div>
              )}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}