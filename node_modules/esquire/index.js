'use strict';

var glob = require('glob');
var path = require('path');
var fs = require('fs');

/* Just load if we never were initialized */
if (!('Esquire' in global)) {
  require("./src/esquire.js");
}

/* Listen to definitions */
var definitions = [];
Esquire.on('define', definitions.push.bind(definitions));

/* We are sure we have Esquire in globals */
function EsquireAdapter() {
  if (this instanceof EsquireAdapter) {
    global.Esquire.apply(this, arguments);
  } else {
    return global.esquire.apply(this, arguments);
  }
};

/* Prototype and static members */
EsquireAdapter.prototype = Esquire.prototype;

/* Properties of static members */
Object.defineProperties(EsquireAdapter, {
  'define':  { enumerable: true, configurable: false, value: function() { return global.Esquire.define .apply(global.Esquire, arguments) } },
  'module':  { enumerable: true, configurable: false, value: function() { return global.Esquire.module .apply(global.Esquire, arguments) } },
  'resolve': { enumerable: true, configurable: false, value: function() { return global.Esquire.resolve.apply(global.Esquire, arguments) } },
  'modules': { enumerable: true, configurable: false, get:   function() { return global.Esquire.modules } }
});

/* Our loader */
EsquireAdapter.load = function(pattern, caller) {
  /* Clear our definitions */
  definitions.splice(0);

  /* Prepare options for pattern loading */
  var options = { sync: true, nodir: true };
  if (caller && caller.filename) {
    options.cwd = path.dirname(caller.filename);
  } else {
    options.cwd = process.cwd();
  }

  /* Find all the files and load them */
  glob(pattern, options).forEach(function(file) {
    require(path.join(options.cwd, file));
  });

  /* Zero out the definitions */
  var loaded = definitions.splice(0);

  /* If we have a caller, process loaded modules */
  if (caller && (typeof(caller.require) === 'function')) {
    var modules = Esquire.modules;
    var unsatisfied = [];

    /* Check unsatisfied "id" dependencies */
    loaded.forEach(function(module) {
      module.dependencies.forEach(function(dependency) {
        if (dependency in modules) return;
        if (!(/^[^\$\/\.]+$/.test(dependency))) return;
        if (unsatisfied.indexOf(dependency) >= 0) return;
        unsatisfied.push(dependency);
      });
    });

    /* Try to load, ignore any error */
    unsatisfied.forEach(function(dependency) {
      try {
        caller.require(dependency);
        console.log("Loaded module '" + dependency + "'");
      } catch (error) {
        // swallow any error...
      }
    });
  }

  /* Return our modules */
  return Esquire.modules;
};

/* Export our adapter */
module.exports = EsquireAdapter;
