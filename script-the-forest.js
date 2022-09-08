window.addEventListener("load", () => {
    openElement("info-btn", "project", "open");
    openElement("info-btn-mobile", "project", "open")
    openElement("close-btn", "project", "open");

    soundElement("rec00", "rec00-audio");
    soundElement("rec01", "rec01-audio");
    soundElement("rec02", "rec02-audio");
    soundElement("rec03", "rec03-audio");
    soundElement("rec04", "rec04-audio");
    soundElement("rec05", "rec05-audio");

    typewriter("text-a", typewriterText, 75);

    videoElement("video01-btn", "video01");
    videoElement("video02-btn", "video02");
    videoElement("video03-btn", "video03");
    videoElement("video04-btn", "video04");
    videoElement("video05-btn", "video05");
    videoElement("video06-btn", "video06");
    videoElement("video07-btn", "video07");

    mobileVersion("switch", "second-layer", "make-first", "first-layer", "hide");
});

const openElement = (trigger, element, className) => {
    document.getElementById(trigger).addEventListener("click", (event) => {
        document.getElementById(element).classList.toggle(className);
        event.stopPropagation();
    });
}

const soundElement = (button, element) => {
    document.getElementById(button).addEventListener("click", () => {
        const audio = document.getElementById(element);
        if (audio.paused)
            audio.play();
        else
            audio.pause();
    });
}

const typewriterText = "Roland Hammel tells us how wolves rather hunt sheep than deers and keep attacking until everything around is quiet again.                    ";
const typewriter = (target, text, speed) => {
    textArea = document.getElementById(target);
    let pointer = -1;
    setInterval(() => {
        if (pointer <= text.length) {
            textArea.innerHTML = text.substring(0, pointer);
        } else {
            pointer = -1;
        }
        pointer++;
    }, speed);
}

const videoElement = (button, element) => {
    document.getElementById(button).addEventListener("click", () => {
        const video = document.getElementById(element);
        video.muted = !video.muted;
        video.classList.toggle("highlight");

        const videoButton = document.getElementById(button);
        if (videoButton.innerHTML == "UNMUTE / VOLUME UP") {
            videoButton.innerHTML = "MUTE";
        }
        else {
            videoButton.innerHTML = "UNMUTE / VOLUME UP";
        }
    });
}

const mobileVersion = (trigger, element, className, otherElement, otherClassName) => {
    document.getElementById(trigger).addEventListener("click", (event) => {
        document.getElementById(element).classList.toggle(className);
        document.getElementById(otherElement).classList.toggle(otherClassName);
        event.stopPropagation();
    });
}

// shutter effect
const area = document.querySelector(".shutter-section");
area.addEventListener("mousemove", (event) => {
    let wW = document.body.clientWidth;
    const x = event.pageX / wW * 100;
    const xX = x.toFixed(2);
    const element = document.querySelector(".second-layer");
    element.style.width = xX + "%";
});

// detect viewport
const inViewport = (e) => {
    const elementRect = e.getBoundingClientRect();
    return (elementRect.top < innerHeight && elementRect.bottom > 0);
};
const section = document.querySelector(".section-wrapper");
const content = document.querySelector(".content");
const menu = document.querySelector(".grid-menu");
const btn = document.querySelector(".switch-btn");
const cursor = document.getElementById("spotlight");

document.addEventListener("scroll", () => {
    if (inViewport(section)) {
        content.style.background = "#000";
        menu.style.display = "none";
        btn.style.opacity = "0";
        cursor.style.display = "";
        // get cursor
        window.addEventListener("mousemove", (event) => {
            let x = event.pageX;
            let y = event.pageY;
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        });
    } else {
        content.style.background = "";
        menu.style.display = "";
        btn.style.opacity = "1";
        cursor.style.display = "none";
    }
});

// get the href via js
const anchorTags = document.querySelectorAll(".js-href");
anchorTags.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");
        document.querySelector(href).scrollIntoView({
        });
    });
});

// accordion (mobile only)
const longTexts = document.querySelectorAll(".library-content-wrapper")
longTexts.forEach(text => {
    const opener = text.querySelector(".library-title");
    opener.addEventListener("click", () => {
        [...longTexts].filter(q => q !== text).forEach(q => q.classList.remove("opened"));
        text.classList.toggle("opened");
    });
});














