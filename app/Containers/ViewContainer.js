 var React = require('react');
var View = require('../Components/View');
var helpers = require('../utilites/helpers');


var ViewContainer = React.createClass({

    contextTypes: {
    	router: React.PropTypes.object
  	},

  	getInitialState: function() {
    	return { 
    		userID: localStorage.getItem('_id'),
        tasks: [],
        points: [],
        rewards: [],
        rPointValue: [],
    	};

  	},

	componentWillMount: function (){
  		if (this.state.userID === null){
  			this.context.router.push({
  				pathname: '/'
  			})
  		} else {

        var self = this

        
        //HoneyDo's
        helpers.findHoneyDo().then(function(response){

          //console.log(response.data[0].task)

          self.setState({
            tasks: response.data[0].task,
            points: response.data[0].task
          });

        });

        //Reward
        helpers.findReward().then(function(response){

          //console.log(response.data[0].reward)

          self.setState({
            rewards: response.data[0].reward,
            rPointValue: response.data[0].reward
          });

        });

        this.context.router.push({
        pathname: '/View',
        
        })
      }
  },


  	//find all HoneyDo
  	//db.users.find({}, {"task.HoneyDo": 1});

  	//update task.done == true


  	//correct syntax to remove a task.
  	//db.users.update({"email": "hello@hello.com"}, {$pull: {'task': {'HoneyDo': "Do the Dishes"}}} );

	render: function (){


      return (
      //map out this.state.tasks.map(function(task){})
      <View 
        getHoneyDo = {this.state.tasks}
        getPoints = {this.state.tasks}
        getRewards = {this.state.rewards}
        getRewardPoints = {this.state.rewards} />

    )
	}
});

module.exports = ViewContainer;