var path = require('path');
var rootPath = path.resolve(__dirname)
module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		path: rootPath + '/build',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
                exclude: /node_modules/
			}
		]
	}
};
