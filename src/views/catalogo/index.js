import nav from "../../components/nav";
import footer from "../../components/footer";
import filtersLeftCatalog from "../../components/filtersLeftCatalog";
import filtersRightCatalog from "../../components/filtersRightCatalog";

import locationIcon from "../../img/icons/local.png";
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

    let classificationCarType = document.querySelectorAll(
      ".classificacao-carros"
    );

    /* ===  pegar todos os adverts === */
    function getAllCars() {
      fetch("https://e-carros-api.herokuapp.com/adverts")
        .then((res) => res.json())
        .then((response) => {
          for (const value of classificationCarType) {
            value.innerHTML = "Carros";
          }
          resultAllCars.innerHTML = `${response
            .map(
              (elemento, index) => `
              
              <div  key="${index}" class="card-container">
              <a href="/#/detalhes?${elemento.id}">
                <div class="card-top">
                  <img src="${elemento.photos.value}" alt="carro verde" />
                  ${
                    elemento.condition
                      ? `<div class="tag">${elemento.condition.value}</div>`
                      : ""
                  }
                  ${
                    elemento.certifield === true
                      ? `<div class="tag-certifield">Certificado</div>`
                      : ""
                  }
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
                      <div> <img src="${locationIcon}" /> ${
                elemento.location ? elemento.location.value : "desconhecido"
              }</div>
                </div>
                <div class="info-secondary"> 
                  <div>
                    <img src="${dashboarIcon}" alt="carro verde" />
                    <div>${elemento.kilometers}</div>        
                  </div>
                  <div>
                    <img src="${gearboxIcon}" alt="carro verde" />
                    <div>${
                      elemento.additional ? elemento.additional.value : " - "
                    }</div>        
                  </div>
                  <div>
                    <img src="${petrolIcon}" alt="carro verde" />
                    <div>${
                      elemento.fuel ? elemento.fuel.value : " -"
                    }</div>        
                  </div>
                </div>
              </div>
              </a>
              </div> 
        `
            )
            .join("")}`;
        });
    }
    getAllCars();

    function resultFilter(params, value) {
      fetch(
        `https://monkfish-app-2xvm7.ondigitalocean.app/adverts?${params}=${value}`
      )
        .then((res) => res.json())
        .then((response) => {
          console.log("response", response.length);

          if (params === "condition") {
            if (value[0] === "1") {
              for (const value of classificationCarType) {
                value.innerHTML = "Novo";
              }
            } else if (value[0] === "2") {
              for (const value of classificationCarType) {
                value.innerHTML = "Usado";
              }
            } else {
              classificationCarType.innerHTML = "Carros";
            }
          }

          resultAllCars.innerHTML = `${response.results.map(
            (elemento, index) => `
            <div key="${index}" class="card-container">
              <div class="card-top">
            <img src="${elemento.photos.value}" alt="carro verde" />
            ${
              elemento.condition
                ? `<div class="tag">${elemento.condition.id}</div>`
                : ""
            }
             ${
               elemento.certifield === true
                 ? `<div class="tag-certifield">Certificado</div>`
                 : ""
             }
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
                <div> <img src="${locationIcon}" /> ${
              elemento.location ? elemento.location.id : "desconhecido"
            }</div>
          </div>
          <div class="info-secondary"> 
            <div>
              <img src="${dashboarIcon}" alt="carro verde" />
              <div>${elemento.kilometers}</div>        
            </div>
            <div>
              <img src="${gearboxIcon}" alt="carro verde" />
              <div>${
                elemento.additional ? elemento.additional.value : " - "
              }</div>        
            </div>
            <div>
              <img src="${petrolIcon}" alt="carro verde" />
              <div>${elemento.fuel ? elemento.fuel.value : " -"}</div>        
            </div>
          </div>
        </div>
            </div> 
        `
          )}`;
        });
    }

    /* === pegar novo ou usado === */
    function getValuesCondition() {
      var conditionNewOrUsed = document.querySelectorAll(
        "[name=new-or-used]:checked"
      );
      var valuesCondition = [];

      for (var i = 0; i < conditionNewOrUsed.length; i++) {
        valuesCondition.push(conditionNewOrUsed[i].value);
      }

      if (valuesCondition.length >= 1) {
        resultFilter("condition", valuesCondition);
      } else {
        getAllCars();
      }
    }
    var checkboxesCondition = document.querySelectorAll("[name=new-or-used]");
    for (var i = 0; i < checkboxesCondition.length; i++) {
      checkboxesCondition[i].addEventListener(
        "click",
        getValuesCondition,
        false
      );
    }

    /* === pegar por localização === */
    document
      .getElementById("select-localizacao")
      .addEventListener("change", function () {
        if (this.value != "all") {
          resultFilter("location", this.value);
        } else {
          getAllCars();
        }
      });

    /* === pegar por tipo da marca === */
    function getValues() {
      var selectedTipoMarca = document.querySelectorAll(
        "[name=tipo-marca]:checked"
      );
      var valuesCardType = [];

      for (var i = 0; i < selectedTipoMarca.length; i++) {
        valuesCardType.push(selectedTipoMarca[i].value);
      }

      if (valuesCardType.length >= 1) {
        resultFilter("cartype", valuesCardType);
      } else {
        getAllCars();
      }
    }
    // adicionar ação ao clique no checkbox
    var checkboxesTipoMarca = document.querySelectorAll("[name=tipo-marca]");
    for (var i = 0; i < checkboxesTipoMarca.length; i++) {
      checkboxesTipoMarca[i].addEventListener("click", getValues, false);
    }

    /* === pegar por marca === */
    document
      .getElementById("select-marca")
      .addEventListener("change", function () {
        if (this.value != "all") {
          resultFilter("brand", this.value);
        } else {
          getAllCars();
        }
      });

    /* === pegar por modelo === */
    document
      .getElementById("select-modelo")
      .addEventListener("change", function () {
        if (this.value != 0) {
          resultFilter("model", this.value);
        } else {
          getAllCars();
        }
      });

    /* === pegar por ano === */
    document
      .getElementById("select-ano")
      .addEventListener("change", function () {
        if (this.value != "all") {
          resultFilter("year", this.value);
        } else {
          getAllCars();
        }
      });

    /* === pegar por cor === */
    function getValuesColor() {
      var selectedCorlor = document.querySelectorAll("[name=cor]:checked");
      var valuesColor = [];

      for (var i = 0; i < selectedCorlor.length; i++) {
        valuesColor.push(selectedCorlor[i].value);
      }

      if (valuesColor.length >= 1) {
        resultFilter("color", valuesColor);
      } else {
        getAllCars();
      }
    }
    var checkboxesTipoMarca = document.querySelectorAll("[name=cor]");
    for (var i = 0; i < checkboxesTipoMarca.length; i++) {
      checkboxesTipoMarca[i].addEventListener("click", getValuesColor, false);
    }
  },
};

export default Catalogo;
