# KingShip Production Deployment Report

**Date:** 2026-11-23  
**Status:** `SUPERSEDED BY KINGSHIP-FINAL-PRODUCTION-DEPLOYMENT-REPORT.md`

## Deployment Evidence

| Item | Value |
|---|---|
| Production site | https://kingship.alumcasting.com |
| Git branch | `main` |
| Commit created | No |
| Push performed | No |
| Merge performed | No |
| Production deployment performed | No |
| Rollback required | No |

## Gate Results

| Gate | Result |
|---|---|
| Production build | PASS |
| Staging build | PASS |
| Seven-language build | PASS |
| H1 / Title / Description | PASS |
| Canonical / hreflang | PASS for checked core pages |
| Sitemap / robots | PASS |
| Internal links | PASS |
| Schema parsing | PASS |
| Image Alt | PASS |
| High-risk claim scan | PASS for indexable pages |
| RFQ endpoint preserved | PASS |
| RFQ live delivery test | NOT RUN |
| Image public-use authorization | FAIL - `PENDING` |
| Certificate public-use/current-status evidence | CONDITIONAL |
| Git diff check | PASS |

## Blocking Items

1. Obtain written authorization for website image use.
2. Confirm permission to publish and maintain the certificate claims in the current context.
3. Obtain an issuing-body or equivalent current-status verification where required.
4. Complete a controlled RFQ delivery test and connect form outcomes to GA4/CRM if available.

No production files, URLs, DNS, hosting, sitemap, analytics or Formspree configuration were changed.
