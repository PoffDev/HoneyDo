// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, hashHistory } from 'react-router'



// Include the Main Component
import Add from './Components/Add'
import Dash from './Components/Dash'
import Home from './Components/Home'
import Login from './Components/Login'
import Main from './Components/Main'
import Points from './Components/Points'
import View from './Components/View'

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render((

	<Router history={hashHistory}>
		<Route path="/" component={Main}/>
		<Route path="/Add" component={Add}/>
		<Route path="/Dash" component={Dash}/>
		<Route path="/Home" component={Home}/>
		<Route path="/Login" component={Login}/>
		<Route path="/Main" component={Main}/>
		<Route path="/Points" component={Points}/>
		<Route path="/View" component={View}/>
	</Router>
), document.getElementById('app'))
