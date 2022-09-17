"use strict";

var swiper = new Swiper(".artistSwiper", {
  // cssMode: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
  // simulateTouch: true,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 24 // simulateTouch: false,

    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});
var swiper = new Swiper(".otherArtworksSwiper", {
  // cssMode: true,
  // loop: true,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 24,
      slidesPerGroup: 2
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 4
    }
  }
});
$(document).ready(function () {
  $('.ranking-item-button').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('bg-warning');
    $(this).children('i').toggleClass('fa-plus').toggleClass('fa-minus');
  });
  $('.nav-searchBar-mobile-show').click(function (e) {
    e.preventDefault();
    $('.nav-searchBar-mobile').addClass('show');
  });
  $('.nav-searchBar-mobile-hide').click(function (e) {
    e.preventDefault();
    $('.nav-searchBar-mobile').removeClass('show');
  });
}); // var $grid = $('.masonry').imagesLoaded( function() {
//     // init Masonry after all images have loaded
//     // $grid.masonry({
//     //   // options...
//     // });
// });
//# sourceMappingURL=all.js.map
