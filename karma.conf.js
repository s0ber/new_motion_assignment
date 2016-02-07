module.exports = function(config) {
  config.set({
    preprocessors: {
      'tests/index.js': ['webpack']
    },
    frameworks: ['mocha', 'sinon-chai', 'chai-equal-jsx'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'tests/index.js'
    ],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['PhantomJS'],
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-sinon-chai'),
      require('karma-phantomjs-launcher'),
      require('karma-chai-equal-jsx')
    ],
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      stats: {
        assets: false,
        chunks: false,
        hash: false,
        timings: false,
        version: false
      }
    }
  })
}
