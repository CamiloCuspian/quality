document.addEventListener("DOMContentLoaded",function(){var e=/iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent),t=window.location.href,o=document.querySelectorAll("a#lead_whatsapp");o.forEach(function(o){var n="Hola! Me gustaría recibir más asesoría sobre esta información: "+encodeURIComponent(t),a="https://wa.me/573202492786?text="+n,r="https://web.whatsapp.com/send?phone=573202492786&text="+n;e?o.setAttribute("href",a):o.setAttribute("href",r)})});