$(document).ready(function(){
  $('.main-slider').slick({
    arrows: true,
    slidesToShow: 3,
    vertical: true,
    infinite: false,
    asNavFor: ".info-slider",
    initialSlide: 0,
    focusOnSelect: true
  });

  $('.info-slider').slick({
    arrows: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    fade: true,
    // vertical: true,
    infinite: false,
    asNavFor: ".main-slider",
    initialSlide: 0
  });

  // $('.main-slider__item').click(function(){
  //   $('.main-slider__item').toggleClass('active');
  // });
});

// fullcalendar 
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid', 'timeGrid', 'list' ],
    locale: 'ru', //язык ррусский
    height: 'auto',
    // aspectRatio: 1.09,
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
    
    events: [{
      id: 1,
      title: 'Это первый обычный день',
      start: '2020-05-20',
      description: 'Первая дата'
    },{
      id: 2,
      title: 'Соревнования',
      start: '2020-05-23',
      end: '2020-06-05',
      description: 'Заплыв'
    },{
      id: 3,
      title: 'Соревнования',
      start: '2020-05-15',
      description: 'Заплыв'
    },{
      id: 4,
      title: 'dd',
      start: '2020-05-04',
      end: '2020-05-08',
      description: 'Заплыв два'
    }],
    // eventRender: function(event, element) {
    //   element.qtip({
    //     content: event.description + '<br />' + event.start,
    //     style: {
    //       background: 'black',
    //       color: '#FFFFFF'
    //     },
    //     position: {
    //       corner: {
    //         target: 'center',
    //         tooltip: 'bottomMiddle'
    //       }
    //     }
    //   });
    // }

//что будет происходить при клике
navLinkDayClick: function(date, jsEvent) {
  // jsEvent.preventDefault();
  console.log('day', date.toISOString());
  // console.log(date);
  // calendar.gotoDate (date);
}

  });

  calendar.render();
});

$('#calendar').fullCalendar( 'gotoDate', currentdate);