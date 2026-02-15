"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "./ModalProvider";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle"; 
import { Search, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Конфигуратор" },
  { href: "/where-to-buy", label: "Где купить" },
  { href: "/dealers", label: "Дилерам" },
  { href: "/contacts", label: "Контакты" },
  { href: "/about", label: "О компании" }
];

export default function Header() {
  const pathname = usePathname();
  const { open } = useModal();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Функция поиска "как Control F"
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && searchTerm) {
      // Это встроенная функция браузера для поиска текста на странице
      // Работает почти как Ctrl+F
      (window as any).find(searchTerm); 
    }
  };

  return (
    // HEADER: Fixed (прибит), без анимаций высоты, черный фон ночью
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="flex flex-col h-auto">
        
        {/* === ВЕРХНИЙ ЭТАЖ (Лого, Поиск, Контакты) === */}
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-8 border-b border-gray-100 dark:border-white/5">
            
            {/* ЛОГОТИП */}
            <div className="w-[180px] sm:w-[260px] shrink-0 flex items-center border-r border-gray-200 dark:border-white/10 h-full pr-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative h-9 w-9 overflow-hidden rounded-md">
                  <img src="/logo.jpeg" alt="Logo" className="h-full w-full object-cover" />
                </div>
                <div className="hidden sm:flex flex-col justify-center">
                   <div className="text-xl font-black tracking-widest text-gray-900 dark:text-white uppercase leading-none">
                     Tengri<span className="text-[#ff8c00]">Thermo</span>
                   </div>
                </div>
              </Link>
            </div>

            {/* ПРАВАЯ ЧАСТЬ ВЕРХНЕГО ЭТАЖА */}
            <div className="flex-1 flex items-center justify-between pl-6 sm:pl-10">
               
               {/* ПОИСК + ТЕМА */}
               <div className="flex items-center gap-4 sm:gap-6">
                  {showSearch ? (
                    // Строка поиска (появляется при клике)
                    <form onSubmit={handleSearch} className="flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-300">
                      <input 
                        autoFocus
                        type="text" 
                        placeholder="Поиск по странице..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white px-3 py-1.5 rounded-md text-sm outline-none border border-transparent focus:border-[#ff8c00] w-[150px] sm:w-[200px]"
                      />
                      <button type="submit" className="text-[#ff8c00] hover:scale-110 transition-transform">
                        <Search className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={() => setShowSearch(false)} className="text-gray-400 hover:text-red-500">
                        <X className="w-4 h-4" />
                      </button>
                    </form>
                  ) : (
                    // Кнопка поиска
                    <button 
                      onClick={() => setShowSearch(true)}
                      className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#ff8c00] transition-colors text-sm font-medium group"
                    >
                       <div className="p-2 rounded-full group-hover:bg-[#ff8c00]/10 transition-colors">
                          <Search className="w-4 h-4" />
                       </div>
                       <span className="hidden lg:inline">Поиск</span>
                    </button>
                  )}
                  
                  <div className="h-4 w-[1px] bg-gray-300 dark:bg-zinc-700 hidden lg:block" />
                  <ThemeToggle />
               </div>

               {/* ТЕЛЕФОН + CTA */}
               <div className="flex items-center gap-4 sm:gap-8">
                  <a href="tel:+77761346303" className="hidden lg:flex items-center gap-2 text-gray-900 dark:text-white hover:text-[#ff8c00] transition-colors font-bold text-sm">
                    <Phone className="w-4 h-4 text-[#ff8c00]" />
                    +7 (776) 134 63 03
                  </a>
                  
                  <button 
                    onClick={() => open("request")}
                    className="bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold py-2.5 px-6 rounded text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Заказать расчет
                  </button>

                  <button className="xl:hidden text-gray-900 dark:text-white">
                    <Menu className="w-6 h-6" />
                  </button>
               </div>
            </div>
        </div>

        {/* === НИЖНИЙ ЭТАЖ (Меню) === */}
        <div className="hidden xl:flex items-center justify-center h-12 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm border-t border-gray-100 dark:border-white/5">
           <nav>
             <ul className="flex items-center gap-12">
               {navLinks.map((link) => {
                 const isActive = pathname === link.href;
                 return (
                   <li key={link.href}>
                     <Link
                       href={link.href}
                       className={cn(
                         // БАЗА: Шрифт, размер, позиционирование
                         "text-xs font-extrabold uppercase tracking-[0.15em] py-3 block relative group",
                         "transition-all duration-300 ease-out",
                         
                         isActive 
                           // АКТИВНАЯ: Оранжевый + Яркое свечение + Полоска
                           ? "text-[#ff8c00] drop-shadow-[0_0_15px_rgba(255,140,0,0.8)] scale-105" 
                           
                           // ОБЫЧНАЯ: Серый -> Белый при наведении (в темной)
                           : "text-gray-600 dark:text-gray-400 hover:text-[#ff8c00] dark:hover:text-[#ff8c00] hover:drop-shadow-[0_0_12px_rgba(255,140,0,0.6)] hover:scale-105"
                       )}
                     >
                       {link.label}
                       
                       {/* Подчеркивание при наведении */}
                       <span className={cn(
                         "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#ff8c00] transition-all duration-300",
                         isActive ? "w-full" : "w-0 group-hover:w-full"
                       )} />
                     </Link>
                   </li>
                 );
               })}
             </ul>
           </nav>
        </div>
      
      </div>
    </header>
  );
}