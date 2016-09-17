var React = require('react');
var Add = require('../Components/Add');
var helpers = require('../utilites/helpers');

var AddContainer = React.createClass({

	contextTypes: {
    	router: React.PropTypes.object
  	},

  	getInitialState: function (){
  		return {
  			HoneyDo: '',
  			BrowniePoints: '',
  			CompleteBy: '',
  			message: 'Need Some inspiration? Click me'
  		}
  	},

  	componentWillMount: function (){
  		if (this.state.userID === null){
  			this.context.router.push({
  				pathname: '/'
  			})
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

	addUserTask: function (event){
		event.preventDefault();

		helpers.addTask(this.state.HoneyDo, this.state.BrowniePoints, this.state.CompleteBy);

		this.context.router.push({

			pathname:'/Dash',
			state:{
				HoneyDo: this.state.HoneyDo,
				BrowniePoints: this.state.BrowniePoints,
				CompleteBy: this.state.CompleteBy,
			}
		});
	},

	logout: function(){

      localStorage.removeItem("_id");

      this.context.router.push({
        pathname: '/',

        });
    },

	render: function() {
		return (
			<Add 
				message = {this.state.message}
				onClick = { this.onClick } 
				logout = {this.logout}
				updateInputs = {this.updateInputs}
				addUserTask = {this.addUserTask} />

		)
	},


});

module.exports = AddContainer;