import nav from "../../components/nav";
import footer from "../../components/footer";
import detalhesProduto from "../../components/detalhesProduto";

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

     // Carousel of images Seller
    const carouselContainer = document.querySelector(".carousel-container");
    const listImageArea = carouselContainer.querySelector('.next-list');
    const listOfImages = listImageArea.querySelectorAll('img');
    const currentImage = carouselContainer.querySelector(".current-image");
    const arrowPrev = carouselContainer.querySelector(".arrow-prev");
    const arrowNext = carouselContainer.querySelector(".arrow-next");

    function goToNextSlide() {      
      let current = listImageArea.querySelector(".current-image-list");
      current.parentElement.nextElementSibling.children[0].classList.add("current-image-list");
      current.classList.remove("current-image-list");
      current = listImageArea.querySelector(".current-image-list");
      listImageArea.scrollLeft  = current.offsetLeft ;
      currentImage.attributes.src.value = current.attributes.src.value;
    }
    arrowNext.addEventListener("click", goToNextSlide);

    function goToPrevSlide() {
      let current = listImageArea.querySelector(".current-image-list");
      current.parentElement.previousElementSibling.children[0].classList.add("current-image-list");
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
    listOfImages.forEach(image => image.addEventListener('click', changeCurrentImage));

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
