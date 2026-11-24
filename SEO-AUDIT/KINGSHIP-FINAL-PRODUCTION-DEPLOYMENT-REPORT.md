# KingShip Final Production Deployment Report

**Date:** 2026-11-24  
**Status:** `FINAL PREFLIGHT PASS — DEPLOYMENT PENDING`

## Release Target

| Item | Value |
|---|---|
| GitHub repository | `diecasting/Kingship` |
| Source branch | `main` |
| Production site | https://kingship.alumcasting.com |
| Production workflow | `.github/workflows/pages.yml` |
| Release commit | Pending |
| Pull request | Pending |
| GitHub Actions run | Pending |
| Deployment time | Pending |

## Preflight Evidence

- Production build: PASS
- Staging build: PASS
- HTML entries: 178
- Non-redirect pages: 170
- Indexable pages: 156
- Redirects: 8
- 404 templates: 7
- Noindex pages: 7
- Title/description/H1 failures: 0
- Core canonical/hreflang pages checked: 70
- Core canonical/hreflang failures: 0
- Internal links checked: 7,410
- Broken internal links: 0
- JSON-LD scripts: 379
- JSON-LD parse failures: 0
- Sitemap URLs checked: 154
- Missing sitemap targets: 0
- Noindex URLs in sitemap: 0
- Rendered `<img>` elements: 0
- Public raster images/certificate scans: 0
- Rendered high-risk claim hits: 0
- Formspree forms: 84
- Unique Formspree endpoints: 1
- Required file inputs: 0
- RFQ tests: PASS
- Formspree test Submission: `173776100`
- Formspree folder: Inbox
- Formspree status: `hank@alumcasting.com: delivered`
- Destination inbox receipt: user confirmed PASS

## Release Scope

Included:

- KingShip content and multilingual remediation;
- claim and evidence cleanup;
- image rights remediation;
- favicon and sitemap templates;
- Schema and internal-link remediation;
- RFQ localization, validation and optional file behavior;
- SEO audit reports and automated tests;
- `AGENTS.md`.

Excluded:

- `SEO-BACKLINKS/`;
- AlumCasting repository and production;
- DNS, Cloudflare and hosting provider configuration;
- mailbox, OAuth and other credentials.

## Remaining Non-Blocking Items

- Formspree Free does not support real file uploads; the optional upload control may be hidden later.
- Two paginated blog page-2 URLs canonicalize to category page 1 and are omitted from Sitemap.
- Some blog translations are not available in all seven languages.
- GA4 `rfqSuccess` and CRM intake remain post-launch verification items.
- Legacy unrendered certificate data should be cleaned during routine maintenance.

## Deployment State

No commit, push, merge or production deployment has been performed at the time this
preflight snapshot was written.

This report will be updated with the final commit SHA, PR, Actions run, deployment
time and production verification evidence after release.

