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
npm run dev      # localhost:4321
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

Push to `main` → GitHub Actions builds and publishes to GitHub Pages at
**https://tactaxes.com**. The domain is pinned by `public/CNAME`; the workflow sets
`SITE_URL` and `BASE_PATH` to match. Those three must always agree — if they drift,
canonical URLs, hreflang and the sitemap point at a host that isn't serving the site.

The build fails deliberately if `dist/CNAME` is missing. Astro wipes `dist/` on every
build, and a missing CNAME makes Pages silently drop the custom domain and fall back
to `*.github.io` — a failure that looks like DNS and wastes hours.

For a one-off preview build against the project URL:

```sh
SITE_URL=https://devto1010.github.io BASE_PATH=/tactaxes-website npm run build
```

### DNS

DNS is at GoDaddy (`ns49/ns50.domaincontrol.com`) and **stays there**. Only the web
records change:

| Type | Name | Value |
|---|---|---|
| A | `@` | `185.199.108.153` `.109` `.110` `.111` |
| AAAA | `@` | `2606:50c0:8000::153` … `8003::153` |
| CNAME | `www` | `devto1010.github.io.` |

**Everything else in the zone must survive untouched.** The domain carries a live
Microsoft 365 tenant (MX, `autodiscover`, `enterpriseregistration`,
`enterpriseenrollment`, SPF, MS verification TXT), Mailgun on the `reply` subdomain,
Keap/Infusionsoft (`nfh*`), DMARC and Google site verification. None of it conflicts
with the web records.

GitHub Pages was chosen over Cloudflare Pages specifically because it publishes real
A records. A CNAME cannot exist at a zone apex, and GoDaddy has no ALIAS/ANAME
flattening — so Cloudflare would have required migrating nameservers and hand-copying
that entire M365 configuration. Not worth the risk to save a redirect.

**Turn GoDaddy Forwarding off before editing DNS.** The old apex A records
(`15.197.225.128`, `3.33.251.168`) are the Forwarding service, not hand-entered
records. Leave it on and GoDaddy re-adds them.

### History

`tactaxes.com` used to forward to `taxhelplouisville.com`, a Pressable-hosted site the
client lost access to. That host now returns 404 behind a mismatched TLS certificate,
so the domain on all their signage was serving a browser security warning. This site
replaces it, and `tactaxes.com` becomes canonical rather than redirecting away.

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
