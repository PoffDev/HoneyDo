var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var Routes = require('./Config/routes');
var Main = require("./Components/Main");

//require('css file here');

ReactDom.render(



	<Routes />,
	document.getElementById('app')

)