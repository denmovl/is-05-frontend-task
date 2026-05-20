import Image from "next/image";

const FEATURES = [
  {
    icon: "/icons/clipboard.svg",
    title: "Explore topics",
    body: "Explore our selection of courses in development",
  },
  {
    icon: "/icons/people.svg",
    title: "Meet new friends",
    body: "Join the network with million of students and learn",
  },
  {
    icon: "/icons/people.svg",
    title: "Learn code",
    body: "Learn all about code and become in a developer",
  },
];

export function Features() {
  return (
    <section className="px-md py-xxl md:px-xl md:py-xhuge" aria-label="Features">
      <div className="mx-auto grid max-w-[1440px] gap-md md:grid-cols-3">
        {FEATURES.map((f) => (
          <article
            key={f.title}
            className="bg-black flex flex-col items-start gap-md rounded-lg p-xl md:p-xxl"
          >
            <span className="inline-flex items-center justify-center p-xs">
              <Image src={f.icon} alt="" width={28} height={28} aria-hidden="true" className="invert" />
            </span>
            <h2 className="text-h1 text-white">{f.title}</h2>
            <p className="text-white text-[18px] leading-[1.3] md:text-[24px] md:leading-[28px]">
              {f.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
