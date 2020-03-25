
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'test',
      template: 'src/assets/index.html'
    }
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,  //正则表达式
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
