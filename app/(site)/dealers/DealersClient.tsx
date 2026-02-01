"use client";

import { Container, Button } from "@/components/ui";
import { useModal } from "@/components/ModalProvider";

export default function DealersClient() {
  const { open } = useModal();

  return (
    <section className="pt-32 pb-20 sm:pt-40 bg-background min-h-screen relative overflow-hidden transition-colors duration-300">
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heat/10 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">
              Партнёрство
            </span>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Для дилеров и партнёров
            </h1>
            <p className="text-muted max-w-2xl text-lg">
               Если вы продаёте, монтируете или комплектуете объекты — мы дадим прайс, условия и поддержку.
            </p>
          </div>
          
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-heat animate-pulse shadow-[0_0_8px_#ff8c00]" />
            B2B условия · КП
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="rounded-3xl border border-border bg-card p-8 hover:border-border transition-colors shadow-sm">
            <div className="text-xl font-bold text-foreground mb-3">
              Условия сотрудничества
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Демо-условия: прозрачный прайс, оптовые скидки, сопровождение.
            </p>

            <div className="grid gap-3 mb-8">
              {["Дилерские цены", "Быстрые отгрузки", "Поддержка продаж"].map(item => (
                  <div key={item} className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground flex items-center gap-2">
                      <span className="text-heat">✅</span> {item}
                  </div>
              ))}
              
              <div className="rounded-xl bg-heat/10 border border-heat/20 px-4 py-3 text-sm text-heat font-medium flex items-center gap-2">
                <span>🔥</span> Акцент: премиальный продукт легче продавать
              </div>
            </div>

            <div className="mt-auto flex gap-3">
              <Button onClick={() => open("price")} className="bg-foreground text-background hover:bg-foreground/90 border-0 font-bold">Скачать прайс</Button>
              <Button variant="outline" onClick={() => open("request")} className="bg-transparent border-border text-foreground hover:bg-secondary">
                Стать партнёром
              </Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-border bg-card p-8 hover:border-border transition-colors shadow-sm">
            <div className="text-xl font-bold text-foreground mb-3">
              Для монтажников и проектов
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Подбор под объект, расчёт мощности, рекомендации по подключению.
            </p>

            <div className="grid gap-3 mb-8">
                {["Спецификации", "КП и расчёт под объект", "Консультация по монтажу"].map(item => (
                  <div key={item} className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground flex items-center gap-2">
                      <span className="text-heat">✅</span> {item}
                  </div>
              ))}
            </div>

            <div className="mt-auto">
              <Button className="w-full bg-heat text-white hover:bg-orange-600 border-0 font-bold py-4" onClick={() => open("request")}>
                Запросить условия
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}