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
<option>Marca</option>
</select>
</div>
<img src="${barraVerticalMenu}"/>
<div>
<img id="modeloCarro"src="${modeloCarro}"/>
<select id="selectModelo">
<option>Modelo</option>
</select>
</div>
<img src="${barraVerticalMenu}"/>
<div>
<img id="tipoCarro"src="${tipoCarro}"/>
<select id="selectTipo">
<option>Tipo</option>
</select>
</div>
<img src="${barraVerticalMenu}"/>
<div id="containerBotaoPesquisar">
<img id="local"src="${local}"/>
<select id="selectLocal">
<option>Local</option>
</select>
<div>
</div>
</div>
<button id="botaoPesquisar">Pesquisar</button>
</div>
</div>
`;

export default menuSelect;
