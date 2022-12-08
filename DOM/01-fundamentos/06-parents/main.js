// Parents
const article = document.querySelector('article')

// Transforma em arrays

Array.from(article.children).forEach(element => {
  // adicionando classe
  element.classList.add('article-element')
})

// Descobrir quem é o Pai através da referência do filho
const title = document.querySelector('h2')

console.log(title.parentElement);
// Subindo a arvore
console.log(title.parentElement.parentElement);

// Descobrindo o proximo elemento irmão
console.log(title.nextElementSibling);

// Descobrindo o elemento anterior do h2
console.log(title.previousElementSibling);
// Resultado do null significa que ele não tem irmão anterior

