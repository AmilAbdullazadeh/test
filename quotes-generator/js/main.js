const btn = document.getElementById("todo-btn");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

function handleTodo() {
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    li.className = "list-group-item item-wrapper";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.className = "btn btn-outline-danger";
    deleteBtn.onclick = function () {
      const checkRemove = confirm("Do you want remove ?");
      if (checkRemove) {
        li.remove();
      }
    };
    li.appendChild(deleteBtn);

    li.onclick = function () {
      li.classList.toggle("text-decoration-line-through");
      deleteBtn.classList.toggle("d-none");
    };

    list.appendChild(li);
    input.value = "";
  }
}

btn.addEventListener("click", handleTodo);

input.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        handleTodo()
    }

    // event.target
})