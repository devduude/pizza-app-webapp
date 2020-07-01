const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('config');


const host = config.get('webpack.host');
const port = config.get('webpack.port');
const publicHost = config.get('webpack.publicHost');

module.exports = {
  entry: './public/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@root': path.resolve(__dirname),
      '@src': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({ SERVER_URL: JSON.stringify(config.get('server.url')) }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'build'),
    publicPath: '/',
    host,
    port,
    public: publicHost,
    allowedHosts: [
      publicHost,
    ],
    disableHostCheck: true,
    historyApiFallback: true,
  },
};
