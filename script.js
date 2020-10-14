
/*TOGGLE RESPONSIVE NAVIGATION*/

function toggleNavigation() {
    let menu = document.getElementById("nav");
    if (menu.className === "navbar") {
      menu.className += " responsive";
    } else {
      menu.className = "navbar";
    }
  }
// slider
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000); //(carousel, x)  X Changes image every 4 seconds
}
