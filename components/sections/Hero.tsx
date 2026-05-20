import { Button } from "@/components/ui/Button";
import { RatingChip } from "@/components/ui/RatingChip";
import { Avatar } from "@/components/ui/Avatar";

const AVATARS = [
  { src: "/avatars/avatar-0.png", alt: "Community member", pos: "top-[8%] left-[46%]" },
  { src: "/avatars/avatar-1.png", alt: "Community member", pos: "top-[28%] right-[9%]" },
  { src: "/avatars/avatar-2.png", alt: "Community member", pos: "top-[37%] left-[10%]" },
  { src: "/avatars/avatar-3.png", alt: "Community member", pos: "top-[62%] right-[23%]" },
  { src: "/avatars/avatar-4.png", alt: "Community member", pos: "top-[49%] right-[2%]" },
  { src: "/avatars/avatar-5.png", alt: "Community member", pos: "top-[72%] left-[4%]" },
  { src: "/avatars/avatar-6.png", alt: "Community member", pos: "top-[86%] left-[44%]" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-md py-xxl md:px-xl md:py-xhuge">
      <Rings />

      <div className="relative z-10 mx-auto flex max-w-[820px] flex-col items-center gap-xl text-center">
        <RatingChip value="4.8" />

        <h1 className="text-display text-text-heading text-balance max-w-[800px] text-[40px] leading-[1.1] md:text-[64px] lg:text-[80px]">
          Where the joy of learn meets the power of community
        </h1>

        <p className="text-text-muted text-balance max-w-[720px] text-[18px] leading-[1.3] md:text-[24px]">
          Dive deep in immersive, interactive small groups. Expand horizons,
          engage in discussions, and elevate your learning journey with us.
        </p>

        <div className="flex flex-col items-center gap-sm">
          <Button variant="primary" size="lg">
            <a href="#signup">Start your travel</a>
          </Button>
          <Button variant="secondary" size="lg" className="border-0 bg-background text-primary hover:bg-surface gap-xs">
            <a href="#video" className="inline-flex items-center gap-xs">
              Watch video
              <span aria-hidden="true">→</span>
            </a>
          </Button>
        </div>

        <p className="absolute left-[6%] top-[68%] hidden text-[64px] md:block" aria-hidden="true">🧠</p>
        <p className="absolute right-[6%] top-[82%] hidden text-[64px] md:block" aria-hidden="true">🙈</p>
      </div>

      <div className="absolute inset-0 z-0 hidden md:block" aria-hidden="true">
        {AVATARS.map((a, i) => (
          <span key={a.src} className={`absolute ${a.pos}`}>
            <Avatar src={a.src} alt={a.alt} size={i % 2 ? 64 : 80} />
          </span>
        ))}
      </div>

      <ul className="relative z-10 mx-auto mt-xl flex max-w-[420px] flex-wrap justify-center gap-sm md:hidden">
        {AVATARS.map((a) => (
          <li key={a.src}>
            <Avatar src={a.src} alt={a.alt} size={48} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Rings() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-30"
      viewBox="0 0 1000 1000"
      fill="none"
    >
      <circle cx="500" cy="500" r="380" stroke="var(--color-border)" strokeWidth="1" />
      <circle cx="500" cy="500" r="280" stroke="var(--color-border)" strokeWidth="1" />
      <circle cx="500" cy="500" r="180" stroke="var(--color-border)" strokeWidth="1" />
    </svg>
  );
}
