var React = require('react');
var ReactRouter = require('react-router');
var Nav = require('./Children/Nav');
var Footer = require('./Children/Footer')
var Link = ReactRouter.Link;

var Home = React.createClass({

    render: function() {

    return (

    	<div>

    		<Nav />

    	<div className = "containter">

    			<div id = 'home'>
					<div className = 'container-fluid'>
						<div className = 'container'>
							<div className = 'row'>
								<div className = 'col-md-10 col-md-offset-2'>
									<div className = 'jumbotron' id = 'jumbo'>
										<h1>HoneyDo</h1>
										
										<div id = 'catchPhrase'>
										<p>The only way to get what either of you want</p></div>

										<div className="row">

											<div className = "col-md-1 col-md-offset-5">

												<Link to="/login"><button type="button" className="btn btn-primary">Login</button></Link>

											</div>

											<div className = "col-md-1 col-md-offset-2">

												<Link to="/SignUp"><button type="button" className="btn btn-warning">Sign Up</button></Link>

											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className = 'container'>
					<div id = 'about'>
						<div className = 'row' id = 'aboutRow'>
							<div className = 'col-md-4'>
								<div className="panel panel-default">
				  					<div className="panel-body">
										<i className="fa fa-list-ul fa-5x" aria-hidden="true"></i>
										<h1>Assign</h1>
										<p>Assign tasks, with "brownie" points, for your Hubby to complete</p>
									</div>
								</div>
							</div>
							<div className = 'col-md-4'>
								<div className="panel panel-default">
				  					<div className="panel-body">
										<i className="fa fa-check fa-5x" aria-hidden="true"></i>
										<h1>Complete</h1>
										<p>Hubby completes those tasks to earn "brownie" points.</p>
									</div>
								</div>
							</div>
							<div className = 'col-md-4'>
								<div className="panel panel-default">
				  					<div className="panel-body">
										<i className="fa fa-gift fa-5x" aria-hidden="true"></i>
										<h1>Redeem</h1>
										<p>Hubby redeems collected "brownie" points for prizes</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id = 'preview'>
					<div className = 'container-fluid'>
						<div className = 'row'>
							<div className = 'col-md-10 col-md-offset-1'>
								<div id = 'previewImage'>

									<img src="http://placehold.it/950x425" />

								</div>
							</div>
						</div>
					</div>
				</div>

	    </div>

	    	<Footer />

	    </div>

    	)
	}
});

module.exports = Home;