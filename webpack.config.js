var path = require('path');
var webpack = require('webpack');
const devEnv = require('./src/environments/development');
const prodEnv = require('./src/environments/production');

module.exports = {

	devServer: {
		historyApiFallback: true,
		contentBase: './',
		port: 8088,
		hot: true
	},

	entry: "./src/app.js",
	output: {

		path: path.resolve(__dirname, './public'),
		publicPath: '/public/',
		filename: "bundle.js"

	},


	module: {

		rules: [

			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: { presets: ["env", "react", "es2015"] }
			},
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: { presets: ["react", "es2015"] }
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},

			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}

		]

	},

	plugins: [
		new webpack.DefinePlugin({
			'_ENV_': process.env.NODE_ENV == 'production' ? JSON.stringify(prodEnv) : JSON.stringify(devEnv)
		})
	]

}
