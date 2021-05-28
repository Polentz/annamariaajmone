window.addEventListener("load", () => {
    openElement("info-btn", "project", "open");
    openElement("close-btn", "project", "open");

    sound("rec00", "rec00-audio");
    sound("rec01", "rec01-audio");
    sound("rec02", "rec02-audio");
    sound("rec03", "rec03-audio");
});

function openElement(trigger, element, className) {
    document.getElementById(trigger).addEventListener("click", (event) => {
        document.getElementById(element).classList.toggle(className);
        event.stopPropagation();
    });
}

function sound(button, element) {
    document.getElementById(button).addEventListener("click", () => {
        const audio = document.getElementById(element);
        if (audio.paused)
            audio.play();
        else
            audio.pause();
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

function inViewport(element) {
    const bb = element.getBoundingClientRect();
    return !(bb.top > innerHeight || bb.bottom < 0);
}
const target = document.querySelector(".section-wrapper");
const element = document.querySelector(".content");
const nav = document.querySelector(".grid-menu")
document.addEventListener("scroll", () => {
    if (inViewport(target)) {
        element.style.background = "#000";
        nav.style.opacity = "0";
        nav.style.pointerEvents = "none";
    } else {
        element.style.background = "";
        nav.style.opacity = "1";
        nav.style.pointerEvents = "all";
    }
});

window.addEventListener("load", () => {
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




