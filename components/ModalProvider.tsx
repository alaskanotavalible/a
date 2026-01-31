"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type ModalType = "call" | "request" | "price";

type ModalState = {
  isOpen: boolean;
  type: ModalType;
  payload?: {
    productName?: string;
  };
};

type ModalContextValue = {
  state: ModalState;
  open: (type: ModalType, payload?: ModalState["payload"]) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ModalState>({
    isOpen: false,
    type: "request",
    payload: {}
  });

  const value = useMemo<ModalContextValue>(
    () => ({
      state,
      open: (type, payload) =>
        setState({ isOpen: true, type, payload: payload ?? {} }),
      close: () =>
        setState((prev) => ({ ...prev, isOpen: false, payload: {} }))
    }),
    [state]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
