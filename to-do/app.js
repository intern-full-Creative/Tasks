let inputField = document.getElementById("text-input");
let toDoBtn = document.getElementById("add-btn");
let toDoContainer = document.getElementById("to-do-p");

toDoBtn.addEventListener("click", () => {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.innerHTML = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", () => {
    toDoContainer.removeChild(paragraph);
  });
});
