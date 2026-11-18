# Astro handoff
1. Copy `tokens/*.css` and `components.css` into `src/styles/`; import once in the base layout: `import '../styles/index.css'` where index.css = the @import list from styles.css (remove the Google Fonts import).
2. Self-host fonts: `npm i @fontsource-variable/plus-jakarta-sans @fontsource-variable/inter`, import both **including the vietnamese subset** (`@fontsource-variable/inter/wght.css` ships all subsets; subset-only imports: `vietnamese-wght.css`). Preload the latin files; `font-display: swap`.
3. Rebrand: change only the base palette values in tokens/colors.css; roles (`--color-*`) stay.
4. Tokens JSON: `tokens/tokens.json` (Style Dictionary / Tailwind theme input).
5. Components: JSX files are reference; in Astro write `.astro` components with the same `.ds-*` classes and props. Interactive bits (mobile menu, lang toggle, filters) need ≤40 lines of vanilla JS; see ui_kits/website/index.html.
6. i18n: Astro i18n routing /en/ and /vi/; content in two collections with the same keys; EN is source.
7. Performance: 2 font families only, no JS framework required, images WebP ≤120KB with width/height, no video.
