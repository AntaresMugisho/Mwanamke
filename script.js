// console.log("Working just fine?");

// animation on nav
let navNar = document.querySelector(".navBar");
// window.addEventListener("scroll", () => {
//   scrollY > 10 ? console.log("scrolling down") : console.log("scrolling up");
// });

function Carousel(carousel) {
  // checking if the true slider is passed in
  if (!(carousel instanceof Element)) {
    throw new Error("Aucun slider images est trouvé");
  }

  // global variable for working with slider
  let current;
  let prev;
  let next;

  // selecting needed element of the slider
  const slides = carousel.querySelector(".slides");
  const prevButton = carousel.querySelector(".prevControl");
  const nextButton = carousel.querySelector(".nextControl");
  //   console.log(nextButton);

  function startingCarousel() {
    current = carousel.querySelector(".current") || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
  }

  function aplyClasses() {
    current.classList.add("current");
    prev.classList.add("prev");
    next.classList.add("next");
  }

  function move(direction) {
    // removing old classes
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === "back") {
      // making and destrucuring new array witj new values
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }

    aplyClasses();
  }

  //   starting the slide avec having one
  startingCarousel();
  aplyClasses();

  //   biding event to btns
  prevButton.addEventListener("click", () => move("back"));
  nextButton.addEventListener("click", move);

  setInterval(() => {
    move();
  }, 4000);
}

const heroImagesCarousel = Carousel(document.querySelector(".hero-carousel"));
const hero4magesCarousel = Carousel(document.querySelector(".hero4-carousel"));

const imgWraps = document.querySelectorAll(".img-wrapp");
imgWraps.forEach((wrap) => {
  wrap.classList.add("bgImage-wrap");

  let img = wrap.querySelector("img");
  img.classList.add("opacity-0");

  function loaded() {
    wrap.classList.remove("bgImage-wrap");
    if (img.classList.contains("opacity-0")) {
      img.classList.remove("opacity-0");
      img.classList.add("opacity-1");
    } else {
      img.classList.add("opacity-1");
    }
    // console.log(" LOADED");
  }

  //   asyn action
  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }

  //   console.log("loading");
});

// menu mobile
const hambu = document.querySelector(".hamburger");

// handle click hamburger
function handleClickHambu() {
  let menu = document.querySelector(".bg-menu-mobile");
  let open = hambu.querySelector(".menu-open");
  let close = hambu.querySelector(".menu-close");
  close.classList.toggle("hidden");
  open.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full");
  document.body.classList.toggle("overflow-hidden");
}

hambu.addEventListener("click", handleClickHambu);
