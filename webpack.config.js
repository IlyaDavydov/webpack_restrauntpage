const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  stats: {
    assets: false,
  },
  performance: {
    hints: false,
  },
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        inject: 'head',
        scriptLoading: 'defer'
    })
],
module: {
  rules: [
    {
      test: /\.css$/, 
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/, 
      type: 'asset/resource'
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/, 
      type: 'asset/resource'
    }
  ]
},
devtool: 'source-map',
devServer: { 
  port: 1000, 
  open: true 
}
};