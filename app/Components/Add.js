var React = require('react');
var ReactRouter = require('react-router');
var Footer = require('./Children/Footer')
var Link = ReactRouter.Link;


function Add(props) {

	return (

    	<div id = 'Add'>

            	<div className = "container text-center">

	            	<div className = "row">

		            	<div className = "col-md-6 col-md-offset-3">

		            	<form className="contact-form" onSubmit={props.addUserTask}>
                			<div className="form-group">
                 			 <input type="text" className="form-control" id="HoneyDo" placeholder="HoneyDo" onChange={props.updateInputs} />
                			</div>
                
	                		<div className="form-group">
	                  			<input type="text" className="form-control" id="BrowniePoints" placeholder="50 Points" onChange={props.updateInputs} />
	                		</div>
	                		<div className="form-group">
                  				<input type="text" className="form-control" id="Date" placeholder="01/01/2001" onChange={props.updateInputs} />
                			</div>

                			<button type="submit" className="btn btn-lg btn-block btn-default">Signup</button>
              
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

module.exports = Add;


