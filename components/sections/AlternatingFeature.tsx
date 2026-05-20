import Image from "next/image";
import { cn } from "@/lib/cn";

export type AlternatingFeatureProps = {
  imageSide: "left" | "right";
  image: string;
  imageAlt: string;
  title: string;
  body: string;
};

export function AlternatingFeature({
  imageSide,
  image,
  imageAlt,
  title,
  body,
}: AlternatingFeatureProps) {
  return (
    <section className="px-md py-xxl md:px-xl md:py-xhuge">
      <div
        className={cn(
          "mx-auto grid max-w-[1440px] items-center gap-xl md:grid-cols-2 md:gap-xxl",
        )}
      >
        <div
          className={cn(
            "relative aspect-square w-full max-w-[500px] mx-auto",
            imageSide === "right" && "md:order-2",
          )}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-md">
          <h2 className="text-text-primary text-[36px] leading-none md:text-[48px]">
            {title}
          </h2>
          <p className="text-text-muted text-[20px] leading-[1.3] md:text-[30px]">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
