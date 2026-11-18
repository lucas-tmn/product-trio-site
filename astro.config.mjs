import { defineConfig } from 'astro/config';

// GitHub Pages: SITE and BASE are set in CI (see .github/workflows/deploy.yml).
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    routing: { prefixDefaultLocale: true },
  },
});
