import { Clock, Mail, Phone } from "lucide-react";
import { emails, helpline } from "@/lib/site";

export function HelplineCard({ title = "Telefon Zaufania", children }: { title?: string; children?: React.ReactNode }) {
  return (
    <div className="bg-brand-gradient relative overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl shadow-brand-600/25 sm:p-12">
      <div className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-white/15 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-mint-300/30 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold tracking-wider text-white/80 uppercase">{title}</p>
          <a
            href={`tel:${helpline.tel}`}
            className="mt-3 inline-flex items-center gap-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            <span className="grid size-14 place-items-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur">
              <Phone className="size-6" aria-hidden />
            </span>
            {helpline.display}
          </a>
          <div className="mt-5 max-w-xl text-base leading-relaxed text-white/90">
            {children ?? (
              <p>
                Nasze telefonistki i nasi telefoniści są dostępne/dostępni od poniedziałku do piątku. Telefon jest dla osób
                LGBT+ i ich bliskich – także rodzeństwa.
              </p>
            )}
          </div>
        </div>

        <ul className="space-y-3">
          <li className="flex items-center gap-4 rounded-2xl bg-white/15 p-4 ring-1 ring-white/20 backdrop-blur">
            <Clock className="size-5 shrink-0" aria-hidden />
            <span>
              <span className="block text-xs text-white/75">Godziny dyżurów</span>
              <strong className="text-white">{helpline.hours}</strong>
            </span>
          </li>
          <li className="flex items-center gap-4 rounded-2xl bg-white/15 p-4 ring-1 ring-white/20 backdrop-blur">
            <Mail className="size-5 shrink-0" aria-hidden />
            <span className="min-w-0">
              <span className="block text-xs text-white/75">Wolisz napisać?</span>
              <a href={`mailto:${emails.counseling}`} className="font-semibold break-all text-white underline-offset-4 hover:underline">
                {emails.counseling}
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
