var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry : APP_DIR + '/index.jsx',
	output : {
		path : BUILD_DIR,
		filename : 'bundle.js'
	},
	module : {
		loaders : [ {
			loader : "babel-loader",
			include : [ path.resolve(__dirname, 'src'), ],
			test: /\.jsx?$/,
			
		} ]
	}
};

module.exports = config;