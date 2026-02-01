"use client";

import { Button } from "@/components/ui";
import { useModal } from "@/components/ModalProvider";

export default function ProductCTAClient({ productName }: { productName: string }) {
  const { open } = useModal();

  return (
    <Button
      className="w-full !bg-heat !text-white hover:!bg-orange-600 font-bold py-6 text-base shadow-[0_0_20px_rgba(255,140,0,0.3)] transition-transform hover:scale-[1.02]"
      onClick={() => open("request", { productName })}
    >
      Запросить расчёт
    </Button>
  );
}