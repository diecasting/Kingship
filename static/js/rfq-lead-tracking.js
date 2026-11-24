// static/js/rfq-lead-tracking.js
// KingShip RFQ lead tracking — pushes a single GA4 `rfqSuccess` dataLayer event
// ONLY after Formspree confirms acceptance of the submission.
// Covers all three production form variants (shared partial, homepage inline,
// and the {{< rfq_form >}} shortcode, including the multipart file-upload form).
// No form-HTML, analytics ID, GTM, consent, or SEO changes are made here.
(function () {
  "use strict";
  var SELECTOR = 'form[action*="formspree.io/f/xpqgbdly"]';
  var LANG = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
  var MAX_FILE_SIZE = 25 * 1024 * 1024;
  var TEXT = {
    en: {
      sending: "Sending…",
      success: "Thank you — your RFQ has been received. Our team will review the project information and follow up.",
      failed: "Submission could not be completed.",
      check: "Please check: ",
      retry: "Submission failed. Please try again or email hank@alumcasting.com.",
      fileTooLarge: "The selected file exceeds the 25 MB upload limit.",
      fileUploadUnsupported: "File uploads are not available for this RFQ endpoint. Submit without a file or contact us by email.",
      tooManyFiles: "Please upload only one file."
    },
    de: {
      sending: "Wird gesendet…",
      success: "Vielen Dank — Ihr RFQ ist eingegangen. Unser Team prüft die Projektinformationen und meldet sich.",
      failed: "Die Übermittlung konnte nicht abgeschlossen werden.",
      check: "Bitte prüfen Sie: ",
      retry: "Übermittlung fehlgeschlagen. Bitte erneut versuchen oder hank@alumcasting.com kontaktieren.",
      fileTooLarge: "Die ausgewählte Datei überschreitet das Upload-Limit von 25 MB.",
      fileUploadUnsupported: "Datei-Uploads sind für diesen RFQ-Endpunkt nicht verfügbar. Senden Sie ohne Datei oder kontaktieren Sie uns per E-Mail.",
      tooManyFiles: "Bitte laden Sie nur eine Datei hoch."
    },
    es: {
      sending: "Enviando…",
      success: "Gracias — hemos recibido su RFQ. Nuestro equipo revisará la información del proyecto.",
      failed: "No se pudo completar el envío.",
      check: "Revise: ",
      retry: "Error de envío. Inténtelo de nuevo o escriba a hank@alumcasting.com.",
      fileTooLarge: "El archivo seleccionado supera el límite de carga de 25 MB.",
      fileUploadUnsupported: "La carga de archivos no está disponible para este endpoint de RFQ. Envíe la solicitud sin archivo o contáctenos por correo.",
      tooManyFiles: "Cargue solo un archivo."
    },
    fr: {
      sending: "Envoi…",
      success: "Merci — votre RFQ a été reçu. Notre équipe examinera les informations du projet.",
      failed: "L’envoi n’a pas pu être finalisé.",
      check: "Veuillez vérifier : ",
      retry: "Échec de l’envoi. Réessayez ou écrivez à hank@alumcasting.com.",
      fileTooLarge: "Le fichier sélectionné dépasse la limite de téléversement de 25 Mo.",
      fileUploadUnsupported: "Le téléversement de fichiers n’est pas disponible pour ce point de terminaison RFQ. Envoyez la demande sans fichier ou contactez-nous par e-mail.",
      tooManyFiles: "Veuillez téléverser un seul fichier."
    },
    it: {
      sending: "Invio…",
      success: "Grazie — la RFQ è stata ricevuta. Il nostro team esaminerà le informazioni del progetto.",
      failed: "Impossibile completare l’invio.",
      check: "Verificare: ",
      retry: "Invio non riuscito. Riprovare o scrivere a hank@alumcasting.com.",
      fileTooLarge: "Il file selezionato supera il limite di caricamento di 25 MB.",
      fileUploadUnsupported: "Il caricamento dei file non è disponibile per questo endpoint RFQ. Inviare la richiesta senza file o contattarci via email.",
      tooManyFiles: "Caricare un solo file."
    },
    ja: {
      sending: "送信中…",
      success: "ありがとうございます。RFQを受け付けました。担当者がプロジェクト情報を確認します。",
      failed: "送信を完了できませんでした。",
      check: "確認してください：",
      retry: "送信に失敗しました。再試行するか hank@alumcasting.com までご連絡ください。",
      fileTooLarge: "選択したファイルは25 MBのアップロード上限を超えています。",
      fileUploadUnsupported: "このRFQエンドポイントではファイルをアップロードできません。ファイルなしで送信するか、メールでお問い合わせください。",
      tooManyFiles: "ファイルは1つだけアップロードしてください。"
    },
    ko: {
      sending: "전송 중…",
      success: "감사합니다. RFQ가 접수되었습니다. 담당자가 프로젝트 정보를 검토합니다.",
      failed: "제출을 완료할 수 없습니다.",
      check: "확인해 주세요: ",
      retry: "제출에 실패했습니다. 다시 시도하거나 hank@alumcasting.com으로 연락해 주세요.",
      fileTooLarge: "선택한 파일이 25MB 업로드 한도를 초과합니다.",
      fileUploadUnsupported: "이 RFQ 엔드포인트에서는 파일 업로드를 사용할 수 없습니다. 파일 없이 제출하거나 이메일로 문의해 주세요.",
      tooManyFiles: "파일은 하나만 업로드해 주세요."
    }
  };
  var t = TEXT[LANG] || TEXT.en;

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
  function clearStatus(status) {
    status.textContent = '';
    status.style.color = '';
  }
  function getFileInput(form) {
    return form.querySelector('input[type="file"][name="attachment"]');
  }
  function clearAttachmentValidity(form) {
    var input = getFileInput(form);
    if (input && typeof input.setCustomValidity === 'function') {
      input.setCustomValidity('');
    }
  }
  function validateAttachment(form, status) {
    var input = getFileInput(form);
    if (!input) return true;

    var files = input.files;
    if (!files || !files.length) return true;

    var message = '';
    if (files[0].size > MAX_FILE_SIZE) message = t.fileTooLarge;

    if (!message) return true;
    if (typeof input.setCustomValidity === 'function') input.setCustomValidity(message);
    status.textContent = message;
    status.style.color = '#dc2626';
    if (typeof input.reportValidity === 'function') input.reportValidity();
    if (typeof input.focus === 'function') input.focus();
    return false;
  }
  function describeServerError(error) {
    if (typeof error === 'string') return error;
    if (!error || typeof error !== 'object') return '';

    if (error.field === 'attachment') {
      if (error.code === 'FILES_TOO_BIG') return t.fileTooLarge;
      if (error.code === 'NO_FILE_UPLOADS') return t.fileUploadUnsupported;
      if (error.code === 'TOO_MANY_FILES') return t.tooManyFiles;
    }

    var prefix = error.field ? error.field + ': ' : '';
    return prefix + (error.message || error.code || '');
  }
  function getSubmissionErrorMessage(body) {
    var messages = [];
    var errors = body && body.errors;

    if (Array.isArray(errors)) {
      messages = errors.map(describeServerError);
    } else if (errors && typeof errors === 'object') {
      messages = Object.keys(errors).map(function (key) {
        var value = errors[key];
        if (Array.isArray(value)) {
          return value.map(describeServerError).filter(Boolean).join(' ');
        }
        var message = describeServerError(value);
        return key + ': ' + (message || 'Invalid value');
      });
    } else if (typeof errors === 'string') {
      messages = [errors];
    } else if (body && typeof body.error === 'string') {
      messages = [body.error];
    }

    messages = messages.filter(Boolean);
    return messages.length ? t.check + messages.join('; ') + '.' : t.failed;
  }

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form.matches || !form.matches(SELECTOR)) return;

    var status = ensureStatus(form);
    clearStatus(status);
    clearAttachmentValidity(form);

    // Preserve native HTML5 required-field validation UX; do not fetch/track.
    if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!validateAttachment(form, status)) return;

    // Hard guard against double-click / repeated submit while a request is pending.
    if (form.dataset.submitting === '1') { e.preventDefault(); return; }

    // Graceful fallback: if fetch is unavailable, let the native POST proceed.
    if (typeof fetch !== 'function') return;

    e.preventDefault();
    form.dataset.submitting = '1';
    var btn = form.querySelector('button[type="submit"]');
    var origLabel = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = t.sending; }

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        status.textContent = t.success;
        status.style.color = '#16a34a';
        if (btn) { btn.textContent = t.success; }
        // Push exactly one event per genuine successful submission.
        // Tracking is best-effort: a failure inside dataLayer.push() must NOT be
        // swallowed by or routed into the outer Formspree/network .catch below,
        // which would falsely mark an already-accepted RFQ as failed and re-enable
        // the submit button (duplicate submission risk).
        if (form.dataset.tracked !== '1') {
          window.dataLayer = window.dataLayer || [];
          try {
            dataLayer.push({
              event: 'rfqSuccess',
              form_location: getLocation(form),
              material: getMaterial(form)
            });
            form.dataset.tracked = '1';
          } catch (trackErr) {
            // Formspree already accepted the RFQ; only analytics failed.
            if (window.console && console.warn) {
              console.warn('rfqSuccess tracking skipped:', trackErr);
            }
          }
        }
      } else {
        return res.json().then(function (body) {
          throw new Error(getSubmissionErrorMessage(body));
        }, function () { throw new Error(t.failed); });
      }
    }).catch(function (err) {
      status.textContent = (err && err.message) ? err.message
        : t.retry;
      status.style.color = '#dc2626';
      // Clear pending guard so the user can retry; success guard stays until a real success.
      form.dataset.submitting = '';
      if (btn) { btn.disabled = false; btn.textContent = origLabel; }
    });
  });
})();
