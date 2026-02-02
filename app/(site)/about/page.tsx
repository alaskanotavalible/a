"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Container, Button } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { ArrowRight, CheckCircle2, Factory, TrainFront, HardHat, Zap } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: "/slide-factory.jpg",
    title: "Лидер металлургии Казахстана с 1998 года",
    subtitle: "Завод «СНН» — это 25 лет опыта в промышленном литье. Мы производим 120 000 тонн продукции в год для 8 отраслей экономики."
  },
  {
    id: 2,
    image: "/slide-tech.jpg",
    title: "Немецкий стандарт: HWS, Laempe, Eirich",
    subtitle: "Автоматизированные линии исключают человеческий фактор. Точность отливки до микрон, идеальная геометрия и плотность металла."
  },
  {
    id: 3,
    image: "/slide-radiator.jpg",
    title: "Triumph Thermo — радиатор с запасом прочности",
    subtitle: "Испытательное давление 52.5 атмосферы. Разработан для сурового климата и нестабильных систем отопления."
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO SLIDER */}
      <section className="relative h-screen min-h-[600px] bg-black group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center animate-ken-burns"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-black/60" />
                
                <Container className="relative z-10 h-full flex flex-col justify-center pb-12">
                  <div className="max-w-4xl space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/90 text-sm backdrop-blur-md w-fit">
                      <span className="w-2 h-2 rounded-full bg-[#ff8c00] animate-pulse"/>
                      Сделано в Казахстане
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex gap-4 pt-4">
                       <Button className="rounded-full px-8 text-lg bg-[#ff8c00] text-white hover:bg-[#e07b00] border-0">
                         Смотреть каталог
                       </Button>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))}
          <button className="swiper-prev absolute left-8 top-1/2 z-20 text-white/50 hover:text-white transition-colors hidden md:block p-2">
            <ArrowRight className="rotate-180 w-10 h-10" />
          </button>
          <button className="swiper-next absolute right-8 top-1/2 z-20 text-white/50 hover:text-white transition-colors hidden md:block p-2">
            <ArrowRight className="w-10 h-10" />
          </button>
        </Swiper>
      </section>

      {/* 2. МАСШТАБ */}
      <section className="py-20 bg-background border-b border-border transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6">
               <div className="text-5xl font-black text-foreground mb-2">1998</div>
               {/* ОРАНЖЕВЫЙ */}
               <div className="text-sm font-black text-[#ff8c00] uppercase tracking-wider">Год основания</div>
            </div>
            
            <div className="p-6">
               <div className="text-5xl font-black text-foreground mb-2">120K</div>
               {/* ОРАНЖЕВЫЙ */}
               <div className="text-sm font-black text-[#ff8c00] uppercase tracking-wider">Тонн литья в год</div>
            </div>
            
            <div className="p-6">
               <div className="text-5xl font-black text-foreground mb-2">8+</div>
               {/* ОРАНЖЕВЫЙ */}
               <div className="text-sm font-black text-[#ff8c00] uppercase tracking-wider">Отраслей</div>
            </div>
            
            <div className="p-6">
               <div className="text-5xl font-black text-foreground mb-2">52.5</div>
               {/* ОРАНЖЕВЫЙ */}
               <div className="text-sm font-black text-[#ff8c00] uppercase tracking-wider">Атм — давление</div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. ПРОМЫШЛЕННЫЙ ОПЫТ */}
      <section className="py-24 bg-background transition-colors duration-300">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-2 block">Опыт СНН</span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Мы делаем детали для поездов и нефтяных вышек. <br/>
                <span className="text-[#ff8c00]">Радиаторы — это наша гордость.</span>
              </h2>
              
              {/* text-foreground = Четкий контрастный текст (черный/белый) */}
              <div className="text-lg text-foreground font-medium leading-relaxed space-y-4">
                <p>
                  ТОО Фирма «СНН» производит сложнейшие отливки для «Казахстан Темир Жолы», нефтегазового сектора и горной добычи.
                </p>
                <p>
                  Опыт работы с металлом, где цена ошибки — остановка поезда или авария на скважине, мы перенесли в производство бытовых радиаторов. 
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                 {[
                   { icon: <TrainFront />, label: "Железная дорога" },
                   { icon: <Factory />, label: "Нефтегаз" },
                   { icon: <Zap />, label: "Энергетика" },
                   { icon: <HardHat />, label: "Горная добыча" },
                 ].map((item) => (
                   <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-sm">
                      <div className="text-[#ff8c00]">{item.icon}</div>
                      <span className="font-bold text-sm text-foreground">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group bg-secondary">
               <div className="absolute inset-0 bg-[url('/casting-process.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="text-xl font-bold mb-2">Литейный цех СНН</div>
                  <p className="text-white/80 text-sm">Полный цикл: от плавки металла до готового изделия.</p>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. ТЕХНОЛОГИИ */}
      <section className="py-24 bg-background border-t border-border relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff8c00]/5 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-4 block">Технологии</span>
            {/* ОРАНЖЕВЫЙ ЗАГОЛОВОК */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#ff8c00]">Оборудование мирового класса</h2>
            <p className="text-foreground text-lg font-medium">
              Мы инвестировали в лучшие немецкие технологии, чтобы исключить брак и гарантировать европейское качество в Казахстане.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "HWS (Германия)",
                desc: "Автоматическая линия безопочной формовки FBO III. Обеспечивает идеальную поверхность.",
                image: "/tech-hws.jpg"
              },
              {
                title: "Eirich (Германия)",
                desc: "Автоматический смесеприготовительный комплекс. Гарантирует стабильность состава.",
                image: "/tech-eirich.jpg" 
              },
              {
                title: "Laempe (Германия)",
                desc: "Стержневые автоматы для создания идеальных внутренних каналов радиатора.",
                image: "/tech-laempe.jpg"
              },
              {
                title: "FRECH (Германия)",
                desc: "Литье под высоким давлением. Монолитная конструкция без пор и раковин.",
                image: "/tech-frech.jpg"
              }
            ].map((card, i) => (
              <div key={i} className="group relative h-[300px] rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:border-[#ff8c00]/50 transition-all">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff8c00] transition-colors">{card.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. ЛАБОРАТОРИЯ */}
      <section className="py-24 bg-background transition-colors duration-300">
        <Container>
          <div className="rounded-[40px] border border-border bg-card shadow-lg p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-1 rounded-full bg-[#ff8c00] text-white font-bold text-xs mb-6 uppercase tracking-wider">
                  Контроль качества
                </div>
                {/* ЗАГОЛОВОК ЧЕТКИЙ */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Собственная аккредитованная лаборатория
                </h2>
                
                {/* ТЕКСТ ТЕПЕРЬ text-foreground (ЧЕТКИЙ) */}
                <div className="space-y-4 text-foreground text-lg font-medium">
                  <p>
                    Мы не верим сертификатам поставщиков сырья. Каждая плавка проверяется на спектральный анализ в нашей лаборатории.
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex gap-3 items-center">
                      <CheckCircle2 className="text-[#ff8c00] w-6 h-6" />
                      <span className="text-foreground">Входной контроль сплава</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <CheckCircle2 className="text-[#ff8c00] w-6 h-6" />
                      <span className="text-foreground">Испытание секций давлением <b>52.5 атм</b></span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <CheckCircle2 className="text-[#ff8c00] w-6 h-6" />
                      <span className="text-foreground">Контроль геометрии и резьбы</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="rounded-3xl overflow-hidden border border-border shadow-xl aspect-video relative bg-card">
                    <div className="absolute inset-0 bg-[url('/lab-test.jpg')] bg-cover bg-center" />
                    
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-black p-4 rounded-xl shadow-lg max-w-[200px]">
                       <div className="text-xs font-bold uppercase text-gray-500 mb-1">Протокол №335-Т</div>
                       <div className="font-bold text-sm">Подтверждено НИТИ «Прогресс»</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. КЛИЕНТЫ */}
      <section className="py-20 bg-background border-t border-border transition-colors duration-300">
        <Container>
          <div className="text-center mb-10">
             <h2 className="text-2xl font-bold text-foreground">Нам доверяют промышленные гиганты</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-3xl font-black text-foreground">BI GROUP</span>
             <span className="text-3xl font-black text-foreground">BAZIS-A</span>
             <span className="text-3xl font-black text-foreground">KAZCHROME</span>
             <span className="text-3xl font-black text-foreground">КТЖ</span>
             <span className="text-3xl font-black text-foreground">ERG</span>
             <span className="text-3xl font-black text-foreground">ARCELORMITTAL</span>
             <span className="text-3xl font-black text-foreground">ПАВЛОДАРЭНЕРГО</span>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}