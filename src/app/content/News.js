var React = require('react');

var News = React.createClass({ 
  render: function () {
    return (
							<div className="news">
		    				<h3>News</h3>
		  					<p>
		    					<span className="italic">November 16-19, 2016</span><br/>
									<span className="bold">Joint Meeting of Society for Redox Biology and Medicine (SFRBM)</span><br/>
									<span className="bold">and Society for Free Radical Research International (SFRRI)</span><br/>
									<span className="italic">Location:</span> Hyatt Regency Hotel, San Francisco, USA<br/>
									<span className="italic">Further information:</span> <a href="http://sfrbm.org/sections/annual-meeting/23rd-annual-meeting" target="_blank">sfrbm.org/sections/annual-meeting/23rd-annual-meeting</a></p>
									<hr/>
									<p><span className="italic">June 21-23, 2017</span><br/>
									<span className="bold">OCC World Congress 2017 and Annual SFRR-E Conference</span><br/>
									<span className="italic">Location:</span> Radisson Blu Hotel, Berlin, Germany<br/>
									<span className="italic">Further information:</span> <a href="http://occ-2017.com" target="_blank">occ-2017.com</a></p>
									<hr/>
									<p><span className="italic">September 14-15, 2017</span><br/>
									<span className="bold">Reactive Oxygen Species and Lipid Peroxidation in Human Health and Disease</span><br/>
									<span className="bold">Special Meeting of the International HNE-Club</span><br/>
									<span className="italic">Location:</span> Graz, Austria<br/>
									<span className="italic">Further information:</span> <a href="http://users2.unimi.it/HNECLUB/?page_id=1531" target="_blank">users2.unimi.it/HNECLUB/?page_id=1531</a></p>
									<hr/>
									<p><span className="italic">July 12-15, 2018</span><br/>
									<span className="bold">SFRRe/ISFRR - 2018</span><br/>
									<span className="italic">Location:</span> Lisboa Congress Centre - CCL, Lisbon, Portugal<br/>
									<span className="italic">Further information:</span> TBC
								</p>
							</div>
					  )
				  }
				});

module.exports = News;