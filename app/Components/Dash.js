var React = require('react');
var ReactRouter = require('react-router');
var Footer = require('./Children/Footer')
var Link = ReactRouter.Link;

var Dash = React.createClass({
	render: function(){
		var self = this;
		
	    return (

	    	<div>

	    		<div className = "container">

	    			<div className = "row">

	    				<div className = "col-md-2 col-md-offset-1">

	    					<div className="panel panel-default text-center">
									<div className="panel-heading">
										<h3 className="panel-title">Brownie Points</h3>
									</div>
								  
								<div className="panel-body">
									<span><h1>100</h1><p>pts</p></span>
								</div>
							</div>

		    			</div>

		    			<div className = "col-md-6 col-md-offset-2">

	    					<div className="panel panel-default text-center">
									<div className="panel-heading">
										<h3 className="panel-title">Available Rewards</h3>
									</div>
								  
								<div className="panel-body">
									<span><p>rewards populate here</p></span>
								</div>
							</div>

		    			</div>

		    		</div>

		    		<br />

		    		<div className = "row">

		    			<div className = "col-md-2 col-md-offset-1">

		    				<Link to="/add"><button type="button" className="btn btn-primary form-control">Add Tasks</button></Link>

		    			</div>

		    			<div className = "col-md-2 col-md-offset-2">

		    				<Link to="/view"><button type="button" className="btn btn-primary form-control">View Tasks</button></Link>

		    			</div>

		    			<div className = "col-md-2 col-md-offset-2">

		    				<Link to="/reward"><button type="button" className="btn btn-primary form-control">Add Rewards</button></Link>

		    			</div>

		    		</div>

		    		<br />

		    		<div className = "row">

		    			<div className = "col-md-6 col-md-offset-3">

			    			<div className="well well-lg">

			    				<div> {self.props.message} </div>

			    			</div>

			    		</div>

		    		</div>

		    		<div className = "row">

		    			<div className = "col-md-2 col-md-offset-5">


			    				<button type="button" className="btn btn-primary form-control" onClick={self.props.onClick}>More Tips</button>


			    		</div>

		    		</div>

		    		<div className = "row">

		    			<div className = "col-md-1">

		    				<Link to="/Home"><button type="button" className="btn btn-danger">Log Out</button></Link>

		    			</div>

		    		</div>

	    		</div>

	    	</div>

	    	)
	  	}
	})

module.exports = Dash;