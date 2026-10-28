# MeltGrid Canada — SEO Research & Content Strategy

Research completed 2026-10-28, in a Claude Code Cloud session, on branch `claude/cool-pasteur-acff1l` / PR #1 (draft — nothing here has been merged, deployed, or applied to the live site). This folder is the full research package requested alongside the Astro source reconstruction in this PR.

## Read in this order

1. **This file** — executive summary
2. `01-gap-analysis.md` — MeltGrid vs. competitors, 12 questions answered, top 10 fixes
3. `02-website-audit.md` — page-by-page audit of all 18 indexable MeltGrid pages
4. `03-competitor-audit.md` — 12 competitors scored against MeltGrid, with evidence
5. `04-keyword-research.csv` + `04-keyword-research-notes.md` — 139 keywords with **real** Google Ads Keyword Planner data (volume/competition/bid), merged with strategic mapping
6. `05-content-architecture-and-roadmap.md` — prioritized Phase 1/2/3 pages + 30/60/90-day plan
7. `06-phase1-implementation-spec.md` — implementation-ready detail for Phase 1, written against this PR's rebuilt Astro source
8. `07-conversion-and-lead-qualification.md` — form/lead-qualification recommendations
9. `raw-keyword-exports/` — the original Keyword Planner CSV/XLSX exports (provenance for #5), plus the earlier qualitative-only keyword pass (superseded once real data arrived)

## Executive summary

### Where the site stands today
The live MeltGrid site (recovered and audited from a 2026-09-22 compiled-build extraction, since no Astro source existed in this repo before this PR — see the PR description) is **technically strong and currently invisible**. All 18 pages have clean, unique titles/meta, consistent canonicals, no broken links, no accidental `noindex`, responsive images with real alt text, and FAQ/Service/BreadcrumbList schema on nearly every page — a better technical foundation than anything confirmed for any of the 12 competitors audited. But the competitor audit's live searches today found **zero organic visibility for MeltGrid**, including a search for its own brand name. The site's problem right now isn't quality, it's that it's new and unindexed.

### The competitive landscape
12 competitors were audited (8 specified in the brief, 4 more found via live search and confirmed ranking today). The market leader by visibility, Action Home Services, wins mainly on accumulated trust signals (2,000+ claimed reviews, awards, an active PR program) and a full cost/value content cluster — not page quality. Precision Landscaping has the strongest city-level SEO footprint (8 GTA municipalities) and is the only competitor publishing specific $/sqft pricing. Four competitors (EC Mechanical, Toronto Air Systems, The Boiler Guys, InFloor Heat) have real hydronic engineering content; MeltGrid has none. Full detail and a 1-10 scored matrix across 10 criteria: `03-competitor-audit.md`.

### The keyword opportunity, with real numbers
A Google Ads Keyword Planner export (user-provided, logged-in account, Canada-national with Ontario/GTA sub-queries, Oct 2025-Sep 2026) confirmed:
- **"heated driveway" and "heated driveway cost" each average 5,000/mo nationally** — by far the two largest real numbers in the dataset, and they map directly to MeltGrid's two most important existing pages (`/heated-driveways/`, `/cost/`).
- **Hydronic terms are real but modest** (~1,300/mo aggregate across 28 phrasings, individually ~50/mo, Low-Medium Ads competition) — small next to the ~20,550/mo core driveway cluster, but genuine, low-competition, and a complete gap on MeltGrid's own site today.
- **"Heated driveway mats"-style consumer phrasing carries ~6,250/mo** and isn't addressed by that name anywhere on-site.
- Local/city terms only show real volume at the Ontario and Toronto level (500/mo each); every individual GTA suburb returned too little to size confidently — this does **not** support building 8+ separate city pages the way Precision Landscaping has.

Full 139-row dataset: `04-keyword-research.csv`.

### The hydronic opportunity
The brief's Markham enquiry (~1,650 sq ft, did not proceed) and the competitive/keyword findings above point the same direction: hydronic is real demand, genuinely low-competition, and a category no competitor combines with MeltGrid's actual differentiator — coordinating **both** system types and the trades needed to install them, across one relationship. Every audited competitor is a single-trade or single-system specialist, or a thin add-on service inside a general contractor's site. This positioning is currently unclaimed and matches what MeltGrid's own `/about/` and `/trade-partners/` pages already say — it just isn't backed by any hydronic content yet.

### Biggest weaknesses
1. Zero hydronic content despite hydronic coordination being part of the actual business.
2. Zero reviews/testimonials/project evidence — the site explicitly (and honestly) discloses that all imagery is manufacturer stock, not MeltGrid's own installs.
3. Content redundancy: the same retrofit-FAQ answer is duplicated near-verbatim across 4 pages; `/heated-driveways/`, `/residential/`, and `/cost/` overlap more than they need to.
4. `/about/` and `/resources/` — the two pages doing the most trust-building work — are the thinnest pages on the site.
5. `/cost/` gives zero numeric anchor, which risks losing the 5,000/mo "heated driveway cost" searchers before they reach the form.

### Recommended priorities (Phase 1)
1. Build real hydronic content: a pillar page (`/hydronic-snow-melting/`) and an electric-vs-hydronic comparison page — the single highest-strategic-value gap.
2. Add a caveated cost range + Ontario/Toronto section to `/cost/`.
3. Tighten `/heated-driveways/` vs. `/residential/` overlap and add its own GTA section.
4. Five quick technical fixes (schema gaps, a sitewide footer heading bug, duplicate retrofit FAQs) — cheap, fast, no new copy needed for most.
5. Expand `/about/` with real trust/coordination proof points.
6. Add a budget-range question and an electric/hydronic/"not sure" question to the existing 5-step lead form — directly addresses the brief's own example of a cancelled enquiry after unqualified pricing work.

Full detail, Phase 2/3, and the 30/60/90-day plan: `05-content-architecture-and-roadmap.md`. Implementation-ready specs for everything above: `06-phase1-implementation-spec.md`.

### Expected business impact (assumptions labelled)
- *Assumption:* once this PR's Astro rebuild is reviewed, approved and deployed, and the sitemap is resubmitted, indexing should begin within the normal several-day-to-few-week range for a small static site — nothing in this plan produces results while the site remains unindexed, which is the current state.
- *Assumption:* the ~20,550/mo core driveway cluster and ~13,750/mo cost cluster are national Canada numbers, not GTA-only — actual addressable GTA search volume is a fraction of that ceiling, not the number itself.
- *Assumption:* hydronic content's value is more strategic (differentiation, a real enquiry type MeltGrid already receives) than volume-driven (~1,300/mo nationally is modest) — it should be resourced as a credibility/positioning investment, not evaluated purely on projected search traffic.
- No fabricated traffic, ranking, or revenue projections are given anywhere in this research, per the brief's own research-quality rules.

## What still needs to be done outside this session

This cloud session has no access to the user's local browser, so three pieces of the original brief are incomplete and need to be finished by the business owner (or in a session with real access):

1. **Google Search Console** — queries/impressions/clicks/positions, indexed-page status, and canonical/mobile-usability signals were never retrieved. The brief itself notes GSC was "still processing" as of 2026-10-26; a fresh pull is needed once this PR's rebuild ships and the sitemap is resubmitted.
2. **Google Analytics** — the Sep 30-Oct 27 2026 snapshot (10 active users, 9 new, 57 events, ~16s engagement) in the brief was not independently re-verified, and whether the enquiry form fires as a tracked conversion event was not confirmed. The `DesignRequestForm` in this PR already fires `design_form_start/step/submit/success` GA4 events — worth checking in GA4 whether any of those are currently marked as a Conversion.
3. **A GTA-geo-targeted Keyword Planner pull.** The real keyword data used here (`04-keyword-research.csv`) is Canada-national with some manually-added local queries, not a true GTA-only location setting. This matters most for re-testing whether individual city pages are justified (see `04-keyword-research-notes.md`'s outstanding-gap note) and for sharpening local-intent volume generally.
4. **A real Lighthouse/PageSpeed Insights run** against the deployed site (Core Web Vitals could not be measured from static file inspection alone — see `02-website-audit.md`'s technical SEO section).

Everything else in the original brief — the live-site audit, the 8 specified competitors plus 4 more discovered, keyword clustering and prioritization, the gap analysis, and the Phase 1-3 content architecture — is complete in the files above.
