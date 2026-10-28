"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { helpline, navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return href === "/" ? normalized === "/" : normalized === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/70 bg-white/80 backdrop-blur-xl">
      <div className="bg-brand-gradient h-1" />
      <div className="container-page flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Główna nawigacja" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                      active ? "bg-brand-50 text-brand-700" : "text-ink-600 hover:bg-brand-50/60 hover:text-ink-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={`tel:${helpline.tel}`}
          className="hidden items-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-700 xl:inline-flex"
        >
          <Phone className="size-4" aria-hidden />
          {helpline.display}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          className="grid size-11 place-items-center rounded-2xl border border-brand-100 bg-white text-ink-900 lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Menu mobilne" className="border-t border-brand-100 bg-white lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-2xl px-4 py-3 font-semibold ${
                      active ? "bg-brand-50 text-brand-700" : "text-ink-700 hover:bg-brand-50/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={`tel:${helpline.tel}`}
                className="bg-brand-gradient flex items-center justify-center gap-2 rounded-2xl px-4 py-3 font-semibold text-white"
              >
                <Phone className="size-4" aria-hidden />
                Telefon zaufania: {helpline.display}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
