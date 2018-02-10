const _ = require('lodash')
const path = require('path')
const FlowWebpackPlugin = require('flow-webpack-plugin')

// setting for building docs
module.exports = (options, req) => ({
  entry: './src/index.js',
  dist: 'public',

  // use `.babelrc`
  babel: {babelrc: true},

  presets: [
    require('poi-preset-react')(options)
  ],

  transformModules: [],

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  webpack (config) {
    config = _.assign(config, {
      devtool: 'cheap-module-source-map',
      node: {
        module: 'empty',
        fs: 'empty'
      }
    })

    config.plugins.push(new FlowWebpackPlugin())

    return config
  }
})
