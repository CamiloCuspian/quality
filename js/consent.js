// js/consent.js
(function() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Configuración inicial del modo de consentimiento
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
  });

  // Funciones de utilidad para cookies
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Exponer funciones al scope global
  window.setCookie = setCookie;
  window.getCookie = getCookie;
  window.acceptCookies = function() {
    setCookie('cookie-consent', 'full', 365);
    document.getElementById('cookie-banner').style.display = 'none';
    document.body.style.paddingBottom = '0';
    
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });
    
    window.dataLayer.push({
      'event': 'cookieConsentFull',
      'cookieConsent': 'accepted'
    });
  };

  window.rejectCookies = function() {
    setCookie('cookie-consent', 'essential', 365);
    document.getElementById('cookie-banner').style.display = 'none';
    document.body.style.paddingBottom = '0';
    
    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    });
    
    window.dataLayer.push({
      'event': 'cookieConsentEssential',
      'cookieConsent': 'rejected'
    });
  };

  // Inicializar el consentimiento al cargar
  document.addEventListener('DOMContentLoaded', function() {
    var existingConsent = getCookie('cookie-consent');
    if (existingConsent === 'full') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
      
      window.dataLayer.push({
        'event': 'cookieConsentExisting',
        'cookieConsent': 'full'
      });
    }
  });
})();