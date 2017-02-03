import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';



export default class NavBar extends React.Component {

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
      <div 
        className='NavBar' 
        style={{width:'1180px', margin:'-50px auto 0', transform:'translateY()', position:'relative', zIndex: '1200'}}>
        <RaisedButton 
          className='NavBarButton' 
          label="Home" 
          style={{height:'48px', margin:'0 1px 2px'}} 
          buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} 
        />
        <RaisedButton
          className='NavBarButton'
          onTouchTap={this.handleTouchTap}
          label="Society"
          style={{height:'48px', margin:'0 1px 2px'}}
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
        <RaisedButton 
          className='NavBarButton' 
          onTouchTap={this.handleOpenMenu} 
          label="Commmittes" 
          style={{height:'48px', margin:'0 1px 2px'}} 
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
            <MenuItem primaryText="one" />
            <MenuItem primaryText="2" />
            <MenuItem primaryText="3" />
            <MenuItem primaryText="4" />
          </Menu>
        </Popover>
        <RaisedButton 
          className='NavBarButton' 
          label="Membership" 
          style={{height:'48px', margin:'0 1px 2px'}} 
          buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} 
        />
        <RaisedButton 
          className='NavBarButton' 
          onTouchTap={this.handleOpenMenu} 
          label="Conferences" 
          style={{height:'48px', margin:'0 1px 2px'}} 
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
            <MenuItem primaryText="5" />
            <MenuItem primaryText="6" />
            <MenuItem primaryText="7" />
            <MenuItem primaryText="8" />
          </Menu>
        </Popover>
        <RaisedButton 
        className='NavBarButton' 
        label="Related Meetings" 
        style={{height:'48px', margin:'0 1px 2px'}} 
        buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton 
        className='NavBarButton' 
        label="Journals" 
        style={{height:'48px', margin:'0 1px 2px'}} 
        buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton 
        className='NavBarButton' 
        label="Videos" 
        style={{height:'48px', margin:'0 1px 2px'}} 
        buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
        <RaisedButton 
        className='NavBarButton'
        label="News" 
        style={{height:'48px', margin:'0 1px 2px'}} 
        buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
      </div>
    );
  }
}

module.exports = NavBar;