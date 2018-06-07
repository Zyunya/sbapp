import axios from 'axios';


export class API {


	static readCSV() {
		return axios.get(`${_ENV_.API.READ_CSV}`)
	}


	static exportCSV() {
		return axios.get(`${_ENV_.API.EXPORT_CSV}`);
	}


	static writeCSV(data) {
		return axios({
			method: 'post',
			url:_ENV_.API.WRITE_CSV,
			data: data,
		})
	}


}

