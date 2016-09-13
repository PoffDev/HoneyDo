 var React = require('react');
var View = require('../Components/View');
var helpers = require('../utilites/helpers');


var ViewContainer = React.createClass({

	contextTypes: {
    	router: React.PropTypes.object
  	},

  	getInitialState: function() {
    	return { 
    		userID: localStorage.getItem('_id')
    	};

  	},

    // getHoneyDo: function (){
    //   event.preventDefault();

    //   helpers.findHoneyDo(this.state.userID);

    //   this.context.router.push({
    //     pathname: '/View',
    //     state:{
    //       userID: userID
    //     }
    //   })
    // },

	componentWillMount: function (){
  		if (this.state.userID === null){
  			this.context.router.push({
  				pathname: '/'
  			})
  		} else {

        helpers.findHoneyDo(this.state.task);

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

			<View 
        getHoneyDo = {this.getHoneyDo}/>

		)
	}
});

module.exports = ViewContainer;