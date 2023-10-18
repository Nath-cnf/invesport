const configUserButtons = document.querySelectorAll("[data-config-user]");

configUserButtons.forEach(configUserButton => {
    configUserButton.addEventListener("click", (e) => {
        const userContainer = e.target.parentElement.parentElement.parentElement.children[1];

        userContainer.classList.toggle("ativo")
    })
})