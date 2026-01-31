"use client";

import { Button, Card, Container, SubtleGlow } from "./ui";
import { useModal } from "./ModalProvider";
import { motion } from "framer-motion";

export default function CTASection() {
  const { open } = useModal();

  return (
    <section className="relative py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-premium">
          <SubtleGlow />

          <div className="grid gap-8 p-8 sm:p-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs font-medium tracking-premium text-stone-500">
                Быстрая заявка
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-premium text-ink sm:text-3xl">
                Рассчитаем мощность и подберём модель под ваш объект
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone-600 sm:text-base">
                Квартира, дом, ЖК, коммерция — учитываем площадь, теплопотери и
                тип подключения. Получите расчёт и рекомендации без лишней
                переписки.
              </p>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Button onClick={() => open("request")} className="sm:min-w-[220px]">
                  Запросить расчёт
                </Button>
                <Button variant="outline" onClick={() => open("call")}>
                  Заказать звонок
                </Button>
              </div>

              <div className="mt-4 text-xs text-stone-500">
                Доверие: гарантия 10 лет · проверка герметичности · стабильная
                теплоотдача
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <Card className="p-6">
                <div className="text-sm font-semibold tracking-premium text-ink">
                  Что вы получите
                </div>

                <div className="mt-4 grid gap-3 text-sm text-stone-700">
                  <div className="rounded-xl bg-stone-50 px-4 py-3">
                    ✅ Подбор количества секций и высоты
                  </div>
                  <div className="rounded-xl bg-stone-50 px-4 py-3">
                    ✅ Рекомендации по монтажу и подключению
                  </div>
                  <div className="rounded-xl bg-stone-50 px-4 py-3">
                        ✅ Коммерческое предложение для проектов
                  </div>
                  <div className="rounded-xl bg-heat/10 px-4 py-3 text-ink">
                    ⚡ Ответ обычно в течение рабочего дня
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <Button variant="outline" onClick={() => open("price")}>
                    Скачать прайс
                  </Button>
                  <Button onClick={() => open("request")}>Оставить заявку</Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
