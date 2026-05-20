import Image from "next/image";
import { cn } from "@/lib/cn";

export type LogoProps = {
  className?: string;
  size?: "sm" | "md";
  label?: string;
};

const sizes = {
  sm: { mark: 28, text: "text-h5" },
  md: { mark: 36, text: "text-h3" },
} as const;

export function Logo({ className, size = "md", label = "tian" }: LogoProps) {
  const s = sizes[size];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-xs text-text-heading",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={s.mark}
        height={s.mark}
        priority
        aria-hidden="true"
      />
      <span
        className={cn(
          "font-sans font-semibold tracking-tight leading-none",
          s.text,
        )}
        aria-hidden="true"
      >
        tian
      </span>
    </span>
  );
}
