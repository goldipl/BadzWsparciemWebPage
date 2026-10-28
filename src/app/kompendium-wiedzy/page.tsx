import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui";
import photo from "@/assets/img/kompendium.webp";
import cover1 from "@/assets/covers/okladka01.jpg";
import cover2 from "@/assets/covers/okladka02.jpg";
import cover3 from "@/assets/covers/okladka03.jpg";
import cover4 from "@/assets/covers/okladka04.jpg";
import cover5 from "@/assets/covers/okladka05.jpg";
import cover6 from "@/assets/covers/okladka06.jpg";

export const metadata: Metadata = {
  title: "Kompendium wiedzy",
  description: "Słowniczek pojęć związanych z płcią i seksualnością oraz lista publikacji o tęczowej tematyce.",
};

const glossary = [
  { term: "Lesbijka", def: "Kobieta, dla której atrakcyjne są inne kobiety." },
  { term: "Gej", def: "Mężczyzna, dla którego atrakcyjni są inni mężczyźni." },
  { term: "Osoba biseksualna", def: "Osoba, dla której atrakcyjne są osoby więcej niż jednej płci." },
  {
    term: "Osoba panseksualna",
    def: "Osoba, dla której atrakcyjne są osoby niezależnie od płci – płeć nie jest decydującym czynnikiem przy odczuwaniu emocjonalnego i/lub seksualnego pociągu do drugiej osoby.",
  },
  {
    term: "Osoba aseksualna",
    def: "Ktoś, kto zazwyczaj nie odczuwa pociągu seksualnego. Osoby aseksualne różnią się doświadczeniami i preferencjami, mogą też mieć różną orientację – można być np. aseksualnym gejem, czyli osobą aseksualną homoromantyczną.",
  },
  { term: "Osoba cispłciowa", def: "Osoba, która identyfikuje się z płcią przypisaną przy narodzinach." },
  { term: "Osoba transpłciowa", def: "Osoba, która identyfikuje się z inną płcią niż ta nadana przy narodzinach." },
  {
    term: "Osoba interpłciowa",
    def: "Osoba, która urodziła się z nietypowymi fizycznymi cechami płciowymi, nieodpowiadającymi medycznym i społecznym oczekiwaniom wobec typowego ciała męskiego lub kobiecego.",
  },
  {
    term: "Queer",
    def: "Osoby, które nie uważają orientacji psychoseksualnej i tożsamości płciowej za kategorie binarne. Często termin zbiorczy dla osób, które nie są heteroseksualne i/lub cispłciowe; stał się też terminem akademickim obejmującym osoby nieheteronormatywne.",
  },
  {
    term: "Niebinarność",
    def: "Zbiorcze określenie wielu tożsamości płciowych leżących poza binarnym podziałem na mężczyzn i kobiety – np. osoby apłciowe lub genderfluid (których tożsamość płciowa jest płynna i może zmieniać się w czasie).",
  },
];

const worthKnowing = [
  {
    term: "Coming out",
    def: "Potocznie „wyjście z szafy” – proces uświadomienia sobie, zaakceptowania i ujawnienia się jako lesbijka, gej, osoba biseksualna, aseksualna czy transpłciowa. To nie jednorazowy akt: osoby LGBT+ ujawniają się (lub są do tego zmuszane) wielokrotnie w życiu – współpracownikom, nowym znajomym, sąsiadom, lekarzom.",
  },
  {
    term: "LGBT+-fobia (w tym homofobia i transfobia)",
    def: "Ogólna, psychologiczna i społeczna wrogość wobec osób LGBT+. To konstrukcja społeczna promująca heteroseksualność jako jedyną akceptowaną psychoseksualność i dopuszczająca jedynie płeć przypisaną przy urodzeniu. Obejmuje negatywne przekonania, postawy i zachowania oparte na nieuzasadnionej złości, nietolerancji i strachu.",
  },
  {
    term: "Stres mniejszościowy",
    def: "Uporczywy, ciągły stres doświadczany przez osoby z napiętnowanych grup mniejszościowych. W przypadku osób LGBT+ wiąże się ze strachem przed ujawnieniem orientacji lub tożsamości. W odróżnieniu od innych rodzajów stresu nie działa motywująco i jest odczuwany przez całe życie.",
  },
  {
    term: "Dyskryminacja",
    def: "Nierówne lub niesprawiedliwe traktowanie ze względu m.in. na wiek, pochodzenie etniczne, niepełnosprawność, orientację psychoseksualną, ekspresję/tożsamość i cechy płciowe. Jej przeciwieństwem jest RÓWNE TRAKTOWANIE – uznanie, że wszyscy ludzie mają być traktowani tak samo przez prawo i innych.",
  },
];

