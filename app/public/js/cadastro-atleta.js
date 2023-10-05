const esporteDropdownButton = document.querySelector("[data-esporte-dropdown-button]");

const esporteDepositoInputs = document.querySelectorAll("[data-esporte-input]");
const esporteDepositoSelected = document.querySelector("[data-esporte-selected]");

esporteDropdownButton.addEventListener("click", () => {
	esporteDropdownButton.classList.toggle("ativo");
});

esporteDepositoInputs.forEach((input) => {
	input.addEventListener("click", (e) => {
		const parentSelected = e.target.parentNode;
		const parentContainer = e.target.parentNode.parentNode;
		const parentContainerChildren = parentContainer.children;

		for (const child of parentContainerChildren) {
			child.classList.remove("ativo");
		}

		parentSelected.classList.add("ativo");

		const valueSelected = e.target.parentNode.innerText;

		esporteDepositoSelected.innerText = valueSelected;

		esporteDropdownButton.classList.toggle("ativo");
	});
});
