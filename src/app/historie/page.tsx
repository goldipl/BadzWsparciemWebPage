import type { Metadata } from "next";
import { Mail, Quote, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { emails } from "@/lib/site";
import photo from "@/assets/img/rodzenstwo-2.webp";

export const metadata: Metadata = {
  title: "Historie nieheteronormatywne",
  description: "Tęczowe historie o rodzeństwie, wsparciu i coming oucie. Przeczytaj i podziel się swoją!",
};

const stories = [
  {
    author: "Iwona",
    city: "Warszawa",
    text: "Bardzo wiele znaczyło dla mnie, gdy moja młodsza siostra się przede mną otworzyła i powiedziała mi o swoim pierwszym zauroczeniu swoją koleżanką. Wydaje mi się, że pozytywnie wpłynęło to na naszą relację, bo obydwie możemy po prostu bezpiecznie być sobą. :)",
  },
];

export default function HistoriePage() {
  return (
    <>
      <PageHero
        eyebrow="Historie nieheteronormatywne"
        title={
          <>
            Historie <span className="text-gradient">z życia wzięte</span>
          </>
        }
        image={photo}
        imageAlt="Dwóch uśmiechniętych młodych mężczyzn – jeden opiera dłonie na ramionach drugiego"
      >
        <p>
          W zmienianiu świata na lepsze dla naszego rodzeństwa ważne jest nie tylko odpowiednie wsparcie, ale też
          inspirujące opowieści. Przeczytaj historie innych i podziel się swoją!
        </p>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Wasze historie" title="Jak rodzeństwo pokazało, co znaczy bezpiecznie być sobą" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {stories.map((s) => (
            <figure key={s.author} className="card relative p-8 sm:p-10">
              <Quote className="absolute top-8 right-8 size-12 text-brand-100" aria-hidden />
              <blockquote className="relative text-xl leading-relaxed font-medium text-ink-800">„{s.text}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="bg-brand-gradient grid size-12 place-items-center rounded-full text-lg font-extrabold text-white">
                  {s.author[0]}
                </span>
                <span>
                  <span className="block font-bold text-ink-900">{s.author}</span>
                  <span className="block text-sm text-ink-500">{s.city}</span>
                </span>
              </figcaption>
            </figure>
          ))}
          <div className="flex flex-col items-start justify-center rounded-3xl border-2 border-dashed border-brand-200 bg-brand-50/40 p-8 sm:p-10">
            <p className="text-sm font-bold tracking-wider text-brand-700 uppercase">Tu może być Twoja historia</p>
            <p className="mt-3 text-lg leading-relaxed text-ink-600">
              Każda opowieść może dodać komuś odwagi. Napisz do nas – opublikujemy ją w tym miejscu.
            </p>
            <ButtonLink href={`mailto:${emails.katarzyna}`} className="mt-6">
              <Send className="size-4" aria-hidden />
              Wyślij historię
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="bg-brand-gradient relative overflow-hidden rounded-[2rem] p-8 text-white sm:p-14">
          <div className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-white/15 blur-2xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl text-white sm:text-4xl">Podziel się swoją historią!</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-white/90">
                <p>
                  Opowiedz, jak Twój brat lub Twoja siostra powiedzieli Ci o swojej orientacji psychoseksualnej bądź
                  tożsamości płciowej – albo w jaki sposób na co dzień okazujesz wsparcie swojemu nieheteronormatywnemu
                  rodzeństwu.
                </p>
                <p>
                  Jeśli jesteś osobą LGBT+, to również jest miejsce dla Ciebie! Jak z Twojej perspektywy wyglądało
                  „wyjście z szafy” przed rodzeństwem?
                </p>
                <p className="font-semibold text-white">Czekamy z niecierpliwością! ❤️ 🧡 💛 💚 💙 💜</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[emails.katarzyna, emails.hubert].map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-4 rounded-2xl bg-white/15 p-4 ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/25"
                  >
                    <Mail className="size-5 shrink-0" aria-hidden />
                    <span className="min-w-0 font-semibold break-all">{email}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
