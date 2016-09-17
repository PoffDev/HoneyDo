var React = require('react');
var helpers = require('../utilites/helpers');
var Dash = require('../Components/Dash');

var DashContainer = React.createClass({

  contextTypes: {
      router: React.PropTypes.object
    },
    
    getInitialState: function() {
    	return { 
    		message: 'Click to see more tips',
    		userID: localStorage.getItem('_id'),
        points: 0,
        tasks: [],
        rewards: [],
    	};

  	},

  	componentWillMount: function (){

  		if (this.state.userID === null){
  			this.context.router.push({
  				pathname: '/'
  			})
  		} else {

        var self = this

        //Pull HoneyDo's
        helpers.findHoneyDo().then(function(response){

          //console.log(response.data[0].task)

          self.setState({
            tasks: response.data[0].task,
          });

        });

        //Pull Points
        helpers.getPoints().then(function(response){

        //console.log('dash container ' + response.data[0].Points)

        self.setState({
          points: response.data[0].Points
          })
        })

        //Reward
        helpers.findReward().then(function(response){

          console.log(response.data[0].reward)

          self.setState({
            rewards: response.data[0].reward
          });

        });

        this.context.router.push({
        pathname: '/Dash',
        
        })
      }
  	},

    completeTask: function(){

      helpers.completeTask().then(function(response){
          console.log('dash container helper fired')

        });

      var self = this

        //Pull HoneyDo's
        helpers.findHoneyDo().then(function(response){

          //console.log(response.data[0].task)

          self.setState({
            tasks: response.data[0].task,
          });

        });

        //Pull Points
        helpers.getPoints().then(function(response){

        //console.log('dash container ' + response.data[0].Points)

        self.setState({
          points: response.data[0].Points
          })
        })

        //Reward
        helpers.findReward().then(function(response){

          console.log(response.data[0].reward)

          self.setState({
            rewards: response.data[0].reward
          });

        });

        this.context.router.push({
        pathname: '/Dash',

        });

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

    logout: function(){

      localStorage.removeItem("_id");

      this.context.router.push({
        pathname: '/',

        });
    },

	
	render: function (){

		return(
			<Dash 
				message = {this.state.message}
				onClick = { this.onClick } 
        updatePoints = {this.state.points}
        getHoneyDo = {this.state.tasks}
        getRewards = {this.state.rewards} 
        completeTask = {this.completeTask}
        logout = {this.logout}/>

		)
	}
});

module.exports = DashContainer;