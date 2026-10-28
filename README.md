# Bądź Wsparciem

Strona kampanii społecznej Stowarzyszenia Lambda Warszawa dla rodzeństwa osób LGBT+ – jak zrozumieć, wspierać i reagować.

## Technologie

- [Next.js](https://nextjs.org/) (App Router, statyczny eksport)
- React + TypeScript
- Tailwind CSS v4
- [Lucide](https://lucide.dev/) – ikony

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # statyczna strona w katalogu out/
```

## Struktura

```
src/
  app/                 # strony (/, /kompendium-wiedzy, /historie, /teczowe-inicjatywy, /pytania)
  components/          # nagłówek, stopka, hero, wspólne elementy UI
  lib/site.ts          # nawigacja i dane kontaktowe
  assets/              # zdjęcia, okładki publikacji, logotypy
```

## Deploy

Workflow `.github/workflows/deploy.yml` buduje stronę i publikuje ją na GitHub Pages przy każdym pushu do `master`
(w ustawieniach repozytorium: *Settings → Pages → Source: GitHub Actions*).

## Autor

Marcin Godlewski

## Live :star2:

https://goldipl.github.io/BadzWsparciemWebPage/
