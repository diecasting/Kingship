# KingShip SEO Growth Baseline

**Audit date:** 2026-11-23  
**Property:** `sc-domain:kingship.alumcasting.com`  
**Site:** https://kingship.alumcasting.com/  
**Evidence authority:** `D:\Codex-SEO\Company-Evidence\COMPANY-FACT-MATRIX.md`

## 1. Executive Summary

KingShip has measurable but still small organic visibility. The latest three-month period improved versus the preceding three months in clicks and impressions, but the site remains dependent on a small number of pages and faces four structural constraints:

1. Several high-impression pages receive zero clicks.
2. The homepage and industry pages still contain claims that the shared evidence matrix marks `PENDING` or `REJECTED`.
3. The RFQ form has meaningful localization and instrumentation gaps.
4. Public templates still emit a KingShip page with an `AlumCasting` Service Schema brand and ten Blog card images without Alt.

The current work has removed multiple unsupported numeric claims from Aluminum Die Casting and CNC Machining across all seven languages, removed 24-hour quote promises from RFQ pages and the success message, and removed duplicated brand suffixes from industry titles. Production deployment has not occurred.

## 2. Data Availability

### GSC

- The query requested 2025-07-23 through 2026-11-21.
- The returned date rows begin on 2026-07-08, so the available GSC date history is shorter than 16 months.
- Search Analytics returns top visible rows, not the complete query universe.
- Search appearance returned no rows.
- No brand-query rows were visible; this does not prove zero brand demand.

### GA4 and RFQ

- No authorized GA4 read-only connection was available in this session.
- GSC does not provide form starts or qualified RFQs.
- `rfqSuccess` exists in `static/js/rfq-lead-tracking.js`, but successful event delivery and downstream qualification cannot be verified without analytics or CRM access.
- Qualified-RFQ and organic conversion rates are therefore `UNKNOWN`.

## 3. GSC Baseline

### Long-range total

| Window | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| Available data: 2025-07-23 to 2026-11-21 | 15 | 2,299 | 0.652% | 19.60 |

### Three-month comparison

| Window | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| 2026-08-23 to 2026-11-21 | 13 | 1,768 | 0.735% | 19.23 |
| 2026-05-25 to 2026-08-22 | 2 | 531 | 0.377% | 20.82 |
| Change | +11 | +1,237 | +0.358 pp | 1.60 positions better |

The improvement is a positive baseline signal, but the current content changes were not live during this window and cannot be credited for it.

### Devices

| Device | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| Desktop | 13 | 2,166 | 0.600% | 20.06 |
| Mobile | 2 | 121 | 1.653% | 11.79 |
| Tablet | 0 | 12 | 0% | 15.00 |

Desktop supplies almost all volume. Mobile is a much smaller sample, but its clicks and ranking are better; form and layout must still be validated separately.

### Countries, latest three months

| Country | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| USA | 2 | 837 | 0.239% | 30.16 |
| Germany | 2 | 71 | 2.817% | 16.07 |
| India | 1 | 76 | 1.316% | 10.50 |
| China | 2 | 54 | 3.704% | 6.28 |
| Brazil | 0 | 207 | 0% | 7.10 |

USA is the dominant impression market but converts poorly at the landing-page level. Brazil has strong average position and no visible clicks; query language and post-click quality require separate research.

## 4. Page Opportunities

| Page | Clicks | Impressions | CTR | Average position | Assessment |
|---|---:|---:|---:|---:|---|
| `/aluminum-die-casting/` | 0 | 254 | 0% | 14.89 | Largest commercial page gap; claims and SERP relevance needed correction |
| `/blog/` | 0 | 676 | 0% | 21.33 | Highest impression hub with wrong-intent and structural problems |
| `/cnc-machining/` | 1 | 177 | 0.565% | 44.72 | Commercial service query opportunity |
| `/tooling/` | 0 | 56 | 0% | 17.20 | Strong technical/commercial position; CTA and claim review needed |
| `/blog/aluminum-housings-for-medical-devices/` | 0 | 69 | 0% | 14.29 | Position 4–15 query cluster with no clicks |
| `/semi-solid-rheocasting/` | 0 | 17 | 0% | 23.94 | Requires company capability verification |
| `/industries/aerospace/` | 0 | 15 | 0% | 37.53 | Contains unsupported absolute inspection claims |
| `/contact/` | 1 | 9 | 11.1% | 8.22 | Small but high-intent sample |

## 5. Query Opportunities

High-priority visible query groups include:

- `adc12 aerospace aluminum die casting`: 67 impressions, position 6.28, no click.
- `precision a380 die casting service`: 46 impressions, position 4.98, no click.
- `precision aerospace aluminum alloy die casting`: 38 impressions, position 2.84, no click.
- `aluminum casting cnc machining service`: 29 impressions, position 46.34.
- `adc12 5-axis cnc machining`: 16 impressions, position 6.44.
- `aluminum foundry engineering support`: 43 impressions, position 56.84.
- `aluminum foundry transfer tooling`: 33 impressions, position 32.94.
- `cnc aluminium casting machining service provider`: 18 impressions, position 75.56.

The exact query, page, CTR and action set is stored in `KINGSHIP-SEARCH-OPPORTUNITY-MATRIX.csv`.

