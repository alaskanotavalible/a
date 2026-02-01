import Link from "next/link";
import { Container, Button } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { pageMeta } from "@/lib/seo";
import Certificates from "@/components/Certificates";
import Calculator from "@/components/Calc";

export const metadata = pageMeta({
  title: "Главная",
  description:
    "Премиальные биметаллические радиаторы Tengri Thermo. Каталог, подбор мощности, заявки и партнёрство в Казахстане.",
  urlPath: "/"
});

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* HERO SECTION */}
      {/* Используем bg-background, чтобы менялся цвет */}
      <section className="relative overflow-hidden border-b border-border bg-background pt-32 pb-16 sm:pt-40 sm:pb-24 transition-colors duration-300">
        
        {/* Фоновые эффекты (адаптированы под обе темы) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heat/20 blur-[120px] rounded-full pointer-events-none opacity-20 dark:opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            
            {/* ЛЕВАЯ ЧАСТЬ */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-border bg-secondary/30 px-4 py-1.5 text-muted backdrop-blur-sm text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-heat animate-pulse shadow-[0_0_10px_#ff8c00]" />
                Надёжность · Стиль · Казахстан
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl leading-[1.1]">
                Tengri Thermo — <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-heat to-orange-400">
                   премиальный
                </span> биметалл
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Радиаторы, которые выглядят дорого и работают стабильно: в квартирах, домах и проектах. 
                Лаконичный дизайн, уверенная теплоотдача, чистая инженерия.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/catalog">
                  <Button className="w-full sm:w-auto !bg-heat hover:!bg-orange-600 !text-white border-0 px-8 py-4 text-base shadow-lg hover:scale-105 transition-transform">
                    Открыть каталог
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent border-border text-foreground hover:bg-secondary px-8 py-4 text-base backdrop-blur-md">
                    Почему мы?
                  </Button>
                </Link>
              </div>

              {/* Плашки характеристик */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { label: "Давление", val: "25 атм" },
                  { label: "Гарантия", val: "10 лет" },
                  { label: "Подбор", val: "под объект" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-card/50 px-5 py-4 backdrop-blur-sm transition hover:bg-secondary hover:border-border">
                    <div className="text-xs text-muted font-bold uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-foreground">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ПРАВАЯ ЧАСТЬ (КАРТОЧКА) */}
            <div className="relative group perspective-1000">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-heat to-orange-600 rounded-[24px] blur opacity-20 group-hover:opacity-50 transition duration-1000" />

              <div className="relative rounded-[24px] overflow-hidden h-full transform transition-transform duration-500 hover:scale-[1.02] border border-border bg-card shadow-2xl">
                <div className="relative p-8 sm:p-10">
                  {/* Градиент внутри */}
                  <div className="absolute inset-0 bg-gradient-to-br from-heat/5 via-transparent to-transparent opacity-50" />
                  
                  <div className="relative z-10">
                    <div className="text-xs font-bold tracking-widest text-heat uppercase mb-2">
                      Флагманская серия
                    </div>
                    
                    <div className="text-3xl font-bold text-foreground tracking-tight">
                      TT Bimetal
                    </div>
                    
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      Комфортный баланс материалов и дизайна — для города, дома и больших проектов.
                    </p>

                    <div className="mt-6 grid gap-2">
                      {[
                        "Чистая геометрия и аккуратные торцы",
                        "Уверенная теплоотдача без переплат",
                        "Монтаж под интерьер: боковое / нижнее",
                        "Стабильность в условиях Казахстана"
                      ].map((t) => (
                        <div
                          key={t}
                          className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground backdrop-blur-sm transition hover:bg-secondary"
                        >
                           <span className="text-heat mr-2">✓</span> {t}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link href="/catalog" className="w-full sm:w-auto">
                        {/* Кнопка "Выбрать модель" - контрастная к фону */}
                        <Button className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 font-bold border-0">
                          Выбрать модель
                        </Button>
                      </Link>
                      <Link href="/dealers" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto bg-transparent border-border text-foreground hover:bg-secondary">
                          Для партнёров
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* FEATURED */}
      <section className="py-20 bg-background relative border-b border-border transition-colors duration-300">
         <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-heat/5 blur-[100px] rounded-full pointer-events-none" />

        <Container>
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
               <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">Каталог</span>
               <h2 className="text-3xl md:text-4xl font-bold text-foreground">Популярные модели</h2>
               <p className="mt-4 text-muted max-w-xl text-sm leading-relaxed">
                  Демо-линейка: высота 350/500/700, секции 6–14. 
                  Идеальная геометрия и максимальная теплоотдача.
               </p>
            </div>
            
            <Link href="/catalog" className="hidden sm:block">
              <Button variant="outline" className="bg-transparent border-border text-foreground hover:bg-secondary">Смотреть всё</Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link href="/catalog">
              <Button variant="outline" className="w-full bg-transparent border-border text-foreground">
                Смотреть весь каталог
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Бегущая строка (Marquee) */}
      <section className="py-10 border-y border-border bg-secondary/30 overflow-hidden">
        <Container className="mb-4 text-center">
            <p className="text-xs text-muted uppercase tracking-widest font-bold">Наши радиаторы установлены в ЖК:</p>
        </Container>
        
        <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-16 min-w-full items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Названия ЖК / Бренды - цвет text-foreground для адаптации */}
            {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16">
                    <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">HIGHVILL</span>
                    <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">BI GROUP</span>
                    <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">BAZIS-A</span>
                    <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">RAMS</span>
                    <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">SENSATA</span>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <Calculator />

      <Certificates />
      
      {/* TRUST */}
      <section id="trust" className="bg-background py-20 border-t border-border transition-colors duration-300">
        <Container>
          <div className="mb-12">
            <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">Доверие</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Почему нам доверяют</h2>
            <p className="mt-4 text-muted max-w-2xl text-lg">
                Мы делаем ставку на стабильность, аккуратную эстетику и предсказуемое качество.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Контроль качества",
                text: "Проверка герметичности и стабильности теплоотдачи. Радиатор должен работать годами."
              },
              {
                title: "Надёжность системы",
                text: "Биметалл уверенно держит нагрузки (до 30 атм) и подходит для большинства высотных объектов."
              },
              {
                title: "Премиальный минимализм",
                text: "Визуально чистый продукт. Он не спорит с интерьером — он его дополняет."
              }
            ].map((b) => (
              <div key={b.title} className="p-8 rounded-3xl border border-border bg-card shadow-sm hover:shadow-md transition-all">
                <div className="text-xl font-bold text-foreground mb-3">
                  {b.title}
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {b.text}
                </p>
                <div className="mt-6 pt-6 border-t border-border text-xs text-muted">
                  гарантия · сервис · поддержка
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PARTNERS */}
      <section className="py-20 bg-background border-t border-border transition-colors duration-300">
        <Container>
          <div className="mb-12">
             <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">B2B</span>
             <h2 className="text-3xl md:text-4xl font-bold text-foreground">Поставщикам и партнёрам</h2>
             <p className="mt-4 text-muted max-w-2xl text-lg">
                Работаем как с частными клиентами, так и с дилерами, монтажными организациями и проектными командами.
             </p>
          </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Card 1 */}
              <div className="p-8 sm:p-10 rounded-3xl border border-border bg-card shadow-lg">
                <div className="text-2xl font-bold text-foreground mb-3">
                  Для дилеров
                </div>
                <p className="text-muted mb-6">
                  Прайс-лист, условия сотрудничества, поддержка продаж и маркетинговые материалы.
                </p>
                <div className="grid gap-3 mb-8">
                   {["Индивидуальные условия", "Быстрые отгрузки", "Поддержка проекта"].map(item => (
                       <div key={item} className="flex items-center gap-3 text-foreground bg-secondary/50 p-3 rounded-xl border border-border">
                           <span className="text-heat">✓</span> {item}
                       </div>
                   ))}
                </div>
                <div>
                  <Link href="/dealers">
                    <Button className="!bg-foreground !text-background hover:opacity-90 border-0 font-bold">Страница партнёрам</Button>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 sm:p-10 rounded-3xl border border-border bg-card shadow-lg">
                <div className="text-2xl font-bold text-foreground mb-3">
                  Для проектных команд
                </div>
                <p className="text-muted mb-6">
                  Подбор радиаторов, расчёт мощности, документация, консультации по подключению.
                </p>
                <div className="grid gap-3 mb-8">
                   {["Техподдержка и спецификации", "Подбор под объект", "Коммерческое предложение"].map(item => (
                       <div key={item} className="flex items-center gap-3 text-foreground bg-secondary/50 p-3 rounded-xl border border-border">
                           <span className="text-heat">✓</span> {item}
                       </div>
                   ))}
                </div>

                <div className="flex gap-3">
                  <Link href="/contacts">
                    <Button variant="outline" className="bg-transparent border-border text-foreground hover:bg-secondary">Контакты</Button>
                  </Link>
                  <Link href="/catalog">
                    <Button variant="ghost" className="text-muted hover:text-foreground">Каталог</Button>
                  </Link>
                </div>
              </div>
            </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}