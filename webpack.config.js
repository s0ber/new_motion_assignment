const path = require('path')
const webpack = require('webpack')
const ComponentResolverPlugin = require('component-resolver-webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:4000/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ResolverPlugin([
      new ComponentResolverPlugin(['js'])
    ])
  ],
  resolve: {
    root: path.resolve('./src'),
    modulesDirectories: ['node_modules', 'components']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.resolve('./src')
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap!postcss'
      },
      {
        test: /\.sass$/,
        loader: 'style!css?sourceMap!postcss!sass?sourceMap&indentedSyntax!import-glob'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  postcss: function() {
    const autoprefixer = require('autoprefixer')
    return [autoprefixer]
  },
  devServer: {
    stats: 'errors-only'
  }
}
