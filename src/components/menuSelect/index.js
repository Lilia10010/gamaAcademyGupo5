import lupaPesquisar from "../../img/icons/lupaPesquisar.png";
import barraVerticalMenu from "../../img/icons/barraVerticalMenu.png";
import estrelaMarca from "../../img/icons/estrelaMarca.png";
import "../../css/menuSelect.css";

const menuSelect = `
<div class="menuBotoes">
<button id="botaoNovo">Novo</button>
<button id="botaoUsado">Usado</button>
</div>

<div class="menuSelecao">
<div id="inputPesquisar">
<img src="${lupaPesquisar}"/>
<input type="text" id="pesquisar" alt="buscar" placeholder="Perquisar por ...." />
<img src="${barraVerticalMenu}"/>
<img id="imagemEstrela"src="${estrelaMarca}"/>
<select id="selectMarca">
<option>Marca</option>
</select>
</div>
</div>
`;

export default menuSelect;
