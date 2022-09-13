$(window).on('load', function() {
  var $root = $('html, body');
  setTimeout(function() {
    $root.animate({
      scrollTop: 0,
    }, 500);
    var $body = $('body');
    setTimeout(function() {
      $body.addClass('is-loaded');
    }, 500);
  }, 250);
}).on('scroll', function() {
  // var $nav = $('.nav');
  // var scrollTop = $(window).scrollTop();
  // var windowHeight = $(window).height();
  // if (scrollTop >= windowHeight / 10) {
  //   $nav.removeClass('is-hidden');
  // } else {
  //   $nav.addClass('is-hidden');
  // }

  var $section = $('.section');
  $section.each(function() {
    var id = $(this).attr('id');
    if ($(this).isInViewport()) {
      $(this).addClass('is-active');
      $('nav a[href="#' + id +'"]').addClass('is-active');
    } else {
      $(this).removeClass('is-active');
      $('nav a[href="#' + id +'"]').removeClass('is-active');
    }
  });
});

$(document).ready(function() {
  var $root = $('html, body');
  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 250);
  });


  $(window).on('scroll', function() {
    var $nav = $('.nav');
    var $credit = $('#credit');
    if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
      $credit.removeClass('is-hidden');
      $nav.slideUp(250);
    } else {
      $credit.addClass('is-hidden');
      $nav.slideDown(250);
    }
  });

  function countDownTimer(date) {
    var countdown = $('#countdown');
    var futureTime = new Date(date).getTime();

    setInterval(function() { 
      var timeLeft = Math.floor( (futureTime - new Date().getTime()) / 1000 );
      
      var days =  Math.floor(timeLeft / 86400);
      timeLeft -= days * 86400;
      
      var hours = Math.floor(timeLeft / 3600) % 24;
      timeLeft -= hours * 3600;

      var min = Math.floor(timeLeft / 60) % 60;
      timeLeft -= min * 60;

      var sec = timeLeft % 60;
      
      var timeString = "D-<span class='days'>" + days + ":"+"</span>"+
                       "<span class='hours'>" + hours + ":"+"</span>"+
                       "<span class='minutes'>" + min + ":"+"</span>"+
                       "<span class='seconds'>" + sec + "</span>";
                       
      countdown.html(timeString);
    }, 1000);
  }

  countDownTimer('September 13, 2022 13:00:00');
});

$('details').click(function (event) {
    $('details').not(this).removeAttr("open"); 
});




