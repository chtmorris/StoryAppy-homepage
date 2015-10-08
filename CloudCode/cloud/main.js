Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world! Charlie");
});

var Mailgun = require('mailgun');
Mailgun.initialize('sandbox5c8f838ca8ef42a18baec85908fa233e.mailgun.org', 'key-e5ad2258603b783284bdb79dec449f7f');

Parse.Cloud.beforeSave("Contact", function(request, response) {

	var text = "Email address of interested StoryAppy website visitor:\n" +
		"Email: "+request.object.get("email") + "\n";

	Mailgun.sendEmail({
			to: "mark@mindfund.com",
			from: request.object.get("email"),
			subject: "New StoryAppy info Request",
			text: text
		}, {
		success: function(httpResponse) {
			response.success();
		},
		error: function(httpResponse) {
			console.error(httpResponse);
			response.error("Uh oh, something went wrong");
		}
	});

});
