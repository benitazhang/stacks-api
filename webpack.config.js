const 
	path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');


const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === 'production';

const PATHS = {
	client: path.join(__dirname, 'client'),
	build: path.join(__dirname, 'build')
}

// creates new HTML file using the given template and adds script tags to include out index_bundle.js
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: PATHS.client + '/index.html'
});

const base = {
	entry: PATHS.client,
	output: {
		path: PATHS.build,
		filename: 'index_bundle.js'
	},
	module: {
		loaders:[
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.(css)$/, use: ['style-loader', 'css-loader'] }
		]
	}
}

const developmentConfig = {
	// errors in dev console will map to component code instead of the compiled JS
	devtool: 'inline-cheap-module-source-map',
	plugins: [HTMLWebpackPluginConfig]
}

const productionConfig = {
	plugins: [
		HTMLWebpackPluginConfig,
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	]
}


module.exports = Object.assign({}, base, isProduction === true ? productionConfig : developmentConfig);

