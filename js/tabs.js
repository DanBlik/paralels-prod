(function($) {
    $(function() {
     
      $('ul.tabs__caption').on('click', 'li:not(.active-tab)', function() {
        $(this)
          .addClass('tab-active').siblings().removeClass('tab-active')
          .closest('div.portfolio__tabs').find('div.tabs__content').removeClass('tab-active').eq($(this).index()).addClass('tab-active');
      });
     
    });
})(jQuery);