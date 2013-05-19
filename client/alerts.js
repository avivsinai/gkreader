// Alerts utilies
if (typeof GKR.Alerts === "undefined") {
	GKR.Alerts = {};
}

// Common utilities
GKR.Alerts.alert = function (text, type) {
	if (typeof(type) === "undefined") type = "success";

	console.log("Writing alert of " + type + ", " + text);

	$(".notifications").notify({
		type: type, // Default is success
		message: { text: text },
		fadeOut: { enabled: false }
    }).show(); 
}