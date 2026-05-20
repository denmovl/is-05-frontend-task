"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealVariant = "fade-up" | "fade" | "zoom" | "slide-left" | "slide-right";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  /** Re-trigger when the element scrolls out and back in. Defaults to false. */
  repeat?: boolean;
};

const HIDDEN: Record<RevealVariant, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "fade": "opacity-0",
  "zoom": "opacity-0 scale-95",
  "slide-left": "opacity-0 -translate-x-8",
  "slide-right": "opacity-0 translate-x-8",
};

const SHOWN = "opacity-100 translate-y-0 translate-x-0 scale-100";

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) obs.disconnect();
          } else if (repeat) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        visible ? SHOWN : HIDDEN[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
