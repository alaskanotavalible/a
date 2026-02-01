"use client";

import { Container, Button } from "@/components/ui";
import { useModal } from "@/components/ModalProvider";

export default function ContactsClient() {
  const { open } = useModal();

  return (
    // bg-background
    <section className="pt-32 pb-20 sm:pt-40 relative overflow-hidden min-h-screen bg-background transition-colors duration-300">
      
      {/* Фоновый блик (темный в светлой теме, яркий в темной) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heat/10 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
             <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">
                Контакты
             </span>
             <h1 className="text-4xl font-bold text-foreground mb-4">
                Связь с Tengri Thermo
             </h1>
             <p className="text-muted max-w-xl text-lg">
                Без карты — только быстрые каналы: телефон и форма заявки. 
                Получите расчёт, прайс или консультацию.
             </p>
          </div>
          
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-heat animate-pulse shadow-[0_0_8px_#ff8c00]" />
            Ответ в рабочее время
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Карточка 1: Контакты (bg-card) */}
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col h-full hover:border-heat/30 transition-colors shadow-sm">
            <div className="text-xl font-bold text-foreground mb-6">
              Телефон и почта
            </div>
            
            <div className="grid gap-3 text-sm text-muted mb-8">
              <div className="rounded-xl border border-border bg-secondary px-5 py-4 flex flex-col gap-1">
                <span className="text-xs text-muted uppercase tracking-wider">Отдел продаж</span>
                <span className="text-lg font-bold text-foreground">+7 (7172) 677 711</span>
              </div>
              <div className="rounded-xl border border-border bg-secondary px-5 py-4 flex flex-col gap-1">
                <span className="text-xs text-muted uppercase tracking-wider">Email</span>
                <span className="text-lg font-bold text-foreground">info@tengri-thermo.kz</span>
              </div>
              <div className="rounded-xl border border-border bg-secondary px-5 py-4 text-foreground">
                📍 Казахстан · Поставки по всем регионам
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 sm:flex-row">
              <Button 
                onClick={() => open("call")} 
                className="w-full bg-heat text-white hover:bg-orange-600 border-0 font-bold py-6"
              >
                Заказать звонок
              </Button>
              <Button 
                variant="outline" 
                onClick={() => open("price")}
                className="w-full bg-transparent border-border text-foreground hover:bg-secondary py-6"
              >
                Скачать прайс
              </Button>
            </div>
          </div>

          {/* Карточка 2: Форма (bg-card) */}
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col h-full hover:border-heat/30 transition-colors shadow-sm relative overflow-hidden">
            <div className="text-xl font-bold text-foreground mb-2 relative z-10">
              Оставить заявку
            </div>
            <p className="text-sm leading-relaxed text-muted mb-8 relative z-10">
              Нажмите кнопку — откроется форма. Мы рассчитаем количество секций и стоимость под вашу площадь.
            </p>

            <div className="flex flex-col gap-3 relative z-10">
              <Button 
                 onClick={() => open("request")}
                 className="w-full bg-foreground text-background hover:bg-foreground/90 border-0 font-bold py-4 text-lg"
              >
                Оставить заявку
              </Button>
              <Button 
                 variant="outline" 
                 onClick={() => open("call")}
                 className="w-full bg-transparent border-border text-muted hover:text-foreground hover:bg-secondary py-3"
              >
                Перезвоните мне
              </Button>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-secondary/30 p-5 text-sm text-muted relative z-10">
              <span className="text-xl mr-2">⏱️</span> 
              Обычно: расчёт мощности + подбор модели = <span className="text-foreground font-bold">быстро и по делу</span>.
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}