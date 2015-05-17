Esquire.define("module-h", ['$global.setTimeout', '$promise'], function(setTimeout, Promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() { reject(new Error("value-h")) }, 50);
  });
});
