const newTask = document.querySelector("[data-form-button]");

newTask.addEventListener("click", () => {
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  console.log(value);
});
