(function() {angular.module('jsDocNG-Data', []).constant('$title',   "Documentation").constant('$readme',  "<h1>Grunt JsDoc NG extended for all JavaScript Frameworks </h1><p>This set up is an extention of <a href=\"https://github.com/usrz/javascript-grunt-jsdoc-ng\">Grunt JsDoc NG</a></p>\n<ul>\n<li><p>jsdoc is a javascript documentation generation framework used to build custom documentation based on your source code comments. Using its block tags you can have a beautiful documentation of your code/API. By making use of grunt jsdoc you are removing the work of maintaining your code documentation. It is extremely important to keep your source code documented and an easy to use API.</p>\n</li>\n<li><p>Allows you to create documentation automatically from your javascript source code in your build process itself. Bonus point is that the docs which are generated is a single page web app based on angular-js for faster navigation.</p>\n</li>\n<li>Grunt task to run jsDoc without Java</li>\n</ul>\n<h2>How it works:</h2><p>1) Download the set up.<br />\n2) Place your JavaScript file into the folder <strong>yourJSToBeDocumented</strong>.<br />\n3) Access the folder through CMD:<br /></p>\n<ul>\n<li><pre class=\"prettyprint source lang-bash\"><code>cd pathToTheDevelopmentStack</code></pre></li>\n<li><p>For One deployment:</p>\n<pre class=\"prettyprint source lang-bash\"><code>grunt jsdoc-ng</code></pre><p>or </p>\n</li>\n<li><p>Deployment every time that your js file changes in  the folder <strong>yourJSToBeDocumented</strong>:</p>\n<pre class=\"prettyprint source lang-bash\"><code>grunt watch</code></pre></li>\n</ul>\n<p><br />\n4) Documenation will be produced in the <strong> documentation</strong> folder<br /></p>\n<h2>Examples:</h2><p>When you download the strack in the folder  <strong> yourJSToBeDocumented</strong> there are examples with the resulted documentation in the <strong> documentation</strong> folder</p>").constant('$doclets', [
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      },
      {
        "originalTitle": "variable",
        "title": "variable",
        "text": "app",
        "value": "app"
      }
    ],
    "kind": "module",
    "name": "app",
    "access": "public",
    "scope": "static",
    "requires": [
      "module:ngRoute",
      "module:ngAnimate",
      "module:routeSateModule",
      "module:ui.router",
      "module:authModule+module:authModule",
      "module:mapModule+module:mapModule",
      "module:uiServices+module:uiServices"
    ],
    "description": "<p>Conetains App.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:app",
    "$href": "module:app",
    "$id": "T000002R000002"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "initializer"
      ]
    },
    "name": "run",
    "memberof": "module:app",
    "requires": [
      "module:$rootScope",
      "module:$state",
      "module:$stateParams",
      "module:$q",
      "module:isSateInitialized",
      "module:authModule+module:authModule.AUTH_EVENTS",
      "module:authModule+module:authModule.authService",
      "module:mapModule+module:mapModule.gMap"
    ],
    "description": "<p>Events before templates are been loaded</p>",
    "scope": "static",
    "longname": "module:app.run",
    "jsConcept": true,
    "$href": "module:app.run",
    "$id": "T000002R000008"
  },
  {
    "kind": "class",
    "name": "$rootScope",
    "memberof": "module:app.run",
    "access": "public",
    "classdesc": "<p>Encapulates events before template loads</p>",
    "scope": "static",
    "longname": "module:app.run.$rootScope",
    "$href": "module:app.run.$rootScope",
    "$id": "T000002R000009"
  },
  {
    "kind": "member",
    "name": "$state",
    "memberof": "module:app.run.$rootScope",
    "access": "public",
    "description": "<p>Makes availiable <code>$state</code> to the hole App.</p>",
    "scope": "static",
    "longname": "module:app.run.$rootScope.$state",
    "$href": "module:app.run.$rootScope#$state",
    "$id": "T000002R000011"
  },
  {
    "kind": "event",
    "name": "$stateChangeStart",
    "type": {
      "names": [
        "listener"
      ]
    },
    "memberof": "module:app.run.$rootScope",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "event"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "toState"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "toParams"
      }
    ],
    "description": "<p>Before the state of the App changes authentican check is been implemented.\nwith the use of <a href=\"#!/module:authModule.authService\"><code>authService.isAuthenticated()</code></a></p>",
    "scope": "static",
    "longname": "module:app.run.$rootScope.event:$stateChangeStart",
    "$href": "module:app.run.$rootScope#$stateChangeStart",
    "$id": "T000002R000013"
  },
  {
    "description": "<p>Navigation</p>",
    "name": "previousPage",
    "longname": "module:app~$rootScope.previousPage",
    "kind": "member",
    "scope": "static",
    "memberof": "module:app~$rootScope",
    "$href": "#previousPage",
    "$id": "T000002R000015"
  },
  {
    "kind": "event",
    "name": "$stateChangeSuccess",
    "type": {
      "names": [
        "listener"
      ]
    },
    "memberof": "module:app.run.$rootScope",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "event"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "toState"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "toParams"
      }
    ],
    "description": "<p>When state changes a promise is been fulfied.</p>",
    "scope": "static",
    "longname": "module:app.run.$rootScope.event:$stateChangeSuccess",
    "$href": "module:app.run.$rootScope#$stateChangeSuccess",
    "$id": "T000002R000016"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "configuration"
      ]
    },
    "name": "config",
    "memberof": "module:app",
    "requires": [
      "module:$stateProvide",
      "module:$urlRouterProvider"
    ],
    "description": "<p>Routing of the App</p>",
    "scope": "static",
    "longname": "module:app.config",
    "jsConcept": true,
    "$href": "module:app.config",
    "$id": "T000002R000017"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "constant"
      ]
    },
    "name": "AUTH_EVENTS",
    "memberof": "module:authModule",
    "description": "<p>Contains authentication status messages.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:authModule.AUTH_EVENTS",
    "jsConcept": true,
    "$href": "module:authModule.AUTH_EVENTS",
    "$id": "T000002R000064"
  },
  {
    "kind": "constant",
    "name": "loginSuccess",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "auth-login-success",
    "longname": "module:authModule.AUTH_EVENTS.loginSuccess",
    "$href": "module:authModule.AUTH_EVENTS#loginSuccess",
    "$id": "T000002R000065"
  },
  {
    "kind": "constant",
    "name": "loginFailed",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "auth-login-failed",
    "longname": "module:authModule.AUTH_EVENTS.loginFailed",
    "$href": "module:authModule.AUTH_EVENTS#loginFailed",
    "$id": "T000002R000067"
  },
  {
    "kind": "constant",
    "name": "logoutSuccess",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "auth-logout-success",
    "longname": "module:authModule.AUTH_EVENTS.logoutSuccess",
    "$href": "module:authModule.AUTH_EVENTS#logoutSuccess",
    "$id": "T000002R000069"
  },
  {
    "kind": "constant",
    "name": "sessionTimeout",
    "memberof": "module:authModule.AUTH_EVENTS",
    "scope": "static",
    "access": "public",
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "auth-session-timeout",
    "longname": "module:authModule.AUTH_EVENTS.sessionTimeout",
    "$href": "module:authModule.AUTH_EVENTS#sessionTimeout",
    "$id": "T000002R000071"
  },
  {
    "kind": "constant",
    "name": "notAuthenticated",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "auth-not-authenticated",
    "longname": "module:authModule.AUTH_EVENTS.notAuthenticated",
    "$href": "module:authModule.AUTH_EVENTS#notAuthenticated",
    "$id": "T000002R000073"
  },
  {
    "kind": "constant",
    "name": "notAuthorized",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "defaultvalue": "auth-not-authorized",
    "longname": "module:authModule.AUTH_EVENTS.notAuthorized",
    "$href": "module:authModule.AUTH_EVENTS#notAuthorized",
    "$id": "T000002R000075"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "controller"
      ]
    },
    "name": "mainAppController",
    "memberof": "module:uiServices",
    "description": "<p>Handles Header Visibility and provide global access to popUp.</p>",
    "requires": [
      "module:$scope",
      "module:$http",
      "module:popUp+module:authModule.uiServices.popUp",
      "module:isSateInitialized+module:uiServices.isSateInitialized"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.mainAppController",
    "jsConcept": true,
    "$href": "module:uiServices.mainAppController",
    "$id": "T000002R000077"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.mainAppController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope",
    "$href": "module:uiServices.mainAppController.$scope",
    "$id": "T000002R000078"
  },
  {
    "kind": "class",
    "name": "header",
    "memberof": "module:uiServices.mainAppController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.mainAppController\"><code>$scope</code></a>. \nEncapsulates  Header visibility.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.header",
    "$href": "module:uiServices.mainAppController.$scope.header",
    "$id": "T000002R000079"
  },
  {
    "kind": "member",
    "name": "show",
    "type": {
      "names": [
        "boolean"
      ]
    },
    "memberof": "module:uiServices.mainAppController.$scope.header",
    "description": "<p>Sets header visibiliti. Hides header on logIn</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.header.show",
    "$href": "module:uiServices.mainAppController.$scope.header#show",
    "$id": "T000002R000081"
  },
  {
    "kind": "member",
    "name": "checkVisibility",
    "memberof": "module:uiServices.mainAppController.$scope.header",
    "params": [
      {
        "name": "no-argument"
      }
    ],
    "description": "<p>Setter for <a href=\"#!/module:uiServices.mainAppController.$scope.header\"><code>show</code></a>. </p>\n<p>Promise <code>isSateInitialized</code> that is been fulfield when the state of the page is not index, when  the user succesfully login's.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.header.checkVisibility",
    "$href": "module:uiServices.mainAppController.$scope.header#checkVisibility",
    "$id": "T000002R000083"
  },
  {
    "kind": "class",
    "name": "popUp",
    "memberof": "module:uiServices.mainAppController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.mainAppController\"><code>$scope</code></a>. </p>\n<p>Encapsulates  Modal Window.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.popUp",
    "$href": "module:uiServices.mainAppController.$scope.popUp",
    "$id": "T000002R000087"
  },
  {
    "kind": "member",
    "name": "togglePopUp",
    "memberof": "module:uiServices.mainAppController.$scope.popUp",
    "params": [
      {
        "type": {
          "names": [
            "object"
          ]
        },
        "name": "DOMElement"
      }
    ],
    "description": "<p>The function is been attached to diffrent html elements for modul window functionality invocation. </p>\n<p>Promise <code>isSateInitialized</code> that is been fulfield when the </p>\n<p>More information for the modal window: <code>popUp</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.popUp.togglePopUp",
    "$href": "module:uiServices.mainAppController.$scope.popUp#togglePopUp",
    "$id": "T000002R000089"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "controller"
      ]
    },
    "name": "mapController",
    "memberof": "module:uiServices",
    "description": "<p>Initialize an Instance of GooleMaps and its features according to settings object fetched from url.</p>",
    "requires": [
      "module:$rootScope",
      "module:$scope",
      "module:$stateParams",
      "module:gMapsLib+module:mapModule.gMapsLib",
      "module:gMap+module:mapModule.gMap",
      "module:deleteHeadScripts+module:mapModule.deleteHeadScripts"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.mapController",
    "jsConcept": true,
    "$href": "module:uiServices.mapController",
    "$id": "T000002R000099"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.mapController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.mapController.$scope",
    "$href": "module:uiServices.mapController.$scope",
    "$id": "T000002R000100"
  },
  {
    "kind": "member",
    "name": "projectNumber",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "memberof": "module:uiServices.mapController.$scope",
    "description": "<p>position of the Session.project array. Fetched from url</p>",
    "scope": "static",
    "longname": "module:uiServices.mapController.$scope.projectNumber",
    "$href": "module:uiServices.mapController.$scope#projectNumber",
    "$id": "T000002R000101"
  },
  {
    "kind": "class",
    "name": "map",
    "memberof": "module:uiServices.mapController.$scope",
    "classdesc": "<p>Object attached to controllers <code>$scope</code>.</p>\n<p>Encapsulates map data.</p>\n<p>The most important Object in the App.</p>\n<p>In that Object settings and the cutom view of the map is been stored, and is the one that is been stringified and turned into url for publishing the map.</p>",
    "scope": "static",
    "longname": "module:uiServices.mapController.$scope.map",
    "$href": "module:uiServices.mapController.$scope.map",
    "$id": "T000002R000103"
  },
  {
    "kind": "function",
    "name": "mapsInitialized",
    "type": {
      "names": [
        "Promise"
      ]
    },
    "returns": [
      {
        "type": {
          "names": [
            "Promise"
          ]
        }
      }
    ],
    "memberof": "module:uiServices.mapController",
    "description": "<p>Promise is been fulfilled  when google Maps script is appended.\nWhen the Promised is been fulfied:</p>\n<blockquote>\n<p>Google Map is been appeded with the use of <code>gMap.append</code> API.</p>\n<p>Google Maps features are been initialized with the use of <code>gMap.features</code> API.  </p>\n<p>Settings <code>$scope.map.settings</code> are been updated.</p>\n</blockquote>",
    "scope": "static",
    "longname": "module:uiServices.mapController.mapsInitialized",
    "$href": "module:uiServices.mapController#mapsInitialized",
    "$id": "T000002R000105"
  },
  {
    "kind": "event",
    "name": "$stateChangeStart",
    "type": {
      "names": [
        "listener"
      ]
    },
    "memberof": "module:uiServices.mapController",
    "description": "<p>on $stateChangeStart &amp;&amp; curent template is customap:</p>\n<blockquote>\n<p>Using <code> deleteHeadScripts.exclude</code> service API clears Google Map Script</p>\n<p>Deletes #map-canvas <code>HTML-tag</code></p>\n<p>Reinitialize <code>$scope.map.settings.map</code> Object</p>\n</blockquote>",
    "scope": "static",
    "longname": "module:uiServices.mapController.event:$stateChangeStart",
    "$href": "module:uiServices.mapController#$stateChangeStart",
    "$id": "T000002R000108"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "directive"
      ]
    },
    "name": "fileUpload",
    "memberof": "module:uiServices",
    "description": "<p>File uploader.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.fileUpload",
    "jsConcept": true,
    "$href": "module:uiServices.fileUpload",
    "$id": "T000002R000112"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.fileUpload.return",
    "classdesc": "<p>Directives Local Scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.fileUpload.return.scope",
    "$href": "module:uiServices.fileUpload.return.scope",
    "$id": "T000002R000113"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.fileUpload",
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        }
      }
    ],
    "description": "<p>Wired with  local scope that attribute <code>file-upload</code> creates.</p>\n<p>Type: <code>HTML-Attribute</code></p>",
    "scope": "static",
    "longname": "module:uiServices.fileUpload.return",
    "$href": "module:uiServices.fileUpload#return",
    "$id": "T000002R000114"
  },
  {
    "kind": "member",
    "name": "link",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "scope"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "el"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "attr"
      }
    ],
    "memberof": "module:uiServices.fileUpload.return",
    "description": "<p>Once trigered  uploaded fileis been pushed push  upwords to scope <code>mainAppController</code></p>",
    "scope": "static",
    "longname": "module:uiServices.fileUpload.return.link",
    "$href": "module:uiServices.fileUpload#return#link",
    "$id": "T000002R000116"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "directive"
      ]
    },
    "name": "heatMapRadius",
    "memberof": "module:uiServices",
    "description": "<p>On radius change, new heatMap radius is been applied to the map.</p>",
    "requires": [
      "module:heatMap+module:mapModule.heatMap",
      "module:timeline+module:mapModule.timeline"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.heatMapRadius",
    "jsConcept": true,
    "$href": "module:uiServices.heatMapRadius",
    "$id": "T000002R000130"
  },
  {
    "kind": "function",
    "name": "anonymous",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "scope"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "el"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "attr"
      }
    ],
    "memberof": "module:uiServices.heatMapRadius",
    "scope": "static",
    "longname": "module:uiServices.heatMapRadius.anonymous",
    "$href": "module:uiServices.heatMapRadius#anonymous",
    "$id": "T000002R000131"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.heatMapRadius.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapRadius.anonymous.scope",
    "$href": "module:uiServices.heatMapRadius.anonymous.scope",
    "$id": "T000002R000133"
  },
  {
    "kind": "event",
    "name": "$watch",
    "type": {
      "names": [
        "listener"
      ]
    },
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "heatMapRadius"
      }
    ],
    "memberof": "module:uiServices.heatMapRadius.anonymous.scope",
    "description": "<p>When heatmap radius changes, <code>heatMap.setRadius</code> API service is been used to apply new radius to the map.</p>\n<p>If timeline is on,  <code>timeline.bindMaptoTimeline</code> API service is been used to apply new radius to the map timeline.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapRadius.anonymous.scope.event:$watch",
    "$href": "module:uiServices.heatMapRadius.anonymous.scope#$watch",
    "$id": "T000002R000134"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.heatMapRadius",
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        }
      }
    ],
    "description": "<p>Wired with  <code> mapcontrols</code> Object: <code>'='</code></p>\n<p>Type: <code>HTML-Attribute</code></p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapRadius.return",
    "$href": "module:uiServices.heatMapRadius#return",
    "$id": "T000002R000135"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "directive"
      ]
    },
    "name": "kmlLayer",
    "memberof": "module:uiServices",
    "description": "<p>Sets kml Layer on the map.</p>",
    "requires": [
      "module:kmlLayer+module:mapModule.kmlLayer"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.kmlLayer",
    "jsConcept": true,
    "$href": "module:uiServices.kmlLayer",
    "$id": "T000002R000140"
  },
  {
    "kind": "function",
    "name": "anonymous",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "scope"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "el"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "attr"
      }
    ],
    "memberof": "module:uiServices.kmlLayer",
    "description": "<p>Watching <code>map</code></p>",
    "scope": "static",
    "longname": "module:uiServices.kmlLayer.anonymous",
    "$href": "module:uiServices.kmlLayer#anonymous",
    "$id": "T000002R000141"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.kmlLayer.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.kmlLayer.anonymous.scope",
    "$href": "module:uiServices.kmlLayer.anonymous.scope",
    "$id": "T000002R000143"
  },
  {
    "kind": "event",
    "name": "$watch",
    "type": {
      "names": [
        "Object"
      ]
    },
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "kmlLayer"
      }
    ],
    "memberof": "module:uiServices.kmlLayer.anonymous.scope",
    "description": "<p>When a kml layer is selected from UI, <code>kmlLayer.set</code> API service is been used to apply the new kml to the map.</p>",
    "scope": "static",
    "longname": "module:uiServices.kmlLayer.anonymous.scope.event:$watch",
    "$href": "module:uiServices.kmlLayer.anonymous.scope#$watch",
    "$id": "T000002R000144"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.kmlLayer",
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        }
      }
    ],
    "description": "<p>Wired with  <code> mapcontrols</code> Object: <code>'='</code></p>\n<p>Type: <code>HTML-Attribute</code></p>",
    "scope": "static",
    "longname": "module:uiServices.kmlLayer.return",
    "$href": "module:uiServices.kmlLayer#return",
    "$id": "T000002R000145"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "directive"
      ]
    },
    "name": "publish",
    "memberof": "module:uiServices",
    "description": "<p>Produce a URL with nesesacry variables for embading the custom map into iframe and makes the URL availiable to the USER by trigering and populating a modal window.</p>",
    "requires": [
      "module:popUp+module:uiServices.popUp",
      "module:errorHandler+module:mapModule.errorHandler",
      "module:modelBuilder+module:uiServices.modelBuilder"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.publish",
    "jsConcept": true,
    "$href": "module:uiServices.publish",
    "$id": "T000002R000150"
  },
  {
    "kind": "function",
    "name": "anonymous",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "scope"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "el"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "attr"
      }
    ],
    "memberof": "module:uiServices.publish",
    "description": "<p>Watching <code>map</code></p>",
    "scope": "static",
    "longname": "module:uiServices.publish.anonymous",
    "$href": "module:uiServices.publish#anonymous",
    "$id": "T000002R000151"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.publish.anonymous",
    "classdesc": "<p>Directive's local scope: <code>mapcontrols</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.publish.anonymous.scope",
    "$href": "module:uiServices.publish.anonymous.scope",
    "$id": "T000002R000153"
  },
  {
    "tags": [
      {
        "originalTitle": "memeber",
        "title": "memeber",
        "text": ""
      }
    ],
    "name": "publish",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:uiServices.publish.anonymous.scope",
    "description": "<p>Filter's the attributes of  <code>mapcontrols.settings</code> Object to cretae a url with nesesacry variables by for embading the map into iframe.</p>\n<p>Use of <code>errorHandler.settingsParseJson</code> API service to validate that the produced json,</p>\n<p>that was produced by the filtering the   <code>mapcontrols.settings</code> is valid, so as to be stringnified to produce the final  URL  </p>\n<p>Use of <code> popUp.populate</code> API service to make availiable the URL to the  USER throught modal window.</p>",
    "scope": "static",
    "longname": "module:uiServices.publish.anonymous.scope.publish",
    "kind": "member",
    "$href": "module:uiServices.publish.anonymous.scope#publish",
    "$id": "T000002R000154"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.publish",
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        }
      }
    ],
    "description": "<p>Wired with:\n<code> mapcontrols</code> Object: <code>'='</code>\n<code> urlVariables</code> Object: <code>'='</code></p>\n<p>Type: <code>HTML-Attribute</code></p>",
    "scope": "static",
    "longname": "module:uiServices.publish.return",
    "$href": "module:uiServices.publish#return",
    "$id": "T000002R000156"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "factory"
      ]
    },
    "name": "authService",
    "memberof": "module:authModule",
    "description": "<p>Singleton with a closure that implemets user authentication.</p>",
    "requires": [
      "module:$http",
      "module:AUTH_EVENTS+module:authModule.AUTH_EVENTS",
      "module:Session+module:authModule.Session"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:authModule.authService",
    "jsConcept": true,
    "$href": "module:authModule.authService",
    "$id": "T000002R000164"
  },
  {
    "kind": "class",
    "name": "auth",
    "memberof": "module:authModule.authService",
    "classdesc": "<p>Encapulates user authenticantion functionality</p>",
    "scope": "static",
    "longname": "module:authModule.authService.auth",
    "$href": "module:authModule.authService.auth",
    "$id": "T000002R000165"
  },
  {
    "kind": "member",
    "name": "authenticatited",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:authModule.authService.auth",
    "description": "<p>Default value: auth-not-authenticated.</p>",
    "scope": "static",
    "longname": "module:authModule.authService.auth.authenticatited",
    "$href": "module:authModule.authService.auth#authenticatited",
    "$id": "T000002R000167"
  },
  {
    "kind": "member",
    "name": "user",
    "memberof": "module:authModule.authService.auth",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "credentials"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "XMLHttpRequest"
          ]
        }
      }
    ],
    "description": "<p>$http request to check user credentials on success sets user session with the recived user data.\nMothd is been invocted from <a href=\"#!/module:authModule.authService\"><code>login(credentials)</code></a></p>",
    "scope": "static",
    "longname": "module:authModule.authService.auth.user",
    "$href": "module:authModule.authService.auth#user",
    "$id": "T000002R000169"
  },
  {
    "kind": "member",
    "name": "setAuthentication",
    "memberof": "module:authModule.authService.auth",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "status"
      }
    ],
    "description": "<p>Setter for  <a href=\"#!/module:authModule.authService.auth\"><code>authenticatited</code></a></p>",
    "scope": "static",
    "longname": "module:authModule.authService.auth.setAuthentication",
    "$href": "module:authModule.authService.auth#setAuthentication",
    "$id": "T000002R000171"
  },
  {
    "kind": "function",
    "name": "login",
    "memberof": "module:authModule.authService",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "credentials"
      }
    ],
    "access": "public",
    "scope": "static",
    "returns": [
      {
        "type": {
          "names": [
            "xhttprequest"
          ]
        }
      }
    ],
    "description": "<p>Triger user authentication promise using <a href=\"#!/module:authModule.authService.auth\"><code>auth.user(credentials)</code></a>.</p>",
    "longname": "module:authModule.authService.login",
    "$href": "module:authModule.authService#login",
    "$id": "T000002R000174"
  },
  {
    "kind": "function",
    "name": "isAuthenticated",
    "memberof": "module:authModule.authService",
    "access": "public",
    "scope": "static",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Sting"
          ]
        },
        "description": "<p>authentication status.</p>"
      }
    ],
    "description": "<p>Returns status of authentication.</p>",
    "longname": "module:authModule.authService.isAuthenticated",
    "$href": "module:authModule.authService#isAuthenticated",
    "$id": "T000002R000176"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "filter"
      ]
    },
    "name": "halfFilter",
    "memberof": "module:uiServices",
    "description": "<p>Do somthing.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.halfFilter",
    "jsConcept": true,
    "$href": "module:uiServices.halfFilter",
    "$id": "T000002R000178"
  },
  {
    "kind": "function",
    "name": "anonymous",
    "memberof": "module:uiServices.halfFilter",
    "access": "public",
    "scope": "static",
    "params": [
      {
        "type": {
          "names": [
            "Float"
          ]
        },
        "name": "input"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Float"
          ]
        },
        "description": "<p>return half value.</p>"
      }
    ],
    "description": "<p>Returns status of authentication.</p>",
    "longname": "module:uiServices.halfFilter.anonymous",
    "$href": "module:uiServices.halfFilter#anonymous",
    "$id": "T000002R000179"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      },
      {
        "originalTitle": "variable",
        "title": "variable",
        "text": "authModule",
        "value": "authModule"
      }
    ],
    "kind": "module",
    "name": "authModule",
    "access": "public",
    "scope": "static",
    "description": "<p>Contains user authentication services.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:authModule",
    "$href": "module:authModule",
    "$id": "T000002R000180"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      },
      {
        "originalTitle": "variable",
        "title": "variable",
        "text": "uiServices",
        "value": "uiServices"
      }
    ],
    "kind": "module",
    "name": "uiServices",
    "access": "public",
    "scope": "static",
    "description": "<p>Conetains User Interface Services.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:uiServices",
    "$href": "module:uiServices",
    "$id": "T000002R000182"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "service"
      ]
    },
    "name": "UiAnimation",
    "memberof": "module:uiServices",
    "description": "<p>Custom implementation of Jquery animate.</p>",
    "requires": [
      "module:$interval"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.UiAnimation",
    "jsConcept": true,
    "$href": "module:uiServices.UiAnimation",
    "$id": "T000002R000184"
  },
  {
    "kind": "class",
    "name": "UiAnimation",
    "memberof": "module:uiServices.UiAnimation",
    "classdesc": "<p>Encapulates animation functionality</p>",
    "scope": "static",
    "longname": "module:uiServices.UiAnimation.UiAnimation",
    "$href": "module:uiServices.UiAnimation.UiAnimation",
    "$id": "T000002R000185"
  },
  {
    "kind": "member",
    "scope": "instance",
    "name": "calulateVelocity",
    "memberof": "module:uiServices.UiAnimation.UiAnimation",
    "tags": [
      {
        "originalTitle": "puplic",
        "title": "puplic",
        "text": ""
      }
    ],
    "params": [
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "cssCurrentValue"
      },
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "endingCssValue"
      },
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "step"
      },
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "animationSpeed"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        }
      }
    ],
    "description": "<p>Calculates the velocity of the animation for its $interval iteration:</p>\n<ul>\n<li><p>Calculate the scale between the initial and the ending css value according to a given offset (step), by divading the given offset (step) with the resulted CSS value from the INCREASED/DECRESED operation</p>\n</li>\n<li><p>Calculates the animation velocity by divading  the animationSpeed with the scale</p>\n</li>\n</ul>",
    "longname": "module:uiServices.UiAnimation.UiAnimation#calulateVelocity",
    "$href": "module:uiServices.UiAnimation.UiAnimation#calulateVelocity",
    "$id": "T000002R000186"
  },
  {
    "kind": "member",
    "scope": "instance",
    "name": "operation",
    "memberof": "module:uiServices.UiAnimation.UiAnimation",
    "tags": [
      {
        "originalTitle": "puplic",
        "title": "puplic",
        "text": ""
      }
    ],
    "params": [
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "cssCurrentValue"
      },
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "endingCssValue"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        }
      }
    ],
    "description": "<p>Determines what operation will be applied to the CSS values :  accending or descending the values</p>",
    "longname": "module:uiServices.UiAnimation.UiAnimation#operation",
    "$href": "module:uiServices.UiAnimation.UiAnimation#operation",
    "$id": "T000002R000188"
  },
  {
    "kind": "member",
    "scope": "instance",
    "name": "linear",
    "memberof": "module:uiServices.UiAnimation.UiAnimation",
    "tags": [
      {
        "originalTitle": "puplic",
        "title": "puplic",
        "text": ""
      }
    ],
    "params": [
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "cssCurrentValue"
      },
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "endingCssValue"
      },
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "step"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "cssAttribute"
      },
      {
        "type": {
          "names": [
            "DOMElement"
          ]
        },
        "name": "targetElement"
      },
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "animationSpeed"
      }
    ],
    "description": "<p>Trigers a linear animation by invocing:</p>\n<ul>\n<li><p><code>operation</code></p>\n</li>\n<li><p><code>velocity</code></p>\n</li>\n<li><p>Assign $interval function to <code>inisiate</code> :</p>\n</li>\n</ul>\n<blockquote>\n<p>$interval function  will make itteration throught time by doing:</p>\n<ul>\n<li>INCREASE or DECREASE a given CSS attribute by a give value called <code>step</code> up untill it reach a given ending value</li>\n<li><p>Assign the value new CSS value to a given DOMElement</p>\n</li>\n<li><p>CHECK if interval should be cancelled by compering the new CSS value with the given ending value</p>\n</li>\n</ul>\n</blockquote>",
    "longname": "module:uiServices.UiAnimation.UiAnimation#linear",
    "$href": "module:uiServices.UiAnimation.UiAnimation#linear",
    "$id": "T000002R000190"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "angular",
        "value": "angular"
      }
    ],
    "kind": "module",
    "type": {
      "names": [
        "Service"
      ]
    },
    "name": "Session",
    "memberof": "module:authModule",
    "requires": [
      "module:$http"
    ],
    "description": "<p>Stores user data by returning in an  instance of the function object.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:authModule.Session",
    "jsConcept": true,
    "$href": "module:authModule.Session",
    "$id": "T000002R000200"
  },
  {
    "kind": "class",
    "name": "Session",
    "memberof": "module:authModule.Session",
    "classdesc": "<p>Stores user data by returning in an  instance of the function object.</p>",
    "scope": "static",
    "longname": "module:authModule.Session.Session",
    "$href": "module:authModule.Session.Session",
    "$id": "T000002R000201"
  },
  {
    "scope": "instance",
    "name": "name",
    "access": "public",
    "type": {
      "names": [
        "string"
      ]
    },
    "memberof": "module:authModule.Session.Session",
    "longname": "module:authModule.Session.Session#name",
    "kind": "member",
    "$href": "module:authModule.Session.Session#name",
    "$id": "T000002R000202"
  },
  {
    "scope": "instance",
    "name": "pass",
    "access": "public",
    "type": {
      "names": [
        "string"
      ]
    },
    "memberof": "module:authModule.Session.Session",
    "longname": "module:authModule.Session.Session#pass",
    "kind": "member",
    "$href": "module:authModule.Session.Session#pass",
    "$id": "T000002R000204"
  },
  {
    "scope": "instance",
    "name": "token",
    "access": "public",
    "type": {
      "names": [
        "string"
      ]
    },
    "memberof": "module:authModule.Session.Session",
    "longname": "module:authModule.Session.Session#token",
    "kind": "member",
    "$href": "module:authModule.Session.Session#token",
    "$id": "T000002R000206"
  },
  {
    "scope": "instance",
    "name": "projects",
    "access": "public",
    "type": {
      "names": [
        "object"
      ]
    },
    "memberof": "module:authModule.Session.Session",
    "longname": "module:authModule.Session.Session#projects",
    "kind": "member",
    "$href": "module:authModule.Session.Session#projects",
    "$id": "T000002R000208"
  },
  {
    "kind": "member",
    "memberof": "module:authModule.Session.Session",
    "name": "create",
    "access": "public",
    "scope": "instance",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "userName"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "userPass"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "userToken"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "userProjects"
      }
    ],
    "description": "<p>Sets user credeltials.</p>",
    "longname": "module:authModule.Session.Session#create",
    "$href": "module:authModule.Session.Session#create",
    "$id": "T000002R000210"
  },
  {
    "kind": "member",
    "memberof": "module:authModule.Session.Session",
    "name": "destroy",
    "access": "public",
    "scope": "instance",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "description": "<p>Destroy user credentials, sets data to null.</p>",
    "longname": "module:authModule.Session.Session#destroy",
    "$href": "module:authModule.Session.Session#destroy",
    "$id": "T000002R000216"
  },
  {
    "tags": [
      {
        "originalTitle": "framework",
        "title": "framework",
        "text": "jQuery",
        "value": "jQuery"
      },
      {
        "originalTitle": "variable",
        "title": "variable",
        "text": "basicResposiveCarousel",
        "value": "basicResposiveCarousel"
      }
    ],
    "kind": "module",
    "name": "basicResposiveCarousel",
    "description": "<p>responsive Carousel</p>",
    "access": "public",
    "scope": "static",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:basicResposiveCarousel",
    "$href": "module:basicResposiveCarousel",
    "$id": "T000002R000222"
  },
  {
    "kind": "module",
    "type": {
      "names": [
        "native"
      ]
    },
    "name": "anonymous",
    "memberof": "module:basicResposiveCarousel",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous",
    "jsConcept": true,
    "$href": "module:basicResposiveCarousel.anonymous",
    "$id": "T000002R000224"
  },
  {
    "kind": "class",
    "name": "rCarousel",
    "memberof": "module:basicResposiveCarousel.anonymous",
    "classdesc": "<p>Non responsive Implementation</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel",
    "$id": "T000002R000225"
  },
  {
    "kind": "member",
    "name": "carouselUlLiLast",
    "type": {
      "names": [
        "Object"
      ]
    },
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel",
    "description": "<p>carousel Ul Li Last</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.carouselUlLiLast",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel#carouselUlLiLast",
    "$id": "T000002R000227"
  },
  {
    "kind": "member",
    "name": "animationVelocity",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel",
    "description": "<p>animationVelocity</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.animationVelocity",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel#animationVelocity",
    "$id": "T000002R000229"
  },
  {
    "kind": "member",
    "name": "timeout",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel",
    "description": "<p>timeout</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.timeout",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel#timeout",
    "$id": "T000002R000231"
  },
  {
    "kind": "event",
    "name": "clickPrev",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel",
    "description": "<p>click Prev Button</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.event:clickPrev",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel#clickPrev",
    "$id": "T000002R000233"
  },
  {
    "kind": "event",
    "name": "windowResize",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel",
    "description": "<p>windowResize recalculate dimentions and margins</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.event:windowResize",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel#windowResize",
    "$id": "T000002R000235"
  },
  {
    "kind": "event",
    "name": "clickNext",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel",
    "description": "<p>click Next</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.event:clickNext",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel#clickNext",
    "$id": "T000002R000237"
  },
  {
    "kind": "function",
    "name": "executeNextSlide",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel",
    "description": "<p>execute Next Slide</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.executeNextSlide",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel#executeNextSlide",
    "$id": "T000002R000239"
  },
  {
    "kind": "function",
    "name": "executePrevSlide",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel",
    "description": "<p>execute Prev Slide</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.executePrevSlide",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel#executePrevSlide",
    "$id": "T000002R000242"
  },
  {
    "kind": "class",
    "name": "setCarouselLiDim",
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel",
    "classdesc": "<p>set Carousel Li Dimention</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim",
    "$id": "T000002R000245"
  },
  {
    "kind": "class",
    "name": "testClass",
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim",
    "classdesc": "<p>test inner class</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass",
    "$id": "T000002R000247"
  },
  {
    "kind": "member",
    "name": "attr1",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass",
    "description": "<p>test desc for attr1</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass.attr1",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass#attr1",
    "$id": "T000002R000249"
  },
  {
    "kind": "member",
    "name": "attr2",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass",
    "description": "<p>test desc for attr2</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass.attr2",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass#attr2",
    "$id": "T000002R000251"
  },
  {
    "kind": "member",
    "name": "memberFunction",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        }
      }
    ],
    "memberof": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass",
    "description": "<p>test inner function desc</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass.memberFunction",
    "$href": "module:basicResposiveCarousel.anonymous.rCarousel.setCarouselLiDim.testClass#memberFunction",
    "$id": "T000002R000253"
  },
  {
    "kind": "function",
    "name": "isFirst",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:basicResposiveCarousel.rCarousel",
    "description": "<p>is First</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.rCarousel.isFirst",
    "$href": "#isFirst",
    "$id": "T000002R000255"
  },
  {
    "kind": "function",
    "name": "return",
    "returns": [
      {
        "description": "<p>Object</p>"
      }
    ],
    "memberof": "module:basicResposiveCarousel.anonymous",
    "description": "<p>carousel</p>",
    "scope": "static",
    "longname": "module:basicResposiveCarousel.anonymous.return",
    "$href": "module:basicResposiveCarousel.anonymous#return",
    "$id": "T000002R000257"
  }
]);})();