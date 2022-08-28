$(window).on('load', function() {
  var delay = 1000;
  setTimeout(function() {
    $('body').addClass('is-loaded');
  }, delay);
});