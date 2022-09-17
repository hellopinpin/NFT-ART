"use strict";

var swiper = new Swiper(".artistSwiper", {
  cssMode: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    // type: "bullets",
    clickable: true // clickableClass: '.swiper-slide',

  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24
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
});
//# sourceMappingURL=all.js.map
