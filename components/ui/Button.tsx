import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center rounded-md font-sans transition-colors " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary/90",
  secondary:
    "bg-transparent text-text-primary border border-border hover:border-icon",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-[44px] min-w-[44px] px-lg py-sm text-lg-strong",
  lg: "h-[52px] min-w-[52px] px-xl py-md text-lg-strong",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;
  return (
    <button
      type={type}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        "relative",
        className,
      )}
      aria-busy={loading || undefined}
      disabled={isDisabled}
      {...rest}
    >
      <span className={cn(loading && "invisible")}>{children}</span>
      {loading && (
        <span
          className="absolute inset-0 inline-flex items-center justify-center"
          aria-hidden="true"
        >
          <Spinner />
        </span>
      )}
    </button>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" className="opacity-25" />
      <path d="M21 12a9 9 0 0 1-9 9" className="opacity-75" />
    </svg>
  );
}
