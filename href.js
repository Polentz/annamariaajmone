const anchorTags = document.querySelectorAll(".js-href");
anchorTags.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const href = link.getAttribute("href");
        document.querySelector(href).scrollIntoView({
            // behavior: "smooth"
        });
    });
});