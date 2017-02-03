var React = require('react');
import SFRRIExecutiveContent from '../content/SFRRIExecutiveContent';
import News from '../content/News';
import Paper from 'material-ui/Paper';

var SFRRIExecutive = React.createClass({ 
  render: function () {
    return (
				    <div className="container">
				    	<div className="row">
				    		<div className="col-lg-9 col-md-12">
				    			<Paper className="paper left" zDepth={1}>
				    				<SFRRIExecutiveContent />  
				    			</Paper>			
				    		</div>
				    		<div className="col-lg-3" /*style={{clear:'both'}}*/>
				    			<Paper className="paper right" zDepth={1}>
				    				<News />
				    			</Paper>
				    		</div>
					    </div>
				    </div>
				    )
				  }
				});

module.exports = SFRRIExecutive;