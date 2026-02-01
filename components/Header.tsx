"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "./ModalProvider";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle"; 

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О нас" },
  { href: "/dealers", label: "Дилерам" },
  { href: "/contacts", label: "Контакты" }
];

export default function Header() {
  const pathname = usePathname();
  const { open } = useModal();

  return (
    // pointer-events-none на всем хедере, чтобы пропускал клики по бокам
    <header className="fixed top-0 z-50 w-full pt-4 sm:pt-6 px-4 flex justify-center pointer-events-none">
      
      {/* pointer-events-auto на самой "таблетке", чтобы меню работало */}
      <div className="w-full max-w-7xl pointer-events-auto rounded-full border border-border bg-header backdrop-blur-md shadow-lg transition-all duration-300">
        <div className="h-[72px] px-6 sm:px-8 flex items-center justify-between">
          
          {/* ЛОГОТИП */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border group-hover:border-heat transition-colors">
              <img 
                src="/logo.jpeg" 
                alt="Logo" 
                className="h-full w-full object-cover" 
              />
            </div>
            
            <div className="text-xl font-bold tracking-widest text-foreground uppercase group-hover:text-heat transition-colors leading-none">
              Tengri<span className="text-heat">Thermo</span>
            </div>
          </Link>

          {/* МЕНЮ */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-2.5 rounded-full text-sm font-medium transition-all uppercase tracking-wide",
                        isActive
                          ? "bg-secondary text-foreground font-bold" 
                          : "text-muted hover:text-foreground hover:bg-secondary/50"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ПРАВАЯ ЧАСТЬ */}
          <div className="flex items-center gap-4">
            
            {/* КНОПКА ТЕМЫ (ВАЖНО: cursor-pointer и z-index) */}
            <div className="relative z-50 cursor-pointer hover:scale-110 transition-transform">
               <ThemeToggle />
            </div>

            {/* Телефон */}
            <a 
              href="tel:+77172677711" 
              className="hidden xl:flex items-center gap-2 text-foreground hover:text-heat transition-colors font-medium"
            >
              <span className="text-lg leading-none">📞</span> 
              <span className="text-sm font-bold">+7 (7172) 677 711</span>
            </a>
            
            {/* Кнопка "Заказать" */}
            <button 
              onClick={() => open("request")}
              className="bg-heat hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-sm shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              Заказать расчет
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}