# Recommended Phase 1 Implementation Order

Deliverable H. Sequenced by dependency and cost, not just by the business-priority ranking in `09-phase1-pages-final.md` — some high-priority items need an owner decision before they can be written, so they're sequenced after cheaper, unblocked work.

## Step 1 — Cross-cutting technical fixes (no new copy, no dependencies, do first)
From `05-content-architecture-and-roadmap.md`'s cross-cutting list and `06-phase1-implementation-spec.md` §7:
- `areaServed` on all 7 existing `Service` schema blocks
- `HowTo` schema on `/how-it-works/`
- Footer `<h2>` → non-heading markup fix
- Consolidate the 4 duplicated retrofit FAQ answers onto `/resources/existing-driveway-retrofit/`

All four are mechanical, low-risk, and don't require any business decision — do these before anything else so the highest-value pages below launch with the fixes already in place rather than needing a second pass.

## Step 2 — `/contact/` form additions
Add the system-type (electric/hydronic/not sure) and budget-range questions, plus the SLA line. This is sequenced early (not last, despite being improvement #5 by priority) because the two new hydronic pages in Step 4 are written to route into this updated form (`?intent=hydronic`-style pre-fill) — building the form first means the new pages don't need a follow-up edit to link correctly.

## Step 3 — `/cost/` and `/heated-driveways/` improvements
The two highest-volume, highest-priority pages. Both need one business decision before publishing: **the actual indicative cost range for `/cost/`** (this research deliberately does not supply numbers — see `06-phase1-implementation-spec.md` §3's explicit flag not to use the brief's internal $30/sqft hydronic figure as a published rate). Draft both pages' non-pricing content now; hold the `/cost/` range block until the business owner confirms real ranges.

## Step 4 — `/hydronic-snow-melting/` and `/electric-vs-hydronic-snow-melting/`
These need one business decision before publishing: **whether any manufacturer (Watts/Uponor/HeatLink) can be named as a confirmed partner today** (`06-phase1-implementation-spec.md` §1). Draft both pages now using generic "manufacturer-grade" language by default; swap in a named partner only once commercially confirmed.

## Step 5 — `/about/` and `/resources/`
Lowest-dependency of the remaining items (no pricing or partnership decision needed), but sequenced after the higher-volume pages above since their business value is indirect (trust/credibility lift on traffic the other pages generate) rather than direct search volume.

## Step 6 — Review, test, and gate before anything goes live
Before any of the above is deployed to the live site:
1. Work through every item in `08-astro-deployment-risk-review.md` — in particular, fix the disconnected homepage coverage picker and run one real, supervised Formspree submission test on each form.
2. Resubmit the sitemap in Search Console once the reconstructed Astro project (this PR) is approved and deployed, so the new/changed pages get crawled.
3. Re-pull Search Console performance data and a real Lighthouse run after 2-4 weeks of the new content being live — not before, since there won't be meaningful data yet — and use that to decide the Phase 2/3 order rather than guessing further.

Nothing in this plan is deployed, merged, or published automatically — each step above still requires the business owner's review and go-ahead, per the standing instruction not to deploy without approval.
