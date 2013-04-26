if (Meteor.isClient) {

  Meteor.startup(function () {
    // Validation
    $("input").not("[type=submit]").jqBootstrapValidation();

  });

  Template.coming_soon.events({
    'submit': function (event, template) {
      // We're a single page webapp...
      event.preventDefault();

      Meteor.call("addSubscriber", template.find(".email").value, function (error, subscriber) {
        if (error) {
          console.log("error is " + error.details + ", " + error.reason);
        }
      });
  }});
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
