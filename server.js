// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var mongojs = require('mongojs');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration
var databaseUrl = 'React';
var collections = ["hello"];

// use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

db.on('error', function (err) {
  console.log('MongoDB Error: ', err);
});

//session keeps the user logged in
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))

//flash is used to show incorrect login
app.use(flash());

//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());


// -------------------------------------------------

//Get Routes
app.get('/', function(req, res){

  res.sendFile('./public/index.html');

})


//Post Routes
app.post('/signup', function(req, res){

	console.log('sign up email ' + req.body.email);
	console.log('sign up partner1 ' + req.body.partner1);
	console.log('sign up partner2 ' + req.body.partner2);
	console.log('sign up password ' + req.body.password);
})

app.post('/login', function (req, res){

	console.log('login email ' + req.body.email);
	console.log('login password ' + req.body.password);

})

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});