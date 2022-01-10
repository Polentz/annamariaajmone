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

const spot = document.getElementById("spotlight");
document.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;
    spot.style.left = x + "px";
    spot.style.top = y + "px";
});

