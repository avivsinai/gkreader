if (Meteor.isClient) {
  Template.coming_soon.events({
    'click #subscribeBtn': function (event, template) {
      var emailElem = $(".email");

      if (!isSubscriberValid(emailElem)) {
        console.log("Error in validation");
        emailElem.addClass("error");
        return;
      }

      if (emailElem.hasClass("error")) {
        console.log("emailElem with error");
        return; // Do nothing...
      } 

      console.log("EmailElem without error");
      Meteor.call("addSubscriber", emailElem.val(), function (error, subscriber) {
        if (error) {
          console.log("error is " + error.details + ", " + error.reason);
          emailElem.addClass("error");
        }
      });
  }});

  function isSubscriberValid(emailElem) {
    return $("subscribeForm").validate(
    {
      rules: {
        email: {
          email: true,
          required: true
        }
      },
      highlight: function(element) {
        $(element).removeClass("success").addClass("error");
      },
      success: function(element) {
        element.text("ok");
      }
     }).form();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
