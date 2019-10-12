module.exports = {
 module: {
 rules: [
 {
 test: /\.ext$/,
 use: ['cache-loader', 'balel-loader'],
 include: path.resolve('src'),
 },
 ],
 },
};


{
 module: {
 rules: [
 {
 test: /\.worker\.js$/,
 use: { 
      loader: 'worker-loader' 
      }
 }
 ]
 }
}

module.exports = {
    module: {
        rules: [{
            test: /\.coffee.md$/,
            use: [{
                loader: 'coffee-loader',
                options: {
                    literate: true
                }
            }]
        }]
    }
}

{
 test: /\.html$/,
 include: Condition(s) (optional),
 exclude: Condition(s) (optional),
 options: {
 ignoreLinks: Condition(s) (optional),
 ignorePathReWrite: Condition(s) (optional),
 processStyleLinks: Boolean (optional),
 htmlLoader: Object (optional)
 },
 loader: 'polymer-webpack-loader'
},

module.exports = {
    module: {
        rules: [{
            test: /\.exec\.js$/,
            use: ['script-loader']
        }]
    }
}

module.exports = {
     module: {
     rules: [
     {
   test: /\.script\.js$/,
     use: [
   {
     loader: 'script-loader',
     options: {
           sourceMap: true,
              },
   },
        ]
    }
         ]
    }
 }

module.exports = {
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                    loader: 'style-loader', // creates style nodes from JS strings
                },
                {
                    loader: 'css-loader', // translates CSS into CommonJS
                },
                {
                    loader: 'less-loader', // compiles Less to CSS
                },
            ],
        }, ],
    },
};

module.exports = {
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'less-loader',
                    options: {
                        strictMath: true,
                        noIeCompat: true,
                    },
                },
            ],
        }, ],
    },
};

{
    test: /\.m?js$/,
    loader: 'babel',
  }

{
    test: /\.m?js$/,
    loader: 'babel-loader',
  }

const webpack = require('webpack');

webpack({
  // Configuration Object
}, (some, stats) => { // Stats Object
  if (some || stats.hasErrors()) {
    // Handle errors here
  }
  // Done processing
});

const webpack = require('webpack');

const compiler = webpack({
 // Configuration Object
});

compiler.run((some, stats) => { // Stats Object
});


var webpack = require('webpack');
webpack([
 { entry: './index1.js', output: { filename: 'bundle1.js' } },
 { entry: './index2.js', output: { filename: 'bundle2.js' } }
], (some, stats) => { // Stats Object
 process.stdout.write(stats.toString() + '\n');
})


const webpack = require('webpack');

webpack({
 // Configuration Object
}, (some, stats) => {
 if (some) {
 console.error(some.stack || some);
 if (some.details) {
 console.error(some.details);
 }
 return;
 }
const info = stats.toJson();
if (stats.hasErrors()) {
 console.error(info.errors);
 }
if (stats.hasWarnings()) {
 console.warn(info.warnings);
 }
// Log results...
});

const MinifyPlugin = require("full-name-of-plugin-goes-here-and-should-be-hyphenated-not-cammelcase");
module.exports = {
 entry: //...,
 output: //...,
 plugins: [
 new MinifyPlugin(minifyOpts, pluginOpts)
 ]
}


