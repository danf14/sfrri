
import React, {Component} from 'react';

import Dialog from 'material-ui/Dialog';

import FlatButton from 'material-ui/FlatButton';


import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';

const dialogStyle = {
	width:'100%',
  maxWidth: '1200px',
  backgroundColor:'#222',
};

const iconStyles ={
	color:'#dcdcdc',
}

class BoxesNEW extends Component {
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
      <NavigationClose
        style={iconStyles}
        //primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (	
    					<div className="row">
				        <div className="col-md-3 col-sm-6 col-xs-12 box alpha">
					        <Paper zDepth={1}>
					        	<Link to="related-meetings">
						          <div className="boxBg rel">
						          	<span>Related Meetings</span>
						          </div>
						        </Link>
					        </Paper>
				        </div>
				        <div className="col-md-3 col-sm-6 col-xs-12 box beta">
									<Paper zDepth={1}>
					        	<Link to="membership">
						          <div className="boxBg mem">
						          	<span>Membership</span>
						          </div>
						        </Link>
					        </Paper>
				        </div>
				        <div className="col-md-3 col-sm-6 col-xs-12 box gamma">
									<Paper zDepth={1}>
					        	<Link to="history">
						          <div className="boxBg his">
						          	<span>History</span>
						          </div>
						        </Link>
					        </Paper>
				       	</div>
				       	<div className="col-md-3 col-sm-6 col-xs-12 box omega">
				       		<Paper zDepth={1}>
					          <div className="boxBg car" onTouchTap={this.handleTouchTap}>
					          	<span>Careers</span>
					          	<i className="material-icons" style={{position:'absolute', top:'50%', left:'50%', color:'#fff', transform:'translate(-50%, -50%)', fontSize:'42px'}}>play_circle_filled</i>
					          </div>	
				          </Paper>				        				          
			        	</div>
			      		<Dialog
                	className="dialog"
                  open={this.state.open}
                  title="Careers with SFRRI"
                  contentStyle={dialogStyle}
                  actions={standardActions}
                  onRequestClose={this.handleRequestClose}
                >
                	<div className="video-container">
                  	<iframe src="https://www.youtube.com/embed/K_el-ewip0w" frameBorder="0" allowFullScreen></iframe>
                  </div>
                  {/*<FontIcon className="material-icons" onClick={this.handleRequestClose}>clear</FontIcon>
                  <IconButton style={iconStyles} onClick={this.handleRequestClose}><NavigationClose /></IconButton>*/}
                </Dialog>
              </div>
    );
  }
}

export default BoxesNEW;