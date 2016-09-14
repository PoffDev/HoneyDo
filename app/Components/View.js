var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


function View(props) {

	var getHoneyDo = props.getHoneyDo;

	var getRewards = props.getRewards;

    return (

    	<div id = 'Add'>

            	<div className = "container-fluid">

	            	<div className = "col-md-4 col-md-offset-1">

		                <div className="panel panel-default">
							<div className="panel-heading text-center">
		    					<h3 className="panel-title">Remaining HoneyDo's</h3>
		  					</div>

		  					<div className="panel-body">

								<div className = "row">
				  					<div className = "col-md-12">
					  					<div className="well">
					  						<ul>

					  						{getHoneyDo.map( function (task,i){
                           						
                           						return(<li key={i}> {task.HoneyDo} 
                           							<button type="button" className="btn btn-link">Delete</button>

                           							</li>)
        					                	})}

					  						</ul>

										</div>
									</div>

								</div>

							</div>

						</div>

					</div>

					<div className = "col-md-4 col-md-offset-2">

		                <div className="panel panel-default">
							<div className="panel-heading text-center">
		    					<h3 className="panel-title">Remaining Rewards</h3>
		  					</div>

		  					<div className="panel-body">

								<div className = "row">
				  					<div className = "col-md-12">
					  					<div className="well">
					  						<ul>

					  						{getRewards.map( function (reward,i){
                           						
                           						return(<li key={i}> {reward.Reward}
                           							<button type="button" className="btn btn-link">Redeem</button>
                           						</li>)
        					                	})}

					  						</ul>

										</div>
									</div>

								</div>

							</div>

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

module.exports = View;