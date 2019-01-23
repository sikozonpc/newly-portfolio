const PARALLAX = document.getElementById("parallax");
const NAVBAR_ELEMS = ["home-btn","about-btn","portfolio-btn","resume-btn"];
const NAVBAR_LI = ["home-li","about-li","portfolio-li","resume-li"];

window.addEventListener("scroll",function() {
    let offset = window.pageYOffset;
    PARALLAX.style.backgroundPositionY = offset * 0.7 + "px";
});


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;



