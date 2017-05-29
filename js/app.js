var appViewModel;

// array of locations in Hong Kong
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

// array of locations in San Francisco
var locationSF = [
	{
		title: 'Golden Gate Bridge',
		location: {lat: 37.80779, lng: -122.47520}
	},
	{
		title: 'Golden Gate Park',
		location: {lat: 37.77265, lng: -122.46023}
	},
	{
		title: 'Baker Beach',
		location: {lat: 37.79357, lng: -122.48364}
	},
	{
		title: 'Ocean Beach',
		location: {lat: 37.75890, lng: -122.51086}
	},
	{
		title: 'Twin Peaks',
		location: {lat: 37.75441, lng: -122.44768}
	},
	{
		title: 'Dolores Park',
		location: {lat: 37.75959, lng: -122.42702}
	},
	{
		title: 'Fort Mason',
		location: {lat: 37.80679, lng: -122.43141}
	},
	{
		title: 'Palace of Fine Arts',
		location: {lat: 37.80200, lng: -122.44865}
	},
	{
		title: 'AT&T Park',
		location: {lat: 37.77859, lng: -122.38927}
	},
	{
		title: 'Lake Merced',
		location: {lat: 37.72025, lng: -122.48516}
	},
	{
		title: 'California Academy of Science',
		location: {lat: 37.76987, lng: -122.46610}
	},
	{
		title: 'Pier 39',
		location: {lat: 37.80838, lng: -122.41042}
	},
	{
		title: 'Ferry Building',
		location: {lat: 37.79528, lng: -122.39340}
	},
	{
		title: 'House of Air',
		location: {lat: 37.80493, lng: -122.46882}
	},
	{
		title: 'Painted Ladies',
		location: {lat: 37.77626, lng: -122.43275}
	},
	{
		title: 'Lands End Trail',
		location: {lat: 37.78799, lng: -122.50589}
	},
	{
		title: 'El Techo Rooftop',
		location: {lat: 37.75669, lng: -122.41930}
	},
	{
		title: 'Corona Heights Park',
		location: {lat: 37.76517, lng: -122.43845}
	},
	{
		title: 'Coit Tower',
		location: {lat: 37.80239, lng: -122.40582}
	},
	{
		title: 'Lombard Street',
		location: {lat: 37.80214, lng: -122.41874}
	},
 	{
		title: 'House of Pancakes',
		location: {lat: 37.74289, lng: -122.47635}
 	}
];

// create a map variable that will be used in initMap()
var map;

// create array for listing markers in map
var markers = [];

