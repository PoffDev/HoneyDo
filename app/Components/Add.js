import React from 'react'

import { Link } from 'react-router'


export default React.createClass({
    render: function() {
        return (
            
            <div id = 'Add'>

            	<div className = "container text-center">

	            	<div className = "row">

		            	<div className = "col-md-6 col-md-offset-3">

			                <div className="panel panel-default">
								
								<div className="panel-heading">
			    					<h3 className="panel-title">Add a Honey Do</h3>
			  					</div>

			  			
				  				<div className = "row">
				  					<div className = "col-md-10 col-md-offset-1">
				  					<div className="panel-body">
				    					<div className="form-group">
				    						<label>HoneyDo</label><br />
				    						<input type="text" id="addHoneyDo" className="form-control" placeholder = "Do the Dishes..."/>

										</div>
									</div>
									</div>
								</div>

								<div className = "row">
				  					<div className = "col-md-4 col-md-offset-2">
				  					<div className="panel-body">
				    					<div className="form-group">
				    						<label>Brownie Points</label><br />
				    						<input type="text" id="addPoints" className="form-control" placeholder = "50"/>

										</div>
									</div>
									</div>

									<div className = "col-md-4">
				  					<div className="panel-body">
				    					<div className="form-group">
				    						<label>Complete by Date</label><br />
				    						<input type="text" id="Complete by" className="form-control" placeholder = "01/01/1900"/>

										</div>
									</div>
									</div>
								</div>

								<div className = "row">
				  					<div className = "col-md-10 col-md-offset-1">
					  					<div className="well">
					    					<p>Select a complete by date to automatically add a 25% brownie point bonus</p>
										</div>
									</div>
								</div>

								<div className = "row">

											<Link to="/dash"><button type="button" className="btn btn-default">Submit</button></Link>
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
            
        );
    }
});