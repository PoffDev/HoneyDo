var React = require('react');
var helpers = require('../utilites/helpers');
var View = require('../Components/View');

var ViewContainer = React.createClass({

	componentWillMount: function (){
  		if (this.state.userID === null){
  			this.context.router.push({
  				pathname: '/'
  			})
  		}
  	},

  	//correct syntax to remove a task.
  	//db.users.update({"email": "hello@hello.com"}, {$pull: {'task': {'HoneyDo': "Do the Dishes"}}} );

	render: function (){

		return (

			<View />

		)
	}
});

module.exports = ViewContainer;