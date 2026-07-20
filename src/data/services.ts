/**
 * TAC Taxes service catalog.
 *
 * Source: `_source/DRAFT 2025 Services Catalog.xlsx` (client-provided, Apr 2025).
 * The spreadsheet is English-only; Spanish names are authored here.
 *
 * Notes on fidelity to the source:
 *  - Source typos corrected: "Quaterly" -> Quarterly, "Rentals fiding" -> Rentals finding,
 *    "FAFSA Aplication" -> FAFSA Application.
 *  - Sheet1 lists "Renewal" twice under Immigration with no qualifier. Disambiguated here
 *    by position (follows Work Permit / follows Permanent Residence). NEEDS CLIENT CONFIRMATION.
 *  - "DIGITAL MARKETING" appears as a family header with zero services. Omitted until defined.
 *  - The source PRICE column is empty ("Not needed yet"), so no pricing is modelled.
 */

export type Audience = 'individual' | 'business' | 'both';

export interface Service {
  slug: string;
  en: string;
  es: string;
  audience: Audience;
}

export interface ServiceFamily {
  slug: string;
  en: string;
  es: string;
  /** Short blurb shown on cards. */
  blurbEn: string;
  blurbEs: string;
  /** Surfaced as a primary card on the landing page. */
  featured: boolean;
  /**
   * Wording must be reviewed by counsel before publishing: these areas are
   * restricted to licensed/accredited practitioners (immigration, insurance,
   * real estate, IRS representation, drafting legal instruments).
   */
  legalReview?: boolean;
  services: Service[];
}

