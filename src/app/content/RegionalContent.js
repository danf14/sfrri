var React = require('react');
import {Link} from 'react-router';

var logoContent = React.createClass({ 
  render: function () {
    return (
    				<div className="mainContent">
    					<h2>SFRR Regional Societies</h2>
    					<div className="row">
    						<div className="col-sm-4 col-xs-12 regSoc">
    							<a href="http://www.oxyclubcalifornia.org/OCC/OCC_officers.php" target="_blank">
	    							<div className="logo occ" />
	    							<p>Oxygen Club of California</p>
	    						</a>
    						</div>
    						<div className="col-sm-4 col-xs-12 regSoc">
    							<a href="http://sfrbm.org/about/leadership-and-staff/" target="_blank">
	    							<div className="logo sfrbm" />
	    							<p>Society for Redox Biology and Medicine</p>
	    						</a>
    						</div>
    						<div className="col-sm-4 col-xs-12 regSoc">
    							<a href="http://vcilt.uom.ac.mu/sfrr/index.php/about-us-menu" target="_blank">
	    							<div className="logo africa" />
	    							<p>Society for Free Radical Research Africa</p>
	    						</a>
    						</div>   						
    					</div>
    					<div className="row">
    						<div className="col-sm-4 col-xs-12 regSoc">
    							<a href="http://sfrrj.umin.jp/asia/en_Committee_members.htm" target="_blank">
	    							<div className="logo asia" />
	    							<p>Society for Free Radical Research Asia</p>
	    						</a>
    						</div>
    						<div className="col-sm-4 col-xs-12 regSoc">
    							<a href="http://www.sfrra.org/" target="_blank">
	    							<div className="logo australasia" />
	    							<p>Society for Free Radical Research Australasia</p>
	    						</a>
    						</div>
    						<div className="col-sm-4 col-xs-12 regSoc">
    							<a href="https://www.sfrr-europe.org/index.php?cms_id=74" target="_blank">
	    							<div className="logo europe" />
	    							<p>Society for Free Radical Research Europe</p>
	    						</a>
    						</div>   						
    					</div>
    				</div>
			    )
			  }
			});

module.exports = logoContent;