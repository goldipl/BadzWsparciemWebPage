import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Ear,
  Flag,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Phone,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HelplineCard } from "@/components/HelplineCard";
import { ButtonLink, Eyebrow, IconBadge, Section, SectionHeading } from "@/components/ui";
import { coordinators, helpline } from "@/lib/site";
import heroPhoto from "@/assets/img/rodzenstwo-1.webp";
import lambdaLogo from "@/assets/logos/lambdalogo.png";
import techsoupLogo from "@/assets/logos/techsoup.png";

const stats = [
  { value: "25%", text: "osób wyoutowanych ma poczucie pełnej akceptacji ze strony matki." },
  { value: "12%", text: "osób wyoutowanych ma poczucie pełnej akceptacji ze strony ojca." },
  { value: "70%", text: "młodych osób LGBT+ w Polsce ma myśli samobójcze." },
  { value: "<18", text: "lat – osoby niepełnoletnie i z mniejszych miejscowości czują się najbardziej samotne." },
];

const understand: { icon: LucideIcon; title: string; body: React.ReactNode }[] = [
  {
    icon: Users,
    title: "Nie jesteś sam. Nie jesteś sama.",
    body: (
      <ul className="bullets">
        <li>
          W wielu rodzinach żyją lesbijki, geje, osoby biseksualne. Wiele osób zmaga się z pytaniami i emocjami
          podobnymi do Twoich.
        </li>
        <li>
          Rodzeństwo się przed Tobą otworzyło – <strong>posłuchaj</strong> tego, co ma do powiedzenia Twój brat lub
          Twoja siostra i postaraj się <strong>zachować otwarty umysł</strong>. Dzięki temu możesz zyskać bliższą i
          bardziej satysfakcjonującą więź ze swoim rodzeństwem.
        </li>
        <li>
          <strong>Nie unikaj swojego rodzeństwa</strong> – może poczuć się odtrącone. Pytaj, jak on/ona czuje się w
          obecnej sytuacji.
        </li>
      </ul>
    ),
  },
  {
    icon: HeartHandshake,
    title: "To dalej ta sama osoba",
    body: (
      <ul className="bullets">
        <li>
          Pamiętaj, <strong>nie tracisz swojego brata, nie tracisz swojej siostry!</strong> Tracisz jedynie swoje
          wcześniejsze wyobrażenie o nim/niej – oczekiwania względem jego/jej zachowań czy wyborów.
        </li>
        <li>
          <strong>Zrozum</strong>, że Twój brat lub Twoja siostra się nie zmienił/zmieniła. Możesz być w szoku i czuć
          różne emocje, ale to nadal ta sama osoba, którą był/była, zanim przyszedł/przyszła do Ciebie z tą
          informacją.
        </li>
      </ul>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Wartość zaufania",
    body: (
      <ul className="bullets">
        <li>
          <strong>Respektuj</strong> brak gotowości brata lub siostry na coming out wobec innych osób. To
          indywidualna decyzja Twojego rodzeństwa. Bądź świadom/świadoma osobistego ryzyka, jakie podjął/podjęła,
          mówiąc Ci o swojej orientacji psychoseksualnej lub tożsamości płciowej.
        </li>
        <li>
          Daj rodzeństwu do zrozumienia, że <strong>może Ci ufać</strong> i że bez jego/jej zgody{" "}
          <strong>nie powiesz nikomu o jego/jej orientacji</strong>.
        </li>
      </ul>
    ),
  },
  {
    icon: MessageCircle,
    title: "Klucz to zainteresowanie",
    body: (
      <>
        <p>Aby lepiej go/ją zrozumieć, zadawaj pytania, np.:</p>
        <ul className="mt-3 space-y-2">
          {[
            "Kiedy poczułaś/odkryłeś/zrozumiałaś, że jesteś gejem/lesbijką/osobą biseksualną?",
            "Czy reszta naszego rodzeństwa lub Twoi przyjaciele wiedzą o Twojej tożsamości?",
            "Jak się czułaś/czułeś, ukrywając swoją tożsamość przed bliskimi?",
            "Co mogę zrobić, żebyś czuł/czuła się lepiej i bezpieczniej?",
          ].map((q) => (
            <li key={q} className="rounded-xl bg-brand-50/70 px-3.5 py-2.5 text-sm text-ink-800 italic">
              „{q}”
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

const react: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Ear,
    title: "Rozmawiaj",
    body: "„Wiedza to potęga”, ale profesjonalne materiały to nie wszystko. Równie istotny jest kontakt z drugim człowiekiem. To Twoje rodzeństwo najlepiej wie, czego potrzebuje – słuchaj, uzupełniaj swoją wiedzę o jego opowieści i spróbuj zrozumieć, co jest dla niego ważne.",
  },
  {
    icon: Megaphone,
    title: "Okazuj wsparcie przy innych",
    body: "Obojętność bliskich sprawia, że osoby LGBT+ czują się osamotnione. Przerywaj komentarze oparte na uprzedzeniach i stereotypach. Ćwicz reakcje na teksty typu „To takie pedalskie!”, „Zachowujesz się jak baba!” czy „Twoja rodzina nie jest normalna, bo nie masz taty!”.",
  },
  {
    icon: Share2,
    title: "Świeć przykładem w sieci",
    body: "Bądź sojusznikiem/sojuszniczką również w świecie wirtualnym. Liczy się każdy gest: polubienie stron organizacji LGBT+, udostępnienie merytorycznych treści, „głośne” prezentowanie stanowiska w postach i komentarzach. Twoje rodzeństwo to zauważy!",
  },
  {
    icon: GraduationCap,
    title: "Edukuj innych",
    body: "Połóż kres krzywdzącemu nazewnictwu i obelgom na tle płciowym. Angażuj się w dyskusje ze znajomymi i rodziną, traktując takie sytuacje jako pouczające doświadczenia. Pokazuj, jakie słownictwo jest włączające i niedyskryminujące.",
  },
  {
    icon: ShoppingBag,
    title: "Podejmuj odpowiedzialne decyzje",
    body: "Świadomie wybieraj miejsca, w których zostawiasz pieniądze – sprawdź, czy Twój sklep lub ulubiona knajpka wspiera tęczowe inicjatywy. A przy wyborach zapytaj siebie: „Czy partia, na którą chcę głosować, opowiada się za równym traktowaniem mojego rodzeństwa?”.",
  },
  {
    icon: Flag,
    title: "Wspieraj tęczowe inicjatywy",
    body: "Możliwości jest bez liku: wywieś tęczową flagę, doczep przypinkę, pomóż zorganizować Tęczowy Piątek w szkole, weź udział w marszu równości albo przekaż 1,5% podatku organizacji działającej na rzecz osób LGBT+, np. Lambdzie Warszawa.",
  },
  {
    icon: MapPin,
    title: "Działaj lokalnie",
    body: "Czujesz, że tęczowych inicjatyw powinno być więcej? Zorganizuj wydarzenie wspierające osoby nieheteronormatywne, pierwszy marsz równości albo warsztaty edukacyjne w swojej miejscowości. Brakuje w niej organizacji LGBT+? Załóż ją!",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-white via-brand-50/70 to-mint-50/70">
        <div className="pointer-events-none absolute -top-40 -left-40 size-[34rem] rounded-full bg-sky-200/50 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -right-40 size-[30rem] rounded-full bg-mint-300/30 blur-3xl" />

        <div className="container-page relative grid items-center gap-8 pt-14 lg:grid-cols-[1.1fr_1fr] lg:pt-8">
          <div className="lg:py-20">
            <Eyebrow>Kampania dla rodzeństwa osób LGBT+</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
              Bądź <span className="text-gradient">wsparciem</span>
            </h1>
            <p className="mt-6 text-2xl font-bold tracking-tight text-ink-800 sm:text-3xl">
              Zawsze stoję za Tobą murem.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              Przyjazna przestrzeń dla rodzeństwa osób LGBT+. Podpowiadamy, jak zrozumieć potrzeby brata lub siostry,
              dać mu/jej odpowiednie wsparcie, a kiedy sytuacja tego wymaga – <strong>zareagować!</strong>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#zrozum">
                Jak mogę pomóc?
                <ArrowDown className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/kompendium-wiedzy/" variant="secondary">
                <BookOpen className="size-4 text-brand-600" aria-hidden />
                Kompendium wiedzy
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg self-end">
            <div className="bg-brand-gradient absolute inset-x-4 top-20 bottom-0 rounded-t-[12rem]" />
            <div className="absolute inset-x-4 top-20 bottom-0 rounded-t-[12rem] bg-[radial-gradient(circle_at_30%_15%,rgb(255_255_255/0.4),transparent_55%)]" />
            <Image
              src={heroPhoto}
              alt="Troje uśmiechniętych młodych ludzi – rodzeństwo obejmujące się nawzajem"
              priority
              className="relative h-auto w-full"
              sizes="(min-width: 1024px) 32rem, 90vw"
            />
            <a
              href={`tel:${helpline.tel}`}
              className="card animate-float absolute bottom-8 -left-2 flex items-center gap-3 p-4 pr-6 sm:-left-10"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-mint-50 text-mint-600 ring-1 ring-mint-100">
                <Phone className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold text-ink-500">Telefon Zaufania</span>
                <span className="block font-extrabold text-ink-900">{helpline.display}</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* COMING OUT */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Coming out" title="Czym jest coming out i czemu jest ważny?" />
            <blockquote className="mt-8 border-l-4 border-mint-400 pl-5 text-xl font-bold text-ink-800">
              Bądź, wspieraj, ale <span className="text-gradient">niczego nie przyspieszaj!</span>
            </blockquote>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              Proces coming outu, czyli ujawnienia swojej tożsamości psychoseksualnej bądź tożsamości płciowej, może
              być trudny nie tylko dla osób „wychodzących z szafy”, ale również dla ich bliskich i rodzin – w tym
              rodzeństwa.
            </p>
            <p>
              Po co osoby LGBT+ to robią? Dlaczego o tym mówią? Przede wszystkim dla siebie – żeby żyć w zgodzie ze
              sobą. Coming out powinien być <strong>bezpieczny, dobrowolny i dokonany na własnych zasadach</strong>.
            </p>
            <p>
              Jak więc się zachować, kiedy brat albo siostra dzieli się z Tobą tak ważną częścią swojego życia? Jak
              poradzić sobie z emocjami towarzyszącymi takim sytuacjom? Jak wesprzeć najbliższe osoby, kiedy obdarowują
              Cię zaufaniem i potrzebują zrozumienia? Jak reagować na przejawy homofobii, nawet jeśli bywa to
              niekomfortowe? Między innymi na te pytania postaramy się tutaj odpowiedzieć.
            </p>
          </div>
        </div>
      </Section>

      {/* STATYSTYKI */}
      <Section tone="dark">
        <div className="pointer-events-none absolute -top-40 left-1/4 size-[32rem] rounded-full bg-brand-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-40 size-[28rem] rounded-full bg-mint-500/20 blur-3xl" />
        <div className="relative">
          <SectionHeading eyebrow="Fakty" title="Sytuacja osób LGBT+ w Polsce" dark>
            Twoje wsparcie naprawdę ma znaczenie. Oto, z czym na co dzień mierzą się osoby nieheteronormatywne.
          </SectionHeading>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur">
                <p className="bg-linear-to-r from-sky-300 to-mint-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-4 leading-relaxed text-sky-100/75">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="flex gap-5 rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
              <HeartPulse className="size-8 shrink-0 text-sky-300" aria-hidden />
              <p className="leading-relaxed text-sky-100/75">
                Znaczna większość osób LGBT+ przejawia przynajmniej łagodne objawy depresji, a odsetek osób z poważnymi
                objawami jest <strong className="text-white">ponad pięć razy większy</strong> niż w populacji ogólnej.
                Przyczyny to m.in. przemoc rówieśnicza, poczucie osamotnienia, brak wsparcia społecznego i zależność od
                rodziny.
              </p>
            </div>
            <div className="flex gap-5 rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
              <ShieldCheck className="size-8 shrink-0 text-mint-300" aria-hidden />
              <p className="leading-relaxed text-sky-100/75">
                Przemoc motywowana uprzedzeniami wobec osób LGBT+ jest{" "}
                <strong className="text-white">wszechobecna</strong> – zarówno w sferze prywatnej, jak i publicznej.
                Przemoc i dyskryminacja wywołują negatywne konsekwencje dla zdrowia psychicznego i fizycznego.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-sky-100/60 italic">
            Źródło: „Sytuacja społeczna osób LGBTA w Polsce – raport za lata 2015–2016”, Lambda Warszawa, Kampania
            Przeciw Homofobii, Fundacja Trans-Fuzja.
          </p>
        </div>
      </Section>

      {/* ZROZUM */}
      <Section id="zrozum" tone="tint">
        <SectionHeading eyebrow="Krok 1" title={<>Zrozum</>}>
          Twoje emocje są ważne – i Twoje rodzeństwo też. Kilka rzeczy, o których warto pamiętać.
        </SectionHeading>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {understand.map(({ icon: Icon, title, body }) => (
            <article key={title} className="card p-7 sm:p-9">
              <IconBadge>
                <Icon className="size-6" aria-hidden />
              </IconBadge>
              <h3 className="mt-5 text-xl sm:text-2xl">{title}</h3>
              <div className="mt-4 leading-relaxed text-ink-600">
                {body}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink-900 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl text-white">Szukasz rzetelnych źródeł?</h3>
            <p className="mt-2 leading-relaxed text-sky-100/75">
              Uważaj na treści, które powielają stereotypy. Przygotowaliśmy słowniczek, listę publikacji i kontakty do
              tęczowych organizacji. Jeśli potrzebujesz czegoś jeszcze – daj nam znać!
            </p>
          </div>
          <ButtonLink href="/kompendium-wiedzy/" variant="light" className="shrink-0">
            Kompendium wiedzy
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </Section>

      {/* REAGUJ */}
      <Section id="reaguj">
        <SectionHeading eyebrow="Krok 2" title="Reaguj">
          Czyny znaczą więcej niż słowa. Twoje nieheteronormatywne rodzeństwo może teraz bardzo potrzebować brata lub
          siostry, na których może polegać. W jaki sposób możesz pomóc?
        </SectionHeading>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {react.map(({ icon: Icon, title, body }, i) => (
            <article
              key={title}
              className="card group p-7 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
            >
              <div className="flex items-center justify-between">
                <IconBadge className="transition-colors group-hover:from-brand-500 group-hover:to-mint-500 group-hover:text-white">
                  <Icon className="size-6" aria-hidden />
                </IconBadge>
                <span className="text-sm font-bold text-brand-200">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600">{body}</p>
            </article>
          ))}
          <article className="bg-brand-gradient flex flex-col justify-between rounded-3xl p-7 text-white sm:col-span-2 lg:col-span-2">
            <Sparkles className="size-8" aria-hidden />
            <div>
              <h3 className="mt-6 text-xl text-white">Masz swoją historię?</h3>
              <p className="mt-2 leading-relaxed text-white/90">Podziel się nią i zainspiruj innych.</p>
              <ButtonLink href="/historie/" variant="light" className="mt-5">
                Historie
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>
          </article>
        </div>
      </Section>

      {/* LAMBDA + KONTAKT */}
      <Section id="kontakt" tone="tint">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div className="card mx-auto grid size-56 place-items-center p-6">
            <Image src={lambdaLogo} alt="Logo Stowarzyszenia Lambda Warszawa" className="h-auto w-full" />
          </div>
          <SectionHeading eyebrow="Organizator" title="O Lambdzie Warszawa">
            <p>
              Organizatorem kampanii jest Stowarzyszenie Lambda Warszawa – najstarsza w Polsce organizacja działająca
              na rzecz gejów, lesbijek, osób biseksualnych i transpłciowych. Stowarzyszenie oferuje pomoc
              psychologiczną i prawną, grupy terapeutyczne oraz Telefon Zaufania dla osób LGBT+ i ich bliskich, w tym
              rodzeństwa i rodziców. Prowadzi też grupy wsparcia, m.in. grupę dla rodziców, na której mile widziane
              jest także rodzeństwo osób LGBT+.
            </p>
          </SectionHeading>
        </div>

        <div className="mt-14">
          <HelplineCard />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {coordinators.map((c) => (
            <a
              key={c.email}
              href={`mailto:${c.email}`}
              className="card group flex items-center gap-5 p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200"
            >
              <IconBadge>
                <Mail className="size-5" aria-hidden />
              </IconBadge>
              <span className="min-w-0">
                <span className="block text-sm text-ink-500">{c.role}</span>
                <span className="block text-lg font-bold text-ink-900">{c.name}</span>
                <span className="block truncate text-sm font-semibold text-brand-600 group-hover:underline">
                  {c.email}
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center text-sm text-ink-500 sm:flex-row sm:justify-center sm:text-left">
          <span>Inicjatywa jest realizowana dzięki współpracy z</span>
          <Image src={techsoupLogo} alt="TechSoup Europe" className="h-10 w-auto" />
        </div>
      </Section>
    </>
  );
}
