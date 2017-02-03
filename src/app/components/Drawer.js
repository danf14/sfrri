import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

export default class SFRRIDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>

        <FontIcon className="material-icons" onTouchTap={this.handleToggle}>menu</FontIcon>
        <Drawer
          docked={false}
          width={280}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Society</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Committees</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Membership</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Conferences</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Related Meetings</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Journals</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Videos</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>News</MenuItem>
        </Drawer>
      </div>
    );
  }
}

module.exports = SFRRIDrawer;