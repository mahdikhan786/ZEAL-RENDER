// getting the Dom elements
const menuToggle = document.querySelector(".menu-toggle"); // hamburger-menu
const toggleBody = document.querySelector(".toggle-body"); // menu-bar
const toggleIcon = document.querySelector(".toggler"); // central-hamburger-line
const aboutColumns = document.querySelector('.about-cols');
const servicesList = document.querySelector('.services-list');
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const imgSlide = document.querySelector(".img-slide");
const sliderImages = document.querySelectorAll(".slide-img");


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
let slideImagesCount = sliderImages.length - 1;
let sliderCount = 0;
let currentImgWidth = sliderImages[sliderCount].offsetWidth;




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
// to right
const leftSlide = () => {
  // (>) button
  
  if (sliderCount < slideImagesCount) {
    imgSlide.style.transform = `translateX(-${currentImgWidth +
      currentImgWidth * sliderCount}px)`;
    sliderCount++;
  } else if (sliderCount == slideImagesCount) {
    sliderCount = 0;
    imgSlide.style.transform = `translateX(0px)`;
  }
};
// to left 
const rightSlide = () => {
  // (<) button

  if (sliderCount > 0) {
    imgSlide.style.transform = `translateX(-${currentImgWidth * sliderCount -
      currentImgWidth}px)`;
    sliderCount--;
  } else if (sliderCount == 0) {
    sliderCount = slideImagesCount;
    console.log(sliderCount);
    imgSlide.style.transform = `translateX(-${currentImgWidth *
      sliderCount}px)`;
  }
};
//automatic slider
let automaticSlider = setInterval(leftSlide,2000);
//slider stop
let stopSlider = () => clearInterval(automaticSlider);

//adding event listeners
window.addEventListener('scroll', appear);
menuToggle.addEventListener("click", toggle);
leftBtn.addEventListener("click", rightSlide);
rightBtn.addEventListener("click", leftSlide);
leftBtn.addEventListener("click", stopSlider);
rightBtn.addEventListener("click", stopSlider);






 