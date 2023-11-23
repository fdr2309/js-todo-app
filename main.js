const todoInput = document.getElementById("todoInput");
const btn = document.getElementById("btn");
const todo_section = document.getElementById("todo-section");

const addtodo = (data) => {
  let todo = document.createElement("li");
  todo.innerHTML = `<span>${data}</span> <button>x</button>`;

  let delButton = todo.querySelector("button");
  delButton.addEventListener("click", () => {
    todo.remove();
  });

  todo_section.appendChild(todo);
};

btn.addEventListener("click", () => {
  let todoValue = todoInput.value;
  addtodo(todoValue);
  todoInput.value = "";
});
