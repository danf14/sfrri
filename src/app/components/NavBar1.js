import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import {Link} from 'react-router';

export default class NavBar1 extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      societyOpen : false,
      committeesOpen: false,
      conferencesOpen: false,
    };
  }

  handleTouchTap(name, event, index, value) {

    event.preventDefault();
    var change = {};
    change[name] = true;

    this.setState(change)
    this.setState({anchorEl: event.currentTarget})
    console.log(this.state)
  };

  handleRequestClose = () => {
    this.setState({
      societyOpen : false,
      committeesOpen: false,
      conferencesOpen: false,
    });
  };

  render() {
    return (
      <div 
        className='NavBar wrap' 
        style={{width:'1180px', margin:'-50px auto 0', transform:'translateY()', position:'relative', zIndex: '1200'}}>
        <Link to='/'>
	        <RaisedButton 
	          className='NavBarButton' 
	          label="Home" 
	          style={{height:'48px', margin:'0 1px 2px'}} 
	          buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} 
	        />
	      </Link>
        <RaisedButton
          className='NavBarButton'
          onTouchTap={this.handleTouchTap.bind(this, 'societyOpen')}
          label="Society"
          style={{height:'48px', margin:'0 1px 2px'}}
          buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}}
        />
        <Popover
          open={this.state.societyOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
          style={{backgroundColor: '#396aaf'}}
        >
          <Menu onClick={this.handleRequestClose}>
            <MenuItem containerElement={<Link to='presidential-address' />} primaryText="Presidential Address" style={{color: 'rgb(255, 255, 255)'}}/>
						<MenuItem containerElement={<Link to='history' />} primaryText="History"  style={{color: 'rgb(255, 255, 255)'}}/>
            <MenuItem containerElement={<Link to='governance' />} primaryText="Governance & Byelaws"  style={{color: 'rgb(255, 255, 255)'}}/>
            <MenuItem containerElement={<Link to='fellowships-and-awards' />} primaryText="Fellowships & Awards"  style={{color: 'rgb(255, 255, 255)'}}/>
            <MenuItem containerElement={<Link to='agm-minutes' />} primaryText="AGM Minutes"  style={{color: 'rgb(255, 255, 255)'}}/>
            <MenuItem containerElement={<Link to='obituaries' />} primaryText="Obituaries"  style={{color: 'rgb(255, 255, 255)'}}/>
          </Menu>
        </Popover>
        <RaisedButton 
          className='NavBarButton' 
          onTouchTap={this.handleTouchTap.bind(this, 'committeesOpen')}
          label="Committees" 
          style={{height:'48px', margin:'0 1px 2px'}} 
          buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} 
        />
        <Popover
          open={this.state.committeesOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
          style={{width:'', color: '#fff', backgroundColor: '#396aaf'}}
        >
          <Menu onClick={this.handleRequestClose}>
            <MenuItem containerElement={<Link to='sfrri-executive' />} primaryText="SFRRI Executive"  style={{color: 'rgb(255, 255, 255)'}}/>
            <MenuItem containerElement={<Link to='regional-societies-committees' />} primaryText="SFRR Regional Societies"  style={{color: 'rgb(255, 255, 255)'}}/>
            
          </Menu>
        </Popover>
        <Link to="membership">
	        <RaisedButton 
	          className='NavBarButton' 
	          label="Membership" 
	          style={{height:'48px', margin:'0 1px 2px'}} 
	          buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} 
	        />
	      </Link>  
        <RaisedButton 
          className='NavBarButton' 
          onTouchTap={this.handleTouchTap.bind(this, 'conferencesOpen')}
          label="Conferences" 
          style={{height:'48px', margin:'0 1px 2px'}} 
          buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} 
        />
        <Popover
          open={this.state.conferencesOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
          style={{color: '#fff', backgroundColor: '#396aaf'}}
        >
          <Menu onClick={this.handleRequestClose}>
            <MenuItem containerElement={<Link to='past-conferences' />} primaryText="Past SFRRI Conferences"  style={{color: 'rgb(255, 255, 255)'}}/>
            <MenuItem containerElement={<Link to='rules-for-conference-organisation' />} primaryText="Rules for Conference Organisation"  style={{color: 'rgb(255, 255, 255)'}}/>
            {/*<MenuItem containerElement={<Link to='founding-sponsors' />} primaryText="Founding Sponsors"  style={{color: 'rgb(255, 255, 255)'}}/>*/}
          </Menu>
        </Popover>
        <Link to="related-meetings">
	        <RaisedButton 
	        className='NavBarButton' 
	        label="Related Meetings" 
	        style={{height:'48px', margin:'0 1px 2px'}} 
	        buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
	      </Link>
				<Link to="sfrri-outreach">
	        <RaisedButton 
	        className='NavBarButton'
	        label="SFRRI Outreach" 
	        style={{height:'48px', margin:'0 1px 2px'}} 
	        buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
	      </Link>
	      <Link to="journals">
	        <RaisedButton 
	        className='NavBarButton' 
	        label="Journals" 
	        style={{height:'48px', margin:'0 1px 2px'}} 
	        buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />
	      </Link>
	      <Link to="videos">
	        <RaisedButton 
	        className='NavBarButton' 
	        label="Videos" 
	        style={{height:'48px', margin:'0 1px 2px'}} 
	        buttonStyle={{backgroundColor: '#447ac7', lineHeight: '48px'}} />  
	      </Link>     
      </div>
    );
  }
}

module.exports = NavBar1;