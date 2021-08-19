let todoInput = document.getElementById("todo-input");
let todoBtn = document.getElementById("todo-btn");
let todoContainer = document.getElementById("todo-container");

let addTodo = () => {
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const paragraph = document.createElement("span");
  paragraph.classList.add("paragraph");
  paragraph.innerHTML = todoInput.value;

  todoDiv.appendChild(paragraph);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  todoContainer.prepend(todoDiv);
  todoInput.value = "";
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });
  deleteButton.addEventListener("click", () => {
    todoContainer.removeChild(todoDiv);
  });
};

todoBtn.addEventListener("click", addTodo);
