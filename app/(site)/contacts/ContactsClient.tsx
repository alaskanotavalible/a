"use client";

import { Container, Card, Button, Pill } from "@/components/ui";
import SectionTitle from "@/components/SectionTitle";
import { useModal } from "@/components/ModalProvider";

export default function ContactsClient() {
  const { open } = useModal();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Контакты"
            title="Связь с Tengri Thermo"
            description="Без карты — только быстрые каналы: телефон и форма заявки. Получите расчёт, прайс или консультацию."
          />
          <Pill>
            <span className="h-2 w-2 rounded-full bg-heat" />
            Ответ в рабочее время
          </Pill>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="p-7">
            <div className="text-lg font-semibold tracking-premium text-ink">
              Телефон и почта
            </div>
            <div className="mt-4 grid gap-2 text-sm text-stone-700">
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                Телефон: <span className="font-semibold">+7 (700) 000-00-00</span>
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                Email: <span className="font-semibold">info@tengri-thermo.kz</span>
              </div>
              <div className="rounded-xl bg-stone-50 px-4 py-3">
                Казахстан · Поставки по регионам
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Button onClick={() => open("call")} className="sm:min-w-[180px]">
                Заказать звонок
              </Button>
              <Button variant="outline" onClick={() => open("price")}>
                Скачать прайс
              </Button>
            </div>

            <div className="mt-4 text-xs text-stone-500">
              Микро-текст: гарантия · консультация · поддержка проектов
            </div>
          </Card>

          <Card className="p-7">
            <div className="text-lg font-semibold tracking-premium text-ink">
              Оставить заявку
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Нажмите кнопку — откроется форма. Данные не отправляются (демо),
              но UX как на боевом сайте.
            </p>

            <div className="mt-5 grid gap-2">
              <Button onClick={() => open("request")}>Оставить заявку</Button>
              <Button variant="outline" onClick={() => open("call")}>
                Перезвоните мне
              </Button>
              <Button variant="ghost" onClick={() => open("price")}>
                Хочу прайс
              </Button>
            </div>

            <div className="mt-4 rounded-2xl border border-stone-100 bg-stone-50 p-5 text-sm text-stone-700">
              ⏱️ Обычно: расчёт мощности + подбор модели = быстро и по делу.
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
