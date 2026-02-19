"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Container, Button } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { ArrowRight, CheckCircle2, Factory, TrainFront, HardHat, Zap, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO: МАНИФЕСТ */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-zinc-900">
        
        {/* Фоновое изображение */}
        <div 
          className="absolute inset-0 bg-[url('/slide-factory.jpg')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-[2s]" 
        />
        
        {/* Градиент, чтобы текст читался */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />

        <Container className="relative z-10 text-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            {/* Надзаголовок */}
            <div className="inline-flex items-center gap-3 text-[#ff8c00] font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              <span className="w-8 h-[2px] bg-[#ff8c00]" />
              Философия CNN
              <span className="w-8 h-[2px] bg-[#ff8c00]" />
            </div>

            {/* Главный заголовок */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
              МЫ УПРАВЛЯЕМ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c00] to-yellow-500">
                ТЕПЛОМ
              </span>
            </h1>

            {/* Описание */}
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              25 лет опыта в тяжелой металлургии. Мы взяли технологии для поездов и нефтепроводов, чтобы создать радиатор, который никогда не подведет.
            </p>

          </div>
        </Container>
      </section>

      {/* 2. МАСШТАБ */}
      <section className="py-20 bg-background border-b border-border transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6">
               <div className="text-5xl font-black text-foreground mb-2">1998</div>
               <div className="text-sm font-black text-[#ff8c00] uppercase tracking-wider">Год основания</div>
            </div>
            
            <div className="p-6">
               <div className="text-5xl font-black text-foreground mb-2">120K</div>
               <div className="text-sm font-black text-[#ff8c00] uppercase tracking-wider">Тонн литья в год</div>
            </div>
            
            <div className="p-6">
               <div className="text-5xl font-black text-foreground mb-2">8+</div>
               <div className="text-sm font-black text-[#ff8c00] uppercase tracking-wider">Отраслей</div>
            </div>
            
            <div className="p-6">
               <div className="text-5xl font-black text-foreground mb-2">52.5</div>
               <div className="text-sm font-black text-[#ff8c00] uppercase tracking-wider">Атм — давление</div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. ПРОМЫШЛЕННЫЙ ОПЫТ И ЭТАПЫ ПРОИЗВОДСТВА */}
      <section className="py-24 bg-background transition-colors duration-300">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-2 block">
                Инженерный подход
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Мы работаем с металлом <br/>
                <span className="text-[#ff8c00]">там, где нет права на ошибку.</span>
              </h2>
              
              <div className="text-lg text-foreground font-medium leading-relaxed space-y-4">
                <p>
                  Мы производим сложные металлические изделия для железнодорожной отрасли, нефтегазового сектора и горнодобывающей промышленности — там, где ошибка недопустима, а требования к качеству максимальны.
                </p>
                <p className="text-heat font-bold">Радиаторы — это наша гордость.</p>
                <p>
                  Весь накопленный опыт работы с металлом, высокими температурами и экстремальными нагрузками мы перенесли в производство бытовых радиаторов под брендом <span className="text-[#ff8c00] font-bold">Tengri Thermo</span>. Промышленная надёжность, адаптированная для вашего дома.
                </p>
              </div>

              <div className="pt-6">
                <p className="text-sm font-bold uppercase tracking-wider text-muted mb-4">Наши радиаторы рассчитаны на:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Zap className="w-5 h-5" />, label: "Высокое давление и гидроудары" },
                    { icon: <Factory className="w-5 h-5" />, label: "Агрессивные теплоносители" },
                    { icon: <HardHat className="w-5 h-5" />, label: "Длительную эксплуатацию" },
                    { icon: <CheckCircle2 className="w-5 h-5" />, label: "Стандарты тяжелой инженерии" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-sm">
                      <div className="text-[#ff8c00]">{item.icon}</div>
                      <span className="font-bold text-sm text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-sm italic text-muted mt-4">
                Tengri Thermo — тепло, сделанное по правилам тяжёлой промышленности.
              </p>
            </div>

            {/* ЗДЕСЬ ДОБАВЛЕНЫ ДВЕ ФОТКИ */}
            <div className="grid grid-rows-2 gap-6 h-[600px] md:h-[700px]">
              {/* Фото 1 */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-secondary">
                <div className="absolute inset-0 bg-[url('/photo-1.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xl font-bold mb-1">Высокое доверие</div>
                    <p className="text-white/80 text-sm">Поддержка производства на государственном уровне.</p>
                </div>
              </div>

              {/* Фото 2 */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-secondary">
                <div className="absolute inset-0 bg-[url('/photo-2.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xl font-bold mb-1">Масштабное производство</div>
                    <p className="text-white/80 text-sm">Контроль качества на каждом этапе заводской сборки.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. ТЕХНОЛОГИИ */}
      <section className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff8c00]/5 blur-[150px] rounded-full pointer-events-none" />

        <Container className="relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-4 block">Технологии</span>
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

      {/* 4.5 СМИ О НАС / НОВОСТИ */}
      <section className="py-12 bg-background transition-colors duration-300">
        <Container>
          <div className="relative rounded-[32px] overflow-hidden bg-zinc-900 border border-zinc-800 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 group shadow-2xl">
            {/* Фоновый блик */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff8c00]/20 blur-[120px] pointer-events-none rounded-full" />
            
            <div className="lg:w-1/3 w-full shrink-0 relative z-10">
               <div className="aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden relative border border-white/10 shadow-lg">
                 <div className="absolute inset-0 bg-[url('/slide-factory.jpg')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Factory className="w-20 h-20 text-[#ff8c00] drop-shadow-[0_0_15px_rgba(255,140,0,0.8)]" />
                 </div>
               </div>
            </div>

            <div className="lg:w-2/3 flex flex-col items-start relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff8c00]/10 text-[#ff8c00] text-xs font-bold uppercase tracking-wider mb-5 border border-[#ff8c00]/20 backdrop-blur-md">
                СМИ о нас • PavlodarNews.kz
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                В Павлодаре робот приложил руку к сборке радиаторов
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl text-lg leading-relaxed">
                На заводе внедрена передовая система автоматизации: в сутки роботизированная линия создаёт сотни изделий с микронной точностью. Инновационный процесс запущен при поддержке государства и фонда «Даму», что выводит локальное производство на мировой уровень качества.
              </p>
              
              <a 
                href="https://pavlodarnews.kz/ru/v-pavlodare-robot-prilozhil-ruku-k-sborke-radiatorov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-black uppercase tracking-wider text-sm hover:bg-[#ff8c00] hover:text-white transition-all shadow-xl hover:-translate-y-1"
              >
                Читать статью
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. ФИЛОСОФИЯ И ПОДХОД (ЗДЕСЬ ТЕПЕРЬ ВИДЕО) */}
      <section className="py-24 bg-background transition-colors duration-300">
        <Container>
          <div className="rounded-[40px] border border-border bg-card shadow-lg p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/2">
                <div className="inline-block px-4 py-1 rounded-full bg-[#ff8c00] text-white font-bold text-xs mb-6 uppercase tracking-wider">
                  Наш подход
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Инженерная конструкция, <br />
                  а не просто бытовое изделие
                </h2>
                
                <div className="space-y-6 text-foreground text-lg">
                  <p className="leading-relaxed">
                    Мы пришли в производство радиаторов из тяжёлой индустрии — литья, машиностроения и работы с высокими температурами. 
                  </p>
                  <p className="text-muted text-base">
                    В основе нашего подхода — металлургическая экспертиза, промышленная культура производства и строгий контроль качества на каждом этапе. Для нас радиатор — это конструкция, от которой зависят безопасность и ресурс вашей системы отопления.
                  </p>
                  
                  <ul className="space-y-4 mt-8">
                    {[
                      "Использование полностью металлических коллекторов",
                      "Расчёт на гидроудары и агрессивные теплоносители",
                      "Контроль геометрии и сварных соединений",
                      "Соответствие требованиям ГОСТ и отраслевых стандартов"
                    ].map((item, index) => (
                      <li key={index} className="flex gap-4 items-start">
                        <CheckCircle2 className="text-[#ff8c00] w-6 h-6 mt-1 shrink-0" />
                        <span className="font-bold border-b border-border pb-2 w-full">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2 w-full space-y-6">
                 {/* БЛОК С ВИДЕО */}
                 <div className="rounded-3xl overflow-hidden border border-border shadow-xl aspect-square relative bg-zinc-900 group">
                    
                    {/* Видеоплеер на фоне */}
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <source src="/aboutcompany.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-8 left-8 right-8">
                       <p className="text-white text-xl font-medium">
                         Презентация радиаторов Tengri Thermo первым лицам государства.
                       </p>
                    </div>
                 </div>
                 
                 <div className="p-6 rounded-2xl bg-[#ff8c00]/5 border border-[#ff8c00]/20">
                    <p className="text-sm text-foreground italic">
                      «Мы переносим стандарты тяжёлой индустрии в бытовое отопление: запас прочности, точная геометрия и абсолютный контроль качества.»
                    </p>
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
      
      {/* 7. ФИНАЛЬНЫЙ МАНИФЕСТ */}
      <section className="py-24 bg-[var(--bg)] border-t border-[var(--muted-border)] transition-colors duration-300 overflow-hidden relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />
        
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <span className="text-[var(--accent)] font-bold uppercase tracking-[0.3em] text-xs">
                Никаких компромиссов. Только надёжность.
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[var(--text-main)] leading-[1.1]">
                Радиаторы, созданные по законам <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-yellow-500">
                  промышленной инженерии
                </span>
              </h2>
              <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto font-medium">
                Биметаллические радиаторы, разработанные на базе металлургического производства и рассчитанные на экстремальные условия эксплуатации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 text-left">
              {[
                { title: "100% стальной коллектор", desc: "теплоноситель не контактирует с алюминием" },
                { title: "Устойчивость к гидроударам", desc: "защита от критических перепадов давления" },
                { title: "Любые теплоносители", desc: "работа с агрессивной средой и антифризами" },
                { title: "Промышленная сварка", desc: "максимальный контроль герметичности" },
                { title: "Ресурс на десятилетия", desc: "рассчитано на сверхдолгий срок службы" },
                { title: "Запас прочности", desc: "стандарты тяжелой индустрии в вашем доме" }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--muted-border)] hover:border-[var(--accent)] transition-all shadow-[var(--shadow-1)]">
                  <div className="text-[var(--text-main)] font-bold text-sm mb-1 uppercase tracking-tight">{item.title}</div>
                  <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider leading-tight font-medium">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-[var(--muted-border)] mt-12">
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-4">Когда важен результат</h3>
              <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto font-medium">
                Наши радиаторы выбирают там, где цена ошибки высока: центральное отопление, высотные здания, нестабильные системы и повышенные нагрузки.
              </p>
              <div className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--accent)] text-white font-black uppercase tracking-widest shadow-lg transition-transform hover:-translate-y-1 cursor-default">
                Это инженерное решение для вашего дома
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}