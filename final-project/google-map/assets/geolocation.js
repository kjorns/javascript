var elMap = document.getElementById('location');
var msg = 'Sorry, We Could Not Find Your Location.';

if (Modernizr.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.innerHTML = '<h2>Checking Location</h2>';
} else {
  elMap.textContent = msg;
}

function success(position) {
  msg = '<h3>Longitude:<br>';
  msg += position.coords.longitude + '</h3>';
  msg += '<h3>Latitude:<br>';
  msg += position.coords.latitude + '</h3>';
  elMap.innerHTML = msg;

  buildGoogleMap(position.coords.latitude, position.coords.longitude);
}

function fail(msg) {
  elMap.textContent = msg;
  console.log(msg.code);
}


function buildGoogleMap(lat, lon) {

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
          lat: lat,
          lng: lon
      },
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      zoom: 18
    });

    var marker = new google.maps.Marker({
        position: {
            lat: lat,
            lng: lon
        },
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "img/pin.png"
    });

    var infowindow = new google.maps.InfoWindow({
        content: "YOUR LOCATION"
    });
    infowindow.open(map, marker);


}