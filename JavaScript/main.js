// JavaScript to handle the toggle of the mobile menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open'); // Toggle the 'open' class to show/hide the menu
});


document.addEventListener('contextmenu',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('copy',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('cut',function(e){e.preventDefault();e.stopPropagation();});



// footer send to social media
// Get the social media icons by their IDs
const linkedinIcon = document.getElementById('linkedin');
const instagramIcon = document.getElementById('instagram');
const youtubeIcon = document.getElementById('youtube');

// Add click event listeners to each icon
linkedinIcon.addEventListener('click', function() {
    window.open('https://nl.linkedin.com/in/mariska-vlieger-81a6a1289', '_blank');
});

instagramIcon.addEventListener('click', function() {
    window.open('https://www.instagram.com/vlieger.design/', '_blank');
});

youtubeIcon.addEventListener('click', function() {
    window.open('https://www.youtube.com/channel/UCkBujahqoOjrl2SGH-X4w8A', '_blank');
});
