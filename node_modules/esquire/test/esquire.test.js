'use strict';

(function (global) {
  describe("Esquire inject", function() {

    /* Tests under node/phantom/m$ie */
    var Promise = Esquire.$$Promise; // global.Promise || Esquire.$$Promise;

    /* ======================================================================== */

    describe("basics", function() {

      it('should exist', function() {
        expect(Esquire).to.be.a('function');
      });

      it('should have static members', function() {
        expect(Esquire.define).to.be.a('function');
        expect(Esquire.modules).to.exist;
      });

      it('should have instance members', function() {
        var e = new Esquire();
        expect(e.require).to.be.a('function');
        expect(e.inject).to.be.a('function');
      });

    });

    /* ======================================================================== */

    describe("normal injection", function() {

      promises('should execute without injection', function(done) {

        var a;

        return new Esquire().inject(function() {
          a = "executed";
          return "returned";
        })

        .then(function(b) {
          expect(a).to.be.equal('executed');
          expect(b).to.be.equal('returned');
        })

        .done();

      });

      /* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - */

      promises('should inject a single module', function() {

        var a;
        return new Esquire().inject(["module-a"], function(injected) {
          a = injected;
          return "returned";
        })

        .then(function(b) {
          expect(a).to.be.equal('valueForModuleA');
          expect(b).to.be.equal('returned');
        })

        .done();

      });

      promises('should inject a single module twice', function() {

        var a1;
        var a2;
        return new Esquire().inject(["module-a", "module-a"], function(injected1, injected2) {
          a1 = injected1;
          a2 = injected2;
          return 'returned';
        })

        .then(function(b) {
          expect(a1).to.be.equal('valueForModuleA');
          expect(a2).to.be.equal('valueForModuleA');
          expect(b).to.be.equal('returned');
        })

        .done();

      });

      promises('should inject two modules', function() {

        var a;
        var b;
        return new Esquire().inject(["module-a", "module-b"], function(injected1, injected2) {
          a = injected1;
          b = injected2;
          return 'returned';
        })

        .then(function(c) {
          expect(a).to.be.equal('valueForModuleA');
          expect(b).to.be.match(/^valueForModuleB => /);
          expect(c).to.be.equal('returned');
        })

        .done();

      });

      promises('should inject with arguments', function() {

        var a;
        var b;
        return new Esquire().inject("module-a", "module-b", function(injected1, injected2) {
          a = injected1;
          b = injected2;
          return 'returned';
        })

        .then(function(c) {
          expect(a).to.be.equal('valueForModuleA');
          expect(b).to.be.match(/^valueForModuleB => /);
          expect(c).to.be.equal('returned');
        })

        .done();

      })

      promises('should inject with AngularJS array', function() {

        var a;
        var b;
        return new Esquire().inject(["module-a", "module-b", function(injected1, injected2) {
          a = injected1;
          b = injected2;
          return 'returned';
        }])

        .then(function(c) {
          expect(a).to.be.equal('valueForModuleA');
          expect(b).to.be.match(/^valueForModuleB => /);
          expect(c).to.be.equal('returned');
        })

        .done();

      })

      /* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - */

      promises('should require a single module', function() {

        return new Esquire().require("module-a")
        .then(function(a) {
          expect(a).to.be.equal('valueForModuleA');
        })
        .done();

      });

      promises('should require a single module twice (arguments)', function() {

        return new Esquire().require("module-a", "module-a")
        .then(function(a) {
          expect(a).to.be.an.instanceof(Array);
          expect(a[0]).to.be.equal('valueForModuleA');
          expect(a[1]).to.be.equal('valueForModuleA');
        })
        .done();

      });

      promises('should require a single module twice (array)', function() {

        return new Esquire().require(["module-a", "module-a"])
        .then(function(a) {
          expect(a).to.be.an.instanceof(Array);
          expect(a[0]).to.be.equal('valueForModuleA');
          expect(a[1]).to.be.equal('valueForModuleA');
        })
        .done();

      });

      promises('should require two modules (arguments)', function() {

        return new Esquire().require("module-a", "module-b")
        .then(function(a) {
          expect(a[0]).to.be.equal('valueForModuleA');
          expect(a[1]).to.be.match(/^valueForModuleB => /);
        })
        .done();

      });

      promises('should require two modules (array)', function() {

        return new Esquire().require(["module-a", "module-b"])
        .then(function(a) {
          expect(a[0]).to.be.equal('valueForModuleA');
          expect(a[1]).to.be.match(/^valueForModuleB => /);
        })
        .done();

      });

      promises('should eventually inject a module returning a promise', function() {

        return new Esquire().require("module-g")
        .then(function(success) {
          expect(success).to.equal("value-g");
        })
        .done();

      });

      /* ==================================================================== */

      promises('should fail on construction error', function() {

        return new Esquire().require("module-e")
        .then(function(success) {
          throw new Error("Should not succeed")
        }, function(error) {
          expect(error).to.be.instanceof(Error);
          expect(error.message).to.be.equal("Esquire: Injection failed\n- Cause: Error instantiating 'module-e' module\n- Cause: This module always fails");
          expect(error.originalCause).to.be.instanceof(Error);
          expect(error.originalCause.message).to.be.equal('This module always fails');
        })
        .done();

      });

      promises('should fail depending on failing module', function() {

        return new Esquire().require("module-f")
        .then(function(success) {
          throw new Error("Should not succeed")
        }, function(error) {
          expect(error).to.be.instanceof(Error);
          expect(error.message).to.be.equal("Esquire: Injection failed\n- Cause: Error instantiating 'module-f' module\n- Cause: Error instantiating 'module-e' module\n- Cause: This module always fails");
          expect(error.originalCause).to.be.instanceof(Error);
          expect(error.originalCause.message).to.be.equal('This module always fails');
        })
        .done();

      });

      promises('should not inject a module returning a rejected promise', function() {

        return new Esquire().require("module-h")
        .then(function(success) {
          throw new Error("Should not succeed")
        }, function(error) {
          expect(error).to.be.instanceof(Error);
          expect(error.message).to.be.equal("Esquire: Injection failed\n- Cause: Error instantiating 'module-h' module\n- Cause: value-h");
          expect(error.originalCause).to.be.instanceof(Error);
          expect(error.originalCause.message).to.be.equal('value-h');
        })
        .done();

      });

      promises('should time out waiting injection', function() {

        return new Esquire(100).require("module-i")
        .then(function(success) {
          throw new Error("Should not succeed");
        }, function(error) {
          expect(error).to.be.instanceof(Error);
          expect(error.message).to.be.equal("Esquire: Injection failed\n- Cause: Timeout waiting for module 'module-i'");
          expect(error.originalCause).to.be.instanceof(Error);
          expect(error.originalCause.message).to.be.equal("Timeout waiting for module 'module-i'");
        })
        .done();

      });

      /* ==================================================================== */

      promises('should expose a $global module', function() {

        return new Esquire().require("$global")
        .then(function(w) {
          expect(w).to.be.equal(global);
        })
        .done();

      });

      promises('should expose a $esquire module', function() {

        var e1 = new Esquire();
        return e1.require("$esquire")
        .then(function(e2) {
          expect(e1).to.be.equal(e2);
          expect(e1 === e2).to.be.true;
        })
        .done();

      });

    });

    /* ======================================================================== */

    describe("per-instance injection", function() {

      promises('should inject once per instance', function() {

        var b0 = new Esquire().require("module-b");
        var b1 = new Esquire().require("module-b");

        return Promise.all([b0, b1]).then(function(b) {
          expect(b[0]).to.match(/^valueForModuleB => /);
          expect(b[1]).to.match(/^valueForModuleB => /);
          expect(b[0]).not.to.equal(b[1]);
        })
        .done();

      });

      promises('should share injecteded modules per instance', function() {

        var e = new Esquire();
        var b0 = e.require("module-b");
        var b1 = e.require("module-b");

        return Promise.all([b0, b1]).then(function(b) {
          expect(b[0]).to.match(/^valueForModuleB => /);
          expect(b[1]).to.match(/^valueForModuleB => /);
          expect(b[0]).to.equal(b[1]);
        })
        .done();

      });

      promises('should share injecteded modules per instance on a single call', function() {

        return new Esquire().require("module-b", "module-b")
        .then(function(a) {
          expect(a[0]).to.match(/^valueForModuleB => /);
          expect(a[1]).to.match(/^valueForModuleB => /);
          expect(a[0]).to.equal(a[1]);
        })
        .done();

      });

      promises('should share the same $global instance', function() {

        var g0 = new Esquire().require("$global");
        var g1 = new Esquire().require("$global");

        return Promise.all([g0, g1]).then(function(g) {
          expect(g[0]).to.be.equal(global);
          expect(g[1]).to.be.equal(global);
          expect(g[0] === g[1]).to.be.true;
        })
        .done();

      });

      promises('should expose two separate $esquire instances', function() {

        var e0 = new Esquire();
        var e0p = e0.require("$esquire");

        var e1 = new Esquire();
        var e1p = e1.require("$esquire");

        return Promise.all([e0p, e1p]).then(function(e) {
          expect(e0).to.be.equal(e[0]);
          expect(e1).to.be.equal(e[1]);
          expect(e0 === e[0]).to.be.true;
          expect(e1 === e[1]).to.be.true;
          expect(e0).not.to.be.equal(e1);
        })
        .done();

      });


    });

    /* ======================================================================== */

    describe("dependencies injection", function() {

      promises('should inject a module with dependencies', function() {

        return new Esquire().require("module-c")
        .then(function(c) {
          expect(c['a']).to.equal('valueForModuleA');
          expect(c['b']).to.match(/^valueForModuleB => /);
        })
        .done();

      });

      promises('should share instances with module with dependencies', function() {

        var e = new Esquire();

        var a = e.require("module-a");
        var b = e.require("module-b");
        var c = e.require("module-c");

        return Promise.all([a, b, c])
        .then(function(x) {
          expect(x[2]['a']).to.equal('valueForModuleA');
          expect(x[2]['b']).to.match(/^valueForModuleB => /);
          expect(x[2]['a']).to.equal(x[0]);
          expect(x[2]['b']).to.equal(x[1]);
        })
        .done();

      });

      promises('should share instances with module with transitive dependencies', function() {

        var e = new Esquire();

        var a = e.require("module-a");
        var b = e.require("module-b");
        var c = e.require("module-c");
        var d = e.require("module-d");

        return Promise.all([a, b, c, d])
        .then(function(x) {
          expect(x[2]['a']).to.equal('valueForModuleA');
          expect(x[2]['b']).to.match(/^valueForModuleB => /);
          expect(x[2]['a']).to.equal(x[0]);
          expect(x[2]['b']).to.equal(x[1]);
          expect(x[3].transitive).to.equal(x[2]);
        })
        .done();

      });

    });

    /* ======================================================================== */

    describe("module definition", function() {

      function moduleName() {
        return "random_" + Math.floor(Math.random() * 999999999);
      }

      promises('should define with only name and function', function() {
        var name = moduleName();

        var module = Esquire.define(name, function() {
          expect(arguments.length).to.be.equal(0);
          return "module " + name;
        });

        return esquire(name, function(dependency) {
          expect(module).to.be.a('object');
          expect(module.name).to.be.equal(name);
          expect(module.dependencies).to.be.deep.equal([]);
          expect(module.constructor).to.be.a('function');

          return "return " + dependency;
        }).then(function(result) {
          expect(result).to.equal("return module " + name);
        })
        .done();

      });

      promises('should define with name, string dependency and function', function() {
        var name = moduleName();

        var module = Esquire.define(name, "module-a", function(a) {
          return "module " + name + ":" + a;
        });

        return esquire(name, function(dependency) {
          expect(module).to.be.a('object');
          expect(module.name).to.be.equal(name);
          expect(module.dependencies).to.be.deep.equal(['module-a']);
          expect(module.constructor).to.be.a('function');

          return "return " + dependency;
        }).then(function(result) {
          expect(result).to.equal("return module " + name + ":valueForModuleA");
        })
        .done();

      });

      promises('should define with name, dependencies array and function', function() {
        var name = moduleName();

        var module = Esquire.define(name, ["module-a", "module-b"], function(a, b) {
          return "module " + name + ":" + a + "/" + b;
        });

        return esquire(name, function(dependency) {
          expect(module).to.be.a('object');
          expect(module.name).to.be.equal(name);
          expect(module.dependencies).to.be.deep.equal(['module-a', 'module-b']);
          expect(module.constructor).to.be.a('function');

          return "return " + dependency;
        }).then(function(result) {
          expect(result).to.match(new RegExp('^return module ' + name + ':valueForModuleA/valueForModuleB => '));
        })
        .done();

      });

      promises('should define with AngularJS arguments', function() {
        var name = moduleName();

        var module = Esquire.define(name, ["module-a", "module-b", function(a, b) {
          return "module " + name + ":" + a + "/" + b;
        }]);

        return esquire(name, function(dependency) {
          expect(module).to.be.a('object');
          expect(module.name).to.be.equal(name);
          expect(module.dependencies).to.be.deep.equal(['module-a', 'module-b']);
          expect(module.constructor).to.be.a('function');

          return "return " + dependency;
        }).then(function(result) {
          expect(result).to.match(new RegExp('^return module ' + name + ':valueForModuleA/valueForModuleB => '));
        })
        .done();

      });

      /* -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - */

      promises('should define with an object and undefined dependencies', function() {
        var name = moduleName();

        var module = Esquire.define({
          name: name,
          constructor: function() {
            expect(arguments.length).to.be.equal(0);
            return "module " + name;
          }
        });

        return esquire(name, function(dependency) {
          expect(module).to.be.a('object');
          expect(module.name).to.be.equal(name);
          expect(module.dependencies).to.be.deep.equal([]);
          expect(module.constructor).to.be.a('function');

          return "return " + dependency;
        }).then(function(result) {
          expect(result).to.equal("return module " + name);
        })
        .done();

      });

      promises('should define with an object and empty dependencies', function() {
        var name = moduleName();

        var module = Esquire.define({
          name: name,
          dependencies: [],
          constructor: function() {
            expect(arguments.length).to.be.equal(0);
            return "module " + name;
          }
        });

        return esquire(name, function(dependency) {
          expect(module).to.be.a('object');
          expect(module.name).to.be.equal(name);
          expect(module.dependencies).to.be.deep.equal([]);
          expect(module.constructor).to.be.a('function');

          return "return " + dependency;
        }).then(function(result) {
          expect(result).to.equal("return module " + name);
        })
        .done();

      });

      promises('should define with an object and single string dependency', function() {
        var name = moduleName();

        var module = Esquire.define({
          name: name,
          dependencies: 'module-a',
          constructor: function(a) {
            expect(arguments.length).to.be.equal(1);
            return "module " + name + ":" + a;
          }
        });

        return esquire(name, function(dependency) {
          expect(module).to.be.a('object');
          expect(module.name).to.be.equal(name);
          expect(module.dependencies).to.be.deep.equal(['module-a']);
          expect(module.constructor).to.be.a('function');

          return "return " + dependency;
        }).then(function(result) {
          expect(result).to.equal("return module " + name + ":valueForModuleA");
        })
        .done();

      });

      promises('should define with an object and a dependencies array', function() {
        var name = moduleName();

        var module = Esquire.define({
          name: name,
          dependencies: ['module-a', 'module-b'],
          constructor: function(a, b) {
            expect(arguments.length).to.be.equal(2);
            return "module " + name + ":" + a + "/" + b;
          }
        });

        return esquire(name, function(dependency) {
          expect(module).to.be.a('object');
          expect(module.name).to.be.equal(name);
          expect(module.dependencies).to.be.deep.equal(['module-a', 'module-b']);
          expect(module.constructor).to.be.a('function');

          return "return " + dependency;
        }).then(function(result) {
          expect(result).to.match(new RegExp('^return module ' + name + ':valueForModuleA/valueForModuleB => '));
        })
        .done();

      });

    });

    /* ======================================================================== */

    describe("static module resolution methods", function() {

      it('should return a dictonary of modules', function() {
        var modules = Esquire.modules;
        expect(modules['circular-a'].name   ).to.equal('circular-a');
        expect(modules['circular-b'].name   ).to.equal('circular-b');
        expect(modules['circular-c'].name   ).to.equal('circular-c');
        expect(modules['circular-d'].name   ).to.equal('circular-d');
        expect(modules['circular-e'].name   ).to.equal('circular-e');
        expect(modules['circular-f'].name   ).to.equal('circular-f');
        expect(modules['circular-g'].name   ).to.equal('circular-g');
        expect(modules['circular-self'].name).to.equal('circular-self');
        expect(modules['module-a'].name     ).to.equal('module-a');
        expect(modules['module-b'].name     ).to.equal('module-b');
      });

      it('should return the same module', function() {
        var modules = Esquire.modules;
        expect(modules['circular-a']   ).to.equal(Esquire.modules['circular-a']);
        expect(modules['circular-b']   ).to.equal(Esquire.modules['circular-b']);
        expect(modules['circular-c']   ).to.equal(Esquire.modules['circular-c']);
        expect(modules['circular-d']   ).to.equal(Esquire.modules['circular-d']);
        expect(modules['circular-e']   ).to.equal(Esquire.modules['circular-e']);
        expect(modules['circular-f']   ).to.equal(Esquire.modules['circular-f']);
        expect(modules['circular-g']   ).to.equal(Esquire.modules['circular-g']);
        expect(modules['circular-self']).to.equal(Esquire.modules['circular-self']);
        expect(modules['module-a']     ).to.equal(Esquire.modules['module-a']);
        expect(modules['module-b']     ).to.equal(Esquire.modules['module-b']);
      });

      promises('should resolve empty dependencies', function() {
        return Esquire.resolve('module-a')
          .then(function(dependencies) {
            expect(dependencies).to.be.an('object');
            expect(Object.keys(dependencies).length).to.be.equal(0);
          }).done();
      });

      promises('should resolve valid dependencies', function() {
        return Esquire.resolve('module-c')
          .then(function(dependencies) {
            expect(dependencies).to.be.an('object');
            expect(Object.keys(dependencies).length).to.be.equal(2);
            expect(dependencies['module-a']).to.equal(Esquire.modules['module-a']);
            expect(dependencies['module-b']).to.equal(Esquire.modules['module-b']);
          }).done();
      });

      promises('should resolve direct dependencies', function() {
        return Esquire.resolve('module-d')
          .then(function(dependencies) {
            expect(dependencies).to.be.an('object');
            expect(Object.keys(dependencies).length).to.be.equal(1);
            expect(dependencies['module-c']).to.equal(Esquire.modules['module-c']);
          }).done();
      });

      promises('should resolve direct dependencies including self', function() {
        return Esquire.resolve('module-d', false, true)
          .then(function(dependencies) {
            expect(dependencies).to.be.an('object');
            expect(Object.keys(dependencies).length).to.be.equal(2);
            expect(dependencies['module-c']).to.equal(Esquire.modules['module-c']);
            expect(dependencies['module-d']).to.equal(Esquire.modules['module-d']);
          }).done();
      });

      promises('should resolve transitive dependencies', function() {
        return Esquire.resolve('module-d', true)
          .then(function(dependencies) {
            expect(dependencies).to.be.an('object');
            expect(Object.keys(dependencies).length).to.be.equal(3);
            expect(dependencies['module-a']).to.equal(Esquire.modules['module-a']);
            expect(dependencies['module-b']).to.equal(Esquire.modules['module-b']);
            expect(dependencies['module-c']).to.equal(Esquire.modules['module-c']);
          }).done();
      });

      promises('should resolve transitive dependencies including self', function() {
        return Esquire.resolve('module-d', true, true)
          .then(function(dependencies) {
            expect(dependencies).to.be.an('object');
            expect(Object.keys(dependencies).length).to.be.equal(4);
            expect(dependencies['module-a']).to.equal(Esquire.modules['module-a']);
            expect(dependencies['module-b']).to.equal(Esquire.modules['module-b']);
            expect(dependencies['module-c']).to.equal(Esquire.modules['module-c']);
            expect(dependencies['module-d']).to.equal(Esquire.modules['module-d']);
          }).done();
      });

      promises('should resolve transitive deferred dependencies', function() {

        var start = "test/deferred-" + (Math.floor(Math.random() * 1000000));
        var name1 = "test/deferred-" + (Math.floor(Math.random() * 1000000));
        var name2 = "test/deferred-" + (Math.floor(Math.random() * 1000000));
        var name3 = "test/deferred-" + (Math.floor(Math.random() * 1000000));

        Esquire.define(start, [name1], function() {});
        setTimeout(function() { Esquire.define(name1, [name2], function() {}) }, 20);
        setTimeout(function() { Esquire.define(name2, [name3], function() {}) }, 40);
        setTimeout(function() { Esquire.define(name3, ["module-d"], function() {}) }, 60);

        return Esquire.resolve(start, true)
          .then(function(dependencies) {

            expect(dependencies).to.be.an('object');
            expect(Object.keys(dependencies).length).to.be.equal(7);

            // check on module NAMES, not instances returned by Esquire.define()
            // because we might potentially unlock all our chains (and have this
            // call resolved) before the actual "Esquire.define" method returns.
            expect(dependencies[name1].name).to.equal(name1);
            expect(dependencies[name2].name).to.equal(name2);
            expect(dependencies[name3].name).to.equal(name3);

            // those ones on the other hand were not deferred, safe to check...
            expect(dependencies['module-a']).to.equal(Esquire.modules['module-a']);
            expect(dependencies['module-b']).to.equal(Esquire.modules['module-b']);
            expect(dependencies['module-c']).to.equal(Esquire.modules['module-c']);
            expect(dependencies['module-d']).to.equal(Esquire.modules['module-d']);
          }).done();
      });


      promises('should resolve circular dependencies', function() {
        return Esquire.resolve('circular-a', true)
          .then(function(dependencies) {
            expect(dependencies).to.be.an('object');
            expect(Object.keys(dependencies).length).to.be.equal(7);
            expect(dependencies['circular-a']).to.equal(Esquire.modules['circular-a']);
            expect(dependencies['circular-b']).to.equal(Esquire.modules['circular-b']);
            expect(dependencies['circular-c']).to.equal(Esquire.modules['circular-c']);
            expect(dependencies['circular-d']).to.equal(Esquire.modules['circular-d']);
            expect(dependencies['circular-e']).to.equal(Esquire.modules['circular-e']);
            expect(dependencies['circular-f']).to.equal(Esquire.modules['circular-f']);
            expect(dependencies['circular-g']).to.equal(Esquire.modules['circular-g']);
          }).done();
      });

      promises('should resolve circular dependencies to self', function() {
        return Esquire.resolve('circular-self', true)
          .then(function(dependencies) {
            expect(dependencies).to.be.an('object');
            expect(Object.keys(dependencies).length).to.be.equal(1);
            expect(dependencies['circular-self']).to.equal(Esquire.modules['circular-self']);
          }).done();
      });

    });

    /* ======================================================================== */

    describe('deferred definition', function() {

      promises('should wait until modules are defined and resolve', function() {
        var name = "test/deferred-" + (Math.floor(Math.random() * 1000000));
        setTimeout(function() {
          Esquire.define(name, [], function() { return "value for " + name });
        }, 50);

        return new Esquire(100).inject(name, function(value) {
          expect(value).to.be.equal("value for " + name);
        }).done();
      });

      promises('should wait until modules are defined and reject', function() {

        var name = "test/deferred-" + (Math.floor(Math.random() * 1000000));

        setTimeout(function() {
          Esquire.define(name, [], function() { throw new Error("Error " + name) });
        }, 50);

        var invoked = false;

        return new Esquire(100).inject(name, function(value) {
          invoked = true;
        }).then(function(success) {
          throw new Error("Should not succeed")
        }, function (failure) {
          expect(failure).to.be.instanceof(Error);
          expect(failure.originalCause).to.be.instanceof(Error);
          expect(failure.originalCause.message).to.equal("Error " + name);
          expect(invoked).to.be.false;
        }).done()

      });

    });

    /* ======================================================================== */

    describe("failures", function() {

      promises('should fail injecting an unknown module', function() {

        var timeout = Esquire.timeout;
        Esquire.timeout = 100;

        var invoked = false;

        return new Esquire().inject(["not-known"], function() {
          invoked = true;
        }).then(function(success) {
          Esquire.timeout = timeout;
          throw new Error("Should not succeed")
        }, function (failure) {
          Esquire.timeout = timeout;
          expect(failure).to.be.instanceof(Error);
          expect(failure.message).to.match(/module 'not-known' not found/i);
          expect(invoked).to.be.false;
        }).done();

      });

      promises('should fail requiring an unknown module', function() {

        return new Esquire().require("not-known")
        .then(function(success) {
          throw new Error("Should not succeed")
        }, function (failure) {
          expect(failure).to.be.instanceof(Error);
          expect(failure.message).to.match(/module 'not-known' not found/i);
        }).done();

      });

      promises('should fail on circular dependencies', function() {

        var name = "testCircular-" + Math.floor(Math.random() * 1000000);
        Esquire.define(name, "circular-a", function() {
          throw new Error("NEVER");
        });

        return new Esquire().require(name)
        .then(function(success) {
          throw new Error("Should not succeed")
        }, function (failure) {
          expect(failure).to.be.instanceof(Error);
          expect(failure.message).to.match(/^Esquire: Injection failed/);
          expect(failure.originalCause).to.be.instanceof(Error);
          expect(failure.originalCause.message).to.equal("Esquire: Detected circular dependency in circular-a -> circular-b -> circular-c -> circular-d -> circular-e -> circular-f -> circular-g -> circular-a");
        }).done();

      });

      promises('should fail on self dependencies', function() {

        var name = "testCircular-" + Math.floor(Math.random() * 1000000);
        Esquire.define(name, "circular-self", function() {
          throw new Error("NEVER");
        });

        return new Esquire().require(name)
        .then(function(success) {
          throw new Error("Should not succeed")
        }, function (failure) {
          expect(failure).to.be.instanceof(Error);
          expect(failure.message).to.match(/^Esquire: Injection failed/);
          expect(failure.originalCause).to.be.instanceof(Error);
          expect(failure.originalCause.message).to.equal("Esquire: Detected circular dependency in circular-self -> circular-self");
        }).done();

      });

    });

  });

})((function() {
  try {
    return window;
  } catch (e) {
    return global;
  }
})());
