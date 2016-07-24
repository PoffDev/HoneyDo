var express = require('express');
var exphbs = require('express-handlebars');

//Port
var app = express();
var PORT = process.env.PORT || 8081;

//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routing
//require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


//Port Console
app.listen(PORT, function(){
	console.log("Port listening on :" + PORT);
})

