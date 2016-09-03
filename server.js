// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./App/Public'));


// Passport
// -----------------------------------------------
//session is used to keep the user logged in
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))

//flash is used to show a message on an incorrect login
app.use(flash());

//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());


// Routes
// -------------------------------------------------

require('./controller/html-routes.js')(app);


// Listener
// -------------------------------------------------

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});