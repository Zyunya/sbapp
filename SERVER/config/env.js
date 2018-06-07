var API_PREFIX  = '';


const ENV = {

	dev : {
		API_PREFIX : API_PREFIX,
		API_PORT : 4424,
		DB_PATH : './db/data.csv',
		EXPORT_PATH : './exported'
},

	prod : {
		API_PREFIX : API_PREFIX,
		API_PORT : 4424,
		DB_PATH : './db/data.csv',
		EXPORT_PATH : './exported'
	}

}

module.exports = ENV;