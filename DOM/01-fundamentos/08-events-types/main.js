// Events Types
const paragraph = document.querySelector(".copy-me");
const div = document.querySelector(".box");

paragraph.addEventListener("copy", () => {
  console.log("Texto Copiado!");
});

div.addEventListener("mousemove", (event) => {
  div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`;
});

document.addEventListener('wheel', event => {
console.log(event.pageX, event.pageY);
})
