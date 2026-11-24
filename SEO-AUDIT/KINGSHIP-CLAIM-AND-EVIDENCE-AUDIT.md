# KingShip Claim and Evidence Audit

**Date:** 2026-11-23  
**Authoritative evidence:** `D:\Codex-SEO\Company-Evidence\COMPANY-FACT-MATRIX.md` and supporting registers  
**Rule:** Website text is a claim, not proof.

## 1. Status Summary

| Status | Meaning | Current KingShip use |
|---|---|---|
| `VERIFIED` | Exact entity, scope, validity and public-use permission align | No enterprise capability family currently reaches this level in the shared matrix |
| `PARTIALLY_VERIFIED` | A document or image supports part of the claim | CNC process plausibility, tooling workshop, metrology equipment type, some certificates as document copies |
| `PENDING` | Evidence or authorization is missing | Current IATF original, 3000T/5000T, SSR/A357, CNC count, capacity, employees, factory area, image reuse, customer cases |
| `REJECTED` | Existing evidence contradicts the claim | Universal zero-defect/zero-porosity/100% inspection, blanket precision, unsupported machine ownership |

## 2. Critical Claim Families

| Claim family | Current public locations | Shared evidence result | Required treatment |
|---|---|---|---|
| Current IATF 16949 certificate T207408 / 0613009 | `/certifications/`; homepage quality sections; industry descriptions; image certificate copies | `PENDING`: the current source certificate is not in Company Evidence; older evidence names a different holder/certificate | Do not describe as an independently verified active certification until REM-P0-002/003 are complete |
| ISO 9001 / ISO 14001 / ISO 13485 | `/certifications/`; homepage; industry pages | `PARTIALLY_VERIFIED` for document copies; current issuer status `PENDING` | Use certificate-copy wording and exact printed scope; avoid blanket “certified operations” |
| Brand/entity relationship | Schema, homepage, About/operating statements | `PENDING`: no signed brand assignment/authority record | Do not transfer certificates, equipment, cases or media rights automatically between AlumCasting and KingShip |
| 3000T machine or 400T–3000T range | `/tooling/`, `/magnesium-die-casting/`, `/semi-solid-rheocasting/`, homepage | `PENDING`; equipment list shows 180T–1650T and no 3000T machine | Remove exact range or use neutral project-selection wording |
| 5000T machine/large structural line | Homepage and metadata | `PENDING`; no 5000T machine in equipment list | Remove until ownership, nameplate, installation and operating state are evidenced |
| Semi-solid rheocasting / A357 production | `/semi-solid-rheocasting/`, homepage, technical articles | `PENDING`; no process parameters, equipment or production record | Present general process education only; no KingShip operating-capability claim |
| CNC machine count / axes | Homepage, CNC page, schema | `PARTIALLY_VERIFIED` for the existence of CNC equipment; exact count and axis inventory `PENDING` | Describe CNC post-machining and project-defined scope; no fixed count or axis guarantee |
| Blanket ±0.01 mm tolerance / CMM precision | Homepage, legacy service sections, schema | `REJECTED` as universal claim; no capability study/uncertainty budget | State feature-specific feasibility after drawing, setup and measurement review |
| Capacity, employee count, factory area | Homepage/about/schema | `PENDING`; source values conflict or lack current official records | Do not publish exact numbers |
| Zero-defect, zero-porosity, 100% X-ray/leak, Cpk guarantee | Homepage, industry pages, old articles | `REJECTED` | Remove absolute claims; define project acceptance criteria |
| Every automotive/aerospace/medical part is inspected/traced | Industry pages | `PENDING` and contradicted by project-specific pages | State that inspection and traceability are agreed per project |
| Quotation within 24 hours | Previously contact pages, RFQ success message, homepage | No approved SLA | **Corrected in current worktree** on contact pages and JS; homepage data still needs removal |
| Customer names, logos, case outcomes | Image/case pages, possibly articles | `PENDING`; no customer release | Do not add or reuse until written approval |
| Image ownership and third-party media use | Blog/article images and future campaigns | 30/30 authorization records `PENDING` | Keep current-site status separate from future article/media reuse approval |

## 3. Direct Contradictions

1. Company Evidence lists seven documented cold-chamber machines at approximately 180T–1650T; the site still presents 3000T and 5000T capability.
2. Company Evidence records conflicting CNC totals (`Over 150`, `200+`, `400+`) without a reconciled register; the site uses fixed axis and capacity wording.
3. The evidence library contains an older IATF certificate with a different holder identity; the current KingShip WebP certificate is not backed by an original in the library.
4. The site says every part receives certain inspection/traceability; CNC page states these are project-specific.
5. The site’s Service Schema brand is `AlumCasting`, while the page and site are KingShip and the brand assignment remains pending.
6. Image use on the current site does not establish permission for third-party republishing.

## 4. Files Inspected

- `D:\Codex-SEO\Company-Evidence\COMPANY-FACT-MATRIX.md`
- `D:\Codex-SEO\Company-Evidence\COMPANY-EVIDENCE-REMEDIATION-QUEUE.md`
- `D:\Codex-SEO\Company-Evidence\EVIDENCE-REGISTER.csv`
- `D:\Codex-SEO\Company-Evidence\IMAGE-PUBLIC-AUTHORIZATION-REGISTER.csv`
- `D:\Codex-SEO\Company-Evidence\COMPANY-EVIDENCE-AUDIT-REPORT.md`
- `D:\Codex-SEO\Company-Evidence\COMPANY-EVIDENCE-C2-REMEDIATION-REPORT.md`

## 5. Corrected in Current Worktree

- Aluminum Die Casting, all seven languages: removed 400T–5000T, 1.5 mm, ±0.01 mm, 20-year, zero-defect, 10,000+ and 24-hour quotation claims.
- CNC Machining, all seven languages: removed residual ±0.01 mm and 400T–3000T claims.
- Contact pages and RFQ success message: removed the unapproved 24-hour quotation promise.
- Industry page titles: removed duplicated KingShip suffix.

## 6. Still Requires Remediation

The homepage YAML files, Tooling, Magnesium, Semi-Solid and industry-page body content remain the highest-priority P0 claim cleanup targets. No numeric replacement should be invented. Where evidence is unavailable, use neutral process language or remove the claim.

Public Schema changes and form-label changes remain approval-gated.
