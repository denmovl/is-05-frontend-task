import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
};

export function Card({
  as: Tag = "div",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-surface rounded-lg border border-border p-lg",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
