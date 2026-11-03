# Phase 1 Internal-Pages Deployment Package — Risk Report & Procedure

**Date:** 2026-10-29
**Branch:** `claude/cool-pasteur-acff1l` (still not merged, not deployed)
**Scope:** `/cost/`, `/heated-driveways/`, `/contact/`, `/about/`, `/resources/` (+ its 3
guide pages), new `/hydronic-snow-melting/`, new `/electric-vs-hydronic-snow-melting/`.
**Explicitly out of scope / untouched:** the homepage (`/`), and every other page
(`/commercial/`, `/residential/`, `/how-it-works/`, `/technology/`,
`/snow-melting/{asphalt,concrete,pavers}/`, `/trade-partners/`, `/privacy/`,
`404.html`).

## 0. Hard constraint: this session cannot upload to Hostinger

There is no Hostinger/FTP/SFTP/SSH connector or credential available in this
environment, and `meltgridcanada.ca` and Hostinger are both unreachable from this
sandbox's network. **I cannot execute this deployment myself.** What follows is a
validated, ready-to-upload package and an exact procedure for you (or a session
with real Hostinger access) to run. Nothing in this task has touched production.

## 1. Why a full rebuild is not safe to deploy as-is

The reconstructed Astro project's build output (`dist/`) is **not** a drop-in
replacement for the live `public_html`. A byte-level diff against the production
snapshot (`public_html (1).zip`, the most recent full copy of the live site) found:

- **213 of 240** original files are hashed assets (`_astro/*.css`, `*.js`, image
  variants) that don't exist under those exact names in the new build — Astro's
  content hashes differ between builds even where the visual result is similar, so
  a full-folder replace would delete the files every current page (homepage
  included) depends on.
- **227 new files** exist only in the new build, including a full set of
  re-hashed shared CSS/JS.
- **All 19 page-level HTML files that exist in both** (`index.html` — the
  homepage — among them) have **different content**, because Header/Footer/nav
  markup changed sitewide when the new pages were linked in. This is the direct
  confirmation of your concern: **deploying `dist/` wholesale would silently
  replace the current homepage.**

So "deploy the new build" and "keep the homepage exactly as it is" are
incompatible unless the deployment is scoped file-by-file, which is what this
package does.

## 2. What the deployment package contains

`meltgrid-phase1-internal-pages-deploy-package.zip` (1.9 MB, 34 files, built from
the current `dist/`):

- The **10 approved page files**: `cost/index.html`, `heated-driveways/index.html`,
  `contact/index.html`, `about/index.html`, `resources/index.html` and its 3 guide
  pages, `hydronic-snow-melting/index.html`, `electric-vs-hydronic-snow-melting/index.html`.
- **23 supporting assets** these 10 pages need to render and function: the shared
  `BaseLayout` CSS, the contact-page CSS, the analytics/form/coverage-picker JS
  bundles (found by tracing both HTML attribute references **and** the JS/CSS
  files' own internal imports — a first pass missed `analytics.DOSc3dva.js` because
  it's imported from inside another JS file, not referenced in any HTML tag; this
  was caught by the validation pass below and fixed before finalizing the
  package), the heated-driveway hero image set (11 responsive variants), and 3
  product photos (`logo-on-dark.png`, `snow-melting-controller-premium.jpg`,
  `snow-melting-mat-asphalt-cross-section.jpg`, `snow-melting-sensor.jpg`).
- An **updated `sitemap-0.xml`**: confirmed to be a pure superset of the current
  one — all 18 currently-indexed URLs remain, plus the 2 new pages. Nothing is
  removed from it.

**Every filename in this package is either brand-new (no existing file at that
path) or one of the 10 approved page paths.** None of the 213 old hashed assets,
the homepage, or any of the 9 out-of-scope pages are included or touched.

## 3. Validation performed

Built a merged test site = an exact copy of the production snapshot with this
package's files overlaid on top, then verified with a headless browser:

- **Homepage (`index.html`) is byte-for-byte identical** to the production
  snapshot after the overlay — confirmed via `diff`, not just "looks the same."
- Two spot-checked out-of-scope pages (`/commercial/`, `/snow-melting/asphalt/`)
  and `robots.txt`/the Search Console verification file are also byte-identical —
  confirmed untouched.
- All **20 pages** (10 updated + 10 unaffected) load with HTTP 200 and correct
  `<title>` tags.
- Full click-through navigation (home → cost → back → home) works.
- **Zero broken requests** across every page load (after fixing the missed
  `analytics.js` transitive dependency) — no 404s for any CSS, JS, or image this
  package depends on.
