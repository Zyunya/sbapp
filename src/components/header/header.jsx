import * as React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../../actions/userActions';
import store from '../../reducers/index.js';
import './header.scss';

class Header extends React.Component {

	constructor(props) {

		super(props)
		this.menu = true;
	}

	toggleMenu(){
		store.dispatch(toggleMenu(this.menu = !this.menu));
	}

	render() {

		return (
			<div id="header" onClick={()=> {this.toggleMenu()}}>
				<i className="fa fa-bars"></i>
				{this.props.title}
				<div className="horflexer"></div>

					<Link to='/page2'>
						<i className="fa fa-sign-in"></i>
					</Link>

			</div>
		)
	}

};


function FetchReducersData(state) {
	return {
		ReducerStoredData: state.menu,
	}
}


export default connect(
	state => (FetchReducersData),
	dispatch => ({})
)(Header);