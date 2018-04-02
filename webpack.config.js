//entry -> output

const path = require('path');


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
      test: /\.scss/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ] //use is the array for multiple loaders instead of the babel-loader like above
    }]
  },
    mode: 'development', // | 'production' | 'none'
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
};
