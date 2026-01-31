"use client";

import { Container, Card, Button, Pill } from "@/components/ui";
import SectionTitle from "@/components/SectionTitle";
import { useModal } from "@/components/ModalProvider";

export default function DealersClient() {
  const { open } = useModal();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Партнёрство"
            title="Для дилеров и партнёров"
            description="Если вы продаёте, монтируете или комплектуете объекты — мы дадим прайс, условия и поддержку, чтобы сделка закрывалась уверенно."
          />
          <Pill>
            <span className="h-2 w-2 rounded-full bg-heat" />
            B2B условия · КП · поддержка проекта
          </Pill>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {/* Условия сотрудничества */}
          <Card className="p-7">
            <div className="text-lg font-semibold tracking-premium text-ink">
              Условия сотрудничества
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Демо-условия: прозрачный прайс, оптовые скидки, сопровождение и
              помощь по продукту.
            </p>

            <div className="mt-4 grid gap-2 text-sm text-stone-700">
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Дилерские цены и объёмы
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Быстрые отгрузки и логистика
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Поддержка проектных продаж
              </div>
              <div className="rounded-xl bg-heat/10 px-4 py-3 text-ink">
                🔥 Акцент: премиальный продукт легче продавать “в доверие”
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <Button onClick={() => open("price")}>Скачать прайс</Button>
              <Button variant="outline" onClick={() => open("request")}>
                Стать партнёром
              </Button>
            </div>
          </Card>

          {/* Для монтажников и проектов */}
          <Card className="p-7">
            <div className="text-lg font-semibold tracking-premium text-ink">
              Для монтажников и проектов
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Подбор под объект, расчёт мощности, рекомендации по подключению и
              комплектации. Помогаем закрывать вопросы “на месте”.
            </p>

            <div className="mt-4 grid gap-2 text-sm text-stone-700">
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Спецификации и техническая поддержка
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ КП и расчёт под объект
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Консультация по монтажу
              </div>
            </div>

            <div className="mt-5">
              <Button className="w-full" onClick={() => open("request")}>
                Запросить условия сотрудничества
              </Button>
            </div>

            <div className="mt-4 text-xs text-stone-500">
              Микро-доверие: сроки · качество · ответственность
            </div>
          </Card>
        </div>

        <div className="mt-8 rounded-3xl border border-stone-100 bg-white p-8 shadow-soft">
          <div className="text-sm font-semibold tracking-premium text-ink">
            Что часто спрашивают партнёры
          </div>
          <div className="mt-4 grid gap-3 text-sm text-stone-700 md:grid-cols-2">
            <div className="rounded-xl bg-stone-50 px-4 py-3">
              • Какие скидки и условия по объёмам?
            </div>
            <div className="rounded-xl bg-stone-50 px-4 py-3">
              • Как быстро можно получить КП на проект?
            </div>
            <div className="rounded-xl bg-stone-50 px-4 py-3">
              • Какие высоты и подключения доступны?
            </div>
            <div className="rounded-xl bg-stone-50 px-4 py-3">
              • Какой срок гарантии и что он покрывает?
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
