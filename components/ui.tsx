"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  onClick,
  type
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "outline" | "dark";
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium tracking-premium transition-all focus:outline-none focus:ring-2 focus:ring-heat/40";
  const styles = {
    primary:
      "bg-ink text-white hover:bg-ink/95 hover:shadow-soft active:translate-y-[1px]",
    dark:
      "bg-ink text-white hover:bg-ink/95 hover:shadow-soft active:translate-y-[1px]",
    ghost:
      "bg-transparent text-ink hover:bg-stone-100 active:translate-y-[1px]",
    outline:
      "border border-stone-200 bg-white text-ink hover:bg-stone-50 active:translate-y-[1px]"
  };

  return (
    <motion.button
      type={type ?? "button"}
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </motion.button>
  );
}

export function Pill({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-700",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-stone-100", className)} />;
}

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-stone-100 bg-white shadow-premium",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SubtleGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-heat/12 blur-3xl" />
      <div className="absolute -bottom-48 right-[-120px] h-[420px] w-[420px] rounded-full bg-ink/6 blur-3xl" />
    </div>
  );
}
