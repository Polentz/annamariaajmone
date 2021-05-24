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
    console.log(scrollTop);
    const elem = document.getElementById("content");
    if (scrollTop < 2500) {
        elem.style.backgroundColor = "#fff";
    } else if (scrollTop < 3800) {
        elem.style.backgroundColor = "#000";
    } else {
        elem.style.backgroundColor = "#fff"
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















// const spotlightArea = document.querySelector(".spotlight-section");
// const spotlight = document.querySelector(".spotlight")
// let mouseX = 0
// let mouseY = 0
// function animate() {
//     spotlight.style.left = mouseX + "px";
//     spotlight.style.top = mouseY + "px";
//     requestAnimationFrame(animate);
// }
// animate()
// document.addEventListener("mousemove", function (event) {
//     mouseX = event.pageX
//     mouseY = event.pageY
// });








// window.addEventListener("DOMContentLoaded", () => {
//     const spotlight = document.querySelector(".spotlight");
//     window.addEventListener("mousemove", e => updateSpotlight(e));
//     updateSpotlight(e);
// })

// function updateSpotlight(e) {
//     spotlight.style.backgroundImage = `radial-gradient(circle, ${e.pageX / window.innerWidth * 100}%) ${e.pageY / window.innerHeight * 100}%)`
// }