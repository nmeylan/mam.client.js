/* global __dirname, require, module*/

const path = require('path')

const output = 'lib/'
const libraryName = 'mam'
const outputFile = 'mam.web.js'

const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

const config = merge(baseConfig, {
  entry: ['babel-polyfill', baseConfig.entry],
  output: {
    path: path.resolve(__dirname, output),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /(\.js)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        babelrc: false,
        presets: [
          ['env', {
            'modules': false,
            'targets': {
              'browsers': ['> 1%', 'last 2 versions', 'not ie <= 8']
            }
          }]
        ]
      }
    }]
  }
})
console.log(config.output)
module.exports = config
