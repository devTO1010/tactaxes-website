import { defaultLocale, type Locale } from '../data/site';

/**
 * Astro injects the configured `base` here. Every internal link and asset
 * reference must go through these helpers — hardcoding `/foo` breaks the
 * moment the site is served from a project subpath.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefix a root-relative path with the deploy base path. */
export function href(path = '/'): string {
  const clean = `/${path.replace(/^\/+/, '')}`;
  const joined = `${BASE}${clean}`.replace(/\/{2,}/g, '/');
  // trailingSlash: 'always' — keep directory-style URLs consistent.
  if (joined === '/' || /\.[a-z0-9]+$/i.test(joined) || joined.endsWith('/')) return joined;
  return `${joined}/`;
}

/** Root-relative, base-prefixed path for a page in a given locale. */
export function localeHref(path = '/', lang: Locale = defaultLocale): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = lang === defaultLocale ? '' : `${lang}/`;
  return href(`${prefix}${clean}`);
}

/** The same page in the other locale — used by the language switcher. */
export function otherLocale(lang: Locale): Locale {
  return lang === 'es' ? 'en' : 'es';
}
