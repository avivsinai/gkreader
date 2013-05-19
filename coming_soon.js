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
      var $submitButton = $("button[type='submit']");
      // Disable the submit button
      $submitButton.attr("disabled", "disabled");

      // We're a single page webapp...
      event.preventDefault();

      var subscriberEmail = $(".email").val();
      try {
        if (foundRecord = Subscribers.findOne({ email: subscriberEmail })) {
          GKR.Alerts.alert("Email (" + subscriberEmail + ") is already subscribed", "info");
          $submitButton.removeAttr('disabled');
          $(".email").val("");
          return;
        }

        // Insert to db
        var id = Subscribers.insert({ 
            email: subscriberEmail, 
            is_valid: false, 
            subscribe_date: null });  
        console.log("Added subscriber: " + subscriberEmail + ", with id " + id);
        
        // Email
        Meteor.call("sendEmail", subscriberEmail, "support@gkreader.com", "GKReader - Thanks for taking an interest", "We'll be sure to let you know when we're ready, stay tuned...", Template.coming_soon_email());
        GKR.Alerts.alert("Thanks! We'll be sure to let you know when the Beta is ready to (" + subscriberEmail + ")", "success");
      } catch (e) {
        console.log("Got exception while trying to save subscriber", e);
        
        var div = $(".email").parent("div.control-group");
        div.removeClass("success");
        div.addClass("error");
        GKR.Alerts.alert("Got an error while trying to add subscriber, please contact support@gkreader.com", "error");
      }

      $(".email").val("");
      $submitButton.removeAttr('disabled');
  }});
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
