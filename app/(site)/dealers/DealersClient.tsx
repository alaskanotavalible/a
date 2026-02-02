"use client";

import { Container, Button } from "@/components/ui";
import { useModal } from "@/components/ModalProvider";
import { CheckCircle2, TrendingUp, Truck, ShieldCheck } from "lucide-react";

export default function DealersClient() {
  const { open } = useModal();

  return (
    // Ставим жесткие цвета: белый фон днем, черный ночью
    <section className="pt-32 pb-20 sm:pt-40 relative overflow-hidden min-h-screen bg-white dark:bg-black transition-colors duration-300">
      
      {/* Фоновый эффект */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <Container className="relative z-10">
        {/* Заголовок */}
        <div className="mb-16">
           <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-2 block">
              Партнёрство
           </span>
           {/* Жесткий цвет текста: Черный / Белый */}
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Станьте дилером <br /> Triumph Thermo
           </h1>
           <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
              Мы предлагаем прозрачные условия для торговых компаний и строительных организаций. 
              Зарабатывайте на продаже премиального продукта казахстанского производства.
           </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
           
           {/* Левая колонка: Преимущества */}
           <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { 
                    icon: <TrendingUp className="w-6 h-6 text-[#ff8c00]" />, 
                    title: "Маржинальность", 
                    text: "Выгодные дилерские цены, позволяющие зарабатывать до 30% с каждой продажи."
                  },
                  { 
                    icon: <Truck className="w-6 h-6 text-[#ff8c00]" />, 
                    title: "Логистика", 
                    text: "Складская программа в Астане и Алматы. Быстрая отгрузка в любой регион."
                  },
                  { 
                    icon: <ShieldCheck className="w-6 h-6 text-[#ff8c00]" />, 
                    title: "Защита проектов", 
                    text: "Регистрируем объект за партнером. Гарантируем, что никто не перебьет вашу цену."
                  },
                  { 
                    icon: <CheckCircle2 className="w-6 h-6 text-[#ff8c00]" />, 
                    title: "Маркетинг", 
                    text: "Обеспечиваем стендами, каталогами и образцами продукции для вашего шоурума."
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                     <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center border border-orange-100 dark:border-orange-900/30">
                        {item.icon}
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                       {item.text}
                     </p>
                  </div>
                ))}
              </div>

              {/* Блок "Кому подходит" */}
              <div className="p-8 rounded-3xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Мы ищем партнеров в категориях:</h3>
                 <ul className="space-y-4">
                    {[
                      "Розничные магазины сантехники",
                      "Оптовые базы стройматериалов",
                      "Монтажные организации и бригады",
                      "Комплектаторы строительных объектов"
                    ].map((li) => (
                      <li key={li} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c00]" />
                         {li}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* Правая колонка: Карточка CTA */}
           <div className="lg:sticky lg:top-24 h-fit p-8 rounded-[32px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-2xl shadow-gray-200/50 dark:shadow-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Начните работу уже сегодня</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Получите доступ к оптовому прайс-листу и условиям сотрудничества.
                </p>
              </div>

              {/* Бейджи */}
              <div className="flex flex-wrap gap-2 mb-8">
                 <div className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-xs font-medium text-gray-600 dark:text-gray-300">
                   Опт
                 </div>
                 <div className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-xs font-medium text-gray-600 dark:text-gray-300">
                   Розница
                 </div>
                 <div className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-xs font-medium text-gray-600 dark:text-gray-300">
                   Проекты
                 </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button 
                  onClick={() => open("request")} 
                  className="w-full text-lg bg-[#ff8c00] hover:bg-[#e07b00] text-white border-0 py-6"
                >
                  Стать партнером
                </Button>
                
                <Button 
                  onClick={() => open("price")} 
                  variant="outline" 
                  className="w-full py-6 border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  Скачать прайс-лист
                </Button>
                
                <p className="text-center text-xs text-gray-400">
                  Отвечаем в течение 15 минут
                </p>
              </div>
           </div>
        </div>

      </Container>
    </section>
  );
}