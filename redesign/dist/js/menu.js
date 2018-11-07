//nav

var menuTrigger = document.getElementById("js-menu-button");
menuTrigger.addEventListener("click", function () {
    let expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    let menu = document.getElementById("js-menu");
    let visible = menu.getAttribute("data-visible") === "true" || false;
    menu.setAttribute("data-visible", !visible);
    // if (!visible === true) {
    // 	document.body.style.overflowY = "hidden";
    // } else {
    // 	document.body.removeAttribute("style");
    // }
});
