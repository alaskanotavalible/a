import { Container } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "О компании",
  description: "Tengri Thermo — производитель биметаллических радиаторов.",
  urlPath: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 sm:pt-40 bg-background relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none opacity-40" />

        <Container className="relative z-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
               <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">
                 О компании
               </span>
               <h1 className="text-4xl font-bold text-foreground mb-4">
                 Инженерия, которая выглядит дорого
               </h1>
               <p className="text-muted max-w-2xl text-lg">
                 Мы строим доверие через качество продукта и ясный сервис.
               </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Миссия",
                text: "Дать людям тепло, которое ощущается как комфорт и уверенность — без компромиссов."
              },
              {
                title: "Подход",
                text: "Сначала расчёт и подбор под объект, затем — поставка и поддержка."
              },
              {
                title: "Результат",
                text: "Надёжные радиаторы, которые не спорят с интерьером и служат годами."
              }
            ].map((b) => (
              <div key={b.title} className="rounded-3xl border border-border bg-card p-8 hover:border-border transition-colors shadow-sm">
                <div className="text-xl font-bold text-foreground mb-3">
                  {b.title}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {b.text}
                </p>
                <div className="mt-auto border-t border-border pt-4 text-xs text-muted">
                  гарантия · контроль · сервис
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-secondary/20 p-8 backdrop-blur-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-muted mb-6">
              Что важно клиенту
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                 "Теплоотдача соответствует ожиданиям",
                 "Радиатор выглядит аккуратно и дорого",
                 "Понятный расчёт до покупки",
                 "Поддержка для проектов и монтажников"
              ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card px-5 py-4 text-sm text-foreground flex items-center gap-3">
                      <span className="text-heat">✅</span> {item}
                  </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}