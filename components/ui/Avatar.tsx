import Image from "next/image";
import { cn } from "@/lib/cn";

export type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export function Avatar({ src, alt, size = 40, className }: AvatarProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border-2 border-background overflow-hidden align-middle",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
