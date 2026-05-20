import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type IconBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  label?: string;
};

export function IconBadge({
  children,
  label,
  className,
  ...rest
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary",
        className,
      )}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...rest}
    >
      {children}
    </span>
  );
}
