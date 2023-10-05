const esporteDropdownButton = document.querySelector(
  "[data-esporte-dropdown-button]"
);

const esporteDepositoInputs = document.querySelectorAll("[data-esporte-input]");
const esporteDepositoSelected = document.querySelector(
  "[data-esporte-selected]"
);

esporteDropdownButton.addEventListener("click", () => {
  esporteDropdownButton.classList.toggle("ativo");
});

esporteDepositoInputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    const parentSelected = e.target.parentNode;

    if (!parentSelected.classList.contains("ativo")) {
      parentSelected.classList.add("ativo");

      const valueSelected = parentSelected.innerText;

      const esporteSelectedContainer = document.createElement("div");
      esporteSelectedContainer.classList.add(valueSelected);
      esporteSelectedContainer.innerText = valueSelected;

      esporteDropdownButton.after(esporteSelectedContainer);
    } else {
        const duplicatedChildren = document.querySelectorAll(`.${parentSelected.innerText}`);
        duplicatedChildren.forEach(duplicatedChild => {
            duplicatedChild.remove();
        });
        parentSelected.classList.remove("ativo");
    }
  });
});
