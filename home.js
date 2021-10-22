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

const element = document.getElementById("this-trigger");
element.addEventListener("mouseenter", () => {
    document.getElementById("this-show").classList.add("color");
});
element.addEventListener("mouseleave", () => {
    document.getElementById("this-show").classList.remove("color");
});

const spot = document.getElementById("spotlight");
window.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;
    spot.style.left = x + "px";
    spot.style.top = y + "px";
});

