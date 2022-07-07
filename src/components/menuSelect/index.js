import lupaPesquisar from "../../img/icons/lupaPesquisar.png";
import barraVerticalMenu from "../../img/icons/barraVerticalMenu.png";
import estrelaMarca from "../../img/icons/estrelaMarca.png";
import modeloCarro from "../../img/icons/modeloCarro.png";
import tipoCarro from "../../img/icons/tipoCarro.png";
import local from "../../img/icons/local.png";
import "../../css/menuSelect.css";

const menuSelect = `

<div class="menuBotoes">

  <div>
    <button id="botaoNovo">Novo</button>
    <button id="botaoUsado">Usado</button>
  </div>


  <div class="menuSelecao">
    <div id="inputPesquisar">
    <img src="${lupaPesquisar}"/>
    <input type="text" id="pesquisar" alt="buscar" placeholder="Pesquisar por ...." />
    </div>
    <img src="${barraVerticalMenu}"/>
    <div>
    <img id="imagemEstrela"src="${estrelaMarca}"/>

      <select id="selectMarca">
        <option value="all">Marca</option>
        <option value="3">Renault</option>
        <option value="4">Honda</option>
        <option value="5">Infiniti</option>
        <option value="6">Lexus</option>
        <option value="7">Mitsubishi</option>
        <option value="8">Mazda</option>
        <option value="9">Hyundai</option>
        <option value="10">Audi</option>
        <option value="11">Mercedez Benz</option>
      </select>

    </div>
    <img src="${barraVerticalMenu}"/>
    <div>
    <img id="modeloCarro"src="${modeloCarro}"/>
      <select id="selectModelo">
        <option value="0">Modelo</option>
        <option value="Fiat Uno">Fiat Uno</option>
        <option value="Honda Civic">Honda Civic</option>
        <option>modelo 03</option>
      </select>
    </div>
    <img src="${barraVerticalMenu}"/>
    <div>
    <img id="tipoCarro"src="${tipoCarro}"/>
      <select id="selectTipo">
        <option value="all">Tipo</option>
        <option value="1">Coupe</option>
        <option value="2">Sedã</option>
        <option value="3">Hatchback</option>
        <option value="4">Picup</option>
        <option value="5">Utilitário</option>
        <option value="6">SUV</option>
      </select>
    </div>
    <img src="${barraVerticalMenu}"/>
    <div id="containerBotaoPesquisar">
    <img id="local"src="${local}"/>
      <select id="selectLocal">
        <option value="all">Escolha o local</option>
        <option value="1">São Paulo</option>
        <option value="2">Rio de Janeiro</option>
        <option value="3">Minas Gerais</option>
        <option value="4">Rio Grande do Sul</option>
        <option value="5">Ceará</option>
        <option value="6">Bahia</option>
      </select>
    <div>
    </div>
    </div>
    <button id="botaoPesquisar">Pesquisar</button>
  </div>

</div>
`;

export default menuSelect;
