var React = require('react');
import {Link} from 'react-router';

var SitemapContent = React.createClass({ 
  render: function () {
    return (
    				<div className="mainContent">
							<h2>Sitemap</h2>
							<ul>
								<li><Link to="/">Home</Link></li>
								<li>Society
									<ul>
										<li><Link to="presidential-address">Presidential Address</Link></li>
										<li><Link to="history">History</Link></li>
										<li><Link to="governance">Governance & Byelaws</Link></li>
										<li><Link to="fellowships-and-awards">Fellowships & Awards</Link></li>
										<li><Link to="agm-minutes">AGM Minutes</Link></li>
										<li><Link to="obituaries">Obituaries</Link></li>
									</ul>
								</li>
								<li>Committees
									<ul>
										<li><Link to="sfrri-executive">SFRRI Executive</Link></li>
										<li><Link to="regional-societies-committees">SFRR Regional Societies</Link></li>
									</ul>
								</li>
								<li><Link to="membership">Membership</Link></li>
								<li>Conferences
									<ul>
										<li><Link to="past-conferences">Past SFRRI Conferences</Link></li>
										<li><Link to="rules-for-conference-organisation">Rules for Conference Organisation</Link></li>
									</ul>
								</li>
								<li><Link to="related-meetings">Related Meetings</Link></li>
								<li><Link to="sfrri-outreach">SFRRI Outreach</Link></li>
								<li><Link to="journals">Journals</Link></li>
								<li><Link to="videos">Videos</Link></li>
							</ul>
            	<ul>
            		<li><Link to="sitemap">Sitemap</Link></li>
								<li><Link to="sfrri-outreach">SFRRI Outreach</Link></li>
								<li><Link to="disclaimer">Disclaimer</Link></li>
								<li><Link to="videos">Videos</Link></li>
            	</ul>
            </div>

			    )
			  }
			});

module.exports = SitemapContent;