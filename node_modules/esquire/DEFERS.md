USRZ Defers API
===============

This package includes a minimal implementation of the JavaScript
[`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
API and a `Deferred` implementation  similar to _AngularJS_' own
[`$q.defer`](https://docs.angularjs.org/api/ng/service/$q#defer) method.

Those implementations are wrapped in a `promize`
[_Esquire_](https://github.com/usrz/javascript-esquire) module.

```javascript
esquire.inject(['promize'], function(promize) {
  var myPromise = new promize.Promise(...);
  var myDeferred = new promize.Deferred();
})
```

Other [sub modules](#submodules) are available to access constructors directly.

<div class="nojsdoc">
  The full API documentation is avaiblable
  <a target="_blank" href="http://usrz.github.io/javascript-promize/">here</a>.
</div>

Promise
-------

This class is a minimal implementation of the JavaScript
[Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
API for those browsers that (yet!) do not support it.

(You can interpret the above as _"I hate Microsoft Internet Explorer"_).

The `Promise` instance will have all the traditional methods implemented:

* `then(onSuccess, onFailure)`

  Appends fulfillment and rejection handlers to the `Promise`, and returns a
  **new** promise resolving to the return value of the called handler.

* `catch(onFailure)`

  Appends a rejection handler callback to the `Promise`, and returns a **new**
  promise resolving to the return value of the callback if it is called, or to
  its original fulfillment value if the promise is instead fulfilled.

  This is equivalent to `then(null, onFailure)`.

The usual static methods on the `Promise` class are also available:

* `Promise.reject(reason)`

  Returns a `Promise` object that is rejected with the given reason.

* `Promise.resolve(value)`

  Returns a `Promise` object that is resolved with the given value. If the
  value is a _then-able_ (i.e. has a `then(...)` method), the returned promise
  will **follow** that _then-able_, adopting its eventual state; otherwise the
  returned promise will be fulfilled.

* `Promise.all(iterable)`

  Returns a `Promise` that resolves when all of the promises in the _iterable_
  argument have resolved. If any of the promises in the _iterable_ is resolved
  with a rejection, this resulting promise will be rejected with the same
  rejection value.

* `Promise.race(iterable)`

  Returns a `Promise` that resolves or rejects as soon as one of the promises
  in the iterable resolves or rejects, with the value or reason from that
  promise.

Deferred
--------

The `Deferred` class behaves much like _AngularJS_' own
[`$q.defer`](https://docs.angularjs.org/api/ng/service/$q#defer) method.

The returned object is similar to what's outlined in the
[Deferred API](https://docs.angularjs.org/api/ng/service/$q#the-deferred-api):

#### Methods

* `resolve(value)`

  Resolves the derived `Promise` with the value. If the value is a _then-able_
  (i.e. has a `then(...)` method) the derived `Promise` **follow** that
  _then-able_, adopting its eventual state.

* `reject(reason)`

  Rejects the derived `Promise` with the reason.

#### Properties

* `promise`

  The `Promise` object associated with this deferred.


Sub modules
-----------

<a name="submodules"></a>

Few extra modules are provided to access the constructors directly.

The `promize/Deferred` module will provide a `Deferred` constructor:

```javascript
esquire.inject(['promize/Deferred'], function(Deferred) {
  var myDeferred = new Deferred();
  myDeferred.resolve(...);
  return myDeferred.promise;
})
```

The `promize/Promise` (notice the `s`) module will provide a `Promise`
constructor for a _native_ `Promise` (if supported by the browser) or an
**emulated** one:

```javascript
esquire.inject(['promize/Promise'], function(Promise) {
  var myPromise = new Promise(...);
  // "Promise" will be either native (if available) or emulated.
  // ...
})
```

Finally, the `promize/Promize` (notice the `z`) module will provide a `Promise`
constructor for a **emulated** `Promise`. This should really never be used
directly, as using _native_ `Promise`s is advisable when the browser supports
them:

```javascript
esquire.inject(['promize/Promize'], function(Promize) {
  var myPromise = new Promize(...);
  // "myPromise" here will always be an emulated Promise.
  // ...
})
```


Notes
-----

Descriptions for the API have been shamelessly copied from the _Mozilla MDN_ and
_AngularJS_ documentation.



