//tab1

var tab1Trigger = document.getElementById("js-tab-first");
tab1Trigger.addEventListener("click", function () {
    let expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    let tab1 = document.getElementById("js-tab-1");
    let visible = tab1.getAttribute("data-visible") === "true" || false;
    tab1.setAttribute("data-visible", !visible);
});

//tab2

var tab2Trigger = document.getElementById("js-tab-second");
tab2Trigger.addEventListener("click", function () {
    let expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    let tab2 = document.getElementById("js-tab-2");
    let visible = tab2.getAttribute("data-visible") === "true" || false;
    tab2.setAttribute("data-visible", !visible);
});

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
