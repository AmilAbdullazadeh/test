const toggle = document.querySelector('#toggle');
const refresh = document.querySelector('#refresh');
const clear = document.querySelector('#clear');

const body = document.querySelector("body");

const theme = localStorage.getItem("theme");

if (theme === "dark") body.classList.add("dark")

toggle.addEventListener('click', () => {

  body.classList.toggle("dark")

  if (theme === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

})

clear.addEventListener("click", () => {
    localStorage.removeItem("theme")
});

refresh.addEventListener("click", () => {
  location.reload()
})