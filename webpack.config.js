const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

var prodPlugins = [];

// For production
if (process.env.NODE_ENV == 'production') {
  // https://webpack.js.org/plugins/babel-minify-webpack-plugin/
  const minifyOpts = {
    removeConsole: true
  };

  const pluginOpts = {
    comments: false
  };

  prodPlugins.push(new MinifyPlugin(minifyOpts, pluginOpts));
}

const config = {
  entry: {
    app: './src/modules/init/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: '0.0.0.0',
    compress: true,
    port: 9000
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }
      })
    }, {
      test: /\.(gif|png|jpg)$/,
      use: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html'
    }),
    new ExtractTextPlugin('styles.css')
  ].concat(prodPlugins),
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ]
  },
  performance: {
    hints: 'warning', // 'error' or false are valid too
    maxEntrypointSize: 100000, // in bytes
    maxAssetSize: 450000, // in bytes
  }
};

module.exports = config;
