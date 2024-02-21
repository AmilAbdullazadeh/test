const btn = document.getElementById("todo-btn");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const baseUrl = "http://localhost:3001";

const fetchData = async () => {
  try {
    const response = await fetch(baseUrl + "/list");
    const data = await response.json()

    htmlSet(data);

  } catch (error) {
    console.log(error);
  }
};

fetchData();

async function handleTodo() {
  const text = input.value.trim();
  if (text !== "") {
    const response = await fetch(baseUrl + "/list", {
      method: "POST",
      body: JSON.stringify({
        text
      }),
    });
    const data = await response.json()
    htmlSet(data)
    input.value = "";
  }
}

function htmlSet(data) {
  return data.forEach(
    (element) =>
      (list.innerHTML += `
          <li class="card">
            <h2>${element.text}</h2>
          </li>
      `)
  );
}

btn.addEventListener("click", handleTodo);

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleTodo();
  }
});
