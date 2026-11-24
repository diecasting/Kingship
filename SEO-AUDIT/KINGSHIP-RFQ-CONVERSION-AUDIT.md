# KingShip RFQ Conversion Audit

**Date:** 2026-11-23  
**Scope:** Homepage RFQ, service-page CTAs, contact pages, form variants, submission status, analytics hooks  
**Mode:** Code and generated-HTML inspection only; no test email or real submission

## 1. Funnel

```text
Organic landing page
→ Service understanding
→ Technical proof
→ RFQ CTA
→ Form start
→ Form completion
→ Formspree response
→ Inline success/error status
→ Qualified RFQ (UNKNOWN without CRM)
```

## 2. Current Paths

| Entry | Form / CTA | File evidence |
|---|---|---|
| Homepage | `{{< rfq_form >}}` and inline RFQ section | `layouts/partials/sections/rfq-cta.html`; generated homepage |
| Contact pages | `{{< rfq_form >}}` | `content/contact/index*.md:12-15` |
| Service pages | `{{< rfq_form >}}` plus contact CTA | service page content and `layouts/partials/sections/service/service-cta.html` |
| Blog | `/contact/` links added to English hub | `content/blog/_index.md` |

## 3. Form Variants

### Homepage-form partial

File: `layouts/partials/rfq-form.html`

- Fields: Name, Company, Business Email, Material, Volume, Message.
- Required: Name, Email, Message.
- No file upload.
- Action: Formspree.
- Material choices are phrased as available alloys rather than project candidates.

### `rfq_form` shortcode

File: `layouts/shortcodes/rfq_form.html`

- Fields: Name, Company, Email, Material, File Upload, Project Details.
- Required: Name, Email, File, Project Details.
- File upload uses `enctype="multipart/form-data"`.
- No process, tolerance, quantity, country, or quality-document selector.

Risk: requiring a file before the buyer understands supported file types or Formspree plan limits can increase abandonment. Do not alter until the integration has been validated.

## 4. Language Support

### Partial

`layouts/partials/rfq-form.html:5` selects French only when the page is French; all other non-English languages receive English labels, even though Italian and Korean dictionaries exist at lines 22-51.

### Shortcode

`layouts/shortcodes/rfq_form.html:5-68` has dictionaries for EN, IT, KO, JA and FR. German and Spanish fall back to English.

Impact:

- German and Spanish users see English form labels.
- The partial also sends Italian and Korean users to English.
- Mixed-language forms reduce trust and completion confidence.

Status: `APPROVAL REQUIRED` because this is shared RFQ-form code.

## 5. Required Information and Friction

Missing or inconsistent fields:

- Manufacturing process / project stage.
- Annual volume in the shortcode variant.
- Target tolerance by feature.
- Inspection/documentation scope.
- Country and delivery destination.
- Prototype vs production.
- Drawing file guidance and maximum file size.

Do not add these without checking Formspree plan limits, spam behavior, and CRM intake requirements.

## 6. Success and Error Handling

File: `static/js/rfq-lead-tracking.js`

Strengths:

- HTML5 required-field validation remains active.
- Prevents duplicate submit while pending.
- Handles Formspree non-success responses.
- Fires one `rfqSuccess` dataLayer event after accepted submission.
- Keeps a native POST fallback if `fetch` fails.

Corrections in current worktree:

- Success text no longer promises a response within 24 hours.

Remaining issues:

- Success text remains English on all localized pages.
- Error text and “Please check:” text remain English.
- No verified GA4 destination exists for `rfqSuccess`.
- No thank-you URL or server-side receipt is available for independent QA.
- No qualified-lead definition exists.

## 7. Trust and Contact

- Email is visible in some form explanatory text, but not in the main shortcode itself.
- No phone number, business hours, response process, privacy link, or file-handling statement is visible in the form.
- Certification wording elsewhere must remain within the evidence matrix.
- Do not add trust badges, response SLAs or customer logos without authorization.

## 8. Mobile and Accessibility

Code-level observations:

- Fields use flexible grids / wrapping and should resize on mobile.
- Labels are visually present but not associated with inputs using `for`/`id` in the inline forms.
- Required fields rely on browser validation; no persistent accessible help text.
- No automated browser/mobile rendering test was available in this batch.

Status: visual mobile testing and accessibility labels are `OPEN`.

## 9. Conversion Instrumentation Gaps

| Metric | Status |
|---|---|
| Organic sessions | UNKNOWN - no GA4 connection |
| Landing-page engagement | UNKNOWN |
| RFQ button clicks | Not verified |
| Form starts | Not verified |
| Form submissions | `rfqSuccess` code exists, delivery unverified |
| Submission errors | Error UI exists, event tracking absent |
| Qualified RFQs | UNKNOWN - no CRM connection |
| Organic RFQ conversion rate | UNKNOWN |

## 10. Recommended Sequence

1. Approve and localize form labels for all seven languages.
2. Confirm Formspree limits and whether file upload should be required.
3. Add a common project-information block before the form.
4. Provide separate prototype and production RFQ paths only if evidence supports both.
5. Add privacy/file-handling guidance after legal review.
6. Connect `rfqSuccess` to a verified GA4 event and CRM qualification status.
7. Run mobile and keyboard accessibility tests without submitting real customer data.

## 11. Approved-Safe Changes Made

- Replaced all seven contact-page 24-hour quotation promises with scope-review language.
- Replaced the RFQ success message’s 24-hour response promise with a neutral follow-up statement.
- No form action, endpoint, field name, required-field rule or third-party configuration was changed.
