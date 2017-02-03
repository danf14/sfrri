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
import Home from './components/Home';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SFRRIDrawer from './components/Drawer';
import Footer from './components/Footer';
import {Link} from 'react-router';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default class Layout extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {/*<SFRRIDrawer />*/}
          <SFRRIAppBar className="header" />
          <NavBar1 />
          <Link to='/'>Home</Link>
          <Link to='pres'>President's Address</Link>
          {this.props.children}
          <Footer />
        </div>
      </MuiThemeProvider>
		);
	}
}