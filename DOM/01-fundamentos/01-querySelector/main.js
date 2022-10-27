// querySelector

// Obter 1 elemento
const paragraph = document.querySelector("div.error");

// console.log(paragraph);

// Obter múltiplos elementos

const paragraphs = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error");

paragraphs.forEach((paragraph) => {
  console.log(paragraph);
});

errors.forEach((error) => {
  console.log(error);
});

console.log(errors);
