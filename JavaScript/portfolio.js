// ------------------------------carousel js--------------------------//

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".img-gallery");
const track = document.querySelector(".gallery");
let width = carousel.offsetWidth;
let index = 0;
let step = 600;


// Adjust carousel step size for mobile screens
window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
  step = width < 600 ? width / 2 : 600; // Adapt step size for smaller screens
});




// window.addEventListener("resize", function () {
//   width = carousel.offsetWidth;
// });

//-----------------------------nav bar sticky--------------------------------------------//


// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
myFunction();
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "#000000";   
    navbar.style.backgroundPosition = "center";
    navbar.style.backgroundRepeat = "no-repeat";
    navbar.style.backgroundSize = "cover";
    navbar.style.backgroundAttachment = "fixed";
  }

//animation sliding
let oberserving = 0;
let oberserving2 = 0;



const startAnimation = (entries, observer) => {
  if (oberserving == 0){
    entries.forEach(entry => {
      entry.target.classList.toggle("box-animation", entry.isIntersecting);
      if (entry.isIntersecting){
        oberserving = 1;

      }
    });
  };
};

const startAnimation2 = (entries, observer2) => {
  if (oberserving2 == 0){
    entries.forEach(entry => {
      entry.target.classList.toggle("box-animation", entry.isIntersecting);
      if (entry.isIntersecting){
        oberserving2 = 1;
      }
      
        
    });
  };
};
const observer = new IntersectionObserver(startAnimation);
const observer2 = new IntersectionObserver(startAnimation2);
const options = { root: null, rootMargin: '0px', threshold: 1 }; 
const options2 = { root: null, rootMargin: '0px', threshold: 1 };
const elements = document.querySelectorAll('.content-box-1');
const elements2 = document.querySelectorAll('.content-box-2');


elements.forEach(el => {
  observer.observe(el, options);
});

elements2.forEach(el2 => {
  observer2.observe(el2, options2);
});




