"use client";

import { Container, Button } from "@/components/ui";
import { useModal } from "@/components/ModalProvider";
import { Instagram, MessageCircle, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ContactsClient() {
  const { open } = useModal();

  return (
    <section className="pt-32 pb-20 sm:pt-40 relative overflow-hidden min-h-screen bg-background transition-colors duration-300">
      
      {/* Фоновый блик */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heat/10 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
             <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">
                Контакты
             </span>
             <h1 className="text-4xl font-bold text-foreground mb-4">
                Связь с Triumph Thermo
             </h1>
             <p className="text-muted max-w-xl text-lg">
                Завод в Павлодаре. Работаем по всему Казахстану. 
                Пишите в WhatsApp или звоните — ответим быстро.
             </p>
          </div>
          
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
            Сейчас работаем
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          
          {/* КАРТОЧКА 1: Контакты и Соцсети */}
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col h-full hover:border-heat/30 transition-colors shadow-sm">
            <div className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-heat" />
              Отдел продаж
            </div>
            
            <div className="grid gap-4 text-sm text-muted mb-8">
              
              {/* Телефон */}
              <div className="rounded-xl border border-border bg-secondary/30 px-5 py-4 flex flex-col gap-1">
                <span className="text-xs text-muted uppercase tracking-wider mb-1">Единый номер / WhatsApp</span>
                <a href="tel:+77761346303" className="text-2xl font-bold text-foreground hover:text-heat transition-colors">
                  +7 (776) 134 63 03
                </a>
              </div>

              {/* Адрес и Почта */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-secondary/30 px-5 py-4 flex flex-col gap-1">
                   <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-heat" />
                      <span className="text-xs text-muted uppercase tracking-wider">Адрес завода</span>
                   </div>
                   <span className="text-foreground font-medium">
                     г. Павлодар,<br/> Северная промзона, 52
                   </span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/30 px-5 py-4 flex flex-col gap-1">
                   <div className="flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4 text-heat" />
                      <span className="text-xs text-muted uppercase tracking-wider">Email</span>
                   </div>
                   <a href="mailto:cnn_pavlodar@mail.ru" className="text-foreground font-medium hover:text-heat">
                     cnn_pavlodar@mail.ru
                   </a>
                </div>
              </div>

              {/* Кнопки соцсетей */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <Link 
                  href="https://wa.me/77761346303" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366]/10 text-[#25D366] py-3 font-bold hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Link>
                <Link 
                  href="https://www.instagram.com/_triumphthermo_" 
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#E1306C]/10 text-[#E1306C] py-3 font-bold hover:bg-[#E1306C] hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Link>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-border">
               <p className="text-xs text-muted">
                 ООО Фирма "СНН". Производство радиаторов отопления и промышленное литье.
               </p>
            </div>
          </div>

          {/* КАРТОЧКА 2: Форма заявки */}
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col h-full hover:border-heat/30 transition-colors shadow-sm relative overflow-hidden group">
            {/* Декор фона */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-heat/5 rounded-full blur-3xl group-hover:bg-heat/10 transition-colors" />

            <div className="text-xl font-bold text-foreground mb-2 relative z-10">
              Оставить заявку на расчёт
            </div>
            <p className="text-sm leading-relaxed text-muted mb-8 relative z-10">
              Мы бесплатно рассчитаем количество секций для вашего помещения и пришлем коммерческое предложение.
            </p>

            <div className="flex flex-col gap-4 relative z-10 mb-8">
              {/* Кнопка открытия модалки */}
              <Button 
                 onClick={() => open("request")}
                 className="w-full text-lg bg-[#ff8c00] hover:bg-[#e07b00] text-white border-0 py-6"
              >
                Заполнить форму
              </Button>
              
              {/* Кнопка звонка */}
              <Button 
                 variant="outline" 
                 onClick={() => open("call")}
                 className="w-full py-6 border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                Заказать обратный звонок
              </Button>
            </div>

            <div className="mt-auto rounded-2xl border border-border bg-secondary/30 p-5 relative z-10">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1">🏭</span> 
                <div className="text-sm text-muted">
                  <span className="text-foreground font-bold block mb-1">Работаем с оптом и розницей</span>
                  Комплектуем строительные объекты, работаем с дилерами и частными клиентами.
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}