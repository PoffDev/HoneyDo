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
  		}
  	},

  	updateInputs: function(event) {
		this.setState({[event.target.id]: event.target.value});

	},

	reward: function (event){
		event.preventDefault();

		helpers.reward(this.state.Reward, this.state.PointValue);

		this.context.router.push({

			pathname:'/reward',
			state:{
				Reward: this.state.Reward,
				PointValue: this.state.PointValue
			}
		});
	},

	render: function() {
		return (
			<Reward
				updateInputs = {this.updateInputs}
				reward = {this.reward} />

		)
	}


});

module.exports = RewardContainer;