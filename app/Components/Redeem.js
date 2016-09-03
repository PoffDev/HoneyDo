var React = require('react');
var ReactRouter = require('react-router');
var Nav = require('./Children/Nav');
var Footer = require('./Children/Footer')
var Link = ReactRouter.Link;


var Redeem = React.createClass({

    render: function() {

    return (

    	<div id = 'Add'>

            	<div className = "container">

            		<div className = "row">

	    				<div className = "col-md-2 col-md-offset-5">

	    					<div className="panel panel-default text-center">
									<div className="panel-heading">
										<h3 className="panel-title">Brownie Points</h3>
									</div>
								  
								<div className="panel-body">
									<span><h1>100</h1><p>pts</p></span>
								</div>
							</div>

		    			</div>

		    		</div>

		    		<br />

	            	<div className = "col-md-6 col-md-offset-3">

		                <div className="panel panel-default">
							<div className="panel-heading text-center">
		    					<h3 className="panel-title">Redeem Brownie Points</h3>
		  					</div>

		  					<div className="panel-body">

								<div className = "row">
				  					<div className = "col-md-7 col-md-offset-1">
					  					<div className="well">

					  						<ul>
					    						<li>This is a HoneyDo REWARD!</li>
					    						
					    						<li>This is a HoneyDo REWARD!</li>

					    						<li>This is a HoneyDo REWARD!</li>

					    						<li>This is a HoneyDo REWARD!</li>

					    					</ul>
										</div>
									</div>

									<div className = "col-md-3">
					  					
					  					<div className="well">
											<ul>
												<li><input type="checkbox"></input></li>
												<li><input type="checkbox"></input></li>
					    						<li><input type="checkbox"></input></li>
					    						<li><input type="checkbox"></input></li>
											</ul>
										</div>

									</div>


								</div>

								<div className = "row">

									<div className = "col-md-7 col-md-offset-1">

										<div className="well well-lg">

		    						<p>Click select which reward you would like to redeem and then click the redeem button</p>

		    			</div>

									</div>

									<div className = "col-md-3">

										<button type="button" className="btn btn-primary form-control">Redeem</button>

									</div>

								</div>

							</div>

						</div>

					</div>
						
				</div>

				<div className = "row">

	    			<div className = "col-md-1">

	    				<Link to="/Home"><button type="button" className="btn btn-danger">Log Out</button></Link>

	    			</div>

	    		</div>

			</div>

    	)
  	}
});

module.exports = Redeem;