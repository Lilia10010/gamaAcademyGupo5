import "../../css/navbar.css";
import Logo from "../../img/icons/lupa.png";
import LogoUsuario from "../../img/icons/usuario.png";
import Titulo from "../../img/icons/finder.png";

let navBar = `
<div class="conteudo-navbar">

    <div id="conteudo-logo">
      <div id="circulo-vermelho">
      <a class="link-logo" href="/"><img id="img-logo" src="${Logo}" />
      </div>
      
      <img src="${Titulo}" id="titulo">
      </a>
    <nav >
      <ul class="menu">
      <li><a href="#/catalogo">Novos</a></li>
      <li><a href="#/catalogo">Usados</a></li>
      <li><a href="#/catalogo">Vender</a></li>
      <li><a href="#/catalogo">Comprar</a></li>
      <li><a href="#/catalogo">Novidades e Reviews</a></li>
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
