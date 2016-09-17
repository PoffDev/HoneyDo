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

	    				<div className = "col-md-6 col-md-offset-3">

			    			<div className="well well-lg text-center" id="well" onClick={props.onClick}>

			    				<div> <h5>{props.message}</h5> </div>

			    			</div>

			    		</div>

		    		</div>

	    			<div className = "row">

	    				<div className = "col-md-4">

	    					<div className="panel panel-default text-center" id="panel">
									<div className="panel-heading" id="panel" onClick={props.viewLink}>
										<h3 className="panel-title">HoneyDo's</h3>
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

	    					<div className="panel panel-default text-center" id="panel">
									<div className="panel-heading" id="panel">
										<h3 className="panel-title">Brownie Points</h3>
									</div>
								  
								<div className="panel-body">
									<span><h1 id="colorfont">{props.updatePoints}</h1><p>pts</p></span>
								</div>
							</div>

		    			</div>

		    			<div className = "col-md-4 col-md-offset-1">

	    					<div className="panel panel-default text-center" id="panel">
									<div className="panel-heading" id="panel" onClick={props.rewLink}>
										<h3 className="panel-title">Available Rewards</h3>
									</div>
								  
								<div className="panel-body">
									<span>

									{getRewards.map( function (reward,i){

												return(<li key={i}> {reward.Reward} ({reward.PointValue} BP's)
                           							<button 
                           								type= "button" 
                           								onClick= {function()
                           									{props.completeReward(i)}} 
                           								className="btn btn-link">Redeem!
                           								</button>

                           						</li>)
        					        })}

									</span>
								</div>
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

	    	</div>

	    	)
	  	};
	

module.exports = Dash;