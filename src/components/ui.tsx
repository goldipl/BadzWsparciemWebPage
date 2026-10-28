import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Tone = "white" | "tint" | "dark";

const toneClasses: Record<Tone, string> = {
  white: "bg-white",
  tint: "bg-linear-to-b from-sky-soft/70 to-brand-50/40",
  dark: "bg-ink-900 text-sky-100/75",
};

export function Section({
  id,
  tone = "white",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 sm:py-28 ${toneClasses[tone]} ${className}`}>
      <div className="container-page relative">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase ${
        dark ? "bg-white/10 text-mint-300 ring-1 ring-white/15" : "bg-brand-50 text-brand-700 ring-1 ring-brand-100"
      }`}
    >
      <span className={`size-1.5 rounded-full ${dark ? "bg-mint-300" : "bg-mint-500"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-5 text-3xl sm:text-4xl lg:text-5xl ${dark ? "text-white" : ""}`}>{title}</h2>
      {children && (
        <div className={`mt-5 text-lg leading-relaxed ${dark ? "text-sky-100/75" : "text-ink-600"}`}>{children}</div>
      )}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "light";

const buttonClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5",
  secondary: "bg-white text-ink-900 ring-1 ring-brand-100 hover:ring-brand-300 hover:-translate-y-0.5",
  light: "bg-white text-brand-700 shadow-lg shadow-ink-900/10 hover:-translate-y-0.5",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  external = false,
  href = "#",
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant; external?: boolean }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all ${buttonClasses[variant]} ${className}`;
  // Linki wewnętrzne przez next/link (obsługa basePath), pozostałe zwykłym <a>.
  if (href.startsWith("/") && !external) {
    return <Link href={href} className={classes} {...props} />;
  }
  return <a href={href} className={classes} {...props} />;
}

export function IconBadge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand-50 to-mint-50 text-brand-600 ring-1 ring-brand-100 ${className}`}
    >
      {children}
    </span>
  );
}
