// initMap function
// Create a map variable
var map;

// create array for listing markers in map
var markers = [];

// Complete the following function to initialize the map
function initMap() {
	var myLatLng = {lat: 40.7713024, lng: -73.9532325};
	// Create a map object and specify the DOM element for display.
	map = new google.maps.Map(document.getElementById("map"), {
	center: myLatLng,
	zoom: 13
});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: "title"
	});
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

// MODEL //

var AppModel = function(){
	// hard-coded locations array of at least 5 location objects
	var locations = [
		{title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
		{title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
		{title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
		{title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
		{title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
		{title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
	];
};

// Location constructor (similar to Cat constructor function)


// VIEW MODEL //

var AppViewModel = function(){
	var self = this;
// define Location observable array ()
	// this.location = ko.observableArray([]);
// https://classroom.udacity.com/nanodegrees/nd001/parts/e87c34bf-a9c0-415f-b007-c2c2d7eead73/modules/271165859175461/lessons/3406489055/concepts/34648186930923

};

// instantiate the ViewModel using the new operator and apply the bindings (aka activate KO)
var AppViewModel = new AppViewModel();

// activate knockout apply binding
// ko.applyBindings(new AppViewModel());


// VIEW //

var AppView = function(){

};