var React = require('react');
var ReactRouter = require('react-router');

import FrontNews from '../content/FrontNews';
import BoxesNEW from '../components/BoxesNEW';
import About from '../components/About';
import Paper from 'material-ui/Paper';

var Home = React.createClass({ 
  render: function () {
    return (

    <div className="container">
    	<Paper className="paper" zDepth={1}>
    		<FrontNews />
    	</Paper>
    	<BoxesNEW />
    	<Paper className="paper" zDepth={1}>
      	<About />
      </Paper>
    </div>

    )
  }
});

module.exports = Home;