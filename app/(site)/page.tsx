import Link from "next/link";
import { Container, Button, Card, Pill, SubtleGlow } from "@/components/ui";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { pageMeta } from "@/lib/seo";

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
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-100 bg-white">
        <SubtleGlow />

        <Container className="py-12 sm:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Pill className="mb-4">
                <span className="h-2 w-2 rounded-full bg-heat" />
                Надёжность · Стиль · Казахстан
              </Pill>

              <h1 className="text-3xl font-semibold tracking-premium text-ink sm:text-5xl">
                Tengri Thermo —
                <span className="text-heat"> премиальный</span> биметалл для
                современного тепла
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base">
                Радиаторы, которые выглядят дорого и работают стабильно: в
                квартирах, домах и проектах. Лаконичный дизайн, уверенная
                теплоотдача, чистая инженерия.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Link href="/catalog">
                  <Button className="w-full sm:w-auto">Открыть каталог</Button>
                </Link>
                <Link href="#trust">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Почему нам доверяют
                  </Button>
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-stone-100 bg-white px-4 py-3 shadow-soft">
                  <div className="text-xs text-stone-500">Давление</div>
                  <div className="text-base font-semibold text-ink">25 атм</div>
                </div>
                <div className="rounded-xl border border-stone-100 bg-white px-4 py-3 shadow-soft">
                  <div className="text-xs text-stone-500">Гарантия</div>
                  <div className="text-base font-semibold text-ink">10 лет</div>
                </div>
                <div className="rounded-xl border border-stone-100 bg-white px-4 py-3 shadow-soft">
                  <div className="text-xs text-stone-500">Подбор</div>
                  <div className="text-base font-semibold text-ink">под объект</div>
                </div>
              </div>
            </div>

            {/* визуальная карточка */}
            <div className="relative">
              <Card className="overflow-hidden">
                <div className="relative p-8 sm:p-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-heat/10 via-transparent to-ink/5" />
                  <div className="relative">
                    <div className="text-xs font-medium tracking-premium text-stone-500">
                      Премиальная серия
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-premium text-ink">
                      TT Bimetal
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      Комфортный баланс материалов и дизайна — для города, дома и
                      больших проектов.
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
                          className="rounded-xl border border-stone-100 bg-white/70 px-4 py-3 text-sm text-stone-700"
                        >
                          {t}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                      <Link href="/catalog">
                        <Button variant="dark" className="w-full sm:w-auto">
                          Выбрать модель
                        </Button>
                      </Link>
                      <Link href="/dealers">
                        <Button variant="outline" className="w-full sm:w-auto">
                          Для партнёров
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              eyebrow="Каталог"
              title="Популярные модели"
              description="Демо-линейка: высота 350/500/700, секции 6–14. Фильтры и карточки — полностью рабочие."
            />
            <Link href="/catalog" className="hidden sm:block">
              <Button variant="outline">Смотреть всё</Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/catalog">
              <Button variant="outline" className="w-full">
                Смотреть весь каталог
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* TRUST */}
      <section id="trust" className="border-y border-stone-100 bg-white py-12 sm:py-16">
        <Container>
          <SectionTitle
            eyebrow="Доверие"
            title="Почему нам доверяют в Казахстане"
            description="Мы делаем ставку на стабильность, аккуратную эстетику и предсказуемое качество. Без лишнего шума — только результат."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Контроль качества",
                text: "Проверка герметичности и стабильности теплоотдачи. Радиатор должен работать годами."
              },
              {
                title: "Надёжность системы",
                text: "Биметалл уверенно держит нагрузки и подходит для большинства объектов."
              },
              {
                title: "Премиальный минимализм",
                text: "Визуально чистый продукт. Он не спорит с интерьером — он его дополняет."
              }
            ].map((b) => (
              <Card key={b.title} className="p-6">
                <div className="text-lg font-semibold tracking-premium text-ink">
                  {b.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {b.text}
                </p>
                <div className="mt-4 text-xs text-stone-500">
                  Микро-текст доверия: гарантия · сервис · поддержка проектов
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* PARTNERS */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionTitle
            eyebrow="B2B"
            title="Поставщикам и партнёрам"
            description="Работаем как с частными клиентами, так и с дилерами, монтажными организациями и проектными командами."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card className="p-7">
              <div className="text-lg font-semibold tracking-premium text-ink">
                Для дилеров
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Прайс-лист, условия сотрудничества, поддержка продаж и
                маркетинговые материалы.
              </p>
              <div className="mt-4 grid gap-2 text-sm text-stone-700">
                <div className="rounded-xl bg-stone-50 px-4 py-3">
                  ✅ Индивидуальные условия
                </div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">
                  ✅ Быстрые отгрузки
                </div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">
                  ✅ Поддержка проекта
                </div>
              </div>
              <div className="mt-5">
                <Link href="/dealers">
                  <Button variant="dark">Страница партнёрам</Button>
                </Link>
              </div>
            </Card>

            <Card className="p-7">
              <div className="text-lg font-semibold tracking-premium text-ink">
                Для проектов и монтажников
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Подбор радиаторов, расчёт мощности, документация, консультации по
                подключению и монтажу.
              </p>
              <div className="mt-4 grid gap-2 text-sm text-stone-700">
                <div className="rounded-xl bg-stone-50 px-4 py-3">
                  ✅ Техподдержка и спецификации
                </div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">
                  ✅ Подбор под объект
                </div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">
                  ✅ Коммерческое предложение
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <Link href="/contacts">
                  <Button variant="outline">Контакты</Button>
                </Link>
                <Link href="/catalog">
                  <Button>Каталог</Button>
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
