# MeltGrid Canada — Competitor SEO/Market Audit (GTA Heated Driveway / Snow Melting)

**Date of research:** 2026-10-28
**Scope:** MeltGrid Canada ([meltgridcanada.ca](https://meltgridcanada.ca/)) vs. 12 competitors serving the Greater Toronto Area / Ontario heated-driveway & snow-melting market.

## Method and honest limitations (read this first)

- **MeltGrid's own site** was assessed from the real, extracted static HTML in `zip_extract/` (homepage, `/heated-driveways/`, `/residential/`, `/commercial/`, `/cost/`, `/technology/`, `/how-it-works/`, `/about/`, `/trade-partners/`, `/contact/`). Titles, meta descriptions, H1–H3s, JSON-LD schema, and body copy below are read directly from that HTML — these are facts, not inference.
- **Competitor sites could not be fetched directly.** This session's outbound network is restricted to an allowlist that does not include any of the competitor domains (confirmed: direct `curl`/WebFetch attempts to `meltmyway.ca`, `ecmechanical.ca`, `mkc-group.ca`, `torontoairsystems.com`, `msdcon.ca`, `theboilerguys.com`, `electricfx.ca`, `northpointplumbing.ca`, and even `google.com` all failed with proxy rejections — only pre-approved infrastructure domains resolve). All competitor findings below come from **live web search (WebSearch) run today**, which returns indexed snippets and third-party summaries, not raw page source.
- **Practical effect:** I can report competitors' title/snippet text, claims, pricing figures, and what third parties say about them, as actually returned by search just now. I generally **cannot** confirm their exact H1 markup, raw schema.org JSON-LD, or mobile rendering by inspection — where I say "not confirmed," that means no evidence either way, not that it's absent. I have not fabricated any traffic, ranking position, backlink, or domain-authority numbers — none of that data is available to me in this environment.
- **"Confirmed ranking" vs. "found to exist":** For the 4 extra competitors I added (Action Home Services, Precision Landscaping, Country Renovations, InFloor Heat), I flag clearly that they surfaced repeatedly, high in results, across multiple independent commercial queries run today — i.e., they are live organic competitors right now, not just companies that exist. For the 8 client-specified competitors, I searched for them directly but in several cases (MeltGrid itself, MeltMyWay, MSD Contracting, Toronto Air Systems, Electric FX) a generic commercial query did **not** surface them at all today — which is itself a finding, reported below per-competitor.
- **MeltGrid Canada itself did not appear in any of the ~12 live commercial searches run for this audit**, including a search for its own brand name ("MeltGrid Canada heated driveway"). That is a direct, current, observed fact from today's search results, not a historical ranking claim.

---

## Per-competitor audit

### 1. MeltGrid Canada (the client — baseline)
**URL(s) examined:** [meltgridcanada.ca](https://meltgridcanada.ca/) (homepage, [/heated-driveways/](https://meltgridcanada.ca/heated-driveways/), [/residential/](https://meltgridcanada.ca/residential/), [/commercial/](https://meltgridcanada.ca/commercial/), [/cost/](https://meltgridcanada.ca/cost/), [/technology/](https://meltgridcanada.ca/technology/), [/how-it-works/](https://meltgridcanada.ca/how-it-works/), [/about/](https://meltgridcanada.ca/about/), [/trade-partners/](https://meltgridcanada.ca/trade-partners/), [/contact/](https://meltgridcanada.ca/contact/)) — read from extracted site source. **Date:** 2026-10-28.

**Business model as the site presents it:** Explicit **project coordinator**, not an installer or manufacturer. The `/about/` page states outright: *"MeltGrid Canada is not a manufacturer. The heating cable, mats, controls and sensors we design around are made by WarmlyYours... Manufacturer project examples are not MeltGrid Canada installations, and we say so wherever they appear."* It positions itself as "one point of contact" that coordinates manufacturer design support (WarmlyYours) with "qualified trades" (electricians, surface contractors) — never claiming to employ them. **Electric only** — there is zero hydronic content anywhere on the site (`grep -il "hydronic"` across every page returned no matches). Covers both **residential and commercial**. Positioning is measured/technical, not luxury-coded.

**SEO:**
- Title tags are consistent, keyword-led, and unique per page, e.g. homepage: *"Heated Driveways & Snow Melting Systems | MeltGrid Canada"*; `/heated-driveways/`: *"Heated Driveways in Canada | MeltGrid Canada"*; `/cost/`: *"Heated Driveway Cost & Planning | MeltGrid Canada"*; `/technology/`: *"Snow Melting Mats, Cables & Controls | MeltGrid Canada"*.
- H1/heading structure is clean and intent-matched (one H1 per page, logical H2/H3 nesting) — e.g. `/commercial/` H1 "Commercial snow melting for entrances, ramps and walkways" with H2s for "Where it goes," "Controls that scale," "How a commercial project is run."
- Content depth is real, not thin: `/heated-driveways/` ≈1,260 words, `/cost/` ≈970 words, `/technology/` ≈870 words, homepage ≈2,190 words — each with genuine explanatory substance (not keyword-stuffed filler).
- **No dedicated hydronic content exists at all** — a structural gap given the client's actual capability claim (electric *and* hydronic coordination).
- Dedicated cost/pricing content exists (`/cost/`) but **deliberately contains no dollar figures or $/sqft ranges** — it explains the six cost drivers (size, coverage, surface, electrical requirements, controls, construction conditions) but refuses to quote numbers: *"No two properties are the same, so we do not publish fixed installation prices."*
- **No city/location landing pages** (no Markham, Vaughan, Mississauga, etc.) — only generic "Ontario and the GTA" language.
- FAQ content is extensive and present on every page (5–9 Q&As each), marked up as `FAQPage` schema.
- **Schema markup is strong and consistent**, confirmed by direct view of source: every inner page carries `WebPage` + `WebSite` + `Organization` + `BreadcrumbList` + `Service` + `FAQPage` JSON-LD blocks; the homepage carries `Organization` + `FAQPage`. This is materially better structured data than anything confirmed for competitors.

**Trust & authority signals:** **Weak.** No testimonials, no reviews, no star ratings, no "years in business" claim, no licensing/certification numbers for MeltGrid itself (consistent with its coordinator model — it explicitly does not claim to employ licensed trades). The one named manufacturer partner is WarmlyYours, credited on every image. **No real project photos** — the `/about/` page explicitly discloses that all imagery is manufacturer stock and not MeltGrid's own installations. No warranty information is stated anywhere on the audited pages.

**Conversion:** Phone number (437-774-5305) visible in header/footer on every page. Primary CTA is a 5-step qualification form (project type → surface/coverage → size/photos → location/timing → contact) rather than a single short form — more friction than a one-field form, but better-qualified leads. No financing mentions found. No pricing transparency anywhere (explicit policy choice, stated as "Why don't you publish prices?" in the cost FAQ).

**Why would/wouldn't Google currently prefer this page over competitors' for a commercially valuable query (e.g. "heated driveway Toronto"):** MeltGrid's technical SEO foundation (full schema coverage, clean architecture, genuine FAQ depth, fast static Astro build) is as strong as or stronger than anything confirmed among competitors today. But it is a **brand-new site with no indexed footprint** — it did not surface in any of the ~12 live commercial searches run today, including its own brand name — so it currently has no ranking signal to compete on at all, regardless of on-page quality. Once crawled and given time/links, its structural advantages (schema, FAQ, content depth) should help, but right now it is pre-visibility, while several competitors (Action Home Services especially) have real indexed pages, PR coverage, and reviews accumulating authority signals MeltGrid has none of.

---

### 2. MeltMyWay ([meltmyway.ca](https://www.meltmyway.ca/))
**Date examined:** 2026-10-28 (via live search only; could not fetch directly).

Multiple targeted searches today — including a `site:meltmyway.ca` query and a direct brand-name search — returned **zero indexed content from this domain**. I could not confirm this company's business model, system type, pricing, or any page content. This is itself the finding: as of today, MeltMyWay has **no confirmed live search visibility** for heated-driveway/snow-melting queries in the GTA, the same situation MeltGrid is in. I cannot score or audit a page I cannot see any trace of; I'm flagging it as unverifiable rather than guessing.

**Matrix scores:** Not scored (insufficient data; see note in matrix).

---

### 3. EC Mechanical — Hydronic Heating / Heated Driveways ([ecmechanical.ca/services/hydronic-heating/heated-driveways/](https://ecmechanical.ca/services/hydronic-heating/heated-driveways/))
**Date examined:** 2026-10-28 (via live search).

**Business model:** Direct **hydronic specialist installer** (not a coordinator) — a third-party review describes it as *"Hydronic only, no electric heated driveway installation"* and that it does not handle landscaping/surface work itself. Founder-led (the company's own content says "Jay founded Eco Mechanical in 2010"). Residential-leaning, no luxury-specific positioning found.

**SEO:** Has a dedicated hydronic-heated-driveways service page plus an educational blog post ("How Are People Melting the Snow Off Their Driveway? Introducing Hydronic Radiant Heated Driveways") — genuine topical hydronic content, which MeltGrid entirely lacks. No electric content at all. Pricing/cost page not found on the company's own domain; third-party cost guides citing the company disagree sharply ($26–$42/sqft plus a $9,000–$18,000 boiler vs. $63–$91/sqft elsewhere) — neither figure is MeltGrid-equivalent verified data, just market noise.

**Trust & authority:** Experience claims are **inconsistent across its own pages** — one page says "Installing Hydronic Heating Systems For Over 10 Years," another says "Installing HVAC Systems For Over 15 Years," a third-party listing says "15+ years." A third-party listing (unconfirmed on the company's own site) cites a 1-year labour warranty plus 3–10 year manufacturer component warranties. Service-area claims also diverge: own site names Toronto/Newmarket/Aurora/Thornhill; a third party adds Hamilton/Southern Ontario.

**Conversion:** Not confirmed (phone/form details not visible in search snippets).

**Why Google might prefer this page over MeltGrid's for a hydronic-specific query:** EC Mechanical has actual topical hydronic content and founder/experience narrative that MeltGrid has zero equivalent of — for any "hydronic heated driveway Toronto" query, EC Mechanical currently has content to rank on and MeltGrid has none. MeltGrid would lose this query entirely today by default, not on page quality but on topic absence.

---

### 4. MKC Group — Heated Driveway ([mkc-group.ca/residential/heated-driveway/](https://mkc-group.ca/residential/heated-driveway/))
**Date examined:** 2026-10-28 (via live search).

**Business model:** General residential exterior contractor (interlocking, driveways, etc.) for whom heated driveway is one add-on service line among many. No electric-vs-hydronic distinction stated. Service areas named: Vaughan, Toronto, Richmond Hill, Mississauga, Bradford West Gwillimbury.

**SEO:** Thin — search found a single short page (*"Stay winter-ready with MKC Group's heated driveway installations in Toronto and the GTA. We design and build snow-melting driveways and walkways"*) with no system-type detail, no pricing, no FAQ content surfaced, no dedicated city pages.

**Trust & authority / Conversion:** No pricing, warranty, licensing, review, or project-evidence claims surfaced in search results at all.

**Why Google might prefer MeltGrid over this page:** On content depth and structured FAQ/schema alone, MeltGrid's equivalent page is almost certainly stronger — MKC's page reads as a thin service-menu entry, not a dedicated content asset. This is a page MeltGrid should be able to outrank on quality once it has any indexing/authority at all.

---

### 5. Toronto Air Systems — Snow Melting System ([torontoairsystems.com/snow-melting-system-toronto-gta/](https://www.torontoairsystems.com/snow-melting-system-toronto-gta/))
**Date examined:** 2026-10-28 (via live search).

**Business model:** Direct **hydronic specialist installer**, residential and commercial. Describes PEX tubing embedded in concrete/asphalt/pavers heated by a boiler or heat pump. Claims **TSSA licensing** (Technical Standards and Safety Authority — relevant real regulatory credential for gas/mechanical work, not confirmed independently but a specific, checkable claim rather than vague marketing). No electric content found — hydronic-only positioning.

**SEO:** Dedicated page at an exact-match URL slug (`/snow-melting-system-toronto-gta/`) covering residential + commercial use cases (loading docks, building entrances, parking ramps, plaza sidewalks for commercial). No pricing figures found on the company's own site — only a comparative claim that hydronic is "dramatically more cost-effective to operate at larger scale" (unquantified).

**Trust & authority:** TSSA licensing claim is a genuine differentiator vs. most competitors' generic claims — it's the kind of credential that matters for E-E-A-T on YMYL-adjacent home-improvement content. No reviews, warranty, or project photos confirmed.

**Conversion:** Not confirmed.

**Why Google might prefer this page over MeltGrid's for "snow melting system Toronto":** Toronto Air Systems has an exact-match URL and topic specifically targeting the query, plus a specific regulatory credential (TSSA) that signals authority on hydronic/mechanical work — a trust signal MeltGrid cannot claim for itself (correctly, since MeltGrid doesn't employ the trades). MeltGrid's equivalent page would need to lean on its coordination-model trust signals (manufacturer backing, trade coordination) rather than compete on licensing claims directly.

---

### 6. MSD Contracting — Heated Driveway Installation ([msdcon.ca/landscaping/heated-driveway-installation](https://www.msdcon.ca/landscaping/heated-driveway-installation))
**Date examined:** 2026-10-28 (via live search).

**Business model:** General landscaping/construction company (interlocking, pools, retaining walls, lawn care) with heated driveway as one service line. Offers **both electric and hydronic**, explicitly framing electric as lower-upfront-cost and hydronic as lower-running-cost — a reasonably clear, accurate consumer-facing distinction. Claims operating in Toronto since 2006.

**SEO:** Has a dedicated heated-driveway page describing a four-step process (design → installation), and lists a broad GTA service area (Toronto, North York, Etobicoke, Markham, Vaughan, Mississauga). No pricing figures found.

**Trust & authority:** "Since 2006" claim is the only trust signal surfaced; no reviews, warranty, or licensing claims found for this specific service.

**Technical/data-quality flaw found:** Search results surfaced **inconsistent phone numbers across MSD's own pages** — the heated-driveway page shows what appears to be a placeholder number, (123) 456-7890, while the company's Toronto landing page shows (905) 726-3336. If accurate, this is a real, fixable conversion defect (a dead/placeholder phone number on a lead-gen page) — not an inference, a direct observation from the search snippets.

**Conversion:** Undermined, per the above, by at least one page showing what looks like an unreplaced template phone number — a meaningful conversion risk if still live.

**Why Google might prefer MeltGrid over this page:** MeltGrid's equivalent `/cost/` and `/heated-driveways/` pages are materially deeper and more carefully QA'd (consistent CTAs, no placeholder artifacts, full schema). If MSD's placeholder-number issue is still live, it is a concrete, fixable weakness MeltGrid does not share.

---

### 7. The Boiler Guys — Snowmelt Systems Toronto ([theboilerguys.com](https://www.theboilerguys.com/), specifically [/snowmelt-systems-toronto/](https://www.theboilerguys.com/snowmelt-systems-toronto/))
**Date examined:** 2026-10-28 (via live search).

**Business model:** Legacy **hydronic/boiler mechanical contractor** (direct installer), not a coordinator. Real street address found (83 Galaxy Boulevard, Unit 27, Toronto) and phone (1-888-563-1515). Hydronic-only — no electric content found.

**SEO:** Has a dedicated snowmelt-systems page, an "About" page, and an "Areas we service" page (naming specific GTA neighbourhoods: Mississauga, Downsview, Rosedale, Forest Hill, The Beaches — more granular geographic language than most competitors, though not structured as separate landing pages per the search evidence). The most substantive technical content found about this company is actually a **2016 third-party trade-magazine feature** (Plumbing & HVAC magazine) describing genuinely technical hydronic detail credited to the company: glycol-strength-by-region guidance, sensor staging logic (boiler staging, cold-weather shutdown, warm/away modes, zoning), and thermal-shock considerations for hard surfaces. That depth of engineering explanation is a real differentiator in hydronic expertise — but it's old and external, not confirmed as current on-site content.

**Trust & authority:** Long-standing boiler company with a real, specific address; no review counts, warranty terms, or current certifications confirmed from today's search.

**Conversion:** Not confirmed.

**Why Google might prefer this page over MeltGrid's for a hydronic-specific commercial query:** The Boiler Guys has genuine, hard-to-fake mechanical/engineering depth on hydronic snow melt (staging, zoning, glycol concentration) that no electric-only coordinator can match without adding equivalent hydronic content. This is the clearest evidence in this audit that real hydronic technical depth exists in the market and is a gap MeltGrid does not currently fill.

---

### 8. Electric FX — Snow Melting Systems ([electricfx.ca/snow-melting-systems/](https://electricfx.ca/snow-melting-systems/))
**Date examined:** 2026-10-28 (via live search).

**Finding:** I could not find **any evidence** that this URL/page currently exists with substantive content. Multiple searches (direct URL search, company name + "snow melting," company name + "electrician") returned no results from electricfx.ca itself; the only confirmed presence for "Electric FX" is a Facebook business listing describing it as a licensed Toronto electrical contractor (residential + commercial) with a Yonge St. address and "no ratings yet" — that listing **does not mention snow melting, heated driveways, or radiant heating at all**. Other, unrelated Toronto electrical firms (Electrix Group, Foxwood Electric) do confirmed snow-melting work and surfaced strongly instead.

This should be treated as: **either the page is real but has essentially zero current search visibility/indexing, or it is thin/inactive.** I cannot distinguish between those from here, and I am not fabricating content for a page I have no evidence of.

**Matrix scores:** Scored low across the board specifically because no supporting evidence of an active snow-melting content presence was found — not because the page was reviewed and judged weak.

---

### 9. Northpoint Plumbing — Driveway Snow Melting ([northpointplumbing.ca/service/driveway-snow-melting](https://northpointplumbing.ca/service/driveway-snow-melting))
**Date examined:** 2026-10-28 (via live search).

**Business model:** General plumbing company (24/7 residential/commercial plumbing) with driveway snow melting as one listed service, offering **both hydronic and electric** per its own page description ("hydronic and electric solutions"). Positioned around Ontario-winter reliability ("without shoveling or chemicals").

**SEO:** Has a dedicated service page but it reads as thin per the search summary — no pricing, no installation-process detail, no FAQ content surfaced, no dedicated city pages.

**Trust & authority:** Only the general "24/7 plumbing services" claim surfaced; nothing specific to snow melting (no reviews, licensing, or warranty specific to this service).

**Conversion:** Not confirmed.

**Why Google might prefer MeltGrid over this page:** This looks like one of the weaker competitor pages in the set — a short service-menu entry inside a general plumbing site, with no comparable content depth, FAQ, or schema signal to what MeltGrid's dedicated pages carry. A clear case where MeltGrid's page quality, once indexed, should be able to outrank it.

---

### 10. Action Home Services / AHS Heated Driveways — *found via live search, confirmed ranking* ([actionhomeservices.ca/heated-driveway/](https://actionhomeservices.ca/heated-driveway/), [actionhomeservices.ca/heated-driveway-cost-ontario/](https://actionhomeservices.ca/heated-driveway-cost-ontario/), [ahsheateddriveways.ca](https://ahsheateddriveways.ca/))
**Date examined:** 2026-10-28 (via live search; surfaced at or near the top of nearly every query I ran: "heated driveway Toronto," "heated driveway installation GTA," "heated driveway cost Ontario," plus multiple syndicated PR pieces).

**Business model:** Direct **installer with in-house crews** (not a coordinator) — the company's own site states every installation is "handled start to finish by our own crews." Offers both electric and "custom glycol" (hydronic) systems per summaries. Broader parent business is a **luxury landscaping/pool company** (AHS Landscaping), so heated driveway sits inside a premium residential-exterior brand. Residential-focused with evident commercial/Hamilton-market reach too.

**SEO:** The strongest content footprint found in this audit — a dedicated heated-driveway service page, a dedicated "Heated Driveway Cost in Toronto: 2026 Pricing Guide" page, and a dedicated "Are Heated Driveways Worth It in Ontario?" value-argument page. This is genuine topic-cluster depth (service + cost + value-justification), something none of the 8 client-specified competitors were confirmed to have at this level.

**Trust & authority:** By far the strongest trust-signal claims found: **"over 2,000 five-star Google reviews"**, a **9.9/10 HomeStars rating**, a **10-year labour warranty** (explicitly labour-only, not components), and awards claims (13 HomeStars Awards, 20 Landscape Ontario Awards, 25 Pool & Spa Industry Awards). **Important caveat:** a large share of the "Action Home Services ranked #1" content I found is itself **sponsored/promotional listicle and newswire content** (ManilaTimes, GlobeNewswire, horshamnow.com, mechanical-hub.com, carrying near-identical "Action Home Services ranks #1" language) rather than independent editorial coverage — this looks like an active, aggressive digital-PR/sponsored-content program, which is a real and replicable competitive tactic, not necessarily a reflection of unbiased consensus. The review/rating figures themselves were not independently verified in this session.

**Conversion:** Strong implied CTA/brand presence (not directly verified in form/phone detail here, but a company at this marketing scale almost certainly has mature conversion UX).

**Why Google currently prefers this page over MeltGrid's:** This is the single clearest "losing" comparison in the whole audit. AHS has (a) a full topic cluster (service + cost + value pages) instead of one page, (b) real accumulated review/rating signals at volume, (c) an active sponsored-content/PR program generating fresh external links and brand mentions, and (d) years of indexing history. MeltGrid currently has none of those — better on-page schema alone cannot compensate for zero reviews, zero backlink/PR footprint, and zero index age against a competitor actively running paid placement content.

---

### 11. Precision Landscaping — Heated Driveways — *found via live search, confirmed ranking* ([precisionlandscaping.ca/heated-driveways.html](https://precisionlandscaping.ca/heated-driveways.html), plus city pages e.g. [/heated-driveways/vaughan.html](https://precisionlandscaping.ca/heated-driveways/vaughan.html), [/markham.html](https://precisionlandscaping.ca/heated-driveways/markham.html))
**Date examined:** 2026-10-28 (surfaced repeatedly across "Markham Vaughan," "heated driveway installation GTA," and city-specific searches).

**Business model:** Direct landscaping installer offering **both electric and hydronic**, with a clear, specific technical recommendation: the company's own blog argues electric is "rarely practical for full-size driveways in Ontario because of hydro rates and household capacity" and primarily recommends glycol-based hydronic for full-driveway coverage — a genuinely substantive technical/consultative content angle, not just a feature list.

**SEO:** The **strongest geographic/location-page footprint confirmed in this entire audit** — dedicated pages found for Vaughan, Markham, Nobleton, Etobicoke, Collingwood, Burlington, Mississauga, and North York, plus a separate cost-guide blog post. This is exactly the city-landing-page structure MeltGrid's site completely lacks.

**Trust & authority:** Claims "fully licensed and insured" with "system warranties," but a third-party 2026 ranking (11 Toronto heated-driveway contractors) placed Precision **4th**, citing "fewer verified client reviews and lower project volume" than the top-ranked AHS — a useful calibration that this is a credible mid-tier player, not the market leader.

**Pricing transparency:** The **most price-transparent competitor found** — publishes specific $/sqft ranges ($43.75–$60/sqft hydronic vs. $25–$40/sqft electric), directly answering the exact question MeltGrid's `/cost/` page explicitly refuses to answer.

**Conversion:** Not directly confirmed, but presence of blog + many location pages implies a maintained, actively marketed site.

**Why Google currently prefers this page over MeltGrid's for city-specific queries:** For any "heated driveway [Vaughan/Markham/Mississauga/etc.]" search, Precision has a dedicated, presumably locally-optimized page; MeltGrid has nothing at the city level at all. This is the single most concrete, fixable structural gap identified in this audit.

---

### 12. Country Renovations — Heated Driveway Toronto — *found via live search, confirmed ranking* ([countryreno.com/heated-driveway-toronto/](https://countryreno.com/heated-driveway-toronto/), [/electrical-services/](https://countryreno.com/electrical-services/))
**Date examined:** 2026-10-28 (surfaced in "Markham Vaughan" and general cost searches).

**Business model:** Electrical-contractor-led direct installer — core business is electrical work, with heated driveway as an extension of that. Explicitly claims to operate with **in-house ESA-licensed electricians**, serving Toronto, Vaughan, Markham, and Mississauga "since 2014."

**SEO:** Has a dedicated "Heated Driveway Toronto: 2026 Cost, ROI & Install Guide" page plus a separate electrical-services page. Content includes specific, checkable regulatory detail: *"ESA notification (electric) is mandatory. City of Toronto building permit is generally not required, but right-of-way / curb cut / heritage permits may apply."* This kind of precise permit/regulatory guidance is a genuine trust-and-usefulness signal not found on most competitor pages, including MeltGrid's.

**Trust & authority:** The clearest and most specific licensing/insurance claim set found in this audit: **ECRA/ESA-licensed electrical contractor status, WSIB-covered trades on every job, $5M general liability insurance, and a written workmanship warranty** (term unstated). This is exactly the kind of direct-employment-of-licensed-trades claim that MeltGrid's coordinator model explicitly does *not* make for itself — a legitimate point of competitive contrast, not a flaw in MeltGrid's honesty, but a trust-signal gap a reader comparing the two sites would notice.

**Pricing:** Has a cost/ROI guide page (content found, specific $ figures not confirmed in the search snippet).

**Conversion:** Not directly confirmed.

**Why Google might prefer this page over MeltGrid's for "electric heated driveway Toronto":** Country Renovations can make a first-party claim MeltGrid structurally cannot ("our own ESA-licensed electricians, $5M insured, WSIB-covered") — a direct-employment trust signal that reads as more reassuring to a homeowner than a coordination model, even though MeltGrid's coordination model has real advantages (see Opportunities below). On a page-for-page trust-signal comparison for electrical work specifically, this page currently wins.

---

### 13. InFloor Heat / Canadian In-Floor Radiant Solutions — *found via live search, confirmed ranking* ([infloorheat.ca/snow-melt/](https://infloorheat.ca/snow-melt/), plus multiple blog posts)
**Date examined:** 2026-10-28 (surfaced repeatedly for "hydronic snow melting Ontario" and related queries).

**Business model:** Direct **hydronic/radiant-floor specialist installer**, explicitly positioned toward **luxury homes and commercial properties** ("hydronic snow melt systems are the go-to choice for luxury homes and commercial properties"). Notably pitches **bundling a driveway snow-melt zone onto an existing radiant-floor-heating boiler system** as a cost synergy — a sophisticated, specific value proposition. Regional coverage: Burlington, Hamilton, GTA, Niagara, and cottage country.

**SEO:** High **content-marketing volume** in a single vertical — multiple distinct blog posts found (walkways/entryways combined with driveway snowmelt, customizing for home layout, thermal-mass heating for commercial construction) functioning as a hydronic topic cluster, similar in structure (though hydronic-only) to what MeltGrid has built for electric.

**Trust & authority:** No reviews, awards, or years-in-business claim surfaced. Cost page exists but was "truncated in results" — content presumably exists but no $ figures confirmed.

**Conversion:** Not confirmed.

**Why Google might prefer this page over MeltGrid's for "hydronic snow melt luxury home":** This is the one competitor whose content strategy most resembles what MeltGrid would need to replicate to credibly claim "electric AND hydronic" — topic-cluster blog content specifically on hydronic integration scenarios. MeltGrid's total absence of hydronic content means it cannot currently compete for this exact audience/query type at all.

---

## Comparison matrix (1–10 scale; higher = stronger)

MeltMyWay and Electric FX could not be meaningfully scored — no verifiable page content was found for either despite multiple direct searches today — so they are listed with a status note instead of fabricated scores.

| Competitor | SEO content depth | Technical SEO | Hydronic expertise | Electric expertise | Trust signals | Project evidence | Conversion design | Pricing transparency | Geographic targeting | **Overall strength** |
|---|---|---|---|---|---|---|---|---|---|---|
| **MeltGrid Canada** | 8 — deep, unique, FAQ-rich pages on every core topic (cost drivers, technology, how-it-works, trade coordination) | 9 — full JSON-LD (Organization/WebPage/WebSite/BreadcrumbList/Service/FAQPage) on every page, confirmed by direct source view; clean static build | 1 — zero hydronic content found anywhere on the site (confirmed via grep across all pages) | 8 — detailed mats/cable/sensor/controller explanation, manufacturer-credited (WarmlyYours) | 2 — no reviews, no years-in-business claim, no licensing numbers; honestly disclaims it isn't a manufacturer or trade employer | 1 — explicitly discloses all imagery is manufacturer stock, not MeltGrid's own installs | 6 — phone visible everywhere, but 5-step form adds friction vs. one-field competitor forms | 2 — explicitly refuses to publish any $ or $/sqft figures, by policy | 3 — "Ontario/GTA" only, zero dedicated city pages | **3** — strong technical bones, no visibility, no proof, no hydronic coverage |
| **Action Home Services / AHS** | 8 — service + cost-guide + "worth it" value page = real topic cluster | 7 — inferred from strong, repeated ranking presence across many distinct query types (not directly viewed) | 6 — offers "custom glycol" systems per summaries, not a hydronic specialist's depth | 6 — offers electric, not deeply differentiated in available snippets | 9 — claims 2,000+ 5-star Google reviews, 9.9/10 HomeStars, 10-yr labour warranty, multiple awards (self-reported, unverified, but extensive) | 7 — established luxury landscaping/pool brand, in-house crews claimed; direct photo evidence not directly viewed but plausible at this scale | 7 — mature marketing brand implies mature conversion funnel (not directly verified) | 6 — has a dedicated cost-guide page (content found, not line-item verified here) | 6 — GTA + confirmed Hamilton-market push via PR | **9** — dominant content, review, and PR footprint; clear current market leader by visibility |
| **Precision Landscaping** | 8 — service page + 8 confirmed city pages + cost blog post | 7 — inferred from broad multi-city ranking presence | 8 — specific, consultative recommendation (glycol hydronic for full coverage) with stated rationale | 7 — electric explained as the lower-upfront, smaller-driveway option | 5 — "licensed and insured" claimed but ranked 4th of 11 in a third-party list citing fewer verified reviews | 4 — not confirmed from available snippets | 6 — not directly confirmed, inferred average | 9 — only competitor publishing specific $/sqft figures for both system types | 9 — strongest city-landing-page footprint found in this audit (8 distinct cities) | **7** — best-in-class geographic SEO and pricing transparency, mid-tier trust signals |
| **Country Renovations** | 6 — dedicated cost/ROI guide page + electrical-services page | 5 — not independently confirmed | 3 — not clearly confirmed as offered (electrician-led site, hydronic not evidenced) | 8 — core business is electrical contracting; in-house ESA-licensed electricians claimed | 8 — specific, checkable claims: ECRA/ESA-licensed, WSIB-covered, $5M liability insurance, written warranty | 4 — not confirmed | 5 — not confirmed | 6 — has a cost/ROI guide page; specific figures not confirmed | 5 — names Toronto/Vaughan/Markham/Mississauga, no confirmed dedicated pages | **6** — strongest direct-employment licensing claims of any competitor audited |
| **InFloor Heat** | 7 — multi-post hydronic topic cluster (walkways, home-layout customization, commercial thermal mass) | 5 — not confirmed | 9 — core specialty; sophisticated radiant-floor-bundling value proposition | 2 — no electric content found; hydronic/radiant-only positioning | 3 — no reviews/awards/years-claim surfaced | 3 — not confirmed | 5 — not confirmed | 4 — cost page exists but truncated in results, no figures confirmed | 5 — Burlington/Hamilton/GTA/Niagara/cottage country, no city pages confirmed | **5** — the closest model to what MeltGrid would need to add for credible hydronic coverage |
| **EC Mechanical** | 6 — dedicated hydronic-driveway service page + educational blog post | 5 — not confirmed | 8 — founder-led specialist, "hydronic only" per third party, deep stated experience | 1 — explicitly hydronic-only, no electric per third-party review | 5 — founder narrative present but experience-years claims conflict across its own pages (10 yrs vs. 15 yrs) | 3 — not confirmed | 5 — not confirmed | 2 — no own-site pricing found; third-party guides citing it disagree wildly ($26–42 vs. $63–91/sqft) | 5 — Toronto/Newmarket/Aurora/Thornhill named; Hamilton only per third party | **4** — legitimate hydronic specialist undercut by inconsistent self-reported claims |
| **Toronto Air Systems** | 6 — dedicated exact-match-URL service page covering residential + commercial | 6 — exact-match URL slug is a real, confirmed signal | 8 — detailed PEX/boiler/heat-pump technical explanation | 1 — hydronic-only positioning, no electric found | 6 — claims TSSA licensing, a specific checkable regulatory credential (stronger than vague claims) | 3 — not confirmed | 5 — not confirmed | 2 — only a comparative, unquantified cost claim | 4 — "entirety of the GTA," no city pages confirmed | **5** — credible licensed hydronic specialist, moderate footprint |
| **The Boiler Guys** | 6 — dedicated snowmelt page + about + areas-served page; deepest confirmed technical explanation found anywhere (via a 2016 trade-press feature) | 5 — not confirmed | 8 — genuine engineering depth: glycol concentration by region, sensor staging/zoning logic, thermal-shock handling | 1 — hydronic/boiler-only | 6 — real address, long-standing boiler company, pre-dates most competitors' content | 3 — not confirmed | 5 — not confirmed | 2 — no pricing found | 5 — specific GTA neighbourhoods named (Mississauga, Downsview, Rosedale, Forest Hill, The Beaches) | **4** — legacy mechanical credibility, thin/dated current content footprint |
| **MSD Contracting** | 6 — dedicated 4-step-process page inside broader landscaping/GC site | 3 — a likely placeholder phone number, (123) 456-7890, found on the heated-driveway page itself, conflicting with (905) 726-3336 elsewhere on the same domain — a real, observed technical/conversion defect | 5 — mentioned (lower running cost) without depth | 5 — mentioned (lower upfront cost) without depth | 5 — "since 2006" claim only | 4 — not confirmed for this service specifically | 3 — undermined by the apparent placeholder-number issue | 2 — no pricing found | 5 — broad GTA municipality list named | **3** — generalist add-on service page with a live, fixable data-quality defect |
| **MKC Group** | 3 — single short page, no system-type detail, no FAQ | 4 — not confirmed | 1 — not specified on-site | 1 — not specified on-site | 2 — nothing found | 3 — not confirmed | 4 — not confirmed | 1 — none found | 4 — service areas listed generically, no dedicated pages | **2** — thin add-on page inside a general exterior-contractor site |
| **Northpoint Plumbing** | 4 — dedicated page but thin per search summary (no pricing, no process, no FAQ) | 4 — not confirmed | 4 — mentioned, no depth | 4 — mentioned, no depth | 3 — only general "24/7 plumbing" claim, nothing snow-melt-specific | 2 — not confirmed | 4 — not confirmed | 1 — none found | 3 — "GTA" only, generic | **2** — thin service-menu entry inside a general plumbing site |
| **MeltMyWay** | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *No verifiable content found in any search run today — status unknown, not scored as weak* |
| **Electric FX** | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *Not scored* | *No evidence of an active snow-melting page found; confirmed Facebook listing doesn't mention the service at all* |

---

## Where competitors currently beat MeltGrid

1. **Review volume and social proof (Action Home Services).** AHS's claimed 2,000+ five-star reviews and 9.9/10 HomeStars rating, real or not fully independently verifiable, create a trust gap no amount of schema markup closes. MeltGrid has zero reviews of any kind.
2. **City/location landing pages (Precision Landscaping, and implicitly most GTA competitors).** Precision has confirmed dedicated pages for at least 8 GTA-area municipalities; MeltGrid has none. This is probably the single most mechanical, fixable SEO gap — GTA buyers search by city name, and MeltGrid cannot currently appear for "heated driveway Vaughan"-style queries at all via a dedicated page.
3. **Published pricing (Precision Landscaping, several city-guide domains).** Precision and multiple third-party cost guides publish specific $/sqft figures; MeltGrid's `/cost/` page explicitly refuses to. Whatever the business reasons for that policy, it is a real content gap against competitors who answer the question directly.
4. **Direct-employment licensing claims (Country Renovations).** "Our own ESA-licensed electricians, WSIB-covered, $5M insured" is a reassuring, specific first-party claim MeltGrid's coordination model cannot make about itself — and the audit found no equivalent specific claim on MeltGrid's site about the trades it coordinates (e.g., no statement like "we only coordinate ESA-licensed electricians").
5. **Hydronic technical depth (The Boiler Guys, EC Mechanical, Toronto Air Systems, InFloor Heat).** Four different competitors have real hydronic engineering content (staging/zoning logic, glycol concentration guidance, boiler integration, TSSA licensing). MeltGrid has none — a complete topical gap for any hydronic-intent query, even though the business brief states MeltGrid coordinates hydronic too.
6. **Active digital PR / earned-media footprint (Action Home Services).** AHS's repeated appearance in syndicated "top 5 installer" content (even where that content is sponsored/promotional) generates fresh external links, brand mentions, and recency signals MeltGrid has none of as a new site.

## Where MeltGrid has a believable opening to beat them

1. **The single-point-of-contact, dual-system (electric + hydronic) coordination story is genuinely rare and currently unclaimed.** Of the 12 audited competitors, the overwhelming majority are single-trade or single-system specialists: EC Mechanical, Toronto Air Systems, and The Boiler Guys are confirmed hydronic-only; MKC Group's page gives no system distinction at all; Country Renovations is electrician-led. Only MSD Contracting, Precision Landscaping, Northpoint Plumbing, and (per general claims) Action Home Services present both system types on one page, and none of them frame it as cross-manufacturer, cross-trade *coordination* the way MeltGrid's `/about/` and `/trade-partners/` pages do. If MeltGrid actually adds genuine hydronic content (even coordinator-framed, not claiming to be the installer) to match its existing electric depth, no audited competitor currently combines "real depth on both systems" with "explicit multi-trade coordination" as a stated value proposition. This is the clearest differentiated-positioning opening in the whole audit.
2. **Technical SEO foundation is already ahead of what's confirmed for every competitor.** Full, consistent JSON-LD schema (Organization/WebPage/WebSite/BreadcrumbList/Service/FAQPage) on every page, clean architecture, genuine FAQ depth, and no competitor was confirmed to match that breadth. Once MeltGrid has any index age/authority, this foundation should convert into real ranking advantage that most of these competitor sites (several of which show signs of being older, less structured business sites with heated-driveway bolted on) cannot easily replicate without a rebuild.
3. **Honesty about scope as a differentiator.** MeltGrid's explicit "we are not a manufacturer, we don't claim to be your electrician" disclosure (unusual in this category — most competitors blur installer/coordinator distinctions or make broad claims) could be reframed as a trust asset ("we tell you exactly who does what, and verify it against manufacturer and licensed-trade requirements") rather than left as a bare disclaimer, directly countering Country Renovations' "our own licensed trades" pitch with "we verify and coordinate licensed, insured trades for every project — you get the right specialist for each trade, not a landscaper doing electrical."
4. **City/location pages are a known, mechanical gap with a known fix.** Unlike review volume or years-in-business (which cannot be manufactured honestly), dedicated GTA city pages are straightforward content production that directly closes the single most common structural advantage multiple competitors (Precision Landscaping especially) currently hold.

---

## Full list of competitors audited (12 scored/assessed + MeltGrid)

1. [MeltGrid Canada](https://meltgridcanada.ca/) — the client (baseline, audited from own site source)
2. [MeltMyWay](https://www.meltmyway.ca/) — client-specified; no verifiable content found today
3. [EC Mechanical](https://ecmechanical.ca/services/hydronic-heating/heated-driveways/) — client-specified
4. [MKC Group](https://mkc-group.ca/residential/heated-driveway/) — client-specified
5. [Toronto Air Systems](https://www.torontoairsystems.com/snow-melting-system-toronto-gta/) — client-specified
6. [MSD Contracting](https://www.msdcon.ca/landscaping/heated-driveway-installation) — client-specified
7. [The Boiler Guys](https://www.theboilerguys.com/) — client-specified
8. [Electric FX](https://electricfx.ca/snow-melting-systems/) — client-specified; no active snow-melting content found today
9. [Northpoint Plumbing](https://northpointplumbing.ca/service/driveway-snow-melting) — client-specified
10. [Action Home Services / AHS](https://actionhomeservices.ca/heated-driveway/) — found via live search today, confirmed ranking across multiple queries
11. [Precision Landscaping](https://precisionlandscaping.ca/heated-driveways.html) — found via live search today, confirmed ranking across multiple queries
12. [Country Renovations](https://countryreno.com/heated-driveway-toronto/) — found via live search today, confirmed ranking
13. [InFloor Heat](https://infloorheat.ca/snow-melt/) — found via live search today, confirmed ranking
