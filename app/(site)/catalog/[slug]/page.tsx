import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Container, Card, Pill, Button } from "@/components/ui";
import { formatPriceKZT } from "@/lib/utils";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import ProductCTAClient from "./product-cta-client";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link
            href="/catalog"
            className="text-sm font-medium text-stone-600 hover:text-ink"
          >
            ← Назад в каталог
          </Link>
          <Pill>
            <span className="h-2 w-2 rounded-full bg-heat" />
            Гарантия {product.warrantyYears} лет
          </Pill>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-7">
            <div className="text-xs font-medium tracking-premium text-stone-500">
              {product.series}
            </div>

            <h1 className="mt-1 text-2xl font-semibold tracking-premium text-ink sm:text-3xl">
              {product.name}
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {product.short} Этот блок — демо-текст в стиле премиум-брендов:
              кратко, уверенно и по делу.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-stone-100 bg-white px-4 py-3">
                <div className="text-xs text-stone-500">Высота</div>
                <div className="text-base font-semibold text-ink">
                  {product.heightMm} мм
                </div>
              </div>
              <div className="rounded-xl border border-stone-100 bg-white px-4 py-3">
                <div className="text-xs text-stone-500">Количество секций</div>
                <div className="text-base font-semibold text-ink">
                  {product.sections}
                </div>
              </div>
              <div className="rounded-xl border border-stone-100 bg-white px-4 py-3">
                <div className="text-xs text-stone-500">Тепловая мощность</div>
                <div className="text-base font-semibold text-ink">
                  {product.powerW} W
                </div>
              </div>
              <div className="rounded-xl border border-stone-100 bg-white px-4 py-3">
                <div className="text-xs text-stone-500">Рабочее давление</div>
                <div className="text-base font-semibold text-ink">
                  {product.pressureAtm} атм
                </div>
              </div>

              <div className="rounded-xl border border-stone-100 bg-white px-4 py-3">
                <div className="text-xs text-stone-500">Покрытие</div>
                <div className="text-base font-semibold text-ink">
                  {product.finish}
                </div>
              </div>
              <div className="rounded-xl border border-stone-100 bg-white px-4 py-3">
                <div className="text-xs text-stone-500">Подключение</div>
                <div className="text-base font-semibold text-ink">
                  {product.connection}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-stone-100 bg-stone-50 p-5">
              <div className="text-sm font-semibold tracking-premium text-ink">
                Важное для доверия
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-stone-700">
                <li>• Контроль качества и герметичности</li>
                <li>• Стабильная теплоотдача при эксплуатации</li>
                <li>• Поддержка при подборе под объект</li>
              </ul>
            </div>
          </Card>

          <Card className="p-7">
            <div className="text-sm font-semibold tracking-premium text-ink">
              Цена и заявка
            </div>

            <div className="mt-4 rounded-2xl border border-stone-100 bg-white p-5">
              <div className="text-xs text-stone-500">Цена</div>
              <div className="mt-1 text-2xl font-semibold tracking-premium text-ink">
                {formatPriceKZT(product.priceKzt)}
              </div>
              <div className="mt-2 text-xs text-stone-500">
                Итоговая стоимость может зависеть от объёма и условий поставки.
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              <ProductCTAClient productName={product.name} />
              <Link href="/contacts">
                <Button variant="outline" className="w-full">
                  Контакты
                </Button>
              </Link>
              <Link href="/catalog">
                <Button variant="ghost" className="w-full">
                  Вернуться в каталог
                </Button>
              </Link>
            </div>

            <div className="mt-4 text-xs leading-relaxed text-stone-500">
              Микро-текст: гарантия · совместимость · консультация по подключению
              — чтобы вы чувствовали уверенность до покупки.
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export const metadata = pageMeta({
  title: "Карточка товара",
  description:
    "Характеристики радиатора Tengri Thermo: мощность, высота, секции и цена. Запросите расчёт под ваш объект.",
  urlPath: "/catalog"
});
