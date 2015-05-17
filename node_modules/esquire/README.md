Esquire
=======

Esquire is a light weight, **asynchronous** injection framework for JavaScript.

<div class="nojsdoc">
  The full API documentation is avaiblable
  <a target="_blank" href="http://usrz.github.io/javascript-esquire/">here</a>.
</div>

Modules
-------

Module definitions are shared, on a per _global scope_ basis; in other words,
the same module is defined only once per `window` if running in a browser,
or `global` if running under `Node.JS`.

Modules are defined by a `name`, a list of _dependencies_, and a constructor
function:

```javascript
Esquire.define("myModuleName", ['myFirstDependency', 'anotherDependency'], function(first, another) {
  // the parameters to the constructor are our dependencies, and in this context
  // "this" means the module itself, so "this.name" is "myModuleName"
});
```

Constructors can return _immediately_ (with a result), or can return a
_then-able_ `Promise` which will eventually resolve to the required instance.

Module Injection
----------------

Direct injection of a module is supported through the `inject(...)` method,
which will return a `Promise` to its return value:

```javascript
new Esquire().inject(['dependencyName'], function(dependency) {
  // ... use the dependency here, and either return or throw an exception

}).then(function(result) {
  // "result" here will be the value returned by the injected method above

}, function(failure) {
  // "failure" here will be the error thrown by the injected method above

});
```

Module Requirement
------------------

Modules can also be directly required by the caller, and will be returned
wrapped into a `Promise`:

```javascript
new Esquire().require('requestedModule')
  .then(function(result) {
    // "result" here will be the instance of the module 'requestedModule'
  });
```

Multiple modules can also be requested simultaneously (both specifying module
names as arguments or an array of `string`s):

```javascript
new Esquire().require('firstModule', 'secondModule')
  .then(function(result) {
    // result[0] -> instance of 'firstModule'
    // result[1] -> instance of 'secondModule'
  });
```

Static vs. per-instance injection
---------------------------------

In the examples above, a call to `new Esquire()` will create a new _injector_
and with it, new modules instances are created. Each module _instance_ is only
available to its injector, and never shared across.

On the other hand the global `esquire(...)` method will allow to access a per
_global scope_ shared injector.

When calling `esquire(...)` with a callback function as its last parameter,
the method will behave like `inject(...)`, thus dependencies will be resolved
and passed to callback method, and its return value (if any) will be returned.

```javascript
esquire(['dependencyName'], function(dependency) {
  // ... use the dependency here, and either return or throw an exception
}).then(function(result) {
  // "result" here will be the value returned by the injected method above
});
```

If no callback function was given, the `esquire(...)` method will behave like
`require(...)` and simply return the required dependencies.

```javascript
esquire('requestedModule')
  .then(function(result) {
    // "result" here will be the instance of the module 'requestedModule'
  });
```

Timeouts
--------

As module creation is asynchronous, it might be useful to specify a timeout
when creation should fail.

By default the timeout is 2000 ms (2 sec), but a different timeout can be
specified at construction time. The minimum timeout is 100 ms.

```javascript
new Esquire(60000).require('foo')
  .then(function(foo) {
    // we'll wait up to a minute for "foo" to be created
  });
```

Loading
-------

While optional, loading of external scripts is also supported, with the same
`Promise` mechanism (especially useful in browser environments).

And as `Promise`s can be easily chained, constructs like the following can
be quite useful:

```javascript
Esquire.load("myOtherScript.js")
  .then(function() {
    return esquire("moduleFromMyOtherScript");
  })
.then(function(myModule) {
  // here "myModule" will be the shared global instance of the module
  // "moduleFromMyOtherScript" defined in the "myOtherScript.js" file
});
```









