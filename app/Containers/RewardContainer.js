var React = require('react');
var Reward = require('../Components/Reward');
var helpers = require('../utilites/helpers');

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
      	"HoneyDo rewards can be anything and everything, the only limit is your imagination!", 
    	"Use the 'complete by' feature to help motivate your Honey by adding 25% more Brownie Poitns!", 
    	"Think about it, Brownie Points can be both rewarding and Delicious!",
    	"Make sure to follow HoneyDo on social media to stay up to date with future updates and offers!",
		"Make sure to checkout our Seeds, our childrens version of HoneyDo, and put your kids to work for you!",
		"A clean house leads to less stress, and also some much needed, uninterupted time with your TV!",
	   	"The cleaner that garage, the easier it is to turn into a man cave!",
		"A HoneyDo without a point value is a HoneyDo that wont get done!",
		"2oz fresh honeydew juice, 1.5oz fresh lime juice, and 1.5oz Tequila. Thank us later",
		"Love is shown in your deeds, but more importantly in your Rewards"
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