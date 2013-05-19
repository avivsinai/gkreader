Meteor.methods({
	sendEmail: function (to, from, subject, text, html) {
		// Let other method calls from the same client start running,
	    // without waiting for the email sending to complete.
	    this.unblock();

	    // console.log("Sending email with parameters: " + to + "||" + from + "||" + subject + "||" + text + "||" + html);

	    Email.send({
	      to: to,
	      from: from,
	      bcc: "support@gkreader.com",
	      subject: subject,
	      text: text,
	      html: html
		});
	}
});