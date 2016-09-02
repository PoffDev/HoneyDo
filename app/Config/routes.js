var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;


//Components
var Main = require('../Components/Main');
// var Home = require('../Components/Home');
// var Signup = require('../Components/SignUp');


//Containers
var SignupContainer = require('../Containers/SignupContainer');




var Routes = React.createClass({

	 render: function() {

	 	return (
			<Router history={hashHistory}>
				<Route path="/" component={Main} />
				<Route path= "/SignUp" component={SignupContainer} />

			</Router>
		)

	}

});

module.exports = Routes;

//<Route path="/Signup" component={SignupContainer} />

// <Route path="/Dash" component={Dash}/>
// 		<Route path="/Home" component={Home}/>
// 		<Route path="/Login" component={Login}/>
// 		<Route path="/Main" component={Main}/>
// 		<Route path="/Redeem" component={Redeem}/>
// 		<Route path="/SignUp" component={SignUp}/>
// 		<Route path="/View" component={View}/>