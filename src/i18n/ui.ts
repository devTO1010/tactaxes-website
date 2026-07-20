import type { Locale } from '../data/site';

/**
 * UI strings. Spanish is the source language — English is the translation.
 * Keep keys flat and descriptive; every key must exist in both locales.
 */
export const ui = {
  es: {
    'nav.individuals': 'Personas',
    'nav.businesses': 'Negocios',
    'nav.services': 'Servicios',
    'nav.why': 'Por qué nosotros',
    'nav.visit': 'Visítanos',
    'nav.langLabel': 'English',

    'meta.title': 'TAC Taxes — Impuestos, Negocios y Trámites en Louisville, KY',
    'meta.description':
      'Preparación de impuestos, creación de compañías, contabilidad y trámites legales en Louisville, KY. Hablamos español. Abrimos todo el año.',

    'hero.badge1': 'Hablamos español',
    'hero.badge2': 'Abrimos todo el año',
    'hero.title1': 'Todo lo que necesita,',
    'hero.title2': 'en un solo lugar.',
    'hero.body':
      'Impuestos, creación de compañías, contabilidad y trámites legales. Profesionales que le explican cada paso en su idioma — sin sorpresas y sin letra pequeña.',
    'hero.callCta': 'Llamar ahora',
    'hero.whatsappCta': 'Escribir por WhatsApp',
    'hero.stat1': 'servicios bajo un mismo techo',
    'hero.stat2': 'años sirviendo a Louisville',
    'hero.stat3': 'asesoras en nuestra oficina',
    'hero.imageAlt': 'Oficina de TAC Taxes en 5751 Preston Hwy, Louisville, Kentucky',

    'doors.eyebrow': 'Empiece aquí',
    'doors.title': '¿Qué necesita hoy?',
    'doors.individuals.title': 'Para Personas',
    'doors.individuals.body': 'Su declaración de impuestos, su ITIN, cartas del IRS, notarizaciones y trámites personales.',
    'doors.individuals.cta': 'Ver servicios para personas',
    'doors.businesses.title': 'Para Negocios',
    'doors.businesses.body': 'Abra su compañía, mantenga sus libros al día y cumpla con el IRS sin preocupaciones.',
    'doors.businesses.cta': 'Ver servicios para negocios',

    'services.eyebrow': 'Nuestros servicios',
    'services.title': 'Un solo equipo para todo su papeleo',
    'services.lede': 'No tiene que ir a cinco oficinas distintas. Aquí resolvemos lo suyo de principio a fin.',
    'services.moreTitle': 'Y también le ayudamos con…',
    'services.moreBody': 'Más áreas de servicio para que no tenga que buscar en otro lado.',
    'services.count': 'servicios',

    'trust.eyebrow': 'Por qué TAC Taxes',
    'trust.title': 'Nunca firme un documento que no entiende.',
    'trust.body':
      'Cada año vemos familias que pagaron de más, perdieron su reembolso o firmaron algo que nunca les explicaron. Aquí le decimos qué estamos haciendo, por qué, y cuánto cuesta — antes de empezar.',
    'trust.p1.title': 'Todo en español',
    'trust.p1.body': 'Nuestro equipo le atiende en su idioma, de principio a fin.',
    'trust.p2.title': 'Abrimos todo el año',
    'trust.p2.body': 'No desaparecemos en abril. Si llega una carta del IRS, aquí estamos.',
    'trust.p3.title': 'Oficina física en Preston Hwy',
    'trust.p3.body': 'Puede venir, sentarse con nosotros y ver a la persona que maneja su caso.',
    'trust.p4.title': 'Un equipo que ya conoce',
    'trust.p4.body': 'Las mismas personas atendiendo a la comunidad, año tras año.',
    'trust.teamLabel': 'Nuestro equipo',
    'trust.imageAlt': 'Tarjetas de presentación del equipo de TAC Taxes en la oficina',

    'visit.eyebrow': 'Visítanos',
    'visit.title': 'Estamos en Preston Highway',
    'visit.hours': 'Horario',
    'visit.closed': 'Cerrado',
    'visit.callOrWhatsapp': 'Llame o escríbanos por WhatsApp',
    'visit.directions': 'Cómo llegar',
    'visit.mapLabel': 'Mapa de la oficina',

    'footer.blurb': 'Impuestos, negocios y trámites para la comunidad de Louisville.',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',

    'mobile.call': 'Llamar',
  },

  en: {
    'nav.individuals': 'Individuals',
    'nav.businesses': 'Businesses',
    'nav.services': 'Services',
    'nav.why': 'Why us',
    'nav.visit': 'Visit us',
    'nav.langLabel': 'Español',

    'meta.title': 'TAC Taxes — Tax, Business & Paperwork Services in Louisville, KY',
    'meta.description':
      'Tax preparation, company formation, bookkeeping and legal paperwork in Louisville, KY. We speak Spanish. Open year-round.',

    'hero.badge1': 'We speak Spanish',
    'hero.badge2': 'Open year-round',
    'hero.title1': 'Everything you need,',
    'hero.title2': 'in one place.',
    'hero.body':
      'Taxes, company formation, bookkeeping and legal paperwork. Professionals who explain every step in your language — no surprises, no fine print.',
    'hero.callCta': 'Call now',
    'hero.whatsappCta': 'Message on WhatsApp',
    'hero.stat1': 'services under one roof',
    'hero.stat2': 'years serving Louisville',
    'hero.stat3': 'advisors in our office',
    'hero.imageAlt': 'TAC Taxes office at 5751 Preston Hwy, Louisville, Kentucky',

    'doors.eyebrow': 'Start here',
    'doors.title': 'What do you need today?',
    'doors.individuals.title': 'For Individuals',
    'doors.individuals.body': 'Your tax return, your ITIN, IRS letters, notarizations and personal paperwork.',
    'doors.individuals.cta': 'See services for individuals',
    'doors.businesses.title': 'For Businesses',
    'doors.businesses.body': 'Open your company, keep your books current and stay compliant with the IRS.',
    'doors.businesses.cta': 'See services for businesses',

    'services.eyebrow': 'Our services',
    'services.title': 'One team for all your paperwork',
    'services.lede': "You don't need to visit five different offices. We handle it end to end.",
    'services.moreTitle': 'We can also help you with…',
    'services.moreBody': 'More service areas, so you never have to look elsewhere.',
    'services.count': 'services',

    'trust.eyebrow': 'Why TAC Taxes',
    'trust.title': "Never sign a document you don't understand.",
    'trust.body':
      "Every year we meet families who overpaid, lost their refund, or signed something nobody explained. Here, we tell you what we're doing, why, and what it costs — before we start.",
    'trust.p1.title': 'Everything in Spanish',
    'trust.p1.body': 'Our team serves you in your language, start to finish.',
    'trust.p2.title': 'Open year-round',
    'trust.p2.body': "We don't disappear in April. If an IRS letter arrives, we're here.",
    'trust.p3.title': 'A real office on Preston Hwy',
    'trust.p3.body': 'Come in, sit down with us, and meet the person handling your case.',
    'trust.p4.title': 'A team you already know',
    'trust.p4.body': 'The same people serving this community, year after year.',
    'trust.teamLabel': 'Our team',
    'trust.imageAlt': 'TAC Taxes team business cards in the office',

    'visit.eyebrow': 'Visit us',
    'visit.title': 'Find us on Preston Highway',
    'visit.hours': 'Hours',
    'visit.closed': 'Closed',
    'visit.callOrWhatsapp': 'Call or message us on WhatsApp',
    'visit.directions': 'Get directions',
    'visit.mapLabel': 'Office map',

    'footer.blurb': 'Taxes, business and paperwork for the Louisville community.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    'mobile.call': 'Call',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui.es[key];
  };
}
