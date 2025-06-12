
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',  // or 2 or 3
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        850: {
            slidesPerView: 1.4,
            centeredSlides: true
        },
        900: {
            slidesPerView: 1.5,
            spaceBetween: -5
        },
        1050: {
            slidesPerView: 2,
            spaceBetween: -5
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        2400: {
            slidesPerView: 4,
            spaceBetween: 10
        },
    }
});

/* Force Re-init Swiper on Resize */
window.addEventListener('resize', () => {
  swiper.update();
});

