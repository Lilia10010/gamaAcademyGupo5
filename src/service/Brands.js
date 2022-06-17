let brands = document.querySelector("#marca");

//Função para buscar marcas de carros.

const url = "https://e-carros-api.herokuapp.com/brands";

function getBrands() {
  brands.innerHTML = loader;
  fetch(url)
    .then((res) => res.json())
    .then((response) => {
      brands.innerHTML = `
        <ul>
          ${response.map(
            (element, index) =>
              `
                <li key="${index}">
                  <a href="#" title="${element.name}">
                    <img src="${element.logo}" width="80px" height="auto"/>
                  </a>
                </li>
              `
          ).join("")}
        </ul>`;
    });
}
getBrands();