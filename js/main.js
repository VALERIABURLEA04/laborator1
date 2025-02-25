<!-- Swiper.js CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

<script>
  var swiper = new Swiper(".instagram-slider", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          320: { slidesPerView: 1 }
      }
  });
</script>
