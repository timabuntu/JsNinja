/*
  01

  - Faça com que o texto do h1 do index.html seja exibido com todas as letras
    maiúsculas.
*/

const title = document.querySelector("h1");
title.textContent = title.textContent.toUpperCase();

/*
  02

  - Adicione, na ul vazia do index.html, os números do array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a classe "number".
*/

const numbers = [53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55];
const ul = document.querySelector(".numbers");

const insertNumberInToUL = (number) => {
  ul.innerHTML += `<l1 class="number">${number}</li><br>`;
};

numbers.map(insertNumberInToUL);

/*
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightgreen";
    - Se o número é ímpar, exiba-o na cor "pink".
*/

/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.
*/

/*
  05

  - Adicione o link
    https://github.com/timabuntu/timabuntu no href
    do link do index.html.
*/

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem ser
    manipuladas via JS no h1.
*/

/*
  08

  - Remova a classe "body-background", do elemento body.
*/

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/
