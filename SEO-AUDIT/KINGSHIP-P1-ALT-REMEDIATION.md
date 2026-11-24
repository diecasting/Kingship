# KingShip P1 Image Alt Remediation

**Date:** 2026-11-23  
**Status:** `SUPERSEDED BY FINAL IMAGE-RIGHTS GATE`

The final 2026-11-24 build renders no `<img>` elements because all unconfirmed public-use media was removed. Current verified result: 0 images and therefore 0 missing Alt attributes.

## Changes

- Added explicit empty `alt=""` and `aria-hidden="true"` to decorative article-card images in:
  - `layouts/partials/article-link/card.html`
  - `layouts/partials/article-link/simple.html`
  - `layouts/partials/article-link/card-related.html`
  - `layouts/partials/article-link/_shortcode.html`
- Replaced legacy cross-site homepage image references with existing local WebP assets.
- Kept descriptive Alt text for content images and empty Alt text for decorative links/cards.

## Verification

| Check | Result |
|---|---:|
| Generated HTML entries | 178 |
| Content pages | 170 |
| Images found | 781 |
| Images missing an Alt attribute | 0 |
| Legacy `.webp` image references from `/5000ton/` or `/yizumi/` | 0 |

The check treats both `alt="..."` and the minified empty `alt` attribute as present.

## Remaining Risk

Alt completeness is verified in the local production build. Public-use authorization for existing imagery remains `PENDING`; this is a separate evidence/rights gate.
