import { Container, Card, Button } from "@/components/ui";
import SectionTitle from "@/components/SectionTitle";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Где купить",
  description:
    "Где купить радиаторы Tengri Thermo в Казахстане. Для покупки и консультации — контакты и форма заявки.",
  urlPath: "/where-to-buy"
});

export default function WhereToBuyPage() {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <SectionTitle
          eyebrow="Где купить"
          title="Покупка без лишней суеты"
          description="Пока это демо-страница. Здесь будут города, дилеры и точки продаж. Сейчас — быстрый контакт и заявка."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="p-7">
            <div className="text-lg font-semibold tracking-premium text-ink">
              Частным клиентам
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Подбор модели и секций, консультация по подключению, расчёт под
              площадь и теплопотери.
            </p>

            <div className="mt-4 grid gap-2 text-sm text-stone-700">
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Подберём радиатор под комнату
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Подскажем монтаж и комплектацию
              </div>
            </div>

            <div className="mt-5">
              <Link href="/contacts">
                <Button>Перейти в контакты</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-7">
            <div className="text-lg font-semibold tracking-premium text-ink">
              B2B / проекты
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Для комплектации объектов: КП, прайс, сроки поставки, условия для
              дилеров.
            </p>

            <div className="mt-4 grid gap-2 text-sm text-stone-700">
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Коммерческое предложение
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Партнёрские условия
              </div>
            </div>

            <div className="mt-5">
              <Link href="/dealers">
                <Button variant="outline">Партнёрам</Button>
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-8 rounded-3xl border border-stone-100 bg-white p-8 shadow-soft">
          <div className="text-sm font-semibold tracking-premium text-ink">
            Скоро здесь будет
          </div>
          <div className="mt-3 grid gap-2 text-sm text-stone-700 md:grid-cols-2">
            <div className="rounded-xl bg-stone-50 px-4 py-3">
              • Список дилеров по городам
            </div>
            <div className="rounded-xl bg-stone-50 px-4 py-3">
              • Складские остатки и отгрузки
            </div>
            <div className="rounded-xl bg-stone-50 px-4 py-3">
              • Рекомендации по выбору мощности
            </div>
            <div className="rounded-xl bg-stone-50 px-4 py-3">
              • Документация и сертификаты (если нужно)
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
