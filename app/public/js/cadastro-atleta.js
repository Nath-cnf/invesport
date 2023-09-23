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

		const valueSelected = e.target.value;
		const firstLetterCapitalized = valueSelected.charAt(0).toUpperCase();
		const remaingLetters = valueSelected.slice(1);
		const capitalizedValue = firstLetterCapitalized + remaingLetters;

		esporteDepositoSelected.innerText = capitalizedValue;

		esporteDropdownButton.classList.toggle("ativo");
	});
});
