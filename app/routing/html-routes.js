var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../../config/orm.js');

//Passport for User Auth
passport.use(new LocalStrategy({passReqToCallback : true},
  function(req, email, password, done) {

  	//Search ORM DB for user
  	orm.findUser(email, function(err, user){
  		user = user[0];
  		if (err) { return done(err); }
      if (!user) { return done(null, false); }

      //password compare
      if (password !== user.password) { return done(null, false);}

      return done(null, user);
  	});
  }
));

passport.serializeUser(function(user, done){
	done(null, user);
});

passport.deserializeUser(function(user, done){
	done(null, user);
});

module.exports = function (app) {

//Get Routes

	app.get('/', function (req, res){
		res.render('home',{
			title: 'Home',
			link: 'home',
		})
	});

	app.get('/signup', function (req, res){
		res.render('signup', {
			title: 'Sign Up',
			link: 'signup',
		})
	});

	app.get('/signin', function (req, res){
		res.render('signin', {
			title: 'Sign In', 
			link: 'signin',
		})
	});

	app.get('/dashboard', function (req, res){
		res.render('dashboard', {
			title: "My HoneyDo",
			link: "dashboard",
		})
	});

	app.get('/authenticated', function(req,res){
		if (req.isAuthenticated()) {
			res.render('authenticated', {
				username: req.user.username
			})
		} else {
			res.redirect('dashboard')
		}
	});

	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});

//Post Routes

	app.post('/signin', passport.authenticate('local',{failureRedirect:'/', failureFlash:'Wrong Username or Password'}), function(req, res){
		res.redirect('/authenticated');
	});


	app.post('/signup', function(req, res){
		var user = new UserModel(req.body);
		UserModel.saveUser(user, function(status){
			if(!status) {
				res.redirect('/signup')
				return false
			}
			res.redirect('/');
		});
	});
};