import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const links = [
  { label: "Конфигуратор", href: "/catalog" },
  { label: "О компании", href: "/about" },
  { label: "Для дилеров", href: "/dealers" },
  { label: "Контакты", href: "/contacts" },
  { label: "Где купить", href: "/where-to-buy" }
  
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 sm:py-16 transition-colors duration-300">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Логотип и описание */}
          <div>
            <div className="text-lg font-bold tracking-widest text-foreground uppercase flex items-center gap-2">
              Tengri Thermo
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Первый завод полного цикла в Казахстане. 
              Надёжные биметаллические радиаторы для сурового климата.
            </p>
          </div>

          {/* 2. Навигация */}
          <div>
            <div className="text-sm font-bold tracking-widest text-muted uppercase">
              Навигация
            </div>
            <ul className="mt-4 grid gap-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground hover:text-[#ff8c00] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Контакты (Новые данные) */}
          <div>
            <div className="text-sm font-bold tracking-widest text-muted uppercase">
              Контакты
            </div>
            <ul className="mt-4 grid gap-4 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#ff8c00] mt-0.5" />
                <a href="tel:+77761346303" className="hover:text-[#ff8c00] transition-colors font-medium">
                   +7 (776) 134 63 03
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#ff8c00] mt-0.5" />
                <a href="mailto:cnn_pavlodar@mail.ru" className="hover:text-[#ff8c00] transition-colors">
                  cnn_pavlodar@mail.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#ff8c00] mt-0.5" />
                <span>
                  г. Павлодар,<br /> Северная промзона, 52
                </span>
              </li>
            </ul>

            {/* INSTAGRAM (Новая ссылка) */}
            <div className="mt-6">
               <a 
                 href="https://www.instagram.com/_triumphthermo_" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-muted hover:text-[#E1306C] transition-colors group"
               >
                   <div className="p-2 rounded-full bg-secondary border border-border group-hover:border-[#E1306C]/50 transition-colors">
                     <Instagram className="w-4 h-4" />
                   </div>
                   <span className="text-sm font-medium group-hover:text-foreground">Мы в Instagram</span>
               </a>
            </div>
          </div>

          {/* 4. Кнопка (Исправленная) */}
          <div>
             <Link href="/contacts">
              {/* Жестко задаем оранжевый цвет bg-[#ff8c00], чтобы не зависеть от переменных темы */}
              <Button className="w-full bg-[#ff8c00] text-white hover:bg-[#e07b00] border-0 font-bold shadow-lg py-6">
                Оставить заявку
              </Button>
            </Link>
            <p className="mt-4 text-xs text-muted leading-relaxed">
              Отвечаем в WhatsApp и по телефону в рабочее время.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-xs text-muted flex flex-col sm:flex-row justify-between gap-4">
          <div>© 2026 Tengri Thermo. Все права защищены.</div>
          <div className="flex items-center gap-2">
            Сделано в Казахстане 
            <span className="text-base">🇰🇿</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}