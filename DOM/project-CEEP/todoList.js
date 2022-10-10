const createTask = (event) => {
  event.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  const task = document.querySelector("[data-task]");
  const templateHTML = `<p class="content">${value}</>`;

  task.innerHTML = templateHTML;

  input.value = " ";
};

const newTask = document.querySelector("[data-form-button]");

newTask.addEventListener("click", createTask);
