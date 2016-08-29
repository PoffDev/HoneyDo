import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

export default React.Component {

	constructor() {
		super(props)
		this.state = {
			email: '',
			password: ''
		};
	}

	login(e) {
		e.preventDefault();

		Auth.login(this.state.email, this.state.password)
			.catch(function(err){
				console.log("error loggin in", err);
			});

	}
}

export default React.createClass ({
    render: function () {
        
        return (
            
            <div id = 'Login'>

            	<form role="form">

            		<div className="form-group">

            			<input type="text" valueLink={this.linkState('email')} placeholder="Email Adress" />

            			<input type="password" valueLink={this.linkState('password')} placeholder='Password' />
            		</div>

            		<button type="submit" onClick={this.login.bind(this)}>Submit</button>

            	</form>

            </div>
            
        );
    }

}
});