'use strict';

(function(window) {

  /* Placeholder in case we are loaded first */
  if (! window.Esquire) throw new Error("Esquire not avaiable");

  /* If we have karma... */
  if (window.__karma__) {

    /* We want to trap any call to global esquire and remember the promises */
    var esquire = window.esquire;
    var promises = [];

    /* Replace esquire(...) */
    window.esquire = function() {
      var promise = esquire.apply(null, arguments);
      promises.push(promise);
      return promise;
    }

    /* Instrument Karma */
    var karma = window.__karma__;
    console.log("Esquire: We have Karma...");

    /* List of matchers, one must resolve... */
    var matchers = [];

    /* Load scripts for Karma */
    window.Esquire.karma = function(callbackOrRegExp) {
      if (typeof(callbackOrRegExp) == 'function') {
        matchers.push(callbackOrRegExp);
      } else if (callbackOrRegExp instanceof RegExp) {
        matchers.push(function(fileName) {
          return callbackOrRegExp.test(fileName);
        });
      }
    };

    /* Replace Karma's loaded handler */
    karma.loaded = function() {

      /* Use a dictionary, remove duplicates */
      var scripts = {};

      /* See if any of the files match */
      for (var file in karma.files) {
        if (karma.files.hasOwnProperty(file)) {
          for (var matcher in matchers) {
            if (matchers[matcher](file)) {
              scripts[file] = file + "?" + karma.files[file];
            }
          }
        }
      }

      /* Convert the dictionary in an array */
      var locations = [];
      for (var i in scripts) {
        locations.push(scripts[i]);
      }

      /* Load the scripts if we have to */
      var promise;
      if (locations.length > 0) {
        console.log("Esquire: Loading " + locations.length + " scripts before running Karma");
        promise = window.Esquire.load(locations);
      } else {
        promise = window.Esquire.$$Promise.resolve();
      }

      /* Inject tests if we have to */
      if (promises.length > 0) {
        promise = promise.then(function(success) {
          console.log("Esquire: Waiting for " + promises.length + " injections before running Karma");
          return Esquire.$$Promise.all(promises);
        });
      }

      /* Now run Karma... */
      promise.then(function(success) {
        console.log("Esquire: Running Karma...");
        karma.start();
      }, function(failure) {
        var message = "Esquire: Unable to run Karma: " + failure.name + " - " + failure.message;
        if (failure.stack) message += "\n" + failure.stack;
        var error = failure.cause;
        while (error) {
          message += "\n- Caused by: " + error.name + " - " + error.message;
          if (error.stack) message += "\n" + error.stack;
          error = error.cause;
        }
        karma.error(message);
      });

    }
  }

})(window);
