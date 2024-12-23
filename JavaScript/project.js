// ------------------------------carousel js--------------------------//

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".img-gallery");
const track = document.querySelector(".gallery");
let width = carousel.offsetWidth;
let index = 0;
let step = 600;


window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});


next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -step + "px)";
  
  if (carousel.scrollWidth <=  width) {
    next.classList.add("hide");
  }
});

prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -step + "px)";
});

//-----------------------------nav bar sticky--------------------------------------------//


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-bar");
var elment = document.getElementById("BG")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
navbar.classList.add("sticky");


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  var elmentLocation = elment.getBoundingClientRect();
  var navBarLocation = navbar.getBoundingClientRect();
  
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  console.log(navBarLocation.bottom);

  // if ((elmentLocation.top) <= navBarLocation.bottom){
    
    navbar.style.backgroundImage = "none";
    navbar.style.backgroundColor = "#000000";
  // } else {
  //   navbar.style.backgroundColor = "rgba(0,0,0,0)";
  //   navbar.style.backgroundImage = "url('../Content/images.jpg')";
  //   navbar.style.backgroundPosition = "center";
  //   navbar.style.backgroundRepeat = "no-repeat";
  //   navbar.style.backgroundSize = "cover";
  //   navbar.style.backgroundAttachment = "fixed";
  // }
} 

//animation sliding
let oberserving = 0;
let oberserving2 = 0;
let oberserving3 = 0;



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

const startAnimation3 = (entries, observer3) => {
  if (oberserving3 == 0){
    entries.forEach(entry => {
      entry.target.classList.toggle("box-animation", entry.isIntersecting);
      if (entry.isIntersecting){
        oberserving3 = 1;
      }
      
        
    });
  };
};


const observer = new IntersectionObserver(startAnimation);
const observer2 = new IntersectionObserver(startAnimation2);
const observer3 = new IntersectionObserver(startAnimation3);

const options = { root: null, rootMargin: '0px', threshold: 1 }; 
const options2 = { root: null, rootMargin: '0px', threshold: 1 };
const options3 = { root: null, rootMargin: '0px', threshold: 1 };
const elements = document.querySelectorAll('.content-box-1');
const elements2 = document.querySelectorAll('.content-box-2');
const elements3 = document.querySelectorAll('.imgages');




elements.forEach(el => {
  observer.observe(el, options);
});

elements2.forEach(el2 => {
  observer2.observe(el2, options2);
});


elements3.forEach(el3 => {
  observer3.observe(el3, options3);
});


