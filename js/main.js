// Create a map variable
var map;
  // Complete the following function to initialize the map
  function initMap() {
    // Create a map object and specify the DOM element for display.
      map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 37.7749, lng: 122.4194},
      zoom: 8
    });
  }