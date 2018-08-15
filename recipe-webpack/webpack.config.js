const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	mode:'development',
	entry: "./src/app.js",
	output:{
		path: path.resolve(__dirname, "dist/assets"),
		filename: "bundle.js",
		// sourceMapFilename: 'bundle.map'
	},
	// devtool: '#source-map',
	module:{
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// options: {
					// 	presets: ['es2015', 'react']
					// }
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
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
		contentBase: "./public",
		historyApiFallback: true, // make all redirects point to index.html
		inline: true, // refresh page automatically while coding
		port: 8001,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "index.tpl.html"),
			filename: 'index.html',
			inject: 'body'
		}),
	],
}