const publications = [
  {
    cover: cover1,
    title: "Przecież jesteśmy! Homofobiczna przemoc w polskich szkołach",
    href: "https://lubimyczytac.pl/ksiazka/4928377/przeciez-jestesmy-homofobiczna-przemoc-w-polskich-szkolach---narracje-gejow-i-lesbijek",
  },
  { cover: cover2, title: "Od A do Z o LGBTQIAP", href: "https://epale.ec.europa.eu/sites/default/files/19_pl_atozlgbtqiap.pdf" },
  {
    cover: cover3,
    title: "Diversity and Childhood – raport krajowy (Polska)",
    href: "http://lambdawarszawa.org/wp-content/uploads/2020/09/Polish_National_Report_2020.pdf",
  },
  { cover: cover4, title: "Warszawskie licea przyjazne dla osób LGBTQ+", href: "https://mnw.org.pl/biblioteczka/licea-przyjazne-dla-lgbtq/" },
  {
    cover: cover5,
    title: "Wspieranie interpłciowego dziecka",
    href: "https://oiieurope.org/wp-content/uploads/2019/05/ParentsToolkit_PL_final.pdf",
  },
  { cover: cover6, title: "Tęcza pod lupą. Wszystko, co chcecie wiedzieć o LGBT", href: "https://kph.org.pl/wp-content/uploads/2017/12/Tecza-pod-lupa.pdf" },
];

function TermCard({ term, def }: { term: string; def: string }) {
  return (
    <article className="card p-6 transition-colors hover:border-brand-200">
      <h3 className="text-lg">
        <span className="text-gradient">{term}</span>
      </h3>
      <p className="mt-2 leading-relaxed text-ink-600">{def}</p>
    </article>
  );
}

export default function KompendiumPage() {
  return (
    <>
      <PageHero eyebrow="Kompendium wiedzy" title={<>Słowa, które pomagają <span className="text-gradient">zrozumieć</span></>}>
        <p>
          Sprawdź, ile wiesz na temat tęczowej społeczności. Przypominamy znaczenie skrótu LGBT+ i przybliżamy pojęcia
          dotyczące płci i seksualności człowieka. Pamiętaj – nie musisz się wstydzić swojej niewiedzy. Ważne, żeby
          uzupełniać braki i wiedzieć coraz więcej o swoich najbliższych.
        </p>
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="bg-brand-gradient absolute -inset-3 rotate-3 rounded-[2.5rem] opacity-80" />
            <Image
              src={photo}
              alt="Dwie uśmiechnięte młode kobiety – jedna obejmuje drugą ramieniem"
              className="relative h-auto w-full rounded-[2rem] object-cover shadow-xl"
              sizes="(min-width: 1024px) 24rem, 90vw"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Na początek" title="Podstawowe pojęcia" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-600">
              <p>
                <strong>Orientacja psychoseksualna</strong> to część Twojej tożsamości, która mówi o tym, kto Cię
                pociąga emocjonalnie i seksualnie oraz z kim chcesz stworzyć związek. Jest płynna i stanowi spektrum
                obejmujące wymiar romantyczny, miłosny i erotyczny.
              </p>
              <p>
                <strong>Tożsamość płciowa</strong> wskazuje na to, jak odczuwasz swoją płeć i jak się w tym kontekście
                identyfikujesz. Może, ale nie musi odpowiadać płci przypisanej w chwili urodzenia. Nie jest powiązana z
                orientacją – osoby transpłciowe mogą być m.in. hetero-, homo- czy biseksualne.
              </p>
              <p>
                Skrót <strong>LGBT+</strong> reprezentuje m.in. lesbijki, gejów, osoby biseksualne i transpłciowe. Jest
                powszechnie stosowany i akceptowany zarówno w społeczności, jak i poza nią. Funkcjonują też inne skróty,
                np. LGBTI, LGBTQ, LGBTQIA – zależnie od grupy, do której się odnoszą.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="Słowniczek" title="Nieheteronormatywny słowniczek" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {glossary.map((g) => (
            <TermCard key={g.term} {...g} />
          ))}
          <div className="flex items-center rounded-3xl border-2 border-dashed border-brand-200 bg-white/50 p-6 sm:col-span-2">
            <p className="leading-relaxed text-ink-600">
              Powyższa lista nie jest wyczerpująca. Są osoby, które zupełnie inaczej nazywają swoją tożsamość
              psychoseksualną lub płciową – <strong>i to jest w porządku.</strong>
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Warto wiedzieć" title="Określenia również warte zapamiętania" />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {worthKnowing.map((g) => (
            <TermCard key={g.term} {...g} />
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeading eyebrow="Dowiedz się więcej" title="Przydatne publikacje">
          Wciąż czujesz głód wiedzy? Zerknij na listę publikacji o tęczowej tematyce.
        </SectionHeading>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {publications.map((p) => (
            <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="group">
              <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-brand-100 transition-all group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-brand-600/15">
                <Image
                  src={p.cover}
                  alt={`Okładka: ${p.title}`}
                  className="aspect-[3/4] h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 11rem, 45vw"
                />
              </div>
              <p className="mt-3 flex items-start gap-1.5 text-sm leading-snug font-semibold text-ink-800 group-hover:text-brand-700">
                {p.title}
                <ExternalLink className="mt-0.5 size-3.5 shrink-0 opacity-50" aria-hidden />
              </p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
