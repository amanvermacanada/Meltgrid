# MeltGrid Canada — SEO & Content Audit

**Site:** https://meltgridcanada.ca/ | **Business model:** Snow-melting system coordinator/designer (NOT a manufacturer, NOT a licensed electrical/mechanical contractor) connecting customers to equipment (WarmlyYours) and licensed trades.
**Source:** Static build extraction pulled from live Hostinger host, 2026-09-22. Audit performed 2026-10-28.
**Scope:** All 18 indexable routes per `sitemap-0.xml`. `404.html` and the Google Search Console verification file (`googleba416822be576c8f.html`) were excluded as instructed.

> **Live cross-check note:** This sandboxed research session's outbound network does not resolve `meltgridcanada.ca` (DNS/proxy blocks the host — confirmed via both WebFetch and a direct `curl`, which returned `CONNECT tunnel failed, response 403`). I could **not** verify the live site matches the 2026-09-22 extraction. Nothing below is fabricated to cover for this — treat the extraction as the source of truth and have someone re-run a live spot-check (or re-attempt from an unrestricted network) before acting on anything date-sensitive. No Core Web Vitals, GSC, GA, or Keyword Planner data was used or fabricated anywhere in this report, per instructions.

---

## 1. Page-by-page inventory

Internal link counts below include header/footer nav (present identically on every page) plus in-body contextual links. "Word count" is **body copy only** (inside `<main>`, excluding header/footer nav text) — the raw full-page text count is roughly 1,100–1,400 words higher on every page because of repeated nav/footer boilerplate.

