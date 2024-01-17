$("#arrowDown").on("click", function () {
  $("body, html")
    .stop()
    .animate(
      {
        scrollTop: $(".accesorio__home").offset().top,
      },
      1000
    );
});

$(".raquetas__home_right").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  center: false,
  merge: false,
  stagePadding: 40,
  dots: true,
  autoplayHoverPause: true,
  autoWidth: true,
  nav: true,
  navText: [
    "<img src='../images/arrowslider_right.svg'>",
    "<img src='../images/arrowslider_left.svg'>",
  ],
  items: 4,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});

const btnMenuResponsive = document.querySelector(".bar__menu_mobile");
const menuResponsive = document.querySelector(".menu__responsive");
const body = document.querySelector("BODY");

btnMenuResponsive.addEventListener("click", () => {
  if (menuResponsive.classList.contains("active")) {
    menuResponsive.classList.remove("active");
  } else {
    menuResponsive.classList.add("active");
  }
});
