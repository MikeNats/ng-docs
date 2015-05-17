Esquire.define("module-g", ['$global.setTimeout', '$promise'], function(setTimeout, Promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() { resolve("value-g") }, 50);
  });
});
