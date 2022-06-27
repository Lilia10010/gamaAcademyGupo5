import "../../css/carrosselLoja.css"

import acessorios from "../../img/loja/acessorios.png";
import bancos from "../../img/loja/bancos.png";
import iconeButton from "../../img/loja/icone-button.png";
import pneus from "../../img/loja/pneus.png";
import rodas from "../../img/loja/rodas.png";
import setaD from "../../img/loja/seta-d.png";
import setaE from "../../img/loja/seta-e.png";



let carrosselLoja = `
<section>
  <div class="loja">
    <div class="conteudos-loja">
      <div class="titulo-loja">
        <h2>Loren ipsun</h2>
        <a>Loren ipsun site amet</a>
        <button>Ir para loja <img src="${iconeButton}"/></button>
      </div>
      <div class="itens-loja">
        <div>
            <input type="radio" id="slide1" name="slide" checked/>
            <label for="slide1"></label>
            <img src="${bancos}"/>
            <img src="${pneus}"/>
            <img src="${rodas}"/>
            <img src="${acessorios}"/>
            <div class="titulo-itens">
              <p>Bancos</p>
              <p>Pneus</p>
              <p>Rodas</p>
              <p>Acessorios</p>
            </div>
        </div>
        <div>
          <input type="radio" id="slide2" name="slide"/>
          <label for="slide2"></label>
          <img src="${acessorios}"/>
          <img src="${rodas}"/>
          <img src="${pneus}"/>
          <img src="${bancos}"/>
          <div class="titulo-itens2">
              <p>Acessorios</p>
              <p>Rodas</p>
              <p>Pneus</p>
              <p>Bancos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="carrossel">
    <div class="button-carrossel">
      <img src="${setaE}"/>
      <label for="slide1"></label>

    </div>
    <div class="button-carrossel">
      <img src="${setaD}"/>
      <label for="slide2"></label>
    </div>
  </div>
</section>`;
 
export default carrosselLoja;