var HOST = "http://test.host.com:8081";
var API_URL = "http://test.host.com:4424";
var API_PREFIX = "";


const environment = {

	production: false,
	HOST: HOST,
	API_URL : API_URL,

	API: {

		READ_CSV: `${API_URL}/${API_PREFIX}csv/read`,
		WRITE_CSV: `${API_URL}/${API_PREFIX}csv/write`,
		EXPORT_CSV: `${API_URL}/${API_PREFIX}csv/export`,

	}

}


module.exports = environment;