- `G-5B3KM8V909` (GA4) and `mljdbbqw` (Formspree, the real production contact-form
  endpoint) confirmed present and unchanged on the updated pages.

## 4. The one real, unavoidable trade-off

Because the homepage is being left completely untouched, **its navigation menu
will not include links to the two new pages** (`/hydronic-snow-melting/`,
`/electric-vs-hydronic-snow-melting/`) — confirmed: zero occurrences of
"hydronic-snow-melting" in the preserved homepage HTML, versus 8 occurrences (nav
+ cross-links) on the updated `/cost/` page.

The 10 updated pages all carry the new, consistent navigation (with the 2 new
links); the homepage keeps the old navigation. Visitors can still reach every new
or updated page via its real URL, via the sitemap, and via the cross-links each
updated page now has from the others — just not from the homepage's own nav
until the homepage itself changes. This is the direct, necessary consequence of
"preserve the homepage exactly" — there's no way to add nav links to the live
homepage file without editing that file. If you want those 2 links on the current
homepage specifically, that would need a narrow, separate, surgical edit to just
the nav markup of the existing homepage HTML — not part of this package, and not
done without your explicit go-ahead, since you asked for the homepage's current
content and layout to be left alone.

## 5. Before you deploy: backup procedure

1. **Full backup of the current `public_html`.** Through Hostinger's File Manager
   or an SFTP client: download/zip the entire `public_html` directory as it
   currently stands, and store that zip somewhere outside Hostinger (local disk,
   cloud storage). Timestamp it, e.g. `public_html-backup-2026-10-29.zip`. This is
   your single rollback point — don't skip it even though the package is scoped
   and validated.
2. Note the current **modified-date** of `public_html/index.html` and the 9
   out-of-scope page folders, so you have an independent way to confirm later that
   nothing there changed.

## 6. Deployment steps (for Hostinger File Manager or SFTP)

1. Upload and unzip `meltgrid-phase1-internal-pages-deploy-package.zip` into a
   **separate staging folder** first (e.g. `public_html-staging/`), not directly
   into `public_html/`.
2. Spot-check 2–3 of the staged pages by browsing to a temporary path, or diff the
   staged files against what's about to be replaced.
3. Copy the package's files into `public_html/`, **merging, not replacing the
   folder** — this adds the new `_astro/*` files, the new `images/*` files, and
   overwrites exactly these existing paths: `cost/index.html`,
   `heated-driveways/index.html`, `contact/index.html`, `about/index.html`,
   `resources/index.html` and its 3 sub-pages, `sitemap-0.xml`, and (no-op, already
   identical) `favicon-32.png`/`favicon-180.png`. It creates two new folders:
   `hydronic-snow-melting/` and `electric-vs-hydronic-snow-melting/`.
4. **Do not delete anything else in `public_html/`.** No existing file outside
   that exact list should be removed or overwritten.

## 7. Confirm after deploying

- Load the live homepage and confirm it looks and behaves exactly as before.
- Load each of the 7 approved URLs and confirm the new content renders.
- Submit one clearly-marked test enquiry through the live `/contact/` form and
  confirm it arrives in the Formspree dashboard (this is the one check that could
  not be done from this sandbox — no outbound access to `formspree.io` here).
- Confirm GA4 realtime shows a pageview from the updated pages.
- Re-submit `sitemap-0.xml` in Search Console (optional — Google will pick it up
  on its own schedule either way) once you're satisfied.

## 8. Rollback procedure

If anything looks wrong after deploying:

1. Delete the files this package added (`hydronic-snow-melting/`,
   `electric-vs-hydronic-snow-melting/`, and the specific `_astro/*`/`images/*`
   files this package introduced — all listed in the zip).
2. Restore the 8 overwritten page files (`cost/`, `heated-driveways/`, `contact/`,
   `about/`, `resources/` + 3 sub-pages, `sitemap-0.xml`) from the backup taken in
   step 5.
3. Because nothing else was touched, this fully reverts the site to its
   pre-deployment state — the homepage was never modified, so there is nothing to
   restore there.

## 9. Open question for you

The branch also contains technical fixes (schema `areaServed`, a footer heading
markup fix, `HowTo` schema, a duplicated-FAQ cleanup) on pages **not** in your
approved list — `/commercial/`, `/residential/`, `/how-it-works/`, `/technology/`,
`/snow-melting/{asphalt,concrete,pavers}/`, `/trade-partners/`. Those are
deliberately **excluded** from this package since you didn't name them. Let me
know if you'd like a second, equally scoped package prepared for those once
you've reviewed this one — I haven't assumed either way.
