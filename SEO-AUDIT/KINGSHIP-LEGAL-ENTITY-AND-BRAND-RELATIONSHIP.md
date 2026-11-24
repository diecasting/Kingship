# KingShip Legal Entity and Brand Relationship

**Date:** 2026-11-23

## 1. Verified Relationship Chain

```text
Business license:
金智捷（东莞市）精密机械有限公司
        ↓ same Chinese name and address
IATF Chinese certificate page
        ↓ paired English certificate page
Kingship (Dongguan) Precision Manufacturing Co., Ltd.
        ↓ site identity
KingShip website
```

This chain is supported by:

- business license: `91441900MA52587W3F`, address `振兴东路85号101室`;
- IATF Chinese page: same Chinese name, same road address, IATF USI `G53Y3H`;
- IATF English page: `Kingship (Dongguan) Precision Manufacturing Co., Ltd.`;
- KingShip footer, Organization data and certification page.

## 2. Status Matrix

| Relationship | Status | Notes |
|---|---|---|
| Chinese business-license entity → IATF Chinese holder | `VERIFIED` | Name, address and credit-code-linked certificate context match |
| IATF Chinese holder → English Kingship name | `VERIFIED` | Both names appear on the same bilingual certificate file |
| KingShip website → named manufacturing entity | `CONDITIONAL` | Public site identity aligns, but current company/brand authorization document is still absent |
| KingShip → AlumCasting brand | `PENDING` | AlumCasting About text says operated by Kingship; no signed brand assignment |
| KingShip → AlumCasting equipment/customers/articles | `PENDING` | Brand relation does not automatically transfer assets or content rights |
| Current certificate → active status on review date | `CONDITIONAL` | Printed dates cover the review date; external issuer status not independently checked |

## 3. Website Implications

Allowed with current evidence:

- Use the exact legal name `Kingship (Dongguan) Precision Manufacturing Co., Ltd.`
- Use IATF certificate T207408 / 0613009 and the exact scope.
- State Clause 8.3 product design is excluded.
- Provide certificate copies for supplier review.

Not allowed:

- claim AlumCasting and KingShip are the same brand without authorization;
- assign AlumCasting-specific customers or equipment to KingShip;
- imply IATF covers product design or every related factory;
- describe the certificate as independently confirmed active unless issuer verification is completed.

## 4. Schema Guidance

- Organization legal name: exact certificate/license-linked entity.
- Brand: `KingShip`.
- Do not use `AlumCasting` as KingShip `alternateName` or Service brand without an approved brand-relation document.
