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

     // Carousel of images
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

      let contador = document.querySelectorAll('.next-list li');
      contador.forEach((number, index) => console.log(parseInt(index, 10) + 1));
      let lista = document.querySelectorAll('.next-list li');

      // contador.forEach(number => listImageAreaa += `<li>${number}</li>`);
      console.log(lista.length);
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
  },
};

export default Detalhes;
