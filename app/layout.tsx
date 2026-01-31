import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tengri-thermo.example"),
  title: {
    default: "Tengri Thermo — Биметаллические радиаторы премиум-класса",
    template: "%s — Tengri Thermo"
  },
  description:
    "Надёжные и стильные биметаллические радиаторы для квартир, домов и проектов в Казахстане. Подбор модели и расчёт мощности под ваш объект.",
  openGraph: {
    title: "Tengri Thermo",
    description:
      "Премиальные биметаллические радиаторы для Казахстана. Каталог, характеристики, расчёт и заявки.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-paper">
        <Providers>
          <Header />
          <main className="pt-[76px]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
