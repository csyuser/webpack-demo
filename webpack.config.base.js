const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin(  //插件
    {
      title: 'test',   //更改title
      template: 'src/assets/index.html'  //指定html模板
    }
  )]
};