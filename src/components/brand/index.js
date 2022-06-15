import BrandOpel from "@img/brand/opel.svg";
import BrandAudi from "@img/brand/audi.svg";
import BrandMercedes from "@img/brand/mercedes.svg";
import BrandToyota from "@img/brand/toyota.svg";
import BrandMazda from "@img/brand/mazda.svg";
import BrandNissan from "@img/brand/nissan.svg";
import BrandHyundai from "@img/brand/hyundai.svg";
import BrandLexus from "@img/brand/lexus.svg";
import BrandHonda from "@img/brand/honda.svg";
import BrandRenault from "@img/brand/renault.svg";
import BrandInfiniti from "@img/brand/infiniti.svg";
import BrandMitsubishi from "@img/brand/mitsubishi.svg";

import "../../css/brand.css";

let Brand = `
    <section class="brandSection">
        <ul  class="brandList">
            <li class="brandItem"><a href="#" title="Opel"><img src="${BrandOpel}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Audi"><img src="${BrandAudi}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Mercedes"><img src="${BrandMercedes}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Toyota"><img src="${BrandToyota}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Mazda"><img src="${BrandMazda}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Nissan"><img src="${BrandNissan}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Hyundai"><img src="${BrandHyundai}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Lexus"><img src="${BrandLexus}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Honda"><img src="${BrandHonda}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Renault"><img src="${BrandRenault}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Infiniti"><img src="${BrandInfiniti}" alt="" /></a></li>
            <li class="brandItem"><a href="#" title="Mitsubishi"><img src="${BrandMitsubishi}" alt="" /></a></li>
        </ul>
    </section>
`;

export default Brand;