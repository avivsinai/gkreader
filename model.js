// Model definitions would reside here
Subscribers = new Meteor.Collection("subscribers");
// { _id: subscriber_id, email: String, subscribe_date: Date}

// This will throw errors on client, but I want to keep as the API should be roughly the same when released
Subscribers._ensureIndex({ "email": 1 }, { unique: true, sparse: true });

Subscribers.allow({
	"insert": function (userId, doc) {
		return true;
	},
});
