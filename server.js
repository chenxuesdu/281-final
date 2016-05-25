var url = "mongodb://ec2-54-200-33-118.us-west-2.compute.amazonaws.com/cmpe281"
var endpoint2 = "mongodb://ec2-54-213-82-189.us-west-2.compute.amazonaws.com/cmpe281"
var endpoint3 = "mongodb://ec2-54-213-48-50.us-west-2.compute.amazonaws.com/cmpe281"

//Lets load the mongoose module in our program
var mongoose = require('mongoose');
var express = require('express');
var http = require('http');
//Lets connect to our database using the DB server URL.
mongoose.connect(url);

/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var Final = mongoose.model('Final', {key:String});

var router = express.Router();

function handleRequest(request, response){
	response.end("ip is: ec2-54-213-48-50.us-west-2.compute.amazonaws.com" + 'value is ' + "Hello World #1\n" + 
"ip is: ec2-54-200-33-118.us-west-2.compute.amazonaws.com" + "value is Hello World #1\n" +
"ip is: ec2-54-213-82-189.us-west-2.compute.amazonaws.com" + "value is Hello World #1\n" )
}

router.route('/')
.get(function(req, res){
	console.log("in get");
	Test.find(function(err, test){
		if (err)
			res.send(err);
		res.json(test);
	});
})
.post(function(req, res){
	var final = new Final();
	final.key = "Hello World #1";
	console.log("in post");
	final.save(function(err, saved){
		if (err)
			res.send(err);
		res.json(saved);
	})
})

var server = http.createServer(handleRequest);
server.listen(8088, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", 8088);
});