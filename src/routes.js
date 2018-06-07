import React from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import adminDash from './containers/admindash.jsx';



const routes = (

	<BrowserRouter >
		<Switch>
			<Route exact path="/" component={adminDash} />
		</Switch>
	</BrowserRouter>

);


export default routes;