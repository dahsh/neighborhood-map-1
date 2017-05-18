// hard-coded locations array of at least 5 location objects
var locations = [
	{
		title: 'Street Food, Causeway Bay',
		location:
		{lat: 22.27879, lng: 114.18271}
	},
	{
		title: 'Avenue of Stars, Tsim Sha Tsui',
		location: {lat: 22.29303, lng: 114.17391}
	},
	{
		title: 'Lan Kwai Fong, Central',
		location: {lat: 22.275248899, lng: 114.153316053}
	},
	{
		title: 'City University of Hong Kong, Kowloon Tong',
		location: {lat: 22.33749, lng: 114.17200}
	},
	{
		title: 'TriBeCa Artsy Bachelor Pad',
		location: {lat: 40.7195264, lng: -74.0089934}
	},
	{
		title: 'Chinatown Homey Space',
		location: {lat: 40.7180628, lng: -73.9961237}
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
	}
	// pushes all locations into markers array
	markers.push(marker)
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
	var self = this;
};

// Location constructor (similar to Cat constructor function)


// VIEW MODEL //

var AppViewModel = function(){
	var self = this;
// define Location observable array ()
	self.myLocations = ko.observableArray();
// https://classroom.udacity.com/nanodegrees/nd001/parts/e87c34bf-a9c0-415f-b007-c2c2d7eead73/modules/271165859175461/lessons/3406489055/concepts/34648186930923

};

// instantiate the ViewModel using the new operator and apply the bindings (aka activate KO)
var appViewModel = new AppViewModel();

// activate knockout apply binding
ko.applyBindings(appViewModel);


// VIEW //

var AppView = function(){
	var self = this;

	self.myLocations = ko.observableArray();

	for (i = 0; i < locations.length; i++) {
		var place = new AppModel(locations[i]);
		self.myLocations.push(place);
	}
};

