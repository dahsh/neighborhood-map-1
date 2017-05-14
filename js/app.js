// hard-coded locations array of at least 5 location objects
var locations = [
	{title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
	{title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
	{title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
	{title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
	{title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
	{title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
];

// initMap function
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
}

// Location constructor (similar to Cat constructor function)


// 

var AppViewModel = function(){

// define Location observable array ()
// https://classroom.udacity.com/nanodegrees/nd001/parts/e87c34bf-a9c0-415f-b007-c2c2d7eead73/modules/271165859175461/lessons/3406489055/concepts/34648186930923

};

var appViewModel = new AppViewModel();

// activate knockout apply binding
ko.applyBindings(new AppViewModel());