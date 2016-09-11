var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


function View(props) {

    return (

    	<div id = 'Add'>

            	<div className = "container">

	            	<div className = "col-md-6 col-md-offset-3">

		                <div className="panel panel-default">
							<div className="panel-heading text-center">
		    					<h3 className="panel-title">Remaining HoneyDo's</h3>
		  					</div>

		  					<div className="panel-body">

								<div className = "row">
				  					<div className = "col-md-12">
					  					<div className="well">

					  						<p>{props.getHoneyDo}</p>

					  						<p>HoneyDo Item</p>

					  						<p>HoneyDo Item</p>
										</div>
									</div>


								</div>

								<div className = "row">

									<div className = "col-md-3 col-md-offset-1">

										<Link to="/dash"><button type="button" className="btn btn-warning form-control">Dashboard</button></Link>

									</div>

									<div className = "col-md-3 col-md-offset-1">

										<Link to="/completed"><button type="button" className="btn btn-primary form-control">Completed</button></Link>

									</div>

									<div className = "col-md-3">

										<Link to="/redeem"><button type="button" className="btn btn-danger form-control">Finished</button></Link>

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

module.exports = View;