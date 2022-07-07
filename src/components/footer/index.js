import "../../css/footer.css";
import Logo from "../../img/icons/lupa.png";
import Local from "../../img/icons/local.png";
import Pais from "../../img/icons/pais.png";
import Seta from "../../img/icons/seta.png";
import Telefone from "../../img/icons/telefone.png";
import Email from "../../img/icons/email.png";
import Face from "../../img/icons/face.png";
import Twitter from "../../img/icons/twitter.png";
import Telegram from "../../img/icons/telegram.png";
import Messeger from "../../img/icons/messeger.png";
import Vector from "../../img/icons/vector.png";
import Finder from "../../img/icons/finder.png";

let footer = `
<footer>
<div>
<div class="finder">
    <a href="/">
      <div id="circulo">
          <img id="img-logo" src="${Logo}"/>
          <img id="finder" src="${Finder}"/>
          </div>
    </a>
  <div class="localizacao">
    <div><img src="${Pais}"/> pt-BR <img src="${Seta}"/></div>
    <div><img src="${Local}"/> São Paulo <img src="${Seta}"/></div>
  </div>
</div>
<div class="container-footer">
    <ul class="content-footer">
      <div>
        <h1 class="newsletter">Cadastre-se na newsletter</h1>
        <p id="aviso">Não perca nenhuma oferta relevante!</p>
        <form>
          <input class="input" type="text" placeholder="Informe seu email"/>
          <button class="button"><img src="${Vector}"/></button>
        </form>
      </div>
      <li>
          <h2 class="titulo-lista">Comprar ou Vender</h2>
          <ul class="box">
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
          </ul>
      </li>
      <li>
          <h2 class="titulo-lista">Sobre</h2>
          <ul class="box">
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
          </ul>
      </li>
      <li>
          <h2 class="titulo-lista">Perfil</h2>
          <ul class="box">
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
              <li><a href="#">Loren ipsun</a></li>
          </ul>
      </li>
      <li class="contato">
        <ul>
          <div class="phone">
          <p class="phone"><img src="${Telefone}"/>(11) 1111-1111</p>
          </div>
          <div class="email">
          <p href="#"><img src="${Email}"/>email@finder.com.br</p>
          </div>
          <div class="icones">
            <a href="#"><img src="${Face}"/></a>
            <a href="#"><img src="${Twitter}"/></a>
            <a href="#"><img src="${Telegram}"/></a>
            <a id="messeger" href="#"><img src="${Messeger}"/></a>
          </div>
        </ul>
      </li>
    </ul>
</div>
<div class="termos">
  <p>Copyright © Finder | Gama Academy. Todos os direitos reservados - Este é um projeto acadêmico.</p>
  <div>
    <p>Termos de uso</p>
    <p>Política de privacidade</p>
  </div>
</div>
</div>
</footer>`;

export default footer;
