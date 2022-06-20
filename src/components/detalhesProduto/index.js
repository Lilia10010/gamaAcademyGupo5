// import BrandMitsubishi from "@img/brand/mitsubishi.svg";

import "../../css/detalhesProduto.css";

let detalhesProduto = `
    <main class="wrap-main">
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#/catalogo">Usados</a></li>
                <li><span aria-current="page">Mercedes-Benz E 400 Cabriolet</span></li>
            </ul>
        </nav>
        <section class="section-title-social">
            <div>
                <h2 class="title">Mercedes-Benz E 400 Cabriolet</h2>
            </div>
            <div class="area-like-share">
                <label>
                    <input type="checkbox">
                    <span><ion-icon name="heart-outline"></ion-icon></span>       
                </label>
                <label>
                    <input type="checkbox">
                <span><ion-icon name="share-social-outline"></ion-icon></span>       
                </label> 
            </div>
        </section>
        <section class="details-section">
            <div class="details-slide">slide</div>

            <div class="details-info">
                <h3 class="price">R$ 60.990</h3>
                <div class="more-infos">
                    <span><ion-icon class="icon" name="speedometer-outline"></ion-icon>25.000 Km</span>
                    <span><ion-icon class="icon" name="location-outline"></ion-icon>São Paulo</span>
                </div>
                <div class="card-seller">
                    <h3 class="type-seller">Vendedor Particular</h3>
                    <div class="seller-area">
                        <img src="" alt="" />
                        <h3 class="seller-name">Nome</h3>
                        <span class="rating">
                            <ul class="stars">
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                                <li><ion-icon name="star"></ion-icon></li>
                            </ul>
                            <span>(5 reviews)</span>
                        </span>
                    </div>
                    <a href="#" title="">Outros anúncios deste vendedor</a>
                </div>
            </div>
        </section>
    </main>
`;

export default detalhesProduto;