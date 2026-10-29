# MeltGrid Canada — SEO Research & Content Strategy

Research started 2026-10-28, updated and finalized 2026-10-29, in a Claude Code Cloud session, on branch `claude/cool-pasteur-acff1l` / PR #1 (draft — nothing here has been merged, deployed, or applied to the live site). This folder is the full research package requested alongside the Astro source reconstruction in this PR. **This second pass validates and corrects the first pass's findings (see "Where the site stands today" below) rather than repeating the underlying research** — no new competitor fetches, no new website crawl, no new Keyword Planner pull were run; this update works from the same source material plus the business owner's GSC/customer evidence and a second keyword export covering the full 628-row dataset.

## Read in this order

1. **This file** — executive summary
2. `01-gap-analysis.md` — MeltGrid vs. competitors, 12 questions answered, top 10 fixes (visibility framing corrected 2026-10-29)
3. `02-website-audit.md` — page-by-page audit of all 18 indexable MeltGrid pages
4. `03-competitor-audit.md` — original 12-competitor audit with evidence (correction note added at top); `03a-competitor-comparison-final.md` — the **final 10-competitor comparison** across the specific dimensions requested in this round, with named weaknesses MeltGrid can realistically outperform
5. Keyword package: `04-keyword-research.csv` (139-row master, corrected — see below), `04a-top30-keyword-opportunities.csv` (**the final Top 30**, scored), `04b-keyword-validation-findings.md` (duplicates/irrelevant terms/questionable metrics/workbook discrepancies found and fixed), `04c-keyword-to-page-mapping.md` (9 keyword clusters → pages, not 139 separate targets)
6. `05-content-architecture-and-roadmap.md` — prioritized Phase 1/2/3 pages + 30/60/90-day plan
7. `06-phase1-implementation-spec.md` — implementation-ready detail for Phase 1, written against this PR's rebuilt Astro source
8. `07-conversion-and-lead-qualification.md` — form/lead-qualification recommendations
9. `08-astro-deployment-risk-review.md` — **new**: code-level review of this PR's own Astro reconstruction for missing assets, placeholder content, form/tracking risk and deployment risk
10. `09-phase1-pages-final.md` — **final** first-7-pages table (5 improvements before 2 new pages) with named competitors to outperform per page
11. `10-phase1-implementation-order.md` — **new**: the sequenced execution order (not just a priority ranking) for Phase 1
12. `raw-keyword-exports/` — the original Keyword Planner CSV/XLSX exports (provenance for the keyword package), plus the earlier qualitative-only keyword pass (superseded once real data arrived)

## Deliverables map (this round's A-H request)

| Deliverable | File(s) |
|---|---|
| A. Top 30 commercial keyword opportunities | `04a-top30-keyword-opportunities.csv` |
| B. Final keyword-to-page mapping | `04c-keyword-to-page-mapping.md` |
| C. Competitor comparison matrix (10 strongest) | `03a-competitor-comparison-final.md` |
| D. Top 10 website weaknesses | `01-gap-analysis.md` ("Top 10 highest-impact improvements" table) |
| E. Hydronic SEO expansion plan | `05-content-architecture-and-roadmap.md` (Phase 1, items 1-2) + `06-phase1-implementation-spec.md` §1-2 |
| F. First 5-10 pages for implementation | `09-phase1-pages-final.md` |
| G. Astro reconstruction deployment risks | `08-astro-deployment-risk-review.md` |
| H. Recommended Phase 1 implementation order | `10-phase1-implementation-order.md` |

## Executive summary

### Where the site stands today (corrected 2026-10-29)
The live MeltGrid site (recovered and audited from a 2026-09-22 compiled-build extraction, since no Astro source existed in this repo before this PR — see the PR description) is **technically strong**. All 18 pages have clean, unique titles/meta, consistent canonicals, no broken links, no accidental `noindex`, responsive images with real alt text, and FAQ/Service/BreadcrumbList schema on nearly every page — a better technical foundation than anything confirmed for any of the 12 competitors audited.

