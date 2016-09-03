var React = require('react');
var Login = require('../Components/Login');
var helpers = require('../utilites/helpers');

var LoginContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			email: '',
			password: ''
		};
	},

	updateInputs: function(event) {
		this.setState({[event.target.id]: event.target.value});

	},

	loginUser: function(event){
		event.preventDefault();

		helpers.loginUser(this.state.email, this.state.password);

		this.context.router.push({

			pathname:'/Dash',
			state:{
				email: this.state.email,
			}
		});

	},

	render: function() {

		return (
			<Login
				updateInputs={this.updateInputs}
				loginUser={this.loginUser} />
		)
	}
});

module.exports = LoginContainer;