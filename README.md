# MeltGrid Canada

Astro source for [meltgridcanada.ca](https://meltgridcanada.ca).

## Requirements

- Node.js 22.22+ (the project pins `astro@7.4.1` to match what's available in CI; `astro@latest` requires Node 22.23.4+)

## Commands

| Command           | Action                                      |
| ------------------ | -------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`        | Start the local dev server                   |
| `npm run build`      | Build the static site to `dist/`             |
| `npm run preview`    | Preview the production build locally         |
| `npm run check`      | Type-check all `.astro`/`.ts` files          |

## Structure

- `src/pages/` — one file per route (18 content pages + `404.astro`)
- `src/layouts/BaseLayout.astro` — shared `<head>`, GA4 snippet, Organization JSON-LD, header/footer/sticky CTA
- `src/components/` — `Header`, `Footer`, `Breadcrumbs`, `AnalyticsEvents`, `HowItWorks`, `DesignRequestForm`,
  `TradePartnerForm`, and small content components (`Faq`, `CtaStrip`, `StepList`, `FeatureSplit`, `RelatedLinks`)
- `src/lib/analytics.ts` — `trackEvent()` wrapper around `window.gtag`
- `src/styles/global.css` — hand-written CSS design system (custom properties, BEM-ish class names)
- `public/` — favicons, `og-default.jpg`, `robots.txt`, the Google Search Console verification file, and
  `public/images/` (de-duplicated source photos, referenced with plain `<img>`)

`sitemap-index.xml` / `sitemap-0.xml` are generated at build time by `@astrojs/sitemap`, not stored as static files.
