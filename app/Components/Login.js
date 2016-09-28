var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Login(props) {

	console.log(props.getInitialState);

	return(
			<div>

				<div className = "container" id="navigation">

	    			<div className = "row">

	    				<div className = "col-md-11" id="honeydopic">

	    					<img src="pics/blackright.png" alt="Big Logo" height="41" width="200" />

	    				</div>

	    				<div className = "col-md-1">

							<Link to="/Home"><button type="button" id="colorbutton" className="btn">Home</button></Link>

						</div>

						

					</div>

				</div>


				
				<div className = "container text-center" id="Login">

			        <div className = "row">

			        	<div className = "col-md-5">

			        		<img src="pics/melon.png" alt="Big Logo" height="260" width="275" />

			        	</div>

				        <div className = "col-md-6">

							<form className="contact-form" onSubmit={props.loginUser}>

								<div className="form-group">
					 			 <img src="pics/logo.png" alt="Big Logo" height="160" width="450" />
								</div>

								<div className="form-group">
					 			 <input type="text" className="form-control" id="email" placeholder="Email" onChange={props.updateInputs} />
								</div>

								<div className="form-group">
					 			<input type="password" className="form-control" id="password" placeholder="Password" onChange={props.updateInputs} />
								</div>

								<button type="submit" className="btn btn-lg btn-block btn-default">Login</button>
					              
					        </form>

					    </div>

					</div>

				</div>

			</div>	

	)
}

module.exports = Login;