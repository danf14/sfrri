var React = require('react');
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import Divider from 'material-ui/Divider';


var AGMMinutesContent = React.createClass({ 
  render: function () {
    return (
    				<div className="mainContent">
							<h2>Minutes of General Assembly Meetings</h2>
							<div className="row">
	            	<div className="col-xs-12 agmminutes">
	            		<div className="col-xs-6">
	            			<a href="downloads/AGM_San_Francisco_2016.pdf">2016 General Assembly, San Francisco, USA</a>
	            		</div>
	            		<div className="col-xs-6 pdf">
		            			<a href="downloads/AGM_San_Fransisco_2016.pdf">
		            				<img style={{marginBottom:'-6px'}}src="assets/img/adobe-pdf-logo.png" alt="PDF icon" />
		            				<FileFileDownload style={{margin:'0 6px -6px 0'}}/>
		            				<span>Download PDF</span>
		            			</a>
	            		</div>
	            	</div>
	            </div>
	            <Divider />
							<div className="row">
								<div className="col-xs-12 agmminutes">
									<div className="col-xs-6">
										<a href="downloads/AGM_Kyoto_2014.pdf">2014 General Assembly, Kyoto, Japan</a>
									</div>
									<div className="col-xs-6 pdf">
											<a href="downloads/AGM_Kyoto_2014.pdf">											
		            				<img style={{marginBottom:'-6px'}}src="assets/img/adobe-pdf-logo.png" alt="PDF icon" />
		            				<FileFileDownload style={{margin:'0 6px -6px 0'}}/>
		            				<span>Download PDF</span>
											</a>
									</div>
								</div>
							</div>
							<Divider />
							<div className="row">							              
								<div className="col-xs-12 agmminutes">
									<div className="col-xs-6">
										<a href="downloads/AGM_London_2012.pdf">2012 General Assembly, London, England</a>
									</div>
									<div className="col-xs-6 pdf">
											<a href="downloads/AGM_London_2012.pdf">
												<img style={{marginBottom:'-6px'}}src="assets/img/adobe-pdf-logo.png" alt="PDF icon" />
		            				<FileFileDownload style={{margin:'0 6px -6px 0'}}/>
		            				<span>Download PDF</span>
											</a>
									</div>
								</div>
							</div>
							<Divider />
							<div className="row">
								<div className="col-xs-12 agmminutes">
									<div className="col-xs-6">
										<a href="downloads/AGM_Orlando_2010.pdf">2010 General Assembly, Orlando, Florida</a>
									</div>
									<div className="col-xs-6 pdf">
										<a href="downloads/AGM_Orlando_2010.pdf">
											<img style={{marginBottom:'-6px'}}src="assets/img/adobe-pdf-logo.png" alt="PDF icon" />
	            				<FileFileDownload style={{margin:'0 6px -6px 0'}}/>
	            				<span>Download PDF</span>
										</a>
									</div>
								</div>
							</div>
							<Divider />
							<div className="row">
								<div className="col-xs-12 agmminutes">
									<div className="col-xs-6">
										<a href="downloads/AGM_Beijing_2008.pdf">2008 General Assembly, Beijing, China</a>
									</div>
									<div className="col-xs-6 pdf">
										<a href="downloads/AGM_Beijing_2008.pdf">
											<img style={{marginBottom:'-6px'}}src="assets/img/adobe-pdf-logo.png" alt="PDF icon" />
	            				<FileFileDownload style={{margin:'0 6px -6px 0'}}/>
	            				<span>Download PDF</span>
										</a>
									</div>
								</div>
							</div>
							<Divider />
							<div className="row">
								<div className="col-xs-12 agmminutes">
									<div className="col-xs-6">
										<a href="downloads/AGM_Davos_2006.pdf">2006 General Assembly, Davos, Switzerland</a>
									</div>
									<div className="col-xs-6 pdf">
										<a href="downloads/AGM_Davos_2006.pdf">
											<img style={{marginBottom:'-6px'}}src="assets/img/adobe-pdf-logo.png" alt="PDF icon" />
	            				<FileFileDownload style={{margin:'0 6px -6px 0'}}/>
	            				<span>Download PDF</span>
										</a>
									</div>
								</div>
							</div>
							<Divider />
					 </div>
			    )
			  }
			});

module.exports = AGMMinutesContent;