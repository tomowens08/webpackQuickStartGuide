const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const webpack = require('webpack');

  module.exports = {
    entry: {
       app: './src/index.js',
       print: './src/print.js'
       app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    plugins: [
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };


const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const webpack = require('webpack');

  module.exports = {
    entry: {
      app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
  },
  mode: 'development',
  optimization: {
    usedExports: true
  }
};

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  optimization: {
    usedExports: true
  }
  mode: 'production'
};

///migration


module.exports = {
    mode: 'production',
}


module.exports = {
 plugins: [
   new NoEmitOnErrorsPlugin(),
   new ModuleConcatenationPlugin(),
   new DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
   new UglifyJsPlugin()
 ],
 }



module.exports = {
 plugins: [
   new NamedModulesPlugin()
 ],
 }

module.exports = {
 plugins: [
   new NoErrorsPlugin(),
   new NewWatchingPlugin()
 ],
 }

module.exports = {
 rules: [
 {
 test: /config\.json$/,
 loader: 'special-loader',
 type: 'javascript/auto',
 options: {...}
 }
 ]
 };


module.exports = {
 rules: [
 {
   test: /\.json$/,
   loader: 'json-loader'
 }
 ]
 };


