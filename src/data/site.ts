/**
 * Single source of truth for business facts.
 *
 * Everything here was verified against the client's own marketing graphics in
 * `_source/graphics/`, EXCEPT the fields marked UNCONFIRMED. Source materials
 * disagreed on several values; the conflicts and their resolutions are noted.
 */

export interface HoursEntry {
  dayEs: string;
  dayEn: string;
  opens?: string;
  closes?: string;
  closed?: boolean;
  /** Times are assumed, not confirmed by the client. Kept out of JSON-LD. */
  unconfirmed?: boolean;
}

/**
 * UNCONFIRMED times. The storefront door decal lists Mon–Sat with per-day hours
 * and Sunday CLOSED, but the photo resolution is too low to read the times.
 * One graphic claims "Abierto de Lunes a Domingo", contradicting the door.
 */
const hours: HoursEntry[] = [
  { dayEs: 'Lunes – Viernes', dayEn: 'Monday – Friday', opens: '09:00', closes: '18:00', unconfirmed: true },
  { dayEs: 'Sábado', dayEn: 'Saturday', opens: '09:00', closes: '14:00', unconfirmed: true },
  { dayEs: 'Domingo', dayEn: 'Sunday', closed: true },
];

export const site = {
  name: 'TAC Taxes',
  legalName: 'TAC Taxes',
  tagline: 'Simple · Accurate · Service',

  /** Supplied by client 2026-10-22; replaces (502) 964-5000 shown on the marketing graphics. */
  phone: '(502) 237-8222',
  phoneHref: 'tel:+15022378222',

  /** UNCONFIRMED: assumed same as the main line. WhatsApp appears on 4 of 16 graphics. */
  whatsapp: 'https://wa.me/15022378222',

  address: {
    street: '5751 Preston Hwy',
    unit: 'Suite 106',
    city: 'Louisville',
    region: 'KY',
    /** One graphic showed 49219 (a Michigan prefix). 40219 is correct for Preston Hwy. */
    postalCode: '40219',
    country: 'US',
  },

  mapsUrl: 'https://maps.google.com/?q=5751+Preston+Hwy+Suite+106+Louisville+KY+40219',

  hours,

  /** UNCONFIRMED: profile URLs not provided. Platforms confirmed from graphics. */
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
    tiktok: '',
  },

  /** First names visible on business cards in _source/graphics. Not full names or roles. */
  team: ['Teresa', 'Susana', 'Elena', 'Nini Johana', 'Monica', 'Mari', 'Lupe'],

  /** UNCONFIRMED: no credential evidence in any source material. Gates a third of the copy. */
  credentials: null as string[] | null,

  /** UNCONFIRMED: no founding date in any source material. */
  yearsInBusiness: null as number | null,
} as const;

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

/** Spanish lives at `/`, English at `/en/`. */
export function localePath(path: string, lang: Locale): string {
  const clean = path.replace(/^\/+/, '');
  return lang === defaultLocale ? `/${clean}` : `/en/${clean}`;
}
