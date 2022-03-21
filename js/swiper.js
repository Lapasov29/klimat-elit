const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true
    },
});