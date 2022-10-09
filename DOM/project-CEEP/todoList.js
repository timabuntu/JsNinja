const newTask = document.querySelector("[data-form-button]");
const input = document.querySelector("[data-form-input]");

console.log(input);
newTask.addEventListener("click", () => {
  console.log("Fui clicado");
});
