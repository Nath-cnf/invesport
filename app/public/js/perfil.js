let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, perfil_atleta) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        tabContents[perfil_atleta].classList.add("active");
        tabs [perfil_atleta].classList.add("active");
    });
});