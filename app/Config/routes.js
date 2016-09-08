var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;



//Components
var Add = require('../Components/Add');
var Completed = require('../Components/Completed')
var Dash = require('../Components/Dash');
var Home = require('../Components/Home');
var Login = require('../Components/Login');
var Main = require('../Components/Main');
var Redeem = require('../Components/Redeem');
// var SignUp = require('../Components/SignUp')
var View = require('../Components/View')


//Containers
var SignupContainer = require('../Containers/SignupContainer');
var LoginContainer = require('../Containers/LoginContainer');
var DashContainer = require('../Containers/DashContainer');




var Routes = React.createClass({

	 render: function() {

	 	return (
			<Router history={hashHistory}>
				<Route path= "/" component={Home} />

				<Route path= "/Add" component={Add} />
				<Route path= "/Completed" component={Completed} />
				<Route path= "/Dash" component={DashContainer}/>
				<Route path= "/Login" component={LoginContainer}/>
				<Route path= "/Redeem" component={Redeem} />
				<Route path= "/SignUp" component={SignupContainer} />
				<Route path= "/View" component={View} />

			</Router>
		)

	}

});

module.exports = Routes;
