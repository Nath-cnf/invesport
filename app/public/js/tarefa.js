const txt1 = document.getElementById("inputbox");
const txt2 = document.getElementById("inputbox2");
const cardContent = document.getElementById("slide")


function addTask(){
  if(txt1.value === ''){
    alert("Você deve escrever algo!");
  }else{
    let div = document.createElement("div");
    const prazocontainer = document.createElement("p");
    const txt = document.createElement("span");
    const metatxtcontainer = document.createElement("span");
    const botao = document.createElement("button");
    const data = new Date (inputbox2.value);
    const ano = data.getFullYear();
    const mes = String(data.getMonth()+1).padStart(2,"0");
    const dia = data.getDate()+1;
    const data_br = `${dia}/${mes}/${ano}`;
    
    
    txt.innerHTML = "Prazo:";
    botao.innerHTML = "remover";
    metatxtcontainer.innerHTML = inputbox.value;
    prazocontainer.innerHTML = data_br;
    div.appendChild(metatxtcontainer);
    div.appendChild(txt);
    div.appendChild(prazocontainer);
    cardContent.appendChild(div);
    div.appendChild(botao);
    div.classList.add("card");
    
    
    
    botao.addEventListener("click", (e) =>{
      e.target.parentElement.remove()
    });
    
   
    



    
  }
  
}