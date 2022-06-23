import Mercedes01 from "@img/cars/mercedes-cabriolet-1.jpg";
import Mercedes02 from "@img/cars/mercedes-cabriolet-2.jpg";
import Mercedes03 from "@img/cars/mercedes-cabriolet-3.jpg";
import Mercedes04 from "@img/cars/mercedes-cabriolet-4.jpg";
import Mercedes05 from "@img/cars/mercedes-cabriolet-5.jpg";
import Mercedes06 from "@img/cars/mercedes-cabriolet-6.jpg";
import Mercedes07 from "@img/cars/mercedes-cabriolet-7.jpg";
import Mercedes08 from "@img/cars/mercedes-cabriolet-8.jpg";

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
            <div class="carousel-container">
		        <img src="${Mercedes01}" alt="a" class="current-image"/>
		        <span class="arrow arrow-prev"> <ion-icon name="chevron-back-outline"></ion-icon> </span>
		        <ul class="next-list">
			        <li><img src="${Mercedes01}" alt="" class="image-of-list current-image-list"></li>
			        <li><img src="${Mercedes02}" alt="" class="image-of-list"></li>
			        <li><img src="${Mercedes03}" alt="" class="image-of-list"></li>
			        <li><img src="${Mercedes04}" alt="" class="image-of-list"></li>
			        <li><img src="${Mercedes05}" alt="" class="image-of-list"></li>
			        <li><img src="${Mercedes06}" alt="" class="image-of-list"></li>
			        <li><img src="${Mercedes07}" alt="" class="image-of-list"></li>
			        <li><img src="${Mercedes08}" alt="" class="image-of-list"></li>
		        </ul>
		        <span class="arrow arrow-next"> <ion-icon name="chevron-back-outline"></ion-icon> </span>
	        </div>

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
                    <a class="others" href="#" title="">Outros anúncios deste vendedor</a>
                </div>
                <div class="form-send-email">
                    <h3>Envie-me por e-mail quedas de preços e novas listagens para estes resultados de pesquisa:</h3>
                    <form action="">
                        <div class="send">
                            <input type="email" placeholder="Email" value="" />
                            <button type="submit">Assinar</button>
                        </div>
                        <div class="agree">
                            <input checked type="checkbox" name="" id="toagree" />
                            <label for="toagree">Concordo em receber alertas de queda de preço neste veículo e informações úteis sobre compras.</label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
`;

export default detalhesProduto;