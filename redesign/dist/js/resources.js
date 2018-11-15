//tab1

// var tab1Trigger = document.getElementById("js-tab-first");
// tab1Trigger.addEventListener("click", function () {
//     let expanded = this.getAttribute("aria-expanded") === "true" || false;
//     this.setAttribute("aria-expanded", !expanded);
//     let tab1 = document.getElementById("js-tab-1");
//     let visible = tab1.getAttribute("data-visible") === "true" || false;
//     tab1.setAttribute("data-visible", !visible);
// });

//tab2

// var tab2Trigger = document.getElementById("js-tab-second");
// tab2Trigger.addEventListener("click", function () {
//     let expanded = this.getAttribute("aria-expanded") === "true" || false;
//     this.setAttribute("aria-expanded", !expanded);
//     let tab2 = document.getElementById("js-tab-2");
//     let visible = tab2.getAttribute("data-visible") === "true" || false;
//     tab2.setAttribute("data-visible", !visible);
// });

// first tab - read more 

$(document).ready(function () {
    $(".toggle--first").click(function () {
        var elem = $(".toggle--first").text();
        if (elem == "+ read more") {
            $(".toggle--first").text("– read less");
            $(".more--first").slideDown();
        } else {

            $(".toggle--first").text("+ read more");
            $(".more--first").slideUp();

        }
    });

    $(".toggle--second").click(function () {
        var elem = $(".toggle--second").text();
        if (elem == "+ read more") {
            $(".toggle--second").text("– read less");
            $(".more--second").slideDown();
        } else {

            $(".toggle--second").text("+ read more");
            $(".more--second").slideUp();

        }
    });

    $(".toggle--third").click(function () {
        var elem = $(".toggle--third").text();
        if (elem == "+ read more") {
            $(".toggle--third").text("– read less");
            $(".more--third").slideDown();
        } else {

            $(".toggle--third").text("+ read more");
            $(".more--third").slideUp();

        }
    });

    $(".toggle--fourth").click(function () {
        var elem = $(".toggle--fourth").text();
        if (elem == "+ read more") {
            $(".toggle--fourth").text("– read less");
            $(".more--fourth").slideDown();
        } else {

            $(".toggle--fourth").text("+ read more");
            $(".more--fourth").slideUp();

        }
    });

    $(".toggle--fifth").click(function () {
        var elem = $(".toggle--fifth").text();
        if (elem == "+ read more") {
            $(".toggle--fifth").text("– read less");
            $(".more--fifth").slideDown();
        } else {

            $(".toggle--fifth").text("+ read more");
            $(".more--fifth").slideUp();

        }
    });
});
