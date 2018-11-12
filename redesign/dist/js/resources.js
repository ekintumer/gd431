// var tabTrigger = document.addClass("js-tab-button");
// tabTrigger.addEventListener("click", function () {
//     let expanded = this.getAttribute("aria-expanded") === "true" || false;
//     this.setAttribute("aria-expanded", !expanded);
// });

//read more 
$(document).ready(function () {
    $(".toggle").click(function () {
        var elem = $(".toggle").text();
        if (elem == "+ read more") {

            $(".toggle").text("– read less");
            $(".more").slideDown();
        } else {

            $(".toggle").text("+ read more");
            $(".more").slideUp();
        }
    });
});
