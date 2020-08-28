// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map, infoWindow;
var locations = [
  ['Linha: L004',-29.1712857,-51.234906,'Bragé', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L004',-29.1686144,-51.2269452,'Bragé', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L004',-29.1643151,-51.2264844,'Bragé', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L004',-29.1666057,-51.2255832,'Bragé', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L004',-29.1607603,-51.2171859,'Bragé', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L004',-29.1586076,-51.1932808,'Bragé', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L004',-29.1525928,-51.1950014,'Bragé', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L004',-29.1503581,-51.1718478,'Bragé', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L004',-29.1409481,-51.1431558,'Bragé', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L007',-29.2000638,-51.1871727,'Giratur', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L007',-29.2009553,-51.1941407,'Giratur', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L007',-29.2205989,-51.1980899,'Giratur', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L007',-29.2182739,-51.1987029,'Giratur', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L007',-29.1994183,-51.1970067,'Giratur', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L007',-29.1953768,-51.1941575,'Giratur', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L007',-29.1935809,-51.1964619,'Giratur', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L007',-29.1889291,-51.1875237,'Giratur', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L010',-29.1721692,-51.1436045,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1721271,-51.1489581,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1868127,-51.1521173,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1851197,-51.1505267,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1803593,-51.1459335,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1806432,-51.1441937,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1748158,-51.1415192,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.176711,-51.137149,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1783391,-51.1345324,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1748603,-51.1355119,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1671744,-51.1362634,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1697427,-51.1261179,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1746694,-51.1239665,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1616033,-51.1166039,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1579897,-51.1153003,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1578032,-51.1309326,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1592742,-51.1344581,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1589625,-51.137722,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1487022,-51.1320289,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L010',-29.1457115,-51.1310681,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L001',-29.1994317,-51.250948,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L001',-29.1940454,-51.2403326,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L001',-29.2024304,-51.2465618,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L001',-29.2027842,-51.2371067,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L001',-29.2053303,-51.2372086,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L001',-29.2081734,-51.2368624,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L001',-29.1975037,-51.2382123,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L001',-29.1897204,-51.239154,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L001',-29.1892138,-51.2387486,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L001',-29.1833071,-51.2329717,'Bragé', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L008',-29.2414321,-51.1352613,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.2189711,-51.1875215,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.204366,-51.1747492,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.2073506,-51.174363,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.2045212,-51.1723352,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.2034148,-51.1722078,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.1871498,-51.1832287,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.1820954,-51.1760403,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.1827848,-51.1665346,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.1814593,-51.1637826,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.1668673,-51.1498613,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.1615224,-51.154478,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L008',-29.1348976,-51.1183532,'Giratur', 'Aguardar o transporte a partir de: 21:03:00'],
  ['Linha: L011',-29.1876291,-51.2049941,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.1882582,-51.2069226,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.1941786,-51.2023453,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.1947265,-51.2056445,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.1948763,-51.2087719,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.2049013,-51.2094809,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.2183705,-51.1989745,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.2123884,-51.19536,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.2085685,-51.1920192,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.2045423,-51.1960787,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.1994696,-51.1970219,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.1612443,-51.1567032,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L011',-29.1268142,-51.1276559,'Unidos', 'Aguardar o transporte a partir de: 21:10:00'],
  ['Linha: L002',-29.1797527,-51.189886,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L002',-29.1828522,-51.1896013,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L002',-29.1788155,-51.1970786,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L002',-29.1567169,-51.1495263,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L002',-29.1573305,-51.14486,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L002',-29.1590741,-51.1398756,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L003',-29.1797527,-51.189886,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L003',-29.1828522,-51.1896013,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L003',-29.1788155,-51.1970786,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L003',-29.1567169,-51.1495263,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L003',-29.1573305,-51.14486,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L003',-29.1590741,-51.1398756,'Bragé', 'Aguardar o transporte a partir de: 21:20:00'],
  ['Linha: L006',-29.1322721,-51.1709724,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1257186,-51.1641295,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1272294,-51.1660294,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1282143,-51.1691524,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1436735,-51.1862619,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1404596,-51.1848832,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1304352,-51.1799343,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1243972,-51.1835929,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1186233,-51.1893715,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1221587,-51.1783103,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L006',-29.1233395,-51.1782682,'Caxiense', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.1836824,-51.1672938,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.185642,-51.1695508,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.1881359,-51.1692075,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.1904641,-51.1653688,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.1888877,-51.1643485,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.1934147,-51.1672849,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.1962244,-51.1666492,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.1979596,-51.1648848,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.1838028,-51.1576243,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L012',-29.1773635,-51.1572243,'Unidos', 'Aguardar o transporte a partir de: 21:15:00'],
  ['Linha: L009',-29.2046255,-51.2306089,'Giratur', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L009',-29.18521,-51.2283362,'Giratur', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L009',-29.1832776,-51.2232376,'Giratur', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L009',-29.1813928,-51.2184018,'Giratur', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L009',-29.1915973,-51.2216296,'Giratur', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L009',-29.1903969,-51.2148897,'Giratur', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L009',-29.1852713,-51.1989657,'Giratur', 'Aguardar o transporte a partir de: 21:25:00'],
  ['Linha: L005',-29.1201861,-51.1338571,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.1153436,-51.1355111,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.1140391,-51.1341047,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.1152885,-51.1336979,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.1152135,-51.1319255,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.0987514,-51.1251528,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.0990418,-51.1232752,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.1044855,-51.1222125,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.0733835,-51.1008388,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.0869299,-51.0955191,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.0780388,-51.0818746,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.0751061,-51.0716751,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.1008338,-51.0894997,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00'],
  ['Linha: L005',-29.1212553,-51.1001937,'Caxiense', 'Aguardar o transporte a partir de: 21:05:00']  
];

function initMap() {
 var map = new google.maps.Map(document.getElementById('map'), {
   center: { lat: -29.1684796, lng: -51.1793861 },
   zoom: 15,
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
   ],
   mapTypeControl: true,
   mapTypeControlOptions: {
     style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
     position: google.maps.ControlPosition.RIGHT_CENTER
   },
   scaleControl: true, 
 });
 infoWindow = new google.maps.InfoWindow;
 setMarkers(map, locations)

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
  animation: google.maps.Animation.DROP,
  map: map,
  icon: {
    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
    strokeColor: "orange",
    scale: 6
},
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

function setMarkers(map, locations) {

  var markers = new Array();
  var marker, i
  var infowindow = new google.maps.InfoWindow();

 for (i = 0; i < locations.length; i++) {

   var loan = locations[i][0]
   var lat = locations[i][1]
   var long = locations[i][2]
   var pre = locations[i][3]
   var add = locations[i][4]

   latlngset = new google.maps.LatLng(lat, long);

   var marker = new google.maps.Marker({
     map: map, title: loan, position: latlngset
   });
   map.setCenter(marker.getPosition())
   var OpenGM = ("https://www.google.com/maps/search/?api=1&query=" +lat+","+ long)
    var Direction = ("https://www.google.com/maps/dir/?api=1&query=&destination="+ lat + long +"&travelmode=walking")
    
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h6 id="firstHeading" class="firstHeading">' + loan + ' - ' + pre + '</h6>' +
      '<div id="bodyContent">' +
      '<p>' + add + '</p>' +
      '<div id="siteNotice">' +
      '<a href="'+ OpenGM +'"> Abrir no Google Maps</a>' + '<a> / </a>' +
      '<a href="' + Direction +'"> Rotas (Como Chegar)</a>' +
      '</div>' +
      '</div>';
    var content = contentString
   // loan +' ' + add

    google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
      return function () {
        infowindow.setContent(content);
        infowindow.open(map, marker);
        map.setCenter(marker.getPosition());
      }
    })(marker, content, infowindow));
    // Add marker to markers array
    markers.push(marker);

    // Trigger a click event on each marker when the corresponding marker link is clicked
    $('.marker-link').on('click', function () {

      google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
  });

 }

  //Try HTML5 geolocation.

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
  
      infoWindow.setPosition(pos);
      infoWindow.setContent('Localização Atual');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
      infowindow.close();
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
    // infoWindow.setContent(browserHasGeolocation ?
    //   'Falha ao buscar a localização atual, ligue o GPS' :
    //   'Seu navegador não suporta geolocalização');
  infoWindow.open(map);
}
}
