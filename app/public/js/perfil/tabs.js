let tabs = document.querySelectorAll("[data-perfil-tab-title]");
let tabContents = document.querySelectorAll("[data-perfil-tab]");

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        e.target.classList.add("active");
        let tabselected = e.target.getAttribute("data-perfil-tab-title");
        let tabcontentselected = document.querySelector(`[data-perfil-tab=${tabselected}]`);
        tabcontentselected.classList.add("active");
    });
});

