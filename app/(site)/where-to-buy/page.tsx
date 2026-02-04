"use client";

import { useState } from "react";
import { Container, Button } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { MapPin, Phone, Clock, Navigation, Globe } from "lucide-react";

// === ДАННЫЕ МАГАЗИНОВ (С Реальными ссылками) ===
const locations = [
  {
    city: "Павлодар",
    isFactory: true,
    shops: [
      {
        name: "ЗАВОД Triumph Thermo (Фирма СНН)",
        address: "Северная промзона, 16/3",
        phone: "+7 (7182) 77-01-01",
        time: "Пн-Пт: 08:00 - 17:00",
        type: "map",
        link: "https://go.2gis.com/pavlodar/firm/70000001023982363" 
      },
      {
        name: "Интернет-магазин IMPERIAL",
        address: "ул. Астана, 16",
        phone: "+7 (705) 707-15-55",
        time: "Ежедневно: 09:00 - 19:00",
        type: "site",
        link: "https://imperial-online.kz/"
      },
      {
        name: "Гипермаркет «12 Месяцев»",
        address: "ул. Жаяу Мусы, 6",
        phone: "+7 (7182) 60-00-67",
        time: "Ежедневно: 09:00 - 20:00",
        type: "map",
        link: "https://go.2gis.com/pavlodar/firm/70000001018889152"
      }
    ]
  },
  {
    city: "Астана",
    shops: [
      {
        name: "EVATHERM",
        address: "ул. Бактыораза Бейсекбаева, 18Б",
        phone: "+7 (700) 794-85-95",
        time: "Пн-Пт: 09:00 - 18:00",
        type: "site",
        link: "https://www.evatherm.kz/"
      },
      {
        name: "Nurai Invest",
        address: "ул. Бактыораза Бейсекбаева, 18А",
        phone: "+7 (777) 563-22-33",
        time: "Пн-Сб: 09:00 - 18:00",
        type: "site",
        link: "https://nurai-invest.kz/"
      },
      {
        name: "Гипермаркет «12 Месяцев»",
        address: "шоссе Алаш, 20А",
        phone: "+7 (7172) 67-77-11",
        time: "Ежедневно: 09:00 - 21:00",
        type: "map",
        link: "https://go.2gis.com/astana/firm/70000001018134207"
      }
    ]
  },
  {
    city: "Караганда",
    shops: [
      {
        name: "Гипермаркет «12 Месяцев»",
        address: "пр. Строителей, 37/2",
        phone: "+7 (7212) 40-31-06",
        time: "Ежедневно: 10:00 - 20:00",
        type: "map",
        link: "https://go.2gis.com/karaganda/firm/11822477302826771"
      }
    ]
  },
  {
    city: "Актобе",
    shops: [
      {
        name: "Nurai Invest",
        address: "ул. Некрасова, 125",
        phone: "+7 (777) 185-33-33",
        time: "Пн-Сб: 09:00 - 18:00",
        type: "site",
        link: "https://nurai-invest.kz/"
      }
    ]
  },
  {
    city: "Алматы",
    shops: [
      {
        name: "Гипермаркет «12 Месяцев»",
        address: "пр. Райымбека, 516",
        phone: "+7 (727) 313-18-20",
        time: "Ежедневно: 09:00 - 21:00",
        type: "map",
        link: "https://go.2gis.com/almaty/firm/9429940000788667"
      }
    ]
  }
];

