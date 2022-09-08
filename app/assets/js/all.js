var swiper = new Swiper(".artistSwiper", {
    cssMode: true,
    centeredSlides: true,

    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        // clickableClass: '.swiper-slide',

    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        // 992: {
        //     slidesPerView: 2,
        //     spaceBetween: 24,
        //   },
        1200: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        
    },
});