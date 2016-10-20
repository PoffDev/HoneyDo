var React = require('react');
var Reward = require('../Components/Reward');
var helpers = require('../Utilites/helpers');

var RewardContainer = React.createClass({

	contextTypes: {
    	router: React.PropTypes.object
  	},

  	componentWillMount: function (){
  		if (this.state.userID === null){
  			this.context.router.push({
  				pathname: '/'
  			})
  		}
  	},

  	getInitialState: function (){
  		return {
  			Reward: '',
  			PointValue: '',
  			message: 'Need some inspiration, Click Me'
  		}
  	},

  	onClick: function() {
    	var messages = 
        [
      	"You get to pick desert", 
    	"Time away from my mother", 
    	"Fresh baked brownies",
    	"2 hours at the bar",
		'Permision to buy that 60" tv',
		'Unreciprocated backrub',
		'Date night where You choose everything',
		"I'll watch the game with you",
		'Automatic get out of the dog house card'
    ];
    	
    	var randomMessage = messages[Math.floor(Math.random()*messages.length)];

    	this.setState({ message: randomMessage });
  	},

  	updateInputs: function(event) {
		this.setState({[event.target.id]: event.target.value});

	},

	reward: function (event){
		event.preventDefault();

		helpers.reward(this.state.Reward, this.state.PointValue);

		this.context.router.push({

			pathname:'/Dash',
			state:{
				Reward: this.state.Reward,
				PointValue: this.state.PointValue
			}
		});
	},

	link: function (){
		this.context.router.push({
			pathname: '/Dash'
		})
	},

	render: function() {
		return (
			<Reward
				message = {this.state.message}
				onClick = { this.onClick } 
				link = {this.link}
				updateInputs = {this.updateInputs}
				reward = {this.reward} />

		)
	}


});

module.exports = RewardContainer;