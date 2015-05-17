'use strict';

(function (global) {

  describe("Promise", function() {

    /* Validate our assumption on promises by validating the native */
    if (global.Promise) createTests("native implementation", global.Promise);

    /* Always test our "emulated" Promise implementation */
    createTests("emulated implementation", Esquire.$$Promise);

    /*
     * Parameters:
     * suite -> Suite name
     * PromiseImpl -> Promise implementation
     */
    function createTests(suite, PromiseImpl) {

      describe(suite, function() {

        /* ==================================================================== */
        /* BASICS                                                               */
        /* ==================================================================== */

        it("should exist", function() {
          expect(PromiseImpl).to.exist;
          expect(PromiseImpl).to.be.a('function');
        });

        it("should construct a then-able", function() {
          var p = new PromiseImpl(function() {});
          expect(p).to.exist;
          expect(p.then).to.be.a('function');
          expect(p.catch).to.be.a('function');
        });

        /* ==================================================================== */
        /* RESOLUTION                                                           */
        /* ==================================================================== */

        promises("should resolve 1", function() {

          var promise = new PromiseImpl(function(resolve, reject) {
            resolve("foo");
          });

          return promise.then(function(result) {
            expect(result).to.be.equal("foo");
          }).done();

        });

        /* ==================================================================== */

        promises("should resolve 2", function() {

          var promise = PromiseImpl.resolve("foo");

          return promise.then(function(result) {
            expect(result).to.be.equal('foo');
          }).done();

        });

        /* ==================================================================== */

        promises("should resolve a resolved promise", function() {

          var resolved = PromiseImpl.resolve("foo");
          var promise = PromiseImpl.resolve(resolved);

          return promise.then(function(result) {
            expect(result).to.be.equal('foo');
          }).done();


        });

        /* ==================================================================== */
        /* REJECTION                                                            */
        /* ==================================================================== */

        promises("should reject 1", function() {

          var promise = new PromiseImpl(function(resolve, reject) {
            reject("foo");
          });

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal("foo");
          }).done();

        });

        /* ==================================================================== */

        promises("should reject 2", function() {

          var promise = PromiseImpl.reject("foo");

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal("foo");
          }).done();

        });

        /* ==================================================================== */

        promises("should reject 3", function() {

          var promise = PromiseImpl.reject("foo");

          return promise.catch(function(result) {
            return "caught " + result;
          })

          .then(function(success) {
            expect(success).to.equal("caught foo");
          })

          .done();

        });

        /* ==================================================================== */

        promises("should reject a rejected promise", function() {

          var rejected = PromiseImpl.reject("foo");
          var promise = PromiseImpl.resolve(rejected);

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal("foo");
          }).done();

        });

        /* ==================================================================== */
        /* CHAINING TESTS                                                       */
        /* ==================================================================== */

        promises("should handle chaining on resolve", function() {

          var promise = new PromiseImpl(function(resolve, reject) {
            resolve("foo");
          }).then(function(result) {
            return result + "bar";
          });

          return promise.then(function(result) {
            expect(result).to.be.equal('foobar');
          }).done();

        });

        /* ==================================================================== */

        promises("should handle chaining on reject", function() {

          var promise = new PromiseImpl(function(resolve, reject) {
            reject("foo");
          }).then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            return result + "bar";
          });

          return promise.then(function(result) {
            expect(result).to.be.equal('foobar');
          }).done();

        });

        /* ==================================================================== */

        promises("should handle exceptions chaining on resolve", function() {

          var promise = new PromiseImpl(function(resolve, reject) {
            resolve("foo");
          }).then(function(result) {
            throw "success=" + result;
          });

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal("success=foo");
          }).done();

        });

        /* ==================================================================== */

        promises("should handle exceptions chaining on reject", function() {

          var promise = new PromiseImpl(function(resolve, reject) {
            reject("foo");
          }).then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            throw "failure=" + result;
          });

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal("failure=foo");
          }).done();

        });

        /* ==================================================================== */

        promises("should handle deep exceptions", function() {

          var first = new PromiseImpl(function(resolve, reject) {
            setTimeout(function() {
              resolve("foo");
            }, 20);
          });

          var promise1 = first.then(function(result) {
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
        /* OTHER TESTS                                                          */
        /* ==================================================================== */

        promises("should resolve all promises with undefined results", function() {
          var p1 = new PromiseImpl(function (resolve, reject) { resolve("defined") });
          var p2 = new PromiseImpl(function (resolve, reject) { resolve() });

          return PromiseImpl.all([p1, p2]).then(function(success) {
            expect(success).to.be.instanceof(Array);
            expect(success.length).to.equal(2);
            expect(success[0]).to.equal("defined");
            expect(success[1]).to.equal(undefined);
          }).done()

        });

        promises("should not throw exceptions", function() {

          var promise = new PromiseImpl(function(resolve, reject) {
            throw "foo";
          })

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal("foo");
          }).done();

        });

        promises("should resolve an empty array of promises", function() {
          var promise = PromiseImpl.all([]);

          return promise.then(function(result) {
            expect(result).to.be.eql([]);
          }).done();

        });

        promises("should combine multiple resolved promises", function() {
          var promise = PromiseImpl.all(["foo", PromiseImpl.resolve("bar"), PromiseImpl.resolve("baz")]);

          return promise.then(function(result) {
            expect(result).to.be.eql(['foo', 'bar', 'baz']);
          }).done();

        });

        promises("should combine multiple rejected promises", function() {
          var promise = PromiseImpl.all(["foo", PromiseImpl.resolve("bar"), PromiseImpl.reject("baz")]);

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal('baz');
          }).done();

        });

        promises("should fail when all is called with undefined", function() {

          return PromiseImpl.all().then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.instanceof(TypeError);
          }).done();

        });

        promises("should fail when all is called with something other than an array", function() {
          var promise = PromiseImpl.all("hello");

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.instanceof(TypeError);
          }).done();

        });

        promises("should race multiple promises with a winning resolution", function() {

          var resolvedPromiseImpl = new PromiseImpl(function(resolve, reject) {
            setTimeout(function() {
              resolve("foo");
            }, 20);
          });

          var rejectedPromiseImpl = new PromiseImpl(function(resolve, reject) {
            setTimeout(function() {
              reject("bar");
            }, 200);
          });

          var promise = PromiseImpl.race([resolvedPromiseImpl, rejectedPromiseImpl])

          return promise.then(function(result) {
            expect(result).to.be.equal('foo');
          }).done();

        });

        promises("should race multiple promises with a winning rejection", function() {

          var resolvedPromiseImpl = new PromiseImpl(function(resolve, reject) {
            setTimeout(function() {
              resolve("foo");
            }, 200);
          });

          var rejectedPromiseImpl = new PromiseImpl(function(resolve, reject) {
            setTimeout(function() {
              reject("bar");
            }, 20);
          });

          var promise = PromiseImpl.race([resolvedPromiseImpl, rejectedPromiseImpl])

          return promise.then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.equal('bar');
          }).done();

        });

        promises("should not race an undefined array", function() {

          return PromiseImpl.race().then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.instanceof(TypeError);
          }).done();

        });

        promises("should not race an something other than array", function() {

          return PromiseImpl.race('foo').then(function(result) {
            throw (result || new Error("Failed"));
          }, function(result) {
            expect(result).to.be.instanceof(TypeError);
          }).done();

        });

        it("should not resolve an empty array of promises", function(done) {

          /* Race the empty array */
          PromiseImpl.race([]).then(function(success) {
            done(success || new Error("Failed resolve"));
          }, function(failure) {
            done(failure || new Error("Failed reject"));
          });

          global.setTimeout(done, 50);

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
