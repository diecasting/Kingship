# KingShip P1 Schema Validation

**Date:** 2026-11-23  
**Status:** `PASS FOR LOCAL BUILD; CERTIFICATE PUBLIC-USE GATE STILL CONDITIONAL`

## Changes

- Organization and Service brand name is `KingShip`.
- Legal name is `Kingship (Dongguan) Precision Manufacturing Co., Ltd.`.
- Duplicate `alternateName` is suppressed when it equals the brand.
- Certification strings identify the exact document number:
  - ISO 9001:2015 `DZ/CN/2411010Q`
  - IATF 16949:2016 `T207408 / 0613009`
- Service descriptions use project-specific scope instead of universal equipment, tolerance or quality claims.
- Semi-Solid Rheocasting was removed from the Organization OfferCatalog and industry service mappings while capability evidence is pending.

## Verification

| Check | Result |
|---|---:|
| Pages containing JSON-LD | 170 |
| JSON-LD blocks that fail JSON parsing | 0 |
| Organization brand | `KingShip` |
| `AlumCasting` used as KingShip alternate name | No |
| Core pages with one H1 | Pass |
| Visible content versus core service Schema | Aligned for reviewed claims |

Schema types checked: Organization, ManufacturingBusiness, WebSite, WebPage, BreadcrumbList, Service, Article and FAQPage.

## Open Evidence Issue

The certificate documents and legal-name mapping have been reviewed, but issuing-body online validity and public-use permission remain `CONDITIONAL`. The pages explicitly state that dates and scope are as printed on the supplied documents.
