var csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');
var env = require('../config/env')[process.env.NODE_ENV];

const csvWriter = createCsvWriter({
	append: true,
	path: env.DB_PATH,
	header: [
		{ id: 'TIMESTAMP', title: 'TIMESTAMP' },
		{ id: 'PRICE', title: 'PRICE' },
		{ id: 'SOLD', title: 'SOLD' }
	]
});


const csvExporter = createCsvWriter({
	path: `${env.EXPORT_PATH}/exp_${new Date().getTime()}.csv`,
	header: [
		{ id: 'TIMESTAMP', title: 'TIMESTAMP' },
		{ id: 'PRICE', title: 'PRICE' },
		{ id: 'SOLD', title: 'SOLD' }
	]
})

class csvController {


	constructor() {

	}


	static read(req, res, err) {

		var data = [];

		fs.createReadStream(env.DB_PATH)
			.pipe(csv())
			.on('data', (d) => { data.push(d); })
			.on('end', () => {
				res.status(200).send({ statusText: "ok", data: data });
			});

	}


	static write(req, res, err) {

		const records =
		{
			TIMESTAMP: req.body.TIMESTAMP || new Date,
			PRICE: req.body.PRICE || 0,
			SOLD: req.body.SOLD || 0
		};


		csvWriter.writeRecords([records])
			.then(() => res.status(200).send({ statusText: "ok", data: records }));
	}


	static export(req, res, err) {

		var data = [];
		var timelimit = 60 * 100000 * 24 * 30;  //30 DAYS

		fs.createReadStream(env.DB_PATH)
			.pipe(csv())
			.on('data', (d) => { data.push(d); })
			.on('end', () => {

				/* GET DATA FOR LAST 30 DAYS */
				data = data.filter(item => {
					return new Date(item.TIMESTAMP).getTime() > new Date().getTime() - timelimit;
				})
				/* WRITE TO SCV */
					csvExporter.writeRecords(data)
						.then(() => res.status(200).send({ statusText: "ok", data: data })); 
			})

	}

}




module.exports = csvController;