// getting the Dom elements
const menuToggle = document.querySelector(".menu-toggle"); // hamburger-menu
const toggleBody = document.querySelector(".toggle-body"); // menu-bar
const toggleIcon = document.querySelector(".toggler"); // central-hamburger-line
const sliderLeft = document.querySelector(".slider-left");
const sliderRight = document.querySelector(".slider-right");
const sliderImage = document.querySelector(".slider-image");

// toggling the class name for css animation
const toggle = () => {
  toggleBody.classList.toggle("display-none");
  toggleIcon.classList.toggle("rotate");
};

// global variables
//image array size : 500 px x 300 px
const sliderImageArray = [
  "./resources/housefront1.jpg",
  "./resources/housefront2.jpg",
  "./resources/housefront3.jpg",
  "./resources/bathroom.jpg",
  "./resources/bedroom.jpg",
  "./resources/bedroom2.jpg",
  "./resources/bedroom3.jpg",
  "./resources/kitchen.jpg",
  "./resources/kitchen2.jpg",
  "./resources/office.jpg"
];
//slider number
let sliderImageNumber = 0;

//functions
const leftSlide = () => {
  sliderImage.classList.add("transition-left");
  setTimeout(() => {
    sliderImage.classList.remove("transition-left");
  }, 150);
  setTimeout(() => {
    if (sliderImageNumber > 0) {
      sliderImageNumber--;
      console.log(`slide Number : ${sliderImageNumber}`);
      sliderImage.setAttribute("src", sliderImageArray[sliderImageNumber]);
    } else {
      sliderImageNumber = sliderImageArray.length - 1;
      console.log(`slide Number : ${sliderImageNumber}`);
      sliderImage.setAttribute("src", sliderImageArray[sliderImageNumber]);
    }
  }, 100);
};

const rightSlide = () => {
  sliderImage.classList.add("transition-right");
  setTimeout(() => {
    sliderImage.classList.remove("transition-right");
  }, 150);
  setTimeout(() => {
    if (sliderImageNumber < sliderImageArray.length - 1) {
      sliderImageNumber++;
      console.log(`slide Number : ${sliderImageNumber}`);
      sliderImage.setAttribute("src", sliderImageArray[sliderImageNumber]);
    } else {
      sliderImageNumber = 0;
      console.log(`slide Number : ${sliderImageNumber}`);
      sliderImage.setAttribute("src", sliderImageArray[sliderImageNumber]);
    }
  }, 100);
};
//adding event listeners
sliderLeft.addEventListener("click", leftSlide);
sliderRight.addEventListener("click", rightSlide);
menuToggle.addEventListener("click", toggle);

setInterval(() => {
    sliderImage.classList.add("transition-right");
    setTimeout(() => {
      sliderImage.classList.remove("transition-right");
    }, 150);
    setTimeout(() => {
      if (sliderImageNumber < sliderImageArray.length - 1) {
        sliderImageNumber++;
        console.log(`slide Number : ${sliderImageNumber}`);
        sliderImage.setAttribute("src", sliderImageArray[sliderImageNumber]);
      } else {
        sliderImageNumber = 0;
        console.log(`slide Number : ${sliderImageNumber}`);
        sliderImage.setAttribute("src", sliderImageArray[sliderImageNumber]);
      }
    }, 100);
  },2500)