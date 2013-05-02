// Model definitions would reside here
Subscribers = new Meteor.Collection("subscribers");
// { _id: subscriber_id, email: String, validation_date: Date}

// Model server methods available in the client
Meteor.methods({
	addSubscriber: function(subscriberEmail) {
		console.log("SubEmail is " + subscriberEmail);

		if (!subscriberEmail) {
			throw new Meteor.Error(400, "Please provide a valid email address");
		}

		

		return Subscribers.insert({ 
					email: subscriberEmail, 
					is_valid: false, 
					validation_date: null});
	}
});