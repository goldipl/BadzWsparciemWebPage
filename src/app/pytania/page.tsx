import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { HelplineCard } from "@/components/HelplineCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import photo from "@/assets/img/rodzenstwo-3.webp";

export const metadata: Metadata = {
  title: "Pytania i odpowiedzi",
  description: "Najczęściej zadawane pytania rodzeństwa osób LGBT+ – o coming out, rodzinę, wiarę i wsparcie.",
};

const faq: { q: string; a: string[] }[] = [
  {
    q: "Dlaczego mój brat / moja siostra nie powiedział(a) mi o tym wcześniej?",
    a: [
      "Często osoby nieheteronormatywne czekają na odpowiedni moment, bo same chcą uzyskać jasność wobec własnych odczuć. Czasem mija wiele lat, zanim będą w stanie je określić i nazwać. W społeczeństwie, w którym ciężko odnaleźć się różnorodności i odstępstwom od heteronormy, coming out przed samym/samą sobą może zająć dużo czasu – a co dopiero przed innymi.",
      "To, że Twój brat / Twoja siostra Ci o tym powiedział(a), świadczy o miłości i potrzebie wsparcia oraz zrozumienia z Twojej strony. Pamiętaj, taki krok wymaga wielkiej odwagi!",
    ],
  },
  {
    q: "Kościół katolicki ma negatywny stosunek do osób homoseksualnych. Czy będąc katolikiem/katoliczką mogę wspierać osoby LGBT+?",
    a: [
      "Kościół katolicki nie traktuje samej homoseksualności jako grzechu – grzeszne są wedle jego doktryny zachowania homoseksualne. Zachowań potępianych przez Kościół jest jednak wiele (np. antykoncepcja czy seks przedmałżeński), a społeczeństwo w praktyce często tych zasad nie przestrzega. Dlaczego więc akurat w tej jednej kwestii mielibyśmy oddawać mu prawo do osądów dotyczących tak ważnej sfery życia?",
      "Wiele osób powołuje się na Biblię. Warto jednak nie interpretować jej fragmentów dosłownie, zrozumieć szerszy kontekst i zajrzeć do tekstów przedstawiających m.in. relacje między dwoma mężczyznami – np. historię Dawida i Jonatana. Kościoły chrześcijańskie na świecie różnią się w nauczaniu – niektóre otwarcie akceptują społeczność LGBT+ i pokazują, że jest mile widziana we wspólnocie.",
    ],
  },
  {
    q: "Ok, ja to akceptuję, ale po co się z tym obnosić? I dlaczego potrzebne im są specjalne przywileje?",
    a: [
      "W świecie, który zakłada, że wszyscy są heteroseksualni, publiczne okazywanie uczuć, noszenie tęczowych symboli czy udział w marszach równości bywa postrzegane jako „obnoszenie się”. Tak naprawdę to swobodne i naturalne zachowanie. Osoby heteroseksualne nie zastanawiają się, czy mogą złapać się za rękę w miejscu publicznym, i nie są dyskryminowane ze względu na orientację – dlatego nie potrzebują marszów.",
      "Parady zwiększają widoczność osób LGBT+ i ich sojuszników/sojuszniczek. Osoby LGBT+ nie potrzebują specjalnych przywilejów, tylko równego traktowania – czyli bezpieczeństwa i godnego życia dla siebie i swoich rodzin.",
    ],
  },
  {
    q: "Czy po tym, jak się dowiedziałem/dowiedziałam, powinienem/powinnam skorzystać z pomocy psychologicznej?",
    a: [
      "Możesz zasięgnąć porady psychologa/psycholożki lub psychoterapeuty/psychoterapeutki – o ile nie wiąże się to z nadzieją na zmianę orientacji Twojego rodzeństwa. Terapie reparatywne, próbujące zmienić orientację psychoseksualną, mają poważne negatywne skutki dla psychiki. Homo-, bi- czy panseksualność nie jest kwestią wyboru, dlatego w wielu krajach takie „leczenie” jest zakazane.",
      "Konsultacja może pomóc, jeśli chcesz wiedzieć, jak wspierać rodzeństwo, albo trudno Ci odnaleźć się w nowej sytuacji – np. uporać się ze stratą dawnego wyobrażenia o bracie/siostrze. Najlepiej szukać specjalistów/specjalistek wrażliwych na potrzeby osób LGBT+. Zadzwoń na nasz Telefon Zaufania – polecimy Ci przyjazne nazwiska :)",
    ],
  },
  {
    q: "No dobra, nie mam z tym problemu, ale co z babcią? Ona przecież dostanie zawału.",
    a: [
      "Komentarze typu „Nie mów babci, bo ją zabijesz” albo „Mama tego nie przeżyje” to nic miłego dla osoby, która zmaga się ze społeczną stygmatyzacją. Obarczanie jej odpowiedzialnością za reakcje innych nie jest w porządku – pokazujesz w ten sposób, że potrzeby innych członków rodziny są ważniejsze niż jej/jego.",
      "Warto zastanowić się nad konsekwencjami otwartości, ale przede wszystkim liczy się dobro i bezpieczeństwo osoby, której to dotyczy. Być może rodzinie będzie ciężko i potrzebuje czasu. To właśnie Ty, jako brat/siostra, możesz pomóc rodzicom czy dziadkom przejść przez ten proces: rozmawiać, podrzucać materiały i w razie potrzeby stanąć murem za rodzeństwem. Namawianie do „pozostania w szafie” nie rozwiąże problemu – ukrywanie ważnej części życia powoduje ogromny stres.",
    ],
  },
  {
    q: "Czy zaprosić brata/siostrę na rodzinną uroczystość z partnerem/partnerką?",
    a: [
      "Organizując przyjęcie czy spotkanie rodzinne, pomyśl o rodzeństwie i ich drugich połówkach. Jeśli wiesz, że Twój brat / Twoja siostra z kimś się spotyka, daj znać, że może przyjść razem z tą osobą. Jeśli nie masz pewności – zapytaj.",
      "Obawiasz się reakcji rodziny lub znajomych? Możesz ich wcześniej poinformować. Jako dobry gospodarz / dobra gospodyni zadbaj, by wszyscy czuli się mile widziani, i reaguj na uszczypliwe komentarze – nie zostawiaj ich „bez echa”.",
    ],
  },
  {
    q: "Nasz ojciec wpadnie w szał, jak się dowie! Może nawet wyrzucić mojego brata / moją siostrę z domu.",
    a: [
      "Co dwie głowy, to nie jedna! Zastanówcie się wspólnie, jakie konsekwencje mogłaby przynieść ta decyzja, i spróbujcie wcześniej wyczuć, co rodzice sądzą o homo- czy biseksualności. Często wyobrażenia o „wyjściu z szafy” są pełne lęku, a finalnie szczerość przynosi ulgę i bardziej przychylną reakcję, niż się spodziewaliście.",
      "Jeśli jednak macie duże obawy, może warto poczekać z tą decyzją do momentu, kiedy Twój brat / Twoja siostra będzie bardziej samodzielny/samodzielna i niezależny/niezależna od rodziców.",
    ],
  },
  {
    q: "Czy mojemu bratu / mojej siostrze będzie ciężko żyć w Polsce jako osobie LGBT+?",
    a: [
      "Niestety Polska nie jest łatwym krajem do życia dla osób nieheteronormatywnych – zarówno z powodu homofobii, stereotypów i uprzedzeń, jak i braku podstawowych regulacji prawnych. Pary jednopłciowe wciąż nie mogą zawrzeć małżeństwa, wspólnie rozliczać podatku, objąć partnera/partnerki ubezpieczeniem zdrowotnym, dziedziczyć bez podatku czy wspólnie adoptować dzieci.",
      "Mimo to największą siłą jest wsparcie bliskich. Społeczeństwo się zmienia – a Ty masz wpływ na tempo tych zmian. Rozmawiaj, edukuj, reaguj, wybieraj partie opowiadające się za prawami osób LGBT+ i wspieraj tęczowe organizacje. A przede wszystkim pokaż swojemu bratu / swojej siostrze, że przy Tobie może być SOBĄ!",
    ],
  },
];

