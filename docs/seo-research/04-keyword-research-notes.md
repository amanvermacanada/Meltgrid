# MeltGrid Canada — Keyword Research (Real Keyword Planner Data)

**Status: supersedes the earlier `keyword-research.csv` / `keyword-research-notes.md` placeholder pass.** Those files were built before real data was available and marked every volume/competition/bid field "NOT AVAILABLE." The user has since exported real Google Ads Keyword Planner data (logged-in account) and a self-curated prioritization workbook. This file and `keyword-research-master.csv` are the authoritative keyword deliverable going forward. The two source files are preserved for audit trail:

- `MeltGrid_Google_Keyword_Planner_Raw.csv` — 628 keyword rows, raw Keyword Planner "Discover new keywords" export.
- `MeltGrid_Keyword_Opportunities.xlsx` — the same 628 rows, pre-categorized by the user/their tool into Topic/Category, Search Intent, Location, Priority Tier and a 0–100 Priority Score.

**Extraction date:** 2026-10-28. **Data period:** Oct 1, 2025 – Sep 30, 2026. **Currency:** CAD. **Geography:** Canada (national) as the primary targeting, with a small set of explicit Ontario/GTA/Ottawa sub-queries (seed batch `local_gta`, 17 rows) layered in — this is **not** a true GTA-only pull. That distinction matters: national volume numbers below are not GTA-only demand, and the 17 local-GTA rows returned mostly low/unknown volume because Keyword Planner buckets very localized city+service queries aggressively at this scale. Treat national numbers as a ceiling, not a GTA estimate.

## What's in `keyword-research-master.csv`

139 rows, selected from the full 628 by this rule: every keyword the user's own workbook tagged **Priority Tier = High** (103 rows) **plus** every keyword matching hydronic/boiler/glycol/geothermal terminology regardless of tier (28 rows, since this is a strategic category even at low volume) **plus** every row in the **Commercial / Property Management** topic category (5 of the 8 commercial-seed rows weren't duplicates of the above and are low-volume by nature — B2B search behaviour is RFP/relationship-driven, not search-driven). The remaining ~490 rows in the raw export are mostly long-tail duplicates/variants of the same intent (e.g. 15+ phrasings of "heated driveway mats") and are not repeated here; they're available in the raw CSV if deeper long-tail mapping is wanted later.

