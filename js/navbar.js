/* Toggle between adding and removing the "responsive" class to topnav 
when the user clicks on the icon */
function toggleNavbar() {
    var x = document.getElementById("topnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

// When the user scrolls the page, execute scrollSticky 
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  prevScrollpos = currentScrollPos;


  scrollSticky()


  // Mark the navbar buttons on the right page section
  // <!-- Home -->
  if( currentScrollPos >= 0 && currentScrollPos <= 800){
    document.getElementById("home-btn").classList.add("active");
    removeColorsOthers("home-btn");
    
  } else {
    document.getElementById("home-btn").classList.remove("active");
    document.getElementById("home-li").classList.add("remove-hr");
  }

  // <!-- About -->
  if( currentScrollPos >= 800 && currentScrollPos <= 1180){
    document.getElementById("about-btn").classList.add("active");
    removeColorsOthers("about-btn");
    
  } else {
    document.getElementById("about-btn").classList.remove("active");
    document.getElementById("about-li").classList.add("remove-hr");
  }

  // <!-- Portfolio -->
  if( currentScrollPos >= 1180 && currentScrollPos <= 2535){
    document.getElementById("portfolio-btn").classList.add("active");
    removeColorsOthers("portfolio-btn");
    
  } else {
    document.getElementById("portfolio-btn").classList.remove("active");
    document.getElementById("portfolio-li").classList.add("remove-hr");
  }

  // <!-- Resume -->
  if( currentScrollPos >= 2535 && currentScrollPos <= 4715){
    document.getElementById("resume-btn").classList.add("active");
    removeColorsOthers("resume-btn");
    
  } else {
    document.getElementById("resume-btn").classList.remove("active");
    document.getElementById("resume-li").classList.add("remove-hr");
  }
};

// Get the navbar
var navbar = document.getElementById("topnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop + 100;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollSticky() {
  const c = navbar.getElementsByTagName("a");

  if (window.pageYOffset > sticky) {
   navbar.classList.add("sticky");
   navbar.style.backgroundColor = "white";

   for(let i=0; i < c.length; i++){
    c[i].style.color = "#191919"
  }

  } else {
   navbar.classList.remove("sticky");
   navbar.style.backgroundColor = "transparent";
   
   // Change the color from white to blackish
   for(let i=0; i < c.length; i++){
     c[i].style.color = "#fff"
   }
  
  }
}

function removeColorsOthers(active) {
  for(let i=0; i < NAVBAR_ELEMS.length; i++){
    if( NAVBAR_ELEMS[i] !== active){
      document.getElementById( NAVBAR_ELEMS[i] ).classList.remove("active");
    }
  }
}
