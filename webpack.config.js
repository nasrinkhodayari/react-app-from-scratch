const path = require('path');
const XMLWebpackPlugin = require('xml-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const xmlFiles = [
  {
      template: path.join(__dirname, '/src/model.xml'),
      filename: 'model.xml',
  }
]
module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|json)$/, use: [{ loader: 'file-loader' }] },  
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new XMLWebpackPlugin({
      files: xmlFiles,
    }),
  ],
};
