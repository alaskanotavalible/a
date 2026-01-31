import { Container, Card, Pill } from "@/components/ui";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "О компании",
  description:
    "Tengri Thermo — производитель биметаллических радиаторов. Качество, надёжность, стиль и поддержка проектов в Казахстане.",
  urlPath: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="py-10 sm:py-14">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="О компании"
              title="Инженерия, которая выглядит дорого"
              description="Мы строим доверие через качество продукта и ясный сервис. Премиальный минимализм — не только в дизайне, но и в подходе к работе."
            />
            <Pill>
              <span className="h-2 w-2 rounded-full bg-heat" />
              Казахстан · Поставки по регионам
            </Pill>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Миссия",
                text: "Дать людям тепло, которое ощущается как комфорт и уверенность — без компромиссов."
              },
              {
                title: "Подход",
                text: "Сначала расчёт и подбор под объект, затем — поставка и поддержка. Всё предсказуемо."
              },
              {
                title: "Результат",
                text: "Надёжные радиаторы, которые не спорят с интерьером и служат годами."
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
                  Микро-доверие: гарантия · контроль · сервис
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-stone-100 bg-white p-8 shadow-soft">
            <div className="text-sm font-semibold tracking-premium text-ink">
              Что важно клиенту (и мы это закрываем)
            </div>
            <div className="mt-4 grid gap-3 text-sm text-stone-700 md:grid-cols-2">
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Теплоотдача соответствует ожиданиям
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Радиатор выглядит аккуратно и дорого
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Понятный расчёт до покупки
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                ✅ Поддержка для проектов и монтажников
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
