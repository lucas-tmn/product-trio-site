# Product trio site

Landing page / portfolio for a three-person senior product team (Astro, static, GitHub Pages).

## Edit content
All copy lives in `src/data/content.json` (EN + VI side by side). Placeholders are marked `[...]`.
Team photos: drop files in `public/team/` and set `"photo": "team/name.jpg"`.

## Run
```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Deploy
Push to `main`. In repo Settings > Pages, set Source to "GitHub Actions".
