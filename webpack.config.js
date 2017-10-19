const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'chapter-01/01-basic-skeleton': './src/js/chapter-01/01-basic-skeleton',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'docs/js'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env'],
      }
    }],
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      },
    }),
  ]
} else {
  module.exports.devtool = '#source-map';
}