### `/` (Homepage)
- **Title:** `Heated Driveways & Snow Melting Systems | MeltGrid Canada`
- **Meta description:** "Automatic snow and ice-melting systems for Canadian driveways, walkways, steps and commercial entrances. Request a free design and estimate from MeltGrid Canada."
- **Canonical:** `https://meltgridcanada.ca/`
- **Primary keyword target:** "heated driveway" / "snow melting systems canada" (broad, navigational+commercial hybrid)
- **Search intent:** Navigational / commercial investigation (brand + category entry point)
- **H1:** "Snow falls. Your driveway stays clear."
- **Heading outline:** H2s — See how it works; What do you want to keep clear?; You don't always need to heat everything; Built into your surface (H3: Asphalt/Concrete/Pavers); Residential and commercial snow melting (H3: Residential/Commercial); The technology under the surface (H3/H4 tree for mats/cable/controls/sensors); See snow melting in action; How a project works (6 H3 steps); What determines the cost…; Engineered below. Invisible above.; Why MeltGrid (H3/H4 trust points); Bring snow melting to your next project; Questions about heated driveways (9 FAQ H3s); Your next snowfall could be different; then footer H2s (Solutions/By surface/Plan your project/Company).
- **Word count:** ~2,020 (main content)
- **Schema:** `Organization` + `FAQPage` (9 Q&As). **No BreadcrumbList** on homepage (correctly omitted — homepage doesn't need one).
- **Internal links:** 22, incl. anchors into `/residential/#patios|#steps|#walkways` (verified these IDs exist — not broken) and query-param links `/contact/?project=residential`, `/contact/?project=commercial`, `/contact/?intent=coverage-help`.
- **External links:** 1 — a WarmlyYours installation video.
- **Content quality:** **Strong.** Comprehensive, well-structured, answers the core buyer questions, has a working FAQ schema, and is the only page linking out to the manufacturer. H1 is a brand-voice headline rather than a keyword-matched one, which is fine for a homepage.
- **Technical issues:** None page-specific beyond the sitewide footer-heading issue (see §2). H1 doesn't contain "heated driveway" or "snow melting" — minor missed on-page signal reinforcement (title/meta carry it, so low severity).
- **Conversion:** Excellent — persistent header has click-to-call (`tel:+14377745305`) and nav; at least 7 distinct "Request my free design & estimate" CTAs down the page; 0 clicks to reach a CTA (it's in the sticky header on load). No price ranges stated anywhere (by design — see `/cost/`).
- **Recommendation:** **Keep.** It's doing its job; only incremental polish needed (see prioritized list).

### `/about/`
- **Title:** `About MeltGrid Canada | Snow Melting Systems`
- **Meta description:** "MeltGrid Canada designs and coordinates automatic snow and ice-melting systems for Canadian homes and businesses, using WarmlyYours technology."
- **Canonical:** `/about/`
- **Primary keyword target:** "MeltGrid Canada" / brand + "who we are" — informational/navigational, not a ranking play.
- **Intent:** Navigational / trust (E-E-A-T support page).
- **H1:** "One point of contact for snow melting"
- **Headings:** What we do; Who makes the technology; How we work (H3: We design before we quote / Clear recommendations… / We coordinate the trades); Built around Canadian winters; Explore; Start with a free design and estimate; + footer H2s.
- **Word count:** ~430 (thin for an About page that's doing E-E-A-T work)
- **Schema:** `AboutPage` + `BreadcrumbList`. No `Organization` schema repeated here (fine, it's on homepage) but also **no `Person`/team schema** and the page names no individual — see trust gap below.
- **Internal links:** 16 (all nav/footer — **zero contextual body links** to service pages beyond the generic footer).
- **Content quality:** **Adequate, borderline thin.** This is the one page explicitly confirming the coordinator model ("We design before we quote," "We coordinate the trades") and disclosing the Ontario/GTA focus ("Our project support is built around Canadian winters and construction, starting in Ontario and the Greater Toronto Area. If your property is elsewhere, send us the details…") — this is important disclosure buried at ~400 words deep with no reinforcement elsewhere, and no named founder/team, no years-in-business, no project count, no certifications/licenses of partner tradespeople named.
- **Technical issues:** Thin word count; no body-content internal links (contextual, not nav) to deeper pages.
- **Conversion:** CTA present (Request free design, Contact us), phone/email visible via header/footer.
- **Recommendation:** **Improve.** Add a short "why trust us" proof section (founder bio or company background, partner-manufacturer credentials, service-area map/list, maybe a project count or testimonial) — this is the highest-leverage trust page on the site and it's currently the thinnest.

### `/commercial/`
- **Title:** `Commercial Snow Melting Systems | MeltGrid Canada`
- **Meta:** "Automatic snow and ice melting for commercial entrances, ramps, walkways and high-traffic areas, with zoned controls for larger properties. Request an assessment."
- **Canonical:** `/commercial/`
- **Primary keyword:** "commercial snow melting systems"
- **Intent:** Commercial investigation / transactional (B2B/property-manager audience)
- **H1:** "Commercial snow melting for entrances, ramps and walkways"
- **Headings:** Where it goes on a commercial property (6 H3 areas); Controls that scale to larger properties; How a commercial project is run (6 H3 steps); What helps us assess your property (6 H3 inputs); Commercial questions (5 FAQ H3s); Related pages; Request a commercial assessment; footer.
- **Word count:** ~760
- **Schema:** `WebPage` + `BreadcrumbList` + `Service` + `FAQPage`.
- **Internal links:** 17, incl. `/contact/?project=commercial`.
- **Content quality:** **Strong** — well-differentiated from residential by audience and use-case (ramps, loading routes, zoned multi-area control), has its own dedicated commercial-assessment CTA path.
- **Technical issues:** None notable.
- **Conversion:** Good — "Request commercial assessment" is a distinct, audience-matched CTA label rather than generic.
- **Recommendation:** **Keep.** Differentiation from `/residential/` and `/heated-driveways/` is already clear by audience; no action needed beyond general site-wide fixes.

### `/contact/`
- **Title:** `Request a Free Design & Estimate | MeltGrid Canada`
- **Meta:** "Request a free snow-melting design and estimate from MeltGrid Canada. Tell us about the project, surface, size and timing, and attach photos or plans."
- **Canonical:** `/contact/`
- **Primary keyword:** transactional brand term, no real keyword target — this is the conversion endpoint.
- **Intent:** Transactional.
- **H1:** "Request my free design & estimate"
- **Headings:** Project details; Request received; Prefer to talk?; Helpful to have ready; What happens next; footer.
- **Word count:** ~410
- **Schema:** `ContactPage` + `BreadcrumbList`. **No `LocalBusiness`/NAP schema and no explicit address** — consistent with being a coordinator without a public storefront, but there's also no explicit service-area statement on this page itself (it's only on `/about/`).
- **Internal links:** 16 (nav/footer only).
- **Content quality:** **Adequate** for a transactional form page — supports both form submission (query-string pre-fill from other pages: `?project=residential`, `?surface=asphalt`, etc. — a nice touch for CRM segmentation) and phone fallback ("Prefer to talk?").
- **Technical issues:** None.
- **Conversion:** This **is** the conversion page — it's reachable in exactly 1 click from every other page's CTA, phone number is click-to-call, "Helpful to have ready" sets expectations (reduces form abandonment), "What happens next" reduces anxiety. This is well done.
- **Recommendation:** **Keep.** Consider adding a one-line reassurance near the form about response time (e.g., "we reply within 1 business day") if true — currently no SLA/response-time expectation is set anywhere on the site.

### `/cost/`
- **Title:** `Heated Driveway Cost & Planning | MeltGrid Canada`
- **Meta:** "What determines the cost of a heated driveway or snow melting system: size, coverage, surface, electrical work, controls and site conditions."
- **Canonical:** `/cost/`
- **Primary keyword:** "heated driveway cost"
- **Intent:** Commercial investigation (classic pre-purchase research query).
- **H1:** "What determines the cost of snow melting"
- **Headings:** Six things that shape the cost (6 H3); You control how much you heat (4 H3 coverage patterns); What affects running cost (4 H3); Getting your number (4 H3 process steps); Cost questions (5 FAQ H3, incl. "Why don't you publish prices?"); Related pages; Get a number for your property; footer.
- **Word count:** ~805
- **Schema:** `WebPage` + `BreadcrumbList` + `FAQPage`.
- **Internal links:** 17, incl. a contextual link to `/resources/heated-driveway-running-cost/`.
- **Content quality:** **Strong.** Directly and transparently addresses "why no prices are published" (an objection-handling FAQ), which is smart given no price ranges exist anywhere on the site.
- **Technical issues:** None notable. Note: **this is the only true "cost" page** — see cannibalization note in §3 regarding overlap with `/resources/heated-driveway-running-cost/` (installation cost vs. running/operating cost — these are different questions but titles/snippets could confuse searchers and internal anchor text should keep disambiguating them, which it currently does well via "Related pages" link text).
- **Conversion:** Good — "Get a number for your property" CTA, phone/email present.
- **Recommendation:** **Keep**, but consider adding at least a rough **range** (even a wide "$X,000–$Y,000+ depending on size and surface" caveat-heavy range) since "why don't you publish prices" pages that still give zero numeric anchor can frustrate bottom-of-funnel searchers and increase bounce before the form. This is a judgment call against the "estimate requires assessment" business model — flagging as a conversion consideration, not a factual gap.

### `/heated-driveways/`
- **Title:** `Heated Driveways in Canada | MeltGrid Canada`
- **Meta:** "How a heated driveway works, which surfaces and coverage options exist, and what to plan before you build or resurface. Request a free design and estimate."
- **Canonical:** `/heated-driveways/`
- **Primary keyword:** "heated driveway" (the site's single highest-value head term)
- **Intent:** Commercial investigation, some informational overlap ("how it works").
- **H1:** "Heated driveways for Canadian winters"
- **Headings:** How a heated driveway works; What is your driveway made of?; You do not have to heat everything; What to plan before you build or resurface (6 H3); Heated driveway questions (6 FAQ H3); Keep reading; Ready to plan your driveway?; footer.
- **Word count:** ~1,090 — the largest residential-surface page.
- **Schema:** `WebPage` + `BreadcrumbList` + `Service` + `FAQPage`.
- **Internal links:** 18, incl. `/contact/?project=residential&intent=coverage-help`.
- **Content quality:** **Strong**, and clearly this site's flagship commercial-intent page for its #1 head term. See cannibalization note — this page substantially overlaps `/residential/` and `/cost/` in topic.
- **Technical issues:** None notable.
- **Conversion:** Strong, multiple CTAs, good anchor text variety.
- **Recommendation:** **Keep as the pillar page for "heated driveway"**, but tighten its boundary against `/residential/` (see §3).

### `/how-it-works/`
- **Title:** `How Snow Melting Systems Work | MeltGrid Canada`
- **Meta:** "How a snow and ice melting system works: heating elements in the surface, a sensor that detects conditions and a controller that runs it."
- **Canonical:** `/how-it-works/`
- **Primary keyword:** "how snow melting systems work" / "how do heated driveways work"
- **Intent:** Informational (top-of-funnel).
- **H1:** "From first snowflake to a clear surface"
- **Headings:** Follow one snowfall, step by step; The heating layer; The sensor; The controller; Ways to control a system (4 H3); How it works: questions (5 FAQ H3); Next steps; See how it would work on your property; footer.
- **Word count:** ~835
- **Schema:** `WebPage` + `BreadcrumbList` + `FAQPage` (no `Service` here, appropriately — it's informational not a service-offer page).
- **Content quality:** **Strong**, clean informational piece, good narrative device ("follow one snowfall").
- **Overlap:** Heavy topical overlap with the homepage's "How a project works" / "technology" sections and with `/technology/`. See §3.
- **Recommendation:** **Keep**, it's the right home for this specific informational intent, but tighten against `/technology/`.

### `/privacy/`
- **Title:** `Privacy Policy | MeltGrid Canada`
- **Meta:** "How MeltGrid Canada collects, uses and protects the information submitted through the Request My Free Design & Estimate form, including photos and plans."
- **Canonical:** `/privacy/`
- **Primary keyword:** none (legal/utility page, no SEO target).
- **Intent:** Navigational.
- **H1:** "How we handle your information"
- **Headings:** 12 H2 legal sections (What this policy covers / What we collect / … / Contact us) + footer.
- **Word count:** ~820
- **Schema:** `WebPage` + `BreadcrumbList` (no `PrivacyPolicy`-specific type needed; fine).
- **External links:** Formspree privacy policy, Google privacy policy — correctly disclosed (confirms Formspree is the form backend and some Google service, likely Analytics/Fonts, is in use).
- **Content quality:** **Adequate** for a legal utility page — plain-language, specific about what's collected (including photos/plans from the contact form).
- **Recommendation:** **Keep** as-is; no SEO action warranted.

### `/residential/`
- **Title:** `Residential Snow Melting Systems | MeltGrid Canada`
- **Meta:** "Automatic snow and ice melting for home driveways, walkways, entrances, steps and patios. See what can be heated and request a free design and estimate."
- **Canonical:** `/residential/`
- **Primary keyword:** "residential snow melting systems"
- **Intent:** Commercial investigation.
- **H1:** "Snow melting for the parts of your home you use every day"
- **Headings:** Driveways; Walkways and entrances; Steps; Patios and outdoor living spaces (4 H2 "zones", each anchor-linkable — `#walkways`, `#steps`, `#patios` are real jump targets used from the homepage); Planning a residential project (4 H3); Choose by surface; Residential questions (5 FAQ H3); Tell us about your home; footer.
- **Word count:** ~695
- **Schema:** `WebPage` + `BreadcrumbList` + `Service` + `FAQPage`.
- **Content quality:** **Strong** structurally (the zone-based H2 breakdown with anchor IDs is a nice UX/internal-linking pattern), but it substantially re-covers driveway content already owned by `/heated-driveways/`. See §3.
- **Recommendation:** **Keep**, but its driveway section should defer more explicitly to `/heated-driveways/` as the canonical driveway page and spend its own word count on walkways/steps/patios, which currently have no dedicated deep pages of their own (an opportunity, not just a cannibalization risk).

### `/resources/` (hub)
- **Title:** `Resources | MeltGrid Canada`
- **Meta:** "Direct answers on heated-driveway running cost, electrical requirements and retrofitting an existing driveway, grounded in WarmlyYours technical documentation."
- **Canonical:** `/resources/`
- **Primary keyword:** none strong — hub/index page.
- **Intent:** Informational hub / navigational.
- **H1:** "Straight answers on snow melting"
- **Headings:** Guides; Or start with the basics; footer.
- **Word count:** ~160 — **thinnest page on the site.**
- **Schema:** `WebPage` + `BreadcrumbList` only — **no `CollectionPage`/`ItemList` schema** linking the three articles, a missed easy win.
- **Internal links:** 19 (links to all 3 resource articles plus standard nav).
- **Content quality:** **Thin.** It's functioning purely as a links page with almost no unique copy of its own, and the meta description's claim "grounded in WarmlyYours technical documentation" is not backed by any visible citation or outbound link to WarmlyYours documentation from this hub or its three children (only the homepage has one external WarmlyYours link, a video, not documentation).
- **Recommendation:** **Improve.** Add a short framing paragraph per listed guide (1–2 sentences each, not just a title+arrow link) and add `CollectionPage`/`ItemList` schema. Also a good candidate to eventually hold more articles as the content library grows (currently only 3).

### `/resources/electrical-requirements/`
- **Title:** `Electrical Requirements for Snow Melting | MeltGrid Canada`
- **Meta:** "How power draw scales with heated area, what snow-melting controls are rated for, and what a qualified electrician confirms before installation."
- **Canonical:** `/resources/electrical-requirements/`
- **Primary keyword:** "electrical requirements snow melting" / "heated driveway electrical requirements" — informational long-tail.
- **Intent:** Informational.
- **H1:** "Electrical requirements for snow-melting systems"
- **Headings:** How power draw scales with area (4 H3, incl. "About 50 watts per square foot"); What the controls are rated for (4 H3); What gets confirmed before installation (4 H3); Electrical questions (4 FAQ H3); Keep reading; Get an electrical plan for your property; footer.
- **Word count:** ~625
- **Schema:** `WebPage` + `BreadcrumbList` + `FAQPage`.
- **Content quality:** **Strong, well-scoped.** Correctly and repeatedly defers the licensed-electrical-work parts to "a qualified electrician" — good liability/compliance hygiene matching the coordinator business model, and no overlap with a main service page (there's no other page that does a deep electrical dive). Good differentiated long-tail asset.
- **Recommendation:** **Keep.**

### `/resources/existing-driveway-retrofit/`
- **Title:** `Snow Melting on an Existing Driveway? | MeltGrid Canada`
- **Meta:** "Retrofit methods for adding snow melting to an existing asphalt or concrete driveway, and why an existing paver driveway is a different case."
- **Canonical:** `/resources/existing-driveway-retrofit/`
- **Primary keyword:** "snow melting existing driveway retrofit" / "add heated driveway to existing driveway"
- **Intent:** Commercial investigation (a very real objection/question for homeowners with an existing driveway).
- **H1:** "Can snow melting be added to an existing driveway?"
- **Headings:** Retrofit methods by surface (3 H3: asphalt/concrete/pavers); What an assessment looks at (4 H3); Retrofit questions (4 FAQ H3); Keep reading; Ask about your specific driveway; footer.
- **Word count:** ~590
- **Schema:** `WebPage` + `BreadcrumbList` + `FAQPage`.
- **Content quality:** **Strong but overlapping** — this page's core content (retrofit-by-surface) is also covered inside each `/snow-melting/{asphalt,concrete,pavers}/` page's own FAQ ("Can snow melting be added to an existing asphalt driveway?" etc. appears verbatim-adjacent on both). See §3.
- **Recommendation:** **Consolidate-with `/snow-melting/*` pages** — see cannibalization section. Keep this as the single canonical retrofit page and have the three surface pages link to it instead of re-answering the same question in their own FAQ schema (currently near-duplicate `FAQPage` answers exist in 4 places for the same underlying question).

### `/resources/heated-driveway-running-cost/`
- **Title:** `How Much Does It Cost to Run a Heated Driveway? | MeltGrid Canada`
- **Meta:** "What actually determines the running cost of a heated driveway: power rating, coverage, controls and your electricity rate, with a worked example calculation."
- **Canonical:** `/resources/heated-driveway-running-cost/`
- **Primary keyword:** "heated driveway running cost" / "cost to run heated driveway"
- **Intent:** Informational with commercial-investigation overtones.
- **H1:** "How much does it cost to run a heated driveway?"
- **Headings:** The four numbers that matter (4 H3); A worked example; What lowers running cost (4 H3); Running cost questions (4 FAQ H3); Keep reading; Get real numbers for your property; footer.
- **Word count:** ~745
- **Schema:** `WebPage` + `BreadcrumbList` + `FAQPage`.
- **Content quality:** **Strong — the best-executed article on the site.** The "worked example" math (50 W/sq ft → kWh → multiply by the reader's own rate) is transparent, properly hedged as illustrative ("Treat this as a ceiling estimate, not a prediction"), and doesn't fabricate a specific dollar figure or utility rate. This is a good model for how the rest of the content should handle numbers.
- **Overlap:** Shares "what affects running cost" ground with `/cost/`'s "What affects running cost" H2 — see §3.
- **Recommendation:** **Keep** as the canonical running-cost deep-dive; `/cost/` should trim its own running-cost section to a summary + link here (it already partially does this).

### `/snow-melting/asphalt/`
- **Title:** `Snow Melting Under Asphalt Driveways | MeltGrid Canada`
- **Meta:** "How snow melting is installed under an asphalt driveway: the layers, the order of work with the paving crew and electrician, and options for existing driveways."
- **Canonical:** `/snow-melting/asphalt/`
- **Primary keyword:** "snow melting asphalt driveway" / "heated asphalt driveway"
- **Intent:** Commercial investigation / informational install-process.
- **H1:** "Snow melting under an asphalt driveway"
- **Headings:** How an asphalt driveway is built for snow melting; How installation goes (5 H3); Working with the paving crew (3 H3); Mat or cable in asphalt (2 H3); Asphalt questions (5 FAQ H3); Other surfaces; Planning snow melting for asphalt?; footer.
- **Word count:** ~810
- **Schema:** `WebPage` + `BreadcrumbList` + `Service` + `FAQPage`.
- **Content quality:** **Strong**, genuinely differentiated by surface-specific installation mechanics (base coat, elements, top coat sequencing with the paving crew) — this is real unique value, not filler.
- **Recommendation:** **Keep.**

### `/snow-melting/concrete/`
- Same structural pattern as asphalt. **Title:** `Concrete Snow Melting Systems | MeltGrid Canada`. **Meta:** "How snow melting is installed in concrete driveways, walkways and steps: where the heating sits in the slab, new pours versus existing slabs, and who does the work." **H1:** "Snow melting in concrete driveways and walkways." **Word count:** ~805. **Schema:** `WebPage`+`BreadcrumbList`+`Service`+`FAQPage`.
- **Content quality:** **Strong**, genuinely differentiated (rebar tie-in depth, pour sequencing, expansion-joint FAQ).
- **Recommendation:** **Keep.**

### `/snow-melting/pavers/`
- **Title:** `Snow Melting Under Pavers & Interlock | MeltGrid Canada`. **Meta:** "How snow melting is installed beneath pavers and interlock: the base build-up, mortar or sand beds, paver choice and how the trades coordinate." **H1:** "Snow melting beneath pavers and interlock." **Word count:** ~815. **Schema:** `WebPage`+`BreadcrumbList`+`Service`+`FAQPage`.
- **Content quality:** **Strong**, same pattern, with genuinely distinct content (mortar-vs-sand bed debate, permeable-paver FAQ).
- **Recommendation:** **Keep.**

### `/technology/`
- **Title:** `Snow Melting Mats, Cables & Controls | MeltGrid Canada`
- **Meta:** "The technology under a heated surface: snow melting mats, heating cable, sensors and controls from WarmlyYours, and how each is chosen for your project."
- **Canonical:** `/technology/`
- **Primary keyword:** "snow melting mat vs cable" / "snow melting controls"
- **Intent:** Informational/commercial investigation (product-comparison style).
- **H1:** "Mats, cable, sensors and controls"
- **Headings:** Snow Melting Mat; Snow Melting Cable; Controls (4 H3 product types); Sensors; How the right combination is chosen (4 H3); Technology questions (5 FAQ H3); Related pages; Let the design choose the technology; footer.
- **Word count:** ~695
- **Schema:** `WebPage` + `BreadcrumbList` + `FAQPage` (no `Service`, appropriately — it's product/technology info, not an offered service in itself).
- **Content quality:** **Strong**, names specific controller products (e.g., ZoneBraker multi-zone controller appears here and on `/commercial/`), good product-level detail that supports WarmlyYours attribution claims.
- **Overlap:** Significant structural overlap with `/how-it-works/` (both cover heating layer / sensor / controller) — see §3.
- **Recommendation:** **Keep**, but re-scope: `/how-it-works/` should own the *process* narrative (how a snowfall triggers the system), `/technology/` should own the *product catalog* (which mat, cable, controller, sensor exists and how to choose). Today they overlap more than they need to.

### `/trade-partners/`
- **Title:** `Trade Partners | MeltGrid Canada`
- **Meta:** "Keep your customer and your scope. MeltGrid handles snow-melting system design and coordination for contractors, electricians and builders."
- **Canonical:** `/trade-partners/`
- **Primary keyword:** "snow melting trade partner program" (B2B/B2B2C niche term, low volume but high relevance)
- **Intent:** Navigational/transactional for a distinct B2B audience (contractors/electricians/builders), not homeowners.
- **H1:** "Keep your customer. Keep your scope. We handle the snow-melting system."
- **Headings:** Why partner with MeltGrid (4 H3); Trades we work with (8 H3 trade types); How the partnership works (5 H3 steps); Trade partner questions (5 FAQ H3); Become a Trade Partner (×2 — form + thank-you state); Keep reading; footer.
- **Word count:** ~715
- **Schema:** `WebPage` + `BreadcrumbList` + `Service` + `FAQPage`.
- **Content quality:** **Strong**, clearly written for a different reader (addresses "Do I lose my customer relationship?" directly — smart objection handling for a trade audience worried about disintermediation), and is the one page that most explicitly reinforces the coordinator-not-contractor model, which is good for accurately representing the business to search engines and to partners.
- **Recommendation:** **Keep.**

---

## 2. Technical SEO

**robots.txt** — sane and minimal:
```
User-agent: *
Allow: /

Sitemap: https://meltgridcanada.ca/sitemap-index.xml
```
No disallow rules, correctly points to the sitemap index. No issues.

**Sitemap** — `sitemap-index.xml` → `sitemap-0.xml`, which lists exactly the 18 indexable routes named in the brief, each as a bare `<loc>` with no `lastmod`/`priority`/`changefreq` (fine — those fields are optional and Google ignores priority anyway). **All 18 pages are present; none are missing.**

**Canonical tags** — present on all 18 pages, each self-referential (page → its own canonical, protocol+host+trailing-slash consistent), no cross-page canonical pointing elsewhere observed. No duplicate-content canonical conflicts found.

**hreflang** — absent sitewide. For a single-market, single-language (en-CA) site this is correctly **not a gap** — hreflang exists to manage multiple language/region variants of the same content, which don't exist here. `<html lang="en-CA">` is correctly set. No action needed.

**Structured data coverage:**
| Schema type | Pages |
|---|---|
| `Organization` | Homepage only |
| `FAQPage` | 14 of 18 pages (all except `/about/`, `/contact/`, `/privacy/`, `/resources/`) |
| `BreadcrumbList` | All 17 non-homepage pages |
| `Service` | `/commercial/`, `/heated-driveways/`, `/residential/`, `/snow-melting/{asphalt,concrete,pavers}/`, `/trade-partners/` (7 pages) |
| `WebPage` | All non-homepage, non-`/about/`, non-`/contact/` pages |
| `AboutPage` / `ContactPage` | Their respective pages |

Gaps:
- **No `LocalBusiness`/`ProfessionalService` schema anywhere**, and no `sameAs` array on the `Organization` node (no social profiles linked at all — I found zero Facebook/Instagram/LinkedIn links sitewide). For a Canada-wide/Ontario-focused service business this is a missed trust and Knowledge Panel opportunity, though it's a legitimate choice if the business genuinely has no active social presence to link.
- **`Service` schema has no `areaServed` property** on any of the 7 pages that use it — a quick, low-effort win given the business is explicitly Ontario/GTA-focused per the About page copy.
- **`/resources/` hub has no `CollectionPage`/`ItemList` schema** tying its 3 child articles together.
- **No `HowTo` schema** on `/how-it-works/` despite the content literally being a numbered step-by-step process — an easy, free rich-result opportunity being left on the table.
- FAQPage is used heavily and consistently (14 pages) — good breadth, but see §3 for near-duplicate FAQ answers across pages (not a schema-validity problem, but a content-dilution one).

**Mobile viewport** — `<meta name="viewport" content="width=device-width, initial-scale=1">` present and correct on every page sampled.

**Heading hierarchy — one sitewide structural issue:** The footer navigation ("Solutions", "By surface", "Plan your project", "Company") is marked up as **`<h2>` on every single page**, appended after the page's real content headings. This isn't a crawl-breaking error, but it does mean every page's heading outline nominally ends in four generic, site-identical H2s that dilute the topical heading signal and could confuse automated heading-outline tools or screen-reader users navigating by heading level (footer nav is more conventionally a `<nav aria-label="Footer">` with no heading, or a visually-hidden `<h2>`/`<p>` rather than a landmark-level heading repeated 18 times verbatim). Low severity, easy fix.

**Images:**
- Responsive `<picture>` elements with WebP sources and JPEG fallback are used consistently (17 `<picture>` elements on the homepage alone, 56 webp references sitewide) — this is a modern, well-optimized image pipeline.
- `loading="eager"` is correctly reserved for above-the-fold images (logo, hero); everything else is `loading="lazy"` — correct pattern.
- **Alt text is descriptive and specific** for content photography (e.g., "Cutaway of an asphalt driveway showing snow melt cable fixed to a metal frame between finished asphalt, a base coat and compacted gravel") — genuinely good accessibility/SEO alt text, not generic filler.
- The **logo image's alt text ("MeltGrid Canada, snow and ice-melting systems") is repeated identically 2–3 times per page** (header, mobile nav, footer) — fine for a logo but worth knowing it's not unique per instance.
- Source image files in `_astro/` run large before optimization — several raw JPG/WebP source assets in the 200–400KB range (e.g., `snow-melting-cable-asphalt-cross-section...jpg` at 404KB, `logo-on-light...png` at 373KB). These are the *build's* pre-responsive-variant source files; the actual served `<picture>` srcset likely picks smaller generated variants, so this is not proof of a real page-weight problem, but it's worth a real Lighthouse pass to confirm served image weight is small. **No CSS/JS render-blocking concerns observed** — Astro generates small, page-scoped CSS bundles (14–23KB each, not one giant sitewide stylesheet) and only a single small deferred-looking analytics script tag was found referenced from the homepage head.
- **A real Lighthouse / PageSpeed Insights run is still needed** — file-size inspection alone cannot measure LCP/CLS/INP/TBT, and I have not fabricated any such scores.

**No broken internal links found.** I resolved every internal `href` against the known route list; the only non-matching hrefs were asset paths (`/_astro/*.css`, favicons), which are expected. Anchor-link targets used cross-page (`/residential/#walkways`, `#steps`, `#patios`) were verified to exist as real `id` attributes on `/residential/`.

**No `noindex` found anywhere**; no accidental deindexing risk.

---

## 3. Keyword cannibalization summary

| Group | Pages | Overlap | Recommendation |
|---|---|---|---|
| **A. "Heated driveway" core intent** | `/heated-driveways/`, `/residential/`, `/cost/` | All three cover "what a heated driveway is," surface options, and cost framing to varying depth. `/heated-driveways/` is the deepest and most keyword-matched to the head term; `/residential/` re-covers driveway basics as one of four home "zones"; `/cost/` re-covers surface/coverage as cost drivers. | **Differentiate, don't merge.** Keep `/heated-driveways/` as the single pillar for "heated driveway" + surface/process. Trim `/residential/`'s driveway section to a short summary that links to `/heated-driveways/` for depth, and let `/residential/`'s unique value be walkways/steps/patios (which currently have no dedicated pages). Keep `/cost/` focused strictly on cost drivers and link out to `/heated-driveways/` for how-it-works detail it currently half-repeats. |
| **B. Running/installation cost** | `/cost/`, `/resources/heated-driveway-running-cost/` | `/cost/` has a "What affects running cost" H2 with 4 sub-points; `/resources/heated-driveway-running-cost/` is a full dedicated article on the same question with a worked example. | **Consolidate content, keep both URLs** (different search intent: `/cost/` = installation cost planning, the article = ongoing running cost with a calculator-style worked example). Trim `/cost/`'s running-cost section to 1–2 sentences + a clear "see the full worked example" link (it already links there, so mostly just needs the on-page text trimmed to avoid two competing version of the same explanation). |
| **C. Existing-driveway retrofit** | `/resources/existing-driveway-retrofit/`, `/snow-melting/asphalt/`, `/snow-melting/concrete/`, `/snow-melting/pavers/` | All four separately ask and answer "Can snow melting be added to an existing [surface] driveway?" in their own `FAQPage` schema — effectively the same Q&A duplicated four times with minor surface-specific wording changes. | **Consolidate.** Make `/resources/existing-driveway-retrofit/` the single canonical, deep answer for retrofit-by-surface. Have each `/snow-melting/{surface}/` page keep only a one-line answer + "see full retrofit guide" link instead of a full duplicate FAQ answer. This reduces redundant `FAQPage` entries competing for the same long-tail retrofit queries. |
| **D. "How it works" / process vs. technology** | `/how-it-works/`, `/technology/`, and the homepage's own "How a project works" + "technology under the surface" sections | All three explain heating layer → sensor → controller. The homepage condenses both into one scroll; `/how-it-works/` tells it as a process narrative; `/technology/` catalogs the actual products. | **Differentiate by role.** Let `/how-it-works/` own the *process* (what happens, in order) and `/technology/` own the *product catalog* (which mat/cable/controller/sensor and how to pick one) — today they both drift into describing the same three components. No merge needed since intent differs (informational-process vs. comparison-shopping), but trim the duplicated explanatory sentences. |
| **E. Surface-specific service pages vs. homepage** | `/snow-melting/asphalt/`, `/snow-melting/concrete/`, `/snow-melting/pavers/` vs. homepage's "Built into your surface" section | Minor — the homepage's surface section is a short teaser (3 short blurbs) linking to the three full pages. This is the *correct* pattern (hub teaser → deep page), not true cannibalization, flagged only for completeness. | **No action** — this is good internal linking, not a problem. |

**Overall read:** the site's content architecture is fundamentally sound — most "overlap" is intentional hub-and-spoke linking rather than true duplicate-content competition. The one real duplication problem is **Group C** (four near-identical retrofit FAQ answers), which is worth fixing because repeating the same `FAQPage` Q&A near-verbatim across four URLs can split relevance signal for retrofit-related queries instead of concentrating it on one strong page.

---

## 4. Top 10 highest-impact fixes

### Quick technical fixes
1. **Add `areaServed` to all 7 `Service` schema blocks** (e.g., `"areaServed": {"@type": "State", "name": "Ontario"}` or a GTA-specific `Place`) — a five-minute change that makes the existing structured data more complete and locally relevant, matching the Ontario/GTA focus already stated on `/about/`.
2. **Demote the repeated footer "Solutions / By surface / Plan your project / Company" headings from `<h2>` to non-heading markup** (or visually-hidden text with no semantic heading level) sitewide — removes 4 generic, identical headings from every page's outline, cleaning up the heading hierarchy signal with no visual change needed.
3. **Add `HowTo` schema to `/how-it-works/`** and **`CollectionPage`/`ItemList` schema to `/resources/`** — both are free, low-effort structured-data additions that match content already written; `HowTo` is a legitimate rich-result opportunity for a literally-numbered process page.

### Existing-page content improvements
4. **Consolidate the four duplicated "retrofit on existing [surface]" FAQ answers** (Group C above) into one canonical deep answer on `/resources/existing-driveway-retrofit/`, with the three surface pages linking to it instead of re-answering it — stops diluting retrofit-query relevance across four URLs.
5. **Expand `/about/`** (currently the thinnest trust-relevant page at ~430 words) with concrete proof points — company background/years active, named contact/founder, partner-manufacturer credentials, explicit service-area statement repeated here (not just buried on this one page) — because this is the page doing the most E-E-A-T and "who am I trusting with a $10K+ purchase" work on the whole site, and it's currently under-built relative to that job.
6. **Flesh out `/resources/` from a bare links page (~160 words) into a short real hub** with a sentence or two of framing per guide — it's the single thinnest page on the site and currently reads as an afterthought despite the meta description promising depth ("grounded in WarmlyYours technical documentation") that isn't visibly delivered (no WarmlyYours documentation links exist anywhere except one homepage video).
7. **Trim the overlapping cost/process explanations** between `/cost/` ↔ `/resources/heated-driveway-running-cost/` and `/how-it-works/` ↔ `/technology/` (Groups B and D) so each page's unique angle is clearer and less content is doing double duty.

### Conversion improvements
8. **State a response-time expectation on `/contact/`** (e.g., "we reply within 1 business day") — nothing on the site currently sets this expectation anywhere, and it's a known lever for reducing form-abandonment anxiety on a lead-gen-only site with no visible pricing.
9. **Add a caveated rough price range to `/cost/`** (even a wide, heavily-qualified range) — the page currently explains *why* it doesn't publish prices but gives zero numeric anchor at all, which risks losing bottom-of-funnel searchers who came specifically looking for "heated driveway cost" and bounce before reaching the form if they get no number of any kind.

### Trust-building improvements
10. **Add `sameAs` social profile links to the `Organization` schema (and visible footer social icons) if any active profiles exist, and consider `LocalBusiness`/`ProfessionalService` schema with the Ontario/GTA service area** — currently zero social proof links exist anywhere on the site, which is unusual for a 2026-era home-services lead-gen business and is a low-cost way to strengthen both the Knowledge Panel potential and visitor trust.

---

*File saved to:* `/tmp/claude-0/-home-user-Meltgrid/bdb529f3-ef69-59ae-bb9b-61f24cf3e983/scratchpad/research/website-audit.md`
