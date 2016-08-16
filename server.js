var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bodyparser = require('body-parser');
// var orm = require('/config/orm.js')

//Port
var app = express();
var PORT = process.env.PORT || 8081;

// access to the public folder
app.use(express.static('app/public'));

// bodyparser allows our server to interpret data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.text());
app.use(bodyparser.json({type: 'application/vnd.api+json'}));

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

