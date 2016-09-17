var React = require('react');
var ReactRouter = require('react-router');
var LoginNav = require('./Children/LoginNav');
var Link = ReactRouter.Link;

function Dash(props) {

	var getHoneyDo = props.getHoneyDo;

	//console.log(getHoneyDo)

	var getRewards = props.getRewards

	//console.log(getRewards)

	return (

	    	<div>

	    		<LoginNav />

	    		<div className = "container">

	    			<div className = "row">

	    				<div className = "col-md-4">

	    					<div className="panel panel-default text-center">
									<div className="panel-heading">
										<h3 className="panel-title">View Task</h3>
									</div>
								  
								<div className="panel-body">
									<span>

									{getHoneyDo.map( function (task,i){
                           						
                           						return(<li key={i}> {task.HoneyDo} ({task.BrowniePoints} BP's)
                           							<button 
                           								type= "button" 
                           								onClick= {function()
                           									{props.completeTask(i)}} 
                           								className="btn btn-link">Honey, I'm Done!
                           								</button>

                           						</li>)
        					        })}

									</span>
								</div>
							</div>

		    			</div>

	    				<div className = "col-md-2 col-md-offset-1">

	    					<div className="panel panel-default text-center">
									<div className="panel-heading">
										<h3 className="panel-title">Brownie Points</h3>
									</div>
								  
								<div className="panel-body">
									<span><h1>{props.updatePoints}</h1><p>pts</p></span>
								</div>
							</div>

		    			</div>

		    			<div className = "col-md-4 col-md-offset-1">

	    					<div className="panel panel-default text-center">
									<div className="panel-heading">
										<h3 className="panel-title">Available Rewards</h3>
									</div>
								  
								<div className="panel-body">
									<span>

									{getRewards.map( function (reward,i){
                           						
                           						return(<li key={i}> {reward.Reward} ({reward.PointValue} BP's)
                           							<button onClick={props.completeTask} type="button" className="btn btn-link">Redeem</button>
                           						</li>)
        					        })}

									</span>
								</div>
							</div>

		    			</div>

		    		</div>

		    		<br />

		    		<div className = "row">

		    			<div className = "col-md-2 col-md-offset-1">

		    				<Link to="/add"><button type="button" className="btn btn-primary form-control">Add Tasks</button></Link>

		    			</div>

		    			<div className = "col-md-2 col-md-offset-2">

		    				<Link to="/view"><button type="button" className="btn btn-primary form-control">View Tasks</button></Link>

		    			</div>

		    			<div className = "col-md-2 col-md-offset-2">

		    				<Link to="/reward"><button type="button" className="btn btn-primary form-control">Add Rewards</button></Link>

		    			</div>

		    		</div>

		    		<br />

		    		<div className = "row">

		    			<div className = "col-md-6 col-md-offset-3">

			    			<div className="well well-lg">

			    				<div> <h5>{props.message}</h5> </div>

			    			</div>

			    		</div>

		    		</div>

		    		<div className = "row">

		    			<div className = "col-md-2 col-md-offset-5">


			    				<button type="button" className="btn btn-primary form-control" onClick={props.onClick}>More Tips</button>


			    		</div>

		    		</div>

		    		<div className = "row">

		    			<div className = "col-md-1">

		    				<button type="button" className="btn btn-danger" onClick={props.logout}>Log Out</button>

		    			</div>

		    		</div>

	    		</div>

	    	</div>

	    	)
	  	};
	

module.exports = Dash;