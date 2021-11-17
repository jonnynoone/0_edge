let loc;
let map;
let marker;

function initMap() {
  loc = { lat: 51.6, lng: 0 };
  
  map = new google.maps.Map(document.querySelector(".map"), {
    center: loc,
    zoom: 12,
  });

  marker = new google.maps.Marker({ position: loc, map: map });
}