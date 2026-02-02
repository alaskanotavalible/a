"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// === УТИЛИТА CN ===
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// === BUTTON (КНОПКА) ===
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#ff8c00] text-white hover:bg-[#e07b00] hover:shadow-lg shadow-orange-500/20 border-0",
        primary: "bg-[#ff8c00] text-white hover:bg-[#e07b00] hover:shadow-lg shadow-orange-500/20 border-0",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground text-foreground",
        dark: "bg-foreground text-background hover:bg-foreground/90",
        hero: "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : motion.button) as any;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// === CONTAINER ===
const Container = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};

// === CARD (Вернули компонент) ===
const Card = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// === PILL (Вернули компонент) ===
const Pill = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

// === DIVIDER (Вернули компонент) ===
const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("h-px w-full bg-border", className)} />;
};

// Экспортируем всё вместе
export { Button, buttonVariants, Container, Card, Pill, Divider };