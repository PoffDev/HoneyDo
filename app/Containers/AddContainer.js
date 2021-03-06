var React = require('react');
var Add = require('../Components/Add');
var helpers = require('../Utilites/helpers');

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
      	 "Wash and fold the laundry.", 
    	   "Clean the kitchen, wipe down counters and clean the sink.", 
    	   "Empty/fill dishwasher",
    	   "Pick up the children's toys",
		     "Wash the sheets and make the beds.",
         "Vacuum the carpet",
         "Take out the trash"
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