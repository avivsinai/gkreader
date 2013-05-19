
// Model definitions would reside here
Subscribers = new Meteor.Collection("subscribers");
// { _id: subscriber_id, email: String, subscribe_date: Date}

//XXX Remove in prod; this is to ease my tests
// Subscribers.remove({});

Subscribers.allow({
	"insert": function (userId, doc) {
console.log("In allow for " + userId + ", " + doc);
		return true;
	},
});

if (Meteor.isServer) {
	Meteor.publish("subscribers", function () {
		return Subscribers.find({});
	});
}

if (Meteor.isClient) {
	Meteor.subscribe("subscribers");
}