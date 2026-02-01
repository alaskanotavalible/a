"use client";

import { ThemeProvider } from "next-themes";
import ModalProvider from "@/components/ModalProvider"; // Проверь, чтобы файл назывался именно так

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
    >
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  );
}