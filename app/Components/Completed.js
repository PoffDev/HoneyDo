var React = require('react');
var ReactRouter = require('react-router');
var Nav = require('./Children/Nav');
var Footer = require('./Children/Footer')
var Link = ReactRouter.Link;

var Completed = React.createClass({

    render: function() {

    return (

    	<div id = 'Add'>

            	<div className = "container">

	            	<div className = "col-md-6 col-md-offset-3">

		                <div className="panel panel-default">
							<div className="panel-heading text-center">
		    					<h3 className="panel-title">Completed Tasks</h3>
		  					</div>

		  					<div className="panel-body">

								<div className = "row">
				  					<div className = "col-md-10 col-md-offset-1">
					  					<div className="well">

					  						<ul>
					    						<li>This is a Completed HoneyDo</li>
					    						
					    						<li>This is a Completed HoneyDo</li>

					    						<li>This is a Completed HoneyDo</li>

					    						<li>This is a Completed HoneyDo</li>

					    					</ul>
										</div>
									</div>

								</div>

								<div className = "row">

									<div className = "col-md-3 col-md-offset-1">

										<button type="button" className="btn btn-warning form-control">Dashboard</button>

									</div>

									<div className = "col-md-3 col-md-offset-4">

										<Link to="/view"><button type="button" className="btn btn-primary form-control">HoneyDo List</button></Link>

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


module.exports = Completed;