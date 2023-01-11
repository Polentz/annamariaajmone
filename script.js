// general // document height
const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight)
documentHeight();

// general // href via js
const anchorTags = document.querySelectorAll(".js-href");
if (anchorTags) {
    anchorTags.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

// general // mobile menu
const openMenu = document.getElementById("open-menu-mobile");
const closeMenu = document.getElementById("close-menu-mobile");
const mobileMenu = document.querySelector(".menu-overlay");

if (mobileMenu) {
    openMenu.addEventListener("click", () => {
        mobileMenu.classList.add("reveal");
        openMenu.style.pointerEvents = "none";
    })
    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("reveal");
        openMenu.style.pointerEvents = "all";
    })
}

// pages // image cover
const imageOnLoad = document.querySelector(".loading");
if (imageOnLoad) {
    window.addEventListener("load", () => {
        setTimeout(() => {
            imageOnLoad.classList.add("hidden");
        }, 1000)
    })
}

// homepage // calendar
const calendar = document.getElementById("calendar");
if (calendar) {
    window.addEventListener("scroll", () => {
        calendar.classList.add("fade");
    });
}

// homepage // special cursor
const spotCursor = document.getElementById("spotlight");
if (spotCursor) {
    document.addEventListener("mousemove", (event) => {
        let x = event.pageX;
        let y = event.pageY;
        spotCursor.style.left = x + "px";
        spotCursor.style.top = y + "px";
    });
}

// special // la notte banner
const spinBanner = document.querySelector(".banner");
if (spinBanner) {
    window.addEventListener("scroll", () => {
        spinBanner.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
    })

    spinBanner.addEventListener("mouseenter", () => {
        spinBanner.style.transform = "rotate(" + 0 + "deg)";
    })
}

// special // arcipelago
const projectLinks = document.querySelectorAll(".grid-arc .link");
const projects = document.querySelectorAll(".project");
const body = document.querySelector("body");
const pageBtn = document.querySelector(".page-title");
const pageInfo = document.querySelector(".page-info");
const infoClose = document.querySelector(".info-close");
if (projects) {
    projectLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");
            if (projects) {
                projects.forEach(project => {
                    if (href === `#${project.id}`) {
                        project.style.display = "block";
                        project.scrollIntoView({
                            behavior: "smooth"
                        });
                        setTimeout(() => {
                            body.style.overflow = "hidden"
                        }, 1000);
                    }
                    const projectClose = document.querySelectorAll(".project-close");
                    projectClose.forEach(btnClose => {
                        btnClose.addEventListener("click", () => {
                            project.style.display = "none";
                        });
                    });
                });
            }
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    pageBtn.addEventListener("click", () => {
        pageInfo.classList.add("open");
    });
    infoClose.addEventListener("click", () => {
        pageInfo.classList.remove("open");
    });
}