import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/sections/MobileNav";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "Home", href: "#home", active: true },
  { label: "About us", href: "#about" },
  { label: "Couses", href: "#courses" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-md py-md md:px-xl md:py-lg lg:px-xhuge lg:py-xl">
        <a
          href="#main"
          className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Logo size="sm" />
        </a>

        <div className="hidden items-center gap-base md:flex">
          <nav aria-label="Primary" className="flex items-center gap-base">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={cn(
                  "p-xs text-[20px] leading-[28px] font-medium text-text-primary hover:text-primary transition-colors rounded-sm",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  item.active && "border-b-4 border-primary",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button variant="primary" size="md">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
