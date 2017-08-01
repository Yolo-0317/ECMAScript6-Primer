var webpack = require('webpack')
const path = require('path');

module.exports = {
  // package.json的script中的dev中注意src
  entry: './src/entry.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx|\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            presets: ['es2015']
        }
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
