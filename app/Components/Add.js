var React = require('react');
var ReactRouter = require('react-router');
var LoginNav = require('./Children/LoginNav');
var Link = ReactRouter.Link;


function Add(props) {

	return (

    	<div id = 'Add'>

    		<LoginNav />

            	<div className = "container text-center">

	            	<div className = "row">

		            	<div className = "col-md-6 col-md-offset-3">

			            	<form className="contact-form" onSubmit={props.addUserTask}>
		            			<div className="form-group">
		             			 <input type="text" className="form-control" id="HoneyDo" placeholder="HoneyDo" onChange={props.updateInputs} />
		            			</div>
		            
		                		<div className="form-group">
		                  			<input type="text" className="form-control" id="BrowniePoints" placeholder="500" onChange={props.updateInputs} />
		                		</div>
		                		<div className="form-group">
		              				<input type="text" className="form-control" id="CompleteBy" placeholder="01/01/2017" onChange={props.updateInputs} />
		            			</div>

		            			<button type="submit" className="btn btn-lg btn-block btn-default">Add Task</button>
		          
		          			</form>

						</div>

					</div>

				</div>

				<div className = "row">

    				<div className = "col-md-6 col-md-offset-3">

		    			<div className="well well-lg text-center" id="ideaWell" onClick={props.onClick}>

		    				<div> <h5>{props.message}</h5> </div>

		    			</div>

		    		</div>

	    		</div>

	    		<div className = "row text-center" id="footer">

	    			<div className = "row">

	    				<div className = "col-md-12">

	    					<p onClick={props.logout}>Made with love from @Poffdev, click Here to say goodbye</p>

	    				</div>

	    			</div>

		    	</div>

		    </div>

    	)
};

module.exports = Add;


