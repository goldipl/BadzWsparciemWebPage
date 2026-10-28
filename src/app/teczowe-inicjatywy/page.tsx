import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Clapperboard, Film, Flag, Globe, School, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { IconBadge, Section, SectionHeading } from "@/components/ui";
import lambda from "@/assets/logos/lambda_teczowe.png";
import transfuzja from "@/assets/logos/trans-fuzja_teczowe.png";
import interakcja from "@/assets/logos/fundacja-interakcja_teczowe.png";
import kph from "@/assets/logos/kph_teczowe.png";
import asfera from "@/assets/logos/asfera_teczowe.png";
import myrodzice from "@/assets/logos/myrodzice_teczowe.png";

export const metadata: Metadata = {
  title: "Tęczowe inicjatywy",
  description: "Organizacje LGBT+ w Polsce, marsze równości, Tęczowy Piątek, strony internetowe, filmy i seriale.",
};

const organizations = [
  {
    name: "Lambda Warszawa",
    logo: lambda,
    href: "http://lambdawarszawa.org/",
    text: "Najstarsza organizacja w Polsce działająca od 1997 roku na rzecz społeczności nieheteronormatywnej. Tworzy przestrzeń do budowania pozytywnej tożsamości LGBTI+ i niesie profesjonalną pomoc w sytuacjach kryzysowych – także dzieciom i młodzieży LGBTI+, ich rodzeństwu i rodzicom.",
  },
  {
    name: "Fundacja Trans-Fuzja",
    logo: transfuzja,
    href: "http://transfuzja.org/",
    text: "Założona w 2008 roku organizacja działająca na rzecz praw osób transpłciowych – w obszarach rzecznictwa, wsparcia, edukacji oraz kultury.",
  },
  {
    name: "Fundacja Interakcja",
    logo: interakcja,
    href: "http://interakcja.org.pl/",
    text: "Jej misją jest poprawa warunków życia osób interpłciowych w Polsce poprzez działalność wsparciową dla nich i ich bliskich.",
  },
  {
    name: "Kampania Przeciw Homofobii",
    logo: kph,
    href: "https://kph.org.pl/",
    text: "Ogólnopolska organizacja pozarządowa przeciwdziałająca przemocy i dyskryminacji ze względu na orientację psychoseksualną i tożsamość płciową – po to, by wszystkie osoby LGBTI+, ich rodziny i bliscy mogli czuć się bezpiecznie.",
  },
  {
    name: "Stowarzyszenie Asfera",
    logo: asfera,
    href: "https://www.facebook.com/aseksualizm/",
    text: "Propaguje rozumienie aseksualności jako jednej z orientacji spod parasola LGBTQIAP+, zwiększa widoczność osób aseksualnych i przeciwdziała ich dyskryminacji.",
  },
  {
    name: "My, rodzice",
    logo: myrodzice,
    href: "https://myrodzice.org/",
    text: "Stowarzyszenie matek i ojców oraz sojuszników i sojuszniczek osób LGBT+, mających za sobą coming outy swoich dzieci, innych członków rodziny lub przyjaciół.",
  },
];

const initiatives = [
  {
    icon: Flag,
    title: "Parady i marsze równości",
    text: "Plenerowe wydarzenia zwiększające widoczność i akceptację osób LGBT+ – forma demonstracji przeciwko dyskryminacji. Pierwsza parada w Polsce odbyła się w 2001 roku w Warszawie; w 2019 roku marszów było już 30 w całym kraju!",
  },
  {
    icon: School,
    title: "Tęczowy Piątek",
    text: "Akcja organizowana co roku w ostatni piątek października, by okazać wsparcie młodym osobom LGBT+ w szkołach i pokazać, że placówki edukacyjne mogą być bezpieczne dla wszystkich. Ty też możesz zgłosić swoją szkołę!",
  },
  {
    icon: Clapperboard,
    title: "LGBT Film Festival",
    text: "Coroczne święto kina LGBT+ organizowane w miastach Europy Środkowo-Wschodniej. Poza filmami organizatorzy przygotowują szereg wydarzeń towarzyszących – nawet najbardziej wybredni znajdą coś dla siebie!",
  },
];

