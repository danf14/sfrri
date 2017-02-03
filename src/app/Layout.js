import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SFRRIAppBar from './components/SFRRIAppBar';
import NavBar from './components/NavBar';
import NavBar1 from './components/NavBar1';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SFRRIDrawer from './components/Drawer';
import Footer from './components/Footer';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';

export default class Layout extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
        <div>
          <Paper className="headerCont" zDepth={1}>
          	<SFRRIAppBar className="header" />
          	<NavBar1 />
          </Paper>
          {this.props.children}
          <Footer />
        </div>
      </MuiThemeProvider>
		);
	}
}