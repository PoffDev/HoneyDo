var React = require('react');
var Add = require('../Components/Add');
var helpers = require('../utilites/helpers');
var axios = require('axios');

var AddContainer = React.createClass({

	contextTypes: {
    	router: React.PropTypes.object.isRequired
  	},

  	getInitialState: function (){
  		return {
  			userID: localStorage.getItem('_id'),
  			HoneyDo: '',
  			BrowniePoints: '',
  			Date: '',
  		}
  	},

  	componentWillMount: function (){
  		if (this.state.userID === null){
  			this.context.router.push({
  				pathname: '/'
  			})
  		}
  	},

  	updateInputs: function(event) {
		this.setState({[event.target.id]: event.target.value});

	},

	// addUserTask: function (event){
	// 	even.preventDefault();

	// 	helpers.addTask(this.state.userID, this.state.HoneyDo, this.state.BrowniePoints, this.state.Date);

	// 	this.context.router.push({

	// 		pathname:'/addtask',
	// 		state:{
	// 			userID: this.state.userID,
	// 			HoneyDo: this.state.HoneyDo,
	// 			BrowniePoints: this.state.BrowniePoints,
	// 			Date: this.state.Date
	// 		}
	// 	});
	// },




	//pull _id from local storage
	//use _id to find matching _id in data base
	//use _id to add tasks from form



	//how to add tasks to the database, replace email with _id
	//db.users.update({"email": "hello@hello.com"}, { $push: {"task": "take out the trash"} });

	render: function() {

		console.log(this.state.userID)

		return (

			<Add 
				updateInputs = {this.updateInputs} />

		)
	}


});

module.exports = AddContainer;