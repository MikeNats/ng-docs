'use strict';

module.exports = function(config) {

  console.log("* ================================================= *");
  console.log("* Esquire loader tests also available at:           *");
  console.log("* http://127.0.0.1:9876/base/test/browser/test.html *");
  console.log("* ================================================= *");
  console.log("");

  config.set({
    /* Base tests definition */
    basePath: '.',
    frameworks: ['mocha', 'chai'],
    port: 9876,
    autoWatch: true,
    singleRun: false,

    /* These need to be in order */
    files: [
      /* Order here is important */
      'src/esquire.js',
      'src/loader.js',
      'ext/mocha.js',
      'ext/karma.js',

      /* Execution order of test */
      'test/deferred.test.js',
      'test/promise.test.js',
      'test/esquire.test.js',
      'test/global.test.js',
      'test/loader.test.js',

      /* Modules */
      'test/modules/*.js',

      /* All these files will be loaded by the loader */
      { pattern: 'test/browser/*', included: false },
      { pattern: 'test/loader/*',  included: false },
    ],

    /* Pretty */
    // logLevel: config.LOG_DEBUG,
    reporters: ['verbose'],
    colors: true,

    /* Our browsers */
    browsers: [ 'PhantomJS', 'Chrome', 'Firefox', 'Safari' ],
  });
};
