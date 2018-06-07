var React = require("react");
import Header from '../components/header/header.jsx';
import Menu from '../components/menu/menu.jsx';
import { Link } from 'react-router-dom';


export default class adminDash extends React.Component {

	constructor(props) {
		super(props);
		this.menuActive = false;

	}


	render() {

		return (
			<div className="container">
				<Header title="SB APP" title2 = "VISITOR" />
				<Menu menuStatus = {this.menuActive}/>
			</div>
		)
	}
};