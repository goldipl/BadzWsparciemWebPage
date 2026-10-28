import { ArrowLeft } from "lucide-react";
import { ButtonLink, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section tone="tint">
      <div className="mx-auto flex max-w-xl flex-col items-center py-10 text-center">
        <p className="text-gradient text-8xl font-extrabold tracking-tight">404</p>
        <h1 className="mt-4 text-3xl">Nie znaleźliśmy tej strony</h1>
        <p className="mt-4 text-lg text-ink-600">Ale nadal jesteśmy tu dla Ciebie. Wróć na stronę główną.</p>
        <ButtonLink href="/" className="mt-8">
          <ArrowLeft className="size-4" aria-hidden />
          Strona główna
        </ButtonLink>
      </div>
    </Section>
  );
}
