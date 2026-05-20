"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Couses", href: "#courses" },
  { label: "FAQ", href: "#faq" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/menu.svg" alt="" width={28} height={28} aria-hidden="true" />
      </button>

      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col gap-xl bg-background px-md pt-xxl pb-xl",
          !open && "pointer-events-none",
        )}
      >
        <nav className="flex flex-col gap-md">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-text-heading text-h3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button variant="primary" size="lg" onClick={() => setOpen(false)}>
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </>
  );
}
