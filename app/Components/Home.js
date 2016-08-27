import React from 'react'

import { Link } from 'react-router'

export default React.createClass({
  render: function () {
    return (

    	<div className = "containter">

    			<h1>This is Home</h1>

    			<div className = "row">

	    			<div className = "col-md-1">

	    				<Link to="/Home"><button type="button" className="btn btn-danger">Log Out</button></Link>

	    			</div>

	    		</div>

	    </div>

    	)
	}
})