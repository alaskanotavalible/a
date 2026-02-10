"use client";

import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Center, useGLTF, Environment } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import * as THREE from "three";

// ⚙️ НАСТРОЙКИ (подгоним под твою модель)
const SECTION_WIDTH = 8; // Расстояние между секциями. Если есть щели — уменьши, если наезжают — увеличь.
const MODEL_SCALE = 1;     // Если модель огромная или мизерная, меняй это число (например 0.1 или 10).

interface Radiator3DProps {
  sections: number;
  heightMm: number;
  depthMm: number;
  color: string;
}

function RealSection({ color, position }: { color: string, position: [number, number, number] }) {
    const { scene } = useGLTF("/models/section.glb");
    const clonedScene = useMemo(() => scene.clone(), [scene]);

  const hexColor = useMemo(() => {
    switch (color) {
      case "Черный": return "#252525"; // Темно-серый для реализма
      case "Серебро": return "#A0A0A0";
      default: return "#FFFFFF";
    }
  }, [color]);

  // Применяем материалы (Металл + Цвет)
  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        // Делаем материал реалистичным
        if (mesh.material) {
            const m = mesh.material as THREE.MeshStandardMaterial;
            m.color.set(hexColor);
            m.metalness = 0.6; // Насколько это металл (0-1)
            m.roughness = 0.4; // Матовость (0 - зеркало, 1 - резина)
            m.needsUpdate = true;
        }
      }
    });
  }, [clonedScene, hexColor]);

  // position - это сдвиг, scale - размер, rotation - поворот (если лежит на боку)
  return (
    <primitive 
      object={clonedScene} 
      position={position} 
      scale={[MODEL_SCALE, MODEL_SCALE, MODEL_SCALE]}
      // 👇 ДОБАВЛЯЕМ ВОТ ЭТУ СТРОКУ:
      rotation={[0, Math.PI / 2, 0]} 
    />
  );
}

export default function Radiator3D({ sections, color }: Radiator3DProps) {
  const sectionsArray = Array.from({ length: sections }, (_, i) => i);

  return (
    <div className="w-full h-[400px] rounded-3xl overflow-hidden cursor-move touch-none bg-gradient-to-b from-gray-50 to-gray-200">
      <Canvas 
   shadows 
   dpr={[1, 2]} 
   // Было [4, 2, 8], ставим [4, 2, 15] — камера отъедет назад
   camera={{ position: [40, 20, 150], fov: 35 }} 
>
        
        {/* Реалистичное освещение студии */}
        <Environment preset="city" />

        <Stage intensity={0.5} environment="city" adjustCamera={false} shadows="contact">
          <Center top>
            <group>
              {sectionsArray.map((i) => (
                <RealSection 
                  key={i} 
                  color={color} 
                  // Сдвигаем каждую секцию по оси X
                  position={[i * SECTION_WIDTH, 0, 0]} 
                />
              ))}
            </group>
          </Center>
        </Stage>
        
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.8} />
      </Canvas>
    </div>
  );
}

// Предзагрузка, чтобы не ждать при смене цвета
useGLTF.preload("/models/section.glb");