var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Signup(props) {

	return (

		<div id = 'Signup'>

            	<div className = "container text-center">

	            	<div className = "row">

		            	<div className = "col-md-6 col-md-offset-3">

		            	<form className="contact-form" onSubmit={props.signupUser}>
                			<div className="form-group">
                 			 <input type="email" className="form-control" id="email" placeholder="Email" onChange={props.updateInputs} />
                			</div>
                
	                		<div className="form-group">
	                  			<input type="text" className="form-control" id="partner1" placeholder="Partner 1" onChange={props.updateInputs} />
	                		</div>
	                		<div className="form-group">
                  				<input type="text" className="form-control" id="partner2" placeholder="Partner 2" onChange={props.updateInputs} />
                			</div>
                			<div className="form-group">
                 				<input type="password" className="form-control" id="password" placeholder="Password" onChange={props.updateInputs} />
                			</div>

                			<button type="submit" onClick={props.link} className="btn btn-lg btn-block btn-default">Signup</button>
              
              			</form>

						</div>

					</div>

				</div>

			</div>


	)
};

module.exports = Signup;