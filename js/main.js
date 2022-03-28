const likeHeartButton = document.querySelectorAll(".like-heart");
likeHeartButton.forEach((likeHeartButton) => {
  likeHeartButton.addEventListener("click", () => {
    likeHeartButton.classList.toggle("clicked");
  });
});

// var likeHeartButton = document.querySelectorAll(".like-heart");
// likeHeartButton.addEventListener("click", function (event) {
//   likeHeartButton.classList.toggle("clicked");

// likeHeartButton.addEventListener("click", function (event) {
// console.log((event.target.style.fill = "red"));
// });

var categorySlider = new Swiper('.category-slider', {
  // loop: true,

  navigation: {
    nextEl: '.category-slider__button--next',
    prevEl: '.category-slider__button--prev'
  },
  // effect: "flip",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoHight: false,
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 10,
  // slidesPerColumnFill: row,
  breakpoints: {
    1201: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
    768: {
      spaceBetween: 26,
    },
  },
});

var unreleasedSlider = new Swiper('.unreleased-slider', {
  loop: true,

  navigation: {
    nextEl: '.unreleased-slider__button--next',
    prevEl: '.unreleased-slider__button--prev'
  },
  // effect: "flip",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 41,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});