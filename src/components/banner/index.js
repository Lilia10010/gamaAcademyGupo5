import imagemFundo from "../../img/ilustracoes/shape.png";
import carro from "../../img/ilustracoes/carro-banner.png";
import "../../css/banner.css";

const banner = `
<img id="imagemFundo" src="${imagemFundo}" />
<container class="containerBanner">
<div class="conteudoBanner">
<h1 id="tituloBanner">Compre e venda</br> com facilidade.</h1>
<p id="subtituloBanner">O Finder é um mercado digital líder para a<br/>
indústria automotiva que conecta compradores<br/> de carros a vendedores.</p>
</div>
<img id="carroBanner" src="${carro}">
</container>
`;

export default banner;
