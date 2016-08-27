import React from 'react'

import { Link } from 'react-router'


export default React.createClass({
    render: function() {
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
				  					<div className = "col-md-7 col-md-offset-1">
					  					<div className="well">

					  						<ul>
					    						<li>This is a HoneyDo:
					    							<ul>
					    								<li><i>time remaining for bonus</i></li>
					    							</ul>
					    						</li>
					    						
					    						<li>This is a HoneyDo:
					    							<ul>
					    								<li><i>time remaining for bonus</i></li>
					    							</ul>
					    						</li>

					    						<li>This is a HoneyDo:
					    							<ul>
					    								<li><i>time remaining for bonus</i></li>
					    							</ul>
					    						</li>

					    						<li>This is a HoneyDo:
					    							<ul>
					    								<li><i>time remaining for bonus</i></li>
					    							</ul>
					    						</li>

					    					</ul>
										</div>
									</div>

									<div className = "col-md-3">
					  					
					  					<div className="well">
											<ul>
												<li><input type="checkbox"></input>
					    							<ul>
					    								<li></li>
					    							</ul>
					    						</li>
												<li><input type="checkbox"></input>
					    							<ul>
					    								<li></li>
					    							</ul>
					    						</li>
					    						<li><input type="checkbox"></input>
					    							<ul>
					    								<li></li>
					    							</ul>
					    						</li>
					    						<li><input type="checkbox"></input>
					    							<ul>
					    								<li></li>
					    							</ul>
					    						</li>
											</ul>
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
            
        );
    }
});