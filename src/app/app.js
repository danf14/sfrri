import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import Main from './Main'; // Our custom react component
import Layout from './Layout';
//var ReactDOM = require('react-dom');
//var routes = require('./config/routes');
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
/*
import './styles/normalize.css'
import './styles/bootstrap_grid12.css'
import './styles/bootstrap_grid12_fixes.css'
import './styles/main.css'*/

import Home from './pages/Home';
import PresAdd from './pages/PresAdd';
import History from './pages/History';
import Governance from './pages/Governance';
import Fellowship from './pages/Fellowship';
import AGMMinutes from './pages/AGMMinutes';
import Obituaries from './pages/Obituaries';
import SFRRIExecutive from './pages/SFRRIExecutive';
import Regional from './pages/Regional';
import Membership from './pages/Membership';
import PastConferences from './pages/PastConferences';
import RulesForConf from './pages/RulesForConf';
//import FoundingSponsors from './pages/FoundingSponsors';
import RelatedMeetings from './pages/RelatedMeetings';
import SFRRIOutreach from './pages/SFRRIOutreach';
import Journals from './pages/Journals';
import Videos from './pages/Videos';


import Sitemap from './pages/Sitemap';
import Disclaimer from './pages/Disclaimer';
import Contact from './pages/Contact';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path='presidential-address' component={PresAdd}></Route>
			<Route path='history' component={History}></Route>
			<Route path='governance' component={Governance}></Route>
			<Route path='fellowships-and-awards' component={Fellowship}></Route>
			<Route path='agm-minutes' component={AGMMinutes}></Route>
			<Route path='obituaries' component={Obituaries}></Route>
			<Route path='sfrri-executive' component={SFRRIExecutive}></Route>
			<Route path='regional-societies-committees' component={Regional}></Route>
			<Route path='membership' component={Membership}></Route>
			<Route path='past-conferences' component={PastConferences}></Route>
			<Route path='rules-for-conference-organisation' component={RulesForConf}></Route>
			{/*<Route path='founding-sponsors' component={FoundingSponsors}></Route>*/}
			<Route path='related-meetings' component={RelatedMeetings}></Route>Journals
			<Route path='sfrri-outreach' component={SFRRIOutreach}></Route>
			<Route path='journals' component={Journals}></Route>
			<Route path='videos' component={Videos}></Route>

			<Route path='sitemap' component={Sitemap}></Route>
			<Route path='disclaimer' component={Disclaimer}></Route>
			<Route path='contact' component={Contact}></Route>
		</Route>
	</Router>, 
document.getElementById('app'));
