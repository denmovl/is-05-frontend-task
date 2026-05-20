import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type RatingChipProps = HTMLAttributes<HTMLSpanElement> & {
  value: number | string;
  label?: string;
};

export function RatingChip({
  value,
  label,
  className,
  ...rest
}: RatingChipProps) {
  const accessibleLabel = label ?? `Rated ${value} out of 5`;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-xxxs rounded-full bg-warning text-black px-sm py-half text-base-strong",
        className,
      )}
      role="img"
      aria-label={accessibleLabel}
      {...rest}
    >
      <span aria-hidden="true">★</span>
      <span aria-hidden="true">{value}</span>
    </span>
  );
}
