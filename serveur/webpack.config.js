import path from 'path'

const config = {
	entry: './src/index.js',
	externals: {
		sequelize: 'require("sequelize")',
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: './bundle.js',
	},
	target: 'node',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env',],
				},
			},

			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader',],
			},
		],
	},
}

export default config
