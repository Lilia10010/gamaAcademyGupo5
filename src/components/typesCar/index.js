import ArrowIcon from "@img/icons/svg/arrow.svg";
import SedanIcon from "@img/typesCar/sedan.svg";
import SuvIcon from "@img/typesCar/suv.svg";
import WagonIcon from "@img/typesCar/wagon.svg";
import CrossoverIcon from "@img/typesCar/crossover.svg";
import CoupeIcon from "@img/typesCar/coupe.svg";
import PickupIcon from "@img/typesCar/pickup.svg";
import SportCoupIcon from "@img/typesCar/sport-coupe.svg";
import CompactIcon from "@img/typesCar/compact.svg";
import ConvertibleIcon from "@img/typesCar/convertible.svg";
import FamilyMVPIcon from "@img/typesCar/family-mvp.svg";

import "../../css/typesCar.css";

let TypesCar = `
<section class="sectionTypesCar">
    <div class="header">
        <h2 class="title">Mais procurados</h2>
        <a href="#" title="Saiba como!" class="view-more">
            <h3>Ver todos</h3>
            <img src="${ArrowIcon}" alt="Seta direcionada para a direita" />
        </a>
    </div>
    <ul class="carList">
        <li class="carList-Item">
            <a href="#" title="Sedan">
                <img src="${SedanIcon}" alt="Ilustração de um carro do tipo Sedan" />
                <h2>Sedan</h2>
            </a>
        </li>
        <li class="carList-Item">
            <a href="#" title="SUV">
                <img src="${SuvIcon}" alt="Ilustração de um carro do tipo SUV" />
                <h2>SUV</h2>
            </a>
        </li>
        <li class="carList-Item">
            <a href="#" title="Wagon">
                <img src="${WagonIcon}" alt="Ilustração de um carro do tipo Wagon" />
                <h2>Wagon</h2>
            </a>
        </li>
        <li class="carList-Item">
            <a href="#" title="Crossover">
                <img src="${CrossoverIcon}" alt="Ilustração de um carro do tipo Crossover" />
                <h2>Crossover</h2>
            </a>
        </li>
        <li class="carList-Item">
            <a href="#" title="Coupe">
                <img src="${CoupeIcon}" alt="Ilustração de um carro do tipo Coupe" />
                <h2>Coupe</h2>
            </a>
        </li>
        <li class="carList-Item">
            <a href="#" title="Pickup">
                <img src="${PickupIcon}" alt="Ilustração de um carro do tipo Pickup" />
                <h2>Pickup</h2>
            </a>
        </li>
        <li class="carList-Item">
            <a href="#" title="Sport Coupe">
                <img src="${SportCoupIcon}" alt="Ilustração de um carro do tipo Sport Coupe" />
                <h2>Sport Coupe</h2>
            </a>
        </li>
        <li class="carList-Item">
            <a href="#" title="Compact">
                <img src="${CompactIcon}" alt="Ilustração de um carro do tipo Compact" />
                <h2>Compact</h2>
            </a>
        </li>
        <li class="carList-Item">
            <a href="#" title="Convertible">
                <img src="${ConvertibleIcon}" alt="Ilustração de um carro do tipo Convertible" />
                <h2>Convertible</h2>
            </a>
        </li>
        <li class="carList-Item">
            <a href="#" title="Family MVP">
                <img src="${FamilyMVPIcon}" alt="Ilustração de um carro do tipo Family MVP" />
                <h2>Family MVP</h2>
            </a>
        </li>
    </ul>
</section>
`;

export default TypesCar;
