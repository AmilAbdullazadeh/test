const baseUrl = "https://jsonplaceholder.typicode.com";

const contentHTML = document.getElementById("content");

const fetchData = async () => {
  try {
    const response = await fetch(baseUrl + "/photos");
    const data = await response.json();

    data.slice(0, 10).forEach(
      (element) =>
        (contentHTML.innerHTML += `
        <div class="card">
          <h2>${element.title}</h2>
          <img width='200' height="100" src="${element.thumbnailUrl}" />
        </div>
    `)
    );

  } catch (error) {
    console.log(error);
  }
}

fetchData()