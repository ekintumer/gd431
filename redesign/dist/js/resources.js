//tabs

let accordionTriggers = document.querySelectorAll(".js-accordion__trigger");
let accordionContent = document.querySelectorAll(".js-accordion__content");

for (i = 0; i < accordionTriggers.length; i++) {
    accordionTriggers[i].addEventListener("click", showAccordionContent);
}

function showAccordionContent(el) {
    let triggers2 = document.querySelectorAll(".js-accordion__trigger");

    for (i = 0; i < triggers2.length; i++) {
        triggers2[i].setAttribute("aria-expanded", "false");
    }
    el.target.setAttribute("aria-expanded", "true");
    let accordionToOpen = el.target.getAttribute("aria-controls");

    for (i = 0; i < accordionContent.length; i++) {
        accordionContent[i].style.display = "none";
    }
    document.getElementById(accordionToOpen).style.display = "block";
}

// first tab - read more 

$(document).ready(function () {
    $(".js-toggle").click(function () {
        var elem = $(this).text();
        if (elem === "+ read more") {
            $(this).text("– read less");
            $(this).prev(".js-more").slideDown();
        } else {

            $(this).text("+ read more");
            $(this).prev(".js-more").slideUp();
        }
    });
});