export const families: ServiceFamily[] = [
  {
    slug: 'tax-preparation',
    en: 'Tax Preparation',
    es: 'Preparación de Impuestos',
    blurbEn: 'Personal and business returns, ITIN, EIN, amendments, quarterly, sales and tangible property.',
    blurbEs: 'Personales y de negocio, ITIN, EIN, enmiendas, trimestrales, ventas y propiedad tangible.',
    featured: true,
    services: [
      { slug: 'individual-tax-preparation', en: 'Individual Tax Preparation', es: 'Preparación de Impuestos Personales', audience: 'individual' },
      { slug: 'itin', en: 'Individual Tax ID Request (ITIN)', es: 'Solicitud de Número ITIN', audience: 'individual' },
      { slug: 'business-tax-preparation', en: 'Business Tax Preparation', es: 'Preparación de Impuestos de Negocio', audience: 'business' },
      { slug: 'ein', en: 'Business Tax ID Request (EIN)', es: 'Solicitud de Número EIN', audience: 'business' },
      { slug: 'amended-returns', en: 'Amended Tax Returns', es: 'Declaraciones Enmendadas', audience: 'both' },
      { slug: 'quarterly-returns', en: 'Quarterly Tax Returns', es: 'Declaraciones Trimestrales', audience: 'business' },
      { slug: 'tangible-property', en: 'Tangible Property Tax Returns', es: 'Impuesto de Propiedad Tangible', audience: 'business' },
      { slug: 'sales-tax', en: 'Sales Tax Returns', es: 'Declaración de Impuesto sobre Ventas', audience: 'business' },
      { slug: 'tax-consultation', en: 'Consultation', es: 'Consulta', audience: 'business' },
    ],
  },
  {
    slug: 'tax-debt-relief',
    en: 'IRS Tax Debt Relief',
    es: 'Alivio de Deuda con el IRS',
    blurbEn: 'Payment plans, penalty abatement, offers in compromise, audits and wage garnishment.',
    blurbEs: 'Planes de pago, reducción de multas, ofertas de compromiso, auditorías y embargos de salario.',
    featured: true,
    legalReview: true,
    services: [
      { slug: 'currently-not-collectible', en: 'Currently Not Collectible', es: 'Estado de No Cobrable Actualmente', audience: 'both' },
      { slug: 'installment-plans', en: 'IRS Installment Plans', es: 'Planes de Pago con el IRS', audience: 'both' },
      { slug: 'penalty-abatement', en: 'Penalty Abatement', es: 'Reducción de Multas', audience: 'both' },
      { slug: 'offer-in-compromise', en: 'Offer In Compromise', es: 'Oferta de Compromiso', audience: 'both' },
      { slug: 'audit-representation', en: 'Audit Representation', es: 'Representación en Auditorías', audience: 'both' },
      { slug: 'dealing-with-irs', en: 'Dealing with the IRS', es: 'Gestiones ante el IRS', audience: 'both' },
      { slug: 'innocent-spouse', en: 'Innocent Spouse Relief', es: 'Alivio por Cónyuge Inocente', audience: 'individual' },
      { slug: 'injured-spouse', en: 'Injured Spouse', es: 'Cónyuge Perjudicado', audience: 'individual' },
      { slug: 'state-tax-relief', en: 'State Tax Relief', es: 'Alivio de Impuestos Estatales', audience: 'both' },
      { slug: 'statute-of-limitations', en: 'Statute of Limitations', es: 'Prescripción de la Deuda', audience: 'both' },
      { slug: 'tax-planning', en: 'Tax Prep and Planning', es: 'Preparación y Planificación Fiscal', audience: 'both' },
      { slug: 'unfiled-returns', en: 'Unfiled Tax Returns', es: 'Declaraciones No Presentadas', audience: 'both' },
      { slug: 'tax-discharge', en: 'IRS Tax Discharge', es: 'Cancelación de Deuda Tributaria', audience: 'both' },
      { slug: 'payroll-tax-relief', en: 'Payroll Tax Relief', es: 'Alivio de Impuestos de Nómina', audience: 'business' },
      { slug: 'wage-garnishment', en: 'Wage Garnishment Relief', es: 'Liberación de Embargo de Salario', audience: 'both' },
    ],
  },
  {
    slug: 'company-formation',
    en: 'Company Formation',
    es: 'Creación de Compañías',
    blurbEn: 'Basic and full registration, reinstatement, closure, minutes, agreements, licenses and permits.',
    blurbEs: 'Registro básico y completo, reinstalación, cierre, actas, acuerdos, licencias y permisos.',
    featured: true,
    services: [
      { slug: 'basic-registration', en: 'Business Basic Registration', es: 'Registro Básico de Compañía', audience: 'business' },
      { slug: 'full-registration', en: 'Business Full Registration', es: 'Registro Completo de Compañía', audience: 'business' },
      { slug: 'business-closure', en: 'Business Closure', es: 'Cierre de Compañía', audience: 'business' },
      { slug: 'business-reinstatement', en: 'Business Reinstatement', es: 'Reinstalación de Compañía', audience: 'business' },
      { slug: 'records-update', en: 'Business Records Update', es: 'Actualización de Registros', audience: 'business' },
      { slug: 'agencies-registration', en: 'Agencies Registration', es: 'Registro ante Agencias', audience: 'business' },
      { slug: 'business-agreements', en: 'Business Agreements', es: 'Acuerdos entre Socios', audience: 'business' },
      { slug: 'meeting-minutes', en: 'Meeting Minutes', es: 'Actas de Reunión', audience: 'business' },
      { slug: 'licenses-permits', en: 'Business Licenses and Permits', es: 'Licencias y Permisos de Negocio', audience: 'business' },
      { slug: 'formation-consultation', en: 'Consultation', es: 'Consulta', audience: 'business' },
    ],
  },
  {
    slug: 'accounting',
    en: 'Bookkeeping & Payroll',
    es: 'Contabilidad y Nómina',
    blurbEn: 'Monthly bookkeeping, payroll, 1099 processing, financial statements and QuickBooks setup.',
    blurbEs: 'Contabilidad mensual, nómina, formularios 1099, estados financieros e implementación de QuickBooks.',
    featured: true,
    services: [
      { slug: 'bookkeeping-mini', en: 'Bookkeeping — Mini', es: 'Contabilidad — Mini', audience: 'business' },
      { slug: 'bookkeeping-small', en: 'Bookkeeping — Small', es: 'Contabilidad — Pequeña', audience: 'business' },
      { slug: 'bookkeeping-medium', en: 'Bookkeeping — Medium', es: 'Contabilidad — Mediana', audience: 'business' },
      { slug: 'bookkeeping-large', en: 'Bookkeeping — Large', es: 'Contabilidad — Grande', audience: 'business' },
      { slug: 'yearly-expenses-report', en: 'Yearly Expenses Report', es: 'Reporte Anual de Gastos', audience: 'business' },
      { slug: '1099-processing', en: '1099 Processing', es: 'Procesamiento de Formularios 1099', audience: 'business' },
      { slug: 'payroll-small', en: 'Payroll Processing — Small', es: 'Nómina — Pequeña', audience: 'business' },
      { slug: 'payroll-medium', en: 'Payroll Processing — Medium', es: 'Nómina — Mediana', audience: 'business' },
      { slug: 'payroll-large', en: 'Payroll Processing — Large', es: 'Nómina — Grande', audience: 'business' },
      { slug: 'quickbooks-mini', en: 'QuickBooks Implementation — Mini', es: 'Implementación de QuickBooks — Mini', audience: 'business' },
      { slug: 'quickbooks-small', en: 'QuickBooks Implementation — Small', es: 'Implementación de QuickBooks — Pequeña', audience: 'business' },
      { slug: 'quickbooks-medium', en: 'QuickBooks Implementation — Medium', es: 'Implementación de QuickBooks — Mediana', audience: 'business' },
      { slug: 'quickbooks-large', en: 'QuickBooks Implementation — Large', es: 'Implementación de QuickBooks — Grande', audience: 'business' },
      { slug: 'financial-statements', en: 'Financial Statements', es: 'Estados Financieros', audience: 'business' },
      { slug: 'accounting-consultation', en: 'Consultation', es: 'Consulta', audience: 'business' },
    ],
  },
  {
    slug: 'legal-paperwork',
    en: 'Legal Paperwork',
    es: 'Trámites Legales',
    blurbEn: 'Notarizations, apostilles, travel authorizations, birth and marriage certificates, contracts.',
    blurbEs: 'Notarizaciones, apostillados, poderes de viaje, actas de nacimiento y matrimonio, contratos.',
    featured: true,
    legalReview: true,
    services: [
      { slug: 'notary-signature', en: 'Notary Signature', es: 'Firma Notarial', audience: 'individual' },
      { slug: 'apostille', en: 'Apostille', es: 'Apostillado', audience: 'individual' },
      { slug: 'poa-child-travel', en: 'POA Child Travel Authorization', es: 'Poder para Viaje de Menores', audience: 'individual' },
      { slug: 'birth-certificate', en: 'Birth Certificate', es: 'Acta de Nacimiento', audience: 'individual' },
      { slug: 'death-certificate', en: 'Death Certificate', es: 'Acta de Defunción', audience: 'individual' },
      { slug: 'marriage', en: 'Marriage', es: 'Matrimonio', audience: 'individual' },
      { slug: 'divorce', en: 'Divorce', es: 'Divorcio', audience: 'individual' },
      { slug: 'wills', en: 'Wills', es: 'Testamentos', audience: 'individual' },
      { slug: 'business-licenses', en: 'Licenses', es: 'Licencias', audience: 'business' },
      { slug: 'lease-agreements', en: 'Rent/Lease Agreements', es: 'Contratos de Renta y Arrendamiento', audience: 'business' },
      { slug: 'legal-contracts', en: 'Legal Contracts', es: 'Contratos Legales', audience: 'individual' },
    ],
  },
  {
    slug: 'irs-account-help',
    en: 'IRS Account Help',
    es: 'Ayuda con el IRS',
    blurbEn: 'ID.me account setup and management, full tax transcripts and online payments.',
    blurbEs: 'Apertura y manejo de su cuenta ID.me, historial completo de impuestos y pagos en línea.',
    featured: true,
    services: [
      { slug: 'irs-account-setup', en: 'IRS Account Setup (ID.me)', es: 'Apertura de Cuenta del IRS (ID.me)', audience: 'both' },
      { slug: 'irs-account-work', en: 'IRS Account Work (ID.me)', es: 'Manejo de Cuenta del IRS (ID.me)', audience: 'both' },
      { slug: 'full-tax-records', en: 'Full Tax Records', es: 'Historial Completo de Impuestos', audience: 'both' },
      { slug: 'online-tax-payments', en: 'Online Tax Payments', es: 'Pagos de Impuestos en Línea', audience: 'both' },
    ],
  },
  {
    slug: 'immigration',
    en: 'Immigration Assistance',
    es: 'Asistencia de Inmigración',
    blurbEn: 'Form preparation and filing support for work permits, residence, citizenship and family petitions.',
    blurbEs: 'Preparación y apoyo con formularios de permisos de trabajo, residencia, ciudadanía y peticiones familiares.',
    featured: false,
    legalReview: true,
    services: [
      { slug: 'parole', en: 'Parole', es: 'Parole', audience: 'individual' },
      { slug: 'work-permit', en: 'Work Permit', es: 'Permiso de Trabajo', audience: 'individual' },
      { slug: 'work-permit-renewal', en: 'Work Permit Renewal', es: 'Renovación de Permiso de Trabajo', audience: 'individual' },
      { slug: 'asylum', en: 'Asylum', es: 'Asilo', audience: 'individual' },
      { slug: 'permanent-residence', en: 'Permanent Residence', es: 'Residencia Permanente', audience: 'individual' },
      { slug: 'permanent-residence-renewal', en: 'Permanent Residence Renewal', es: 'Renovación de Residencia Permanente', audience: 'individual' },
      { slug: 'citizenship', en: 'Citizenship', es: 'Ciudadanía', audience: 'individual' },
      { slug: 'foia', en: 'FOIA Request', es: 'Solicitud FOIA', audience: 'individual' },
      { slug: 'tps', en: 'TPS', es: 'TPS', audience: 'individual' },
      { slug: 'family-reunification', en: 'Family Reunification (I-130)', es: 'Reunificación Familiar (I-130)', audience: 'individual' },
      { slug: 'adjustment-of-status', en: 'Adjustment of Status', es: 'Ajuste de Estatus', audience: 'individual' },
      { slug: 'fee-waiver', en: 'Fee Waiver (I-912)', es: 'Exención de Pago (I-912)', audience: 'individual' },
      { slug: 'affidavits', en: 'Affidavits', es: 'Declaraciones Juradas', audience: 'individual' },
      { slug: 'reference-letters', en: 'Reference Letters', es: 'Cartas de Referencia', audience: 'individual' },
    ],
  },
  {
    slug: 'insurance',
    en: 'Insurance Assistance',
    es: 'Asistencia con Seguros',
    blurbEn: 'Workers comp, general liability, home, renters, auto, life and health coverage.',
    blurbEs: 'Compensación laboral, responsabilidad general, casa, inquilino, auto, vida y salud.',
    featured: false,
    legalReview: true,
    services: [
      { slug: 'workers-comp', en: 'Workers Comp', es: 'Compensación Laboral', audience: 'business' },
      { slug: 'general-liability', en: 'General Liability', es: 'Responsabilidad General', audience: 'business' },
      { slug: 'home-insurance', en: 'Home Insurance', es: 'Seguro de Casa', audience: 'individual' },
      { slug: 'renters-insurance', en: 'Renters Insurance', es: 'Seguro de Inquilino', audience: 'individual' },
      { slug: 'auto-insurance', en: 'Auto Insurance', es: 'Seguro de Auto', audience: 'individual' },
      { slug: 'life-insurance', en: 'Life Insurance', es: 'Seguro de Vida', audience: 'individual' },
      { slug: 'health-insurance', en: 'Health Insurance', es: 'Seguro de Salud', audience: 'individual' },
    ],
  },
  {
    slug: 'auto-dmv',
    en: 'Auto & DMV',
    es: 'Trámites de Carros',
    blurbEn: 'Purchases, plates, rebuilt inspections, licence test appointments, titles and transfers.',
    blurbEs: 'Compras, placas, inspecciones de reconstruidos, citas de examen, títulos y transferencias.',
    featured: false,
    services: [
      { slug: 'auto-purchase', en: 'Auto Purchase', es: 'Compra de Auto', audience: 'individual' },
      { slug: 'license-plates', en: 'License Plates', es: 'Placas', audience: 'individual' },
      { slug: 'rebuilt-inspection', en: 'Rebuilt Car Inspection', es: 'Inspección de Auto Reconstruido', audience: 'individual' },
      { slug: 'drivers-license-test', en: 'Drivers License Test Appointment', es: 'Cita para Examen de Licencia', audience: 'individual' },
      { slug: 'bill-of-sale', en: 'Bill of Sale', es: 'Contrato de Compraventa', audience: 'individual' },
      { slug: 'state-transfers', en: 'State Transfers', es: 'Transferencia entre Estados', audience: 'individual' },
      { slug: 'title-signature', en: 'Title Signature', es: 'Firma de Título', audience: 'individual' },
    ],
  },
  {
    slug: 'real-estate',
    en: 'Real Estate',
    es: 'Bienes Raíces',
    blurbEn: 'Agent referrals, mortgages, title services and help finding a rental.',
    blurbEs: 'Referencias de agentes, hipotecas, servicios de título y ayuda para encontrar renta.',
    featured: false,
    legalReview: true,
    services: [
      { slug: 're-agent', en: 'Real Estate Agent', es: 'Agente de Bienes Raíces', audience: 'individual' },
      { slug: 'mortgages', en: 'Mortgages', es: 'Hipotecas', audience: 'individual' },
      { slug: 'title-services', en: 'Title Services', es: 'Servicios de Título', audience: 'individual' },
      { slug: 'rentals-finding', en: 'Rentals Finding', es: 'Búsqueda de Rentas', audience: 'individual' },
    ],
  },
  {
    slug: 'language',
    en: 'Translation & Interpretation',
    es: 'Traducción e Interpretación',
    blurbEn: 'Document translation and in-person or phone interpretation.',
    blurbEs: 'Traducción de documentos e interpretación en persona o por teléfono.',
    featured: false,
    services: [
      { slug: 'translation', en: 'Translation', es: 'Traducción', audience: 'both' },
      { slug: 'interpretation', en: 'Interpretation', es: 'Interpretación', audience: 'both' },
    ],
  },
  {
    slug: 'other-services',
    en: 'Other Services',
    es: 'Otros Servicios',
    blurbEn: 'Phone calls, filling out forms, typing letters, FAFSA applications and online payments.',
    blurbEs: 'Llamadas, llenado de formularios, redacción de cartas, solicitudes FAFSA y pagos en línea.',
    featured: false,
    services: [
      { slug: 'calls', en: 'Calls', es: 'Llamadas', audience: 'both' },
      { slug: 'fill-out-forms', en: 'Fill Out Forms', es: 'Llenado de Formularios', audience: 'both' },
      { slug: 'letters-typing', en: 'Letters Typing', es: 'Redacción de Cartas', audience: 'both' },
      { slug: 'fafsa', en: 'FAFSA Application', es: 'Solicitud de FAFSA', audience: 'individual' },
      { slug: 'online-payments', en: 'Online Payments', es: 'Pagos en Línea', audience: 'both' },
    ],
  },
];

export const featuredFamilies = families.filter((f) => f.featured);
export const otherFamilies = families.filter((f) => !f.featured);

export const totalServices = families.reduce((n, f) => n + f.services.length, 0);

export function familiesFor(audience: Exclude<Audience, 'both'>): ServiceFamily[] {
  return families
    .map((f) => ({ ...f, services: f.services.filter((s) => s.audience === audience || s.audience === 'both') }))
    .filter((f) => f.services.length > 0);
}
