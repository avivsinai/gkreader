if (typeof GKR === "undefined") {
    GKR = {};
}

// Register global util helpers
Handlebars.registerHelper("GKR.logoUrl", function() {
	return Meteor.absoluteUrl() + "gkreader_logo.png";
});