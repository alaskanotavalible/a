import Link from "next/link";
import { Container, Button } from "@/components/ui";

export default function CTASection() {
  return (
    // bg-background + border-border
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden border-t border-border transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-heat/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-heat to-orange-600 rounded-[24px] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            
            {/* bg-card для контейнера */}
            <div className="relative overflow-hidden rounded-[24px] bg-card border border-border p-8 sm:p-12 md:flex md:items-center md:justify-between md:gap-10">
            
            <div className="relative z-10 md:flex-1">
                <span className="text-heat font-bold uppercase tracking-widest text-xs mb-3 block">
                Быстрая заявка
                </span>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Рассчитаем мощность и подберём модель
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                Квартира, дом, ЖК, коммерция. Получите точный расчёт и рекомендации без лишней переписки.
                </p>
                
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contacts">
                    <Button className="!bg-heat !text-white hover:!bg-orange-600 border-0 font-bold py-4 px-8 shadow-lg">
                        Запросить расчёт
                    </Button>
                </Link>
                <a href="tel:+77172677711">
                    <Button variant="outline" className="bg-transparent border-border text-foreground hover:bg-secondary py-4 px-8">
                        Заказать звонок
                    </Button>
                </a>
                </div>
            </div>

            <div className="relative z-10 mt-10 md:mt-0 md:w-[400px]">
                {/* Карточка внутри: bg-secondary/50 или bg-background */}
                <div className="rounded-2xl border border-border bg-secondary/30 p-6 backdrop-blur-md">
                <div className="text-lg font-bold text-foreground mb-4">
                    Что вы получите
                </div>
                <ul className="grid gap-3">
                    {[
                    "Подбор количества секций",
                    "Рекомендации по монтажу",
                    "Коммерческое предложение",
                    ].map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-xl bg-background p-3 text-sm text-muted border border-border shadow-sm">
                        <span className="text-heat font-bold">✓</span> {item}
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            </div>
        </div>
      </Container>
    </section>
  );
}