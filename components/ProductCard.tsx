"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { formatPriceKZT } from "@/lib/utils";
import { Button, Pill } from "./ui";
import { useModal } from "./ModalProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { open } = useModal();

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className="group rounded-2xl border border-stone-100 bg-white shadow-premium"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-medium tracking-premium text-stone-500">
              {product.series}
            </div>
            <Link
              href={`/catalog/${product.slug}`}
              className="mt-1 block text-base font-semibold tracking-premium text-ink hover:opacity-90"
            >
              {product.name}
            </Link>
          </div>

          <Pill className={product.inStock ? "" : "opacity-60"}>
            <span
              className={`h-2 w-2 rounded-full ${
                product.inStock ? "bg-heat" : "bg-stone-300"
              }`}
            />
            {product.inStock ? "В наличии" : "Под заказ"}
          </Pill>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          {product.short}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-stone-50 px-3 py-2">
            <div className="text-[11px] text-stone-500">Высота</div>
            <div className="text-sm font-medium text-ink">
              {product.heightMm} мм
            </div>
          </div>
          <div className="rounded-xl bg-stone-50 px-3 py-2">
            <div className="text-[11px] text-stone-500">Секции</div>
            <div className="text-sm font-medium text-ink">
              {product.sections}
            </div>
          </div>
          <div className="rounded-xl bg-stone-50 px-3 py-2">
            <div className="text-[11px] text-stone-500">Мощность</div>
            <div className="text-sm font-medium text-ink">
              {product.powerW} W
            </div>
          </div>
          <div className="rounded-xl bg-stone-50 px-3 py-2">
            <div className="text-[11px] text-stone-500">Давление</div>
            <div className="text-sm font-medium text-ink">
              {product.pressureAtm} атм
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] text-stone-500">Цена</div>
            <div className="text-lg font-semibold tracking-premium text-ink">
              {formatPriceKZT(product.priceKzt)}
            </div>
          </div>

          <Button
            onClick={() => open("request", { productName: product.name })}
          >
            Запросить расчёт
          </Button>
        </div>
      </div>

      <div className="h-px w-full bg-stone-100" />

      <div className="flex items-center justify-between px-5 py-4">
        <Link
          href={`/catalog/${product.slug}`}
          className="text-sm font-medium text-stone-700 hover:text-ink"
        >
          Смотреть характеристики →
        </Link>

        <div className="text-xs text-stone-500">
          Гарантия {product.warrantyYears} лет
        </div>
      </div>
    </motion.div>
  );
}
