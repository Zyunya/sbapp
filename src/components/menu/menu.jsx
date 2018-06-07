import * as React from "react";
import './menu.scss';
import { API } from '../../services/api';
import { connect } from 'react-redux';
import { addData } from '../../actions/userActions';
import store from '../../reducers/index.js';
import moment from "moment";

class Menu extends React.Component {


	constructor(props, context) {

		super(props, context);
		/* HERE WE DECLARE OUR GLOBAL VARIABLES */
		this.state = {
			TIMESTAMP : new Date(),
			PRICE : 0,
			SOLD : 0,
		};

	}


	componentDidMount() {
		this.getData();
	}


	getData() {

	
			API.readCSV().then(

				res => { store.dispatch(addData(res.data.data)); },

				err => console.error(err)

			)

		

	};


	setData() {

		API.writeCSV(this.state).then(

			res => { 
				var resp  = res.data;
				if(resp.statusText === "ok"){
					store.dispatch(addData(resp.data));
					console.log(this.props.dataList)
				}
			 },

			err => console.error(err)

		)

	}


	exportData() {

		API.exportCSV().then(

			res => {if(res.data.statusText === "ok") alert("EXPORTED")},

			err => console.error(err)

		)

	}

	getDelta(i) {
		let arr = this.props.dataList;
		let ind = (arr.indexOf(i) - 1) < 0 ? 0 : arr.indexOf(i) - 1;
		return ind;
	}


	render() {

		return (

			<div className="row " id="menu" className={this.props.menuStatus ? "active" : "unactive"}>

				<div className="col-12 mx-auto ">

					{this.props.dataList && this.props.dataList.map(i => {
						return <div className="list" key={this.props.dataList.indexOf(i)}>
							<div className="fa fa-clock-o">
								<span>{moment(i.TIMESTAMP).format('LLLL')}</span>
							</div>
							<div className="fa fa-dollar">
								<span>{i.PRICE}</span>
							</div>
							<div className="fa fa-gavel">
								<span>{i.SOLD}</span>
							</div>
							<div className="fa fa-line-chart">
								<span>{i.PRICE - this.props.dataList[this.getDelta(i)].PRICE} </span>
							</div>
						</div>
					})}
				</div>

				<div className="col-12 mx-auto ">
					<div className="form">
						<div className="fa fa-dollar">
							<input  type="number" value={this.state.PRICE}  onChange={(event) => this.setState({PRICE : event.target.value})} />
						</div>
						<div className="fa fa-gavel">
							<input type="number" value={this.state.SOLD}  onChange={(event) => this.setState({SOLD : event.target.value})} />
						</div>
						<button onClick={() => this.setData()}>ADD</button>
					</div>
				</div>

				<div className="col-12 mx-auto ">
				<div className="export">
					<button onClick={() => this.exportData()}>EXPORT DATA - FOR LAST 30DAYS</button>
				</div>
				</div>

			</div>
		)

	}


};


function FetchReducersData(state) {
	return {
		menuStatus: state.menu,
		dataList: state.dataTable.reverse(),
	}
}


export default connect(
	state => (FetchReducersData),
	dispatch => ({})
)(Menu);