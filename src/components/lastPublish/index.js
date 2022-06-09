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

const lastPublish = `
<div id="menuPublish">
  <h1 id="tituloPublish">Ultimos publicados</h1>
<div id="botoesPublish">
  <button id="novoPublish">Novo</button>
  <button id="usadoPublish">Usado</button>
  <a>Ver todos</a>
  <img src="${ArrowIcon}"/>
</div>
</div>
<div id="containerCardPublish">
    <div id="containerCarrosselPublish">
    <img src="${ChevronLeftIcon}" /> 
      <div id="cardPublish">
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
    <div id="cardPublish">
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
    <div id="cardPublish">
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
    <img src="${ChevronRightIcon}" />
  </div>
  <div id="indicadores">
  <div id="indicadorImg"></div>
  <div id="indicadorImg"></div>
  <div id="indicadorImg"></div>
  </div>
</div>
`;

export default lastPublish;
