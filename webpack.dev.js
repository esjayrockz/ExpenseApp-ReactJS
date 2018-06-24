const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = merge(common, {
 devtool: 'inline-source-map',
 devServer: {
   contentBase: path.join(__dirname, 'public'),
   historyApiFallback: true,
   publicPath: '/dist/'
 },
 mode: 'development'
});
