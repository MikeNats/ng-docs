'use strict';

/* ======================================================================== */
/* I don't like this, but Karma/Mocha/Chai seem to get confused with        */
/* successes and failures when exceptions are uncaught at the window level. */
/*                                                                          */
/* We can only add handlers, but not prevent them from registering their    */
/* own, so for now this has to do... If someone has ideas :-)               */
/*                                                                          */
/* Update: It seems that setting "window.onerror = null" in the test suite  */
/* actually did the trick.... Keep this one for a while just to see...      */
/* ======================================================================== */
var runtests = (function() {

  /* Break browser cache */
  function file(name) {
    return "../loader/" + name + "?" + Math.floor(Math.random() * 100000000);
  }

  /* Create a test definition */
  var tests = [];
  function test(name, test) {
    tests.push({name: name, test: test});
  }

  /* Main loop for serial testning */
  function executeSerial(delay, tests) {
    var clone = tests.slice(0);
    if (clone.length > 0) {
      var remaining = clone.splice(1);
      var current = clone[0];

      current.item.setAttribute("style", "color:magenta");
      current.text.nodeValue = "running: " + current.name;
      window.setTimeout(function() {
        var start = new Date().getTime();
        current.test(function(success) {
          var ms = new Date().getTime() - start;
          current.text.nodeValue = "passed: (" + ms + " ms): " + current.name;
          current.item.setAttribute("style", "color:green");
          window.setTimeout(function() {executeSerial(delay, remaining)}, delay);
        }, function (failure) {
          var ms = new Date().getTime() - start;
          current.text.nodeValue = "failed (" + ms + " ms): " + current.name;
          current.item.setAttribute("style", "color:red");
          window.setTimeout(function() {executeSerial(delay, remaining)}, delay);
        });
      }, delay);

    }
  }

  /* Run all tests serially with a delay */
  function runSerial(delay, tests) {
    var title = document.createElement("div");
    title.setAttribute("style", "color:blue");
    title.appendChild(document.createTextNode("Serial testing: " + new Date()));

    var list = document.createElement("ul");

    document.body.appendChild(title);
    document.body.appendChild(list);

    var serialTests = [];
    for (var i in tests) {
      var text = document.createTextNode("pending: " + tests[i].name);

      var element = document.createElement("li");
      element.setAttribute("style", "color:blue");
      element.appendChild(text);

      list.appendChild(element);

      serialTests.push({
        name: tests[i].name,
        test: tests[i].test,
        item: element,
        text: text
      });
    }

    executeSerial(delay, serialTests);
  }

  /* Run all tests serially with a delay */
  function runParallel(tests) {
    var title = document.createElement("div");
    title.setAttribute("style", "color:blue");
    title.appendChild(document.createTextNode("Parallel testing: " + new Date()));

    var list = document.createElement("ul");

    document.body.appendChild(title);
    document.body.appendChild(list);

    var parallelTests = [];
    for (var i in tests) {
      var text = document.createTextNode("pending: " + tests[i].name);

      var element = document.createElement("li");
      element.setAttribute("style", "color:blue");
      element.appendChild(text);

      list.appendChild(element);

      parallelTests.push({
        name: tests[i].name,
        test: tests[i].test,
        item: element,
        text: text
      });
    }

    for (var i in parallelTests) {
      (function(current) {
        current.item.setAttribute("style", "color:magenta");
        current.text.nodeValue = "running: " + current.name;
        var start = new Date().getTime();
        current.test(function(success) {
          var ms = new Date().getTime() - start;
          current.text.nodeValue = "passed: (" + ms + " ms): " + current.name;
          current.item.setAttribute("style", "color:green");
        }, function (failure) {
          var ms = new Date().getTime() - start;
          current.text.nodeValue = "failed (" + ms + " ms): " + current.name;
          current.item.setAttribute("style", "color:red");
        });
      })(parallelTests[i]);
    }
  }

  /* ======================================================================== */
  /* TEST SPECS                                                               */
  /* ======================================================================== */

  test("NO-FILE", function(success, failure) {
    Esquire.load().then(success, failure);
  });

  test("EMPTY-SCRIPT", function(success, failure) {
    Esquire.load(file("empty-script.js"))
      .then(success, failure);
  });

  test("NORMAL-SCRIPT", function(success, failure) {
    Esquire.load(file("empty-script.js"))
      .then(success, failure);
  });

  test("NON-EXISTANT", function(success, failure) {
    Esquire.load(file("non-existant.js"))
      .then(failure, success);
  });

  test("PARSE-EXCEPTION", function(success, failure) {
    Esquire.load(file("parse-exception.js"))
      .then(failure, success);
  });

  test("UNDEFINED-VARIABLE", function(success, failure) {
    Esquire.load(file("undefined-variable.js"))
      .then(failure, success);
  });

  test("THROWS-ERROR", function(success, failure) {
    Esquire.load(file("throws-error.js"))
      .then(failure, success);
  });

  test("MULTIPLE-FILES-FAIL", function(success, failure) {
    Esquire.load(file("empty-script.js"),
                 file("throws-error.js"))
      .then(failure, success);
  });

  test("MULTIPLE-FILES-SUCCESS", function(success, failure) {
    Esquire.load(file("empty-script.js"),
                 file("normal-script.js"))
      .then(success, failure);
  });

  test("PROMISE-CHAINING-SUCCESS", function(success, failure) {
    Esquire.load(file("empty-script.js"))
      .then()
      .then(success, failure);
  });

  test("PROMISE-CHAINING-FAILURE", function(success, failure) {
    Esquire.load(file("non-existant.js"))
      .then()
      .then(failure, success);
  });

  test("PROMISE-CHAINING-INVALIDATE", function(success, failure) {
    Esquire.load(file("non-existant.js"))
      .then(function() { throw new Error("FOO") })
      .then(failure, success);
  });

  test("PROMISE-CHAINING-RESCUE", function(success, failure) {
    Esquire.load(file("non-existant.js"))
      .catch(function() { return true })
      .then(success, failure);
  });

  /* ======================================================================== */
  /* TEST SUITE FUNCTION                                                      */
  /* ======================================================================== */
  return function() {
    runParallel(tests);
    runSerial(0, tests);
  }

})();

