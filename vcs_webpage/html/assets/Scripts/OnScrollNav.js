$(document).ready(function() {
      $(function() {
        var distance = $('#navigation').offset().top,
        $window = $(window);
        $window.scroll(function() {
        $('#navigation').toggleClass('navbar-fixed', $window.scrollTop() >= distance)
        });
      });
    });
  