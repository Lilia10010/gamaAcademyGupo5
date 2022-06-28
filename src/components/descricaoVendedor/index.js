import "../../css/descricaoVendedor.css";
import acidente from "../../img/vendedor/acidente.png";
import certificado from "../../img/vendedor/certificado.png";
import dono from "../../img/vendedor/dono.png";
import equipamento from "../../img/vendedor/equipamento.png";

let descricaoVendedor = `
<section>
<div class="info-carro">
  <div>
    <div class="img-info2">
      <img src="${certificado}" />
    </div>
    <div class="descricao-titulo">
     <p>Verificado e <br/>certificado pelo Finder</p>
    </div>
  </div>
  <div>
    <div class="img-info">
      <img src="${dono}" />
    </div>
    <div class="descricao-titulo">
      <p>Único dono</p>
    </div>
  </div>
  <div>
    <div class="img-info">
      <img src="${equipamento}" />
    </div>
    <div class="descricao-titulo">
      <p>Bem equipado</p>        
    </div>
  </div>
  <div>
    <div class="img-info">
      <img src="${acidente}" />
    </div>
    <div class="descricao-titulo">
      <p class="titulo-dano">Nenhum acidente/<br/>dano relatado</p> 
    </div>
  </div>
</div>
<div class="descricao-vendedor">
  <h1>Descrição do vendedor</h1>
  <p class="descricao">Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam
   ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim
   eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti
  sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
  <a>Veja mais</a>
  <p class="publicado">Publicado: Abril, 2020  |  Numero do anuncio: 681013232  |  Visualizações: 48</p>
</div>
</section>`;

export default descricaoVendedor;
