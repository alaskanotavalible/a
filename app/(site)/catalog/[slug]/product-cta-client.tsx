"use client";

import { Button } from "@/components/ui";
import { useModal } from "@/components/ModalProvider";

export default function ProductCTAClient({ productName }: { productName: string }) {
  const { open } = useModal();

  return (
    <Button
      className="w-full"
      onClick={() => open("request", { productName })}
    >
      Запросить расчёт
    </Button>
  );
}
