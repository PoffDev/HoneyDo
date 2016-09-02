var React = require('react');

var Nav = React.createClass({

	render: function() {

		return (

			<div className = "container-fluid">

				<nav className = "navbar navbar-default navbar-fixed-top">

					<div className = "container">
					
						<ul className="nav navbar-nav navbar-right">
						  	<li role="presentation"><a href="#Home">Home</a></li>
						  	<li role="presentation"><a href="#About">About</a></li>
						  	<li role="presentation"><a href="/signup">Sign Up</a></li>
						</ul>

					</div>
					
				</nav>

			</div>

		)

	}
})

module.exports = Nav;