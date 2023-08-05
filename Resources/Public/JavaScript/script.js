$(document).ready(function() {

  /** Top Button **/
  /* Top Button einblenden */
  function topButtonFunctionality() {

    var topButton = $('.button--top');
    var elOffScreenHeight = $(window).height() / 1.5;

    $(window).scroll(function () {
      if ($(window).scrollTop() > elOffScreenHeight) {
        topButton.addClass('button--top--visible');
      } else {
        topButton.removeClass('button--top--visible');
      }
    });
  }

  topButtonFunctionality();
});

window.addEventListener('load', function() {
  if (document.documentElement.scrollTop > $(window).height() / 1.5) {
    // show top button if scroll position is grater than 0
    $('.button--top').addClass('button--top--visible');
  }
});
