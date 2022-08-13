
var webpackConfig =  require('./webpack.config.js');
webpackConfig.entry = {}; // disable the original entry, webpack-karma dealis with it


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    frameworks: ['mocha', 'chai', 'webpack', ],

    // list of files / patterns to load in the browser
    files: [
      "./src/index.js",
      'test/**/*.js'
    ],

    preprocessors: {
      "./src/index.js": ['webpack'],
      "test/**/*.js": ['webpack'],      
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,

    webpack: {
      module: webpackConfig.module,
    },
    webpackMiddleware: {
      noInfo: true
    },
  })
}
