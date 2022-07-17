// Selectors
const todoInput = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-button");
const todoList = document.querySelector(".to-do-list");
const filterOption = document.querySelector(".filter-todo");

//  Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filtertodo);

// Functions
function addTodo(event) {
  // Prevent Form from Submitting
  event.preventDefault();

  // TODO DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // CREATE LI
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  // Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"> </i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // TRASH BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // APPEND TO LIST
  todoList.appendChild(todoDiv);

  // Clear TODO Input
  todoInput.value = "";
}
function deleteCheck(e) {
  const item = e.target;
  //DELETE TO DO ITEM
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filtertodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        case 'uncompleted':
            if(!todo.classList.contains('completed')) {
                todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            
    }
  });
}
