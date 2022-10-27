// querySelector

// Obter 1 elemento
const paragraph = document.querySelector("div.error");

// console.log(paragraph);

// Obter múltiplos elementos

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  console.log(paragraph);
});
