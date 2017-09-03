const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname)
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'react'],
            plugins: ['syntax-dynamic-import']
          }
        }
      }
    ]
  }
};