"use client";

import { ModalProvider } from "@/components/ModalProvider";
import { FormModal } from "@/components/FormModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <FormModal />
    </ModalProvider>
  );
}
