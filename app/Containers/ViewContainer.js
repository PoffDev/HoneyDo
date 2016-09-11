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

	componentWillMount: function (){
  		if (this.state.userID === null){
  			this.context.router.push({
  				pathname: '/'
  			})
  		}
  	},

  	//find all HoneyDo
  	//db.users.find({"email": "hello@hello.com"}, {"task.HoneyDo" : ""});

  	//update task.done == true


  	//correct syntax to remove a task.
  	//db.users.update({"email": "hello@hello.com"}, {$pull: {'task': {'HoneyDo': "Do the Dishes"}}} );

	render: function (){

		return (

			<View />

		)
	}
});

module.exports = ViewContainer;