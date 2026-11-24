# KingShip Remaining Blockers

**Date:** 2026-11-23  
**Status:** Implementation complete; production deployment blocked by evidence and rights gates

## 1. P0 - Fact and Rights

| Blocker | Current evidence | Required owner | Unlock condition |
|---|---|---|---|
| Current IATF document and holder identity | 2026 NQA copy, printed scope and legal-name mapping verified | Quality / management | Obtain current issuing-body status and written public-use confirmation |
| Brand/entity and asset-rights relationship | Website statements only; no signed authorization | Management / legal | Signed brand and asset-rights matrix |
| 3000T and 5000T equipment | Removed from indexable pages; shared equipment list contains no 3000T/5000T unit | Production / engineering | Only restore after asset, nameplate, location, ownership and operating-state evidence |
| Semi-solid / A357 capability | Service pages are `noindex`, excluded from sitemap and removed from Organization offers | Engineering / quality | Process route, equipment, material and production evidence |
| CNC quantity, axes and tolerance | Conflicting 150/200+/400+ statements; no universal capability study | Production / quality | Reconciled asset register and metrology/process study |
| Factory area, employees, capacity, PPM | Conflicting or self-declared values | Management / HR / production | Current official records and calculation methodology |
| Image authorization | 30/30 authorization records `PENDING` | Management / legal | Named rights holder and use scope |
| Customer logos/cases | No customer release | Sales / legal | Customer-specific written approval |

## 2. P0 - Public Content

The high-risk claim scan over 171 indexable HTML pages now returns zero hits for the blocked claim set. The former locations were remediated:

- Homepage and industry claims were converted to project-specific scope or removed.
- Tooling and Magnesium machine ranges were removed.
- Semi-Solid capability is held behind `noindex` and sitemap exclusion.
- Automotive, Aerospace, Medical and EV pages no longer claim universal inspection or automatic certification coverage.

## 3. Technical Work Completed

| Task | File / impact | Approval needed because |
|---|---|---|
| Blog card Alt | Article-card templates | Completed; 0 missing Alt in build |
| Service Schema brand and descriptions | `data/company.yaml`; Schema templates | Completed; JSON-LD parses with 0 errors |
| RFQ localization and privacy | RFQ partial/shortcode and tracking JS | Completed; endpoint unchanged |
| Semi-Solid indexing control | Frontmatter and sitemap template | Completed; service pages are `noindex` and excluded |

## 4. Analytics Gap

- No GA4 read-only connection available.
- No reliable evidence that `rfqSuccess` reaches a GA4 property.
- No CRM/qualified-RFQ connection.
- Organic sessions, form starts, submissions, qualified RFQs and conversion rate remain `UNKNOWN`.

## 5. Content Gaps

- ES/FR/JA Aluminum pages are shorter than the other localized versions.
- Industry titles are corrected, but body claims are not yet rebuilt in all seven languages.
- Technical cluster briefs exist in the roadmap, but company-specific articles remain blocked by evidence and image authorization.

## 6. Deployment Boundary

The worktree remains local. No commit, push, merge, production publish or deployment has been performed.
