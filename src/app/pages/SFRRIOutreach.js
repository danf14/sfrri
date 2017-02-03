var React = require('react');
import SFRRIOutreachContent from '../content/SFRRIOutreachContent';
import News from '../content/News';
import Paper from 'material-ui/Paper';

var SFRRIOutreach = React.createClass({ 
  render: function () {
    return (
				    <div className="container">
				    	<div className="row">
				    		<div className="col-lg-9 col-md-12">
				    			<Paper className="paper left" zDepth={1}>
				    				<SFRRIOutreachContent />  			
				    			</Paper> 			
				    		</div>
				    		<div className="col-lg-3">
				    			<Paper className="paper right" zDepth={1}>
				    				<News />
				    			</Paper>
				    		</div>
					    </div>
				    </div>
				    )
				  }
				});

module.exports = SFRRIOutreach;