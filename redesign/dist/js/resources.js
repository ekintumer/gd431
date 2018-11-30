//tabs
let accordionTriggers = document.querySelectorAll(".js-accordion__trigger"); // Get all elements with our js-* prefix class as a variable
let accordionContent = document.querySelectorAll(".js-accordion__content"); // Get all elements with our js-* prefix class as a variable

for (i = 0; i < accordionTriggers.length; i++) {
    // Add click event to each tab to run the showAccordionContent function
    accordionTriggers[i].addEventListener("click", showAccordionContent);
}

function showAccordionContent(el) { // Runs when accordion button is clicked
    let triggers2 = document.querySelectorAll(".js-accordion__trigger"); // Get trigger buttons again as a different variable
    for (i = 0; i < triggers2.length; i++) {
        triggers2[i].setAttribute("aria-expanded", "false");
    } // Reset all buttons to aria-expanded=false
    el.target.setAttribute("aria-expanded", "true"); // Set aria-expanded=true for clicked button
    let accordionToOpen = el.target.getAttribute("aria-controls"); // Get the aria-controls value of the button that was clicked
    for (i = 0; i < accordionContent.length; i++) {
        accordionContent[i].style.display = "none";
    } // Hide all content
    document.getElementById(accordionToOpen).style.display = "block"; // Show content for button that was clicked
}

//tab transition

$(document).ready(function () {
    function moveMarker() {
        var activeSection = $('.active button');
        var activewidth = $(activeSection).width();
        var activePadLeft = parseFloat($(activeSection).css('padding-left'));
        var activePadRight = parseFloat($(activeSection).css('padding-right'));
        var totalWidth = activewidth + activePadLeft + activePadRight;

        var precedingAnchorWidth = anchorWidthCounter();

        // TODO: 
        // Find the total widths of all of the anchors
        // to the left of the active anchor.

        var activeMarker = $('.active-marker');
        $(activeMarker).css('display', 'block');

        $(activeMarker).css('width', totalWidth);

        $(activeMarker).css('left', precedingAnchorWidth);

        // TODO: 
        // Using the calculated total widths of preceding anchors,
        // Set the left: css value to that number.
    }
    moveMarker();

    function anchorWidthCounter() {
        var anchorWidths = 0;
        var button;
        var buttonWidth;
        var buttonPadLeft;
        var buttonPadRight;
        var buttonTotalWidth;
        $('.tabs li').each(function (index, elem) {
            var activeTest = $(elem).hasClass('active');
            if (activeTest) {
                // Break out of the each function.
                return false;
            }

            button = $(elem).find('button.active');
            buttonWidth = button.width();
            buttonPadLeft = parseFloat(button.css('padding-left'));
            buttonPadRight = parseFloat(button.css('padding-right'));
            buttonTotalWidth = buttonWidth + buttonPadLeft + buttonPadRight;

            anchorWidths = anchorWidths + buttonTotalWidth;
        });

        return anchorWidths;
    }

    $('.tabs button').click(function (e) {
        e.preventDefault();
        $('.tabs li').removeClass('active');
        $(this).parents('li').addClass('active');
        moveMarker();
    });
});

//referenced from Glenn McComb https://codepen.io/lenymo/pen/jPNGdq

// first tab - read more 

$(document).ready(function () {
    $(".js-toggle--first").click(function () {
        var elem = $(".js-toggle--first").text();
        if (elem == "+ read more") {
            $(".js-toggle--first").text("– read less");
            $(".js-more--first").slideDown();
        } else {

            $(".js-toggle--first").text("+ read more");
            $(".js-more--first").slideUp();
        }
    });

    $(".js-toggle--second").click(function () {
        var elem = $(".js-toggle--second").text();
        if (elem == "+ read more") {
            $(".js-toggle--second").text("– read less");
            $(".js-more--second").slideDown();
        } else {

            $(".js-toggle--second").text("+ read more");
            $(".js-more--second").slideUp();

        }
    });

    $(".js-toggle--third").click(function () {
        var elem = $(".js-toggle--third").text();
        if (elem == "+ read more") {
            $(".js-toggle--third").text("– read less");
            $(".js-more--third").slideDown();
        } else {

            $(".js-toggle--third").text("+ read more");
            $(".js-more--third").slideUp();

        }
    });

    $(".js-toggle--fourth").click(function () {
        var elem = $(".js-toggle--fourth").text();
        if (elem == "+ read more") {
            $(".js-toggle--fourth").text("– read less");
            $(".js-more--fourth").slideDown();
        } else {

            $(".js-toggle--fourth").text("+ read more");
            $(".js-more--fourth").slideUp();

        }
    });

    $(".js-toggle--fifth").click(function () {
        var elem = $(".js-toggle--fifth").text();
        if (elem == "+ read more") {
            $(".js-toggle--fifth").text("– read less");
            $(".js-more--fifth").slideDown();
        } else {

            $(".js-toggle--fifth").text("+ read more");
            $(".js-more--fifth").slideUp();

        }
    });
});
