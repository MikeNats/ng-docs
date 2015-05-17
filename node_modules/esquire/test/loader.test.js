'use strict';

/* Disable Karma's error interception */
window.onerror = null;

describe('Esquire loader', function() {

  function file(name) {
    return '/base/test/loader/' + name + "?" + Math.floor(Math.random() * 1000000000000);
  }

  it('should have static members', function() {
    expect(Esquire.load).to.be.a('function');
  });

  promises('should resolve with no scripts', function() {
    return Esquire.load()
      .then(function(success) {
        expect(success).to.deep.equal(Esquire.modules);
      }).done();
  })

  promises('should resolve with an empty script', function() {

    return Esquire.load(file("empty-script.js"))
      .then(function(success) {
        expect(success).to.deep.equal(Esquire.modules);
      }).done();
  })

  promises('should resolve with a normal script', function() {

    return Esquire.load(file("normal-script.js"))
      .then(function(success) {
        expect(success).to.deep.equal(Esquire.modules);
      }).done();
  })

  promises('should reject on a non existant script', function() {

    return Esquire.load(file("non-existant.js"))
      .then(function(success) {
        throw new Error("Should fail");
      }, function(failure) {
        expect(failure).to.be.instanceof(Error);
      }).done();
  })

  promises('should reject on parse exception', function() {

    return Esquire.load(file("parse-exception.js"))
      .then(function(success) {
        throw new Error("Should fail");
      }, function(failure) {
        expect(failure).to.be.instanceof(Error);
      }).done();
  })

  promises('should reject on undefined variable', function() {

    return Esquire.load(file("undefined-variable.js"))
      .then(function(success) {
        throw new Error("Should fail");
      }, function(failure) {
        expect(failure).to.be.instanceof(Error);
      }).done();
  })

  promises('should reject on exception thrown', function() {

    return Esquire.load(file("throws-error.js"))
      .then(function(success) {
        throw new Error("Should fail");
      }, function(failure) {
        expect(failure).to.be.instanceof(Error);
      }).done();
  })

  promises('should reject on multiple files', function() {

    return Esquire.load(file("empty-script.js"), file("throws-error.js"))
      .then(function(success) {
        throw new Error("Should fail");
      }, function(failure) {
        expect(failure).to.be.instanceof(Error);
      }).done();
  })

  promises('should resolve on multiple files', function() {

    return Esquire.load(file("empty-script.js"), file("normal-script.js"))
      .then(function(success) {
        expect(success).to.deep.equal(Esquire.modules);
      }).done();
  })

  promises('should load a module from an external script', function() {

    return Esquire.load(file("module-script.js"))
      .then(function(success) {
        expect(success['loaded-module']).to.exist();
        return new Esquire().require('loaded-module');
      })

      .then(function(module) {
        expect(module).to.be.equal('This was loaded from an external module');
      })

      .done();

  })

})
