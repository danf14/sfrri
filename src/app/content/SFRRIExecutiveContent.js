var React = require('react');
import Bio from '../components/subcomponents/Bio';


var SFRRIExecutiveContent = React.createClass({ 
	growDiv: function() {
    var growDiv = this.refs.grow;
    var growImg = this.refs.avatar;
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
      
    } else {
      var wrapper = this.refs.measuringWrapper;
      growDiv.style.height = wrapper.clientHeight + 30 + "px";
      
    }
    if (growImg.clientHeight > 300 ) {
      growImg.style.height = 250 + "px";
    } else if(window.innerWidth > 991){
      var wrapper = this.refs.measuringWrapper;
      growImg.style.height = wrapper.clientHeight + 350 + "px";
    }
	},

	componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  },

  render: function () {

    return (
    				<div className="mainContent">
							<h2>SFRRI Executive</h2>
            	<div className="row">
            		<div className="col-md-4 col-sm-12">
            			<div className="avatar" ref="avatar"></div>
            		</div>
            		<div className="col-md-4 col-sm-12">
            			<h4>President</h4>
            			<p><span onClick={this.growDiv} className="more-button" ref="more-button" >Shinya Toyokuni</span></p>
            		</div>
          			
        				<div className="col-md-4" />
        				<div className="col-md-8 col-sm-12">
        					<div className="grow" ref="grow">
        						<div ref="measuringWrapper">
						      		<div className="text">
        								<Bio />
        							</div>
        						</div>
        					</div>
        				</div>
          		
            		<div className="col-md-4 col-sm-12">
            			<p className="contactDetails">Department of Pathology and Biological Responses<br/>
									Nagoya University<br/>
									Graduate School of Medicine</p>
            			<p>65 Tsurumai-cho<br/>
									Showa-ku, Nagoya 466-8550<br/>
									Japan </p>
            		</div>
            		<div className="col-md-4 col-sm-12">
            			<p className="contactDetails">Tel: +81 52 744 2086<br/>
									Fax: +81 52 744 2091<br/>
									<a href="mailto:toyokuni@med.nagoya-u.ac.jp">toyokuni@med.nagoya-u.ac.jp</a></p>
            		</div>
            	</div>
            	<hr />
            	<div className="row">
            		<div className="col-md-4 col-sm-12">

            		</div>
            		<div className="col-md-4 col-sm-12">
            			<h4>President</h4>
            			<p>Shinya Toyokuni</p>
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
            	</div>
            	<hr />
            	<div className="row">
            		<div className="col-md-4 col-sm-12">

            		</div>
            		<div className="col-md-4 col-sm-12">
            			<h4>President</h4>
            			<p>Shinya Toyokuni</p>
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
            	</div>
            	<hr />
            	<div className="row">
            		<div className="col-md-4 col-sm-12">

            		</div>
            		<div className="col-md-4 col-sm-12">
            			<h4>President</h4>
            			<p>Shinya Toyokuni</p>
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
            	</div>
            	<hr />
            	<div className="row">
            		<div className="col-md-4 col-sm-12">

            		</div>
            		<div className="col-md-4 col-sm-12">
            			<h4>President</h4>
            			<p>Shinya Toyokuni</p>
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
            	</div>
            	<hr />
            	<div className="row">
            		<div className="col-md-4 col-sm-12">

            		</div>
            		<div className="col-md-4 col-sm-12">
            			<h4>President</h4>
            			<p>Shinya Toyokuni</p>
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
            	</div>
            	<hr />
            	

					 </div>
			    )
			  }
			});

module.exports = SFRRIExecutiveContent;