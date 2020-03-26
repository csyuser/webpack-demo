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
      ...base.module.rules, //先把base里面的rules考进来，再把自己的写进去覆盖
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']    //用JS生成style标签的use
      },
    ],

  },
};
