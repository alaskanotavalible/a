"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { FileText, Image as ImageIcon, Download } from "lucide-react";

const certs = [
  {
    id: 1,
    title: "Индустриальный сертификат",
    type: "image",
    src: "/certs/1.jpg" // Убедись, что файл лежит в public/certs/
  },
  {
    id: 2,
    title: "Сертификат соответствия",
    type: "image",
    src: "/certs/2.jpg" // Убедись, что файл лежит в public/certs/
  },
  {
    id: 3,
    title: "Протокол испытаний НИТИ", // PDF
    type: "pdf",
    src: "/protocol.pdf" // ВАЖНО: Закинь файл protocol.pdf в папку public
  },
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    // ФОН: Белый (день) / Черный (ночь)
    <section className="py-20 bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <Container>
        <div className="mb-12 text-center md:text-left">
          <span className="text-[#ff8c00] font-bold uppercase tracking-widest text-xs mb-2 block">
            Документация
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Сертификаты и протоколы
          </h2>
        </div>

        {/* Сетка на 3 элемента */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              onClick={() => {
                if (cert.type === "image") {
                  setSelectedImg(cert.src);
                } else {
                  // Если PDF — открываем в новой вкладке
                  window.open(cert.src, "_blank");
                }
              }}
              className="group cursor-pointer"
            >
              <div className="h-full min-h-[200px] rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 flex flex-col items-center justify-center p-6 text-center transition-all hover:border-[#ff8c00]/50 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                
                {/* Иконка */}
                <div className={`mb-4 w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
                    cert.type === 'pdf' 
                      ? 'bg-red-500/10 text-red-500 group-hover:bg-red-500/20' 
                      : 'bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 group-hover:bg-[#ff8c00]/10 group-hover:text-[#ff8c00]'
                }`}>
                  {cert.type === 'pdf' ? <FileText className="w-8 h-8" /> : <ImageIcon className="w-8 h-8" />}
                </div>

                <p className="text-sm font-bold uppercase text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white leading-tight transition-colors">
                  {cert.title}
                </p>
                
                {/* Если PDF, добавим метку */}
                {cert.type === "pdf" && (
                   <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                     PDF <Download className="w-3 h-3" />
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* МОДАЛКА (LIGHTBOX) - Только для картинок */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
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
            <img
              src={selectedImg}
              alt="Сертификат"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10 bg-white"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/600x800?text=Нет+изображения";
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}