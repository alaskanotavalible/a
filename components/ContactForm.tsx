"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { Send } from "lucide-react";

export default function ContactForm({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 1. Номер менеджера (без плюсов и скобок)
    const whatsappNumber = "77761346303"; 

    // 2. Формируем текст сообщения
    const text = `
👋 *Новая заявка с сайта Tengri Thermo!*
    
👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📄 *Цель:* Консультация / Расчет стоимости
    `.trim();

    // 3. Создаем ссылку
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // 4. Открываем WhatsApp в новой вкладке
    window.open(url, "_blank");

    // Сброс формы
    setIsLoading(false);
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      
      {/* Поле Имя */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground ml-1">Ваше имя</label>
        <input
          required
          type="text"
          placeholder="Алиаскар"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#ff8c00] transition-colors"
        />
      </div>

      {/* Поле Телефон */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground ml-1">Номер телефона</label>
        <input
          required
          type="tel"
          placeholder="+7 (777) 000-00-00"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[#ff8c00] transition-colors"
        />
      </div>

      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-[#ff8c00] hover:bg-[#e07b00] text-white font-bold py-6 rounded-xl text-lg shadow-lg shadow-orange-500/20 mt-2"
      >
        {isLoading ? "Открываем WhatsApp..." : (
          <span className="flex items-center gap-2">
            Отправить в WhatsApp <Send className="w-5 h-5" />
          </span>
        )}
      </Button>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}