/* ======================================================
                    STICKY HEADER
====================================================== */

window.addEventListener("scroll", function () {
  const header = document.querySelector(".topbar");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ======================================================
                TESTIMONIAL SWIPER
====================================================== */

new Swiper(".mySwiper", {

  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 25,
  speed: 600,
  watchSlidesProgress: true,
  slideToClickedSlide: true,
  allowTouchMove: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});

/* ======================================================
                        AOS
====================================================== */

AOS.init({
  duration: 1000,
  once: true,
});