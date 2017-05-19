var appViewModel;

// hard-coded locations array of at least 5 location objects
var locations = [
	{
		title: 'Tim Ho Wan',
		location: {lat: 22.32891, lng: 114.16641}
	},
	{
		title: 'One Dim Sum',
		location: {lat: 22.32548, lng: 114.16941}
	},
	{
		title: 'Ramen Champion',
		location: {lat: 22.30432, lng: 114.17198}
	},
	{
		title: 'Lan Kwai Fong',
		location: {lat: 22.28084, lng: 114.15567}
	},
	{
		title: 'Tsim Sha Tsui Nightlife',
		location: {lat: 22.30109, lng: 114.17334}
	},
	{
		title: 'Ozone Bar Rooftop',
		location: {lat: 22.30496, lng: 114.16159}
	},
	{
		title: 'Wan Chai Nightlife',
		location: {lat: 22.27713, lng: 114.17155}
	},
	{
		title: 'Time Square',
		location: {lat: 22.27879, lng: 114.18271}
	},
	{
		title: 'IFC Tower',
		location: {lat: 22.28490, lng: 114.15892}
	},
	{
		title: 'Avenue of Stars',
		location: {lat: 22.29303, lng: 114.17391}
	},
	{
		title: 'Star Ferry',
		location: {lat: 22.29522, lng: 114.16724}
	},
	{
		title: 'Currency Exchange',
		location: {lat: 22.28693, lng: 114.15126}
	},
	{
		title: 'Happy Valley Racecourse',
		location: {lat: 22.27225, lng: 114.18096}
	},
	{
		title: 'Ladies Market',
		location: {lat: 22.31937, lng: 114.17055}
	},
	{
		title: 'City University of Hong Kong',
		location: {lat: 22.33749, lng: 114.17200}
	},
	{
		title: 'Festival Walk Mall',
		location: {lat: 22.33771, lng: 114.17409}
	},
	{
		title: 'Soccer Field @ HK Baptist University',
		location: {lat: 22.33787, lng: 114.18267}
	},
	{
		title: 'Lion Rock - Hiking',
		location: {lat: 22.35227, lng: 114.18704}
	},
	{
		title: '10,000 Buddhas Monastery',
		location: {lat: 22.38737, lng: 114.18484}
	},
	{
		title: 'The Peak',
		location: {lat: 22.27588, lng: 114.14553}
	},
	{
		title: 'Stanley Market',
		location: {lat: 22.21918, lng: 114.21221}
	},
	{
		title: 'Hong Kong International Airport',
		location: {lat: 22.31732, lng: 113.93664}
	}	
];



// create a map variable that will be used in initMap()
var map;

// create array for listing markers in map
var markers = [];

// initialize map
function initMap() {
	var myLatLng = {lat: 22.285978, lng: 114.191490};
	// create a map object and get map from DOM for display
	map = new google.maps.Map(document.getElementById("map"), {
	center: myLatLng,
	zoom: 13
});
	// attach a click event listener to the marker objects and open an info window on click
	
    var infoWindow = new google.maps.InfoWindow();

	// iterates through all locations and drop pins on every single location
	for (j = 0; j < locations.length; j++){
		var title = locations[j].title;
		var location = locations[j].location;
		
		var marker = new google.maps.Marker({
		position: location,
		map: map,
		title: title,
		animation: google.maps.Animation.DROP
		});
		// pushes all locations into markers array
		markers.push(marker)
		appViewModel.myLocations()[j].marker = marker;

		// Create an onclick event to open an infowindow at each marker.
		marker.addListener('click', function() {
			populateInfoWindow(this, infoWindow);
		});
	
	// This function populates the infowindow when the marker is clicked. We'll only allow
	// one infowindow which will open at the marker that is clicked, and populate based
	// on that markers position.
	function populateInfoWindow(marker, infowindow) {
		// Check to make sure the infowindow is not already opened on this marker.
		if (infowindow.marker != marker) {
			infowindow.marker = marker;
			infowindow.setContent('<div class="title">' + marker.title + '</div>');
			marker.setAnimation(google.maps.Animation.BOUNCE);
    		setTimeout(function(){ marker.setAnimation(null); }, 1430);
			infowindow.open(map, marker);
			// Make sure the marker property is cleared if the infowindow is closed.
			infowindow.addListener('closeclick',function(){
	    	infowindow.setMarker = null;
	  		});
		}
	} // end of populateInfoWindow
	} // end of for loop through markers [j]
}
      


// AJAX GET AND POST API

// $(function(){

// 	var $items = $('#items');

// 	$.ajax({
// 		type: 'GET',
// 		url: '',
// 		success: function(data){
// 			$.each(data, function(i, items){
// 				$items.append('<li>item1: ' + items.something +', item2: ' + items.something + '</li>');
// 			});
// 		},
//		error: function(){
//			console.log("get error")
//		}
// 	});
	
// 	$.ajax({
// 		type: 'POST',
// 		url: '',
// 		success: function(data){

// 		},
// 		error: function(){
// 			console.log("post error");
// 		}
// 	})
// });

function getMyData(data) {

   // ajax request

   // push data from response object in callback function to data observableArray
    
}

// Location Constructor

var Location = function(data){
	var self = this;
	this.title = data.title;
	this.location = data.location;
	this.isVisible = ko.observable(true);
};

// VIEW MODEL //

var AppViewModel = function(){
	var self = this;
	// define Location observable array ()
	this.myLocations = ko.observableArray();

	for (i = 0; i < locations.length; i++) {
		var place = new Location(locations[i]);
		self.myLocations.push(place);
	}

    // If you want to get the data for all locations on initial page load
    // getMyData(self.myLocations)

// https://classroom.udacity.com/nanodegrees/nd001/parts/e87c34bf-a9c0-415f-b007-c2c2d7eead73/modules/271165859175461/lessons/3406489055/concepts/34648186930923

};

// instantiate the ViewModel using the new operator and apply the bindings (aka activate KO)
appViewModel = new AppViewModel();

// activate knockout apply binding
ko.applyBindings(appViewModel);