
import ArrowIcon from "@img/icons/svg/arrow.svg";
import ChevronLeftIcon from "@img/icons/svg/chevronLeft.svg";
import ChevronRightIcon from "@img/icons/svg/chevronRight.svg";
import PinIcon from "@img/icons/svg/pin.svg";
import DashboardIcon from "@img/icons/svg/dashboard.svg";
import GearboxIcon from "@img/icons/svg/gearbox.svg";
import PetrolIcon from "@img/icons/svg/petrol.svg";

import MercedesCarImage from "@img/cars/mercedes.png";
import MercedesSedanCarImage from "@img/cars/mercedesSedan.png";
import FordTruckCarImage from "@img/cars/fordTruck.png";

import "../../css/offers.css";

let Offers = `
<section class="sectionOffers">
<div class="headerOffers">
  <h1>Ofertas</h1>
  <a>
    <p>Ver todas as ofertas</p>
    <img src="${ArrowIcon}" />
  </a>
</div>
<div class="cardsOffers">
  <div class="cardMain">
    <div class="carouselWrapper">
      <div class="badge cBlue">
        <span>Usado</span>
      </div>
      <div class="bookmark">
        <ion-icon name="heart-outline"/>
      </div>
      <button class="buttonCarouselLeft" id="buttonLeft">
        <img src="${ChevronLeftIcon}" />
      </button>
      <div class="carousel">
          <div class="containerCarousel" id="img">
            <img src="${MercedesCarImage}" />
            <img src="${MercedesCarImage}" />
            <img src="${MercedesCarImage}" />
            <img src="${MercedesCarImage}" />
          </div>
        </div>
        <button class="buttonCarouselRight" id="buttonRight">
          <img src="${ChevronRightIcon}" />
        </button>
    </div>
    <div class="cardInfo">
      <div class="details">
        <p>2014</p>
        <h2>Mercedes Benz Convertible Coupe</h2>
        <span>$25,880</span>
        <div class="location">
          <img src="${PinIcon}" />
          <p>São Paulo, SP</p>
        </div>
      </div>
      <div>
        <label class="check">
          <p>Compare</p>
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
    <div class="line"></div>
    <div class="detailsCar">
      <div class="cardDetail">
        <img src="${DashboardIcon}" />
        <p>48k mi</p>
      </div>
      <div class="cardDetail">
        <img src="${GearboxIcon}" />
        <p>Automático</p>
      </div>
      <div class="cardDetail">
        <img src="${PetrolIcon}" />
        <p>Gasolina</p>
      </div>
    </div>
  </div>
  <div class="secondaryCards">
    <div class="otherCarsCard">
      <div class="carouselWrapper-sm">
        <div class="badge cBlue">
          <span>Usado</span>
        </div>
        <div class="bookmark">
          <ion-icon name="heart-outline"/>
        </div>
        <button class="buttonCarouselLeft" id="buttonLeft2">
          <img src="${ChevronLeftIcon}"/>
        </button>
        <div class="carousel-sm">
            <div class="containerCarousel" id="img2">
              <img src="${FordTruckCarImage}" />
              <img src="${FordTruckCarImage}" />
              <img src="${FordTruckCarImage}" />
              <img src="${FordTruckCarImage}" />
            </div>
          </div>
          <button class="buttonCarouselRight" id="buttonRight2">
            <img src="${ChevronRightIcon}" />
          </button>
      </div>
      <div class="cardInfoSecondary">
        <div class="details">
          <div class="headerDetails">
            <p>2014</p>
            <div class="headerCheckBox">
              <label class="check">
                <p>Compare</p>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <h2>Mercedes Benz Convertible Coupe</h2>
          <span>$25,880</span>
          <div class="locationSecondary">
            <img src="${PinIcon}" />
            <p>São Paulo, SP</p>
          </div>
        </div>
        <div class="line"></div>
      <div class="detailsCar">
        <div class="cardDetailSecondary">
          <img src="${DashboardIcon}"/>
          <p>48k mi</p>
        </div>
        <div class="cardDetailSecondary">
          <img src="${GearboxIcon}"/>
          <p>Automático</p>
        </div>
        <div class="cardDetailSecondary">
          <img src="${PetrolIcon}"/>
          <p>Gasolina</p>
        </div>
      </div>
    </div>
  </div>
  <div class="otherCarsCard">
    <div class="carouselWrapper-sm">
      <div class="badge cYellow">
        <span>Novo</span>
      </div>
      <div class="bookmark">
        <ion-icon name="heart-outline"/>
      </div>
      <button class="buttonCarouselLeft" id="buttonLeft3">
        <img src="${ChevronLeftIcon}"/>
      </button>
      <div class="carousel-sm">
          <div class="containerCarousel" id="img3">
            <img src="${MercedesSedanCarImage}" />
            <img src="${MercedesSedanCarImage}" />
            <img src="${MercedesSedanCarImage}" />
            <img src="${MercedesSedanCarImage}" />
          </div>
        </div>
        <button class="buttonCarouselRight" id="buttonRight3">
          <img src="${ChevronRightIcon}" />
        </button>
    </div>
    <div class="cardInfoSecondary">
      <div class="details">
        <div class="headerDetails">
          <p>2014</p>
          <div class="headerCheckBox">
            <label class="check">
              <p>Compare</p>
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <h2>Mercedes Benz Convertible Coupe</h2>
        <span>$25,880</span>
        <div class="locationSecondary">
          <img src="${PinIcon}" />
          <p>São Paulo, SP</p>
        </div>
      </div>
      <div class="line"></div>
    <div class="detailsCar">
      <div class="cardDetailSecondary">
        <img src="${DashboardIcon}"/>
        <p>48k mi</p>
      </div>
      <div class="cardDetailSecondary">
        <img src="${GearboxIcon}"/>
        <p>Automático</p>
      </div>
      <div class="cardDetailSecondary">
        <img src="${PetrolIcon}"/>
        <p>Gasolina</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>
`;



export default Offers;
