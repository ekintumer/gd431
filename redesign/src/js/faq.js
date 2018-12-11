//accordion

(function ($) {
    $('.accordion > li:eq(0) button').addClass('active').next().slideDown();

    $('.accordion .js-faq__question').click(function (j) {
        var dropDown = $(this).closest('.js-faq__list').find('.js-faq__answer');

        $(this).closest('.accordion').find('.js-faq__answer').not(dropDown).slideUp();

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

//code taken from Srdjan Pajdic / https://codepen.io/MightyShaban/pen/LqrCK
