# Phase 1 Implementation Spec

Implementation-ready detail for the Phase 1 items in `05-content-architecture-and-roadmap.md`. Written against the reconstructed Astro project in this PR (`src/layouts/BaseLayout.astro`, `src/components/`, `src/pages/`). **Nothing in this spec should be implemented until the content architecture and this PR's rebuilt source have both been reviewed and approved** — this is a ready-to-execute brief, not a go-ahead.

## 1. New page: `src/pages/hydronic-snow-melting.astro`

- Route: `/hydronic-snow-melting/`
- Use `BaseLayout.astro` with: `title="Hydronic Snow Melting Systems | MeltGrid Canada"`, `description` ≈155 chars summarizing coordinated hydronic design, `canonical` self-referential, same OG/Twitter pattern as existing pages
- JSON-LD: `WebPage` + `BreadcrumbList` + `Service` (with `areaServed` set from day one — don't repeat the gap found on the other 7 `Service` blocks) + `FAQPage` with the 6 FAQs from the content architecture doc
- Sections (reuse existing components where the pattern matches an existing page — e.g. `Faq.astro`, `StepList.astro`, `CtaStrip.astro`, `RelatedLinks.astro` from the rebuilt component set):
  1. Hero: H1 + one-line positioning + CTA
  2. "How it works" — boiler/heat source → glycol loop → PEX tubing → manifold → pump → sensor → controller, as a `StepList`
  3. "Where it goes" — asphalt / concrete / pavers, mirroring the pattern already used on `/snow-melting/*` pages but noting hydronic-specific install sequencing differences
  4. Mechanical room & gas supply — framed as "confirmed during your design," not a blanket technical claim
  5. Maintenance basics
  6. Coordination disclaimer block (reuse the same disclosure pattern already on `/about/`) — explicitly: MeltGrid designs and coordinates hydronic installations through manufacturer partners and licensed mechanical trades; MeltGrid does not manufacture equipment; no completed hydronic installation is claimed
  7. FAQ (`Faq.astro`)
  8. `RelatedLinks` → `/electric-vs-hydronic-snow-melting/`, `/cost/`, `/technology/`
  9. `CtaStrip` → `/contact/?surface=&intent=hydronic`
- **Before writing manufacturer-specific copy:** confirm with the business owner which of Watts/Uponor/HeatLink (if any) can be named as an actual partner right now. Default to generic "manufacturer-grade equipment" language if none is confirmed — do not name a manufacturer speculatively.
- Add this route to `astro.config.mjs`'s sitemap automatically (no manual sitemap edit needed — `@astrojs/sitemap` picks up any file under `src/pages/`)

## 2. New page: `src/pages/electric-vs-hydronic-snow-melting.astro`

- Route: `/electric-vs-hydronic-snow-melting/`
- JSON-LD: `WebPage` + `BreadcrumbList` + `FAQPage` (no `Service` — this is comparison/informational, matching the pattern already used correctly on `/how-it-works/`)
- Core content element: a comparison table/grid component (new, small — e.g. `ComparisonTable.astro`) with rows: typical upfront cost tendency, typical running-cost tendency, best-fit driveway size, installation complexity, electrical vs. gas/mechanical requirements, maintenance. Keep every cell qualitative/caveated ("tends to," "often") — no hard numbers that would contradict `/cost/`'s policy of not publishing fixed prices
- FAQ + CTA sections per the content architecture doc
- Internal links in from `/hydronic-snow-melting/`, `/cost/`, `/heated-driveways/`, `/resources/`

## 3. Improve: `src/pages/cost.astro`

- Add a new section after the existing "Six things that shape the cost" H2: a clearly-labelled indicative range block. Suggested copy pattern (confirm final numbers/ranges with the business owner before publishing — none are provided in this research, and the brief's $30/sqft hydronic figure must **not** be used as a published rate, only internally):
  > "Every property is assessed individually, but as a starting frame of reference: [range depends on coverage pattern and surface — confirm real ranges before publishing]. Your actual number depends on the six factors above."
- Add an "Ontario and the GTA" H2 with a short paragraph naming Toronto explicitly (serves the two real 500/mo local queries) and listing the broader service area
- Add a sentence + link to `/electric-vs-hydronic-snow-melting/` inside the existing "What affects running cost" section
- Add the response-time SLA line (see item 7 below) if the business wants it mirrored here as well as on `/contact/`

## 4. Improve: `src/pages/heated-driveways.astro`

- Add "Serving Ontario and the Greater Toronto Area" section with the city list from the content architecture doc
- Trim the sections flagged as overlapping `/residential/` in `02-website-audit.md` §3 (Group A) — specifically shorten any passage that re-explains "what is a heated driveway" from first principles if `/residential/` already says the same thing; link to `/heated-driveways/` from `/residential/` instead of repeating
- Add one line + link to `/hydronic-snow-melting/` wherever the page currently implies electric-only (e.g. in a "technology" or "options" section)

## 5. Improve: `src/pages/about.astro`

- Add a new section (title suggestion: "How we work with licensed trades") stating what MeltGrid verifies before assigning a trade to a project (licensing status, insurance) — phrase this as a **process MeltGrid follows**, not as a claim that MeltGrid itself holds any license. Do not invent specific license numbers or insurance amounts; use only what's actually true of MeltGrid's verification process
- Repeat the Ontario/GTA service-area statement near the top of the page (currently buried mid-page) and reference the same statement now also appearing on `/heated-driveways/` and `/cost/`
- Add a placeholder-but-real section for founder/company background if the business wants to supply it — do not fabricate years-in-business or a founding story

## 6. Improve: `src/pages/resources/index.astro`

- Add 1-2 sentences per existing guide link (electrical requirements / retrofit / running cost)
- Add `CollectionPage` + `ItemList` JSON-LD listing the 3 (soon 5, once Phase 3 articles ship) child articles
- No new copy needed beyond the framing sentences

## 7. Cross-cutting technical fixes (apply to `BaseLayout.astro` / shared components, not individual pages)

- **`areaServed`:** add to the `Service` JSON-LD builder used by `/commercial/`, `/heated-driveways/`, `/residential/`, `/snow-melting/{asphalt,concrete,pavers}/`, `/trade-partners/`, and the two new hydronic pages — e.g. `{"@type": "State", "name": "Ontario"}` or a GTA-specific `Place`, whichever the business prefers
- **`HowTo` schema on `/how-it-works/`:** the content is already a numbered process; add the schema block, no copy change needed
- **Footer heading fix:** in `Footer.astro`, change the "Solutions / By surface / Plan your project / Company" column headers from `<h2>` to non-heading markup (e.g. a visually-identical `<p>` or `<span>` with the same class) — purely markup, zero visual change
- **Retrofit FAQ consolidation:** on `/snow-melting/asphalt.astro`, `/snow-melting/concrete.astro`, `/snow-melting/pavers.astro`, replace the full "Can snow melting be added to an existing driveway?" FAQ answer with a one-line answer + a link to `/resources/existing-driveway-retrofit/`'s full treatment; remove the now-duplicate FAQ schema entries on those 3 pages so only the resources page carries the full answer
- **`/contact/` SLA line:** add one sentence near the top of `DesignRequestForm.astro`'s intro text (e.g. "We reply within 1 business day") — confirm the actual response time with the business owner before publishing a specific number

## What this spec deliberately does not do

It does not touch `DesignRequestForm.astro`'s or `TradePartnerForm.astro`'s submission logic, the Formspree endpoints, the GA4 tracking, or any existing page's URL — all Phase 1 changes are additive content/schema changes to pages this PR already rebuilt faithfully. Nothing here should be implemented against the live site directly; it should land as further commits on this same branch/PR (or a follow-up PR once this one merges), reviewed and approved the same way.
