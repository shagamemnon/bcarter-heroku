$(function(){
  $('top-toggle-menu').click(function(){
    $(this).children('span').toggle();
  });

  $('.js-slideout-toggle').on('click', function() {
    $('body, .panel, .slideout-menu, .tags-button, .menu').toggleClass('nav-active');
  });
toastr.options.showMethod = 'slideDown';
toastr.options.hideMethod = 'slideUp';
toastr.options.closeMethod = 'slideUp';
toastr.options.preventDuplicates = true;
toastr.options.progressBar = true;
toastr.options.escapeHtml = false;
toastr.options.hideEasing = 'linear';
});