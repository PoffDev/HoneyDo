var React = require('react');
var ReactRouter = require('react-router');
var LoginNav = require('./Children/LoginNav');
var Link = ReactRouter.Link;


function Reward(props) {

	return (

    	<div id = 'Reward'>

    		<LoginNav />

            	<div className = "container text-center">

	            	<div className = "row">

		            	<div className = "col-md-6 col-md-offset-3">

		            	<form className="contact-form" onSubmit={props.reward}>
                			<div className="form-group">
                 			 <input type="text" className="form-control" id="Reward" placeholder="1 Day of watching Football Uninterupted" onChange={props.updateInputs}/>
                			</div>
                			<div className="form-group">
                 			 <input type="text" className="form-control" id="PointValue" placeholder="100 BrowniePoints" onChange={props.updateInputs}/>
                			</div>

                			<button type="submit" className="btn btn-lg btn-block btn-default">Add Reward</button>
              
              			</form>

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
};

module.exports = Reward;


