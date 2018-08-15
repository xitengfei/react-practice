const path = require('path');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode:'development',
	entry: "./src/app.js",
	output:{
		path: path.resolve(__dirname, "dist/assets"),
		filename: "bundle.js",
		sourceMapFilename: 'bundle.map'
	},
	devtool: '#source-map',
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'es2015']
					}
				}
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js($|\?)/i,
				sourceMap: true
			})
		]
	},
	devServer: {
		inline: true,
		port: 8001,
	},
}