const websites = [
  { name: "Portal ludzi LGBT+", href: "https://queer.pl/" },
  { name: "Stowarzyszenie Rodzin i Przyjaciół osób LGBT+", href: "http://akceptacja.org/" },
  { name: "Miłość Nie Wyklucza", href: "https://mnw.org.pl/" },
  { name: "Grupa polskich chrześcijan LGBTQ", href: "https://www.wiaraitecza.pl/" },
  { name: "Grupa Stonewall – Wielkopolska", href: "https://grupa-stonewall.pl/" },
  { name: "Wolontariat Równości", href: "https://wolontariatrownosci.pl/" },
  { name: "Fundacja na rzecz różnorodności", href: "https://polistrefa.pl/" },
];

const films = [
  "Sex Education",
  "Pose",
  "Dumni i wściekli",
  "Artykuł 18",
  "Twój Simon",
  "Życie Adeli",
  "Orange is the New Black",
  "Sense8",
  "Euforia",
  "Nanette i Douglas",
  "Dziewczyna z portretu",
];

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export default function InicjatywyPage() {
  return (
    <>
      <PageHero
        eyebrow="Tęczowe inicjatywy"
        title={
          <>
            Różnorodność, która <span className="text-gradient">działa</span>
          </>
        }
      >
        <p>
          Społeczność LGBT+ to niejednorodna grupa z różnymi potrzebami, ale też z bogatą historią i kulturą. Poznaj
          organizacje, wydarzenia i miejsca, które warto znać.
        </p>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Organizacje w Polsce" title="Poznaj tych, którzy wspierają">
          Osoby z tęczowej społeczności i ich sojusznicy/sojuszniczki tworzą organizacje wspierające osoby LGBT+.
        </SectionHeading>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {organizations.map((o) => (
            <a
              key={o.name}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col p-7 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
            >
              <div className="flex items-start justify-between">
                <div className="grid size-20 place-items-center overflow-hidden rounded-2xl bg-white ring-1 ring-brand-100">
                  <Image src={o.logo} alt={`Logo: ${o.name}`} className="h-auto w-full" />
                </div>
                <ArrowUpRight
                  className="size-5 text-ink-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600"
                  aria-hidden
                />
              </div>
              <h3 className="mt-5 text-xl">{o.name}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{o.text}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="Wydarzenia" title="Inne inicjatywy" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {initiatives.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card p-7">
              <IconBadge>
                <Icon className="size-6" aria-hidden />
              </IconBadge>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Online" title="Strony internetowe">
              Chcesz pogłębić wiedzę? Zajrzyj na te strony.
            </SectionHeading>
            <ul className="mt-10 space-y-3">
              {websites.map((w) => (
                <li key={w.href}>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex items-center gap-4 p-4 transition-colors hover:border-brand-200"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Globe className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-ink-900">{w.name}</span>
                      <span className="block text-sm text-brand-600">{hostname(w.href)}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-ink-500 group-hover:text-brand-600" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Na wieczór" title="Filmy i seriale">
              Spędź czas miło i pożytecznie z produkcjami o tęczowej tematyce.
            </SectionHeading>
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-ink-900 p-8">
              <div className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-brand-500/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-mint-500/25 blur-3xl" />
              <Film className="relative size-8 text-sky-300" aria-hidden />
              <ul className="relative mt-6 flex flex-wrap gap-2.5">
                {films.map((f) => (
                  <li key={f} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="tint" className="!py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <Sparkles className="size-8 text-mint-500" aria-hidden />
          <p className="max-w-2xl text-xl font-bold text-ink-900 sm:text-2xl">
            Poszukaj lokalnych inicjatyw w swojej miejscowości. A jeśli ich nie ma… może czas pomyśleć o swojej?
          </p>
        </div>
      </Section>
    </>
  );
}
