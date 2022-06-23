const carouselContainer = document.querySelector(".carousel-container");
    const listImageArea = carouselContainer.querySelector('.next-list');
    const listOfImages = document.querySelector("image-of-list");
    const currentImage = carouselContainer.querySelector(".current-image");
    const arrowPrev = carouselContainer.querySelector(".arrow-prev");
    const arrowNext = carouselContainer.querySelector(".arrow-next");

    function goToRight() {
      let current = listImageArea.querySelector(".current-image-list");
      current.parentElement.nextElementSibling.children[0].classList.add(
        "current-image-list");
      current.classList.remove("current-image-list");
      current = listImageArea.querySelector(".current-image-list");
      listImageArea.scrollRight = current.offsetRight;
      currentImage.attributes.src.value = current.attributes.src.value;
    }

    function goToLeft() {
      let current = listImageArea.querySelector(".current-image-list");
      current.parentElement.previousElementSibling.children[0].classList.add(
        "current-image-list"
      );
      current.classList.remove("current-image-list");
      current = listImageArea.querySelector(".current-image-list");
      listImageArea.scrollLeft = current.offsetLeft;
      currentImage.attributes.src.value = current.attributes.src.value;
    }

    function changeCurrentImage() {
      currentImage.attributes.src.value = this.attributes.src.value;
      listOfImages.forEach((image) =>
        image.classList.remove("current-image-list")
      );
      this.classList.add("current-image-list");
    }

    arrowPrev.addEventListener("click", goToLeft);
    arrowNext.addEventListener("click", goToRight);
    listOfImages.forEach((image) =>
      image.addEventListener("click", changeCurrentImage)
    );