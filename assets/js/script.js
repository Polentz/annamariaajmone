console.log(
    '%cDesign & Code: Giulia Polenta',
    'color: #0000ff; font-family: sans-serif; font-size: .8rem;'
);

// create menu
const currentPathname = location.pathname.split("/").slice(-1);
let sidebarText
let langHref
let langText
const createSidebar = () => {
    return `
    <ul>
        <li>${sidebarText}</li>
        <li><a href="i-pianti-e-i-lamenti-dei-pesci-fossili.html" class="link sidebar-items">I pianti e i lamenti<br>dei pesci fossili</a></li>
        <li><a href="bleah!!!.html" class="link sidebar-items">BLEAH!!!</a></li>
        <li><a href="la-notte.html" class="link sidebar-items">La notte è il mio<br>giorno preferito</a></li>
        <li><a href="senza-titolo.html" class="link sidebar-items">Senza titolo</a></li>
        <li><a href="luglio.html" class="link sidebar-items">Luglio</a></li>
        <li><a href="il-segreto.html" class="link sidebar-items">Il Segreto</a></li>
        <li><a href="no-rama.html" class="link sidebar-items">No Rama</a></li>
        <li><a href="to-be-banned-from-rome.html" class="link sidebar-items">To Be Banned From Rome</a></li>
        <li><a href="mash.html" class="link sidebar-items">Mash</a></li>
        <li><a href="trigger.html" class="link sidebar-items">Trigger</a></li>
        <li><a href="tiny.html" class="link sidebar-items">Tiny</a></li>
    </ul>
    <ul>
        <li><a href="arcipelago.html" class="link sidebar-items">Arcipelago</a></li>
        <li><a href="nobody.html" class="link sidebar-items">Nobody's Indiscipline</a></li>
    </ul>
    <!-- <ul>
        <li><a href="https://ipiantieilamentideipescifossili.annamariaajmone.com/" class="link sidebar-items">I pianti e i lamenti dei pesci fossili</a></li>   
        <li><a href="the-forest-and-the-encounters.html" class="link sidebar-items">The forest and the encounters</a></li>   
    </ul> -->
    `;
}
const createMobileMenu = () => {
    return `
    <div class="nav-mobile">
        <ul>
            <li><a href="i-pianti-e-i-lamenti-dei-pesci-fossili.html">I pianti e i lamenti<brdei pesci fossili</a></li>
            <li><a href="bleah!!!.html">BLEAH!!!</a></li>
            <li><a href="la-notte.html">La notte è il mio giorno preferito</a></li>
            <li><a href="senza-titolo.html">Senza titolo</a></li>
            <li><a href="luglio.html">Luglio</a></li>
            <li><a href="il-segreto.html">Il Segreto</a></li>
            <li><a href="no-rama.html">No Rama</a></li>
            <li><a href="to-be-banned-from-rome.html">To Be Banned From Rome</a></li>
            <li><a href="mash.html">Mash</a></li>
            <li><a href="trigger.html">Trigger</a></li>
            <li><a href="tiny.html">Tiny</a></li>
        </ul>
        <ul>
            <li><a href="arcipelago.html">Arcipelago</a></li>
            <li><a href="nobody.html">Nobody's Indiscipline</a></li>
        </ul>
        <!-- <ul>
            <li><a href="https://ipiantieilamentideipescifossili.annamariaajmone.com/">I pianti e i lamenti dei pesci fossili</a></li>   
            <li><a href="the-forest-and-the-encounters.html">The forest and the encounters</a></li>
        </ul> -->
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="mailto:annamaria.org@gmail.com">Contatti</a></li>
        </ul>
        <ul>
            <li><a href="${langHref}${currentPathname}">${langText}</a></li>
        </ul>
    </div>`;
}
const mobileMenu = document.querySelector(".menu-overlay");
const sidebar = document.querySelector(".sidebar");
const getLang = document.documentElement.lang;
if (getLang === "it") {
    sidebarText = "PRODUZIONI";
    langHref = "en/";
    langText = "En";
    sidebar.insertAdjacentHTML('beforeend', createSidebar());
    mobileMenu.insertAdjacentHTML('beforeend', createMobileMenu());
} else if (getLang === "en") {
    sidebarText = "WORKS";
    langHref = "../";
    langText = "It";
    sidebar.insertAdjacentHTML('beforeend', createSidebar());
    mobileMenu.insertAdjacentHTML('beforeend', createMobileMenu());
};
const pagesLinksMenu = document.querySelectorAll(".sidebar-items, .nav-mobile a, .menu-items:not(:last-of-type)");
pagesLinksMenu.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref == currentPathname) {
        link.classList.add("current");
    };
});

