'use strict';

describe("Esquire under Node", function() {

  var esquire = require('../index.js');

  it('should have static members', function() {
    expect(esquire).to.exist();
    expect(esquire).to.be.a('function');
    expect(esquire.define ).to.be.a('function');
    expect(esquire.module ).to.be.a('function');
    expect(esquire.resolve).to.be.a('function');
    expect(esquire.modules).to.be.a('object');
  });

  it('should construct and have instance members', function() {
    var e = new esquire();
    expect(e).to.exist();
    expect(e).to.be.instanceof(global.Esquire);
    expect(e.inject ).to.be.a('function');
    expect(e.require).to.be.a('function');
  });

  promises('should statically inject', function() {
    return esquire(['$promise', '$deferred'], function(p, d) {
      expect(p).to.be.equal(Esquire.$$Promise);
      expect(d).to.be.equal(Esquire.$$Deferred);
    }).done();
  });

  promises('should inject instances', function() {
    return new esquire().inject(['$promise', '$deferred'], function(p, d) {
      expect(p).to.be.equal(Esquire.$$Promise);
      expect(d).to.be.equal(Esquire.$$Deferred);
    }).done();
  });

  promises('should share instances with global esquire', function() {

    var count = 0;
    var n1;
    var n2;
    global.Esquire.define("nodeTest1", [], function() { return n1 = "node-value-1-" + (++count)});
           esquire.define("nodeTest2", [], function() { return n2 = "node-value-2-" + (++count)});

    return Esquire.$$Promise.all([ esquire('nodeTest1'),
                                   esquire('nodeTest2'),
                                   global.esquire('nodeTest1'),
                                   global.esquire('nodeTest2') ])
      .then(function(result) {
        expect(n1).to.match(/^node-value-1-[\d]$/);
        expect(n2).to.match(/^node-value-2-[\d]$/);
        expect(result[0]).to.equal(n1); // require, node 1
        expect(result[1]).to.equal(n2); // require, node 2
        expect(result[2]).to.equal(n1); // global, node 1
        expect(result[3]).to.equal(n2); // global, node 2
      }).done();
  });

});

