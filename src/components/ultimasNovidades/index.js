import "../../css/ultimasNovidades.css"
import annette from "../../img/novidades/annette.png";
import calendario from "../../img/novidades/calendario.png";
import carro1 from "../../img/novidades/carro.png";
import carro2 from "../../img/novidades/carro2.png";
import moto from "../../img/novidades/moto.png";
import jacob from "../../img/novidades/jacob.png";
import ralph from "../../img/novidades/ralph.png";
import seta from "../../img/novidades/seta-direita.png";


let UltimasNovidades = `
<section class="ultimas-novidades">
<div class="titulo-novidades">
  <h2>Ultimas novidades</h2>
  <a>Go to blog <img src="${seta}"/></a>
</div>

<div class="novidades">
  <div class="img-novidade">
    <img src="${carro1}"/>
    <div class="oferta">
      <p>DICAS</p>
      <h3>Loren ipsuns</h3>
    </div>
    <div class="usuario">
      <img src="${jacob}"/>
      <div>
        <p>Jacob Jones</p>
        <p><img class="calendario" src="${calendario}"/> 24 de Nov</p>
      </div>
    </div>
  </div>

  <div class="img-novidade">
    <img src="${carro2}"/>
    <div class="oferta">
      <p>OFERTA</p>
      <h3>Loren ipsuns</h3>
    </div>       
    <div class="usuario">
      <img src=".${annette}"/>
      <div>
        <p>Annette Black</p>
        <p><img class="calendario" src="${calendario}"/> 28 de Nov</p>
      </div>     
    </div>
  </div>

  <div class="img-novidade">
    <img src="${moto}"/>
    <div class="oferta">
      <p>OFERTA</p>
      <h3>Loren ipsuns</h3>
    </div>
    <div class="usuario">
      <img src="${ralph}"/>
      <div>
        <p>Ralph Edwards</p>
        <p><img class="calendario" src="${calendario}"/> 15 de Dez</p>
      </div>  
    </div>
  </div>    
</div>
</section>
`;

export default UltimasNovidades;
