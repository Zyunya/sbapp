/* SETTING ENV FOR WINDOWS , REMOVE THIS LINE IF YOu RUN IT ON LINUX */
process.env.NODE_ENV = "dev";
/* ---------------------------------*/

var express = require('express');
var app = express();
var server = require('http').Server(app);
var env = require('./config/env')[process.env.NODE_ENV];
var config = require("./config/config");
var bodyParser = require('body-parser');
var port = process.env.PORT || env.API_PORT;
var path = require('path');
var routes = require('./routes/index');
var corsOpt = require('./middlewares/cors');



/* MIDDLEWARES */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* ENABLE CORS */
app.use(function (req, res, next) { corsOpt.corsOpt(req, res, next, config.allowedOrigins); });


/* EXPRESS ROUTER */
app.use(`/${env.API_PREFIX}`, routes);


/* RUN SERVER IN DEV MODE */
if (process.env.NODE_ENV == "dev")
	server.listen(port, '0.0.0.0', () => { console.log(`LISTENING TO ${port}-${process.env.NODE_ENV}`); });


/* RUN SERVER IN PROD MODE */
if (process.env.NODE_ENV == "prod")
	server.listen(port, function () { console.log(`LISTENING TO ${port}-${process.env.NODE_ENV}`); });

module.exports = server;
