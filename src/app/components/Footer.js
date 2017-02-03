import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
/*import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';*/
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';

/*
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


const styles = {
  underlineStyle: {
    color: '#333',
  },
  underlineFocusStyle: {
    color: '#333',
  },
  floatingLabelStyle: {
    color: '#999',
  },
  floatingLabelFocusStyle: {
    color: '#447ac7',
  },
};*/

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
  /*state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});*/


  render() {
    return (
      <Paper zDepth={2}>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <Link to="/"><div className="footerLogo"></div></Link>
              </div>
              <div className="col-md-3 col-xs-6 footerNavCell">
                <ul>
                  <li>??????</li>
                  <li>??????</li>
                  <li><Link to="membership">Membership</Link></li>
                  <li>??????</li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6 footerNavCell">
                <ul>
                  <li><Link to="related-meetings">Related Meetings</Link></li>
                  <li>??????</li>
                  <li><Link to="journals">Journals</Link></li>
                  <li><Link to="videos">Videos</Link></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6 footerNavCell">
                <ul>
                  <li><Link to="sitemap">Sitemap</Link></li>
                  <li>??????</li>
                  <li><Link to="disclaimer">Disclaimer</Link></li>
                  <li><Link to="contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Paper zDepth={2}>
	        <div className="bottomNav">
	          {/**/}<div className="container">
	            <div className="row">
	              <div className="copyright">
	                <p>© 2017 Society for Free Radical Research International</p>
	              </div>
	              {/*<div className="col-lg-3 col-md-6 col-lg-offset-6">
	                              <TextField
	                                inputStyle={{color:'#fff', fontWeight:'300'}}
	                                floatingLabelText="Search"
	                                floatingLabelStyle={{color:'#999'}}
	                                floatingLabelFocusStyle={{color: '#447ac7'}}
	                                underlineStyle={{color: '#333'}}
	                                underlineFocusStyle={{color: '#447ac7'}}
	                              />
	                            </div>*/}
	            </div>
	          </div>
	        </div>
	      </Paper>
      </Paper>
    );
  }
}

export default Footer;