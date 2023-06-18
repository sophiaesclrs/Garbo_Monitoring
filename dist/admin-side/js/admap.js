//map starts
var map = L.map('map').setView([8.2240, 124.2460], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a style="text-decoration:none; font-weight: 600; color: #137413; font-size: 12px;" href="http://www.openstreetmap.org/copyright">Garbo Monitoring</a>'
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

let circle, marker;

function success(pos){
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const accuracy = pos.coords.accuracy;

  if(marker){
    map.removeLayer(marker);
    map.removeLayer(circle);
  }

  marker = L.marker([lat, lng]).addTo(map);
  circle = L.circle([lat, lng], {radius: accuracy}).addTo(map);

  map.fitBounds(circle.getBounds());
}

function error(err){
  if(err.code === 1){
    alert("Please allow geolocation access");
  }else{
    alert("Cannot get current location");
  }
}

//map ends