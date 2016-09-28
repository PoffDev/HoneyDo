var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Home(props) {

	console.log(props.getInitialState);



    return (

    	<div id= 'Home'>

	    	<div className = "containter-fluid" id="background">

	    		<div className = "container" id="navigation">

	    			<div className = "row">

	    				<div className = "col-md-10" id="honeydopic">

	    					<img src="pics/blackright.png" alt="Big Logo" height="41" width="200" />

	    				</div>

	    				<div className = "col-md-1">

							<Link to="/login"><button type="button" id="colorbutton" className="btn">Login</button></Link>

						</div>

						<div className = "col-md-1">

							<a href="http://www.github.com/Poffdev"><button type="button" id="colorbutton" className="btn">@PoffDev</button></a>

						</div>

					</div>

				</div>

				<div className = "row" id = "home">

					<div className = "col-md-6 col-md-offset-3">

						<div className = "row" id= "titleRow">

							<img src="pics/logo.png" alt="Logo" height="150" width="450" />

						</div>

						<form className="contact-form" onSubmit={props.signupUser}>

							<div className = "row">

								<div className = "col-md-6">
		        					<div className="form-group form-group-lg">
				              			<input type="email" className="form-control" id="partner1" placeholder="Email" onChange={props.updateInputs} />
				            		</div>
		        				</div>	

		        				<div className = "col-md-6">
				            		<div className="form-group form-group-lg">
		          						<input type="text" className="form-control" id="partner2" placeholder="Partner 1" onChange={props.updateInputs} />
		        					</div>
				            	</div>

				            </div>

				            <div className = "row">

								<div className = "col-md-6">
		        					<div className="form-group form-group-lg">
		         			 			<input type="text" className="form-control" id="email" placeholder="Partner 2" onChange={props.updateInputs} />
		        					</div>
		        				</div>	

		        				<div className = "col-md-6">
				            		<div className="form-group form-group-lg">
		         						<input type="password" className="form-control" id="password" placeholder="Password" onChange={props.updateInputs} />
		        					</div>
				            	</div>

				            </div>

		        			<button type="submit" className="btn btn-lg btn-block btn-default">Honey, I'm Home</button>
		      
		      			</form>

		      		</div>

				</div>

				<div id = 'about'>

					<div className = "row">

						<div className = "col-md-6 col-md-offset-3">

							<h4>The app that helps you both, get what you want. Sign Up Today!</h4>

						</div>

					</div>

					<br />

					<div className = "row">

						<div className = "col-md-4 col-md-offset-2">

							<div className="panel panel-default" id="panelHome">
								<div className="panel-heading" id="panelHome">
							    	<h3 className="panel-title">HAPPY WIFE</h3>
							  	</div>
	  							<div className="panel-body">
	   							 &emsp;&emsp;&emsp;&emsp;&emsp;Ladies let's be honest... Men suck at geting stuff done. HoneyDo is here to fix that. We take that boring old list from sitting on the kitchen counter the your Guy's fingertips. He'll never be able to say "I didn't see it" again!
	  							</div>
							</div>

						</div>

						<div className = "col-md-4">

							<div className="panel panel-default" id="panelHome">
								<div className="panel-heading" id="panelHome">
							    	<h3 className="panel-title">HAPPY LIFE</h3>
							  	</div>
	  							<div className="panel-body">
	   							 &emsp;&emsp;&emsp;&emsp;&emsp;Alright guys, your probably thinking this is the your worst nightmare in the world. You can't possibly destroy that list in a believable way anymore... But guess what? There are rewards! treats! special favors! whatever you wanna call them. 
	  							</div>
							</div>

						</div>

					</div>

					<div className = "row">

						<div className = "col-md-4 col-md-offset-2">

							<div className="panel panel-default" id="panelHome">
								<div className="panel-heading" id="panelHome">
							    	<h3 className="panel-title">HAPPY HUSBAND</h3>
							  	</div>
	  							<div className="panel-body">
	   							 &emsp;&emsp;&emsp;&emsp;&emsp;So here's how it works. Ladies! you make up your HoneyDo list, just like normal. But for every task you asign, your going to give out BrowniePoints. Guys, you complete the task you get the BrowniePoints, it's really that simple. 
	  							</div>
							</div>

						</div>

						<div className = "col-md-4">

							<div className="panel panel-default" id="panelHome">
								<div className="panel-heading" id="panelHome">
							    	<h3 className="panel-title">umm.. FREE STUFF!!! </h3>
							  	</div>
	  							<div className="panel-body">
	   							 &emsp;&emsp;&emsp;&emsp;&emsp;Now here is the fun part. Guys, you know how it is slaving away across the house while your wife is away, you don't get no respect... Well now you can at least buy it. Save up those BrowniePoints and redeem them for rewards specified by your wife.  
	  							</div>
							</div>

						</div>

					</div>

				</div>

				<div id = 'preview'>
								
					<div className = 'row'>
								
						<div className = 'col-md-10 col-md-offset-1'>
							
							<div id = 'previewImage'>

								<img src="pics/screen.png" alt="Logo" height="425" width="950" />

							</div>
									
						</div>
					
					</div>
				
				</div>

	    	</div>
				
	</div>

    	)
	};

module.exports = Home;