window.onload = init;

function init() {
    initLoading();
}

function initLoading() {
    loading("div.loading", "hidden");
}

function loading(element, className) {
    setTimeout(function () {
        document.querySelector(element).classList.add(className);
    }, 1000)
}