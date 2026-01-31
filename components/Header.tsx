"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Container, Pill } from "./ui";
import { useModal } from "./ModalProvider";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О компании" },
  { href: "/suppliers", label: "Поставщики" },
  { href: "/where-to-buy", label: "Где купить" },
  { href: "/dealers", label: "Партнёрам" },
  { href: "/contacts", label: "Контакты" }
];

export default function Header() {
  const pathname = usePathname();
  const { open } = useModal();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-100 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white shadow-soft">
            <span className="text-sm font-semibold tracking-premium">TT</span>
            <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-heat" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-premium text-ink">
              Tengri Thermo
            </div>
            <div className="text-xs text-stone-500">
              Биметаллические радиаторы
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm transition",
                  active
                    ? "bg-stone-100 text-ink"
                    : "text-stone-600 hover:bg-stone-50 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Pill className="hidden sm:inline-flex">
            <span className="h-2 w-2 rounded-full bg-heat" />
            Гарантия 10 лет · Контроль качества
          </Pill>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Button
              variant="outline"
              onClick={() => open("price")}
              className="hidden lg:inline-flex"
            >
              Скачать прайс
            </Button>
          </motion.div>

          <Button
            variant="dark"
            onClick={() => open("call")}
            className="whitespace-nowrap"
          >
            Позвонить
          </Button>
        </div>
      </Container>

      {/* Mobile nav */}
      <div className="lg:hidden">
        <Container className="pb-3">
          <div className="flex flex-wrap gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs text-stone-700 transition hover:bg-stone-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
