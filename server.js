var express = require('express');

//Port
var app = express();
var PORT = process.env.PORT || 8081;


//Port Console
app.listen(PORT, function(){
	console.log("Port listening on :" + PORT);
})

