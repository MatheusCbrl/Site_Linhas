// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map, infoWindow;
function initMap() {
 var map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: -29.1684796, lng: -51.1793861 },
  zoom: 13,
  styles: [
   { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
   { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
   { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
   {
     featureType: "administrative.locality",
     elementType: "labels.text.fill",
     stylers: [{ color: "#d59563" }]
   },
   {
     featureType: "poi",
     elementType: "labels.text.fill",
     stylers: [{ color: "#d59563" }]
   },
   {
     featureType: "poi.park",
     elementType: "geometry",
     stylers: [{ color: "#263c3f" }]
   },
   {
     featureType: "poi.park",
     elementType: "labels.text.fill",
     stylers: [{ color: "#6b9a76" }]
   },
   {
     featureType: "road",
     elementType: "geometry",
     stylers: [{ color: "#38414e" }]
   },
   {
     featureType: "road",
     elementType: "geometry.stroke",
     stylers: [{ color: "#212a37" }]
   },
   {
     featureType: "road",
     elementType: "labels.text.fill",
     stylers: [{ color: "#9ca5b3" }]
   },
   {
     featureType: "road.highway",
     elementType: "geometry",
     stylers: [{ color: "#746855" }]
   },
   {
     featureType: "road.highway",
     elementType: "geometry.stroke",
     stylers: [{ color: "#1f2835" }]
   },
   {
     featureType: "road.highway",
     elementType: "labels.text.fill",
     stylers: [{ color: "#f3d19c" }]
   },
   {
     featureType: "transit",
     elementType: "geometry",
     stylers: [{ color: "#2f3948" }]
   },
   {
     featureType: "transit.station",
     elementType: "labels.text.fill",
     stylers: [{ color: "#d59563" }]
   },
   {
     featureType: "water",
     elementType: "geometry",
     stylers: [{ color: "#17263c" }]
   },
   {
     featureType: "water",
     elementType: "labels.text.fill",
     stylers: [{ color: "#515c6d" }]
   },
   {
     featureType: "water",
     elementType: "labels.text.stroke",
     stylers: [{ color: "#17263c" }]
   }
 ]
 });
 infoWindow = new google.maps.InfoWindow;

 var card = document.getElementById('pac-card');
 var input = document.getElementById('pac-input');
 var types = document.getElementById('type-selector');
 var strictBounds = document.getElementById('strict-bounds-selector');

 map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

 var autocomplete = new google.maps.places.Autocomplete(input);

 // Bind the map's bounds (viewport) property to the autocomplete object,
 // so that the autocomplete requests use the current map bounds for the
 // bounds option in the request.
 autocomplete.bindTo('bounds', map);

 // Set the data fields to return when the user selects a place.
 autocomplete.setFields(
  ['address_components', 'geometry', 'icon', 'name']);

 var infowindow = new google.maps.InfoWindow();
 var infowindowContent = document.getElementById('infowindow-content');
 infowindow.setContent(infowindowContent);
 var marker = new google.maps.Marker({
  map: map,
  anchorPoint: new google.maps.Point(0, -29)
 });

 autocomplete.addListener('place_changed', function () {
  infowindow.close();
  marker.setVisible(false);
  var place = autocomplete.getPlace();
  if (!place.geometry) {
   // User entered the name of a Place that was not suggested and
   // pressed the Enter key, or the Place Details request failed.
   window.alert("No details available for input: '" + place.name + "'");
   return;
  }

  // If the place has a geometry, then present it on a map.
  if (place.geometry.viewport) {
   map.fitBounds(place.geometry.viewport);
  } else {
   map.setCenter(place.geometry.location);
   map.setZoom(17);  // Why 17? Because it looks good.
  }
  marker.setPosition(place.geometry.location);
  marker.setVisible(true);

  var address = '';
  if (place.address_components) {
   address = [
    (place.address_components[0] && place.address_components[0].short_name || ''),
    (place.address_components[1] && place.address_components[1].short_name || ''),
    (place.address_components[2] && place.address_components[2].short_name || '')
   ].join(' ');
  }

  infowindowContent.children['place-icon'].src = place.icon;
  infowindowContent.children['place-name'].textContent = place.name;
  infowindowContent.children['place-address'].textContent = address;
  infowindow.open(map, marker);
 });

 // Sets a listener on a radio button to change the filter type on Places
 // Autocomplete.
 function setupClickListener(id, types) {
  var radioButton = document.getElementById(id);
  radioButton.addEventListener('click', function () {
   autocomplete.setTypes(types);
  });
 }

 setupClickListener('changetype-all', []);
 setupClickListener('changetype-address', ['address']);
 setupClickListener('changetype-establishment', ['establishment']);
 setupClickListener('changetype-geocode', ['geocode']);

 document.getElementById('use-strict-bounds')
  .addEventListener('click', function () {
   console.log('Checkbox clicked! New state=' + this.checked);
   autocomplete.setOptions({ strictBounds: this.checked });
  });
}
