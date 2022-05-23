import "../../css/navbar.css";
import Logo from "../../img/icons/lupa.png";
import LogoUsuario from "../../img/icons/usuario.png";
import Titulo from "../../img/icons/finder.png";

let navBar = `
<div class="conteudo-navbar">

<div id="conteudo-logo">
<div id="circulo-vermelho">
<img id="img-logo" src="${Logo}" />
</div>
<img src="${Titulo}" id="titulo">
<nav >
<ul class="menu">
<li><a href="#">Novos</a></li>
<li><a href="#">Usados</a></li>
<li><a href="#">Vender</a></li>
<li><a href="#">Comprar</a></li>
<li><a href="#">Novidades e Reviews</a></li>
</ul>
</nav>
</div>


<div>
<img src="${LogoUsuario}" />
<button id="botao-entrar">Entrar</button>

<button id="botao-vender">+ Vender</button>
</div>
</div>
`;

export default navBar;
