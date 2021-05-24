window.onload = init;

function init() {
    initScrollPage();
}

function initScrollPage() {
    scrollPage("calendar", "fade");
}

function scrollPage(element, className) {
    window.addEventListener("scroll", () => {
        document.getElementById(element).classList.add(className);
    });
}
