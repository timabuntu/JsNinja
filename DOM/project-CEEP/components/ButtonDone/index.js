export const ButtonDone = () => {
  const finishButton = document.createElement("button");

  finishButton.classList.add("check-button");
  finishButton.innerText = "Concluir";
  finishButton.addEventListener("click", completeTask);

  return finishButton;
};

const completeTask = (event) => {
  const buttonDone = event.target;

  const completeTask = buttonDone.parentElement;
  completeTask.classList.toggle("done");
};
