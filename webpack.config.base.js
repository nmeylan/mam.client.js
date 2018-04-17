/* global __dirname, require, module*/

const path = require('path')

const entry = __dirname + '/src/node.js'

const config = {
  entry,
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
    path: 'empty'
  }
}
module.exports = config
