# Astro Reconstruction — Deployment Risk Review

Deliverable G. This is a direct code review of this PR's own reconstructed Astro source (`src/`, `public/`, `astro.config.mjs`, `package.json`) against the original compiled-build extraction, written before any recommendation to deploy it. **This research continues to recommend against replacing the live site with this reconstruction until every item below has been checked by a human** — the build succeeding is necessary but not sufficient evidence of parity with the live site.

## 1. Missing original assets

- **`media/video/` was already empty in the original zip** — this is not something this reconstruction lost; the live site's own build output shipped with no actual video file. The homepage currently links out to WarmlyYours' own hosted video instead of embedding one. If a real MeltGrid-hosted video exists somewhere else (not in this zip), it should be added back; otherwise this is a pre-existing gap, not a regression.
- All other original static assets (favicons, `og-default.jpg`, `robots.txt`, the Google Search Console verification file) are present and were diffed byte-identical against the original extraction — no loss there.

## 2. Placeholder / simplified content — one item needs attention beyond what the PR description already flagged

- The PR's own "known simplifications" list already flags that the homepage's coverage picker is "a styled radio group without the original's underlying driveway illustration logic." Confirmed by reading `src/pages/index.astro`: the picker's inputs are `name="coverage-preview"` — a **separate, cosmetic-only widget**, not connected to anything. Clicking an option changes nothing beyond its own visual state; it does **not** pre-fill `/contact/`'s real form the way the surrounding copy ("Help me choose" linking to `/contact/?intent=coverage-help`) implies a connected experience should. If the live site's original picker actually updated an illustration or pre-filled data when clicked, this is a real UX regression, not just a visual simplification — worth a specific side-by-side check against the live site before go-live.

## 3. Differences from the live website

- **CSS is hand-rewritten, not byte-identical** (already flagged in the PR). This is the single highest-risk difference for visual regressions — spacing, shadows, and breakpoint behavior can all drift subtly even when the design tokens and class names match. Recommend a full visual side-by-side of all 18 pages (not just the 7 spot-checked in the PR for title/meta/H1 parity) before this is ever deployed.
- **Font delivery changed**: the original self-hosted Fontsource Archivo Variable WOFF2 subsets are now loaded from Google Fonts' CDN (`fonts.googleapis.com`/`fonts.gstatic.com`) instead. This adds a third-party network dependency and a small FOUT/layout-shift risk that didn't exist in the original self-hosted approach. Low risk, but a real difference worth knowing about, not just a performance footnote.
- **Images**: de-duplicated to one representative file per photo in `public/images/`, served via plain `<img>` instead of Astro's responsive `<picture>`/`astro:assets` pipeline the original build used (confirmed in the website audit: 56 WebP references sitewide, responsive `<picture>` elements). This means the rebuilt site likely serves **larger, non-responsive images** than the live site did — a real performance regression risk until this is addressed (either reintroduce `astro:assets` per-image, or add manual `<picture>` sources).

## 4. Form functionality risk

**Good news, verified by direct code inspection:** both `DesignRequestForm.astro` and `TradePartnerForm.astro` have the **real, correct Formspree endpoints hardcoded** (`https://formspree.io/f/mljdbbqw` and `https://formspree.io/f/mqpaqoob` respectively) and wired via the `data-endpoint` attribute the submission logic reads from — this is not running in the JS's "not-configured" preview/no-op mode. Risks that remain, all requiring a human, supervised test rather than more code reading:

- **No end-to-end submission has actually been tested** (deliberately avoided here, to not send a fake lead into the business's real inbox). Before go-live: submit one real test enquiry through each form from the actual deployed environment and confirm it arrives as expected.
- **Formspree's own dashboard may restrict submissions to the production domain.** If so, testing from a staging/preview URL (not `meltgridcanada.ca` itself) will be silently rejected even though the code is correct. Test from the real domain, or temporarily allow the preview URL in Formspree's settings.
- **Field-name parity with any downstream automation.** Field names in the rebuilt forms (`project_type`, `areas`, `surface`, `coverage`, `postal_code`, etc.) were reconstructed from the live site's actual minified JS, not guessed — but if Formspree's email notification template, or a connected Zapier/CRM automation, references a field name that differs by even a character from what this reconstruction sends, notifications could arrive with missing or mislabeled data rather than failing loudly. Worth a side-by-side check of Formspree's dashboard field mapping against this code.

## 5. Tracking and analytics risk

- The GA4 measurement ID (`G-5B3KM8V909`) is correctly hardcoded in `BaseLayout.astro`'s `gtag` snippet, and the click-tracking (`AnalyticsEvents.astro`: `phone_click`, `email_click`, `commercial_cta_click`) and form-funnel events (`design_form_start/step/submit/success`) are all present in the reconstructed code.
- **None of this has been verified firing correctly in a real browser against the real GA4 property.** Recommend checking GA4's Realtime/DebugView against a preview deployment before cutting the production domain over, to confirm events actually arrive and aren't silently mis-firing (e.g., due to a timing difference in when the rebuilt page's scripts load).
- Per the original brief: it was never confirmed whether any of these events are marked as a **Conversion** in GA4. That's a GA4 configuration question independent of this code and still open.

## 6. Deployment process risk

- This reconstruction has **no CI pipeline and no automated tests** — `npm run build` and `astro check` passing (both confirmed in this PR) are currently the only automated checks. The real quality gate is a human reviewing the deployed preview against the live site page-by-page.
- This research has no information on how the *original* site got onto Hostinger (manual upload vs. an automated pipeline) — there is no established deploy process to plug this rebuild into. Treat the actual cutover as a manual, supervised operation: build locally (`npm run build`), review the `dist/` output, then replace Hostinger's `public_html` contents.
- **No rollback plan exists today.** Before overwriting anything on Hostinger, keep a full copy of the current live `public_html` folder (the same zip this PR started from is one candidate, but take a fresh copy at deploy time in case anything changed since 2026-09-22) so the live site can be restored file-for-file if the new deployment breaks something.
- **404 handling**: `src/pages/404.astro` builds correctly to `dist/404.html`, matching the original. Whether Hostinger actually serves this file on a real 404 (versus a generic host error page) depends on a host-level setting or `.htaccess` directive — the original zip had no `.htaccess` either, so this is a pre-existing configuration question, not something this reconstruction changed, but worth confirming in Hostinger's control panel regardless.

## Bottom line

Nothing found in this review is a reason to block moving forward with review and testing — the core business logic (forms, tracking, routing, schema, copy) checks out correctly against the original. But three items specifically warrant a fix or a verified test **before** any deployment, not just a documentation note: the disconnected homepage coverage picker (§2), the move away from responsive images (§3), and an actual end-to-end form submission test (§4). This document does not change the standing instruction: **the live site stays untouched, and this reconstruction does not get deployed, until a human has worked through this list.**
