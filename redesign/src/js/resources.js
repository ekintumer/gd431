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
