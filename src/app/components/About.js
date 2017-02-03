var React = require('react');
import SimpleMapExample from './GoogleMap';

var About = React.createClass({ 
  render: function () {
    return (
			<div className="row">
      		<div className="col-xs-12 about">
            <div className="row">
            	<div className="col-lg-6 col-md-12">
            		<h3>About</h3>
            		<p>The Society for Free Radical Research founded in the United Kingdom in 1982 is an International Society with the following rules (as amended by resolution of the members dated September 11, 1998). The International Society is a charitable voluntary, non-profit making institution.</p>
      					<p>The object of the International Society is to advance education in free radical processes with particular reference to those of industrial and medical importance, such education being for the benefit of the public.</p>
            	</div>
              <div className="col-lg-6 col-md-12 mapContainer">
                <SimpleMapExample />
              </div>
            </div>
      			<div className="col-xs-12">
      				<h4>Objectives</h4>
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
    )
  }
});

module.exports = About;