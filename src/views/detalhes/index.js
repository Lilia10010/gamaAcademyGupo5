import nav from "../../components/nav";
import footer from "../../components/footer";
import detalhesProduto from "../../components/detalhesProduto";
import descricaoVendedor from "../../components/descricaoVendedor";

let Detalhes = {
  render: async () => {
    let view = `
    <div class="container">
      <div class="content">
        ${nav}
        ${detalhesProduto}
      </div>
        ${footer}
    </div>`;

    return view;
  },

  after_render: async () => {
    let titleBreadcrumb = document.querySelector(".titleCurrentPage");
    let titleCarAndVersion = document.querySelector(".title");

    let carouselCurrentImage = document.querySelector(".current-image");
    let carouselThumb = document.querySelector(".next-list");

    let price = document.querySelector(".price");
    let moreInfos = document.querySelector(".more-infos");
    let specifications = document.querySelector(".specifications-list");

    let id = window.localStorage.getItem("idData");

    const url = `https://e-carros-api.herokuapp.com/adverts?id=${id}`;

    function getDetails() {
      fetch(url)
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          titleBreadcrumb.innerHTML = `
              ${response.map(
                (element) =>
                  `<span aria-current="page">${element.model} ${element.version}</span> 
                  `
              )}
                `;

          titleCarAndVersion.innerHTML = `
              ${response.map(
                (element) =>
                  `<h2>${element.model} ${element.version}</h2>  
                  `
              )}
                `;

          carouselCurrentImage.innerHTML = `
                ${response.map(
                  (element, index) =>
                    `                
                      <img src="${element.photos.value}" alt="${element.model}">
                    `
                )}
                  `;

          carouselThumb.innerHTML = `
              ${response.map(
                (element, index) =>
                  `                
                    <li key="${index}">
                      <img src="${element.photos.value}" alt="" class="image-of-list current-image-list">
                    </li>
                  `
              )}
                `;

          price.innerHTML = `
              ${response.map(
                (element, index) =>
                  `<h3>R$ ${element.price}</h3>
                  `
              )}
                `;

          moreInfos.innerHTML = `
              ${response.map(
                (element, index) =>
                  `<span><ion-icon class="icon" name="speedometer-outline"></ion-icon>${
                    element.kilometers ? element.kilometers : ""
                  } Km</span>
                   <span><ion-icon class="icon" name="location-outline"></ion-icon>${
                     element.location?.value
                   }</span>
                  `
              )}
                `;

          specifications.innerHTML = `
              ${response.map(
                (element, index) =>
                  `
                  <li class="specifications-item">Ano: <span>${
                    element.year ? element.year : ""
                  }</span></li>
                  <li class="specifications-item">Km: <span>${
                    element.mileage ? element.mileage.value : ""
                  }</span></li>
                  <li class="specifications-item">Tipo: <span>${
                    element.cartype.value ? element.cartype.value : ""
                  }</span></li>
                  <li class="specifications-item"><span>${
                    element.additional?.value
                  }</span></li>

                  `
              )}
                `;
        });
    }
    getDetails();

    // Carousel of images Seller
    const carouselContainer = document.querySelector(".carousel-container");
    const listImageArea = carouselContainer.querySelector(".next-list");
    const listOfImages = listImageArea.querySelectorAll("img");
    const currentImage = carouselContainer.querySelector(".current-image");
    const arrowPrev = carouselContainer.querySelector(".arrow-prev");
    const arrowNext = carouselContainer.querySelector(".arrow-next");

    function goToNextSlide() {
      let current = listImageArea.querySelector(".current-image-list");
      current.parentElement.nextElementSibling.children[0].classList.add(
        "current-image-list"
      );
      current.classList.remove("current-image-list");
      current = listImageArea.querySelector(".current-image-list");
      listImageArea.scrollLeft = current.offsetLeft;
      currentImage.attributes.src.value = current.attributes.src.value;
    }
    arrowNext.addEventListener("click", goToNextSlide);

    function goToPrevSlide() {
      let current = listImageArea.querySelector(".current-image-list");
      current.parentElement.previousElementSibling.children[0].classList.add(
        "current-image-list"
      );
      current.classList.remove("current-image-list");
      current = listImageArea.querySelector(".current-image-list");
      listImageArea.scrollLeft = current.offsetLeft;
      currentImage.attributes.src.value = current.attributes.src.value;
    }
    arrowPrev.addEventListener("click", goToPrevSlide);

    //Controls display of current image with thumbnails
    function changeCurrentImage() {
      currentImage.attributes.src.value = this.attributes.src.value;
      listOfImages.forEach((image) =>
        image.classList.remove("current-image-list")
      );
      this.classList.add("current-image-list");
    }
    listOfImages.forEach((image) =>
      image.addEventListener("mouseover", changeCurrentImage)
    );

    //********************************** */

    // ----- ------------ Carrossel interested -------- ----------------//
    const fila = document.querySelector(".container-carousel");
    const cars = document.querySelectorAll(".cardPublish");

    const setaEsquerda = document.getElementById("seta-esquerda");
    const setaDireita = document.getElementById("seta-direita");

    // ? ----- ----- Evento Listener para a flecha direita. ----- -----
    setaDireita.addEventListener("click", () => {
      fila.scrollLeft += fila.offsetWidth;

      const indicadorActivo = document.querySelector(".indicadores .activo");
      if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
      }
    });

    // ? ----- ----- Evento Listener para a flecha esquerda. ----- -----
    setaEsquerda.addEventListener("click", () => {
      fila.scrollLeft -= fila.offsetWidth;

      const indicadorActivo = document.querySelector(".indicadores .activo");
      if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
      }
    });

    // ? ----- ----- Paginação----- -----
    const numeroPaginas = Math.ceil(cars.length / 3);
    for (let i = 0; i < numeroPaginas; i++) {
      const indicador = document.createElement("button");

      if (i === 0) {
        indicador.classList.add("activo");
      }

      document.querySelector(".indicadores").appendChild(indicador);
      indicador.addEventListener("click", (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document
          .querySelector(".indicadores .activo")
          .classList.remove("activo");
        e.target.classList.add("activo");
      });
    }

    // ? ----- ----- Hover ----- -----
    cars.forEach((car) => {
      car.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
          cars.forEach((car) => car.classList.remove("hover"));
          elemento.classList.add("hover");
        }, 300);
      });
    });

    fila.addEventListener("mouseleave", () => {
      cars.forEach((car) => car.classList.remove("hover"));
    });

    const slides = document.querySelectorAll('[data-js="carousel__item"');
    const nextButton = document.querySelector(".carousel__button--next");
    const prevButton = document.querySelector(".carousel__button--prev");

    const lastSlideIndex = slides.length - 1;
    let currentSlideIndex = 0;

    const manipulateSlidesClasses = (correctSlideIndex) => {
      slides.forEach((slide) =>
        slide.classList.remove("carousel__item--visible")
      );
      slides[correctSlideIndex].classList.add("carousel__item--visible");
    };

    nextButton.addEventListener("click", () => {
      const correctSlideIndex =
        currentSlideIndex === lastSlideIndex
          ? (currentSlideIndex = 0)
          : ++currentSlideIndex;

      manipulateSlidesClasses(correctSlideIndex);
    });

    prevButton.addEventListener("click", () => {
      const correctSlideIndex =
        currentSlideIndex === 0
          ? (currentSlideIndex = lastSlideIndex)
          : --currentSlideIndex;

      manipulateSlidesClasses(correctSlideIndex);

      slides[correctSlideIndex].classList.add("carousel__item--visible");
    });

    // ***********************************
  },
};

export default Detalhes;
