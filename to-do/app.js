let todoInput = document.getElementById("todo-input");
let todoBtn = document.getElementById("todo-btn");
let todoContainer = document.getElementById("todo-container");

todoBtn.addEventListener("click", () => {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.innerHTML = todoInput.value;
  todoContainer.appendChild(paragraph);
  todoInput.value = "";
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", () => {
    todoContainer.removeChild(paragraph);
  });
});
