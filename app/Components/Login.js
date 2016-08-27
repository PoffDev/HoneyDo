import React from 'react'

import { Link } from 'react-router'


export default React.createClass({
    render: function() {
        return (
            
            <div id = 'Add'>

            	<div className = "container text-center">

	            	<div className = "row">

		            	<div className = "col-md-4 col-md-offset-4">

			                <div className="panel panel-default">
								
								<div className="panel-heading">
			    					<h3 className="panel-title">Log in to HoneyDo</h3>
			  					</div>

			  			
				  				<div className = "row">
				  					<div className = "col-md-10 col-md-offset-1">
				  					<div className="panel-body">
				    					<div className="form-group">
				    						<label>Email address</label><br />
				    						<input type="email"  id="emailInput" className="form-control"/>

										</div>
									</div>
									</div>
								</div>

								<div className = "row">
				  					<div className = "col-md-10 col-md-offset-1">
				  					<div className="panel-body">
				    					<div className="form-group">
				    						<label>Password</label><br />
				    						<input type="email"  id="emailInput" className="form-control"/>

										</div>
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

			</div>
            
        );
    }
});