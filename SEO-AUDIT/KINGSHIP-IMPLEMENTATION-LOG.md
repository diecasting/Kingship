# KingShip Implementation Log

## 2026-11-23 - Final Release Candidate

- Completed all seven homepage language claim corrections.
- Removed unsupported machine ranges, zero-defect, first-time qualification, universal tolerance, long tool life and quotation SLA wording from indexable pages.
- Converted Semi-Solid to an evidence-gated engineering route and excluded the seven service pages from indexing and sitemaps.
- Corrected Organization/Service Schema and removed unverified Semi-Solid offers.
- Fixed all generated image Alt gaps and retired legacy claim-bearing image filenames from rendered pages.
- Completed seven-language RFQ labels, privacy text and error/success localization.
- Production and Staging builds passed; 170 content pages and 171 indexable HTML pages verified.
- Release stopped before commit, push and deployment because image authorization is pending and certificate public-use/current-status evidence remains conditional.

## 2026-11-24 - Final Release Gate

- Reconciled the current Git state against earlier file-count reports.
- Classified all 30 registered image sources as `C - WEBSITE PUBLIC USE PENDING`.
- Removed all production photo and certificate-scan references from rendered pages.
- Moved source media outside the Hugo public static tree; retained files in Company Evidence.
- Replaced site raster icons with a repository-authored SVG engineering mark.
- Replaced the certificate page with supplier-qualification documentation guidance and removed public certificate claims, numbers and scans.
- Preserved the Formspree endpoint; added internal subjects to all RFQ variants.
- Official Formspree test returned server success for an internal test.
- Local RFQ script tests pass for success, error and duplicate-submit handling.
- Final release remains blocked only pending confirmation that the Formspree test arrived in the configured destination mailbox.

## 2026-11-23 - Batch KS-2026-11-03

### Scope

- Full baseline audit.
- Shared company-evidence reconciliation.
- GSC and device/country review.
- RFQ journey audit.
- Safe claim and metadata corrections.
- Multilingual content inventory.
- Public-template and Schema patch preview.

### Implemented

| Area | Files | Change |
|---|---|---|
| Contact / quotation promise | `content/contact/index.md` and six translations; `static/js/rfq-lead-tracking.js` | Removed unsupported 24-hour quotation/response promise; retained Formspree endpoint and fields |
| Industry titles | `content/industries/*.md` and six language variants | Removed duplicated `| KingShip ...` suffix from frontmatter titles |
| Aluminum service | `content/aluminum-die-casting/index*.md` | Seven-language factual cleanup, metadata and RFQ scope |
| CNC service | `content/cnc-machining/index*.md` | Seven-language cleanup of residual unsupported numeric claims |
| Blog hub | `content/blog/_index.md` and DE/IT/KO descriptions | Intent-focused hub and removal of unsupported experience claims |

### Evidence Used

- Shared company fact matrix and C2 remediation report.
- Equipment list showing documented 180T–1650T family and no documented 3000T/5000T units.
- Certificate-copy records and unresolved current IATF source.
- Image authorization register: all records pending.
- GSC Search Analytics, current and comparison windows.

### Not Implemented

- No homepage P0 numeric-claim removal yet; recorded as next priority.
- No Tooling/Magnesium/SSR numeric-claim removal yet; recorded as next priority.
- No industry-page inspection-claim rewrite beyond title cleanup.
- No public Schema or article-card template change; approval preview created.
- No RFQ integration, language-route, Canonical, Sitemap, robots or redirect change.

### Validation

- Production build: PASS, exit 0.
- Staging build with Draft/Future: PASS, exit 0.
- Rendered HTML entries: 171.
- Industry duplicated-brand titles after rebuild: 0.
- Broken internal targets across generated content matrix: 0.
- Remaining pages with missing image Alt: 58 pages / 260 images, including Blog card template issue.
- Built pages containing the removed 24-hour language: 0.
- Core Aluminum/CNC pages retain one H1, self Canonical, eight hreflang links, RFQ paths and Sitemap inclusion.
- `git diff --check`: PASS.
- Build warnings are non-blocking theme-version and Hugo deprecation warnings.
- GA4/RFQ conversion data remain unavailable.

### Risks

- Historical GSC data still contains demo taxonomy/user URLs.
- Existing artwork and case material remain unavailable for external reuse.
- Unsupported claims on home/industry pages remain a P0 content risk.
- No production publication occurred.
