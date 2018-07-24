//const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	mode: 'development',
	entry: './home.js',
	output: {
		path: __dirname + '/dist',
		filename: 'build.js',
		libraryTarget: 'var',
		library: 'home',
		//filename: '[name].[chunkhash:8].js'
	},
	devtool: 'source-map',
	module: {
		rules: [{
			enforce: 'pre',
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: 'eslint-loader'
		}
		]
	}
};
