"use client";

import { useState } from "react";
import { Container } from "@/components/ui";

const certs = [
  { id: 1, title: "Сертификат соответствия", img: "/certs/1.jpg" },
  { id: 2, title: "Протокол испытаний", img: "/certs/2.jpg" },
  { id: 3, title: "Сертификат CT-KZ", img: "/certs/3.jpg" },
  { id: 4, title: "Декларация качества", img: "/certs/4.jpg" },
  { id: 5, title: "Экологический паспорт", img: "/certs/5.jpg" },
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background border-t border-border transition-colors duration-300">
      <Container>
        <div className="mb-12 text-center md:text-left">
          <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">Документация</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Сертификаты качества</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certs.map((cert) => (
            <div 
              key={cert.id} 
              onClick={() => setSelectedImg(cert.img)} 
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-2xl border border-border bg-card flex flex-col items-center justify-center p-4 text-center transition-all hover:border-heat/50 hover:shadow-xl hover:-translate-y-1">
                {/* Иконка документа, если картинка превью не нужна в сетке */}
                <div className="text-4xl mb-4 bg-secondary w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-heat/10 transition-colors">
                  📄
                </div>
                <p className="text-[11px] font-bold uppercase text-muted group-hover:text-foreground leading-tight">
                  {cert.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* MODAL LIGHTBOX */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          {/* Кнопка закрытия */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl transition-colors z-[210]"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>
          
          <div 
            className="relative w-full max-w-xl flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ограничиваем картинку: max-h-[80vh] чтобы не вылезала за экран сверху/снизу */}
            <img 
              src={selectedImg} 
              alt="Сертификат" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/600x800?text=Ошибка+загрузки";
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}