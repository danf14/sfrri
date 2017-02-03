import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
var ReactDOM = require('react-dom');
//var routes = require('./config/routes');
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


import Home from './components/Home';
import PresAdd from './components/PresAdd';

const AppRoutes = (
  <Route path="/" handler={Main}>
    <DefaultRoute handler={Home} />
    <Route name="pressAdd" handler={PresAdd} />
  </Route>
);

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<Main />, document.getElementById('app'));
/*Router.run(AppRoutes, Router.HashLocation, (Root) => {
  React.render(<Main />, document.body);
});*/