import doc from 'js-yaml-loader!./file.yml';

module: {
    rules: [{
    test: /\.yaml$/,
    use: 'js-yaml-loader',
    }]
}

const json = require('yaml-frontmatter-loader!./file.md');

module.exports = {
  module: {
    rules: [
      {
         test: /\.md$/,
         use: [ 'json-loader', 'yaml-frontmatter-loader' ]
      }
    ]
  }
}

module.exports = {
  module: {
    rules: [
      {
         test: /\.md$/,
         use: [ 'json-loader', 'yaml-frontmatter-loader' ]
      }
    ]
  }
}


entry: {
 'app': './src/main.ts'
},

output: {
 filename: 'app.js'
}


entry: {
 app: 'src/app.ts',
 vendor: 'src/vendor.ts'
},
output: {
 filename: '[name].js'
}


const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    module: {
     rules: [
     // other rules
      {
       test: /\.vue$/,
       loader: 'vue-loader'
      }
      ]
     },
     plugins: [
     // make sure to include the plugin.
     new VueLoaderPlugin()
     ]
}


