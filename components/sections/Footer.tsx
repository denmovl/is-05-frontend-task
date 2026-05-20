import Image from "next/image";
import { Logo } from "@/components/ui/Logo";

const SOCIAL = [
  { name: "Instagram", src: "/social/instagram.svg", href: "#instagram" },
  { name: "Figma", src: "/social/figma.svg", href: "#figma" },
  { name: "LinkedIn", src: "/social/linkedin.svg", href: "#linkedin" },
  { name: "Twitter", src: "/social/twitter.svg", href: "#twitter" },
  { name: "Telegram", src: "/social/telegram.svg", href: "#telegram" },
  { name: "Medium", src: "/social/medium.svg", href: "#medium" },
];

const COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Development", href: "#development" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "QA", href: "#qa" },
      { label: "Terms and conditions", href: "#terms" },
      { label: "Privacy policy", href: "#privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-md py-xxl md:px-xl md:py-xhuge">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-xxl md:flex-row md:justify-between">
        <div className="flex flex-col gap-xl">
          <Logo size="md" />
          <ul className="flex flex-wrap items-center gap-sm">
            {SOCIAL.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  aria-label={s.name}
                  className="border border-border inline-flex h-12 w-12 items-center justify-center rounded-md text-icon hover:border-icon transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <Image
                    src={s.src}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                    className="brightness-200"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-xl sm:flex-row sm:gap-xxl">
          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-lg">
              <p className="text-text-primary text-h3">{col.title}</p>
              <ul className="flex flex-col gap-md">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-text-primary text-[20px] leading-none hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
