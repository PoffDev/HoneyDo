var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;


//Components
var Main = require('../Components/Main');
var Login = require('../Components/Login');
var Home = require('../Components/Home');

// var Signup = require('../Components/SignUp');


//Containers
var SignupContainer = require('../Containers/SignupContainer');
var LoginContainer = require('../Containers/LoginContainer');




var Routes = React.createClass({

	 render: function() {

	 	return (
			<Router history={hashHistory}>
				<Route path= "/" component={Home} />
				<Route path= "/SignUp" component={SignupContainer} />
				<Route path= "Login" component={LoginContainer}/>

			</Router>
		)

	}

});

module.exports = Routes;

//<Route path="/Signup" component={SignupContainer} />

// <Route path="/Dash" component={Dash}/>
// 		<Route path="/Home" component={Home}/>
// 		<Route path="/Main" component={Main}/>
// 		<Route path="/Redeem" component={Redeem}/>
// 		<Route path="/SignUp" component={SignUp}/>
// 		<Route path="/View" component={View}/>