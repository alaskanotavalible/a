import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Включаем режим "class", чтобы next-themes мог переключать классы
  darkMode: "class",
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        // === НАШИ НОВЫЕ ДИНАМИЧЕСКИЕ ЦВЕТА ===
        // Они берут значения из globals.css (var(--...))
        
        heat: "var(--accent)",          // Оранжевый
        background: "var(--bg)",        // Фон страницы (Белый <-> Черный)
        foreground: "var(--text-main)", // Текст (Черный <-> Белый)
        muted: "var(--text-muted)",     // Серый текст
        
        card: "var(--card-bg)",         // Фон карточек
        header: "var(--header-bg)",     // Фон хедера
        border: "var(--muted-border)",  // Цвет границ

        // === СОВМЕСТИМОСТЬ (ЧТОБЫ НИЧЕГО НЕ СЛОМАЛОСЬ) ===
        // Мы перенаправляем старые названия на новые переменные
        paper: "var(--bg)",        // Раньше был черный, теперь динамический
        ink: "var(--text-main)",   // Раньше был белый, теперь динамический
        
        // Оставляем палитру stone для серых элементов, если где-то используется напрямую
        stone: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
        },
      },
      
      // Анимации оставляем как есть
      animation: {
        marquee: "marquee 25s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;