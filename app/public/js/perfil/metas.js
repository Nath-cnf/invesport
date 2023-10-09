const txt1 = document.getElementById("inputbox");
const txt2 = document.getElementById("inputbox2");
const cardContent = document.getElementById("slide");
const botaoAdd = document.getElementById("botao-add");

function addTask() {
  if (txt1.value === "") {
    alert("Você deve escrever algo!");
  } else {
    let div = document.createElement("div");
    const valorcontainer = document.createElement("p");
    const txt = document.createElement("span");
    const metatxtcontainer = document.createElement("span");
    const botao = document.createElement("button");

    txt.innerHTML = "máx:";
    botao.innerHTML = "remover";
    metatxtcontainer.innerHTML = inputbox.value;
    prazocontainer.innerHTML = data_br;
    div.appendChild(metatxtcontainer);
    div.appendChild(txt);
    div.appendChild(prazocontainer);
    cardContent.appendChild(div);
    div.appendChild(botao);
    div.classList.add("card");

    botao.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
}

botaoAdd.addEventListener("click", () => {
  addTask();
});