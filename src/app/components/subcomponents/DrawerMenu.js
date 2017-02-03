import React from 'react';
import {Link} from 'react-router';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Divider from 'material-ui/Divider';


class DrawerMenu extends React.Component{
	render(){
		var i=0;
		return(
					<div>
						<div style={{width:'100%',height:'172px', backgroundColor:'#345e99', backgroundImage:'url(assets/img/SFRRI-footer-logo-no-map.png', backgroundRepeat:'no-repeat', backgroundPosition:'50% 50%' }} />
						<List key={i++} className="drawerMenu"  style={{color: 'rgb(220, 220, 220)'}}>
								<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='/' />} primaryText="Home" style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>
								<Divider className="divider" />
								<ListItem key={i++} 
									primaryText="Society" 
									style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}
									primaryTogglesNestedList={true}
									nestedItems={[
										<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='presidential-address' />} primaryText="Presidential Address" style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
										<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='history' />} primaryText="History"  style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
					          <ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='governance' />} primaryText="Governance & Byelaws"  style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
					          <ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='fellowships-and-awards' />} primaryText="Fellowships & Awards"  style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
					          <ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='agm-minutes' />} primaryText="AGM Minutes"  style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
					          <ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='obituaries' />} primaryText="Obituaries"  style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
				          ]}
								/>
								<Divider className="divider" />
								<ListItem key={i++} 
									primaryText="Committees" 
									style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}
									primaryTogglesNestedList={true}
									nestedItems={[
									<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='sfrri-executive' />} primaryText="SFRRI Executive"  style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
		            	<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='regional-societies-committees' />} primaryText="SFRR Regional Societies"  style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
		            	]}
								/>
								<Divider className="divider" />
								<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='membership' />} primaryText="Membership" style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>
								<Divider className="divider" />
								<ListItem key={i++} 
									primaryText="Conferences" 
									style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}
									primaryTogglesNestedList={true}
									nestedItems={[
									<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='past-conferences' />} primaryText="Past SFRRI Conferences"  style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
		            	<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='rules-for-conference-organisation' />} primaryText="Rules for Conference Organisation"  style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>,
		            	]}
								/>
								<Divider className="divider" />
								<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='related-meetings' />} primaryText="Related Meetings" style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>
								<Divider className="divider" />
								<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='sfrri-outreach' />} primaryText="SFRRI Outreach" style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>
								<Divider className="divider" />
								<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='journals' />} primaryText="Journals" style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>
								<Divider className="divider" />
								<ListItem key={i++} onClick={this.handleClose} containerElement={<Link to='videos' />} primaryText="Videos" style={{color: 'rgb(220, 220, 220)',paddingLeft:'55px'}}/>
								<Divider className="divider" />
						</List>
					</div>
			);
	 }
};  


module.exports = DrawerMenu;