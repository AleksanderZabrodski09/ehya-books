var likeHeartButton = document.querySelector(".like-heart");
  likeHeartButton.addEventListener("click", function (event) {
  this.classList.toggle("clicked");
        // likeHeartButton.addEventListener("click", function (event) {
        // console.log((event.target.style.fill = "red"));
  });

var categorySlider = new Swiper('.category-slider', {
    loop: true,

  navigation: {
    nextEl: '.category-slider__button--next',
    prevEl: '.category-slider__button--prev'
  },
  // effect: "flip",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  slidesPerView: 4,
  spaceBetween: 26,
});
  
  