The first version of this research said the site had "zero organic visibility." That was an overreach from one data point and has been corrected. Four distinct things are true, and they are not the same claim:
- **Confirmed indexed:** per the business owner's own Google Search Console, the homepage is indexed (owner-reported; this research session has no GSC access of its own to verify independently).
- **Confirmed at least one real enquiry from organic search:** a genuine customer in Markham found MeltGrid via Google and submitted an enquiry.
- **Observed in live search testing:** the competitor audit's ~12 live commercial-query searches on 2026-10-28 did not surface MeltGrid, including a search for its own brand name — an accurate description of those specific searches, not evidence the site is unindexed.
- **Still unknown:** actual organic impressions, clicks, and average position from Search Console — this data was never retrieved (see "What still needs to be done outside this session" below) and remains the real gap in this research, not the site's existence in the index.

The accurate read: MeltGrid is indexed and has been found for at least one real query, but isn't yet ranking competitively for the market's highest-value head terms tested here. That's a ranking-strength and accumulated-authority problem (reviews, links, index age vs. established competitors), not a "the site doesn't exist to Google" problem.

### The competitive landscape
12 competitors were audited (8 specified in the brief, 4 more found via live search and confirmed ranking today); 10 of the 12 had verifiable content and are carried into the final comparison in `03a-competitor-comparison-final.md` (MeltMyWay and Electric FX returned no verifiable content in any search run and were dropped). The market leader on the queries tested, Action Home Services, wins mainly on accumulated trust signals (2,000+ claimed reviews, awards, an active PR program) and a full cost/value content cluster — not page quality. Precision Landscaping has the strongest city-level SEO footprint (8 GTA municipalities) and is the only competitor publishing specific $/sqft pricing. Four competitors (EC Mechanical, Toronto Air Systems, The Boiler Guys, InFloor Heat) have real hydronic engineering content; MeltGrid has none. Full detail and a 1-10 scored matrix across 10 criteria: `03-competitor-audit.md`.

### The keyword opportunity, with real numbers (validated and corrected 2026-10-29)
A Google Ads Keyword Planner export (user-provided, logged-in account, Canada-national with Ontario/GTA sub-queries, Oct 2025-Sep 2026, 628 keywords total) confirmed:
- **"heated driveway" and "heated driveway cost" each average 5,000/mo nationally** — by far the two largest real numbers in the dataset, and they map directly to MeltGrid's two most important existing pages (`/heated-driveways/`, `/cost/`). All of these are **national Canada figures, not GTA-specific** — see `04b-keyword-validation-findings.md` §5.
- **Hydronic terms are real but modest** (~1,300/mo aggregate across 28 phrasings, individually ~50/mo, Low-Medium Ads competition) — small next to the ~20,550/mo core driveway cluster, but genuine, low-competition, and a complete gap on MeltGrid's own site today.
- **Correction:** the first pass stated "'heated driveway mats'-style phrasing carries ~6,250/mo real demand, unaddressed." A full validation pass against the 628-row raw export found that the broader mats/cable cluster is heavily diluted by DIY retail-purchase intent (HeatTrak/Amazon/Costco/Home Depot searches — people wanting a $200-500 portable product, not an installed system). This is now a smaller, more narrowly-scoped opportunity (a differentiation note on `/technology/`, not a primary lead-gen target) — full detail in `04b-keyword-validation-findings.md` §2.
- Local/city terms only show real volume at the Ontario and Toronto level (500/mo each); every individual GTA suburb returned too little to size confidently — this does **not** support building 8+ separate city pages the way Precision Landscaping has.
- A workbook-categorization bug was found and fixed: "heated driveway brampton" and three "heated ramp" terms were mistagged as commercial/B2B in the source workbook (a "ramp" substring match inside "b**ramp**ton" propagating from whatever tool built it) — corrected in this research's own re-derived categorization. Full detail in `04b-keyword-validation-findings.md` §4.

