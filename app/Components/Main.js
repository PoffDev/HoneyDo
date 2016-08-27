import React from 'react'

import { Link } from 'react-router'


export default React.createClass({
    render: function() {
        return (
            
            <div id = 'main'>

                <div className="container text-center">

					<div className="row">

						<div className="col-md-4 col-md-offset-4">

							<div className="jumbotron">
								
								<h1>HoneyDo</h1>
								
							</div>
						</div>

					</div>


					<div className='row'>

						<div className="col-md-4 col-md-offset-4">

							<div className="panel panel-default">

								<div className="panel-body">

									<h2>Where everyone gets what they want</h2>
									
								</div>

							</div>
					
						</div>
			
					</div>

					<div className='row'>

						<div className = "col-md-1 col-md-offset-5">

							<Link to="/login"><button type="button" className="btn btn-primary">Login</button></Link>

						</div>

						<div className = "col-md-1">

							<Link to="/home"><button type="button" className="btn btn-warning">About</button></Link>

						</div>

					</div>

				</div>

			</div>
            
        );
    }
});