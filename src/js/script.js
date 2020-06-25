$(document).ready(function(){
  $('.main-slider').slick({
    arrows: true,
    slidesToShow: 5,
    vertical: true,
    infinite: false,
    asNavFor: ".info-slider",
    initialSlide: 0,
    focusOnSelect: true,
    responsive:[
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          arrows: false
        }
      },{
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          vertical: false,
          arrows: false
        }
      }

    ]
  });

  $('.info-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: false,
    asNavFor: ".main-slider",
    initialSlide: 0
  });
});

let timeHours = document.querySelector('.time_hours-span'),
timeMinutes = document.querySelector('.time_minutes-span'),
locationDuration = document.querySelector('.location_duration-span'),
locationTake = document.querySelector('.location_take-span');

let eventList = [
  {
    title: "Это первый обычный день",
    start: "2020-06-19",
    time: "15:00",
    description: "Первая дата",
    locDur: "ЗИЛ, 1 час 20 минут",
    locTake: "Лопатки, ласты, грузы"
  },{
    title: "Соревнования",
    start: "2020-06-22",
    time: "12:30",
    description: "Заплыв",
    locDur: "Солнышко, 1 час 45 минут",
    locTake: "Лопатки, ласты, грузы"
  },{
    title: "Соревнования",
    start: "2020-06-15",
    time: "10:00",
    description: "Заплыв",
    locDur: "Дельфин, 3 часа 10 минут",
    locTake: "Лопатки, ласты, грузы"
  },{
    title: "dd",
    start: "2020-06-04",
    end: "2020-06-08",
    time: "13:20",
    description: "Заплыв два",
    locDur: "Аврора, 2 часа 40 минут",
    locTake: "Лопатки, ласты, грузы"
  }
]


// fullcalendar 
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid', 'timeGrid', 'list' ],
    locale: 'ru', //язык ррусский
    height: 'auto',
    contentHeight: 100,
    eventStartEditable: false,
    navLinks: true, // делает дни кликабельными
    
    //eventLimit: 1, // ограничение на показ событий за день
    eventLimitText: "", 
    header: {
      left: 'prev,next today',
      center: 'addEventButton',
      right: 'title'
    },
    customButtons: {
      addEventButton: {
        text: 'Добавить событие',
        click: function() {
          var dateStr = prompt('Введите дату в формате ГГГГ-ММ-ДД');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: '',
              start: date,
              time: "12:00",
              description: "Заплыв два",
              locDur: "Бассейн, 1 час 30 минут",
              locTake: "Лопатки, ласты, грузы"
            });
            alert('Отлично. Теперь обновите вашу базу данных ...');
          } else {
            alert('Неправильная дата.');
          }
        }
      }
    },
    buttonText: { // показывает какой текст будет в кнопках
      today: 'Сегодня',
    },
    editable: true,
    firstDay: 1, // день с которого начинается неделя 1=пн
    selectable: true,

    eventSources: [
      'js/file.json'
    ],

    
//что будет происходить при клике currentdate;
navLinkDayClick: function(date, jsEvent) {
  currentDateSplit = date.toJSON().split("T")[0];
  // console.log(currentDateSplit);
  // console.log(date.getDate());
  calendar.select( date );
  
  timeHours.textContent = '';
  timeMinutes.textContent = '';
  locationDuration.textContent = 'На эту дату нет событий';
  locationTake.textContent = '';

  eventList.forEach(function(i) {
    if(currentDateSplit === i.start) {
      // console.log('Сегодня есть событие');
      timeHours.textContent = (i.time[0]+i.time[1]);
      timeMinutes.textContent = (i.time[3]+i.time[4]);

      locationDuration.textContent = i.locDur;
      locationTake.textContent = i.locTake;
    }
  });
}

  });


  calendar.render();
  // console.log(calendar.renderableEventStore.instances.1.(range));
  // console.log(for ("instances" in calendar));

  // console.log(calendarEl);
  // console.log();
});




document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      center: 'addEventButton'
    },
    customButtons: {
      addEventButton: {
        text: 'Добавить событие',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format');
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: 'dynamic event',
              start: date,
              allDay: true
            });
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      }
    }
  });

  calendar.render();
});







