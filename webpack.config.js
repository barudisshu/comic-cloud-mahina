const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin/lib/index');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    library: '',
    libraryTarget: 'umd',
  },
  entry: ['babel-polyfill', path.join(__dirname, 'src', 'index.tsx')],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    port: 3000,
  },
  resolve: {
    extensions: [
      '.mjs',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          cacheDirectory: true,
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            'react-hot-loader/babel',
          ],
        },
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader?importLoaders=1!less-loader',
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader?importLoaders=2!postcss-loader!sass-loader',
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true },
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        exclude: /(node_modules)/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: path.resolve(__dirname, './public', 'index.html'),
      filename: './index.html'
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new InterpolateHtmlPlugin(HtmlWebPackPlugin, {
      PUBLIC_URL: ''
    })
  ],
};
