$("#Formulario").click(function () {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeTDBeDqkyciUoKd0xG-1wtVpFU7eI3mo2JMwzs1AlfmsljjA/viewform"
  );
  $("#Formulario").css("animation", "none");
});

var iframe = document.getElementById('iframe2');
iframe.addEventListener('click', Handler);

function Handler() {
    alert('works');
}


function cambiarcolor(){
  
let container = document.getElementById("body")
let rect = container.getBoundingClientRect();

  if (rect.y < -300 && rect.y > -1000){
    $("#elementos_redes a").css("color", "white")
  }else if (rect.y < -4800  && rect.y > -5200) {
    $("#elementos_redes a").css("color", "white")
  } else {
    $("#elementos_redes a").css("color", "#ff8308")
  }
}

setInterval(cambiarcolor, 1000)


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2022-07-01',
    headerToolbar: {
      left: '',
      center: 'title',
      right: 'listYear'
    },
    events: [
      {
        title: 'Pedagogía universitaria en la virtualidad UAO',
        start: '2022-07-26T08:00:00',
        end: '2022-07-26T18:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220726T130000Z%2F20220728T230000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Pedagog%C3%ADa%20universitaria%20en%20la%20virtualidad",
      },
      {
        title: 'Pedagogía universitaria en la virtualidad UAO',
        start: '2022-07-27T08:00:00',
        end: '2022-07-26T12:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220727T130000Z%2F20220727T170000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Pedagog%C3%ADa%20universitaria%20en%20la%20virtualidad"

      },
      {
        title: 'Clases virtuales metaverso Alejandro Proskahuer',
        start: '2022-07-27T16:00:00',
        end: '2022-07-27T18:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220727T210000Z%2F20220727T230000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Clases%20virtuales%20metaverso%20Alejandro%20Proskahuer"

      },
      {
        title: "Derechos de autor en la virtualidad Vanessa Rivas",
        start: '2022-07-28T09:00:00',
        end: '2022-07-28T11:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220728T140000Z%2F20220728T160000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Derechos%20de%20autor%20en%20la%20virtualidad%20"

      },
      {
        title: 'Creatividad y estética Juan David Atuesta',
        start: '2022-07-28T16:00:00',
        end: '2022-07-28T18:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220728T210000Z%2F20220728T230000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Creatividad%20y%20est%C3%A9tica"

      },
      {
        title: 'Producción de video Carlos Mario Betancurt',
        start: '2022-07-29T16:00:00',
        end: '2022-07-29T18:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220728T210000Z%2F20220728T230000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Producci%C3%B3n%20de%20video%20Carlos%20Mario%20Betancurt"
      }
    ]
  });

  calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar1');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2022-07-01',
    headerToolbar: {
      left: '',
      center: 'title',
      right: 'listYear'
    },
    events: [
      {
        title: 'Seguridad informática',
        start: '2022-07-26T16:00:00',
        end: '2022-07-26T18:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220726T210000Z%2F20220726T230000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Seguridad%20inform%C3%A1tica",
      },
      {
        title: 'Creatividad y estética',
        start: '2022-07-28T16:00:00',
        end: '2022-07-28T18:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220728T210000Z%2F20220728T230000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Creatividad%20y%20est%C3%A9tica"

      },
    ]
  });

  calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar2');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2022-07-01',
    headerToolbar: {
      left: '',
      center: 'title',
      right: 'listYear'
    },
    events: [
      {
        title: 'Seguridad informática',
        start: '2022-07-26T16:00:00',
        end: '2022-07-26T18:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220726T210000Z%2F20220726T230000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Seguridad%20inform%C3%A1tica",
      },
      {
        title: 'Herramientas para el aprendizaje',
        start: '2022-07-27T10:00:00',
        end: '2022-07-26T12:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220727T150000Z%2F20220727T170000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Herramientas%20para%20el%20aprendizaje"

      },
      {
        title: 'Creatividad y estética',
        start: '2022-07-28T16:00:00',
        end: '2022-07-28T18:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220728T210000Z%2F20220728T230000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Creatividad%20y%20est%C3%A9tica"

      },
      {
        title: "Referenciación bibliográfica y Mendeley: Gestores bibliográficos",
        start: '2022-07-29T16:00:00',
        end: '2022-07-29T18:00:00',
        url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220729T210000Z%2F20220729T230000Z&location=Universidad%20Cat%C3%B3lica%20de%20Pereira%2C%20Avenida%20Sur%20%2F%20Las%20Americas%20Cra%2021%20%23%2049-95%2C%20Pereira%2C%20Risaralda%2C%20Colombia&text=Referenciaci%C3%B3n%20bibliogr%C3%A1fica%20y%20Mendeley%3A%20Gestores%20bibliogr%C3%A1ficos"

      },
    ]
  });

  calendar.render();
});

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar3");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "",
      center: "title",
      right: "dayGridMonth,listYear",
    },
    locales: "es",

    displayEventTime: false, // don't show the time column in list view

    // THIS KEY WON'T WORK IN PRODUCTION!!!
    // To make your own Google API key, follow the directions here:
    // http://fullcalendar.io/docs/google_calendar/
    googleCalendarApiKey: "AIzaSyA4GEOsoYb8pXnfbah3oRRlbmOmTL85vFU",

    // US Holidays
    events: "es.co#holiday@group.v.calendar.google.com",

    eventClick: function (arg) {
      // opens events in a popup window
      window.open(
        arg.event.url,
        "google-calendar-event",
        "width=700,height=600"
      );

      arg.jsEvent.preventDefault(); // don't navigate in main tab
    },

    loading: function (bool) {
      document.getElementById("loading").style.display = bool ? "flex" : "none";
    },
  });

  calendar.render();
});

function calendario1() {
  $("#calendar").css("visibility", "visible");
  $("#calendar1").css("visibility", "hidden");
  $("#calendar2").css("visibility", "hidden");
  $("#calendar1").hide();
  $("#calendar2").hide();
  $("#calendar").show();
  titulo = document.getElementById("titulo").innerHTML = "Profesores";
}

function calendario2() {
  $("#calendar1").css("visibility", "visible");
  $("#calendar").css("visibility", "hidden");
  $("#calendar2").css("visibility", "hidden");
  $("#calendar").hide();
  $("#calendar2").hide();
  $("#calendar1").show();
  titulo = document.getElementById("titulo").innerHTML = "Adminsitrativos";
}

function calendario3() {
  $("#calendar2").css("visibility", "visible");
  $("#calendar").css("visibility", "hidden");
  $("#calendar1").css("visibility", "hidden");
  $("#calendar").hide();
  $("#calendar2").show();
  $("#calendar1").hide();
  titulo = document.getElementById("titulo").innerHTML = "Estudiantes";
}

simplyCountdown(".simply-countdown", {
  year: 2022, // required
  month: 7, // required
  day: 26, // required
  hours: 8, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "Día", plural: "Días" },
    hours: { singular: "Hora", plural: "Horas" },
    minutes: { singular: "Minuto", plural: "Minutos" },
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: "simply-countdown-inline", //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function () {
    $(".simply-countdown").css("display", "none");;
    return;
  }, //Callback on countdown end, put your own function here
  refresh: 60000, // default refresh every 1s
  sectionClass: "simply-section", //section css class
  amountClass: "simply-amount", // amount css class
  wordClass: "simply-word", // word css class
  zeroPad: false,
  countUp: false,
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector(".my-countdown");
simplyCountdown(myElement, {
  /* options */
});

let multipleElements = document.querySelectorAll(".my-countdown");
simplyCountdown(multipleElements, {
  /* options */
});

$(function () {
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 600,
  });
});