export default function WhereToBuyPage() {
  const [activeCity, setActiveCity] = useState("Павлодар");
  const currentCityData = locations.find((l) => l.city === activeCity);

  // Ссылка для большой карты (берем ссылку первого магазина в списке)
  const mainMapLink = currentCityData?.shops[0]?.link || "#";

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      
      {/* HEADER */}
      <section className="pt-32 pb-12 border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-black">
        <Container>
          <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-2 block">
            Дилерская сеть
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Где купить Triumph Thermo
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Найдите ближайший магазин или официального дилера в вашем городе. 
            Мы постоянно расширяем географию присутствия.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          
          {/* ЛЕВАЯ КОЛОНКА: ВЫБОР ГОРОДА */}
          <div className="space-y-2 lg:sticky lg:top-24 h-fit">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 px-2">Выберите город:</h3>
            <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 pb-4 lg:pb-0 scrollbar-hide">
              {locations.map((item) => (
                <button
                  key={item.city}
                  onClick={() => setActiveCity(item.city)}
                  className={`px-4 py-3 rounded-xl text-left font-medium transition-all whitespace-nowrap ${
                    activeCity === item.city
                      ? "bg-[#ff8c00] text-white shadow-lg shadow-orange-500/20"
                      : "bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-800"
                  }`}
                >
                  {item.city}
                  {item.isFactory && (
                    <span className="ml-2 text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded uppercase">
                      Завод
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Блок "Нет вашего города" */}
            <div className="hidden lg:block mt-8 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Нет вашего города?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Закажите доставку напрямую с завода или станьте нашим представителем.
              </p>
              <a href="/contacts">
                 <Button variant="outline" className="w-full bg-transparent border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">
                   Связаться с нами
                 </Button>
              </a>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: СПИСОК МАГАЗИНОВ */}
          <div className="space-y-6">
            {currentCityData?.shops.map((shop, i) => (
              <div 
                key={i} 
                className="group p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-[#ff8c00]/30 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  <div className="space-y-4">
                    <div>
                      {/* Название */}
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{shop.name}</h3>
                        {currentCityData.isFactory && i === 0 && (
                          <span className="bg-[#ff8c00] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                            Производство
                          </span>
                        )}
                      </div>
                      
                      {/* Адрес */}
                      <div className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-lg">
                        <MapPin className="w-5 h-5 text-[#ff8c00] shrink-0 mt-1" />
                        <span>{shop.address}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                       {/* Телефон */}
                       <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {shop.phone}
                          </span>
                       </div>
                       {/* Время работы */}
                       <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">{shop.time}</span>
                       </div>
                    </div>
                  </div>

                  {/* Кнопка действия */}
                  <div className="shrink-0">
                     <a href={shop.link} target="_blank" rel="noreferrer">
                       <Button variant="secondary" className="w-full md:w-auto gap-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white border border-gray-200 dark:border-zinc-700 shadow-sm">
                          {shop.type === 'site' ? <Globe className="w-4 h-4 text-[#ff8c00]" /> : <Navigation className="w-4 h-4 text-[#ff8c00]" />}
                          {shop.type === 'site' ? "Перейти на сайт" : "Маршрут"}
                       </Button>
                     </a>
                  </div>

                </div>
              </div>
            ))}

            {(!currentCityData?.shops || currentCityData.shops.length === 0) && (
               <div className="p-12 text-center border border-dashed border-gray-200 dark:border-zinc-800 rounded-3xl">
                  <p className="text-gray-500 dark:text-gray-400">В этом городе пока нет официальных точек продаж.</p>
               </div>
            )}
            
            {/* КАРТА (Теперь кликабельная и ведет на карту первого магазина) */}
            <a 
               href={mainMapLink} 
               target="_blank" 
               rel="noreferrer"
               className="block mt-8 rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900 h-[300px] relative flex items-center justify-center group cursor-pointer"
            >
               <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/76.9455,43.2372,12,0/800x400?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
               
               <div className="relative z-10 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-xl border border-gray-200 flex items-center gap-2 transition-transform group-hover:scale-105">
                  <MapPin className="text-[#ff8c00] animate-bounce" />
                  <span className="font-bold text-gray-900">Посмотреть на карте (2GIS)</span>
               </div>
            </a>

          </div>
        </div>
      </Container>
      
      <CTASection />
    </div>
  );
}