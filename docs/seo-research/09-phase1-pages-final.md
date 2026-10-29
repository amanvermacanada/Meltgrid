# Phase 1 — First 7 Pages for Implementation (Final)

Deliverable F. 5 existing-page improvements before 2 new pages, per this round's explicit instruction to prioritize improving existing pages over creating new ones. Full content outlines/FAQs/schema detail for each already exist in `05-content-architecture-and-roadmap.md` and `06-phase1-implementation-spec.md` — this table adds the one field those didn't have explicitly: **named competitors to outperform**, using the finalized matrix in `03a-competitor-comparison-final.md`. Search volumes are Canada-national Keyword Planner figures unless marked Local — see `04b-keyword-validation-findings.md` §5 before treating any number here as GTA-specific.

## 1. IMPROVE — `/cost/`
- **Primary keyword:** heated driveway cost — **verified 5,000/mo** (Medium competition, $1.08-$5.79 CAD top-of-page bid), the single largest real number in the dataset
- **Secondary:** cost for a heated driveway (5,000/mo), heated driveway installation cost (500/mo), heated driveway cost ontario / heated driveway cost toronto (500/mo each, Local)
- **Search intent:** Commercial — Price Research
- **Proposed title / H1:** keep existing title (`Heated Driveway Cost & Planning | MeltGrid Canada`); H1 unchanged
- **Content structure:** add a caveated indicative-range block (ranges only, no single number — see `06-phase1-implementation-spec.md` §3) + a new "Ontario and the GTA" section + a link to the new electric-vs-hydronic comparison page from the existing running-cost section
- **Competitors to outperform:** Precision Landscaping (only competitor publishing specific $/sqft) and Action Home Services (dedicated "2026 Pricing Guide" + "Worth It" pages) — MeltGrid doesn't need to match a bare number, but zero numeric anchor at all is currently losing to both
- **Internal linking plan:** in from homepage, `/heated-driveways/`, `/residential/`, `/commercial/`; out to `/hydronic-snow-melting/`, `/electric-vs-hydronic-snow-melting/`, `/resources/heated-driveway-running-cost/`
- **Conversion strategy:** add the response-time SLA line; keep "Get a number for your property" CTA
- **Business priority:** Highest

