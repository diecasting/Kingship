# KingShip P1 Technical SEO Report

**Date:** 2026-11-23  
**Status:** `PASS - LOCAL PRODUCTION AND STAGING BUILDS`

## Build

| Check | Result |
|---|---|
| Hugo version used | 0.170.1 extended |
| Production build | PASS |
| Staging build with drafts/future | PASS |
| Languages | EN, DE, ES, FR, JA, IT, KO |
| HTML files | 178 |
| Content pages | 170 |
| Redirect/alias pages | 8 |
| Internal links checked | 7,149 |
| Broken internal targets | 0 |
| JSON-LD parse failures | 0 |
| Images | 781 |
| Missing Alt | 0 |

## Metadata and Indexation

- All non-redirect pages have one H1.
- All non-redirect pages have a Title and Meta Description.
- Seven homepages have self-referencing Canonical and eight hreflang links including `x-default`.
- Core commercial pages checked for Canonical, hreflang, H1 and robots directives.
- Seven localized Semi-Solid pages are `noindex, follow` and excluded from image sitemaps while capability evidence is pending.
- `robots.txt` is present and references the sitemap.
- Sitemap index and seven language sitemap files are generated.
- Seven localized 404 pages are generated.

## Images

- Existing local WebP assets are used instead of AlumCasting image hotlinks on the homepage.
- The build has no references to legacy `/img/5000ton-*`, `/img/yizumi-*` or `alumcasting.com/images` assets.

## Warnings

- Theme metadata declares compatibility with Hugo 0.158.0-0.163.3 while the local 0.170.1 build succeeds with a warning.
- Theme still uses deprecated `.Site.Data` and `.Site.Languages` APIs.
- These warnings are non-blocking; pinning the theme-supported Hugo version is a maintenance task.

## Not Verified

- Production HTTP status codes and rendered production pages were not checked because deployment was blocked.
- Mobile visual regression was not executed in a browser.
