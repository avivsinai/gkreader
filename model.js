//
// Model definitions would reside here
//
Subscribers = new Meteor.Collection("subscribers");
// { _id: subscriber_id, email: String, subscribe_date: Date}

// Indexes
if (Meteor.isServer) {
	// ensureIndex only works on server at the moment...
	Subscribers._ensureIndex({ "email": 1 }, { unique: true, sparse: true });
}

// Define deny/allow methods
//

// Model server only functions
if (Meteor.isServer) {
	Meteor.methods({
		addSubscriber: function (subscriberEmail) {
		     var id = Subscribers.update({ email: subscriberEmail }, { 
	            email: subscriberEmail, 
	            is_valid: false, 
	            subscribe_date: new Date() }, 
	            { upsert: true });
		     console.log("Adding subscriber " + subscriberEmail + ", with id " + id);
		}
	});
}

// End Subscribers

//XXX Remove in prod; this is to ease my tests
// Subscribers.remove({});

