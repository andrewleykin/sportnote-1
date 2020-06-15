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
      center: '',
      right: 'title'
    },
    buttonText: { // показывает какой текст будет в кнопках
      today: 'Сегодня',
    },
    editable: true,
    selectable: true,
    firstDay: 1, // день с которого начинается неделя 1=пн
    selectable: true,

    eventSources: [
      'js/file.json'
    ],

    
//что будет происходить при клике currentdate;
navLinkDayClick: function(date, jsEvent) {
  console.log(date.toJSON().split("T")[0]);
  console.log(date.getDate());
  calendar.select( date );
}

  });


  calendar.render();
  // console.log(calendar.renderableEventStore.instances.1.(range));
  // console.log(for ("instances" in calendar));

  // console.log(calendarEl);
  console.log();
});







