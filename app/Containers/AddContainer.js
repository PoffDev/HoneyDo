var React = require('react');
var Add = require('../Components/Add');
var helpers = require('../utilites/helpers');

var AddContainer = React.createClass({

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
  			HoneyDo: '',
  			BrowniePoints: '',
  			CompleteBy: '',
  		}
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

	render: function() {
		return (
			<Add 
				updateInputs = {this.updateInputs}
				addUserTask = {this.addUserTask} />

		)
	}


});

module.exports = AddContainer;