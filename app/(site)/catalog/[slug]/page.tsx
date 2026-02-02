import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Container, Button } from "@/components/ui";
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
    // ПЕРЕКЛЮЧЕНИЕ ФОНА: bg-background вместо bg-[#050505]
    <section className="py-24 sm:py-32 bg-background min-h-screen relative overflow-hidden transition-colors duration-300">
      
      {/* Фоновое свечение (Адаптированная прозрачность) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heat/10 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-30" />

      <Container className="relative z-10">
        {/* Хлебные крошки */}
        <div className="mb-8 flex items-center justify-between gap-3">
          <Link
            href="/catalog"
            // text-muted меняется на темный/светлый сам
            className="text-sm font-medium text-muted hover:text-heat transition-colors flex items-center gap-2"
          >
            ← Назад в каталог
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-heat/20 bg-heat/10 px-3 py-1 text-xs text-heat font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-heat shadow-[0_0_8px_#ff8c00]" />
            Гарантия {product.warrantyYears} лет
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* ЛЕВАЯ КОЛОНКА: Описание и Характеристики (bg-card) */}
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 relative overflow-hidden shadow-sm">
             {/* Легкий блик для объема */}
            <div className="absolute inset-0 bg-gradient-to-br from-heat/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
                <div className="text-xs font-bold tracking-widest text-heat uppercase mb-2">
                {product.series}
                </div>

                {/* text-foreground адаптируется */}
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                {product.name}
                </h1>

                <p className="mt-4 text-base leading-relaxed text-muted max-w-2xl">
                {product.short} Оптимальное инженерное решение для современного интерьера: 
                высокая надежность и премиальная эстетика в каждой детали.
                </p>

                {/* Сетка характеристик */}
<div className="mt-10 grid gap-3 sm:grid-cols-2">
  {[
    { label: "Высота", val: product.heightMm ? `${product.heightMm} мм` : "500 мм" },
    { label: "Секций", val: product.sections || "10" },
    { label: "Мощность", val: product.powerW ? `${product.powerW} Вт` : "160 Вт" },
    { label: "Давление", val: product.pressureAtm ? `${product.pressureAtm} атм` : "30 атм" },
    // Здесь была ошибка: заменили на безопасную проверку или стандартное значение
    { label: "Покрытие", val: (product as any).finish || "Полимерное" }, 
    { label: "Подключение", val: (product as any).connection || "Боковое" },
  ].map((item) => (
    <div key={item.label} className="rounded-xl border border-border bg-secondary/30 px-5 py-4 hover:bg-secondary/50 transition-all group">
      <div className="text-xs text-muted uppercase font-bold tracking-wider">{item.label}</div>
      <div className="text-lg font-bold text-foreground mt-1 group-hover:text-heat transition-colors">
        {item.val}
      </div>
    </div>
  ))}
</div>

                {/* Блок доверия */}
                <div className="mt-8 rounded-2xl border border-heat/20 bg-heat/5 p-6">
                <div className="text-sm font-bold tracking-wide text-heat uppercase mb-3">
                    Преимущества Tengri Thermo
                </div>
                <ul className="grid gap-3 text-sm text-foreground/80">
                    <li className="flex gap-3">
                        <span className="text-heat font-bold">✓</span> Контроль качества и герметичности каждой секции
                    </li>
                    <li className="flex gap-3">
                        <span className="text-heat font-bold">✓</span> Стабильная теплоотдача при любых нагрузках
                    </li>
                    <li className="flex gap-3">
                        <span className="text-heat font-bold">✓</span> Профессиональный расчёт под ваш объект
                    </li>
                </ul>
                </div>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Цена и CTA */}
          <div className="h-fit lg:sticky lg:top-24">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl relative overflow-hidden">
                
                <div className="text-sm font-bold tracking-wide text-muted uppercase mb-4">
                Цена и оформление
                </div>

                {/* Блок цены: bg-secondary адаптируется под тему */}
                <div className="rounded-2xl bg-secondary p-6 border border-border mb-6">
                    <div className="text-xs text-muted mb-1 font-medium">Розничная цена</div>
                    <div className="text-4xl font-bold tracking-tight text-foreground">
                        {formatPriceKZT(product.priceKzt)}
                    </div>
                    <div className="mt-3 text-[10px] leading-relaxed text-muted uppercase tracking-tighter">
                        Стоимость может варьироваться в зависимости от объёма заказа.
                    </div>
                </div>

                <div className="grid gap-3">
                    {/* Кнопки теперь в едином стиле */}
                    <ProductCTAClient productName={product.name} />
                    
                    <Link href="/contacts">
                        <Button variant="outline" className="w-full bg-transparent border-border text-foreground hover:bg-secondary py-6">
                        Связаться с нами
                        </Button>
                    </Link>
                    <Link href="/catalog">
                        <Button variant="ghost" className="w-full text-muted hover:text-foreground">
                        Вернуться в каталог
                        </Button>
                    </Link>
                </div>

                <div className="mt-8 text-[10px] font-bold uppercase tracking-widest text-muted text-center border-t border-border pt-6">
                Гарантия 10 лет · Сертификат CT-KZ · Доставка РК
                </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export const metadata = pageMeta({
  title: "Карточка товара",
  description: "Технические характеристики и цены на радиаторы Tengri Thermo.",
  urlPath: "/catalog"
});