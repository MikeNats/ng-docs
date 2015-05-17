(function() {
  var count = 0;
  Esquire.define('module-b', [], function() {
    // "module-b" conunts, all the time
    return "valueForModuleB => " + (count ++);
  });
})();
