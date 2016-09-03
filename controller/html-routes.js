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
    // db.users.findOne({email: email}, function(err, user){
    //   console.log("findONe Ran");
    //   if (err) { return done(err); }
    //   if (!user) { return done(null, false); }

    //   // comparing user passwords - return if not a match
    //   if (password !== user.password) { return done(null, false);}

    //   return done(null, user);
    // });
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
  app.get('/', function() {
    res.sendFile('./App/Public/index.html');
  });

  // signup a user
  app.post('/Signup', function(req, res) {
    var user = req.body;
    // console.log(user);
    db.users.insert(user, function(err, docs) {
      if (err) throw err;
      console.log('saved to db');
      res.send(docs);
    }); // end db.Users.insert()
  }); // end app.post()

  // login a user
  app.post('/login', function(req, res){
    console.log(req.body.email);

    db.users.findOne({email: req.body.email}, function(err, user){

      if(user == null || user == []){
        res.send({status: "Error", Error: "No User By That Email", transaction: "un-paid"});
        console.log({status: "Error", Error: "No User By That Email", transaction: "un-paid"});
      }else{
        if(user.password === req.body.password){
          res.send({
            status: "Ok",
            transaction: "Paid",
            _id: user._id,
            login: true,
          })
          console.log({
            status: "Ok",
            transaction: "Paid",
            _id: user._id,
            login: true,
          })
        }
      }


    });

  });

}