import nav from "../../components/nav";
import footer from "../../components/footer";
import filtersLeftCatalog from "../../components/filtersLeftCatalog";
import filtersRightCatalog from "../../components/filtersRightCatalog";

import imageCardCarro from "../../img/carro-verde01.jpg";
import dashboarIcon from "../../img/icons/svg/dashboard.svg";
import gearboxIcon from "../../img/icons/svg/gearbox.svg";
import petrolIcon from "../../img/icons/svg/petrol.svg";

let Catalogo = {
  render: async () => {
    let view = `
      <div class="container">
        <div class="content">
          ${nav}
          <div class="container-catalog">
            <div class="container-left-right">
              ${filtersLeftCatalog}
              ${filtersRightCatalog}
            </div>
          </div>
        </div>
        ${footer}
      </div>
    `;

    return view;
  },
  after_render: async () => {
    let resultAllCars = document.querySelector(".wrapper-catalog-card");

    function getAllCars() {
      fetch("https://e-carros-api.herokuapp.com/adverts")
        .then((res) => res.json())
        .then((response) => {
          resultAllCars.innerHTML = `${response
            .map(
              (elemento, index) => `
          <div key="${index}" class="card-container">
          <div class="card-top">
            <img src="${elemento.photos[0]}" alt="carro verde" />
            <div class="tag">tag</div>
          </div>
          <div class="card-bottom">
            <div class="ano">
              <span>${elemento.year}</span>
              <div class="container-checkbox-tipo">
                <input type="checkbox" id="compare" value="compareid" name="compare" />
                <label for="compare" class="checkbox">Compare</label>
            </div>
          </div>
            <div class="info-primary">
              <p> ${elemento.model} <p>
              <span>$ ${elemento.price} <span>
              <div>icon Chicago</div>
          </div>
          <div class="info-secondary"> 
            <div>
              <img src="${dashboarIcon}" alt="carro verde" />
              <div>247k mi</div>        
            </div>
            <div>
              <img src="${gearboxIcon}" alt="carro verde" />
              <div>247k mi</div>        
            </div>
            <div>
              <img src="${petrolIcon}" alt="carro verde" />
              <div>247k mi</div>        
            </div>
          </div>
        </div>
        </div> 
        `
            )
            .join("")}`;
        });
    }
    getAllCars();

    /* let checkBoxesTipoMarca = document.getElementsByClassName("tipo-marca"); */

    var checkBoxesTipoMarca = document.querySelector("input[name=tipo-marca]");
    checkBoxesTipoMarca.addEventListener("change", (e) => {
      console.log(" >>>", e);
      let getCarType = checkBoxesTipoMarca.value;

      fetch(`https://e-carros-api.herokuapp.com/adverts?cartype=${getCarType}`)
        .then((res) => res.json())
        .then((response) => {
          resultAllCars.innerHTML = `${response.map(
            (elemento, index) => `
            <div key="${index}" class="card-container">
              <div class="card-top">
                <img src="${elemento.photos[0]}" alt="carro verde" />
                <div class="tag">tag</div>
              </div>
              <div class="card-bottom">
                <div class="ano">
                  <span>${elemento.year}</span>
                  <div class="container-checkbox-tipo">
                    <input type="checkbox" id="compare" value="compareid" name="compare" />
                    <label for="compare" class="checkbox">Compare</label>
                </div>
              </div>
                <div class="info-primary">
                  <p> ${elemento.model} <p>
                  <span>$ ${elemento.price} <span>
                  <div>icon Chicago</div>
              </div>
              <div class="info-secondary"> 
                <div>
                  <img src="${dashboarIcon}" alt="carro verde" />
                  <div>247k mi</div>        
                </div>
                <div>
                  <img src="${gearboxIcon}" alt="carro verde" />
                  <div>247k mi</div>        
                </div>
                <div>
                  <img src="${petrolIcon}" alt="carro verde" />
                  <div>247k mi</div>        
                </div>
              </div>
            </div>
            </div> 
        `
          )}`;
        });
    });
  },
};

export default Catalogo;
