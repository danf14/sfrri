var React = require('react');
var ReactRouter = require('react-router');
import FontIcon from 'material-ui/FontIcon';
import SimpleMapExample from './GoogleMap';


var Home = React.createClass({ 
  render: function () {
    return (
      <div className="wrap">
      	<div className="row">
      		<div style={{width:'100%', height:'auto', minHeight:'437px', color:'#fff', textAlign:'left'}}>
      			<div className style={{height:'auto', minHeight:'437px', backgroundColor:'#555', backgroundImage:'url(assets/img/Hinge_top_vials_on_a_vial_rack.jpg)', position:'relative'}}>
      				<div style={{backgroundColor: 'rgba(57, 51, 39, 0.35)', position:'absolute', top:0, right:0, bottom:0, left:0}}>
      					<div className="row">
	      					<h2 className="col-xs-12" style={{fontFamily: 'AvenirNextLTPro-Bold', fontSize:'60px',letterSpacing:'-4px'}}>Latest News</h2>
	      					<div className="col-sm-6 col-xs-12">
	      						<p><span style={{fontStyle:'italic'}}>November 16-19, 2016</span><br/>
										<span style={{fontWeight:'700'}}>Joint Meeting of Society for Redox Biology and Medicine (SFRBM)</span><br/>
										<span style={{fontWeight:'700'}}>and Society for Free Radical Research International (SFRRI)</span><br/>
										<span style={{fontStyle:'italic'}}>Location:</span> Hyatt Regency Hotel, San Francisco, USA<br/>
										<span style={{fontStyle:'italic'}}>Further information:</span> sfrbm.org/sections/annual-meeting/23rd-annual-meeting</p>

										<p><span style={{fontStyle:'italic'}}>June 21-23, 2017</span><br/>
										<span style={{fontWeight:'700'}}>OCC World Congress 2017 and Annual SFRR-E Conference</span><br/>
										<span style={{fontStyle:'italic'}}>Location:</span> Radisson Blu Hotel, Berlin, Germany<br/>
										<span style={{fontStyle:'italic'}}>Further information:</span> occ-2017.com</p>

	      					</div>
	      					<div className="col-sm-6 col-xs-12">
	      						<p><span style={{fontStyle:'italic'}}>September 14-15, 2017</span><br/>
										<span style={{fontWeight:'700'}}>Reactive Oxygen Species and Lipid Peroxidation in Human Health and Disease</span><br/>
										<span style={{fontWeight:'700'}}>Special Meeting of the International HNE-Club</span><br/>
										<span style={{fontStyle:'italic'}}>Location:</span> Graz, Austria<br/>
										<span style={{fontStyle:'italic'}}>Further information:</span> users2.unimi.it/HNECLUB/?page_id=1531</p>

										<p><span style={{fontStyle:'italic'}}>July 12-15, 2018</span><br/>
										<span style={{fontWeight:'700'}}>SFRRe/ISFRR - 2018</span><br/>
										<span style={{fontStyle:'italic'}}>Location:</span> Lisboa Congress Centre - CCL, Lisbon, Portugal<br/>
										<span style={{fontStyle:'italic'}}>Further information:</span> TBC</p>


	      					</div>
	      				</div>
      				</div>
      			</div>
      		</div>
      	</div>
      	<div className="row" style={{padding:'0 10px', justifyContent:'space-between'}}>  		
      		<div className="col-lg-3 col-sm-6 col-xs-12" style={{height:202, backgroundImage:'url(assets/img/Blood_clot_in_scanning_electron_microscopy.jpg)'}}>
      			<div style={{padding: '153px 0 25px 20px', fontFamily: 'AvenirNextLTPro-Bold', fontSize: '30px', letterSpacing: '-1px', color:'#fff', backgroundColor: 'rgba(57, 51, 39, 0.35)'}}>
      				Related Meetings
      			</div>
      		</div>
      		<div className="col-lg-3 col-sm-6 col-xs-12" style={{height:202, backgroundImage:'url(assets/img/BioProbes.jpg)'}}>
      			<div style={{padding: '153px 0 25px 20px', fontFamily: 'AvenirNextLTPro-Bold', fontSize: '30px', letterSpacing: '-1px', color:'#fff', backgroundColor: 'rgba(57, 51, 39, 0.35)'}}>
      				Membership
      			</div>
      		</div>
      		<div className="col-lg-3 col-sm-6 col-xs-12" style={{height:202, backgroundImage:'url(assets/img/TrevorSlater.jpg)'}}>
      			<div style={{padding: '153px 0 25px 20px', fontFamily: 'AvenirNextLTPro-Bold', fontSize: '30px', letterSpacing: '-1px', color:'#fff', backgroundColor: 'rgba(57, 51, 39, 0.35)'}}>
      				History
      			</div>
      		</div>
      		<div className="col-lg-3 col-sm-6 col-xs-12" style={{height:202, backgroundImage:'url(assets/img/OxRadStress.jpg)', position:'relative'}}>
      			<div style={{padding: '153px 0 25px 20px', fontFamily: 'AvenirNextLTPro-Bold', fontSize: '30px', letterSpacing: '-1px', color:'#fff', backgroundColor: 'rgba(57, 51, 39, 0.35)'}}>
      				Careers
      			</div>
      			<i className="material-icons" style={{position:'absolute', top:'50%', left:'50%', color:'#fff', transform:'translate(-50%, -50%)', fontSize:'42px'}}>play_circle_filled</i>
      		</div>     	
      	</div>
      	<div className="row" style={{padding:'0 10px'}}>
      		<div className="col-xs-12" style={{backgroundColor:'#fff'}}>
            <div className="row" style={{padding: 0}}>
            	<div className="col-lg-6 col-md-12">
            		<h2 style={{fontFamily: 'AvenirNextLTPro-Bold', fontSize:'60px',letterSpacing:'-4px'}}>About</h2>
            		<p>The Society for Free Radical Research founded in the United Kingdom in 1982 is an International Society with the following rules (as amended by resolution of the members dated September 11, 1998). The International Society is a charitable voluntary, non-profit making institution.</p>
      					<p>The object of the International Society is to advance education in free radical processes with particular reference to those of industrial and medical importance, such education being for the benefit of the public.</p>
            	</div>
              <div className="col-lg-6 col-md-12" style={{position:'relative'}}>
                <SimpleMapExample />
              </div>
            </div>
      			<div className="col-xs-12">
      				<h3 style={{fontFamily: 'AvenirNextLTPro-Bold', fontSize:'60px',letterSpacing:'-4px', marginTop:'20px'}}>Objectives</h3>
      				<ul>
      						<li>to provide continuing education and training to scientists with an active interest in Free Radical Research</li>
									<li>to provide a forum for discussions</li>
									<li>to receive and apply donations, subscriptions and funds from persons or organizations</li>
									<li>to invest and deal with the International Society's money not immediately required for its objects in or upon any investments, securities or property;</li>
									<li>to do all other lawful things necessary to advance the object</li>
									<li>to promote research and publication of its beneficial findings</li>
      				</ul>
      			</div>
      		</div>
      	</div>
      </div>
    )
  }
});

module.exports = Home;