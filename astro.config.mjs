// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ REPLACE with your real domain once you have one. This value is used for
  // canonical URLs, Open Graph tags and the generated sitemap — a wrong value
  // here silently breaks all three. Keep it in sync with `url` in src/data/site.ts.
  site: 'https://azim-portfolio.vercel.app',

  integrations: [sitemap()],

  build: {
    // One stylesheet instead of many small ones. On a site this size a single
    // request beats parallelism.
    inlineStylesheets: 'auto',
  },
});
