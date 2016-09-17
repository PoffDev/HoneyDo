var React = require('react');
var Router = require('react-router')
var Signup = require('../Components/Signup');
var helpers = require('../utilites/helpers');

var SignupContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object
	},

	getInitialState() {
		return {
			email: '',
			partner1: '',
			partner2: '',
			password: '',
			points: 0,
		};
	},
	
	updateInputs: function(event) {
		this.setState({[event.target.id]: event.target.value});

	},
	
	signupUser: function(event){
		event.preventDefault();

		helpers.signupUser(this.state.email, this.state.partner1, this.state.partner2, this.state.password);

		this.context.router.push({

			pathname:'/SignUp',
			state:{
				email: this.state.email,
				partner1: this.state.partner1,
				partner2: this.state.partner2,
				password: this.state.password,
				points: 0,
			},

		});

	},

	link: function (){
		this.context.router.push({
			pathname: 'Login'
		})
	},

	render: function() {
		console.log(this)
		return (
			<Signup
				updateInputs={this.updateInputs}
				signupUser={this.signupUser} 
				link = {this.link}/>
		)
	}
});

module.exports = SignupContainer;