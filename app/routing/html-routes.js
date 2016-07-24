var path = require('path');

module.exports = function (app) {

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
};