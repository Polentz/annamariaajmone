window.addEventListener("load", () => {
    openElement("info-btn", "project", "open");
    openElement("close-btn", "project", "open");

    sound("rec00", "rec00-audio");
    sound("rec01", "rec01-audio");
    sound("rec02", "rec02-audio");
    sound("rec03", "rec03-audio");
    sound("rec04", "rec04-audio");
    sound("rec05", "rec05-audio");

    mobileVersion("switch", "second-layer", "make-first", "first-layer", "hide");

    typewriter("text-a", typewriterText, 75);
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

function mobileVersion(trigger, element, className, otherElement, otherClassName) {
    document.getElementById(trigger).addEventListener("click", (event) => {
        document.getElementById(element).classList.toggle(className);
        document.getElementById(otherElement).classList.toggle(otherClassName);
        event.stopPropagation();
    });
}

// tyepewriter effect
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
};

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
const label = document.querySelector(".page-label")
const cursor = document.getElementById("spotlight");

document.addEventListener("scroll", () => {
    if (inViewport(section)) {
        content.style.background = "#000";
        menu.style.display = "none";
        btn.style.opacity = "0";
        label.style.display = "none";
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
        label.style.display = "";
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
            behavior: "smooth"
        });
    });
});

function togglePlay(id) {
    const video = document.getElementById(id);
    video.muted = !video.muted;
    video.classList.toggle("highlight");
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
}




