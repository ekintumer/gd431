// var menuTrigger = document.getElementById("js-menu-button");
// menuTrigger.addEventListener("click", function () {
//     let expanded = this.getAttribute("aria-expanded") === "true" || false;
//     this.setAttribute("aria-expanded", !expanded);
//     let menu = document.getElementById("js-menu");
//     let visible = menu.getAttribute("data-visible") === "true" || false;
//     menu.setAttribute("data-visible", !visible);
//     // if (!visible === true) {
//     // 	document.body.style.overflowY = "hidden";
//     // } else {
//     // 	document.body.removeAttribute("style");
//     // }
// });

//accordion

(function ($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function (j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);
