import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';


export default class NavBar extends React.Component {
  state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  };

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value,
    });
  };

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }

   constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className='NavBar' style={{width:'1180px', margin:'-50px auto 0', transform:'translateY()', position:'relative', zIndex: '1200'}}>
        <IconMenu
          iconButtonElement={<IconButton style={{'display':'none'}}/>}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          <MenuItem value="1" primaryText="Windows App" />
          <MenuItem value="2" primaryText="Mac App" />
          <MenuItem value="3" primaryText="Android App" />
          <MenuItem value="4" primaryText="iOS App" />
        </IconMenu>
        <RaisedButton label="Home" style={{height:'48px', margin:'1px'}} buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Society"
          style={{height:'48px', margin:'1px'}}
          buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
        <RaisedButton onTouchTap={this.handleOpenMenu} label="Commmittes" style={{height:'48px', margin:'1px'}} buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton label="Membership" style={{height:'48px', margin:'1px'}} buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton onTouchTap={this.handleOpenMenu} label="Conferences" style={{height:'48px', margin:'1px'}} buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton label="Related Meetings" style={{height:'48px', margin:'1px'}} buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton label="Journals" style={{height:'48px', margin:'1px'}} buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton label="Videos" style={{height:'48px', margin:'1px'}} buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton label="News" style={{height:'48px', margin:'1px'}} buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
      </div>
    );
  }
}

