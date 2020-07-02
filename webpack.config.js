const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('config');


const host = process.env.NODE_ENV !== 'production' ? config.get('webpack.host') : undefined;
const port = process.env.NODE_ENV !== 'production' ? config.get('webpack.port') : undefined;
const publicHost = process.env.NODE_ENV !== 'production' ? config.get('webpack.publicHost') : undefined;

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
    new webpack.DefinePlugin({ SERVER_URL: process.env.NODE_ENV !== 'production' ? JSON.stringify(config.get('server.url')) : undefined }),
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
