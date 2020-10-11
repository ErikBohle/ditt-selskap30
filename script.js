
/*TOGGLE RESPONSIVE NAVIGATION*/

function toggleNavigation() {
    let menu = document.getElementById("nav");
    if (menu.className === "navbar") {
      menu.className += " responsive";
    } else {
      menu.className = "navbar";
    }
  }

