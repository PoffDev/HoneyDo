var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;



//Components
var Add = require('../Components/Add');
var Dash = require('../Components/Dash');
var Home = require('../Components/Home');
var Login = require('../Components/Login');
var Main = require('../Components/Main');
//var Redeem = require('../Components/Redeem');
var Reward = require('../Components/Reward');
//var View = require('../Components/View')



//Containers
var AddContainer = require('../Containers/AddContainer');
var DashContainer = require('../Containers/DashContainer');
var HomeContainer = require('../Containers/HomeContainer');
var LoginContainer = require('../Containers/LoginContainer');
var RewardContainer = require('../Containers/RewardContainer');
var SignupContainer = require('../Containers/SignupContainer');
//var ViewContainer = require('../Containers/ViewContainer');





var Routes = React.createClass({

	 render: function() {

	 	return (
			<Router history={hashHistory}>
				<Route path= "/Home" component={HomeContainer} />
				<Route path= "/Add" component={AddContainer} />
				<Route path= "/Dash" component={DashContainer}/>
				<Route path= "/Login" component={LoginContainer}/>
				<Route path= "/Reward" component={RewardContainer} />
				<Route path= "/SignUp" component={SignupContainer} />

			</Router>
		)

	}

});

module.exports = Routes;
