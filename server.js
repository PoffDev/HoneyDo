var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var bodyparser = require('body-parser');
var flash = require('connect-flash');
var passport = require('passport');
var session = require('express-session');
var orm = require('./config/orm.js')

//Port
var app = express();
var PORT = process.env.PORT || 8081;

//session is used to keep the user logged in 
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))

//flash is used to show a message on an incorrect login
app.use(flash());

//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());

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
require('./app/routing/html-routes.js')(app);


orm.connectToDB();

//Port Console
app.listen(PORT, function(){
	console.log("Port listening on :" + PORT);
})