## 6. Full-Site Technical Audit

The production build contains 171 HTML entry files, including aliases and localized duplicates.

### Current strengths

- All seven configured languages build successfully: EN, DE, ES, FR, JA, IT and KO.
- Core service pages have one H1, self-referencing Canonical and eight hreflang links including x-default.
- Core localized service pages appear in their language sitemap.
- No missing internal target was found in the seven-language Aluminum and CNC pages.
- New build no longer generates `/users/*`, `/tags/*`, `/series/*` or `/categories/*`; those URLs persist only in historical GSC data.

### Technical issues

| Priority | Issue | Evidence | Impact |
|---|---|---|---|
| P0 | Homepage still publishes 3000T/5000T and certification claims beyond current evidence | `data/homepage/*.yaml`; Company Evidence matrix | Misleading capability/certification risk |
| P0 | Industry pages still contain `every part`, full inspection and certified-operation claims | `content/industries/*` | Unsupported quality and coverage promises |
| P1 | CNC Service JSON-LD emits `3/4/5-axis` and brand `AlumCasting` | `data/company.yaml:11,170-190` | Schema conflicts with visible content and brand |
| P1 | Blog cards have 10 images without Alt | `layouts/partials/article-link/card.html:63-70` | Accessibility and template completeness |
| P1 | RFQ labels are inconsistent across languages | `layouts/partials/rfq-form.html:5-68`; `layouts/shortcodes/rfq_form.html:5-68` | Buyer friction |
| P2 | Some localized pages are short summaries rather than full equivalents | ES/FR/JA Aluminum | Uneven multilingual depth |
| P2 | Old taxonomy/user URLs still receive GSC impressions | GSC page rows | Historical index residue |

## 7. Multilingual Terminology Baseline

| English term | DE | ES | FR | JA | IT | KO |
|---|---|---|---|---|---|---|
| Aluminum die casting | Aluminium-Druckguss | fundición a presión de aluminio | fonderie sous pression aluminium | アルミニウムダイカスト | pressofusione di alluminio | 알루미늄 다이캐스팅 |
| Magnesium die casting | Magnesium-Druckguss | fundición a presión de magnesio | moulage sous pression magnésium | マグネシウムダイカスト | pressofusione di magnesio | 마그네슘 다이캐스팅 |
| High-pressure die casting | Hochdruckguss | fundición a presión | fonderie sous pression | 高圧ダイカスト | pressofusione ad alta pressione | 고압 다이캐스팅 |
| Semi-solid rheocasting | Semi-Solid-Rheocasting | reofundición semisólida | rhéocoulage semi-solide | 半凝固レオキャスト | rheocasting semi-solido | 반용융 레오캐스팅 |
| CNC machining | CNC-Zerspanung | mecanizado CNC | usinage CNC | CNC加工 | lavorazione CNC | CNC 가공 |
| Die casting tooling | Druckguss-Werkzeugbau | utillaje de fundición | outillage de fonderie | ダイカスト金型 | stampi per pressofusione | 다이캐스팅 금형 |
| Mold-flow simulation | Formfüllungssimulation | simulación de llenado | simulation de remplissage | 流動解析 | simulazione di flusso | 유동 해석 |
| Porosity | Porosität | porosidad | porosité | 気孔 | porosità | 기공 |
| Shrinkage | Schwindung | contracción | retassure | 引け巣 | ritiro | 수축공 |
| Cold shut | Kaltschweißstelle | junta fría | jonction froide | 湯境 | giunto freddo | 콜드셧 |
| Dimensional tolerance | Maßtoleranz | tolerancia dimensional | tolérance dimensionnelle | 寸法公差 | tolleranza dimensionale | 치수 공차 |
| DFM | fertigungsgerechte Konstruktion | diseño para fabricación | conception pour fabrication | 設計の製造性 | progettazione per producibilità | 제조 설계 |
| First article inspection | Erstmusterprüfung | inspección de primera pieza | contrôle du premier article | 初品検査 | ispezione del primo articolo | 초품 검사 |
| X-ray inspection | Röntgenprüfung | inspección por rayos X | contrôle par rayons X | X線検査 | ispezione a raggi X | X선 검사 |

## 8. This Batch's Safe Implementations

- Aluminum Die Casting: all seven language pages rewritten away from unsupported equipment, tolerance, capacity, years and quality claims.
- CNC Machining: all seven languages cleaned of residual numeric capability claims.
- Blog: English intent hub rebuilt; DE/IT/KO metadata cleaned.
- Contact/RFQ pages: all seven languages no longer promise a quote within 24 hours.
- RFQ success JS: no longer says response within 24 hours.
- Industry pages: duplicated KingShip brand suffix removed from all localized titles.

## 9. Baseline Conclusion

The site is not yet ready for aggressive content scaling. P0 enterprise-claim and RFQ-instrumentation issues must be closed first. The next growth gains should come from:

1. Removing remaining P0 unsupported claims on the homepage and industry pages.
2. Fixing public Schema and Blog Alt under approval.
3. Localizing the RFQ form consistently.
4. Improving the highest-position commercial pages: Aluminum, CNC and Tooling.
5. Expanding only content clusters that can be supported by neutral engineering sources.
