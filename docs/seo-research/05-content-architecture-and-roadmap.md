# SEO Content Architecture & 30/60/90 Roadmap

Built from `01-gap-analysis.md`, `02-website-audit.md`, `03-competitor-audit.md` and real Keyword Planner data in `04-keyword-research.csv`. Every page below exists because a specific gap or real-volume keyword cluster justifies it — no page was added just to have more pages, and no near-duplicate city or surface pages were created (see keyword notes for why).

---

## Phase 1 — Highest commercial impact

### 1. NEW — `/hydronic-snow-melting/`
- **Title:** Hydronic Snow Melting Systems | MeltGrid Canada
- **H1:** Hydronic snow melting, coordinated end to end
- **Primary keyword:** hydronic snow melting / hydronic heated driveway (~50/mo each, Low-Medium competition, real KWP data)
- **Secondary:** hydronic snow melt system, heated driveway boiler, glycol driveway heating, hydronic snow melt under pavers
- **Search intent:** Informational → commercial investigation
- **Target customer:** Homeowner or builder who has heard "hydronic" and wants to understand it before asking for a design — same funnel position as `/heated-driveways/` but for the system type the site currently has zero content on
- **Content outline:** How a hydronic system works (boiler/heat source → glycol loop → PEX tubing → manifold → pump → snow/ice sensor → controller); where it fits vs. electric (link to comparison page); installation process and sequencing with paving/concrete/interlock trades; mechanical room and gas-supply considerations (stated as "confirmed during design," never as a blanket claim); maintenance basics; **explicit coordination-model disclaimer** matching `/about/`'s existing electric-side language — MeltGrid coordinates hydronic manufacturer partners and licensed mechanical trades, is not itself the installer, and has not yet completed a hydronic installation (per project brief's positioning rules — do not claim completed hydronic projects)
- **FAQs:** How is hydronic different from electric? Does a hydronic system need a gas line? What's a mechanical room requirement? Can hydronic go under pavers/asphalt/concrete? How long does installation take? What maintenance does a hydronic system need?
- **Internal links:** From `/heated-driveways/`, `/cost/`, `/technology/`, `/commercial/`, homepage "technology under the surface" section; links out to `/electric-vs-hydronic-snow-melting/` and `/contact/?surface=&intent=hydronic`
- **Conversion CTA:** "Talk to us about a hydronic system" → `/contact/` with a hydronic-aware form path
- **Evidence/content needed before publishing:** Confirm which manufacturer (Watts / Uponor / HeatLink) language is safe to use given current partner-discussion status — do not name a manufacturer as a confirmed partner unless commercially confirmed; use generic "manufacturer-grade" language until then
- **Priority:** High (strategic — see `04-keyword-research-notes.md`: real but modest volume, zero competition on-site today, matches the business's explicit mandate to build out hydronic as a major category)
- **New or improve:** New

### 2. NEW — `/electric-vs-hydronic-snow-melting/`
- **Title:** Electric vs. Hydronic Snow Melting: Which Is Right for You? | MeltGrid Canada
- **H1:** Electric or hydronic? Here's how to decide
- **Primary keyword:** hydronic vs electric heated driveway / electric vs hydronic snow melting
- **Secondary:** heated driveway boiler vs electric, hydronic snow melting cost vs electric, which heated driveway system is best
- **Search intent:** Commercial investigation / decision-stage (the single highest qualitative-priority term flagged by the keyword research pass)
- **Target customer:** Homeowner comparing systems before committing to a design request — later-funnel than the hydronic pillar page
- **Content outline:** Side-by-side comparison table (upfront cost tendencies, running-cost tendencies, best-fit driveway size, installation complexity, gas/electrical requirements, maintenance); "which tends to suit which project" guidance (full-coverage large driveways vs. smaller/targeted areas); explicit statement that MeltGrid designs with both and recommends based on the property, not a single product line — this is the clearest expression of the coordination differentiator identified in the gap analysis
- **FAQs:** Is hydronic cheaper to run than electric? Is electric cheaper to install than hydronic? Can I mix systems (e.g., electric steps + hydronic driveway)? Which works better for a very large driveway?
- **Internal links:** From `/hydronic-snow-melting/`, `/cost/`, `/heated-driveways/`, `/resources/`; links to both system pages and `/contact/`
- **Conversion CTA:** "Not sure which fits your property? Get a free design that compares both."
- **Evidence needed:** None beyond what's already decided — this page is pure synthesis of the two system explainer pages
- **Priority:** High
- **New or improve:** New

### 3. IMPROVE — `/cost/`
- **Current state:** Strong cost-driver explanation, zero numeric anchor anywhere
- **Changes:** (a) Add a clearly-caveated indicative range framed around real cost drivers, not a single number — e.g., ranges bracketed by coverage pattern and surface, with "every property is assessed individually" language preserved; (b) do **not** publish the internal $30/sqft hydronic contractor indication from the project brief as a market rate — if hydronic cost is mentioned here, it links to the hydronic pillar page's own caveated treatment instead; (c) add an explicit Ontario/Toronto section addressing the two real-volume local queries (`heated driveway cost ontario`, `heated driveway cost toronto`, 500/mo each); (d) link to the new electric-vs-hydronic comparison page from the existing "What affects running cost" section
- **Primary keyword:** heated driveway cost (5,000/mo, Medium competition — the single largest real number in the entire keyword dataset)
- **Internal links added:** → `/hydronic-snow-melting/`, `/electric-vs-hydronic-snow-melting/`, `/resources/heated-driveway-running-cost/` (already linked)
- **Conversion CTA:** Keep existing "Get a number for your property"; add the SLA statement from the `/contact/` recommendation here too, since this is the page most likely to be a bottom-funnel bounce point
- **Priority:** High
- **New or improve:** Improve

### 4. IMPROVE — `/heated-driveways/`
- **Changes:** Add an explicit "Serving Ontario and the GTA" section (not a new page — see keyword notes on why per-city pages aren't justified by real volume) naming Toronto plus the service-area list; trim the sections that currently overlap `/residential/` per the cannibalization finding in `02-website-audit.md` §3; add a link to the new hydronic pages from wherever the page currently implies "electric only"
- **Primary keyword:** heated driveway (5,000/mo, High competition) — the site's single highest-value head term
- **Priority:** High
- **New or improve:** Improve

### 5. IMPROVE — `/about/`
- **Changes:** Add concrete proof points: company background/how MeltGrid started, an explicit statement of what licensing/insurance MeltGrid verifies in the trades it coordinates (directly answers the "Country Renovations names its own ESA-licensed electricians" competitive gap — MeltGrid can't claim to employ them, but it can and should state what it verifies before a trade is assigned to a project), a repeated/visible Ontario-GTA service statement (currently buried ~400 words deep with no reinforcement elsewhere), and — once available — a real project count or first testimonials
- **Priority:** High (this is the page doing the most trust/E-E-A-T work and is currently the thinnest)
- **New or improve:** Improve

### 6. IMPROVE — `/resources/` hub
- **Changes:** Add 1-2 sentences of framing per linked guide (currently bare title + arrow), add `CollectionPage`/`ItemList` schema, and once the Phase 3 articles exist, this hub is where they get listed
- **Priority:** Medium-High (cheap, and sets up the Phase 3 article plan)
- **New or improve:** Improve

### Cross-cutting Phase 1 technical fixes (no new page, apply across existing pages)
- Add `areaServed` (Ontario / GTA `Place`) to all 7 existing `Service` schema blocks
- Add `HowTo` schema to `/how-it-works/`
- Fix the sitewide footer `<h2>` misuse (4 generic headings repeated verbatim on all 18 pages)
- Consolidate the 4 duplicated retrofit FAQ answers (`/resources/existing-driveway-retrofit/` + the 3 `/snow-melting/*` pages) onto the resources page as canonical, with the surface pages linking out instead of repeating the FAQ
- Add a response-time SLA line to `/contact/`

---

## Phase 2 — Commercial expansion

### 7. NEW — `/heated-walkways-steps/`
- **Title:** Heated Walkways, Steps & Entrances | MeltGrid Canada
- **H1:** Snow melting for the paths you walk every day
- **Primary keyword:** heated walkway / heated front steps (aggregate ~2,150/mo across the pedestrian cluster)
- **Secondary:** heated outdoor stairs, heated entrance, heated wheelchair ramp, heated garage ramp
- **Search intent:** Commercial investigation
- **Target customer:** Homeowners for whom a full driveway isn't the priority — a smaller, targeted project (often a faster first conversion than a full driveway)
- **Content outline:** Why these areas matter even without a full driveway system (fall-risk framing for steps/entrances); walkway coverage; steps; entrances; **a dedicated, genuinely underserved accessibility/ramp section** (heated wheelchair ramps — the keyword research flagged this as low-competition with almost no GTA competitor content and real emotional/case-study potential); electric vs. hydronic note for small areas (electric is typically the better fit at this scale — ties into the comparison page)
- **FAQs:** Can you heat just my front steps? How does a heated ramp help with accessibility? Can walkway heating run off the same system as my driveway?
- **Internal links:** From `/residential/` (replacing/deepening its current walkway/steps/patio anchor sections), `/technology/`, `/contact/?areas=steps`
- **Conversion CTA:** "Start with the areas that matter most"
- **Priority:** Medium-High
- **New or improve:** New (currently only anchor sections inside `/residential/`)

### 8. IMPROVE — `/commercial/`
- **Changes:** Add named property-type sections (parking ramp, loading dock, hospital/institutional entrance — matches the real, if low-volume, `commercial` seed-batch keywords) with a short paragraph each; add a line naming hydronic as available for large commercial areas where it suits the load better than electric
- **Priority:** Medium (real search volume here is genuinely small — optimize for conversion/credibility on a handful of visits, not for traffic)
- **New or improve:** Improve

### 9. IMPROVE — `/technology/`
- **Changes:** Add a plain-language "mats vs. cable" section using the exact consumer phrasing real searchers use ("heated driveway mats," "snow melt mats") — the keyword data shows ~6,250/mo aggregate on this phrasing cluster, concentrated and currently unaddressed by name anywhere on the site
- **Priority:** Medium
- **New or improve:** Improve

### Ontario/GTA service-area refinement (not a new page)
Per real Keyword Planner data, only Toronto and Ontario-level cost queries show meaningful volume; Mississauga, Vaughan, Markham, Brampton, Oakville, Burlington, Aurora, Newmarket, King City and Caledon all returned 50/mo or "Unknown." Recommendation: list all served municipalities in one place (footer + `/about/` service-area statement + the new Ontario/GTA section on `/heated-driveways/`), and revisit dedicated city pages only if a future Keyword Planner pull with GTA-only geo-targeting (see outstanding task in `04-keyword-research-notes.md`) shows real city-level volume, or if Precision Landscaping's city-page approach is visibly winning real traffic once rank-tracking is available.

---

## Phase 3 — Authority building

### 10. NEW resource article — "Is a Heated Driveway Worth It in Canada?"
Decision-stage content matching real search phrasing ("heated driveway worth it Canada"). Honest framing: upfront cost vs. snow-removal/ice-risk/time savings, climate-specific angle (Ontario winters), explicitly not a guaranteed-payback claim.

### 11. NEW resource article — "Heated Driveway & Snow Melting Maintenance"
Fills a real gap (maintenance keywords exist in category G); currently nothing on-site addresses ongoing upkeep beyond the running-cost article.

### 12. IMPROVE — `/how-it-works/` and `/technology/` role split
Finish the differentiation already recommended in the website audit: `/how-it-works/` owns the process narrative (including, once built, a hydronic version of "follow one snowfall"), `/technology/` owns the product catalog.

### 13. Review-collection process (operational, not content)
Not a page — the single highest-leverage trust fix identified in the gap analysis (AHS's 2,000+ reviews vs. MeltGrid's zero) can't be solved with content. Recommend standing up a simple post-project review request (e.g., a Formspree-backed or Google Review link sent after each completed project) now, so Phase 3 has real testimonials to publish instead of none.

---

## 30/60/90-day roadmap

### Days 1-30
- All Phase 1 cross-cutting technical fixes (schema, footer heading, retrofit FAQ consolidation) — cheap, fast, no new copy needed beyond the retrofit consolidation
- `/cost/` improvement (range + Ontario/Toronto section)
- `/about/` improvement (trust/coordination proof points)
- Draft `/hydronic-snow-melting/` pillar page content (requires sign-off on manufacturer-language before publishing — see Evidence Needed above)
- Submit the rebuilt sitemap for indexing once the Astro project (this PR) is reviewed, approved and deployed — MeltGrid currently has zero search visibility, and nothing else in this plan matters until the site is actually crawlable again

### Days 31-60
- Publish `/hydronic-snow-melting/` and `/electric-vs-hydronic-snow-melting/`
- `/heated-driveways/` GTA/Ontario section
- `/heated-walkways-steps/` new page
- `/commercial/` and `/technology/` improvements
- Stand up the review-collection process so it starts accumulating before Phase 3 content needs testimonials

### Days 61-90
- Phase 3 authority articles ("worth it," maintenance)
- `/how-it-works/` ↔ `/technology/` role-split cleanup
- Re-pull Google Search Console + Analytics data (should have meaningful data by now) and a real Lighthouse/PageSpeed run — re-prioritize Phase 2/3 remainder based on actual impressions/clicks data, which wasn't available for this research pass
- Optional: a GTA-geo-targeted Keyword Planner re-pull to test whether city pages are justified by then
