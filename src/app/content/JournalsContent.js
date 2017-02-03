var React = require('react');

var JournalsContent = React.createClass({ 
  render: function () {
    return (
    				<div className="mainContent">
    					<h2>Journals</h2>
    					<div className="row">
    						<div className="col-sm-4 col-xs-12 journal">
    							<a href="https://www.journals.elsevier.com/free-radical-biology-and-medicine/" target="_blank">
	    							<div className="cover Free-Radical-Biology-and-Medicine" />
	    							<p>Free Radical Biology & Medicine</p>
	    						</a>
    						</div>
    						<div className="col-sm-4 col-xs-12 journal">
    							<a href="https://www.journals.elsevier.com/redox-biology/" target="_blank">
	    							<div className="cover Redox-Biology" />
	    							<p>Redox Biology</p>
	    						</a>
    						</div>
    						<div className="col-sm-4 col-xs-12 journal">
    							<a href="http://vcilt.uom.ac.mu/sfrr/index.php/about-us-menu" target="_blank">
	    							<div className="cover Free-Radical-Research" />
	    							<p>Free Radical Research</p>
	    						</a>
    						</div>   						
    					</div>
    					<div className="row">
    						<div className="col-sm-4 col-xs-12 journal">
    							<a href="https://www.journals.elsevier.com/free-radical-biology-and-medicine/" target="_blank">
	    							<div className="cover Nitric-Oxide" />
	    							<p>Nitric Oxide</p>
	    						</a>
    						</div>    						
    						<div className="col-sm-4 col-xs-12 journal">
    							<a href="http://www.liebertpub.com/overview/antioxidants-and-redox-signaling/4/" target="_blank">
	    							<div className="cover Antioxidant-Redox-Signaling" />
	    							<p>Antioxidant Redox Signaling</p>
	    						</a>
    						</div> 
    						<div className="col-sm-4 col-xs-12 journal">
    							<a href="https://www.journals.elsevier.com/molecular-aspects-of-medicine/" target="_blank">
	    							<div className="cover Molecular-Aspects-of-Medicine" />
	    							<p>Molecular Aspects of Medicine</p>
	    						</a>
    						</div>  						
    					</div>
    					<div className="row">   						
    						<div className="col-sm-4 col-xs-12 journal">
    							<a href="http://onlinelibrary.wiley.com/journal/10.1111/(ISSN)1474-9726" target="_blank">
	    							<div className="cover Aging-Cell" />
	    							<p>Aging Cell</p>
	    						</a>
    						</div>
    						<div className="col-sm-4 col-xs-12 journal">
    							<a href="https://www.journals.elsevier.com/ageing-research-reviews/" target="_blank">
	    							<div className="cover Ageing-Research-Reviews" />
	    							<p>Ageing Research Reviews</p>
	    						</a>
    						</div>
    						<div className="col-sm-4 col-xs-12 journal">
    							<a href="https://www.journals.elsevier.com/archives-of-biochemistry-and-biophysics/" target="_blank">
	    							<div className="cover Archives-of-Biochemistry-and-Biophysics" />
	    							<p>Archives of Biochemistry and Biophysics</p>
	    						</a>
    						</div> 						
    					</div>
    				</div>
			    )
			  }
			});

module.exports = JournalsContent;