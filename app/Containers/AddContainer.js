var React = require('react');
var Add = require('../Components/Add');
var helpers = require('../utilites/helpers');
var axios = require('axios');

var AddContainer = React.createClass({

	//pull _id from local storage
	//use _id to find matching _id in data base
	//use _id to add tasks from form

	getInitialState (){
		return {
			task: "",
			bPoint: "",
			date: "",
		}
	},

	updateInputs: function(event) {
		this.setState({[event.target.id]: event.target.value});

	},

	render: function() {

		return (

			<Add 
				updateInputs = {this.updateInputs} />

		)
	}


});

module.exports = AddContainer;