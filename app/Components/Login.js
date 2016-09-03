var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Login(props) {

	return(
		<div className = "container text-center">

	        <div className = "row">

		        <div className = "col-md-6 col-md-offset-3">

					<form className="contact-form" onSubmit={props.loginUser}>

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

	)
}

module.exports = Login;