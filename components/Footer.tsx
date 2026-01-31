"use client";

import Link from "next/link";
import { Button, Container, Divider } from "./ui";
import { useModal } from "./ModalProvider";

export default function Footer() {
  const { open } = useModal();

  return (
    <footer className="mt-16 border-t border-stone-100 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold tracking-premium text-ink">
              Tengri Thermo
            </div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone-600">
              Надёжные и стильные биметаллические радиаторы для квартир, домов и
              проектов в Казахстане. Премиальный подход к теплу.
            </p>

            <div className="mt-4 flex gap-2">
              <Button variant="outline" onClick={() => open("price")}>
                Скачать прайс
              </Button>
              <Button variant="dark" onClick={() => open("call")}>
                Позвонить
              </Button>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-premium text-stone-500">
              Навигация
            </div>
            <div className="mt-3 grid gap-2 text-sm">
              <Link className="text-stone-700 hover:text-ink" href="/catalog">
                Каталог
              </Link>
              <Link className="text-stone-700 hover:text-ink" href="/about">
                О компании
              </Link>
              <Link className="text-stone-700 hover:text-ink" href="/dealers">
                Для дилеров / партнёров
              </Link>
              <Link className="text-stone-700 hover:text-ink" href="/contacts">
                Контакты
              </Link>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-premium text-stone-500">
              Контакты
            </div>
            <div className="mt-3 grid gap-2 text-sm text-stone-700">
              <div>Телефон: +7 (700) 000-00-00</div>
              <div>Email: info@tengri-thermo.kz</div>
              <div>Казахстан · Поставки по регионам</div>
            </div>

            <div className="mt-4">
              <Button onClick={() => open("request")}>Оставить заявку</Button>
            </div>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Tengri Thermo. Все права защищены.</div>
          <div>
            Микро-доверие: проверка герметичности · стабильная теплоотдача ·
            поддержка проектам
          </div>
        </div>
      </Container>
    </footer>
  );
}
