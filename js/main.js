// Custom scripts
// Мобильное меню бургер
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const body = document.querySelector("body")
function burgerMenu() {
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active")
      burger.classList.add("active")
      body.classList.add("locked")
    } else {
      menu.classList.remove("active")
      burger.classList.remove("active")
      body.classList.remove("locked")
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active")
      burger.classList.remove("active-burger")
      body.classList.remove("locked")
    }
  })
}
burgerMenu()

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector("nav")

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed__nav")
  } else {
    nav.classList.remove("fixed__nav")
  }
}
window.addEventListener("scroll", fixedNav)

//Прокрутка
const menuLinks = document.querySelectorAll(".menu__item-link[data-goto]")
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight

      if (menu.classList.contains("active")) {
        document.body.classList.remove("locked")
        menu.classList.remove("active")
        //menuBody.classList.remove("active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      })
      e.preventDefault()
    }
  }
}

const swiper = new Swiper(".impressive-swiper", {
  slidesPerView: 2.5,
  loop: true,
  spaceBetween: 30,

  navigation: {
    nextEl: ".impressive-slider-button-next",
    prevEl: ".impressive-slider-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    20: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    // when window width is >= 480px

    670: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    1440: {
      slidesPerView: 2.5,
    },
  },
})

const swiperClent = new Swiper(".client-swiper", {
  slidesPerView: 2.5,
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: ".client-swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,

  // And if we need scrollbar
  // scrollbar: {
  //    el: ".swiper-scrollbar",
  // },

  //   // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    20: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    // when window width is >= 480px

    670: {
      slidesPerView: 2.5,
      centeredSlides: true,
    },
  },
})
