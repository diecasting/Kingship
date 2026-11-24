# KingShip Autonomous SEO Backlog

**Last updated:** 2026-11-22

| ID | Priority | Page / area | Opportunity | Evidence | Status | Next safe action |
|---|---|---|---|---|---|---|
| B01 | P1 | `/blog/` | Reduce mismatched hub queries and give engineers a clear topic-navigation path | 533 impressions, 0 clicks, average position 15.37; 25 visible query-page rows include flange, cold forming and investment casting | VERIFIED - LOCAL | Monitor after publishing approval |
| B02 | P1 | `/cnc-machining/` | Match casting CNC service/provider/supplier intent and strengthen RFQ inputs | 143 impressions, 1 click, average position 51.83; supplier query at position 14.83, service/provider queries at 38-89 | VERIFIED - LOCAL | Monitor after publishing approval |
| B03 | P1 | CNC service facts | Remove or hold unverified axis count, high-speed machining, ±0.01 mm, confirmed alloys, 400T-3000T and wall-thickness claims | `FACT-VERIFICATION-MATRIX.md` E08, M02, M04, M05 | VERIFIED - LOCAL | All 7 language bodies corrected; request equipment and capability evidence before restoring specifics |
| B04 | P1 | `/aluminum-die-casting/` | Convert the strongest commercial page into a transparent capability and RFQ page | 66 impressions, 0 clicks, average position 31.42 | VERIFIED - LOCAL | All 7 language pages corrected; monitor after publication approval |
| B05 | P1 | `/magnesium-die-casting/` | Resolve conflicting magnesium machine ranges and material-scope claims | 160T-2250T vs 400T-3000T conflict in fact matrix | BLOCKED | Engineering/production must identify current equipment |
| B06 | P2 | `/blog/` cards | Ensure decorative card images are not announced without useful Alt context | `layouts/partials/article-link/card.html:63-70` uses `role="presentation"` without `alt` | APPROVAL REQUIRED | Approve a narrowly scoped shared-template Alt change |
| B07 | P2 | Blog translations | Remove unverified `20+ years` language from translated blog metadata | German, Italian and Korean descriptions contained equivalent unsupported experience claims | DONE - LOCAL | Verify rendered translated metadata after build |
| B08 | P2 | Commercial-page RFQ links | Connect commercial service content to a small number of relevant RFQ and technical resources | Current internal-link path is uneven | IN PROGRESS | Add only contextual links, no new URLs |
| B09 | P2 | Industry pages | Remove `Every automotive/aerospace/medical part` total-inspection implications | Fact matrix Q03-Q07 | OPEN | Rewrite to project-specific inspection and traceability |
| B10 | P3 | Stale taxonomy/user URLs | GSC still returns `/tags/*` and `/users/*` results from historical indexing | Current config disables taxonomy kinds, but old URLs remain visible in GSC | MONITOR | Do not change redirects or indexing strategy without approval |
| B11 | P1 | Service JSON-LD | Remove the `AlumCasting` brand value from KingShip Service Schema and replace the unverified `3/4/5-axis` service description | `data/company.yaml:11,170-174`; rendered CNC JSON-LD | APPROVAL REQUIRED | Approve a scoped public-Schema correction |
| B12 | P2 | Industry page titles | Remove duplicated brand suffix in rendered `<title>` | Leaf titles already contain KingShip while the shared head appends the site title | DONE - LOCAL | Verify build output |
| B13 | P2 | ES/FR/JA Aluminum pages | Increase commercial depth to match EN/DE/IT/KO | Localized pages are shorter summaries | OPEN | Expand using verified process and RFQ content |
| B14 | P2 | Multilingual inventory | Record all seven language versions, metadata, hreflang, Canonical, GSC and gaps | `SEO-AUDIT/MULTILINGUAL-SEO-INVENTORY.md` | DONE - LOCAL | Refresh after each batch |
| B15 | P0 | Homepage claims | Remove unsupported 3000T/5000T, quality, certification and equipment claims across languages | Shared Company Fact Matrix marks claims PENDING/REJECTED | OPEN | Next source edit batch |
| B16 | P0 | Industry-page claims | Replace every-part inspection, full traceability and certified-operation claims with project-scoped wording | `content/industries/*.md` | OPEN | Next source edit batch |
| B17 | P1 | RFQ localization | DE/ES and partial IT/KO labels currently fall back to English | `layouts/partials/rfq-form.html`; `layouts/shortcodes/rfq_form.html` | APPROVAL REQUIRED | Review form integration and approve |
| B18 | P1 | Analytics instrumentation | GA4 and qualified-RFQ data unavailable; `rfqSuccess` destination unverified | No GA4/CRM connection | BLOCKED | Connect read-only analytics/CRM |

## P0 status

No new P0 crawl, access or Canonical issue was identified from the current GSC queries, public page structure or repository inspection. Existing URL, redirect and indexing decisions remain unchanged.

