window.onscroll = () => {
    scrollRotate();
};

const image = document.querySelector(".banner");
function scrollRotate() {
    image.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
}

image.addEventListener("mouseenter", () => {
    image.style.transform = "rotate(" + 0 + "deg)";
})