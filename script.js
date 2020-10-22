/** Geolocation API */

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.911, lng: 10.757 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent("Du er her");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Feil: Geolokasjon fungerer ikke "
      : "Feil: Nettleseren støtter ikke geolokasjon"
  );
  infoWindow.open(map);
}

function showMap(position) {
  // Show a map centered at (position.coords.latitude, position.coords.longitude).
}

// One-shot position request.
navigator.geolocation.getCurrentPosition(showMap);
/*TOGGLE RESPONSIVE NAVIGATION*/

function toggleNavigation() {
    let menu = document.getElementById("nav");
    let icon = document.querySelector(".material-icons")
    if (menu.className === "navbar") {
      menu.className += " responsive";
    
      icon.textContent = "close";
    } else {
      menu.className = "navbar";
      icon.textContent = "menu";
    }
  }
  //only runs on /index.html
  if(window.location.pathname == '/index') {
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
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 4000); //(carousel, x)  X Changes image every 4 seconds
}}