// general // document height
const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

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
};

// general // mobile menu
const openMenu = document.getElementById("open-menu-mobile");
const closeMenu = document.getElementById("close-menu-mobile");

if (mobileMenu) {
    openMenu.addEventListener("click", () => {
        mobileMenu.classList.add("reveal");
        openMenu.style.pointerEvents = "none";
    })
    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("reveal");
        openMenu.style.pointerEvents = "all";
    });
};

// pages // image cover
const imageOnLoad = document.querySelector(".loading");
if (imageOnLoad) {
    window.addEventListener("load", () => {
        setTimeout(() => {
            imageOnLoad.classList.add("hidden");
        }, 1000);
    });
};

// homepage // calendar
const calendar = document.getElementById("calendar");
if (calendar) {
    // window.addEventListener("scroll", () => {
    //     calendar.classList.add("fade");
    // });
    window.addEventListener("load", () => {
        calendar.classList.add("fade");
    });
};

// homepage // special cursor
const spotCursor = document.getElementById("spotlight");
if (spotCursor) {
    document.addEventListener("mousemove", (event) => {
        spotCursor.style.display = "block";
        let x = event.pageX;
        let y = event.pageY;
        spotCursor.style.left = x + "px";
        spotCursor.style.top = y + "px";
    });
    document.addEventListener("mouseout", () => {
        spotCursor.style.display = "none";
    });
};

// special // la notte banner
const spinBanner = document.querySelector(".banner");
if (spinBanner) {
    window.addEventListener("scroll", () => {
        spinBanner.style.transform = "rotate(" + window.pageYOffset / 5 + "deg)";
    });
    spinBanner.addEventListener("mouseenter", () => {
        spinBanner.style.transform = "rotate(" + 0 + "deg)";
    });
};

// special // arcipelago
const projects = document.querySelectorAll(".project");
if (projects) {
    const projectLinks = document.querySelectorAll(".group-link");
    const pageBtn = document.querySelector(".page-info-btn");
    const pageInfo = document.querySelector(".page-info");
    const infoClose = document.querySelector(".info-close");
    const projectClose = document.querySelectorAll(".project-close");
    projectLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const href = link.getAttribute("href");
            projects.forEach(project => {
                if (href === `#${project.id}`) {
                    project.style.display = "block";
                    project.scrollIntoView({
                        behavior: "smooth"
                    });
                } else {
                    project.style.display = "none";
                };
            });
        });
    });
    projectClose.forEach(btnClose => {
        btnClose.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
    window.addEventListener("scroll", () => {
        if (window.scrollY == 0) {
            projects.forEach(project => {
                project.style.display = "none";
            });
        };
    });
    if (pageBtn) {
        pageBtn.addEventListener("click", () => {
            pageInfo.classList.add("open");
        });
    }
    if (infoClose) {
        infoClose.addEventListener("click", () => {
            pageInfo.classList.remove("open");
        });
    }
};

// special // bleah
const draggableElems = document.querySelectorAll(".draggable");
let draggies = []
for (let i = 0; i < draggableElems.length; i++) {
    let draggableElem = draggableElems[i];
    let draggie = new Draggabilly(draggableElem, {
    });
    draggies.push(draggie);
}

const collageMove = document.querySelector(".collage-move");
const collageJs = () => {
    const collageContainer = document.querySelector(".collage-layout");
    collageContainer.classList.toggle("stuck");
};

const soundElement = () => {
    const buttons = document.querySelectorAll(".audio");
    buttons.forEach(button => {
        const playButton = button.querySelector(".audio-button")
        const svg = button.querySelector(".audio-svg");
        const audio = button.querySelector(".audio-file");
        playButton.addEventListener("click", () => {
            svg.classList.toggle("play");
            if (audio.paused) {
                audio.play();
                playButton.innerHTML = "STOP";
            } else {
                audio.pause();
                playButton.innerHTML = "PLAY";
            };
        });
        audio.addEventListener("timeupdate", () => {
            if (audio.duration === audio.currentTime) {
                svg.classList.remove("play");
                playButton.innerHTML = "PLAY";
            };
        });
    });
};

if (collageMove) {
    collageMove.addEventListener("click", () => {
        collageJs();
    });
    soundElement();
};

window.addEventListener("load", () => {
    history.scrollRestoration = "manual";
    documentHeight();
});

window.addEventListener("resize", documentHeight);