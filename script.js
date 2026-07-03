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

// Auto close navbar on mobile after clicking a nav link
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

      // Only on mobile
      if (window.innerWidth < 992) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
      }

    });
  });
});