var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../Main');
var Home = require('../components/Home');
var PresAdd = require('../components/PresAdd');
//var PromptContainer = require('../containers/PromptContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' container={Home} />
    <Route path='presidentsaddress' container={PresAdd} />
  
  </Router>
);

module.exports = routes;