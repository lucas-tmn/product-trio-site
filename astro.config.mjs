import { defineConfig } from 'astro/config';

// GitHub Pages: set SITE and BASE via env in CI (see .github/workflows/deploy.yml).
// Local dev uses defaults below.
export default defineConfig({
  site: process.env.SITE || 'http://localhost:4321',
  base: process.env.BASE || '/',
});
