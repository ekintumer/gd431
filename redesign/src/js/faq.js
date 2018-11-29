//accordion

(function ($) {
    $('.accordion > li:eq(0) button').addClass('active').next().slideDown();

    $('.accordion .faq--question').click(function (j) {
        var dropDown = $(this).closest('.faq--list').find('.faq--answer');

        $(this).closest('.accordion').find('.faq--answer').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('button.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);
