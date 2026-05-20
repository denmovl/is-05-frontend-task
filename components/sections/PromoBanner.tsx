import Image from "next/image";

export function PromoBanner() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Student testimonial"
    >
      <Image
        src="/promo-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-10"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-xl px-md py-xxl text-center md:px-xl md:py-xhuge">
        <p className="text-white text-h1 md:text-[48px]">Emily Rolando</p>
        <blockquote className="text-white text-[22px] leading-[1.3] md:text-[38px] md:leading-[1.2]">
          I recently started learning to code with Tian and it&apos;s been a
          game-changer. The lessons are clear and engaging, perfect for
          beginners like me. I&apos;ve already built my first app thanks to
          their hands-on approach. Highly recommend Tian for anyone starting
          their coding journey!
        </blockquote>
      </div>
    </section>
  );
}
