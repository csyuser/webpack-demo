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
  )],
  module: {
    rules: [
      {  //stylus
        test: /\.styl$/,
        loader: ['style-loader',
        'css-loader','stylus-loader']
      },
      {   //less
        test: /\.less$/,
        loader:['style-loader',
        'css-loader','less-loader']
  },
      {   //scss
  test: /\.scss$/i,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          implementation: require('dart-sass'),
        },
      },
    ],
      },
    ],
  },
};