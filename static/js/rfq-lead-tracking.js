// static/js/rfq-lead-tracking.js
// KingShip RFQ lead tracking — pushes a single GA4 `rfqSuccess` dataLayer event
// ONLY after Formspree confirms acceptance of the submission.
// Covers all three production form variants (shared partial, homepage inline,
// and the {{< rfq_form >}} shortcode, including the multipart file-upload form).
// No form-HTML, analytics ID, GTM, consent, or SEO changes are made here.
(function () {
  "use strict";
  var SELECTOR = 'form[action*="formspree.io/f/xpqgbdly"]';

  function ensureStatus(form) {
    var s = form.querySelector('.rfq-status');
    if (!s) {
      s = document.createElement('div');
      s.className = 'rfq-status';
      s.setAttribute('role', 'alert');
      s.style.cssText = 'margin-top:16px;font-size:14px;font-family:sans-serif;';
      form.appendChild(s);
    }
    return s;
  }
  function getMaterial(form) {
    var el = form.querySelector('[name="material"]');
    return el ? el.value : '';
  }
  function getLocation(form) {
    if (location.pathname === '/') return 'homepage';
    if (/contact|rfq/i.test(location.pathname)) return 'contact';
    return 'content';
  }

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form.matches || !form.matches(SELECTOR)) return;

    // Preserve native HTML5 required-field validation UX; do not fetch/track.
    if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Hard guard against double-click / repeated submit while a request is pending.
    if (form.dataset.submitting === '1') { e.preventDefault(); return; }

    // Graceful fallback: if fetch is unavailable, let the native POST proceed.
    if (typeof fetch !== 'function') return;

    e.preventDefault();
    form.dataset.submitting = '1';
    var btn = form.querySelector('button[type="submit"]');
    var origLabel = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    var status = ensureStatus(form);

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        status.textContent = 'Thank you — your RFQ has been received. We will respond within 24 hours.';
        status.style.color = '#16a34a';
        // Push exactly one event per genuine successful submission.
        if (form.dataset.tracked !== '1') {
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            event: 'rfqSuccess',
            form_location: getLocation(form),
            material: getMaterial(form)
          });
          form.dataset.tracked = '1';
        }
      } else {
        return res.json().then(function (body) {
          var msg = 'Submission could not be completed.';
          if (body && body.errors) {
            var keys = Object.keys(body.errors);
            if (keys.length) msg = 'Please check: ' + keys.join(', ') + '.';
          }
          throw new Error(msg);
        }, function () { throw new Error('Submission could not be completed.'); });
      }
    }).catch(function (err) {
      status.textContent = (err && err.message) ? err.message
        : 'Submission failed. Please try again or email hank@alumcasting.com.';
      status.style.color = '#dc2626';
      // Clear pending guard so the user can retry; success guard stays until a real success.
      form.dataset.submitting = '';
      if (btn) { btn.disabled = false; btn.textContent = origLabel; }
    });
  });
})();
