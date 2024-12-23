//-----------------------------nav bar sticky--------------------------------------------//
var navbar = document.getElementById("nav-bar");
var elment = document.getElementById("BG")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
navbar.classList.add("sticky");

window.onscroll = function backgroundToggle() {
  var elmentLocation = elment.getBoundingClientRect();
  var navBarLocation = navbar.getBoundingClientRect();

  if ((elmentLocation.top) <= navBarLocation.bottom){
    navbar.style.backgroundImage = "none";
    navbar.style.backgroundColor = "#000000";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    navbar.style.backgroundImage = "url('../Content/Buitenhuis_interieur 1.png')";
    
  }
};

//-----------------------------animations--------------------------------------------//
let observingStatus = { box1: 0, box2: 0 };

const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    const boxClass = entry.target.classList.contains('box-1') ? 'box1' : 'box2';
    
    if (observingStatus[boxClass] === 0) {
      entry.target.classList.toggle("box-animation", entry.isIntersecting);
      
      if (entry.isIntersecting) {
        observingStatus[boxClass] = 1;
      }
    }
  });
};

const observer = new IntersectionObserver(startAnimation, {
});

const elements = document.querySelectorAll('.box-1, .box-2');

elements.forEach(el => observer.observe(el));




