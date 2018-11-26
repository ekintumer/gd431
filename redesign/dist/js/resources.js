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

            button = $(elem).find('button');
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
