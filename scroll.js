const scroll = window.requestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60) };
const elementsToShow = document.querySelectorAll('.move-on-scroll');

function loop() {

    elementsToShow.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

const callback = function (entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-visible");
    });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".move-on-scroll");
targets.forEach(function (target) {
    observer.observe(target);
});