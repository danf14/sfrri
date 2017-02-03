import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class SFRRICard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

      	<div className="col-md-4 col-sm-12">
	        <CardHeader
	          title="URL Avatar"
	          subtitle="Subtitle"
	          avatar="images/ok-128.jpg"
	          actAsExpander={true}
	          showExpandableButton={true}
	        />
	        <CardActions>
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
	      </div>
	      <h4>President</h4>
    			<p>Shinya Toyokuni</p>
	      <CardText expandable={true}>
		      <div className="row">
	          <div className="col-md-9 col-md-offset-4 col-sm-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
	          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
	          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</div>
	        </div>
        </CardText>
	      <div className="col-md-4 col-sm-12">
	      	
    			<p>Department of Pathology and Biological Responses<br/>
					Nagoya University<br/>
					Graduate School of Medicine</p>
    			<p>65 Tsurumai-cho<br/>
					Showa-ku, Nagoya 466-8550<br/>
					Japan </p>
	      </div>
	      <div className="col-md-4 col-sm-12">
	      	<p>Tel: +81 52 744 2086<br/>
					Fax: +81 52 744 2091<br/>
					<a href="mailto:toyokuni@med.nagoya-u.ac.jp">toyokuni@med.nagoya-u.ac.jp</a></p>
	      </div>
        
        
      </Card>
    );
  }
}

module.exports = SFRRICard;