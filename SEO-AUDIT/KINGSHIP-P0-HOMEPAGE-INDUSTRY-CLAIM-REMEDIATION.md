# KingShip P0 Homepage and Industry Claim Remediation

**Date:** 2026-11-23  
**Status:** `IN PROGRESS - DEPLOYMENT BLOCKED`

## 1. Completed

### Homepage

- English homepage no longer claims a verified 5000T machine, 400T–5000T fleet, 160T–2250T magnesium fleet, universal CNC axes, blanket ±0.01 mm, zero-defect, first-time qualification or 100,000-shot tool life.
- English homepage now states the exact IATF 16949 and ISO 9001 certificate identities and scopes.

### Industry Pages

All seven languages no longer use duplicated brand suffixes in titles.

English, DE, ES, FR, IT, JA and KO Automotive/Aerospace/Medical/EV/Industrial bodies were cleaned of:

- universal `every part` X-ray/dimensional/traceability claims;
- fixed 3/4/5-axis claims;
- unsupported in-house tooling assertions in project FAQs;
- direct implication that IATF automatically covers product design.

### Contact/RFQ

- All seven contact pages and the success message no longer promise quotation or response within 24 hours.

## 2. Language Status

| Language | English Home | Industry Bodies | RFQ Pages | Status |
|---|---|---|---|---|
| EN | Corrected | Corrected | Corrected | Pass for reviewed claims |
| DE | Partial | Corrected for targeted claims | Corrected | Needs final homepage claim cleanup |
| ES | Partial | Corrected for targeted claims | Corrected | Needs final homepage claim cleanup |
| FR | Partial | Corrected for targeted claims | Corrected | Needs final homepage claim cleanup |
| JA | Partial | Corrected for targeted claims | Corrected | Needs final homepage claim cleanup |
| IT | Partial | Corrected for targeted claims | Corrected | Needs final homepage claim cleanup |
| KO | Partial | Corrected for targeted claims | Corrected | Needs final homepage claim cleanup |

“Corrected for targeted claims” means the matrix-selected P0 claim locations; it does not certify every sentence as final.

## 3. Evidence Basis

- Current IATF: NQA T207408 / IATF 0613009, holder mapping checked.
- IATF scope: manufacture of die-cast parts and machined parts; Clause 8.3 excluded.
- ISO 9001: DZ/CN/2411010Q, precision mechanical parts and die-casting molds.
- No 3000T/5000T machine in the shared equipment list.
- 180T–1650T equipment family documented but ownership/current operating status remains partial.
- CNC count, product tolerance, capacity, SSR/A357, customers and images remain PENDING.

## 4. Not Safe to Restore

- 5000T ownership/operation.
- 400T–3000T or 400T–5000T as a complete confirmed range.
- 160T–2250T magnesium range.
- Fixed CNC machine count or axis guarantee.
- Blanket ±0.01 mm.
- Zero-defect/zero-porosity/full inspection.
- 100,000-shot tool life.
- 10,000+ volume runs.
- 24-hour quote SLA.
- Customer names/logos/cases.

## 5. Next Required Work

Translate the safe English homepage claim model into the six localized YAML files without reusing the old numeric claims. This is the main remaining P0 code task before deployment.
