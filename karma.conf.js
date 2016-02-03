module.exports = function(config) {
  config.set({
    preprocessors: {
      'src/**/*.js': ['webpack']
    },
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      {pattern: 'src/**/*_test.js', watched: false}
    ],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['PhantomJS2'],
    captureTimeout: 60000,
    singleRun: false,
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-sinon-chai'),
      require('karma-phantomjs2-launcher')
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
