document.addEventListener("DOMContentLoaded",function(){var e=/iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent),t=window.location.href,o=document.querySelectorAll("a#lead_whatsapp");o.forEach(function(o){var n="Hola! Me gustaría recibir más asesoría sobre esta información: "+encodeURIComponent(t),a="https://wa.me/573202492786?text="+n,r="https://web.whatsapp.com/send?phone=573202492786&text="+n;e?o.setAttribute("href",a):o.setAttribute("href",r)})});

document.addEventListener('DOMContentLoaded', () => {
  const arrows = document.querySelectorAll('.toggle-arrow');

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const submenuWrapper = arrow.nextElementSibling;

      // Verifica si submenuWrapper contiene un .submenu
      if (submenuWrapper && submenuWrapper.querySelector('.submenu')) {
        const submenu = submenuWrapper.querySelector('.submenu');
        submenu.classList.toggle('open');

        // Rotar la flecha cuando el submenú esté abierto
        arrow.classList.toggle('rotated');
      }
    });
  });
});

// Mostrar fecha y horario de atención en el nav
document.addEventListener("DOMContentLoaded", function() {
  const dayElement = document.getElementById("current-day");

  // Formato de días y meses en inglés
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Obtener la fecha y hora actuales
  const currentDate = new Date();
  const currentDayName = daysOfWeek[currentDate.getDay()];
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentHour = currentDate.getHours();

  // Horario de apertura y cierre
  const openHour = 8;
  const closeHour = 17;

  // Formato de la fecha
  const formattedDate = `${currentMonth} ${currentDay}, ${currentYear}`;
  let message;

  // Lógica para mostrar si está abierto o cerrado
  if (currentDayName !== "Sunday" && currentHour >= openHour && currentHour < closeHour) {
      message = `${formattedDate} - ${openHour}:00 - ${closeHour}:00`;
  } else if (currentDayName !== "Sunday") {
      message = `${formattedDate} - Outside business hours`;
  } else {
      message = `${formattedDate} - Today we relax`;
  }

  // Mostrar el mensaje en el elemento <small>
  dayElement.textContent = message;
});