// initialize map
function initMap() {
	// intial map view when loaded
	var myLatLng = {lat: 22.285978, lng: 114.191490};
	// create a map object and get map from DOM for display
	map = new google.maps.Map(document.getElementById("map"), {
	center: myLatLng,
	zoom: 13
});
	// attach a click event listener to the marker objects and open an info window on click
	// creates infowindow for each place pin
    var infoWindow = new google.maps.InfoWindow();

	// iterates through all locations and drop pins on every single location
	for (j = 0; j < locations.length; j++){
		(function(){
		// store title and location iteration in variables
		var title = locations[j].title;
		var location = locations[j].location;
		
		// drop marker after looping
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title: title,
			animation: google.maps.Animation.DROP,
			address: address,
			id: i
		});
		// pushes all locations into markers array
		markers.push(marker)
		appViewModel.myLocations()[j].marker = marker;

		// Create an onclick event to open an infowindow at each marker.
		marker.addListener('click', function() {
			// show info inside infowindow when clicked
			populateInfoWindow(this, infoWindow);
			// displays all data retrieved from foursquare api down below
			infoWindow.setContent(contentString);
		});
	
	// This function populates the infowindow when the marker is clicked. We'll only allow
	// one infowindow which will open at the marker that is clicked, and populate based
	// on that markers position.
	function populateInfoWindow(marker, infoWindow) {
		// Check to make sure the infowindow is not already opened on this marker.
		if (infoWindow.marker != marker) {
			infoWindow.marker = marker;
			infoWindow.setContent('<div class="title">' + marker.title + '</div>' + marker.contentString);
			marker.setAnimation(google.maps.Animation.BOUNCE);
    		setTimeout(function(){ marker.setAnimation(null); }, 2130);
			infoWindow.open(map, marker);
			// Make sure the marker property is cleared if the infowindow is closed.
			infoWindow.addListener('closeclick',function(){
	    	infoWindow.setMarker = null;
	  		});
		}
	} // end of populateInfoWindow

		// foursquare client-id and client-secret
		var client_id = "FZPMCSEYO134W0XYREE1QGP5TE4OXP2Z4QXCNAATK3MKIME0";
		var client_secret = "YGNCPSLBHXFWEFRWR3E3I4JUV3YHMKT0J3I53GDNTAVOUTXM";

		// foursquare api url
		var foursquareUrl = "https://api.foursquare.com/v2/venues/search";// + marker.position.lat() + "," + marker.position.lng();
		// creating variables outside of the for ajax request for faster loading
		var venue, name, address, category, foursquareId, contentString;
		
		// ajax request - foursquare api data (https://developer.foursquare.com/docs/)
		$.ajax({
		//	type: 'GET',
			url: foursquareUrl,
			dataType: "json",
			data : {
				client_id: client_id,
				client_secret: client_secret,
				query: marker.title,
				near: "Hong Kong",
				v: 20170523
			},
			success: function(data){
				// console.log(data);
					// get venue info
					venue = data.response.venues[0];
					// console.log(venue);
					// get venue name info
					name = venue.name;
					// console.log(name);
					// get venue address info
					address = venue.location.formattedAddress[0];
					// console.log(address);
					// get venue category info
					category = venue.categories[0].name;
					// console.log(category);
					// get venue location address info
					address = venue.location.address;
					// console.log(address);

					foursquareId = "https://foursquare.com/v/" + venue.id;
					// console.log(foursquareId);

					contentString = "<div class='name'>" + "Name: " + title + "</div>" +
					"<div class='category'>" + "Catergory: " + category + "</div>" +
					"<div class='address'>" + "Address: " + address + "</div>" +
					"<div class='information'>" + "More info: "  + "<a href='" + foursquareId + "'>" + "Click here" + "</a></div>";

					marker.contentString;
			},
			error: function(){
				console.log("It's taking longer than expected to retrieve data from foursquare. Please try again.");
			}
		});

		})(j);

	} // end of for loop through markers [j]
}

// Location Constructor
var Location = function(data){
	var self = this;
	this.title = data.title;
	this.location = data.location;
	this.show = ko.observable(true);
};

// VIEW MODEL //
var AppViewModel = function(){
	var self = this;
	// define Location observable array ()
	self.myLocations = ko.observableArray();
	self.filteredInput = ko.observable('');
	
	for (i = 0; i < locations.length; i++) {
		var place = new Location(locations[i]);
		self.myLocations.push(place);
	}

	// from http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
	self.searchFilter = ko.computed(function() {
    	var filter = self.filteredInput().toLowerCase();
	    for (j = 0; j < self.myLocations().length; j++) {
	    	if (self.myLocations()[j].title.toLowerCase().indexOf(filter) > -1) {
	    		self.myLocations()[j].show(true);
	    		if (self.myLocations()[j].marker) {
	    			self.myLocations()[j].marker.setVisible(true);
	    		}
	    	} else {
	    		self.myLocations()[j].show(false);
	    		if (self.myLocations()[j].marker) {
	    			self.myLocations()[j].marker.setVisible(false);
	    		}
	    	}
	    }
	});
	
	// map marker bounces when location is clicked on list
	// https://developers.google.com/maps/documentation/javascript/events
	self.showLocation = function(locations){
        google.maps.event.trigger(locations.marker, 'click');
    };
};

// instantiate the ViewModel using the new operator and apply the bindings (aka activate KO)
appViewModel = new AppViewModel();

// activate knockout apply binding
ko.applyBindings(appViewModel);