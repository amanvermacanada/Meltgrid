# Conversion & Lead Qualification Recommendations

## What the existing form already does well

`DesignRequestForm.astro` (reconstructed in this PR from the live `/contact/` page's actual minified JS — see the PR description) is already a 5-step qualification wizard, not a single generic contact form:

1. Project type (residential/commercial) + areas to keep clear
2. Surface + coverage preference
3. Approximate dimensions (with a live area calculator) + optional photos/plans upload
4. Postal code + timeline
5. Name/phone/email/notes/consent

It already captures most of what Part 11 of the brief asks for: property location (postal code), residential/commercial, approximate heated area (dimensions), application type (areas), surface, and timeline. It supports URL pre-fill from other pages (`?project=residential&surface=concrete`) for better segmentation, and shows a clear step-progress indicator.

## What it's missing — and why that matters

Two gaps map directly to real problems described in the brief:

1. **No budget-range question anywhere.** The brief describes a real enquiry (Markham, ~1,650 sq ft hydronic) where significant time was spent preparing electric and hydronic pricing before the customer cancelled — a classic unqualified-budget scenario. Adding one question fixes this cheaply.
2. **No electric/hydronic/"not sure" preference.** The form currently has no concept of system type at all, because the site has no hydronic content to route into. Once `/hydronic-snow-melting/` exists (Phase 1), the form needs a way to route or at least flag that preference.
3. **No explicit new-construction-vs-existing question**, though it's partially implied by the retrofit-aware copy elsewhere on the site. Worth adding explicitly since it changes the entire project scope (new build vs. groove-cutting retrofit).

## Recommendation: extend the existing wizard, don't replace it

The brief asks whether a short initial form followed by a detailed qualification form converts better than one longer form. **Recommendation: keep the single multi-step wizard, but add the missing questions to existing steps rather than adding a new step or a second form.** Reasoning:

- The existing step structure is already well-chosen (type/area → surface/coverage → size/photos → timing/location → contact) and each step asks 1-3 related questions, which keeps per-step cognitive load low — the actual problem with "long forms" hurting conversion is usually too many questions *per screen*, not too many screens.
- A completely separate short-form-then-long-form two-stage flow would require building and maintaining a second lead path, and risks losing context between the two (the existing wizard already threads UTM/referrer/intent data through via `sessionStorage` — a second form would need to replicate that).
- Two surgical additions close the brief's gaps without restructuring anything that already works:
  - **Add a system-type question to Step 2** (where surface/coverage already live): "Electric, hydronic, or not sure yet / want advice" — three options, matching the form's existing radio-button pattern. This also gives the new hydronic pages a `?intent=` style pre-fill target, the same way `/contact/?intent=coverage-help` already pre-selects a coverage option.
  - **Add a budget-range question to Step 4** (alongside timeline, which is conceptually the same "how serious/ready is this lead" step): a small number of broad bands (e.g., "Under $10,000 / $10,000-$25,000 / $25,000-$50,000 / $50,000+ / Not sure yet — want guidance") rather than a free-text field. This directly prevents the "spent hours pricing a project that wasn't budgeted for" scenario described in the brief, and costs the visitor about five seconds to answer.

## Should the site publish indicative budget ranges?

Yes, with the same discipline the site already applies elsewhere. `02-website-audit.md` flags that `/cost/` currently gives zero numeric anchor at all, which risks losing exactly the 5,000/mo "heated driveway cost" searchers who want a ballpark before committing to a 5-step form. The site's own running-cost article (`/resources/heated-driveway-running-cost/`) is the right model to copy: a worked, clearly-labelled example with an explicit "treat this as a ceiling estimate, not a prediction" hedge, never a bare number with no context.

**Do not use the brief's internal $30/sqft hydronic contractor indication as a published rate anywhere on the site** — it's an unverified, single-data-point indication for smaller installations, not a market-wide or confirmed installed price, and publishing it as such would misrepresent it. If a hydronic cost range is published, it needs its own independently-reasoned, similarly-hedged range (or simply defer to the design-and-estimate process, same as electric does today), matching the same policy electric currently follows.

## Preliminary project assessment as the primary conversion action

The brief asks whether the site should offer a "preliminary project assessment" as the primary conversion action instead of (or alongside) "request a free design and estimate." **Recommendation: keep "free design and estimate" as the single primary CTA label site-wide** (it's already consistent across all 18 pages and is a clear, specific promise), but internally treat the first form submission as exactly a preliminary assessment — the two budget/system-type additions above are what actually make the *existing* submission function as a real pre-qualification step, without needing a second, differently-labelled CTA that would fragment the site's current clean, single-CTA pattern.
