// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * Production is the custom domain tactaxes.com on GitHub Pages, pinned by
 * public/CNAME. The site sits at the domain root, so there is no base path —
 * which keeps local dev and production identical.
 *
 * Both are overridable for a one-off preview build against the project URL:
 *   SITE_URL=https://devto1010.github.io BASE_PATH=/tactaxes-website npm run build
 *
 * Never hardcode a base path — a wrong one silently breaks every asset and
 * internal link on the deployed site.
 */
const SITE_URL = process.env.SITE_URL ?? 'https://tactaxes.com';
const BASE_PATH = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',

  // Spanish is the source language and lives at the root.
  // English is a translation at /en/. Both get real, indexable URLs.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-US', en: 'en-US' },
      },
    }),
  ],
});
