var React = require('react');
var Router = require('react-router')
var Home = require('../Components/Home');
var helpers = require('../utilites/helpers');

var HomeContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object
	},

	getInitialState() {
		return {
			partner1: '',
			partner2: '',
			email: '',
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

			pathname:'/Signup',
			state:{
				partner1: this.state.partner1,
				partner2: this.state.partner2,
				email: this.state.email,
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
			<Home
				getInitialState = {this.getInitialState}
				updateInputs={this.updateInputs}
				signupUser={this.signupUser} 
				link = {this.link}/>
		)
	}
});

module.exports = HomeContainer;