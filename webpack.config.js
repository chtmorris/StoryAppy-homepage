var path              = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');

module.exports = {
  entry: path.join(__dirname, "./app/App.js"),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
        // loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'StoryAppy',
      template: 'app/assets/templates/index.html',
    }),
  ]
};
