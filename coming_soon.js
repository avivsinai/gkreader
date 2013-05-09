/*if (typeof GKR == "undefined") {
  GKR = {};
}*/

if (Meteor.isClient) {

  Meteor.startup(function () {
    // Validation
    $("input").not("[type=submit]").jqBootstrapValidation();
  });

  Template.coming_soon.events({
    'submit': function (event, template) {
      // We're a single page webapp...
      event.preventDefault();

      var subscriberEmail = template.find(".email");
      
      return Subscribers.insert({ 
          email: subscriberEmail, 
          is_valid: false, 
          validation_date: null,
          sent_email_date: null});
  }});
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
