function myViewModel() {
	this.firstName = ko.observable("Richard");
	this.lastName = ko.observable("Chan");
};

ko.applyBindings(new myViewModel());