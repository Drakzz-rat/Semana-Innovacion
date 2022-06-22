$("#Formulario").click(function () {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeTDBeDqkyciUoKd0xG-1wtVpFU7eI3mo2JMwzs1AlfmsljjA/viewform"
  );
  $("#Formulario").css("animation", "none");
});



function cambiarcolor(){
  
let icon = document.getElementById("instagram")
let container = document.getElementById("programas_container")
let styles = document.getElementsByClassName("elementos_redes")

let rect = container.getBoundingClientRect();
let rect2 = icon.getBoundingClientRect();

  if (rect.y < 400 && rect.y > -170){
    $("#elementos_redes a").css("color", "white")
  }else{
    $("#elementos_redes a").css("color", "#ff8308")
  }
}

setInterval(cambiarcolor, 1000)




document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev next",
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
      document.getElementById("loading").style.display = bool
        ? "block"
        : "none";
    },
  });

  calendar.render();
});

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar1");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev next",
      center: `title`,
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
      document.getElementById("loading").style.display = bool
        ? "block"
        : "none";
    },
  });

  calendar.render();
});

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar2");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev next",
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
    return;
  }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
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