## 2. IMPROVE — `/heated-driveways/`
- **Primary keyword:** heated driveway — **verified 5,000/mo**, High competition (also the colloquial synonyms "driveway warmer" and "heater for driveway," 5,000/mo each)
- **Secondary:** heated driveway installation (500/mo), heated driveway near me / contractors / installers (50/mo each, cluster — see `04c-keyword-to-page-mapping.md` #3), heated driveway installation toronto (50/mo, Local)
- **Search intent:** Commercial investigation
- **Proposed title / H1:** keep existing (`Heated Driveways in Canada | MeltGrid Canada`)
- **Content structure:** add "Serving Ontario and the Greater Toronto Area" section; trim overlap with `/residential/` per the website audit's Group A finding; add a line + link to `/hydronic-snow-melting/`
- **Competitors to outperform:** Action Home Services (full service+cost+value topic cluster) and Precision Landscaping (8 city pages) — the GTA section is the direct, proportionate response to both without building 8 separate pages the real keyword volume doesn't support
- **Internal linking plan:** the site's main pillar — linked from homepage, `/residential/`, `/cost/`, `/technology/`; out to `/hydronic-snow-melting/` and the 3 surface pages
- **Conversion strategy:** multiple existing CTAs retained; add Ontario/GTA-aware CTA copy
- **Business priority:** Highest

## 3. IMPROVE — `/about/`
- **Primary keyword:** none (trust/E-E-A-T page, not a ranking play) — business value is conversion-rate lift on every other page's traffic, not direct search volume
- **Search intent:** Navigational / trust
- **Proposed title / H1:** keep existing (`One point of contact for snow melting`)
- **Content structure:** add "How we work with licensed trades" (verification process, not a licensing claim), repeat the Ontario/GTA statement near the top, add real proof points if/when available (see `06-phase1-implementation-spec.md` §5 — do not fabricate years-in-business or a founding story)
- **Competitors to outperform:** Country Renovations (names its own ESA-licensed electricians, WSIB, $5M insurance — MeltGrid's honest answer is describing what it verifies, not claiming to employ trades) and Action Home Services (review volume — not solvable by this page alone, see item #10 in `01-gap-analysis.md`'s top-10 list)
- **Internal linking plan:** currently zero contextual body links out — add links to `/heated-driveways/`, `/hydronic-snow-melting/`, `/trade-partners/`
- **Conversion strategy:** existing CTAs retained
- **Business priority:** High

## 4. IMPROVE — `/resources/`
- **Primary keyword:** none strong (hub page) — supports long-tail informational keywords in the 3 (soon 5) child articles
- **Search intent:** Informational hub
- **Content structure:** 1-2 sentences of framing per guide, `CollectionPage`/`ItemList` schema
- **Competitors to outperform:** EC Mechanical (single educational blog post) and InFloor Heat (multi-post hydronic content-marketing cluster) — MeltGrid's hub, once it actually frames its 3 existing + 2 Phase-3 articles properly, out-structures both
- **Internal linking plan:** links to all child articles (already present); needs inbound links from the service pages that currently don't reference it
- **Conversion strategy:** indirect — supports research-stage visitors before they reach a service page's CTA
- **Business priority:** Medium-High

## 5. IMPROVE — `/contact/`
- **Primary keyword:** transactional brand term, no ranking target — this is the conversion endpoint
- **Content structure:** add the two form questions from `07-conversion-and-lead-qualification.md` (system-type preference in Step 2, budget range in Step 4) + the response-time SLA line
- **Competitors to outperform:** MSD Contracting (apparent placeholder phone number on its own lead page — the bar to stay well clear of) — no competitor was observed asking about budget range upfront, so this is a genuine, not just competitive-parity, improvement
- **Internal linking plan:** unchanged — already the universal CTA target from every page
- **Conversion strategy:** this is the conversion strategy change itself — directly addresses the brief's own cancelled-Markham-enquiry example by qualifying budget before design work begins
- **Business priority:** High (cheap, directly fixes a named real problem)

## 6. NEW — `/hydronic-snow-melting/`
- **Primary keyword:** hydronic snow melting / hydronic heated driveway — **verified ~50/mo each**, Low-Medium competition (small individually; the 28-keyword hydronic cluster aggregates to ~1,300/mo — see `04c-keyword-to-page-mapping.md` #4)
- **Secondary:** hydronic snow melt system, heated driveway boiler, glycol driveway heating, hydronic snow melt under pavers
- **Search intent:** Informational → commercial investigation
- **Proposed title / H1:** "Hydronic Snow Melting Systems | MeltGrid Canada" / "Hydronic snow melting, coordinated end to end"
- **Content structure:** full detail in `06-phase1-implementation-spec.md` §1 (how it works, where it goes by surface, mechanical room/gas considerations, maintenance, coordination disclaimer, FAQ)
- **Competitors to outperform:** EC Mechanical, Toronto Air Systems, and The Boiler Guys — all three are hydronic-only specialists with no electric offering and no coordination-model story; none combines hydronic depth with the "one relationship across both systems and all trades" positioning MeltGrid's `/about/` already describes
- **Internal linking plan:** from `/heated-driveways/`, `/cost/`, `/technology/`, `/commercial/`, homepage; out to `/electric-vs-hydronic-snow-melting/` and `/contact/`
- **Conversion strategy:** "Talk to us about a hydronic system" CTA, routed through `/contact/`'s updated system-type question
- **Business priority:** High (strategic — explicit business mandate per the brief; real but modest keyword volume, zero on-site content today, genuinely open competitive positioning)

## 7. NEW — `/electric-vs-hydronic-snow-melting/`
- **Primary keyword:** hydronic vs electric heated driveway / electric vs hydronic snow melting
- **Search intent:** Commercial investigation / decision-stage
- **Proposed title / H1:** "Electric vs. Hydronic Snow Melting: Which Is Right for You? | MeltGrid Canada" / "Electric or hydronic? Here's how to decide"
- **Content structure:** full detail in `06-phase1-implementation-spec.md` §2 (comparison table, fit guidance, FAQ)
- **Competitors to outperform:** Precision Landscaping and MSD Contracting — the only two competitors who mention both system types at all, and both do so in a single paragraph rather than as a dedicated, structured comparison resource
- **Internal linking plan:** from `/hydronic-snow-melting/`, `/cost/`, `/heated-driveways/`, `/resources/`; out to `/contact/`
- **Conversion strategy:** "Not sure which fits your property? Get a free design that compares both."
- **Business priority:** High (this exact comparison phrasing was independently flagged as the single highest qualitative-priority term across both research passes)

## Why 7, and why this order

Per this round's explicit instruction to prioritize improvements over new pages: 5 of 7 are existing-page improvements, and they're ordered first. The 2 new pages are both hydronic — not because hydronic has the largest keyword volume (it doesn't; cost and core-driveway content do, which is why those improvements rank #1-2), but because the brief treats hydronic as a required business expansion, not an optional content bet, and the competitor and keyword research both independently confirm it's the one genuinely open positioning gap in the market.
