const PARALLAX = document.getElementById("parallax");
const NAVBAR_ELEMS = ["home-btn","about-btn","portfolio-btn","resume-btn"];
const NAVBAR_LI = ["home-li","about-li","portfolio-li","resume-li"];

window.addEventListener("scroll",function() {
    let offset = window.pageYOffset;
    PARALLAX.style.backgroundPositionY = offset * 0.7 + "px";
});


function cleanHomeButtonToName(x) {
  document.getElementById("home-btn").innerHTML = "Tiago Taquelim";
  document.getElementById( "home-li" ).classList.add("remove-hr");
  document.getElementById( "home-btn" ).classList.remove("active");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;


// Make sure the navbar gets a right position on start when there is no scrolling event.
window.onload = function(){
  /*
  // MEDIA QUERIES

  var x = window.matchMedia("(max-width: 600px)");
  cleanHomeButtonToName(x); // Call listener function at run time
  x.addListener(cleanHomeButtonToName); // Attach listener function on state changes

  if(x.matches){
    cleanHomeButtonToName(x); // Call listener function at run time
    x.addListener(cleanHomeButtonToName); // Attach listener function on state changes
    console.log("a")
  }

  */
  var currentScrollPos = window.pageYOffset;

  if( currentScrollPos >= 0 && currentScrollPos <= 800){
    document.getElementById("home-btn").classList.add("active");
    removeColorsOthers("home-btn");
    manageHr("home-li");
  } else {
    document.getElementById("home-btn").classList.remove("active");
    document.getElementById("home-li").classList.add("remove-hr");
  }
};


window.onscroll = function() {
  var currentScrollPos = window.pageYOffset
  //TODO -  Replace that with document.documentElement.scrollTop - document.documentElement.scrollHeight
  var currentY =  document.documentElement.scrollTop ;
  /*
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  */
  prevScrollpos = currentScrollPos;


  // Mark the navbar buttons on the right page section
  // <!-- Home -->
  if( currentScrollPos >= 0 && currentScrollPos <= 800){
    document.getElementById("home-btn").classList.add("active");
    removeColorsOthers("home-btn");
    manageHr("home-li");
  } else {
    document.getElementById("home-btn").classList.remove("active");
    document.getElementById("home-li").classList.add("remove-hr");
  }

  // <!-- About -->
  if( currentScrollPos >= 800 && currentScrollPos <= 1500){
    document.getElementById("about-btn").classList.add("active");
    removeColorsOthers("about-btn");
    manageHr("about-li");
  } else {
    document.getElementById("about-btn").classList.remove("active");
    document.getElementById("about-li").classList.add("remove-hr");
  }

  // <!-- Portfolio -->
  if( currentScrollPos >= 1500 && currentScrollPos <= 3000){
    document.getElementById("portfolio-btn").classList.add("active");
    removeColorsOthers("portfolio-btn");
    manageHr("portfolio-li");
  } else {
    document.getElementById("portfolio-btn").classList.remove("active");
    document.getElementById("portfolio-li").classList.add("remove-hr");
  }

  // <!-- Resume -->
  if( currentScrollPos >= 3000 && currentScrollPos <= 4715){
    document.getElementById("resume-btn").classList.add("active");
    removeColorsOthers("resume-btn");
    manageHr("resume-li");
  } else {
    document.getElementById("resume-btn").classList.remove("active");
    document.getElementById("resume-li").classList.add("remove-hr");
  }
  
  // console.log(currentY);
};


function removeColorsOthers(active) {
  for(let i=0; i < NAVBAR_ELEMS.length; i++){
    if( NAVBAR_ELEMS[i] !== active){
      document.getElementById( NAVBAR_ELEMS[i] ).classList.remove("active");
    }
  }
}

function manageHr(active)  {
  document.getElementById( active ).classList.remove("remove-hr");

  for(let i=0; i < NAVBAR_LI.length; i++){
    if( NAVBAR_LI[i] !== active){
      document.getElementById( NAVBAR_LI[i] ).classList.add("remove-hr");
    }
  }
}
