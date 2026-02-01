import Link from "next/link";
import { Container, Button } from "@/components/ui";

const links = [
  { label: "Каталог", href: "/catalog" },
  { label: "О компании", href: "/about" },
  { label: "Для дилеров", href: "/dealers" },
  { label: "Контакты", href: "/contacts" }
];

export default function Footer() {
  return (
    // bg-background, border-border, text-muted
    <footer className="border-t border-border bg-background py-12 sm:py-16 transition-colors duration-300">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Логотип и описание */}
          <div>
            <div className="text-lg font-bold tracking-widest text-foreground uppercase">
              Tengri Thermo
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Надёжные биметаллические радиаторы для квартир, домов и проектов в Казахстане.
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
                  <Link href={link.href} className="text-muted hover:text-heat transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Контакты и Инстаграм */}
          <div>
            <div className="text-sm font-bold tracking-widest text-muted uppercase">
              Контакты
            </div>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              <li>
                <a href="tel:+77172677711" className="hover:text-foreground transition-colors">
                   +7 (7172) 677 711
                </a>
              </li>
              <li>info@tengri-thermo.kz</li>
              <li>Астана, Казахстан</li>
            </ul>

            {/* INSTAGRAM */}
            <div className="mt-6">
               <a 
                 href="https://www.instagram.com/tengrithermo_official/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-muted hover:text-[#E1306C] transition-colors group"
               >
                   <div className="p-2 rounded-full bg-secondary border border-border group-hover:border-[#E1306C]/50 transition-colors">
                     <svg 
                       xmlns="http://www.w3.org/2000/svg" 
                       width="18" 
                       height="18" 
                       viewBox="0 0 24 24" 
                       fill="none" 
                       stroke="currentColor" 
                       strokeWidth="2" 
                       strokeLinecap="round" 
                       strokeLinejoin="round"
                     >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                     </svg>
                   </div>
                   <span className="text-sm font-medium">Мы в Instagram</span>
               </a>
            </div>
          </div>

          {/* 4. Кнопка */}
          <div>
             <Link href="/contacts">
              <Button className="w-full bg-heat text-white hover:bg-orange-600 border-0 font-bold shadow-lg">
                Оставить заявку
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-xs text-muted flex flex-col sm:flex-row justify-between gap-4">
          <div>© 2026 Tengri Thermo. Все права защищены.</div>
          <div>Сделано в Казахстане 🇰🇿</div>
        </div>
      </Container>
    </footer>
  );
}