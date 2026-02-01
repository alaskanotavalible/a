"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Button } from "@/components/ui";

type ModalType = "request" | "call" | "price" | null;

interface ModalContextType {
  open: (type: ModalType, data?: any) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<ModalType>(null);
  const [data, setData] = useState<any>(null);

  const open = (modalType: ModalType, modalData?: any) => {
    setType(modalType);
    setData(modalData);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setType(null);
      setData(null);
      document.body.style.overflow = "unset";
    }, 300);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}

      {/* Оверлей (всегда темный, так красивее) */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      >
        {/* Окно (Адаптивное: bg-card) */}
        <div
          className={`relative w-full max-w-lg transform rounded-3xl border border-border bg-card p-8 shadow-2xl transition-all duration-300 ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 rounded-full p-2 text-muted hover:bg-secondary hover:text-foreground transition-colors"
          >
            ✕
          </button>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground">
              {type === "price" && "Скачать прайс-лист"}
              {type === "call" && "Заказать звонок"}
              {type === "request" && "Оставить заявку"}
            </h3>
            <p className="mt-2 text-sm text-muted">
              {type === "request" && "Подберём модель и мощность под ваш объект."}
              {type === "call" && "Менеджер перезвонит вам в течение 15 минут."}
              {type === "price" && "Оставьте контакты, мы вышлем актуальный прайс."}
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted uppercase tracking-wide">
                Ваше имя
              </label>
              <input
                type="text"
                placeholder="Имя"
                className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted focus:border-heat focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted uppercase tracking-wide">
                Телефон
              </label>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted focus:border-heat focus:outline-none transition-all"
              />
            </div>
            
            {data?.productName && (
                <div className="rounded-lg bg-heat/10 border border-heat/20 p-3 text-xs text-heat">
                    📎 {data.productName}
                </div>
            )}

            <Button className="mt-2 w-full bg-heat text-white hover:bg-orange-600 border-0 font-bold py-4 shadow-lg">
              {type === "price" ? "Получить файл" : "Отправить"}
            </Button>
          </form>
        </div>
      </div>
    </ModalContext.Provider>
  );
}
