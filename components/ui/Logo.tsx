import { cn } from "@/lib/cn";

export type LogoProps = {
  className?: string;
  label?: string;
};

// Placeholder wordmark. Replace body with the SVG extracted from the Figma
// footer Logo node (file FPM18t2oV8BwC8ztYfngcn, node 6:15657) once it lands
// in /public. Inherits currentColor so it works on any surface.
export function Logo({ className, label = "Rolando" }: LogoProps) {
  return (
    <span
      className={cn(
        "font-sans text-h5 tracking-tight text-current",
        className,
      )}
      role="img"
      aria-label={label}
    >
      Rolando
    </span>
  );
}
