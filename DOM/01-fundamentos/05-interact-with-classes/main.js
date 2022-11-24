// const paragraph = document.querySelector("p");

/* // Adicionando classe
paragraph.classList.add("error");
// Removendo classe
paragraph.classList.remove("error");

paragraph.classList.add("success");
 */

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  paragraph.classList.add("mt-4");

  if (paragraph.textContent.includes("error")) {
    paragraph.classList.add("error");
  }
  if (paragraph.textContent.includes("success")) {
    paragraph.classList.add("success");
  }
});

const title = document.querySelector("h1");

title.classList.toggle("test");
title.classList.toggle("test");
