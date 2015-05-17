'use strict';

(function (global) {

  describe("Deferred", function() {

    /* Our Deferred class */
    var Deferred = Esquire.$$Deferred;

    /* Validate our assumption on promises by validating the native */
    if (global.Promise) createTests("with native Promise", global.Promise);

    /* Always test our "emulated" and default Promise implementation */
    createTests("with emulated Promise", Esquire.$$Promise);

    /*
     * Parameters:
     * suite -> Suite name
     * PromiseImpl -> Promise implementation
     */
    function createTests(suite, PromiseImpl) {
      describe(suite, function() {

        promises("should resolve a deferred", function() {

          var deferred = new Deferred();
          var promise = deferred.promise;
          deferred.resolve("foo");

          return promise.then(function(result) {
            expect(result).to.be.equal("foo");
          }).done();

        });

        /* ==================================================================== */

        promises("should resolve a deferred resolved with a resolved promise", function() {

          var deferred = new Deferred();
          var promise = deferred.promise;
          deferred.resolve(PromiseImpl.resolve("foo"));

          return promise.then(function(result) {
            expect(result).to.be.equal("foo");
          }).done();

        });

        /* ==================================================================== */

        promises("should reject a deferred", function() {

          var deferred = new Deferred();
          var promise = deferred.promise;
          deferred.reject("foo");

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal("foo");
          }).done();

        });

        /* ==================================================================== */

        promises("should reject a deferred resolved with a rejected promise", function() {

          var deferred = new Deferred();
          var promise = deferred.promise;
          deferred.resolve(PromiseImpl.reject("foo"));

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal("foo");
          }).done();

        });

        /* ==================================================================== */

        promises("should handle deep exceptions", function() {

          var deferred = new Deferred();

          setTimeout(function() {
            deferred.resolve("foo");
          }, 50);

          var promise1 = deferred.promise.then(function(result) {
            //throw "Gonzo";
            return result;
          });

          var promise2 = promise1.then(function(result) {
            return result;
          });

          var promise3 = promise2.then(function(result) {
            throw "failure=bar";
          })

          var promise4 = promise3.then(function(result) {
            throw "failure=baz";
          });

          return promise4.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal("failure=bar");
          }).done();

        });

        /* ==================================================================== */

        promises("should resolve deferred resolved with undefined", function() {

          var deferred1 = new Deferred();
          var deferred2 = new Deferred();

          setTimeout(function() {
            deferred1.resolve("foo");
            deferred2.resolve("bar");
          }, 50);

          var promise1 = deferred1.promise.then(function(result) {
            // console.log("OK 1", result);
            return "defined";
          });

          var promise2 = deferred2.promise.then(function(result) {
            // console.log("OK 2", result);
          });

          return PromiseImpl.all([promise1, promise2]).then(function(success) {
            expect(success).to.be.instanceof(Array);
            expect(success.length).to.equal(2);
            expect(success[0]).to.equal("defined");
            expect(success[1]).to.equal(undefined);
          }).done();

        });

        /* ==================================================================== */

        promises("should timeout with no rejection specified", function() {

          var deferred = new Deferred(10);

          setTimeout(function() {
            deferred.resolve("this is bad...");
          }, 20)

          return deferred.promise.then(function(result) {
            throw new Error("Should not resolve");
          }, function(failure) {
            expect(failure).to.be.instanceof(Error);
            expect(failure.message).to.be.equal('Timeout waiting for resolution/rejection');
          }).done();

        });

        /* ==================================================================== */

        promises("should timeout with a rejection message", function() {

          // 0, not null but also not truthy...
          var deferred = new Deferred(10, "Fail, deferred, FAIL!");

          setTimeout(function() {
            deferred.resolve("this is bad...");
          }, 20)

          return deferred.promise.then(function(result) {
            throw new Error("Should not resolve");
          }, function(failure) {
            expect(failure).to.be.instanceof(Error);
            expect(failure.message).to.be.equal('Fail, deferred, FAIL!');
          }).done();

        });

        /* ==================================================================== */

        promises("should timeout with a specific rejection", function() {

          // 0, not null but also not truthy...
          var deferred = new Deferred(10, 0);

          setTimeout(function() {
            deferred.resolve("this is bad...");
          }, 20)

          return deferred.promise.then(function(result) {
            throw new Error("Should not resolve");
          }, function(failure) {
            expect(failure).to.be.a('number');
            expect(failure).to.be.equal(0);
          }).done();

        });

      });
    }
  });

})((function() {
  try {
    return window;
  } catch (e) {
    return global;
  }
})());
