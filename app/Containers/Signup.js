var React = require('react');
var Signup = require('../Components/Signup');
var helpers = require('../utilites/helpers');

var SignupContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object
	},

	getInitialState() {
		return{
			email: '',
			partner1: '',
			partner2: '',
			password: ''
		};
	},

	updateInputs: function(event) {
		this.setState({[event.target.id]: event.target.value});

	},

	signupUser: function(event){
		event.preventDefault();

		helpers.signupUser(this.state.email, this.state.partner1, this.state.partner2, this.state.password);

		this.context.router.push({

			pathname:'/dash',
			state:{
				email: this.state.email
			}
		});

	},

	render: function() {

		return (
			<Signup
				updateInputs={this.updateInputs}
				signupUser={this.signupUser} />
		)
	}
});

module.exports = SignupContainer;