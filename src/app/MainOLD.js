/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
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
require("css!./style/normalize.css");
require("css!./style/bootstrap_grid12.css");

const styles = {
  container: {
    textAlign: 'center',
    marginTop: 6,
    paddingTop:20,
    backgroundColor: '#fff',
    maxWidth: 1200,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  iconStyles: {
    marginRight: 24,
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          {/*<SFRRIDrawer />*/}
          <SFRRIAppBar className="header" />
          <NavBar1 />
          <Home />
          {/*<div style={styles.container}>
                      
                      <Dialog
                        open={this.state.open}
                        title=""
                        actions={standardActions}
                        onRequestClose={this.handleRequestClose}
                      >
                        <iframe src="https://www.youtube.com/embed/K_el-ewip0w" frameBorder="0" allowFullScreen></iframe>
                        {/*<FontIcon className="material-icons" style={styles.iconStyles} onClick={this.handleRequestClose}>clear</FontIcon>*/}
                        {/*<IconButton><NavigationClose onClick={this.handleRequestClose} /></IconButton>
                      </Dialog>
                      <h1>Material-UI</h1>
                      <h2>example project</h2>
                      <RaisedButton
                        label="Super Secret Password"
                        secondary={true}
                        onTouchTap={this.handleTouchTap}
                      />
                    </div>*/}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
