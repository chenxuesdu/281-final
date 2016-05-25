var url = "mongodb://ec2-54-200-33-118.us-west-2.compute.amazonaws.com/cmpe281"
var endpoint2 = "mongodb://ec2-54-213-82-189.us-west-2.compute.amazonaws.com/cmpe281"
var endpoint3 = "mongodb://ec2-54-213-48-50.us-west-2.compute.amazonaws.com/cmpe281"

//Lets load the mongoose module in our program
var mongoose = require('mongoose');
var express = require('express');
var http = require('http');
//Lets connect to our database using the DB server URL.


/**
 * Lets define our Model for User entity. This model represents a collection in the database.
 * We define the possible schema of User document and data types of each field.
 * */
var Final = mongoose.model('Final', {key:String});

var router = express.Router();
mongoose.connect(url);
function handleRequest(request, response){
	router.route('/')
	.get(function(req, res){
		Final.find(function(err, final){
			if (err)
				res.send(err);
			res.end("ip is ec2-54-213-48-50.us-west-2.compute.amazonaws.com" + "value is " + final[0].key + "\n"
		+ "ip is ec2-54-200-33-118.us-west-2.compute.amazonaws.com" + "value is " + final[0].key + "\n" + "
			ip is: ec2-54-213-82-189.us-west-2.compute.amazonaws.comvalue is " + final[0].key);
		});
	});
	mongoose.connect(endpoint2);
	mongoose.connect(endpoint3);
}



var server = http.createServer(handleRequest);
server.listen(8088, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", 8088);
});