Esquire.define('circular-a', ['circular-b'], function() {
  return "a value";
});

Esquire.define('circular-b', ['circular-c'], function() {
  return "b value";
});

Esquire.define('circular-c', ['circular-d'], function() {
  return "c value";
});

Esquire.define('circular-d', ['circular-e'], function() {
  return "d value";
});

Esquire.define('circular-e', ['circular-f'], function() {
  return "e value";
});

Esquire.define('circular-f', ['circular-g'], function() {
  return "f value";
});

Esquire.define('circular-g', ['circular-a'], function() {
  return "g value";
});



Esquire.define('circular-self', ['circular-self'], function() {
  return "self value";
});
