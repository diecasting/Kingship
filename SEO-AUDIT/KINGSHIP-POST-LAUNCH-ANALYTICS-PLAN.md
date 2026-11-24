# KingShip Post-Launch Analytics Plan

**Date:** 2026-11-24  
**Status:** `GA4/CRM NON-BLOCKING - CONNECTION UNKNOWN`

## Current Evidence

- GTM container is present in generated pages.
- `rfqSuccess` is pushed only after a successful Formspree response.
- The local tracking unit test passes.
- No authenticated GA4 or CRM connection is available in this session.
- Event arrival, duplicate prevention in production, lead disposition and qualified-RFQ rate are `UNKNOWN`.

## Post-Launch Tasks

1. Use GA4 DebugView to confirm one `rfqSuccess` event per accepted test submission.
2. Record `form_location`, `material` and page language.
3. Confirm no duplicate event when the submit button is repeatedly clicked.
4. Connect Formspree submissions to the CRM or a controlled inbox workflow.
5. Define qualified RFQ from fit, volume, drawing completeness and engineering feasibility.
6. Review commercial-page impressions, CTR and RFQ starts weekly for 28 and 56 days.

## Non-Blocking Rule

Lack of GA4/CRM reporting does not block launch by itself. It must remain explicitly marked `UNKNOWN` until observed in an authenticated property.
