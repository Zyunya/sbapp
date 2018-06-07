import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import store from './reducers/index.js';
import routes from './routes.js';

import "./style.scss";


//console.log(store.getState());


ReactDOM.render(

	<Provider store={store}>
		{routes}
	</Provider>,

	document.querySelector("#root")

);



