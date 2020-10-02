const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode = 'development' }) => ({
  entry: {
    index: './src/index.jsx',
  },

  output: {
    path: path.resolve('dist', 'assets', 'scripts'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.css', '.scss', '.js', '.jsx'],
  },

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel-loader' },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: '../styles/[name].css',
    }),
  ],

  mode,
});
