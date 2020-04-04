const path = require('path');
const execSync = require("child_process").execSync;
const XMLWebpackPlugin = require('xml-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ZipWebpackPlugin = require('zip-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("package.json"));

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
    new CopyWebpackPlugin([
      { from: './src/media' }
    ]),
    new XMLWebpackPlugin({
      files: xmlFiles,
    }),
    new ZipWebpackPlugin({
      filename: pkg.name + '.zip',
      extension: 'zip',
      pathMapper: function (assetPath) {
        // put all pngs in an `images` subdir
        if (assetPath.endsWith('.png'))
          return path.join(path.dirname(assetPath), 'media', path.basename(assetPath));
        return assetPath;
      },
      include: [/\.js$/, /\.html$/, /\.xml$/, /\.png$/],
      fileOptions: {
        mtime: new Date(),
        mode: 0o100664,
        compress: true,
        forceZip64Format: false,
      },
      zipOptions: {
        forceZip64Format: false,
      },
    }),
    new WebpackShellPlugin({
      onBuildStart: ['echo "Webpack Start"'],
      onBuildEnd: [`bb-import package ./build/` + pkg.name + `.zip --portal-port=8888 --portal-host=192.168.53.75 --portal-username admin --portal-password admin`]
    })
  ],
};

