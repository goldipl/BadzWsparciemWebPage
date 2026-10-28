import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { emails, helpline, navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-sky-100/65">
      <div className="pointer-events-none absolute -top-40 -right-32 size-96 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-24 size-96 rounded-full bg-mint-500/15 blur-3xl" />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo inverted />
          <p className="mt-5 text-sm leading-relaxed">
            Kampania społeczna Stowarzyszenia Lambda Warszawa dla rodzeństwa osób LGBT+. Bądź, wspieraj, ale niczego
            nie przyspieszaj.
          </p>
        </div>

        <nav aria-label="Stopka">
          <h2 className="text-sm font-bold tracking-wider text-white uppercase">Strony</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-wider text-white uppercase">Potrzebujesz rozmowy?</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`tel:${helpline.tel}`} className="inline-flex items-center gap-2.5 hover:text-white">
                <Phone className="size-4 text-mint-400" aria-hidden />
                {helpline.display}
              </a>
              <p className="mt-1 pl-6.5 text-xs">{helpline.hours}</p>
            </li>
            <li>
              <a href={`mailto:${emails.counseling}`} className="inline-flex items-center gap-2.5 break-all hover:text-white">
                <Mail className="size-4 shrink-0 text-mint-400" aria-hidden />
                {emails.counseling}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>Bądź Wsparciem &copy; 2021 · Stowarzyszenie Lambda Warszawa</p>
          <p>Inicjatywa realizowana dzięki współpracy z TechSoup Europe.</p>
        </div>
      </div>
    </footer>
  );
}
