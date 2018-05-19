const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin('styles.css');

module.exports = {
 entry: './src/app.js',
 output: {
   path: path.join(__dirname, 'public'),
   filename: 'bundle.js'
 },
 module:{
   rules: [{
     loader: 'babel-loader',
     test: /\.js$/, //Regex for only JS files to be passed through babel and node_modules dont need to be passed through babel
     exclude: /node_modules/
   },{
     test: /\.s?css/,
     use: CSSExtract.extract({
       use: [
         {
           loader: 'css-loader',
           options: {
             sourceMap: true
           }
         },
         {
           loader: 'sass-loader',
           options: {
             sourceMap: true
           }
         }
       ]
     }) //use is the array for multiple loaders instead of the babel-loader like above
   }]
 },
 plugins: [CSSExtract]
};
