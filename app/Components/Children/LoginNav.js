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

				<nav className = "navbar navbar-default navbar-fixed-top">
					
						<ul className="nav navbar-nav navbar-left">
						  	<Link to="/Dash"><img src="pics/allBlack.png" alt="Smiley face" height="45" width="45" style={style} /></Link>
						  	
						</ul>

						<ul className="nav navbar-nav navbar-right">
							<Link to ="/Dash">Sign Out</Link>

						</ul>

					
					
				</nav>

			</div>

		)

	}
})

module.exports = LoginNav;