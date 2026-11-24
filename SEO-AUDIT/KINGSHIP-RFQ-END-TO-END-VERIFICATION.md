# KingShip RFQ End-to-End Verification

**Date:** 2026-11-24  
**Status:** `NO-ATTACHMENT RFQ DELIVERY PASS; FILE UPLOAD LIMITED BY FORMSPREE FREE PLAN`

## Verified Submission

| Item | Evidence |
|---|---|
| Form | `Kingship Web RFQ` |
| Form ID | `xpqgbdly` |
| Submission ID | `173776100` |
| Time | `Nov 24, 2026, 07:39` |
| Folder | `Inbox` |
| Subject | `KingShip Technical RFQ - EN` |
| Reply-to | `a***@gmail.com`（redacted） |
| Attachment | None |
| Formspree status | `_status hank@alumcasting.com: delivered` |
| Actual mailbox | User confirmed receipt at `hank@alumcasting.com` |

## Static Build Verification

| Check | Result |
|---|---:|
| HTML entries | 178 |
| Formspree forms | 84 |
| Unique Formspree endpoints | 1 |
| Correct POST method | 84 / 84 |
| Name required | 84 / 84 |
| Business Email required | 84 / 84 |
| Project Details required | 84 / 84 |
| Technical file inputs | 77 |
| File inputs marked required | 0 |
| Seven-language optional labels | 77 |

Endpoint:

```text
https://formspree.io/f/xpqgbdly
```

No endpoint, recipient, notification or field-name change was made in this step.

## JavaScript Verification

- `node SEO-AUDIT/tests/rfq-tracking-test.js` — PASS.
- `node SEO-AUDIT/tests/rfq-file-optional-test.js` — PASS.
- No-attachment submission is allowed.
- Name, email and message keep native required validation.
- Oversized files are blocked with a localized message.
- Formspree `errors` arrays are rendered as readable messages rather than `Please check: 0`.
- Duplicate submissions are blocked while a request is pending.

## Delivery Classification

| Layer | Status |
|---|---|
| Browser/form validation | PASS |
| No-attachment client path | PASS |
| Formspree server acceptance | PASS |
| Inbox storage | PASS |
| Formspree notification status | PASS — delivered |
| User-confirmed mailbox receipt | PASS |
| File upload with Formspree Free plan | NOT VERIFIED / FUNCTION NOT INCLUDED |
| GA4 event delivery | NOT VERIFIED |
| CRM lead qualification | NOT VERIFIED |

## Separate Historical Test

The earlier internal test `173688253` was classified as Spam and had no notification status. It is not the successful end-to-end evidence.

## Remaining RFQ Risk

The file-upload control remains visible even though Formspree Free does not support uploads. A client who selects a file may receive `NO_FILE_UPLOADS`.

Recommended follow-up:

1. Hide the file input until upload support is available; or
2. Upgrade Formspree with separate paid-plan approval; or
3. Use another approved file-transfer workflow.

This is a post-launch UX risk, not a blocker for no-attachment RFQs.

