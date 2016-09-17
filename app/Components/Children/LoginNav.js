var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var LoginNav = React.createClass({


	render: function() {

		var style = {
		marginTop: "2px",
		marginLeft: "30px"
		}

		return (

			<div className = "container-fluid">

				<div className = "col-md-11" id="honeydopic">

	    			<img src="pics/blackright.png" alt="Logo" height="41" width="200" />

	    		</div>

			</div>

		)

	}
})

module.exports = LoginNav;