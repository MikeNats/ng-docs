'use strict';

/** @typedef {module:$deferred.Deferred} Deferred */
/** @typedef {module:$promise.Promise} Promise */

(function EsquireScript(global) {

  /* We might need a working console */
  if (!global.console)       global.console = {};
  if (!global.console.error) global.console.error = function(){};
  if (!global.console.warn)  global.console.warn  = function(){};
  if (!global.console.log)   global.console.log   = function(){};
  if (!global.console.info)  global.console.info  = function(){};
  if (!global.console.debug) global.console.debug = function(){};

  /* We definitely need an Array.isArray() method */
  if (! global.Array.isArray) {
    global.Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }

  /* Promise implementation */
  var Promise = global.Promise || PromiseImpl;

  /*==========================================================================*
   | *======================================================================* |
   | | DEFERRED IMPLEMENTATION                                              | |
   | *======================================================================* |
   *==========================================================================*/

  /* Internal "Deferring" class, we'll expose "Deferred" below */
  function Deferring(onSuccess, onFailure) {

    /* Statuses: 0 -> pending, -1 -> rejected, 1 -> resolved */
    var status = 0;
    var result = null;
    var chain = [];

    /* Notification of chained defers */
    var notify = function(chain) {
      var method = status > 0 ? "resolve" :
                   status < 0 ? "reject" :
                   null;
      if (method) for (var i in chain) {
        chain[i][method](result);
      }
    }

    var deferred = this;
    Object.defineProperties(this, {
      /**
       * Resolve this instance's derived {@link Deferred#promise promise} with
       * the specified _success_ value.
       *
       * @param {(*|Promise)} success - If the value is a _then-able_ (i.e. has a
       *                                `then(...)` method) this instance's
       *                                derived {@link Deferred#promise promise}
       *                                will **follow** that _then-able_, adopting
       *                                its eventual state.
       * @function module:$deferred.Deferred#resolve
       */
      "resolve": { enumerable: true, configurable: false, value: function(success) {
        if (success && (typeof(success.then) === 'function')) {

          /* If we were given a "then-able" just call ourselves back */
          success.then(function(success) {
            deferred.resolve(success);
          }, function(failure) {
            deferred.reject(failure);
          });

        } else {

          /* We were given a success, resolve immediately */
          if (status == 0) {
            result = success;
            status = 1;
            if (onSuccess) try {
              result = onSuccess(result);
            } catch (error) {
              result = error;
              status = -1;
            }
            notify(chain);
          }
        }
      }},

      /**
       * Rejects this instance's derived {@link Deferred#promise promise} with
       * the specified _failure_ reason.
       *
       * @param {*} failure - The reason for rejection.
       * @function module:$deferred.Deferred#reject
       */
      "reject": { enumerable: true, configurable: false, value: function(failure) {
        if (status == 0) {
          result = failure;
          status = -1;
          if (onFailure) try {
            result = onFailure(result);
            status = 1;
          } catch (error) {
            result = error;
          }
          notify(chain);
        }
      }},

      /**
       * The derived {@link Promise} associated with this {@link Deferred} instance.
       *
       * @member {Promise} module:$deferred.Deferred#promise
       */
      "promise": { enumerable: true, configurable: false, value:
        Object.defineProperties(Object.create(PromiseImpl.prototype), {
          "then":  { enumerable: true, configurable: false, value: function(onSuccess, onFailure) {
            var chained = new Deferring(onSuccess, onFailure);
            if (status == 0) {
              chain.push(chained);
            } else {
              notify([chained]);
            }
            return chained.promise;
          }}
        })
      }
    });
  };

  /* Prototype, constructor and name */
  Deferring.prototype = Object.create(Object.prototype);
  Deferring.prototype.constructor = Deferring;
  Deferring.prototype.name = 'Deferring';

  /**
   * Create a new {@link Deferred} instance.
   *
   * @param {number} [timeout] The (optional) timeout after which this
   *                           {@link Deferred} will be automatically rejected.
   *                           This must be a number greater or equal to zero.
   * @param {*} [rejection] The reason with which this {@link Deferred} will be
   *                        automatically rejected after the `timeout`. If this
   *                        parameter is a `string` then it will be used to
   *                        construct an {@link Error} using the string as its
   *                        message. If the parameter is `null` or `undefined`
   *                        a generic {@link Error} will be used.
   * @class module:$deferred.Deferred
   * @example -
   * Esquire.define("myModule", ['$deferred'], function(Deferred) {
   *   var deferred = new Deferred();
   *   // ....
   *   return deferred.promise;
   * });
   */
  function Deferred(timeout, rejection) {

    /* Proper construction */
    if (!(this instanceof Deferred)) return new Deferred(timeout, rejection);

    if (timeout === undefined) {
      Deferring.call(this);

    } else if ((typeof(timeout) === 'number') && (timeout >= 0)) {
      if (rejection == null) rejection = new Error("Timeout waiting for resolution/rejection");
      else if (typeof(rejection) === 'string') rejection = new Error(rejection);

      var deferred = this;
      var timeoutId = global.setTimeout(function() {
        deferred.reject(rejection);
      }, timeout);

      Deferring.call(this, function(success) {
        global.clearTimeout(timeoutId);
        return success;
      }, function(failure) {
        global.clearTimeout(timeoutId);
        throw failure;
      });

    } else {
      throw new TypeError("Deferred constructor must be called with a non-negative number")
    }
  }

  /* Prototype, constructor and name */
  Deferred.prototype = Object.create(Deferring.prototype);
  Deferred.prototype.constructor = Deferred;
  Deferred.prototype.name = 'Deferred';




  /*==========================================================================*
   | *======================================================================* |
   | | PROMISE IMPLEMENTATION                                               | |
   | *======================================================================* |
   *==========================================================================*/

  /**
   * Create a new {@link Promise} instance.
   *
   * @class module:$promise.Promise
   * @classdesc The {@link Promise} class provides a minimal implementation of JavaScript
   *            [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)s
   * @param {function} executor - A function object with two arguments
   *        (`resolve` and `reject`). The first argument fulfills the promise,
   *        the second argument rejects it. We can call these functions, once
   *        our operation is completed, with the appropriate values for
   *        _fulfillment_ or _rejection_.
   * @example -
   * Esquire.define("myModule", ['$promise'], function(Promise) {
   *   return new Promise(function(resolve, reject) {
   *     // ... resolve or reject this promise...
   *    });
   * });
   */
  function PromiseImpl(executor) {

    /* Proper construction */
    if (!(this instanceof PromiseImpl)) return new PromiseImpl(executor);

    /* Sanity checks */
    if (!(typeof(executor) == 'function')) {
      throw new TypeError("Executor is not a function");
    }

    /* Internal deferred */
    var deferred = new Deferred();

    Object.defineProperties(this, {

      /**
       * Appends fulfillment and rejection handlers to this {@link Promise}, and
       * returns a **new** promise resolving to the return value of the called
       * handler.
       *
       * @param {function} [onSuccess] - The handler to call when this
       *        {@link Promise} has been successfully resolved.
       * @param {function} [onFailure] - The handler to call when this
       *        {@link Promise} has been rejected.
       * @returns {Promise} A new {@link Promise} resolving to the return value
       *          of the called handler
       * @function module:$promise.Promise#then
       */
      'then': { enumerable: true, configurable: false, value: function() {
        return deferred.promise.then.apply(deferred.promise, arguments);
      }}
    });

    /* Execute our promise */
    try {
      executor(deferred.resolve, deferred.reject);
    } catch (error) {
      deferred.reject(error);
    }
  };

  /* Prototype, constructor and name */
  PromiseImpl.prototype = Object.create(Object.prototype);
  PromiseImpl.prototype.constructor = PromiseImpl;
  PromiseImpl.prototype.name = 'Promise';

  /**
   * Appends a rejection handler to this {@link Promise}, and returns a
   * **new** promise resolving to the return value of the called handler.
   *
   * This is equivalent to calling `then(null, onFailure)`.
   *
   * @param {function} [onFailure] - The handler to call when this
   *        {@link Promise} has been rejected.
   * @returns {Promise} A new {@link Promise} resolving to the return value
   *          of the called handler
   * @function module:$promise.Promise#catch
   */
  PromiseImpl.prototype.catch = function(callback) {
    return this.then(null, callback);
  };


  /* ======================================================================== */
  /* Promise static methods                                                   */
  /* ======================================================================== */

  /**
   * Returns a {@link Promise} that resolves when all of the values or
   * _then-able_ in the _iterable_ argument have resolved.
   *
   * If any of the promises in the _iterable_ is resolved with a rejection,
   * the returned {@link Promise} will be rejected with the same rejection
   * value.
   *
   * @param {iterable} iterable - A collection of values or _then-able_s.
   * @returns {Promise} A {@link Promise}.
   * @function module:$promise.Promise.all
   */
  Object.defineProperty(PromiseImpl, "all", {
    enumerable: true,
    configurable: false,
    value: function(iterable) {

      /* Check our arguments */
      if (! Array.isArray(iterable)) {
        return PromiseImpl.reject(new TypeError("Invalid argument"));
      }

      /* If we have no promises, just resolve */
      var deferred = new Deferred();
      if (iterable.length == 0) {
        deferred.resolve([]);
        return deferred.promise;
      }

      /* A deferred, list of results, and pending count */
      var results = new Array(iterable.length);
      var pending = iterable.length;

      /* Instruct all our promises */
      for (var i = 0; i < iterable.length; i++) {
        (function(i) {
          var current = iterable[i];
          if (current && (typeof(current.then) === 'function')) {
            current.then(function(success) {
              /* On success, remember result */
              results[i] = success;
              /* If no more, resolve the deferred */
              if ((-- pending) == 0) {
                deferred.resolve(results);
              }
            }, function(failure) {
              /* Reject immediately */
              deferred.reject(failure);
            });
          } else {
            results[i] = current;
            /* If no more, resolve the deferred */
            if ((-- pending) == 0) {
              deferred.resolve(results);
            }
          }
        })(i);
      }

      /* Return the deferred's promise */
      return deferred.promise;
    }
  });

  /**
   * Returns a {@link Promise} that resolves or rejects as soon as one of of
   * the values or _then-able_ in the specified _iterable_ resolves or rejects,
   * with the value or reason from that promise.
   *
   * @param {iterable} iterable - Foo.
   * @returns {Promise} A {@link Promise}.
   * @function module:$promise.Promise.race
   */
  Object.defineProperty(PromiseImpl, "race", {
    enumerable: true,
    configurable: false,
    value: function(iterable) {

      /* Check our arguments */
      if (! Array.isArray(iterable)) {
        return PromiseImpl.reject(new TypeError("Invalid argument"));
      }

      /* Use a deferred to race promises */
      var deferred = new Deferred();
      for (var i in iterable) {
        var current = iterable[i];
        if (current && (typeof(current.then) === 'function')) {
          current.then(function(success) {
            deferred.resolve(success);
          }, function(failure) {
            deferred.reject(failure);
          });
        } else {
          deferred.resolve(current);
        }
      }

      /* Return the deferred's promise */
      return deferred.promise;
    }
  });

  /**
   * Returns a {@link Promise} object that is resolved with the given value.
   *
   * If the value is a _then-able_ (i.e. has a `then(...)` method), the
   * returned promise will **follow** that _then-able_, adopting its eventual
   * state; otherwise the returned promise will be fulfilled.
   *
   * @param {(*|Promise)} success - The resolution result or _then-able_ to follow.
   * @returns {Promise} A resolved {@link Promise}.
   * @function module:$promise.Promise.resolve
   */
  Object.defineProperty(PromiseImpl, "resolve", {
    enumerable: true,
    configurable: false,
    value: function(success) {
      var deferred = new Deferred();
      if (success && typeof(success.then) === 'function') {
        success.then(function(success) {
          deferred.resolve(success)
        }, function(failure) {
          deferred.reject(failure);
        });
      } else {
        deferred.resolve(success);
      }
      return deferred.promise;
    }
  });

  /**
   * Returns a {@link Promise} object that is rejected with the given reason.
   *
   * @param {*} failure - The rejection reason.
   * @returns {Promise} A rejected {@link Promise}.
   * @function module:$promise.Promise.reject
   */
  Object.defineProperty(PromiseImpl, "reject", {
    enumerable: true,
    configurable: false,
    value: function(failure) {
      var deferred = new Deferred();
      deferred.reject(failure);
      return deferred.promise;
    }
  });




  /*==========================================================================*
   | *======================================================================* |
   | | ESQUIRE ERRORS IMPLEMENTATION                                        | |
   | *======================================================================* |
   *==========================================================================*/

   /* Generic Error */
  function EsquireError(message, dependencyStack) {
    message = "Esquire: " + (message || "Unknown error");
    var dependencies = "";
    if (dependencyStack && (dependencyStack.length)) {
      for (var i = 0; i < dependencyStack.length; i ++) {
        if (dependencyStack[i]) {
          dependencies += " -> " + dependencyStack[i];
        }
      }
    }
    if (dependencies) message += " resolving" + dependencies;

    Error.call(this, message);
    this.message = message;
    var stack = this.stack || new Error().stack;
    if (stack) {
      stack = stack.replace(new RegExp("^(Error|" + this.name + ")\n"), "");
      this.stack = this.name + ": " + this.message + "\n" + stack;
    }
  }

   /* When modules are not found */
  function NoModuleError(name) {
    EsquireError.call(this, "Module '" + name + "' not found");
  };

   /* When circular dependencies are detected */
  function InjectionError(name, cause) {
    var message = name ? "Error instantiating '" + name + "' module" : "Injection failed";
    this.$$message = message;
    if (cause) {
      this.originalCause = cause.originalCause || cause;
      this.cause = cause;
    }
    for (var error = cause; error != null; error = error.cause) {
      message += "\n- Cause: " + (error.$$message || error.message || "[no message]");
    }
    EsquireError.call(this, message);
  };

   /* When circular dependencies are detected */
  function CircularDependencyError(dependencies) {
    var message = "Detected circular dependency in ";
    for (var i in dependencies) message += dependencies[i] + " -> ";
    message += dependencies[0];
    this.$$message = message;
    EsquireError.call(this, message);
  };

  EsquireError.prototype = Object.create(Error.prototype);
  EsquireError.prototype.constructor = EsquireError;
  EsquireError.prototype.name = 'EsquireError';

  NoModuleError.prototype = Object.create(EsquireError.prototype);
  NoModuleError.prototype.constructor = NoModuleError;
  NoModuleError.prototype.name = 'NoModuleError';

  InjectionError.prototype = Object.create(EsquireError.prototype);
  InjectionError.prototype.constructor = InjectionError;
  InjectionError.prototype.name = 'InjectionError';

  CircularDependencyError.prototype = Object.create(EsquireError.prototype);
  CircularDependencyError.prototype.constructor = CircularDependencyError;
  CircularDependencyError.prototype.name = 'CircularDependencyError';




  /*==========================================================================*
   | *======================================================================* |
   | | ESQUIRE MODULE CLASSES                                               | |
   | *======================================================================* |
   *==========================================================================*/

  /**
   * @class Module
   * @classdesc The definition of an {@link Esquire} module
   * @protected
   */
  function Module(name, dependencies, constructor, dynamic) {

    /* Normalize names to "$global/..." */
    name = globalName(name);
    for (var i in dependencies) {
      dependencies[i] =  globalName(dependencies[i]);
    }

    /**
     * The name of this {@link Module}
     * @member {string} Module#name
     * @readonly
     */
    Object.defineProperty(this, 'name', { enumerable: true, configurable: false, value: name });

    /**
     * The name of all dependencies required by this {@link Module} (in order).
     * @member {string[]} Module#dependencies
     * @readonly
     */
    Object.defineProperty(this, 'dependencies', { enumerable: true, configurable: false, value: dependencies });

    /**
     * The constructor function creating instances of this {@link Module}.
     * @member {function} Module#constructor
     * @readonly
     */
    Object.defineProperty(this, 'constructor', { enumerable: true, configurable: false, value: constructor });

    /* Hidden $$script for injection and $$dynamic flag */
    Object.defineProperty(this, "$$dynamic", { enumerable: false, configurable: false, value: dynamic || false });
    Object.defineProperty(this, '$$script',  { enumerable: false, configurable: false, get: function() {
      return 'Esquire.define(' + JSON.stringify(this.name)
                         + ',' + JSON.stringify(this.dependencies)
                         + ',' + constructor.toString() + ');'
    }});

    /* Freeze ourselves */
    Object.freeze(this);

  }


  /* ======================================================================== */
  /* Modules that are part of "$global/..."                                   */
  /* ======================================================================== */

  function GlobalModule(name) {
    Module.call(this, name, ['$global'], function($global) {

      /* Find a property with a prefix */
      function prefix(property, scope, onlyPrefixed) {

        /* Check non prefixes property if we have to */
        if ((! onlyPrefixed) && (property in scope)) return scope[property];

        /* Check the various prefixed properties, if we have one */
        var prefixes = ["Ms", "ms", "Moz", "moz", "WebKit", "webkit"];
        for (var i in prefixes) {
          var prefixed = prefixes[i] + property;
          if (prefixed in scope) return scope[prefixed];
        }

        /* Things like "window.crypto" become "window.webkitCrypto" */
        if (property[0] !== property[0].toUpperCase()) {
          return prefix(property[0].toUpperCase() + property.substring(1), scope, true);
        } else {
          return undefined;
        }
      }

      /* Find a property recursively */
      function find(definition, scope) {
        if (! scope) return undefined;
        if (! definition) return undefined;
        switch (definition.length) {
          case 0:  return undefined;
          case 1:  return prefix(definition[0], scope);
          default: return find(definition.slice(1), prefix(definition[0], scope));
        }
      }

      return find(this.name.substring(8).split('.'), $global);
    }, true);
  }

  GlobalModule.prototype = Object.create(Module.prototype);
  GlobalModule.prototype.constructor = GlobalModule;
  GlobalModule.prototype.name = "GlobalModule";


  /* ======================================================================== */
  /* Internal Esquire module ("$esquire", "$global", "$promise", ...          */
  /* ======================================================================== */

  function InternalModule(name) {
    Module.call(this, name, [], function() {
      throw new EsquireError("The constructor for '" + name + "' should not be called'")
    }, true);
  };

  InternalModule.prototype = Object.create(Module.prototype);
  InternalModule.prototype.constructor = InternalModule;
  InternalModule.prototype.name = "InternalModule";




  /*==========================================================================*
   | *======================================================================* |
   | | ESQUIRE STATIC METHODS AND VARIABLES                                 | |
   | *======================================================================* |
   *==========================================================================*/

  /* The global timeout */
  var globalTimeout = 2000;

  /* Listeners (should contain only "define") */
  var listeners = { define: [] };

  /* Static list of known modules */
  var modules = {
    "$global":   new InternalModule("$global"),
    "$esquire":  new InternalModule("$esquire"),
    "$promise":  new InternalModule("$promise"),
    "$deferred": new InternalModule("$deferred")
  };

  /* Deferred modules */
  var deferredModules = {};

  /* Flatten an array, or array of array, for aguments */
  function flatten(iterable) {
    if (! iterable) return [];

    var array = [];
    for (var i = 0; i < iterable.length; i ++) {
      var current = iterable[i];
      if (typeof(current) === 'string') {
        array.push(current);
      } else if (typeof(current) === 'function') {
        array.push(current);
      } else if (Array.isArray(current)) {
        array = array.concat(flatten(current));
      } else if ((typeof(current) === 'object')
              && (typeof(current.length) === 'number')) {
        // JavaScripts' "arguments" is an object, not an array, and on top of
        // that PhantomJS' own implementation is not iterable... Workaround!
        array = array.concat(flatten(current));
      } else {
        throw new EsquireError("Invalid dependency: " + JSON.stringify(current));
      }
    }
    return array;
  };

  /* Normalize and validate an array into a array/function object */
  function normalize() {
    var array = flatten(arguments);

    /* The normalized structure */
    var normalized = {
      arguments: [],
      function: null
    };

    /* No elements in the array? Empty */
    if (! array.length) return normalized;

    /* Set the function only if it's the last element */
    if (typeof(array[array.length - 1]) === 'function') {
      normalized.function = array.splice(-1)[0];
    }

    /* Validate all arguments as strings */
    for (var i in array) {
      var argument = array[i];
      if (typeof(argument) === 'string') {
        normalized.arguments.push(argument);
      } else {
        throw new EsquireError("Found " + typeof(argument) + " but needed string: " + argument);
      }
    }

    /* Return our normalized structure */
    return normalized;
  };


  /* A regular expression to validate "$global." or "$global/" dynamic names */
  function isGlobal(name) {
    return /^\$global[\/\.].+/.test(name);
  }


  /* Normalize "$global.any" into "$global/any" */
  function globalName(name) {
    if (isGlobal(name)) {
      return "$global/" + name.substring(8)
    } else {
      return name;
    }
  }

  /* ======================================================================== */
  /* Methods below will be public                                             */
  /* ======================================================================== */

  /* Module definition */
  function defineModule() {

    /* Object based definition */
    if ((arguments.length == 1)
      && arguments[0].name
      && arguments[0].constructor) {
        var module = arguments[0];
        return defineModule(module.name,
                            module.dependencies || [], //optional
                            module.constructor);
    }

    /* Normal arguments-based definition */
    var args = normalize(arguments);

    /* Our variables */
    var name;
    var dependencies = [];
    var constructor;

    /* Name and dependencies */
    if (!args.arguments.length) {
      throw new EsquireError("No module name specified");
    } else {
      name = globalName(args.arguments.splice(0, 1)[0]);
      dependencies = args.arguments;
    }

    /* Watch out for double definitions */
    if (modules[name]) {
      throw new EsquireError("Module '" + name + "' already defined");
    }

    /* Constructor function */
    if (!args.function) {
      throw new EsquireError("No constructor function specified for module '" + name + "'");
    } else {
      constructor = args.function;
    }

    /* Create and remember our new module */
    var module = modules[name] = new Module(name, dependencies, constructor);

    /* Notify all "define" listeners */
    for (var i in listeners['define']) {
      try {
        listeners['define'][i](module);
      } catch (error) {
        console.error("Error notifying listener", error);
      }
    }

    /* Resolve our deferred if someone was waiting for this */
    if (deferredModules[module.name]) {
      deferredModules[module.name].resolve(module);
      delete deferredModules[module.name];
    }

    /* Return our defined module */
    return module;
  };

  /* Return a module (if known) or a promise to get it */
  function moduleOrPromise(module) {
    if (module instanceof Module) return module;

    if (typeof(module) === 'string') {
      if (modules[module]) return modules[module];
      if (deferredModules[module]) return deferredModules[module].promise;
      if (isGlobal(module)) return modules[module] = new GlobalModule(module);

      /* Half timeout, so this will take precedence on "create(...)" */
      var deferred = new Deferred(globalTimeout / 2, new NoModuleError(module));
      deferredModules[module] = deferred;
      return deferred.promise;
    }

    /* Not a module, not a string... Foo! */
    return Promise.reject("Unable to resolve module of type " + typeof(module));

  }

  /* Resolve direct dependencies for the specified module */
  var emptyPromise = Promise.resolve([]);
  function resolveDependencies(module) {
    if (!(module instanceof Module)) {
      return Promise.reject("Unable to resolve module of type " + typeof(module));
    }

    if (module.dependencies.length == 0) return emptyPromise;

    /* The dependencies to return */
    var moduleDependencies = [];

    /* Recurse into module */
    for (var i in module.dependencies) {
      var dependencyName = module.dependencies[i];
      moduleDependencies.push(moduleOrPromise(dependencyName));
    }

    return Promise.all(moduleDependencies);
  }

  /* Resolve ALL dependencies, transitively */
  function resolveTransitiveDependencies(module, hash) {
    if (!(module instanceof Module)) {
      return Promise.reject("Unable to resolve module of type " + typeof(module));
    }

    var promises = [];
    for (var i in module.dependencies) {
      (function(dependencyName) {

        /* Ignore already resolved dependencies */
        if (hash[dependencyName]) return;

        /* Get a module or a promise to it and put it in the hash NOW! */
        var dependency = hash[dependencyName] = moduleOrPromise(dependencyName);

        /* Transitively resolve the dependency */
        promises.push(Promise.resolve(dependency).then(function(dependency) {
          hash[dependencyName] = dependency;
          return resolveTransitiveDependencies(dependency, hash);
        }));

      })(module.dependencies[i]);
    }

    return Promise.all(promises).then(function() {
      return hash;
    });
  }




  /*==========================================================================*
   | *======================================================================* |
   | | ESQUIRE INJECTION IMPLEMENTATION                                     | |
   | *======================================================================* |
   *==========================================================================*/

  /**
   * Create a new {@link Esquire} injector instance, optionally specifying
   * a timeout (in milliseconds) after which module resolution fails.
   *
   * @class Esquire
   * @public
   * @global
   * @classdesc
   * {@link Esquire.modules Modules} are _static_ and shared amongst
   * all {@link Esquire} instances (see [define(...)]{@link Esquire.define}),
   * but their instances not, and are only created _once_ for each
   * {@link Esquire} instance.
   *
   * A _globally shared_ {@link Esquire} instance can be used by invoking the
   * [esquire(...)]{@link esquire} method, rather than creating a new instance
   * and using the [require(...)]{@link Esquire#require} or
   * [inject(...)]{@link Esquire#inject} calls.
   *
   * @param {number} [timeout] The amount of millisecods to wait for injection,
   *                           minimum 100 ms, defaults to 2000 ms.
   */
  function Esquire(timeout) {

    /* Proper construction */
    if (!(this instanceof Esquire)) return new Esquire(timeout);

    /* Timeout */
    if (timeout === undefined) {
      timeout = globalTimeout;
    } else {
      timeout = Number(timeout);
      if (timeout === NaN) {
        throw new EsquireError("Timeout is not a number");
      } else if (timeout < 100) {
        throw new EsquireError("Timeout must be greater or equal than 100ms");
      }
    }

    /* Our cache */
    var cache = {
      "$global":   global,
      "$esquire":  this,
      "$promise":  Promise,
      "$deferred": Deferred
    };

    /* Create a new instance from a defined module */
    function create(module, timeout, dependencyStack) {
      dependencyStack = dependencyStack.slice(0);
      if (module.name != null) dependencyStack.push(module.name);

      /* Already in cache? Why even bother? */
      if (cache[module.name]) return cache[module.name];

      /* Create an expiring Deferred, shortening the timeout */
      if (timeout < 50) timeout = 50;
      var deferred = new Deferred(timeout, "Timeout waiting for module '" + module.name + "'");

      /* ... and *IMMEDIATELY* cache the promise */
      if (module.name && (! module.$$dynamic)) {
        cache[module.name] = deferred.promise;
      }

      /* Calculate the module's direct dependencies */
      resolveDependencies(module).then(function(dependencies) {
        var parameters = [];

        /* Prepare parameters, either from cache or new creations */
        for (var i in dependencies) {
          var dependency = dependencies[i];

          /* Check for circular dependencies */
          var circularIndex = dependencyStack.indexOf(dependency.name);
          if (circularIndex >= 0) {
            var circularDependencies = dependencyStack.slice(circularIndex);
            throw new CircularDependencyError(circularDependencies);
          }

          if (cache[dependency.name]) {
            parameters.push(cache[dependency.name]);
          } else {
            parameters.push(create(dependency, timeout - 5, dependencyStack));
          }
        }

        /* When all parameters have been resolved... */
        return Promise.all(parameters).then(function(parameters) {
          return module.constructor.apply(module, parameters);
        });
      })

      /* Cache and resolve, or reject */
      .then(function(created) {
        if (module.name && (! module.$$dynamic)) cache[module.name] = created;
        deferred.resolve(created);
      }, function(failure) {
        deferred.reject(new InjectionError(module.name, failure));
      });

      /* Return the deferred promise */
      return deferred.promise;

    }

    /**
     * Require instances for the specified module(s).
     *
     * @instance
     * @function
     * @memberof Esquire
     * @example -
     * var esq = new Esquire();
     *
     * esq.require(['fooModule', 'barModule'])
     *   .then(function(fromArray) {
     *     // fromArray[0] will be an instance of 'fooModule'
     *     // fromArray[1] will be an instance of 'barModule'
     *   });
     *
     * @example Injection with a single `string` argument
     * esq.require('bazModule')
     *   .then(function(fromString) {
     *     // 'fromString' will be an instance of 'bazModule'
     *   });
     *
     * @example Injection with a number of different arguments
     * esq.require('abcModule', 'xyzModule')
     *   .then(function(fromArgs) {
     *     // fromArgs[0] will be an instance of 'abcModule'
     *     // fromArgs[1] will be an instance of 'xyzModule'
     *   });
     *
     * @param {string[]|string} dependencies - An array of required module names
     *                                         (or a single module name) whose
     *                                         instance are to be returned.
     * @return {Promise[]|Promise} An array of {@link Promise}s eventually
     *                             resolving to the required module instances,
     *                             or a single {@link Promise} (if this method
     *                             was called with a single `string` parameter).
     */
    function require() {

      /* Edge case, one only parameter, we don't return an array */
      if ((arguments.length == 1) && (typeof(arguments[0]) == 'string')) {
        return inject([arguments[0]], function(instance) {
          return instance;
        });
      }

      /* Inject a fake callback function returning an array */
      return inject(arguments, function() {
        var result = [];
        for (var i = 0; i < arguments.length; i ++) {
          result.push(arguments[i]);
        }
        return result;
      });
      return result;
    }

    /**
     * Request injection for the specified modules.
     *
     * @instance
     * @function inject
     * @memberof Esquire
     * @example -
     * var esq = new Esquire();
     *
     * esq.inject(['modA', 'depB'], function(a, b) {
     *   // 'a' will be an instance of 'modA'
     *   // 'b' will be an instance of 'depB'
     *   return "something";
     *
     * }).then(function(result) {
     *   // The function will be (eventually) injected with its required
     *   // modules, and its return value will resolve the promis returned
     *   // by the "inject(...) method!
     * });
     *
     * @example Injection also works without arrays (only arguments)
     * esq.inject('modA', 'depB', function(a, b) {
     *   // 'a' will be an instance of 'modA'
     *   // 'b' will be an instance of 'depB'
     * });
     *
     * @example Angular-JS style injection (one big array) is supported, too
     * esq.inject(['modA', 'depB', function(a, b) {
     *   // 'a' will be an instance of 'modA'
     *   // 'b' will be an instance of 'depB'
     * }]);
     *
     * @param {string[]|string} [dependencies] - An array of required module
     *                                           names whose instances will be
     *                                           passed to the `callback(...)`
     *                                           method.
     * @param {function} callback - A function that will be called once all
     *                              module dependencies have been instantiated,
     *                              with each instance as a parameter.
     * @return {@link Promise} Whatever value was returned by the `callback` function.
     */
    function inject() {
      var args = normalize(arguments);

      /* Sanity check, need a callback */
      if (!args.function) {
        throw new EsquireError("Callback for injection unspecified");
      }

      /* Create a fake "null" module and return its value */
      var module = new Module(null, args.arguments, args.function);
      try {
        return create(module, timeout, []);
      } catch (error) {
        return Promise.reject(error);
      }

    };

    /* Define our members */
    Object.defineProperties(this, {
      "inject":  { enumerable: true, configurable: false, value: inject },
      "require": { enumerable: true, configurable: false, value: require }
    });

  }


  /* ======================================================================== */
  /* Esquire class static members                                             */
  /* ======================================================================== */

  Object.defineProperties(Esquire, {
    "$$script":    { enumerable: false, configurable: false, value: EsquireScript.toString() },
    "$$Promise":   { enumerable: false, configurable: false, value: PromiseImpl },
    "$$Deferred":  { enumerable: false, configurable: false, value: Deferred },

    /**
     * Define a {@link Module} as available to Esquire
     *
     * @function Esquire.define
     * @example -
     * Esquire.define('foo', ['modA', 'depB'], function(a, b) {
     *   // 'a' will be an instance of 'modA'
     *   // 'b' will be an instance of 'depB'
     *   function Foo(aInstance, bInstance) {
     *     // ...
     *   };
     *   return new Foo(a, b);
     * });
     *
     * @example Definition with a {@link Module}-like object also works.
     * Esquire.define({
     *   name: 'foo',
     *   dependencies: ['modA', 'depB'],
     *   constructor: function(a, b) {
     *     // ...
     *   }
     * });
     *
     * @param {string}   name - The name of the module to define.
     * @param {string[]} [dependencies] - An array of required module names
     *                                    whose instances will be passed to the
     *                                    `constructor(...)` method.
     * @param {function} constructor - A function that will be invoked once per
     *                                 each {@link Esquire} instance. Its return
     *                                 value will be injected in any other module
     *                                 requiring this module as a dependency.
     * @returns {Module} The new {@link Module} created by this call.
     */
    "define": { enumerable: true, configurable: false, value: defineModule },

    /**
     * Return an array of {@link Module} dependencies for a {@link Module}.
     *
     * @function Esquire.resolve
     * @param {string|Module} module - The {@link Module} (or its name) for which
     *                                 dependendencies should be resolved.
     * @param {boolean} [transitive] - If `true` all direct and indirect
     *                                 _(transitive)_ dependencies will be
     *                                 resolved. If `false` or _undefined_, only
     *                                 the {@link Module}'s explicit dependencies
     *                                 will be resolved.
     * @param {boolean} [includeSelf] - If `true` the module we are resolving
     *                                  (which might be a `string`) will also
     *                                  be returned amongst its dependencies.
     * @returns {Promise} An {@link Promise} to a dictionary of all required
     *                    {@link Module}s keyed by their `name`.
     */
    "resolve": { enumerable: true, configurable: false, value: function(module, transitive, includeSelf) {
      if (typeof(module) === 'string') {
        return Promise.resolve(moduleOrPromise(module)).then(function(module) {
          return Esquire.resolve(module, transitive, includeSelf);
        })
      } else if (!(module instanceof Module)) {
        throw new TypeError("Must be invoked with Module or module name");
      }

      var hash = {};
      if (includeSelf) hash[module.name] = module;

      if (transitive) {
        return resolveTransitiveDependencies(module, hash);
      } else {
        return resolveDependencies(module)
        .then(function(dependencies) {
          for (var i in dependencies) {
            hash[dependencies[i].name] = dependencies[i];
          }
          return hash;
        });
      }
    }},

    /**
     * The global timeout (in milliseconds) to wait for module definition
     * and injection.
     *
     * Defaults to _2000 ms_ (2 seconds), can not be less than _100 ms_.
     *
     * @static
     * @member {number} timeout
     * @memberof Esquire
     */
    "timeout": { enumerable: true, configurable: false,
      get: function() {
        return globalTimeout;
      },
      set: function(timeout) {
        timeout = Number(timeout);
        if (timeout === NaN) {
          throw new EsquireError("Timeout is not a number");
        } else if (timeout < 100) {
          throw new EsquireError("Timeout must be greater or equal than 100ms");
        } else {
          globalTimeout = timeout;
        }
      }
    },

    /**
     * An unmodifiable dictionary of all {@link Module}s _currently_ known by
     * {@link Esquire}.
     *
     * @static
     * @readonly
     * @member {Object.<string,Module>} modules
     * @memberof Esquire
     * @example -
     * {
     *   "modA": {
     *     "name": "modA",
     *     "dependencies": [ ... ],
     *     "constructor": function(...) { ... }
     *   },
     *   "depB": {
     *     "name": "depB",
     *     "dependencies": [ ... ],
     *     "constructor": function(...) { ... }
     *   },
     * }
     */
    "modules": { enumerable: true, configurable: false, get: function() {
      var clone = {};
      for (var name in modules) {
        clone[name] = modules[name];
      }
      return Object.freeze(clone);
    }},

    /**
     * Returns a {@link Promise} to the {@link Module} associated with the
     * given `name`.
     *
     * @static
     * @function module
     * @param {string} name - The name of the {@link Module} to return.
     * @memberof Esquire
     * @returns {Module} The {@link Module} or `null`
     */
    "module": { enumerable: true, configurable: false, value: function(name) {
      return Promise.resolve(moduleOrPromise(name));
    }},

    /**
     * Set up notifications for events.
     *
     * The only event supported currently is the `define` event.
     *
     * @static
     * @function on
     * @param {string} event - The name of the event to listen for.
     * @param {function} callback - The callback function to be invoked.
     * @memberof Esquire
     * @returns {Esquire} The static {@link Esquire} class.
     */
    "on": { enumerable: true, configurable: false, value: function(event, listener) {
      if (!(typeof(event) === 'string')) throw new EsquireError("Event name must be a string");
      if (!(typeof(listener) === 'function')) throw new EsquireError("Listener must be a function");
      if (event === 'define') listeners.define.push(listener);
      return Esquire;
    }}
  });




  /*==========================================================================*
   | *======================================================================* |
   | | ESQUIRE IN THE GLOBAL CONTEXT                                        | |
   | *======================================================================* |
   *==========================================================================*/

  /* Set our Esquire function globally */
  if (global.Esquire) {
    throw new Error("Esquire already defined in global scope");
  } else {
    global.Esquire = Esquire;
  }

  /* Our static Esquire instance */
  var staticEsquire = new Esquire();

  /**
   * Request **static** injection for the specified modules.
   *
   * If a `callback` function was specified, then this method will behave like
   * [inject(...)]{@link Esquire#inject}, thus dependencies will be resolved
   * and passed to `callback` method, and its return value (if any) will be
   * returned from this method.
   *
   * If no `callback` function was given, this method will behave like
   * [require(...)]{@link Esquire.require} and simply return the required
   * dependencies.
   *
   * Note that this method will use a globally shared {@link Esquire} instance
   * to create and resolve dependencies.
   *
   * @static
   * @global
   * @param {array}    dependencies - An array of required module names whose
   *                                  instances will be passed to the
   *                                  `callback(...)` method.
   * @param {function} [callback] - A function that will be called once all
   *                                module dependencies have been instantiated,
   *                                with each instance as a parameter.
   * @return {object} Whatever value was returned by the `callback` function
   *                  (if one was specified) as in {@link Esquire#inject}.
   * @return {object[]|object} An array of module instances (or a single module
   *                           instance) as in {@link Esquire#require} if this
   *                           method was called wihtout any `callback` function.
   */
  global.esquire = function() {
    /* No arguments? Ignore */
    if (arguments.length == 0) {
      throw new EsquireError("No dependencies/callback specified");
    }

    /* Normalize our arguments */
    var args = normalize(arguments);

    /* Inject or require? */
    if (args.function) {
      return staticEsquire.inject(args.arguments, args.function);
    } else if ((arguments.length == 1) && (typeof(arguments[0]) === 'string')) {
      return staticEsquire.require(arguments[0]);
    } else {
      return staticEsquire.require(args.arguments);
    }

  };

})((function() {
  try {
    return window;
  } catch (e) {
    return global;
  }
})());
