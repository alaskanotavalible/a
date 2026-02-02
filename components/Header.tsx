"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "./ModalProvider";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle"; 

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/where-to-buy", label: "Где купить" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О нас" },
  { href: "/dealers", label: "Дилерам" },
  { href: "/contacts", label: "Контакты" }
];

export default function Header() {
  const pathname = usePathname();
  const { open } = useModal();

  return (
    // Обертка: фиксированная, по центру, прозрачная для кликов по бокам
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 flex justify-center pointer-events-none">
      
      {/* САМА ТАБЛЕТКА (GLASSMORPHISM):
         1. backdrop-blur-md — размытие фона
         2. bg-white/75 и dark:bg-black/75 — полупрозрачность (вернет эффект стекла)
         3. border — тонкая рамка для контраста
      */}
      <div className="w-full max-w-7xl pointer-events-auto rounded-full border border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-lg transition-all duration-300">
        <div className="h-[72px] px-4 sm:px-8 flex items-center justify-between">
          
          {/* 1. ЛОГОТИП */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group shrink-0">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 group-hover:border-[#ff8c00] transition-colors">
              <img 
                src="/logo.jpeg" 
                alt="Logo" 
                className="h-full w-full object-cover" 
              />
            </div>
            
            <div className="hidden sm:block text-lg sm:text-xl font-bold tracking-widest text-gray-900 dark:text-white uppercase group-hover:text-[#ff8c00] transition-colors leading-none">
              Tengri<span className="text-[#ff8c00]">Thermo</span>
            </div>
            {/* Мобильная версия лого */}
            <div className="sm:hidden text-lg font-bold tracking-widest text-gray-900 dark:text-white uppercase">
              TT
            </div>
          </Link>

          {/* 2. МЕНЮ (Скрыто на мобилках) */}
          <nav className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-wide whitespace-nowrap",
                        isActive
                          ? "bg-gray-900/5 dark:bg-white/10 text-gray-900 dark:text-white" 
                          : "text-gray-500 dark:text-gray-400 hover:text-[#ff8c00] hover:bg-gray-50 dark:hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* 3. ПРАВАЯ ЧАСТЬ */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Кнопка темы */}
            <div className="relative z-50 cursor-pointer hover:scale-110 transition-transform">
               <ThemeToggle />
            </div>

            {/* Телефон (Скрываем на маленьких ноутах, показываем на больших) */}
            <a 
              href="tel:+77172677711" 
              className="hidden 2xl:flex items-center gap-2 text-gray-900 dark:text-white hover:text-[#ff8c00] transition-colors font-medium"
            >
              <span className="text-lg leading-none">📞</span> 
              <span className="text-sm font-bold whitespace-nowrap">+7 (776) 134 63 03</span>
            </a>
            
            {/* Кнопка CTA - добавил whitespace-nowrap чтобы не ломалась */}
            <button 
              onClick={() => open("request")}
              className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold py-3 px-6 rounded-full text-sm shadow-md transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Заказать расчет
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}