var path = require('path');
var rootPath = path.resolve(__dirname)
var webpack = require('webpack')
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
	},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            minimize: true
        }),
    ]
};
