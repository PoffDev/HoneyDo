var React = require('react');
var ReactRouter = require('react-router');
var LoginNav = require('./Children/LoginNav');
var Link = ReactRouter.Link;


function View(props) {

	var getHoneyDo = props.getHoneyDo;

	console.log(getHoneyDo);

	var getRewards = props.getRewards;


    return (

    	<div id = 'View'>

    		<LoginNav />

            	<div className = "container-fluid">

	            	<div className = "col-md-6 col-md-offset-1">

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
                           						
                           						return(
                           						<li key={i}> {task.HoneyDo} ({task.BrowniePoints} BP's))
                           							<button 
                           								type= "button" 
                           								onClick= {function()
                           									{props.completeTask(i)}} 
                           								className="btn btn-link">Honey, I'm Done!
                           								</button>

                           						</li>)
        					                	})}

					  						</ul>

										</div>
									</div>

								</div>

							</div>

						</div>

					</div>

					<div className = "col-md-4">

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
                           						
                           						return(<li key={i}> {reward.Reward} ({reward.PointValue} BP's)
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