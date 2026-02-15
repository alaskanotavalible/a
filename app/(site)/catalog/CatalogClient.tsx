"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, ContactShadows, useGLTF, PerspectiveCamera, Clone } from "@react-three/drei";
import { Container, Button } from "@/components/ui"; 
import { useModal } from "@/components/ModalProvider";

// Компонент 3D модели
function RadiatorModel({ color, height, depth, sections }: { color: string; height: number; depth: number; sections: number }) {
  // Грузим одну секцию
  const { scene } = useGLTF("/models/section.glb");
  
  useEffect(() => {
    // Красим базовую модель (все клоны автоматически получат этот цвет)
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material.color.set(color);
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene, color]);

  // Масштабирование (только высота и глубина)
  const scaleY = height / 500;
  const scaleZ = depth / 80; 
  
  // ВАЖНО: ШИРИНА СЕКЦИИ В 3D-КООРДИНАТАХ
  const SECTION_OFFSET = 8.0;

  // Высчитываем стартовую точку по оси X, чтобы радиатор всегда был строго по центру
  const startX = -((sections - 1) * SECTION_OFFSET) / 2;

  return (
    <group position={[0, -0.5, 0]}>
      {/* Размножаем секцию нужное количество раз */}
      {Array.from({ length: sections }).map((_, i) => (
        <Clone
          key={i}
          object={scene}
          position={[startX + i * SECTION_OFFSET, 0, 0]}
          // [X, Y, Z] в радианах. Math.PI / 2 — это ровно 90 градусов
          rotation={[0, Math.PI / 2, 0]} 
          scale={[1, scaleY, scaleZ]}
        />
      ))}
    </group>
  );
}

export default function CatalogClient() {
  const { open } = useModal();
  
  // === ПРОВЕРКА ГИДРАТАЦИИ ДЛЯ ИСКЛЮЧЕНИЯ ОШИБОК NEXT.JS ===
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [height, setHeight] = useState(500);
  const [depth, setDepth] = useState(80);
  const [sections, setSections] = useState(10);
  const [color, setColor] = useState("#ff8c00");

  const colors = [
    { name: "Белый (RAL 9016)", hex: "#ffffff" },
    { name: "Антрацит", hex: "#2d2d2d" },
    { name: "Серебро", hex: "#c0c0c0" },
    { name: "Глубокий черный", hex: "#0a0a0a" },
  ];

  const calculatePrice = () => {
    let pricePerSection = 4500;
    if (height === 500) pricePerSection += 1500;
    if (depth === 100) pricePerSection += 800;
    return (sections * pricePerSection).toLocaleString();
  };

  // Пока не загрузился браузер — отдаем пустую страницу нужного цвета
  if (!mounted) {
    return <section className="pt-32 pb-20 min-h-screen bg-background" />;
  }

  return (
    <section className="pt-32 pb-20 min-h-screen bg-background transition-colors duration-500">
      <Container>
        <div className="mb-10 text-center lg:text-left">
          <span className="text-heat font-bold uppercase tracking-[0.4em] text-xs mb-2 block">
            Инженерный подход
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-foreground leading-none uppercase italic">
            Собери свой <span className="text-heat">Thermo</span>
          </h1>
          <p className="text-muted mt-4 max-w-xl text-sm font-medium">
            Спроектируйте идеальный радиатор под ваш интерьер. Наша 3D-система визуализирует изменения в реальном времени.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
          
          {/* ЛЕВАЯ ЧАСТЬ: ИНТЕРАКТИВНОЕ 3D */}
          <div className="relative h-[500px] md:h-[650px] bg-zinc-200 dark:bg-zinc-800 rounded-[40px] border border-border shadow-2xl overflow-hidden group transition-colors duration-500">
            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[40, 20, 150]} fov={45} />
              <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6} adjustCamera={false}>
                  <RadiatorModel color={color} height={height} depth={depth} sections={sections} />
                </Stage>
                <OrbitControls 
                  enableZoom={true} 
                  enablePan={false}
                  minPolarAngle={Math.PI / 2.5} 
                  maxPolarAngle={Math.PI / 1.8}
                />
              </Suspense>
              {/* Тень */}
              <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={20} blur={2.5} far={4} />
            </Canvas>

            <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border">
              <div className="w-2 h-2 rounded-full bg-heat animate-pulse" />
              <span className="text-[10px] uppercase font-bold text-foreground tracking-widest">3D Render Live</span>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ПАНЕЛЬ УПРАВЛЕНИЯ */}
          <div className="space-y-6">
            <div className="p-8 rounded-[32px] bg-card border border-border shadow-lg space-y-8">
              
              <div className="space-y-4">
                <label className="text-foreground font-black uppercase text-[10px] tracking-widest opacity-60">Высота (ММ)</label>
                <div className="grid grid-cols-2 gap-2">
                  {[300, 500].map((h) => (
                    <button
                      key={h}
                      onClick={() => setHeight(h)}
                      className={`py-3 rounded-xl border-2 font-bold transition-all text-xs ${
                        height === h ? "border-heat bg-heat text-white shadow-md shadow-heat/20" : "border-border text-muted hover:border-heat/40 hover:text-foreground"
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-foreground font-black uppercase text-[10px] tracking-widest opacity-60">Количество секций</label>
                <div className="grid grid-cols-4 gap-2">
                  {[6, 8, 10, 12].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSections(s)}
                      className={`py-3 rounded-xl border-2 font-bold transition-all text-xs ${
                        sections === s ? "border-heat bg-heat text-white shadow-md shadow-heat/20" : "border-border text-muted hover:border-heat/40 hover:text-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-foreground font-black uppercase text-[10px] tracking-widest opacity-60">Глубина (ММ)</label>
                <div className="grid grid-cols-2 gap-2">
                  {[80, 100].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDepth(d)}
                      className={`py-3 rounded-xl border-2 font-bold transition-all text-xs flex flex-col items-center gap-1 ${
                        depth === d ? "border-heat bg-heat text-white shadow-md shadow-heat/20" : "border-border text-muted hover:border-heat/40 hover:text-foreground"
                      }`}
                    >
                      <span>{d}</span>
                      <span className="text-[9px] font-normal opacity-70">{d === 80 ? "Стандарт" : "Увеличенная"}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-foreground font-black uppercase text-[10px] tracking-widest opacity-60">Покрытие</label>
                  <span className="text-[10px] font-bold text-muted">{colors.find(c => c.hex === color)?.name}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => setColor(c.hex)}
                      className={`w-10 h-10 rounded-full border-2 transition-transform hover:scale-110 ${
                        color === c.hex ? "border-heat shadow-[0_0_15px_rgba(255,140,0,0.4)]" : "border-border shadow-sm"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-4">
                <div className="flex justify-between items-center text-foreground font-black uppercase tracking-tighter text-xl">
                </div>
                <Button 
                  onClick={() => open("request")}
                  className="w-full py-7 bg-heat hover:opacity-90 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-heat/20 transition-all hover:-translate-y-1 border-0"
                >
                  Рассчитать проект
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

useGLTF.preload("/models/section.glb");