// Get the navbar
var navbar = document.getElementById("nav-bar");


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
