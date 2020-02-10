// getting the Dom elements
const menuToggle = document.querySelector(".menu-toggle"); // hamburger-menu
const toggleBody = document.querySelector(".toggle-body"); // menu-bar
const toggleIcon = document.querySelector(".toggler"); // central-hamburger-line
const sliderLeft = document.querySelector(".slider-left");
const sliderRight = document.querySelector(".slider-right");
const sliderImage = document.querySelector(".slider-image");
const aboutColumns = document.querySelector('.about-cols');
const servicesList = document.querySelector('.services-list');


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
const appear = () => {
 let aboutToTop = aboutColumns.getBoundingClientRect().top;
 let servicesToTop = servicesList.getBoundingClientRect().top;
 let screenHeight = window.innerHeight;

 if(aboutToTop < (screenHeight / 1.3)){
   aboutColumns.style.opacity = '1' ;
   aboutColumns.style.transform = 'translateY(0px)' ;
 };
 if(servicesToTop < (screenHeight / 1.3)){
   servicesList.style.opacity = '1';
   servicesList.style.transform = 'translateY(0px)';
 }
};
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
window.addEventListener('scroll', appear);
sliderLeft.addEventListener("click", leftSlide);
sliderRight.addEventListener("click", rightSlide);
menuToggle.addEventListener("click", toggle);

const slideLoader = setInterval(rightSlide,100);
const slideLoaderStop = setTimeout(() => clearInterval(slideLoader), 1100);
const slideLoop = setInterval(rightSlide,2000);
 