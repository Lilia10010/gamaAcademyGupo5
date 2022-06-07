import nav from "../../components/nav";
import brand from "../../components/brand";
import footer from "../../components/footer";
import banner from "../../components/banner";
import menuSelect from "../../components/menuSelect";
import Offers from "../../components/offers";
import imagemFundo from "../../img/ilustracoes/shape.png";


let idx = 0;
let idx2 = 0;
let idx3 = 0;

let Home = {
  render: async () => {
    let view = `
    <div class="container">
    <img id="imagemFundo" src="${imagemFundo}" />
    <div class="content">
      ${nav}
      ${banner}
      ${menuSelect}        
      ${Offers}
      ${brand}
      ${footer}
    </div>
    </div>`;

    return view;
  },
  after_render: async () => {
    const imgs = document.getElementById("img");
    const img = document.querySelectorAll("#img img");
    const imgs2 = document.getElementById("img2");
    const img2 = document.querySelectorAll("#img2 img");
    const imgs3 = document.getElementById("img3");
    const img3 = document.querySelectorAll("#img3 img");

    let chevronRight = document.getElementById("buttonRight");
    chevronRight.addEventListener("click", () => {
      idx++;

      if (idx > img.length - 1) {
        idx = 0;
      }

      imgs.style.transform = `translateX(${-idx * 636}px)`;
    });

    let chevronLeft = document.getElementById("buttonLeft");
    chevronLeft.addEventListener("click", () => {
      idx--;

      if (idx < 0) {
        idx = img.length - 1;
      }

      imgs.style.transform = `translateX(${-idx * 636}px)`;
    });

    let chevronRight2 = document.getElementById("buttonRight2");
    chevronRight2.addEventListener("click", () => {
      idx2++;

      if (idx2 > img2.length - 1) {
        idx2 = 0;
      }

      imgs2.style.transform = `translateX(${-idx2 * 260}px)`;
    });

    let chevronLeft2 = document.getElementById("buttonLeft2");
    chevronLeft2.addEventListener("click", () => {
      idx2--;

      if (idx2 < 0) {
        idx2 = img2.length - 1;
      }

      imgs2.style.transform = `translateX(${-idx2 * 260}px)`;
    });

    let chevronRight3 = document.getElementById("buttonRight3");
    chevronRight3.addEventListener("click", () => {
      idx3++;

      if (idx3 > img3.length - 1) {
        idx3 = 0;
      }

      imgs3.style.transform = `translateX(${-idx3 * 260}px)`;
    });

    let chevronLeft3 = document.getElementById("buttonLeft3");
    chevronLeft3.addEventListener("click", () => {
      idx3--;

      if (idx < 0) {
        idx3 = img3.length - 1;
      }

      imgs3.style.transform = `translateX(${-idx3 * 260}px)`;
    });
  },
};

export default Home;
