"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      // stopPropagation чтобы клик не уходил никуда выше
      onClick={(e) => {
        e.stopPropagation();
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary hover:bg-muted transition-colors cursor-pointer"
      title={theme === "dark" ? "Включить свет" : "Выключить свет"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}