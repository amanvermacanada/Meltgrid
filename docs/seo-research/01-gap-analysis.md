# MeltGrid vs. Competitors — Gap Analysis

Synthesized from `02-website-audit.md`, `03-competitor-audit.md`, and `04-keyword-research.csv`. Research date: 2026-10-28.

## The 12 questions, answered

**1. Why would Google currently rank a competitor above MeltGrid?**
Right now, mostly not because of page quality — MeltGrid did not appear in any of the ~12 live commercial searches the competitor audit ran today, including a search for its own brand name. It's a new, unindexed/low-authority site. Where competitors do have an edge on substance: Action Home Services (AHS) has a full topic cluster (service + cost-guide + "worth it" page) plus 2,000+ claimed reviews and an active PR program; Precision Landscaping has 8 confirmed city pages; four hydronic specialists have real engineering-depth content MeltGrid has none of.

**2. Which competing pages provide more useful information?**
Precision Landscaping's city pages (Vaughan, Markham, etc.) answer "does this company serve my area" directly. AHS's "Heated Driveway Cost in Toronto: 2026 Pricing Guide" and "Are Heated Driveways Worth It in Ontario?" answer the two biggest real-volume questions in the keyword data (5,000/mo each) with more specificity than MeltGrid's `/cost/`, which explains cost *drivers* but gives no number at all. The Boiler Guys' and Precision's hydronic content (glycol concentration, boiler staging, $/sqft ranges) out-specifies MeltGrid's total absence of hydronic content.

**3. Which competitor pages have better search-intent alignment?**
Precision Landscaping's city pages for "heated driveway [city]" queries — exact intent match, zero MeltGrid equivalent. Country Renovations' permit/regulatory detail ("ESA notification mandatory, building permit generally not required") answers a real pre-purchase question neither MeltGrid nor most competitors address.

**4. Which websites communicate greater trust?**
AHS (claimed review volume + awards + 10-year labour warranty) and Country Renovations (named ECRA/ESA license, WSIB coverage, $5M insurance) both make first-party reassurance claims MeltGrid's coordinator model cannot make for itself. MeltGrid's own `/about/` is honest about this (explicitly discloses it doesn't employ licensed trades and that imagery is manufacturer stock) but does nothing further to build trust around the coordination model itself.

**5. Which websites have stronger quotation forms?**
None of the 12 competitors' form UX could be directly inspected (network restrictions limited this audit to search snippets). MeltGrid's own 5-step `DesignRequestForm` (project → surface/coverage → size/photos → location/timing → contact) is more qualification-heavy than a typical one-field "get a quote" form — a deliberate trade-off (better lead quality, more friction) rather than a confirmed weakness.

**6. Does MeltGrid explain hydronic solutions sufficiently?**
No. Zero hydronic content exists anywhere on the site today (confirmed by grepping every page). Four competitors (EC Mechanical, Toronto Air Systems, The Boiler Guys, InFloor Heat) have real hydronic-specific technical content. This is the single largest content gap identified across both audits.

**7. Does MeltGrid explain complete project delivery clearly?**
Reasonably well on `/about/` and `/trade-partners/` ("we design before we quote," "we coordinate the trades," "keep your customer, keep your scope"), but this framing isn't reinforced on the pages where a homeowner is actually deciding (`/heated-driveways/`, `/residential/`, `/commercial/`) — it lives only on the two pages least likely to be a first-touch landing page.

**8. Are we targeting the correct cities?**
Partially. Real Keyword Planner data confirms only "Ontario" and "Toronto" cost queries carry non-trivial volume (500/mo each); every other GTA suburb (Mississauga, Vaughan, Markham, Brampton, etc.) returned 50/mo or "Unknown." Precision Landscaping's 8 city pages are a real competitive advantage, but the keyword data doesn't support matching them 1-for-1 — a focused Ontario/GTA pillar treatment on 1-2 existing pages is better justified by the real numbers than building 8 thin pages.

**9. Are important keywords missing from the site?**
Yes — three confirmed gaps with real search volume behind them: hydronic terminology (~1,300/mo aggregate, zero coverage), "heated driveway mats / snow melt mats" consumer phrasing (~6,250/mo aggregate, closest existing page is `/technology/` which doesn't use this phrasing), and pedestrian/specialty terms — walkway, steps, entrance, ramp (~2,150/mo aggregate, no dedicated page; only anchor sections inside `/residential/`).

**10. Does the website communicate that MeltGrid can coordinate both heating systems and surface contractors?**
Yes, clearly, but only on `/about/` and `/trade-partners/`, and only for the electric side today (there's no hydronic equivalent of "we coordinate the trades" because there's no hydronic content to coordinate around yet).

**11. Are we presenting realistic pricing expectations?**
`/cost/` explains cost drivers but gives literally zero numeric anchor — a deliberate policy ("we do not publish fixed installation prices"), which is honest but may cost bottom-of-funnel conversions from the 5,000/mo "heated driveway cost" searchers who want at least a ballpark before filling out a 5-step form. Separately: the internal $30/sqft indicative hydronic contractor rate mentioned in the project brief is **not independently verified market-wide** and must never be published as a guaranteed installed price — if a range is published anywhere, it needs the same cost-driver caveats `/cost/` already uses for electric, not a single number.

**12. What would make a homeowner choose MeltGrid over an established contractor?**
The coordination story — one relationship across manufacturer design (electric today, hydronic once built out) and the licensed trades needed to install it, instead of a single-trade contractor who may undersell a system type that doesn't suit the property. This is MeltGrid's one genuinely unclaimed positioning (see `03-competitor-audit.md` §"Where MeltGrid has a believable opening to beat them"), but it currently isn't backed by hydronic content, city-level presence, or any accumulated trust signal (reviews, project count) — it's a strategy, not yet a proof point.

## Top 10 highest-impact improvements (merging both audits)

| # | Fix | Type |
|---|---|---|
| 1 | Build a real hydronic content category (pillar page + electric-vs-hydronic comparison) | New commercial landing page |
| 2 | Add a caveated cost range + Ontario/Toronto section to `/cost/` | Existing-page improvement |
| 3 | Tighten `/heated-driveways/` vs. `/residential/` boundary + add GTA section | Existing-page improvement |
| 4 | Consolidate the 4 duplicated retrofit FAQ answers onto one canonical page | Quick technical fix |
| 5 | Add `areaServed`, `HowTo`, `CollectionPage` schema (all already-written content, zero new copy) | Quick technical fix |
| 6 | Expand `/about/` with concrete trust/coordination-model proof points | Trust-building improvement |
| 7 | New heated walkways/steps/entrance/ramp page | New page (Phase 2) |
| 8 | Fix sitewide footer `<h2>` heading misuse | Quick technical fix |
| 9 | Add response-time SLA statement + lead-qualification refinement on `/contact/` | Conversion improvement |
| 10 | Stand up a review-collection process for completed projects (not a content task — an ops task) | Trust-building improvement |

Full page-by-page detail for each is in `02-website-audit.md` §4 and `05-content-architecture-and-roadmap.md`.
