
const btn = document.createElement('button');
btn.innerHTML = "Clique-me!";

btn.addEventListener("click", () => {
  alert("Botão Clicado");
});

document.querySelector("#content").appendChild(btn)