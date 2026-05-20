import Image from "next/image";
import { Button } from "@/components/ui/Button";

const COURSES = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  tag: "Development",
  title: "Frontend Development with JavaScript",
  author: "By Cristian Muñoz",
  duration: "7 weeks",
  price: "$80.00 USD",
  discount: "80% discount",
  cta: "Buy now $14.00 USD",
  image: "/courses/thumb.png",
}));

export function PopularCourses() {
  return (
    <section
      id="courses"
      className="px-md py-xxl md:px-xl md:py-xhuge"
      aria-label="Popular courses"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-xl">
        <h2 className="text-h1 text-text-primary">Popular courses</h2>

        <div className="grid w-full gap-lg sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c) => (
            <article
              key={c.id}
              className="bg-surface border border-border flex flex-col gap-lg rounded-lg p-md"
            >
              <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute left-md top-md inline-flex items-center rounded-md bg-primary px-md py-xs text-base-strong text-on-primary">
                  {c.tag}
                </span>
              </div>

              <div className="flex flex-col gap-xs">
                <h3 className="text-h3 text-text-primary">{c.title}</h3>
                <p className="text-base-normal text-text-muted">{c.author}</p>
              </div>

              <div className="flex items-center gap-xs">
                <Image src="/icons/timer.svg" alt="" width={17} height={17} aria-hidden="true" className="brightness-200" />
                <p className="text-base-normal text-text-primary">
                  <span className="font-medium">Duration: </span>
                  {c.duration}
                </p>
              </div>

              <div className="flex flex-col gap-xs">
                <p className="text-base-normal text-text-muted">
                  <span className="mr-xs">{c.price}</span>
                  <span>{c.discount}</span>
                </p>
                <Button variant="primary" size="md" className="w-full">
                  {c.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
