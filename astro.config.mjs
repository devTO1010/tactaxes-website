// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * Deploy targets
 * --------------
 * GitHub Pages project site (preview, default):
 *   SITE_URL=https://<user>.github.io  BASE_PATH=/tactaxes-website
 *
 * Custom domain (production, after DNS cutover):
 *   SITE_URL=https://tactaxes.com      BASE_PATH=/
 *
 * The deploy workflow sets these. Never hardcode — a wrong base path silently
 * breaks every asset and internal link on the deployed site.
 */
const SITE_URL = process.env.SITE_URL ?? 'https://devto1010.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/tactaxes-website';

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
