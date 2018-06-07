const corsOptions= {

	corsOpt(req, res, next , allowedOrigins) {

		var origin = req.headers.origin;

		if(allowedOrigins.includes(origin)){res.header('Access-Control-Allow-Origin', origin);}
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		next();

	},
}

module.exports = corsOptions;