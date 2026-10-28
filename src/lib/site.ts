export const navItems = [
  { href: "/", label: "Strona główna" },
  { href: "/kompendium-wiedzy/", label: "Kompendium wiedzy" },
  { href: "/historie/", label: "Historie" },
  { href: "/teczowe-inicjatywy/", label: "Tęczowe inicjatywy" },
  { href: "/pytania/", label: "Pytania i odpowiedzi" },
] as const;

export const helpline = {
  display: "22 628 52 22",
  tel: "+48226285222",
  hours: "pon.–pt. 18:00–21:00",
};

export const emails = {
  counseling: "poradnictwo@lambdawarszawa.org",
  hubert: "hpajaczkowski@lambdawarszawa.org",
  katarzyna: "kiwon@lambdawarszawa.org",
};

export const coordinators = [
  { name: "Hubert Pajączkowski", role: "koordynator kampanii społecznej", email: emails.hubert },
  { name: "Katarzyna Iwon", role: "koordynatorka kampanii społecznej", email: emails.katarzyna },
];
