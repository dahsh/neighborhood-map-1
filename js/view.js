function myView() {
	this.firstName = ko.observable("Richard");
	this.lastName = ko.observable("Chan");
};

ko.applyBindings(new myView());