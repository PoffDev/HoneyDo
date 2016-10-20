var React = require('react');
var Login = require('../Components/Login');
var helpers = require('../Utilites/helpers');
var axios = require('axios');

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

		var self = this;

		helpers.loginUser(this.state.email, this.state.password).then(function(msg){
			console.log(msg, localStorage.getItem('_id'));
			if(localStorage.getItem('_id') == null){
				self.context.router.push({
					pathname: '/Signup',
					state: {
						message: "You are not logged in."
					}
				})
			}else{
				self.context.router.push({
							pathname: '/Dash',
							state: {
								email: self.state.email
							}
					})
			};
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