const ButtonDelete = () => {
  const buttonDelete = document.createElement("button");

  buttonDelete.classList.add("check-button");
  buttonDelete.innerText = "deletar";
  buttonDelete.addEventListener("click", deleteTask);

  return buttonDelete;
};
const deleteTask = (event) => {
  const buttonDelete = event.target;
  const completeTask = buttonDelete.parentElement;

  completeTask.remove();

  return buttonDelete;
};
