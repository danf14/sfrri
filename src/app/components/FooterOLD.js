import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import TextField from 'material-ui/TextField';



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
};

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});


  render() {
    return (
      <Paper zDepth={1}>
        <div className="footer" style={{width:'100%', marginTop:'20px', backgroundColor:'#447ac7'}}>
          <div className="wrap" style={{padding: '36px 0 4px'}}>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12" style={{height:'135px'}}>
                <div className="footerLogo"></div>
              </div>
              <div className="col-lg-3 col-md-6" style={{height:'135px', borderLeft:'1px solid rgba(255,255,255,0.5)', paddingLeft:'25px'}}>
                <ul>
                  <li>Society</li>
                  <li>Committees</li>
                  <li>Membership</li>
                  <li>Conferences</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6" style={{height:'135px', borderLeft:'1px solid rgba(255,255,255,0.5)', paddingLeft:'25px'}}>
                <ul>
                  <li>Related Meetings</li>
                  <li>Education</li>
                  <li>Journals</li>
                  <li>Videos</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6" style={{height:'135px', borderLeft:'1px solid rgba(255,255,255,0.5)', paddingLeft:'25px'}}>
                <ul>
                  <li>Sitemap</li>
                  <li>Terms</li>
                  <li>Disclaimer</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <BottomNavigation selectedIndex={this.state.selectedIndex} style={{height:77, backgroundColor:'#222'}}>
          <div className="wrap">
            <div className="row" style={{margin:0}}>
              <div className="copyright col-lg-3 col-md-6">
                <p>© 2016 Society for Free Radical Research International</p>
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
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Footer;