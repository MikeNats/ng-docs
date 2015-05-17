'use strict';

(function (global) {

  if (! global.Esquire) throw new Error("Esquire not available");

  var successInstance = {};

  var successPromise = function() {
    return this.then(function(success) {
      return successInstance;
    })
  };

  global.Esquire.$$Promise.prototype.done = successPromise;
  if (global.Promise) global.Promise.prototype.done = successPromise;

  /* Extension to mocha: "promises(...)" is like a deferred "it(...)"  */
  function invoke(itfn, title, fn) {
    return itfn.call(this, title, function(done) {
      var failure = null;

      try {
        var promise = fn.call(this);
        if (promise && (typeof(promise.then) === 'function')) {
          promise.then(function(success) {
            if (failure != null) done(failure);
            else if (success === successInstance) done();
            else done(new Error("Not notified of completion: call 'done()' on the last promise"));
          }, function(failure) {
            console.warn("Rejected: ", failure);
            done(failure);
          })
        } else if (promise === successPromise) {
          done(new Error("The completion notification 'done()' must be called as a function"));
          done();
        } else {
          done(new Error("Test did not return a Promise"));
        }
      } catch (error) {
        console.warn("Failed:", error);
        done(failure = error);
      }
    });
  };

  function promises(title, fn) {
    if (! global.it) throw new Error("Global 'it(...)' not available");
    return invoke(global.it, title, fn);
  }

  promises.skip = function(title, fn) {
    if (! global.it) throw new Error("Global 'it(...)' not available");
    if (! global.it.skip) throw new Error("Global 'it.skip(...)' not available");
    return invoke(global.it.skip, title, fn);
  }

  promises.only = function(title, fn) {
    if (! global.it) throw new Error("Global 'it(...)' not available");
    if (! global.it.only) throw new Error("Global 'it.only(...)' not available");
    return invoke(global.it.only, title, fn);
  }

  function xpromises(title, fn) {
    if (! global.xit) throw new Error("Global 'xit(...)' not available");
    return invoke(global.xit, title, fn);
  }

  global.promises = promises;
  global.xpromises = xpromises;

})((function() {
  try {
    return window;
  } catch (e) {
    return global;
  }
})());

