import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

export function PageHero({
  eyebrow,
  title,
  children,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-brand-50/60 to-mint-50/60">
      <div className="pointer-events-none absolute -top-32 -left-24 size-[28rem] rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-40 size-[30rem] rounded-full bg-mint-300/25 blur-3xl" />

      <div
        className={`container-page relative grid items-center gap-10 ${
          image ? "pt-14 lg:grid-cols-[1.15fr_1fr] lg:pt-10" : "py-20 sm:py-28"
        }`}
      >
        <div className={image ? "lg:py-16" : "max-w-3xl"}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
          {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">{children}</div>}
        </div>

        {image && (
          <div className="relative mx-auto w-full max-w-md self-end">
            <div className="bg-brand-gradient absolute inset-x-6 top-16 bottom-0 rounded-t-[10rem] opacity-90" />
            <div className="absolute inset-x-6 top-16 bottom-0 rounded-t-[10rem] bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.35),transparent_60%)]" />
            <Image src={image} alt={imageAlt} priority className="relative h-auto w-full" sizes="(min-width: 1024px) 28rem, 90vw" />
          </div>
        )}
      </div>
    </section>
  );
}
