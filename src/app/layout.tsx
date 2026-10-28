import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bądź Wsparciem – dla rodzeństwa osób LGBT+",
    template: "%s · Bądź Wsparciem",
  },
  description:
    "Kampania społeczna Lambdy Warszawa dla rodzeństwa osób LGBT+. Dowiedz się, jak zrozumieć, wspierać i reagować, gdy Twój brat lub Twoja siostra robi coming out.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Bądź Wsparciem",
  },
};

export const viewport: Viewport = {
  themeColor: "#1d56f0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={jakarta.variable}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#tresc"
          className="sr-only z-[60] rounded-full bg-ink-900 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Przejdź do treści
        </a>
        <SiteHeader />
        <main id="tresc" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
