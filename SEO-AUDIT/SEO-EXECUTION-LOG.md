# KingShip SEO Execution Log

## 2026-11-22 - Batch KS-2026-11-01

**Type:** Autonomous local content and internal-linking remediation  
**Target pages:**

- `https://kingship.alumcasting.com/blog/`
- `https://kingship.alumcasting.com/cnc-machining/`

### GSC evidence

- Property: `sc-domain:kingship.alumcasting.com`
- Windows: 2026-10-25 to 2026-11-21 and 2026-09-27 to 2026-10-24
- Current total: 5 clicks, 934 impressions, 0.535% CTR, position 22.23
- Previous total: 3 clicks, 531 impressions, 0.565% CTR, position 16.66
- Blog current: 533 impressions, 0 clicks, position 15.37
- CNC current: 143 impressions, 1 click, position 51.83

### Changes

| File | Change | Reason |
|---|---|---|
| `content/blog/_index.md` | New intent-focused title, 132-character description, engineering introduction, five internal topic groups and RFQ CTA | Reduce generic/flange/cold-forming mismatch and create clear topical paths |
| `content/cnc-machining/index.md` | Shorter Title/Meta, commercial first screen, safer service materials, project-dependent specifications, internal technical-resource links and three-axis/tolerance/alloy claim cleanup | Match service/provider/supplier intent without inventing equipment or capability |
| `content/blog/_index.de.md`、`_index.it.md`、`_index.ko.md` | Removed translated `over 20 years`-type experience claims and replaced them with topic-focused descriptions | Sync the safety correction without creating factual conflict between languages |

### Facts and assumptions

- The CNCs and CMM equipment photographs in the repository are not a machine inventory.
- A357, AZ91D and AM60B are now described as common project grades, not KingShip `confirmed` assets.
- ±0.01 mm, 400T-3000T and 1.0-1.2 mm were removed from the English CNC page because the repository lacks the required capability or equipment evidence.
- No new customer, certification, capacity, inspection-coverage or lead-time claim was added.

### Boundary

- No URL, slug, Canonical, Redirect, Alias, Sitemap, public Schema template or RFQ service configuration was changed.
- Article-card Alt remains a shared-template task requiring approval; this batch did not change it.
- No commit, push, merge or deployment was performed.

### Validation

- Source diff review: complete
- `git diff --check`: PASS
- Hugo production build: PASS, exit 0
- Hugo staging build: PASS, exit 0 with Draft/Future enabled
- Production pages rendered: 33 EN, 38 DE, 29 ES, 29 FR, 29 JA, 20 IT, 20 KO
- Title/Meta/H1: blog 132-character description; CNC 130-character description; one H1 on both pages
- Canonical: self-referencing on both production pages
- Hreflang: 8 alternate entries including x-default on both pages
- Robots: no page-level noindex; generated robots.txt allows crawling
- Internal links: no missing local target in 29 blog links and 23 CNC links
- Blog images: 11 total; 10 article-card images still lack Alt and require the approved shared-template fix
- CNC images: 4 total; all include Alt
- JSON-LD: parseable on both pages; Service Schema brand and description mismatch recorded as B11
- Build warnings: theme metadata expects Hugo 0.158.0/0.163.3 extended; `.Site.Languages` and `.Site.Data` are deprecated in Hugo 0.170.1

### Final state

- Ready for human review.
- No commit, push, merge or deployment.

## 2026-11-22 - Batch KS-2026-11-02

**Type:** Multilingual commercial-page truth alignment and search-intent cleanup

### Target pages

- Aluminum Die Casting across EN, DE, ES, FR, JA, IT and KO
- CNC Machining across all seven languages

### Changes

| Files | Change | Reason |
|---|---|---|
| `content/aluminum-die-casting/index*.md` | Rewrote titles, descriptions, intros and service facts; removed 400T-5000T, 1.5 mm, ±0.01 mm, 20 years, zero-defect, 10,000+ and 24-hour quote claims; replaced AlumCasting resource links with KingShip internal paths | Keep the core commercial page factual and consistent across seven languages |
| `content/cnc-machining/index.{de,es,fr,ja,it,ko}.md` | Removed residual ±0.01 mm and 400T-3000T text, replaced confirmed material/process language, and localized technical-resource links | Resolve cross-language contradiction after the English CNC cleanup |
| `SEO-AUDIT/MULTILINGUAL-SEO-INVENTORY.md` | Added full language registry, core service matrix, metadata, keyword hypotheses, GSC segments and technical status | Establish a reusable multilingual baseline |
| `SEO-AUDIT/PUBLIC-TEMPLATE-SCHEMA-PATCH-PREVIEW.md` | Added Blog Alt and Service JSON-LD patch previews | Keep public-template and Schema work inside approval boundaries |

### Fact handling

- Equipment photos still do not equal machine count, tonnage range, ownership, capacity or product tolerance.
- Alloy names remain technical examples only unless confirmed for a project.
- No specific manufacturing range, tolerance, response time, capacity or defect result was added.

### Validation

- Production build: PASS, exit 0
- Staging build with Draft/Future: PASS, exit 0
- Seven-language Aluminum pages: one H1, self Canonical, 8 hreflang entries including x-default, RFQ form present
- Seven-language CNC pages: one H1, self Canonical, 8 hreflang entries including x-default, RFQ form present
- Internal links: no missing local target across the 14 pages
- Sitemap: all seven localized Aluminum and CNC URLs included
- JSON-LD: 2 valid blocks per page; current brand/description mismatch remains public-Schema approval item B11
- Visible risk-term scan: clean except Service JSON-LD fallback/legacy descriptions
- `git diff --check`: PASS

### Remaining

- Public article-card Alt and Service JSON-LD changes are approval required.
- Industry titles still duplicate the KingShip brand through shared title rendering.
- ES/FR/JA Aluminum pages remain shorter than the other localized versions.

## 2026-11-23 - Batch KS-2026-11-03

- Completed GSC, country, device and three-month comparison analysis.
- Read the shared Company Evidence matrix and remediation registers.
- Generated the 171-URL multilingual content matrix.
- Removed unsupported 24-hour quotation/response copy from all contact pages and RFQ success JavaScript.
- Removed duplicated KingShip suffixes from 42 industry-page titles.
- Created baseline, search-opportunity, RFQ, claim/evidence, roadmap, implementation-log and blocker deliverables.
- Production/Staging rebuild and final cross-language validation are recorded below.

