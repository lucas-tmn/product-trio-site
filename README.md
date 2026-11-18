# Product trio site

Static landing page / portfolio for a three-person senior product team. Astro, EN and VI, GitHub Pages.

## Structure
- `src/styles/tokens/*.css`, `src/styles/components.css`: design-system files, copied as delivered (`fonts.css` replaces the Google Fonts import with self-hosted Fontsource fonts).
- `src/styles/layout.css`: page-level glue using tokens only.
- `src/components/{core,sections,cards}/*.astro`: components using the `.ds-*` classes.
- `src/content/en.json`, `vi.json`: all copy, same keys. EN is the source. `[bracketed]` text is a placeholder.
- `src/pages/[lang]/`: home, `work/example-case`, `insights/example-article`, `pricing` for `/en/` and `/vi/`.
- `design-system/`: reference copy of the design system (readme, guidelines, UI kit, JSX references).

## Run
```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Deploy
Push to `main`. In repo Settings > Pages, set Source to "GitHub Actions".

## Before launch
- Replace `[bracketed]` copy, `hello@example.com`, add portraits in `public/team/` (WebP, 4:5, ≤120KB) and set `photo` in the team content.
- Remove `<meta name="robots" content="noindex">` in `src/layouts/Base.astro`.
- The contact form opens the visitor's email app. Swap in a form service if a backend inbox is needed.
