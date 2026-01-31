"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useModal } from "./ModalProvider";
import { Button } from "./ui";
import { cn } from "@/lib/utils";

function Input({
  label,
  placeholder,
  value,
  setValue,
  type = "text"
}: {
  label: string;
  placeholder: string;
  value: string;
  setValue: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-medium tracking-premium text-stone-600">
        {label}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-heat/60 focus:ring-2 focus:ring-heat/20"
      />
    </label>
  );
}

export function FormModal() {
  const { state, close } = useModal();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(false);

  const title = useMemo(() => {
    if (state.type === "call") return "Заказать звонок";
    if (state.type === "price") return "Скачать прайс";
    return "Запросить расчёт";
  }, [state.type]);

  const subtitle = useMemo(() => {
    if (state.type === "call")
      return "Перезвоним в рабочее время и ответим на вопросы.";
    if (state.type === "price")
      return "Прайс пока в режиме заглушки — но форма уже готова.";
    return "Подберём модель и мощность под ваш объект. Быстро и точно.";
  }, [state.type]);

  const productHint = state.payload?.productName
    ? `Интересует модель: ${state.payload.productName}`
    : "";

  function reset() {
    setName("");
    setPhone("");
    setCompany("");
    setMessage("");
    setOk(false);
  }

  function handleClose() {
    close();
    setTimeout(reset, 200);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setOk(true);
    setTimeout(() => {
      handleClose();
    }, 1100);
  }

  return (
    <AnimatePresence>
      {state.isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <button
            aria-label="Закрыть"
            onClick={handleClose}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-white shadow-premium"
          >
            <div className="flex items-start justify-between gap-4 border-b border-stone-100 px-6 py-5">
              <div>
                <div className="text-lg font-semibold tracking-premium text-ink">
                  {title}
                </div>
                <div className="mt-1 text-sm text-stone-600">{subtitle}</div>
              </div>

              <Button variant="ghost" onClick={handleClose}>
                Закрыть
              </Button>
            </div>

            <form onSubmit={submit} className="px-6 py-5">
              {productHint ? (
                <div className="mb-4 rounded-xl border border-heat/20 bg-heat/10 px-4 py-3 text-sm text-ink">
                  {productHint}
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Имя"
                  placeholder="Например, Алия"
                  value={name}
                  setValue={setName}
                />
                <Input
                  label="Телефон"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  setValue={setPhone}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Input
                  label="Компания (если B2B)"
                  placeholder="ТОО / ИП / Проект"
                  value={company}
                  setValue={setCompany}
                />
                <Input
                  label={state.type === "price" ? "Email" : "Город"}
                  placeholder={state.type === "price" ? "you@mail.com" : "Астана"}
                  value={message}
                  setValue={setMessage}
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs leading-relaxed text-stone-500">
                  Нажимая “Отправить”, вы соглашаетесь на обработку заявки.{" "}
                  <span className="text-stone-400">
                    Данные не отправляются — демо-логика.
                  </span>
                </div>

                <Button type="submit" className="sm:min-w-[180px]">
                  Отправить
                </Button>
              </div>

              <div
                className={cn(
                  "mt-4 rounded-xl border px-4 py-3 text-sm transition",
                  ok
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-transparent bg-transparent text-transparent"
                )}
              >
                ✅ Заявка отправлена
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
