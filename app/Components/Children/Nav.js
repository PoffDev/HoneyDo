var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Nav = React.createClass({

	render: function() {

		return (

			<div className = "container-fluid">

				<nav className = "navbar navbar-default navbar-fixed-top">

					<div className = "container">
					
						<ul className="nav navbar-nav navbar-right">
						  	<li role="presentation"><Link to="/SignUp">Home</Link></li>
						  	<li role="presentation"><Link to="/SignUp">About</Link></li>
						  	<li role="presentation"><Link to="/SignUp">Sign Up</Link></li>
						</ul>

					</div>
					
				</nav>

			</div>

		)

	}
})

module.exports = Nav;