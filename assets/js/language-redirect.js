(function () {
  var config = window.BlowfishLanguageRedirectConfig;

  if (!config || config.enabled !== true) {
    return;
  }

  function getStorage() {
    if (!config.storageKey) {
      return null;
    }

    try {
      return window.localStorage;
    } catch (error) {
      return null;
    }
  }

  var storage = getStorage();

  function normalizeLanguageTag(value) {
    if (typeof value !== "string") {
      return "";
    }

    return value.trim().toLowerCase();
  }

  function normalizeLanguage(value) {
    return normalizeLanguageTag(value).split("-")[0];
  }

  function getTranslationLanguage(translation) {
    if (!translation) {
      return "";
    }

    return normalizeLanguageTag(translation.lang || translation.languageCode);
  }

  function getAvailableTranslations() {
    if (!Array.isArray(config.translations)) {
      return [];
    }

    return config.translations.filter(function (translation) {
      return translation && translation.url && normalizeLanguage(translation.lang || translation.languageCode);
    });
  }

  var translations = getAvailableTranslations();

  function findTranslation(language) {
    var languageTag = normalizeLanguageTag(language);
    var baseLanguage = normalizeLanguage(language);

    if (!baseLanguage) {
      return null;
    }

    for (var i = 0; i < translations.length; i += 1) {
      var translation = translations[i];

      if (
        normalizeLanguageTag(translation.lang) === languageTag ||
        normalizeLanguageTag(translation.languageCode) === languageTag
      ) {
        return translation;
      }
    }

    for (var j = 0; j < translations.length; j += 1) {
      var baseTranslation = translations[j];

      if (
        normalizeLanguage(baseTranslation.lang) === baseLanguage ||
        normalizeLanguage(baseTranslation.languageCode) === baseLanguage
      ) {
        return baseTranslation;
      }
    }

    return null;
  }

  function getStoredLanguage() {
    if (!storage || config.storedLanguageRedirect !== true) {
      return null;
    }

    try {
      return storage.getItem(config.storageKey);
    } catch (error) {
      return null;
    }
  }

  function setStoredLanguage(language) {
    if (!storage) {
      return;
    }

    var languageTag = normalizeLanguageTag(language);

    if (!languageTag) {
      return;
    }

    try {
      storage.setItem(config.storageKey, languageTag);
    } catch (error) {
      // Ignore storage errors so the language link keeps its normal behavior.
    }
  }

  function getBrowserLanguage() {
    var languages = [];

    if (Array.isArray(navigator.languages)) {
      languages = languages.concat(navigator.languages);
    }

    if (navigator.language) {
      languages.push(navigator.language);
    }

    for (var i = 0; i < languages.length; i += 1) {
      var baseLanguage = normalizeLanguage(languages[i]);

      if (findTranslation(baseLanguage)) {
        return baseLanguage;
      }
    }

    if (config.fallbackLanguage && findTranslation(config.fallbackLanguage)) {
      return config.fallbackLanguage;
    }

    return null;
  }

  function normalizePath(pathname) {
    if (pathname.length > 1 && pathname.charAt(pathname.length - 1) === "/") {
      return pathname.slice(0, -1);
    }

    return pathname;
  }

  function getUrl(value) {
    try {
      return new URL(value, window.location.origin);
    } catch (error) {
      return null;
    }
  }

  function redirectToLanguage(language) {
    var translation = findTranslation(language);

    if (!translation || !translation.url) {
      return false;
    }

    var currentLanguage = normalizeLanguageTag(config.currentLanguage || config.currentLanguageCode);
    var targetLanguage = getTranslationLanguage(translation);

    if (currentLanguage && targetLanguage && currentLanguage === targetLanguage) {
      return false;
    }

    var targetUrl = getUrl(translation.url);

    if (!targetUrl || normalizePath(targetUrl.pathname) === normalizePath(window.location.pathname)) {
      return false;
    }

    window.location.replace(targetUrl.href);
    return true;
  }

  function findTranslationByUrl(url) {
    var linkUrl = getUrl(url);

    if (!linkUrl) {
      return null;
    }

    for (var i = 0; i < translations.length; i += 1) {
      var translationUrl = getUrl(translations[i].url);

      if (translationUrl && normalizePath(translationUrl.pathname) === normalizePath(linkUrl.pathname)) {
        return translations[i];
      }
    }

    return null;
  }

  function bindLanguageSwitcher() {
    document.addEventListener("click", function (event) {
      if (!event.target || !event.target.closest) {
        return;
      }

      var link = event.target.closest(".translation a[href]");

      if (!link) {
        return;
      }

      var translation = findTranslationByUrl(link.href);

      if (translation) {
        setStoredLanguage(getTranslationLanguage(translation));
      }
    });
  }

  function maybeRedirect() {
    var storedLanguage = getStoredLanguage();

    if (storedLanguage) {
      redirectToLanguage(storedLanguage);
      return;
    }

    if (config.browserRedirectHomeOnly === true && config.isHome !== true) {
      return;
    }

    var browserLanguage = getBrowserLanguage();

    if (browserLanguage) {
      redirectToLanguage(browserLanguage);
    }
  }

  bindLanguageSwitcher();
  maybeRedirect();
})();
