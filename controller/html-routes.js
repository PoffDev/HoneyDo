var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongojs = require('mongojs');

// MongoDB
// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
var databaseUrl = 'HoneyDo';
var collections = ["users"];

// use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

db.on('error', function(err) {
  console.log('MongoDB Error: ', err);
});


// Passport
// --------------------------------------------------

// Setting the strategy for Passport
passport.use(new LocalStrategy({passReqToCallback : true},
  function(req, email, password, done) {
    console.log(email, password);

  	// Searching the ORM for the user in the database
  	db.Users.findOne({email: email}, function(err, user){

  		if (err) { return done(err); }
      if (!user) { return done(null, false); }

      // comparing user passwords - return if not a match
      if (password !== user.password) { return done(null, false);}

      return done(null, user);
  	});
  }
));

// These two methods are required to keep the user logged in via the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


// Routes
// --------------------------------------------------

module.exports = function(app) {

  // entry for the React app
app.get('/', function() 
    {res.sendFile('public/index.html');
  
  });

  // signup a user
app.post('/Signup', function(req, res) {
    var user = req.body;
    // console.log(user);
    db.Users.insert(user, function(err, docs) {
      if (err) throw err;
      console.log('saved to db');
      res.send(docs);
    }); // end db.Users.insert()
  }); // end app.post()

  // login a user
  app.post('/Login', passport.authenticate('local',{failureRedirect:'/', failureFlash:'Wrong email or Password'}), function(req, res){
    console.log(req.user.email);
    if (req.isAuthenticated()) {
			res.send({
				email: req.user.email
			});
		} else {
			res.redirect('/')
		}
	});

}