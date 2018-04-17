/* global __dirname, require, module*/

const path = require('path')

const output = 'lib/'
const libraryName = 'mam'
const outputFile = libraryName + '.client.js'

const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

const config = merge(baseConfig, {
  output: {
    path: __dirname + '/' + output,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
})
console.log(config.output)
module.exports = config
