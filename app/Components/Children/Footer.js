var React = require('react');

var Footer = React.createClass({

	render: function() {

		return (

			<div className = "container-fluid">
				<div id = "footer">
					<nav className = "navbar navbar-default">

						<div className = "container">
					
							<ul className="nav navbar-nav navbar-right">
							  	<li role="presentation"><a href="http://www.github.com/PoffDev">Designed and Created with Love from PoffDev</a></li>
							</ul>

						</div>
					
					</nav>
				</div>

			</div>

		)

	}
})

module.exports = Footer;