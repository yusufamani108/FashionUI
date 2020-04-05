$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $(‘body’).addClass(changeBackGround)
       }
       if ($(this).scrollTop() < 50) {
          $(‘body’).removeClass(changeBackGround)
       }
    });
 });