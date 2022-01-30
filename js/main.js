var likeHeartButton = document.querySelector(".like-heart");
likeHeartButton.addEventListener("click", function () {
  this.classList.toggle("clicked");
        // likeHeartButton.addEventListener("click", function (event) {
        // console.log((event.target.style.fill = "red"));
});

