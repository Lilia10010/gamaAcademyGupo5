import ArrowIcon from "@img/icons/svg/arrow.svg";
import FileIcon from "@img/icons/features/file.svg";
import SearchIcon from "@img/icons/features/search.svg";
import SettingsIcon from "@img/icons/features/settings.svg";
import InfoIcon from "@img/icons/features/info.svg";
import UserIcon from "@img/icons/features/user.svg";
import CalculatorIcon from "@img/icons/features/calculator.svg";

import CarFeature from "@img/ilustracoes/car-features.svg";
import RoadLine from "@img/ilustracoes/road-line.svg";

import "../../css/features.css";

let Features = `
<section class="sectionFeatures">
  <div class="header">
    <h2 class="title">O que temos de diferente</h2>
    <a href="#" title="Saiba como!" class="view-more">
      <h3>Como vender carros no Finder <img src="${ArrowIcon}"/></h3>
    </a>
  </div>
  <div class="containerFeatures">
    <ul class="infos-left">
      <li>
        <span class="text">
          <h2>Loren ipsum</h2>
          <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
        </span>
        <span class="icon">
          <img src="${FileIcon}"/>
        </span>
      </li>
      <li>
        <span class="text">
          <h2>Loren ipsum</h2>
          <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
        </span>
        <span class="icon">
          <img src="${SearchIcon}"/>
        </span>
      </li>
      <li>
        <span class="text">
          <h2>Loren ipsum</h2>
          <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
        </span>
        <span class="icon">
          <img src="${SettingsIcon}"/>
        </span>
      </li>
    </ul>
    <div class="road">
      <img class="road-car" src="${CarFeature}" />
      <span><img class="road-line" src="${RoadLine}" /></span>
    </div>
    <ul class="infos-right">
    <li>
      <span class="icon">
        <img src="${InfoIcon}"/>
      </span>
      <span class="text">
        <h2>Loren ipsum</h2>
        <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
      </span>
    </li>
    <li>
      <span class="icon">
        <img src="${UserIcon}"/>
      </span>
      <span class="text">
        <h2>Loren ipsum</h2>
        <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
      </span>
    </li>
    <li>
      <span class="icon">
        <img src="${CalculatorIcon}"/>
      </span>
      <span class="text">
        <h2>Loren ipsum</h2>
        <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
      </span>
    </li>
  </ul>
  </div>
</section>
`;



export default Features;
