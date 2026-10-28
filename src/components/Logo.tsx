import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="group inline-flex shrink-0 items-center gap-2.5" aria-label="Bądź Wsparciem – strona główna">
      <span className="bg-brand-gradient grid size-10 place-items-center rounded-2xl text-white shadow-lg shadow-brand-500/25 transition-transform group-hover:-rotate-6">
        <HeartHandshake className="size-5" aria-hidden />
      </span>
      <span className={`text-lg leading-none font-extrabold tracking-tight whitespace-nowrap ${inverted ? "text-white" : "text-ink-900"}`}>
        Bądź <span className={inverted ? "text-mint-300" : "text-gradient"}>Wsparciem</span>
      </span>
    </Link>
  );
}
