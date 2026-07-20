# TAC Taxes — Website

Marketing site for TAC Taxes, a tax, business and paperwork firm in Louisville, KY
serving the local Latino community.

**Spanish is the source language.** English is a translation. Roughly every piece of
the client's own marketing is in Spanish, so Spanish lives at `/` and English at `/en/`.
Both are real, indexable URLs with `hreflang` — not a JavaScript toggle.

## Stack

| | |
|---|---|
| Framework | Astro 7 (static output, **zero JS shipped**) |
| Styling | Tailwind v4 (CSS-first `@theme` in `src/styles/global.css`) |
| Fonts | Poppins + Inter, self-hosted via Fontsource — no external request |
| Hosting | GitHub Pages via `.github/workflows/deploy.yml` |

Zero client-side JavaScript is a deliberate choice, not a side effect: a large share
of this audience browses on mid-range Android phones over cell data.

## Commands

```sh
npm install
npm run dev      # localhost:4321/tactaxes-website/
npm run build    # -> dist/
npm run preview  # serve dist/ locally
```

## Project layout

```
src/
  data/services.ts   103 services / 12 families, bilingual  <- content spine
  data/site.ts       business facts (address, phone, hours) <- single source of truth
  i18n/ui.ts         UI strings, es + en
  lib/url.ts         base-path + locale URL helpers
  layouts/Base.astro meta, hreflang, JSON-LD
  components/        Header, Landing, Footer, MobileBar, Icon, Logo
  pages/index.astro  ES   |   pages/en/index.astro  EN
_source/             client raw materials — GITIGNORED, see below
public/images/       web-ready photography cropped from _source
```

### Why `_source/` is gitignored

Free GitHub Pages requires a **public** repo. `_source/` holds the client's *internal*
draft services catalog — which has unpublished pricing and department-owner columns —
plus raw marketing artwork. That's theirs to publish, not ours. Web-ready derivatives
belong in `public/images/`.

## Deploying

The workflow builds on push to `main`. Base path and canonical host come from env vars —
**never hardcode them**, a wrong base path silently breaks every asset and link.

**Preview (current default)**
```
SITE_URL=https://<owner>.github.io
BASE_PATH=/tactaxes-website
```

**Production, after DNS cutover**
```
SITE_URL=https://tactaxes.com
BASE_PATH=/
```
…and add `public/CNAME` containing `tactaxes.com`.

### ⚠️ Before touching DNS

`tactaxes.com` is **live today**, and the client's staff email runs on that domain
(`nini.b@tactaxes.com` appears on a business card in their own marketing photos).

1. Get the current DNS zone file before changing anything.
2. **Carry the MX records across.** If the nameservers move without them, staff email
   goes dark — that takes out the business's inbox, not just its website.
3. Ship to the `github.io` preview URL and get client sign-off first.
4. Cut DNS only when they're ready for the old site to disappear.

## Open questions — blocking

Unconfirmed values live in `src/data/site.ts` and the build prints a warning listing
them on every run. Nothing guessed is published to structured data.

| Item | Status |
|---|---|
| **Credentials** — EA, CPA, notary commission, insurance/real-estate licence, DOJ accreditation | **Blocking.** Gates the wording on Immigration (14 services), Insurance, Real Estate and IRS representation. |
| Office hours | Door decal confirms Mon–Sat open / Sunday closed, but the photo is too low-res to read the times. Times on the page are assumed and **omitted from JSON-LD** so Google can't send anyone to a closed office. |
| WhatsApp number | Assumed same as the main line. |
| Years in business | Unknown — the stat is omitted rather than invented. |
| Social profile URLs | Platforms confirmed (FB, IG, YouTube, TikTok); URLs not supplied. Icons render only when a URL exists. |
| Reviews | None published. No testimonials are fabricated, and `aggregateRating` is deliberately absent — fake ratings are both dishonest and a Google penalty. |

### Legal review required before launch

Several service families are restricted to licensed or accredited practitioners.
Families needing counsel sign-off are flagged `legalReview: true` in `src/data/services.ts`:

- **Immigration** — only attorneys or DOJ-accredited representatives may advise.
  The term *notario* reads as "lawyer" to this audience and is separately regulated.
- **Insurance**, **Real Estate** — state licensure.
- **IRS debt relief** — Circular 230 requires an EA, CPA or attorney to represent a taxpayer.
- **Wills / contracts / divorce** — unauthorized-practice-of-law exposure.

## Source data notes

`src/data/services.ts` is derived from `_source/DRAFT 2025 Services Catalog.xlsx`.
Corrections applied to the source: `Quaterly`→Quarterly, `Rentals fiding`→finding,
`FAFSA Aplication`→Application. The sheet lists "Renewal" twice under Immigration with
no qualifier — disambiguated by position and **needs client confirmation**. A
`DIGITAL MARKETING` family header exists with zero services and is omitted.

Contact details were reconciled across 16 marketing graphics that disagreed with
each other: phone `(502) 964-5000` (one graphic showed 764), ZIP `40219`
(one showed 49219, a Michigan prefix).
