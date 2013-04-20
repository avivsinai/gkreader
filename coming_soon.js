if (Meteor.isClient) {

  Template.coming_soon.events({
    'submit': function (event, template) {
      event.preventDefault();

      if (!isSubscriberValid()) {
        console.log("Error in validation");
        return;
      }

      Meteor.call("addSubscriber", template.find(".email").value, function (error, subscriber) {
        if (error) {
          console.log("error is " + error.details + ", " + error.reason);
        }
      });
  }});

  function isSubscriberValid() {
    return parsley = $("#subscribeForm").parsley({
        successClass: "success",
        errorClass: "error",
        errors: {
          classHandler: function (element) {
            return $(".email");
          },
          errorsWrapper: "",
          errorElem: ""
        }
    }).validate();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
