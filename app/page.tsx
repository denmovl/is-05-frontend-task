import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { PopularCourses } from "@/components/sections/PopularCourses";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { AlternatingFeature } from "@/components/sections/AlternatingFeature";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/Reveal";

const ALTERNATING = [
  {
    imageSide: "left" as const,
    image: "/illustrations/computer.png",
    imageAlt: "Retro computer with a course curriculum on screen",
    title: "Explore topics",
    body: "Dive deep into our diverse catalog featuring a curated selection of courses in the realms of arts and writing. Experience knowledge crafted by experts, designed to inspire and nurture your creative journey.",
  },
  {
    imageSide: "right" as const,
    image: "/illustrations/community.png",
    imageAlt: "Diverse community of learners",
    title: "Meet new Friends",
    body: "Connect with our expansive network, match with like-minded peers, and learn code together",
  },
  {
    imageSide: "left" as const,
    image: "/illustrations/chat.png",
    imageAlt: "Group chat between learners",
    title: "Find",
    body: "Connect with people around the world in a huge community with million of students",
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-md focus:left-md focus:z-50 focus:bg-primary focus:text-on-primary focus:px-md focus:py-sm focus:rounded-md text-lg-strong"
      >
        Skip to content
      </a>

      <Header />
      <main id="main" className="flex flex-col">
        <Reveal variant="fade">
          <Hero />
        </Reveal>

        <Reveal variant="fade-up">
          <Features />
        </Reveal>

        <Reveal variant="fade-up" delay={80}>
          <PopularCourses />
        </Reveal>

        <Reveal variant="zoom">
          <PromoBanner />
        </Reveal>

        {ALTERNATING.map((p, i) => (
          <Reveal
            key={p.title}
            variant={p.imageSide === "left" ? "slide-right" : "slide-left"}
            delay={i * 60}
          >
            <AlternatingFeature {...p} />
          </Reveal>
        ))}
      </main>

      <Reveal variant="fade-up">
        <Footer />
      </Reveal>
    </>
  );
}
