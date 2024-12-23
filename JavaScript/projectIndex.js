// Get the navbar
var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;
navbar.classList.add("sticky");
navbar.style.backgroundColor = "#000000"; 

//add text when hover
// var imagesText = document.getElementsByClassName("galleryText");
// var getImages = document.getElementsByClassName("galleryImg");
// var minImgWidth =  getImages[0].offsetWidth
// const delayInMilliseconds = 50;


// for (let i = 0; i< getImages.length; i++) {

//   getImages[i].onmouseover = function fadeIn() {  
//     var opacity = 0;
//     var percentage = minImgWidth/100 * 200;
//     var size = getImages[i].offsetWidth

//     console.log(percentage)

//     var intervalID = setInterval(function() { 
    
         
//         if (opacity < 1) { 
//             imagesText[i].style.visibility = "visible"
//             opacity = opacity + 0.1 
//             imagesText[i].style.opacity = opacity; 
//         } 
//         if (size <= percentage ) { 
//           size = size + 40;
//             getImages[i].style.width = size+ "px" ; 
//         } 

//         if  (opacity >=0 && size > percentage ){ 
//           clearInterval(intervalID);      
//         } 

//     }, delayInMilliseconds); 
//   }  
// };

// for (let i = 0; i< getImages.length; i++) {
//   getImages[i].onmouseleave = function fadeOut () {  
//     var opacity = 1;
//     var percentage = minImgWidth;
//     var size = getImages[i].offsetWidth

//     var intervalID = setInterval(function() { 
//         if (opacity >0) { 
//             opacity = opacity - 0.1 
//             imagesText[i].style.opacity = opacity; 
//         } else { 
//             imagesText[i].style.visibility = "hidden"
//         } 

//         if (size >= percentage ) { 
//           size = size - 40;
//             getImages[i].style.width = size+ "px" ; 
//         } 
        
//         if  (opacity <=0 && size < percentage ){ 
//             clearInterval(intervalID);      
//         } 
//     }, delayInMilliseconds); 
    
//   } 
// };



// Get the navbar
var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;
navbar.classList.add("sticky");
navbar.style.backgroundColor = "#000000";

// Variables
var imagesText = document.getElementsByClassName("galleryText");
var getImages = document.getElementsByClassName("galleryImg");
var minImgWidth = getImages[0].offsetWidth;
const delayInMilliseconds = 50;

// Function to fade in text and grow the image
function fadeIn(element, index) {
  var opacity = 0;
  var percentage = minImgWidth / 100 * 200;
  var size = element.offsetWidth;

  var intervalID = setInterval(function() {
    if (opacity < 1) {
      imagesText[index].style.visibility = "visible";
      opacity = opacity + 0.1;
      imagesText[index].style.opacity = opacity;
    }
    if (size <= percentage) {
      size = size + 40;
      element.style.width = size + "px";
    }
    if (opacity >= 1 && size > percentage) {
      clearInterval(intervalID);
    }
  }, delayInMilliseconds);
}

// Function to fade out text and shrink the image
function fadeOut(element, index) {
  var opacity = 1;
  var percentage = minImgWidth;
  var size = element.offsetWidth;

  var intervalID = setInterval(function() {
    if (opacity > 0) {
      opacity = opacity - 0.1;
      imagesText[index].style.opacity = opacity;
    } else {
      imagesText[index].style.visibility = "hidden";
    }
    if (size >= percentage) {
      size = size - 40;
      element.style.width = size + "px";
    }
    if (opacity <= 0 && size < percentage) {
      clearInterval(intervalID);
    }
  }, delayInMilliseconds);
}

// Intersection Observer to detect when images come into view
const observerOptions = {
  root: null, // Default is viewport
  rootMargin: '0px',
  threshold: 0.5 // Trigger when 50% of the image is in view
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    let index = Array.from(getImages).indexOf(entry.target);
    
    if (entry.isIntersecting) {
      // When the image comes into view, trigger fadeIn
      fadeIn(entry.target, index);
    } else {
      // When the image goes out of view, trigger fadeOut
      fadeOut(entry.target, index);
    }
  });
}, observerOptions);

// Observe each image
for (let i = 0; i < getImages.length; i++) {
  observer.observe(getImages[i]);
}


//make backgrouund

document.querySelectorAll('.BGgallery').forEach(gallery => {
  const img = gallery.querySelector('.galleryImg');
  if (img) {
      // Dynamically set the background image URL for the ::before pseudo-element
      gallery.style.setProperty('--bg-image', `url(${img.src})`);
  }
});


























// // Get the navbar
// var navbar = document.getElementById("nav-bar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;
// myFunction();
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     navbar.classList.add("sticky");
//     navbar.style.backgroundColor = "#0d0d0d";   
//     navbar.style.backgroundPosition = "center";
//     navbar.style.backgroundRepeat = "no-repeat";
//     navbar.style.backgroundSize = "cover";
//     navbar.style.backgroundAttachment = "fixed";
//   }

// // start animation
// let oberserving = 0;
// const startAnimation = (entries, observer) => {
//       entries.forEach(entry => {
//         entry.target.classList.toggle("animate-Scroll", entry.isIntersecting);
    
//       });
//   };
// const observer = new IntersectionObserver(startAnimation);
// const options = { root: null, rootMargin: '0px', threshold: 1 }; 
// const elements = document.querySelectorAll('.alignRight');
   
// elements.forEach(el => {
//     observer.observe(el, options);
// });


// //add text when hover
// var imagesText = document.getElementsByClassName("galleryText");
// var getImages = document.getElementsByClassName("galleryImg")
// var delayInMilliseconds = 1500;

// var delayOpacity = 100;

// for (let i = 0; i< getImages.length; i++){
//   getImages[i].onmouseover = function showImageText(){
//       setTimeout(function() {
//         imagesText[i].style.visibility = "visible";
//       }, delayOpacity);
//     };

//   getImages[i].onmouseleave = function hideImageText(){
//     setTimeout(function() {
//       imagesText[i].style.visibility = "hidden";
//       // if (getImages[i].onmouseover){
//       //   showImageText()
//       // }
//     }, delayInMilliseconds);
//   };
// };
