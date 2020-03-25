const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')  //继承base

module.exports = {
  ...base,  //把base所有的属性都抄过来
  devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']    //用JS生成style标签的use
      },
    ],

  },
};
