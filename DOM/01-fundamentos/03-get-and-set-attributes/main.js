const link = document.querySelector("a");

//Obtendo atributo
console.log(link.getAttribute("href"));

//Setar atributo
link.setAttribute("href", "https://github.com/timabuntu");

//Modificar o texto do atributo
link.innerText = "Github do Thiago Mello";

//Obter a classe do elemento
const paragraph = document.querySelector("p");
console.log("🚀 ~ paragraph", paragraph.getAttribute("class"));

//Modificar o valor do atributo class
paragraph.setAttribute("class", "text-green-500");

//Adicionar atributo
paragraph.setAttribute("style", "font-weight: 800;");
