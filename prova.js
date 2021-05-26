window.addEventListener("load", function () {
    openElement("info-btn", "project", "open");
    openElement("close-btn", "project", "open");
});
function openElement(trigger, element, className) {
    document.getElementById(trigger).addEventListener("click", (event) => {
        document.getElementById(element).classList.toggle(className);
        event.stopPropagation();
    });
}

const area = document.querySelector(".shutter-section");
area.addEventListener("mousemove", (event) => {
    let wW = document.body.clientWidth;
    const x = event.pageX / wW * 100;
    const xX = x.toFixed(2);
    const element = document.querySelector(".second-layer");
    element.style.width = xX + "%";
});

window.onscroll = function () { changeColor() };
function changeColor() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrollTop);
    const element = document.getElementById("content");
    const nav = document.querySelector(".grid-menu")
    if (scrollTop < 2800) {
        element.style.backgroundColor = "#fff";
        nav.style.opacity = "1";
        nav.style.pointerEvents = "all";
    } else {
        element.style.backgroundColor = "#000";
        nav.style.opacity = "0";
        nav.style.pointerEvents = "none";
    }
};

window.addEventListener("load", function () {
    typewrite("text-a", "Roland Hammel tells us how wolves rather hunt sheep than deers and keep attacking until everything around is quiet again.                          ", true, 50);
});
function typewrite(target, text, loop, speed) {
    target = document.getElementById(target);
    if (speed === undefined) { speed = 200; }
    if (loop === undefined) { loop = false; }

    let pointer = 0;
    let timer = setInterval(function () {
        pointer++;
        if (pointer <= text.length) {
            target.innerHTML = text.substring(0, pointer);
        } else {
            if (loop) { pointer = 0; }
            else { clearInterval(timer); }
        }
    }, speed);
}

const spot = document.getElementById("spotlight");
const spotArea = document.querySelector(".spotlight-section");
spotArea.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    spot.style.left = x + "px";
    spot.style.top = y + "px";
});