export default function PytaniaPage() {
  return (
    <>
      <PageHero
        eyebrow="Wasze pytania i odpowiedzi"
        title={
          <>
            Pytania, które <span className="text-gradient">warto zadać</span>
          </>
        }
        image={photo}
        imageAlt="Dwie uśmiechnięte młode kobiety siedzące na niebieskim fotelu"
      >
        <p>
          Zebraliśmy najczęstsze wątpliwości rodzeństwa osób LGBT+. Nie znajdziesz tu swojego pytania? Zadzwoń lub
          napisz – chętnie porozmawiamy.
        </p>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl">Najczęściej zadawane pytania</h2>
          <div className="mt-10 space-y-4">
            {faq.map((item, i) => (
              <details
                key={item.q}
                className="card group overflow-hidden transition-colors open:border-brand-200 open:shadow-lg open:shadow-brand-600/5"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-start gap-4 p-6 sm:p-7 [&::-webkit-details-marker]:hidden">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-sm font-extrabold text-brand-700 transition-colors group-open:bg-brand-600 group-open:text-white">
                    {i + 1}
                  </span>
                  <span className="flex-1 pt-1 text-lg leading-snug font-bold text-ink-900">{item.q}</span>
                  <ChevronDown
                    className="mt-1.5 size-5 shrink-0 text-ink-500 transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="space-y-4 px-6 pb-7 leading-relaxed text-ink-600 sm:pr-16 sm:pl-20">
                  {item.a.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <HelplineCard title="Nie znalazłeś/aś odpowiedzi? Zadzwoń">
          <p>
            Porozmawiaj z naszymi telefonistkami i telefonistami – pomożemy, podpowiemy i polecimy specjalistów
            przyjaznych osobom LGBT+ i ich bliskim.
          </p>
        </HelplineCard>
      </Section>
    </>
  );
}
