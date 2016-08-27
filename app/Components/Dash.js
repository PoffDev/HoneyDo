import React from 'react'

import { Link } from 'react-router'


export default React.createClass({
	render: function () {
    	return (

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

	    		<div className = "row">

	    			<div className = "col-md-4 col-md-offset-1">

	    				<Link to="/add"><button type="button" className="btn btn-primary form-control">Add Tasks</button></Link>

	    			</div>

	    			<div className = "col-md-4 col-md-offset-2">

	    				<Link to="/view"><button type="button" className="btn btn-primary form-control">View Tasks</button></Link>

	    			</div>

	    		</div>

	    		<br />

	    		<div className = "row">

	    			<div className = "col-md-6 col-md-offset-3">

		    			<div className="well well-lg">

		    				<p>I will be a well that displays a random array of information. Usually I'll display an idea for a task to be completed or an idea for a task to be completed. I'll also display random information about the app, like little known features such as the bonus points. </p>

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