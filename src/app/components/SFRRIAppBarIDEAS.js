import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import SFRRIDrawer from './components/Drawer';


class SFRRIAppBar extends React.Component{

	render(){  
	  return(
		  <AppBar
				title="Society for Free Radical Research International"
				{/*onTitleTouchTap={}*/}
				iconElementRight={<IconButton><NavigationMenu /></IconButton>}
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				{/*onRightIconButtonTouchTap={handleToggle()}*/}
				//showMenuIconButton = {false}
				className = "header"				
			/>
		);
	 }
};  


