(() => {
  const newTask = document.querySelector("[data-form-button]");

  const ButtonDone = () => {
    const finishButton = document.createElement("button");

    finishButton.classList.add("check-button");
    finishButton.innerText = "Concluir";
    finishButton.addEventListener("click", completeTask);

    return finishButton;
  };

  const ButtonDelete = () => {
    const buttonDelete = document.createElement("button");

    buttonDelete.innerText = "deletar";
    buttonDelete.addEventListener("click", deleteTask);

    return buttonDelete;
  };

  const createTask = (event) => {
    event.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    const task = document.createElement("li");
    task.classList.add("task");

    const templateHTML = `<p class="content">${value}</>`;

    task.innerHTML = templateHTML;

    task.appendChild(ButtonDone());
    task.appendChild(ButtonDelete());
    list.appendChild(task);
    input.value = " ";
  };
  newTask.addEventListener("click", createTask);

  const completeTask = (event) => {
    const buttonDone = event.target;

    const completeTask = buttonDone.parentElement;
    completeTask.classList.toggle("done");
  };

  const deleteTask = (event) => {};
})();
