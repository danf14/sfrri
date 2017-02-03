var React = require('react');

var ContactContent = React.createClass({ 
  render: function () {
    return (
    				<div className="mainContent">
							<h2>Contact</h2>

              <h4>Giovanni Mann</h4>
              <p>Secretary-General SFRRI<br />
              Cardiovascular Division<br />
              School of Medicine<br />
              King's College London<br />
              Franklin-Wilkins Building (Rm 3.01)<br />
              150 Stamford Street<br />
              London SE1 9NH<br />
              UK </p>
              <p>Tel: +44-20-7848-4306<br />
							Fax: +44-20-7848-4500<br />
							<a href="mailto:giovanni.mann@kcl.ac.uk">giovanni.mann@kcl.ac.uk</a></p>
					 	</div>
			    )
			  }
			});

module.exports = ContactContent;