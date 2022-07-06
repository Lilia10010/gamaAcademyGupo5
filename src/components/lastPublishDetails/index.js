import "../../css/lastPublish.css";
import ChevronLeftIcon from "@img/icons/svg/chevronLeft.svg";
import ChevronRightIcon from "@img/icons/svg/chevronRight.svg";
import ArrowIcon from "@img/icons/svg/arrow.svg";
import Mazda from "@img/cars/mazda.png";
import Bmw_640 from "@img/cars/bmw_640_Xi.png";
import Mercedes from "@img/cars/mercedes.png";
import Local from "@img/icons/local.png";
import Velocimetro from "@img/icons/velocimetro.png";
import Combustivel from "@img/icons/combustivel.png";
import Cambio from "@img/icons/cambio.png";
import heart from "@img/icons/svg/heart.svg";

const lastPublishDetails = `

<div class="cars-recomendadas details container">
  <div id="menuPublish">
    <h1 id="tituloPublish">Você pode estar interessado</h1>
  </div>

  <div class="container-principal">
    <button role="button" id="seta-esquerda" class="seta-esquerda">
    <img src="${ChevronLeftIcon}"/>
    </button>

    <div class="container-carousel">
      <div class="carousel">
        <div class="cardPublish ">
          <img id="imgMazda" src="${Mazda}" class="carousel__item" class="carousel__item--visible" /> 
          <div id="bordaNovo">
            <p id="tituloNovo">Novo</p>
          </div>
          <div id="anoModelo">
            <p id="data">2019</p>
            <div id="checkboxCard">
              <input name="comprar" id="comprar" type="checkbox" />
              <label id="tituloCheckbox" for="comprar">Comprar</label>
            </div>
          </div>
          <h5 id="tituloCardCarro">Mazda MX-5 Miata Convertible</h5>
          <p id="precoCard">$38,500</p>
          <div id="local">
            <img src="${Local}" />
            <p>Los Angeles</p>
          </div>
          <hr id="linhaVertical" />   
          <div id="botoesCardsCarrossel">
            <button id="containerKilometragem">
              <img  src="${Velocimetro}" />
              <p>18k mi</p>
            </button>
            <button id="containerCambio">
              <img  src="${Cambio}" />
              <p>Manaul</p>
            </button>
            <button id="containerCombustivel">
              <img  src="${Combustivel}" />
              <p>Petrol</p>
            </button>
          </div>      
        </div>
        <div class="cardPublish " >
          <img src="${Bmw_640}" />
          <div id="bordaUsado">
            <p id="tituloUsado">Usado</p>
          </div>
          <div id="anoModelo">
            <p id="data">2019</p>
            <div id="checkboxCard">
              <input name="comprar" id="comprar" type="checkbox" />
              <label id="tituloCheckbox" for="comprar">Comprar</label>
            </div>
          </div>
          <h5 id="tituloCardCarro">BMW 640 XI Gran Turismo </h5>
          <p id="precoCard">$44,920</p>
          <div id="local">
            <img src="${Local}" />
            <p>New Jersey</p>
          </div>
          <hr id="linhaVertical" />   
          <div id="botoesCardsCarrossel">
            <button id="containerKilometragem">
              <img  src="${Velocimetro}" />
              <p>10k mi</p>
            </button>
            <button id="containerCambio">
              <img  src="${Cambio}" />
              <p>Automatic</p>
            </button>
            <button id="containerCombustivel">
              <img  src="${Combustivel}" />
              <p>Gasoline</p>
            </button>
          </div>      
        </div>
        <div class="cardPublish " >
          <div class="images-card">
            <img data-js="carousel__item" class="carousel__item carousel__item--visible" src="${Mercedes}" />
            <img data-js="carousel__item" class="carousel__item" src="${Bmw_640}" />
            <img data-js="carousel__item" class="carousel__item" src="${Mazda}" />
          </div>
          <div class="topo_image">
            <div id="bordaUsado">
              <p id="tituloUsado">Usado</p>
            </div>
            <div class="favoritos"><img src="${heart}"/></div>
          </div>
          <div class="botoes-image">
            <button class="carousel__button--prev"><img src="${ChevronLeftIcon}"/></button>
            <button class="carousel__button--next"><img src="${ChevronRightIcon}"/></button>
          </div>
          <div id="anoModelo">
            <p id="data">2019</p>
            <div id="checkboxCard">
              <input name="comprar" id="comprar" type="checkbox" />
              <label id="tituloCheckbox" for="comprar">Comprar</label>
            </div>
          </div>
          <h5 id="tituloCardCarro">Mercedez Convertible</h5>
          <p id="precoCard">$58,500</p>
          <div id="local">
            <img src="${Local}" />
            <p>Los Angeles</p>
          </div>
          <hr id="linhaVertical" />   
          <div id="botoesCardsCarrossel">
            <button id="containerKilometragem">
              <img  src="${Velocimetro}" />
              <p>18k mi</p>
            </button>
            <button id="containerCambio">
              <img  src="${Cambio}" />
              <p>Manaul</p>
            </button>
            <button id="containerCombustivel">
              <img  src="${Combustivel}" />
              <p>Petrol</p>
            </button>
          </div>      
        </div>
        <div class="cardPublish  " >
          <img id="imgMazda" src="${Mazda}" />  
          <div id="bordaNovo">
            <p id="tituloNovo">Novo</p>
          </div>
          <div id="anoModelo">
            <p id="data">2019</p>
            <div id="checkboxCard">
              <input name="comprar" id="comprar" type="checkbox" />
              <label id="tituloCheckbox" for="comprar">Comprar</label>
            </div>
          </div>
          <h5 id="tituloCardCarro">Mazda MX-5 Miata Convertible</h5>
          <p id="precoCard">$38,500</p>
          <div id="local">
            <img src="${Local}" />
            <p>Los Angeles</p>
          </div>
          <hr id="linhaVertical" />   
          <div id="botoesCardsCarrossel">
            <button id="containerKilometragem">
              <img  src="${Velocimetro}" />
              <p>18k mi</p>
            </button>
            <button id="containerCambio">
              <img  src="${Cambio}" />
              <p>Manaul</p>
            </button>
            <button id="containerCombustivel">
              <img  src="${Combustivel}" />
              <p>Petrol</p>
            </button>
          </div>      
        </div>
        <div class="cardPublish " >
          <img src="${Bmw_640}" />
          <div id="bordaUsado">
            <p id="tituloUsado">Usado</p>
          </div>
          <div id="anoModelo">
            <p id="data">2019</p>
            <div id="checkboxCard">
              <input name="comprar" id="comprar" type="checkbox" />
              <label id="tituloCheckbox" for="comprar">Comprar</label>
            </div>
          </div>
          <h5 id="tituloCardCarro">BMW 640 XI Gran Turismo </h5>
          <p id="precoCard">$44,920</p>
          <div id="local">
            <img src="${Local}" />
            <p>New Jersey</p>
          </div>
          <hr id="linhaVertical" />   
          <div id="botoesCardsCarrossel">
            <button id="containerKilometragem">
              <img  src="${Velocimetro}" />
              <p>10k mi</p>
            </button>
            <button id="containerCambio">
              <img  src="${Cambio}" />
              <p>Automatic</p>
            </button>
            <button id="containerCombustivel">
              <img  src="${Combustivel}" />
              <p>Gasoline</p>
            </button>
          </div>      
        </div>
        <div class="cardPublish " >
          <img src="${Mercedes}" />
          <div id="bordaUsado">
            <p id="tituloUsado">Usado</p>
          </div>
          <div id="anoModelo">
            <p id="data">2019</p>
            <div id="checkboxCard">
              <input name="comprar" id="comprar" type="checkbox" />
              <label id="tituloCheckbox" for="comprar">Comprar</label>
            </div>
          </div>
          <h5 id="tituloCardCarro">Mercedez Convertible</h5>
          <p id="precoCard">$58,500</p>
          <div id="local">
            <img src="${Local}" />
            <p>Los Angeles</p>
          </div>
          <hr id="linhaVertical" />   
          <div id="botoesCardsCarrossel">
            <button id="containerKilometragem">
              <img  src="${Velocimetro}" />
              <p>18k mi</p>
            </button>
            <button id="containerCambio">
              <img  src="${Cambio}" />
              <p>Manaul</p>
            </button>
            <button id="containerCombustivel">
              <img  src="${Combustivel}" />
              <p>Petrol</p>
            </button>
          </div>      
        </div>
        <div class="cardPublish " >
          <img src="${Bmw_640}" />
          <div id="bordaUsado">
            <p id="tituloUsado">Usado</p>
          </div>
          <div id="anoModelo">
            <p id="data">2019</p>
            <div id="checkboxCard">
              <input name="comprar" id="comprar" type="checkbox" />
              <label id="tituloCheckbox" for="comprar">Comprar</label>
            </div>
          </div>
          <h5 id="tituloCardCarro">BMW 640 XI Gran Turismo </h5>
          <p id="precoCard">$44,920</p>
          <div id="local">
            <img src="${Local}" />
            <p>New Jersey</p>
          </div>
          <hr id="linhaVertical" />   
          <div id="botoesCardsCarrossel">
            <button id="containerKilometragem">
              <img  src="${Velocimetro}" />
              <p>10k mi</p>
            </button>
            <button id="containerCambio">
              <img  src="${Cambio}" />
              <p>Automatic</p>
            </button>
            <button id="containerCombustivel">
              <img  src="${Combustivel}" />
              <p>Gasoline</p>
            </button>
          </div>      
        </div>
      </div>
    </div> 
  <button role="button" id="seta-direita" class="seta-direita">
    <img src="${ChevronRightIcon}"/>
  </button>
</div>
<div class="seeAllArrow" id="botoesPublish">
  <a href="#/catalogo" title="Ver todos">Ver todos</a>
  <img src="${ArrowIcon}"/>
</div>
<div class="container-titulo-controles">
  <div class="indicadores"></div>
</div>
`;

export default lastPublishDetails;
