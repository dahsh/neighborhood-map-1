// Create a map variable
var map;
  // Complete the following function to initialize the map
  function initMap() {
    var myLatLng = {lat: 37.7749295, lng: -122.4194155};

    // Create a map object and specify the DOM element for display.
      map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 13
    });

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
  }