"use strict";

/* Register our Grunt task */
module.exports = function(grunt) {

  /* Need Esquire and Mocha extensions */
  require("../src/esquire.js");
  require("../ext/mocha.js");

  /* If we have them, slap in the Chai globals */
  try {
    var chai = require('chai');
    chai.config.includeStack = true;
    global.expect = chai.expect;
    global.should = chai.should;
    global.assert = chai.assert;
    grunt.verbose.ok("Loaded Chai");
  } catch (error) {
    grunt.verbose.error("Chai unavailable");
  }

  /* Register our task */
  grunt.registerMultiTask('esquire-mocha', 'Run tests with mocha', function() {

    /* Create a new Mocha instance */
    var mocha = new (require('mocha'))(this.options());

    /* We want to trap any call to global esquire and remember the promises */
    var esquire = global.esquire;
    var promises = [];

    /* Replace esquire(...) */
    global.esquire = function() {
      var promise = esquire.apply(null, arguments);
      promises.push(promise);
      return promise;
    }

    /* Tell mocha what files need to be loaded */
    this.filesSrc.forEach(function (file) {
      mocha.addFile(file);
    });

    /* Load files and reset list */
    mocha.loadFiles();
    mocha.files = [];

    /* Asynchronously call mocha */
    var done = this.async();

    grunt.verbose.ok("Esquire: Waiting for " + promises.length + " injections before running Mocha");
    Esquire.$$Promise.all(promises)
      .then(mocha.run(function(errCount) {
        done(errCount === 0);
      }), function(failure) {
        grunt.log.error("Failed injecting tests: " + failure.message);
        done(failure);
      })

  });

};