Final Top 30, scored on relevant demand + commercial intent + GTA/Ontario relevance + competition + project value + electric/hydronic fit + competitor weakness: `04a-top30-keyword-opportunities.csv`. Full 139-row dataset: `04-keyword-research.csv`. Cluster-to-page mapping: `04c-keyword-to-page-mapping.md`.

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

Full detail, Phase 2/3, and the 30/60/90-day plan: `05-content-architecture-and-roadmap.md`. Implementation-ready specs: `06-phase1-implementation-spec.md`. **Final 7-page table with named competitors to outperform per page:** `09-phase1-pages-final.md`. **Sequenced execution order:** `10-phase1-implementation-order.md`.

### Expected business impact (assumptions labelled)
- *Assumption:* the homepage is already indexed (confirmed, see correction above); once this PR's Astro rebuild is reviewed, approved and deployed, the sitemap should be resubmitted so the remaining 17 pages — and any new Phase 1 pages — get crawled and indexed on the normal several-day-to-few-week timeline for a small static site. This plan's impact depends on that re-crawl happening, not on the site becoming indexed for the first time.
- *Assumption:* the ~20,550/mo core driveway cluster and ~13,750/mo cost cluster are national Canada numbers, not GTA-only — actual addressable GTA search volume is a fraction of that ceiling, not the number itself.
- *Assumption:* hydronic content's value is more strategic (differentiation, a real enquiry type MeltGrid already receives) than volume-driven (~1,300/mo nationally is modest) — it should be resourced as a credibility/positioning investment, not evaluated purely on projected search traffic.
- No fabricated traffic, ranking, or revenue projections are given anywhere in this research, per the brief's own research-quality rules.

## What still needs to be done outside this session

This cloud session has no access to the user's local browser or Search Console/Analytics dashboards. One item from the first pass is now resolved by owner-provided evidence (indexing is confirmed — see the correction above); the rest remain open:

1. **Google Search Console performance data** — queries/impressions/clicks/average position were never retrieved (indexing status itself is now confirmed owner-side, per the correction above, but the performance numbers behind it are still unknown to this research). A fresh pull is needed once this PR's rebuild ships and the sitemap is resubmitted.
2. **Google Analytics** — the Sep 30-Oct 27 2026 snapshot (10 active users, 9 new, 57 events, ~16s engagement) in the brief was not independently re-verified, and whether the enquiry form fires as a tracked conversion event was not confirmed. The `DesignRequestForm` in this PR already fires `design_form_start/step/submit/success` GA4 events — worth checking in GA4 whether any of those are currently marked as a Conversion (also flagged in `08-astro-deployment-risk-review.md` §5).
3. **A GTA-geo-targeted Keyword Planner pull.** Even with the fuller 628-row export now incorporated, the location setting is still Canada-national with manually-added local queries, not a true GTA-only pull. This matters most for re-testing whether individual city pages are justified and for sharpening local-intent volume generally.
4. **A real Lighthouse/PageSpeed Insights run** against the deployed site (Core Web Vitals could not be measured from static file inspection alone).
5. **Human sign-off on the two open business decisions this research deliberately did not resolve:** the real indicative cost range for `/cost/`, and which (if any) hydronic manufacturer can be named on `/hydronic-snow-melting/` — see `10-phase1-implementation-order.md` steps 3-4.
6. **A supervised, real end-to-end test submission on both lead forms**, and a page-by-page visual review of the reconstructed Astro site against the live site — see `08-astro-deployment-risk-review.md` for the full list before any deployment.

Everything else in the brief — the live-site audit, the 10 finalized competitors, keyword validation/clustering/Top 30, the gap analysis, and the Phase 1-3 content architecture — is complete in the files above.
