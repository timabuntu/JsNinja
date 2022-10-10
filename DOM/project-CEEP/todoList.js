const createTask = (event) => {
  event.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  const task = document.createElement("li");
  task.classList.add("task");

  const templateHTML = `<p class="content">${value}</>`;

  task.innerHTML = templateHTML;

  list.appendChild(task);
  input.value = " ";
};

const newTask = document.querySelector("[data-form-button]");

newTask.addEventListener("click", createTask);
