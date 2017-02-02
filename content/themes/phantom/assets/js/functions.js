$(function(){
  $('top-toggle-menu').click(function(){
    $(this).children('span').toggle();
  });

  $('.js-slideout-toggle').on('click', function() {
    $('body, .panel, .slideout-menu, .tags-button, .menu').toggleClass('nav-active');
  });
});