Columns added beyond the raw Keyword Planner data: `category` (mapped to the brief's A–H buckets), `residential_or_commercial`, `electric_or_hydronic_or_both`, `existing_meltgrid_page` (real current page, from the live site extraction), `recommended_target_url`, `suggested_content_format`, `business_value`, `seo_opportunity_qualitative` — these are analysis, not Keyword Planner output, and are labelled as such in the CSV.

## Headline real-number findings

| Category | Rows selected | Aggregate national avg. monthly searches |
|---|---|---|
| A. Heated driveways (core) | 24 | ~20,550/mo |
| B. Hydronic snow melting | 28 | ~1,300/mo |
| C. Electric snow melting | 17 | ~6,250/mo |
| D. Surface-specific | 4 | small (folded mostly into A/G) |
| E. Pedestrian & specialty | 10 | ~2,150/mo |
| F. Commercial applications | 5 | ~150/mo |
| G. Cost & decision-making | 50 | ~13,750/mo |
| H. Location-specific (standalone) | 1 | small — most local terms carry "cost" and sorted into G |

**This changes two things from the earlier qualitative-only pass:**

1. **Cost/decision-stage content is the single largest addressable cluster with real numbers behind it**, not just a qualitative guess. `heated driveway cost` and `cost for a heated driveway` alone average **5,000/mo each** nationally (Medium competition, $1.08–$5.79 CAD top-of-page bid) — by far the two biggest real numbers in the entire dataset. `heated driveway`, `driveway warmer`, and `heater for driveway` also sit at 5,000/mo each (High Ads competition). This confirms `/cost/` and `/heated-driveways/` are correctly the two highest-leverage existing pages on the site, and validates the earlier content-overlap finding from the site audit (they currently compete with each other rather than deliberately dividing the cost question from the general-information question).
2. **Hydronic confirmed low-volume but real, and genuinely unclaimed.** ~1,300/mo aggregate across 28 real hydronic phrasings (individually mostly 50/mo, Low–Medium Ads competition, $0.53–$7.81 bids) is modest next to the 20,550/mo core cluster — but it is not zero, it is not invented, and MeltGrid's own site has zero hydronic content today while 4 of the 12 audited competitors (EC Mechanical, Toronto Air Systems, The Boiler Guys, InFloor Heat) have real hydronic depth. Low volume + low competition + a confirmed content gap is exactly the profile of a winnable long-tail cluster, not a reason to skip it.
3. **Commercial B2B queries are genuinely low-volume in Keyword Planner** (~150/mo across the whole category) — this matches the business reality (property managers and GCs RFP/call rather than Google-search their way to a vendor) and matches what the competitor audit found (no competitor publishes commercial pricing either). Commercial content strategy here should optimize for conversion/credibility on a small number of visits, not for search volume.
4. **"Mats" terminology (Product – Mats/Cable) carries real, surprisingly concentrated volume** — 17 selected rows at ~6,250/mo aggregate, almost entirely "heated driveway mats / snow melt mats / ice melting mats" phrasing. This is consumer-facing, DIY-adjacent language distinct from "electric heated driveway" and is not currently a dedicated topic anywhere on the site (closest is `/technology/`). Worth a clear mats-vs-cable explainer section since real searchers use this exact phrasing.
5. **Pedestrian/specialty (walkway, steps, entrance, ramp) is confirmed real demand with zero dedicated page.** ~2,150/mo aggregate, and the site has no walkway/steps/ramp page at all today (only driveway-surface pages). This matches the earlier competitor-audit/keyword-agent qualitative call that heated wheelchair ramps and steps are underserved — now backed by real numbers.

## Competition caveat (repeating the brief's own rule)

"Competition" and "Top of page bid" in this data are **Google Ads auction metrics**, not organic SEO difficulty. A High Ads-competition term (e.g. "heated driveway," "heated driveway mats") means advertisers bid aggressively for paid clicks — it does not by itself mean organic ranking is hard or easy. Organic difficulty should be read from the competitor audit (who actually ranks, how deep their content is), not from this column.

## City/location read, now with real numbers

The `local_gta` seed batch (17 rows) returned real but small numbers: `heated driveway cost ontario` and `heated driveway cost toronto` both hit 500/mo (Medium competition) — a real, non-trivial signal. Everything below that (Mississauga, Brampton, Vaughan, Markham, Ottawa, individual-city installation/contractor phrasing) returned 50/mo or "Unknown" (too small for Keyword Planner to size confidently). This **confirms** the earlier qualitative recommendation: build one strong Ontario/GTA pillar (within `/heated-driveways/` and `/cost/`, each gaining an explicit Ontario/Toronto cost section) rather than separate per-suburb landing pages — the real numbers don't support eight thin city pages, but they do support one page explicitly earning the "Toronto" and "Ontario" cost queries, which are the only two local variants with four-figure real volume.

## Outstanding gap vs. the original brief

The brief asked for GTA-primary / Ontario-secondary targeting in Keyword Planner itself. This export's location setting is national Canada with a handful of manually-added local queries, not a true "set location to GTA" pull. If sharper GTA-only numbers are wanted (e.g. to see whether "heated driveway cost" looks different when geo-restricted to the GTA rather than all of Canada), that's a follow-up Keyword Planner session with the location selector changed — everything else in this analysis holds regardless, since GTA is already MeltGrid's primary served market and the national numbers are a reasonable proxy ceiling for a single-market Canadian business with no other regional competitors for its own brand terms.
