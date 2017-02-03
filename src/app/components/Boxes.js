var React = require('react');
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

var Boxes = React.createClass({ 
  render: function () {
    return (
			<div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12 box alpha">
        	<Link to="related-meetings">
	          <div className="boxBg rel">
	          	<span>Related Meetings</span>
	          </div>
	        </Link>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 box beta">
        	<Link to="membership">
	          <div className="boxBg mem">
	          	<span>Membership</span>
	          </div>
	        </Link>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 box gamma">
        	<Link to="history">
	          <div className="boxBg his">
	          	<span>History</span>
	          </div>
	        </Link>
       </div>
        <div className="col-md-3 col-sm-6 col-xs-12 box omega">
        	<Link to="related-meetings">
	          <div className="boxBg car">
	          	<span>Careers</span>
	          </div>
	        </Link>
          <i className="material-icons" style={{position:'absolute', top:'50%', left:'50%', color:'#fff', transform:'translate(-50%, -50%)', fontSize:'42px'}}>play_circle_filled</i>
        </div>
      </div>
    )
  }
});

module.exports = Boxes;