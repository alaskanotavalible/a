"use client";

import { Container, Button } from "@/components/ui";
import Link from "next/link";
import { CheckCircle2, Play } from "lucide-react";

export default function ProductionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Фоновый декоративный элемент */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-heat/5 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* ТЕКСТОВАЯ ЧАСТЬ */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-heat/20 bg-heat/5 px-3 py-1 text-xs text-heat font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-heat animate-pulse" />
              Производство полного цикла
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Инженерная точность <br />
              <span className="text-muted-foreground">в каждой секции</span>
            </h2>

            <p className="text-muted text-lg leading-relaxed mb-8">
              Радиаторы Tengri Thermo производятся на автоматизированной линии с применением робототехники. 
              Мы контролируем каждый этап: от литья под давлением до многоступенчатой покраски.
            </p>

            {/* Список преимуществ */}
            <div className="space-y-4 mb-8">
              {[
                "Литье под давлением 800 тонн",
                "Двойная антикоррозийная покраска",
                "Испытание давлением 40 бар",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-heat" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button variant="outline" className="border-heat/20 hover:bg-heat/10 hover:text-heat transition-colors">
                Подробнее о заводе
              </Button>
            </Link>
          </div>

          {/* ВИДЕО БЛОК */}
          <div className="relative group">
            {/* Декоративная рамка с подсветкой */}
            <div className="absolute -inset-1 bg-gradient-to-r from-heat to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            
            <div className="relative rounded-2xl overflow-hidden border border-border bg-black aspect-video shadow-2xl">
              <video
                src="/video/production.mp4" // 👈 ПУТЬ К ТВОЕМУ ВИДЕО
                poster="/images/production-poster.jpg" // Можно добавить картинку-заглушку
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Оверлей (затемнение) */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Плашка "Сделано в Казахстане" (опционально) */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-xl shadow-xl hidden sm:block">
               <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">Локализация</div>
               <div className="text-xl font-bold text-foreground">CT-KZ 100%</div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}