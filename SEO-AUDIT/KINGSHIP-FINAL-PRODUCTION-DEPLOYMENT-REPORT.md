# KingShip Final Production Deployment Report

**Date:** 2026-11-24  
**Status:** `IMPLEMENTATION COMPLETE — DEPLOYMENT BLOCKED`

## Release Target

| Item | Value |
|---|---|
| GitHub repository | `diecasting/Kingship` |
| Release base | `main` at `a63f5572d5e5cc584fafb721fc4c1c10e392f0f8` |
| Local release branch | `release/kingship-seo-production-20261124` |
| Production site | https://kingship.alumcasting.com |
| Production workflow | `.github/workflows/pages.yml` |
| Release commit | `27164661abff8e4a801235f4cdb75bb0f64e2b5c` |
| Pull request | Not created |
| GitHub Actions run | Not created |
| Deployment time | Not deployed |

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

The reviewed release commit was created locally. No push, merge or production
deployment was completed.

## Deployment Blocker

`GITHUB AUTHENTICATION REQUIRED`

- The local Git credential helper has no stored GitHub account.
- No SSH key is available for an authenticated `git@github.com` push.
- Direct access to `github.com:443` times out in the current environment.
- The existing local SOCKS proxy can connect to GitHub, but Git still has no
  authenticated user credential.
- No unauthenticated GitHub API workaround or alternate deployment channel was
  used.

## Required User Action

Authenticate this machine with the GitHub account authorized for
`diecasting/Kingship` using Git Credential Manager or an approved SSH key.

Do not provide a password or personal access token in chat.

After authentication, the next execution should:

1. Push `release/kingship-seo-production-20261124`.
2. Create a pull request if required by branch protection.
3. Wait for required checks and any required reviewer.
4. Merge without bypassing protection.
5. Verify the existing Pages deployment run.
6. Run the production checks listed below.
7. Replace this section with the final Actions run and production evidence.

## Production Verification After Authorization

- Homepage and seven-language homepages;
- Aluminum Die Casting, Magnesium Die Casting, CNC Machining and Tooling;
- Automotive, Aerospace and Medical;
- Blog and Contact;
- HTTP status, canonical, hreflang, Schema, robots and Sitemap;
- RFQ rendering and no-attachment front-end validation;
- no certificate scans or unauthorized photos;
- no 404, 500, redirect loop or visible front-end error.

