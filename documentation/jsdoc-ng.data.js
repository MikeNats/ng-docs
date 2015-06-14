(function() {angular.module('jsDocNG-Data', []).constant('$title',   "Maps App API").constant('$readme',  '').constant('$doclets', [
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
    "description": "<p>Custom implementation of Jquery animate.</p>",
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
    "properties": [
      null
    ],
    "name": "$state",
    "memberof": "module:app.run.$rootScope",
    "access": "public",
    "description": "<p>Makes availiable <code>$state</code> to the hole App.</p>",
    "scope": "static",
    "longname": "module:app.run.$rootScope.$state",
    "kind": "member",
    "$href": "module:app.run.$rootScope#$state",
    "$id": "T000002R000011"
  },
  {
    "kind": "event",
    "name": "$on",
    "type": {
      "names": [
        "$stateChangeStart"
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
    "longname": "module:app.run.$rootScope.event:$on",
    "$href": "module:app.run.$rootScope#$on",
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
    "name": "$on",
    "type": {
      "names": [
        "$stateChangeSuccess"
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
    "longname": "module:app.run.$rootScope.event:$on",
    "$href": "module:app.run.$rootScope#$on",
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
    "description": "<p>App state are been decreared</p>",
    "examples": [
      "-\n   /////////////////////////////\n   // Redirects and Otherwise //\n   /////////////////////////////\n\n   $urlRouterProvider.otherwise('/index');\n\n   //////////////////////////\n   // State Configurations //\n   //////////////////////////\n\n   // Home //\n   $stateProvider.state(\"index\", {\n   \n       url: \"/index\",\n       templateUrl: 'views/logInTemplate.html',\n       data : { requireLogin : false}\n\n   }).state(\"createdit\", {\n   \n       url: \"/createdit\",\n       views: {\n           \"userView\": { templateUrl: \"views/userTemplate.html\" },\n           \"createEditProjectView\": { templateUrl: \"views/createEditTemplate.html\" }\n       },\n       data : { requireLogin : true}\n\n   }).state(\"createproject\", {\n   \n       url: \"/createproject\",\n       views: {\n           \"navView\": { templateUrl: \"views/navTemplate.html\" },\n           \"userView\": { templateUrl: \"views/userTemplate.html\" },\n           \"createProjectView\": { templateUrl: \"views/createProjectTemplate.html\" }\n       },\n       data : { requireLogin : true}\n\n   }).state(\"editproject\", {\n       url: \"/editproject\",\n       views: {\n           \"navView\": { templateUrl: \"views/navTemplate.html\" },\n           \"userView\": { templateUrl: \"views/userTemplate.html\" },\n           \"editProjectView\": { templateUrl: \"views/editProjectTemplate.html\" }\n       },\n       data : {requireLogin : true}\n\n   }).state(\"customap\", {\n       url: \"/customap/path\",\n       views: {\n           \"navView\": { templateUrl: \"views/navTemplate.html\" },\n           \"userView\": { templateUrl: \"views/userTemplate.html\" },\n           \"mapView\": { templateUrl: \"views/mapTemplate.html\" }\n       },\n       data : {requireLogin : true}\n\n   }).state(\"map\", {\n       url: \"/map/path\",\n       templateUrl: 'views/viewMapTemplate.html',\n       data : {requireLogin : false}\n   });"
    ],
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
    "$id": "T000002R000064"
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
    "$id": "T000002R000066"
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
    "$id": "T000002R000067"
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
    "$id": "T000002R000069"
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
    "$id": "T000002R000071"
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
    "$id": "T000002R000073"
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
    "$id": "T000002R000075"
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
    "$id": "T000002R000077"
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
    "$id": "T000002R000079"
  },
  {
    "kind": "class",
    "name": "auth",
    "memberof": "module:authModule.authService",
    "classdesc": "<p>Encapulates user authenticantion functionality</p>",
    "scope": "static",
    "longname": "module:authModule.authService.auth",
    "$href": "module:authModule.authService.auth",
    "$id": "T000002R000080"
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
    "$id": "T000002R000082"
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
    "description": "<p>$http request to check user credentials on success sets user session with the recived user data.</p>\n<p>Mothd is been invocted from <a href=\"#!/module:authModule.authService\"><code>login(credentials)</code></a></p>",
    "scope": "static",
    "longname": "module:authModule.authService.auth.user",
    "$href": "module:authModule.authService.auth#user",
    "$id": "T000002R000085"
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
    "$id": "T000002R000087"
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
    "$id": "T000002R000090"
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
    "$id": "T000002R000092"
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
    "$id": "T000002R000094"
  },
  {
    "kind": "class",
    "name": "Session",
    "memberof": "module:authModule.Session",
    "classdesc": "<p>Stores user data by returning in an  instance of the function object.</p>",
    "scope": "static",
    "longname": "module:authModule.Session.Session",
    "$href": "module:authModule.Session.Session",
    "$id": "T000002R000095"
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
    "$id": "T000002R000096"
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
    "$id": "T000002R000098"
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
    "$id": "T000002R000100"
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
    "$id": "T000002R000102"
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
    "$id": "T000002R000104"
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
    "$id": "T000002R000110"
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
        "controller"
      ]
    },
    "name": "createEditController",
    "memberof": "module:uiServices",
    "description": "<p>Redirect  to createproject or editproject template.</p>",
    "requires": [
      "module:$scope",
      "module:$location",
      "module:Session+module:authModule.Session"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.createEditController",
    "jsConcept": true,
    "$href": "module:uiServices.createEditController",
    "$id": "T000002R000118"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.createEditController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.createEditController.$scope",
    "$href": "module:uiServices.createEditController.$scope",
    "$id": "T000002R000119"
  },
  {
    "kind": "class",
    "name": "project",
    "memberof": "module:uiServices.createEditController.$scope",
    "classdesc": "<p>Object attached to controllers <a href=\"#!/module:uiServices.createEditController\"><code>$scope</code></a>.</p>\n<p>Encapsulates redirect functionality.</p>",
    "scope": "static",
    "longname": "module:uiServices.createEditController.$scope.project",
    "$href": "module:uiServices.createEditController.$scope.project",
    "$id": "T000002R000120"
  },
  {
    "kind": "member",
    "name": "create",
    "memberof": "module:uiServices.createEditController.$scope.project",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "description": "<p>Redirects to <code>createproject</code> template by using <code>$location</code> service.</p>",
    "scope": "static",
    "longname": "module:uiServices.createEditController.$scope.project.create",
    "$href": "module:uiServices.createEditController.$scope.project#create",
    "$id": "T000002R000122"
  },
  {
    "kind": "member",
    "name": "edit",
    "memberof": "module:uiServices.createEditController.$scope.project",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "description": "<p>Redirects to <code>editproject</code> template by using <code>$location</code> service.</p>",
    "scope": "static",
    "longname": "module:uiServices.createEditController.$scope.project.edit",
    "$href": "module:uiServices.createEditController.$scope.project#edit",
    "$id": "T000002R000124"
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
    "name": "editProjectController",
    "memberof": "module:uiServices",
    "description": "<p>Gets userData from Session service and makes it availiable to the <code>editProjectView</code>.</p>",
    "requires": [
      "module:$scope",
      "module:Session+module:authModule.Session"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.editProjectController",
    "jsConcept": true,
    "$href": "module:uiServices.editProjectController",
    "$id": "T000002R000126"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.editProjectController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.editProjectController.$scope",
    "$href": "module:uiServices.editProjectController.$scope",
    "$id": "T000002R000127"
  },
  {
    "kind": "member",
    "name": "userData",
    "type": {
      "names": [
        "array"
      ]
    },
    "memberof": "module:uiServices.editProjectController.$scope",
    "description": "<p>Array of objects attached to controllers <a href=\"#!/module:uiServices.editProjectController\"><code>$scope</code></a>. </p>\n<p>Encapsulates  user projects data by storing projects data using <a href=\"#!/module:authModule.Session\"><code>Session.projects</code></a></p>",
    "scope": "static",
    "longname": "module:uiServices.editProjectController.$scope.userData",
    "$href": "module:uiServices.editProjectController.$scope#userData",
    "$id": "T000002R000128"
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
    "name": "logInController",
    "memberof": "module:uiServices",
    "description": "<p>Triger auth, on success redirects to createdit template.</p>",
    "requires": [
      "module:$scope",
      "module:$location",
      "module:authService+module:authModule.authService"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.logInController",
    "jsConcept": true,
    "$href": "module:uiServices.logInController",
    "$id": "T000002R000130"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.logInController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.logInController.$scope",
    "$href": "module:uiServices.logInController.$scope",
    "$id": "T000002R000131"
  },
  {
    "kind": "class",
    "name": "credentials",
    "memberof": "module:uiServices.logInController.$scope",
    "classdesc": "<p>Object attached to controllers <a href=\"#!/module:uiServices.logInController\"><code>$scope</code></a>.</p>\n<p>Encapsulates  credentials and login function.</p>",
    "scope": "static",
    "longname": "module:uiServices.logInController.$scope.credentials",
    "$href": "module:uiServices.logInController.$scope.credentials",
    "$id": "T000002R000132"
  },
  {
    "properties": [
      {
        "name": "userName"
      }
    ],
    "memberof": "module:uiServices.logInController.$scope.credentials",
    "description": "<p>Encapsulates userName, provided from the view.</p>",
    "name": "userName",
    "longname": "module:uiServices.logInController.$scope.credentials.userName",
    "kind": "member",
    "scope": "static",
    "$href": "module:uiServices.logInController.$scope.credentials#userName",
    "$id": "T000002R000134"
  },
  {
    "properties": [
      {
        "name": "password"
      }
    ],
    "memberof": "module:uiServices.logInController.$scope.credentials",
    "description": "<p>Encapsulates password, provided from the view.</p>",
    "name": "password",
    "longname": "module:uiServices.logInController.$scope.credentials.password",
    "kind": "member",
    "scope": "static",
    "$href": "module:uiServices.logInController.$scope.credentials#password",
    "$id": "T000002R000135"
  },
  {
    "kind": "member",
    "name": "login",
    "memberof": "module:uiServices.logInController.$scope.credentials",
    "params": [
      {
        "type": {
          "names": [
            "object"
          ]
        },
        "name": "credentials"
      }
    ],
    "description": "<p>Xhttprequest using <a href=\"#!/module:authModule.authService\"><code>authService.login(credentials)</code></a> </p>\n<p>Trigers authentication functionality. On success redirects to <code>createdit</code> template</p>",
    "scope": "static",
    "longname": "module:uiServices.logInController.$scope.credentials.login",
    "$href": "module:uiServices.logInController.$scope.credentials#login",
    "$id": "T000002R000136"
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
    "$id": "T000002R000138"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.mainAppController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope",
    "$href": "module:uiServices.mainAppController.$scope",
    "$id": "T000002R000139"
  },
  {
    "kind": "class",
    "name": "header",
    "memberof": "module:uiServices.mainAppController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.mainAppController\"><code>$scope</code></a>. </p>\n<p>Encapsulates  Header visibility.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.header",
    "$href": "module:uiServices.mainAppController.$scope.header",
    "$id": "T000002R000140"
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
    "$id": "T000002R000142"
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
    "$id": "T000002R000144"
  },
  {
    "kind": "class",
    "name": "popUp",
    "memberof": "module:uiServices.mainAppController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.mainAppController\"><code>$scope</code></a>. </p>\n<p>Encapsulates  Modal Window.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.popUp",
    "$href": "module:uiServices.mainAppController.$scope.popUp",
    "$id": "T000002R000148"
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
    "$id": "T000002R000150"
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
    "name": "mapUiController",
    "memberof": "module:uiServices",
    "description": "<p>Controls Accordeon of ui.</p>",
    "requires": [
      "module:$scope"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.mapUiController",
    "jsConcept": true,
    "$href": "module:uiServices.mapUiController",
    "$id": "T000002R000152"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.mapUiController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.mapUiController.$scope",
    "$href": "module:uiServices.mapUiController.$scope",
    "$id": "T000002R000153"
  },
  {
    "kind": "class",
    "name": "accordeon",
    "memberof": "module:uiServices.mapUiController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.mapUiController\"><code>$scope</code></a>. </p>\n<p>Encapsulates Accordeon Functionality in <code>mapView</code> template.</p>",
    "scope": "static",
    "longname": "module:uiServices.mapUiController.$scope.accordeon",
    "$href": "module:uiServices.mapUiController.$scope.accordeon",
    "$id": "T000002R000154"
  },
  {
    "kind": "member",
    "name": "activeTab",
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
    "memberof": "module:uiServices.mapUiController.$scope.accordeon",
    "description": "<p>toggle's colapse class to the  clicked  DOMElement.</p>",
    "scope": "static",
    "longname": "module:uiServices.mapUiController.$scope.accordeon.activeTab",
    "$href": "module:uiServices.mapUiController.$scope.accordeon#activeTab",
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
        "controller"
      ]
    },
    "name": "navController",
    "memberof": "module:uiServices",
    "description": "<p>Controls Back Button (top left on the header).</p>",
    "requires": [
      "module:$scope",
      "module:$location"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.navController",
    "jsConcept": true,
    "$href": "module:uiServices.navController",
    "$id": "T000002R000158"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.navController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.navController.$scope",
    "$href": "module:uiServices.navController.$scope",
    "$id": "T000002R000159"
  },
  {
    "kind": "class",
    "name": "back",
    "memberof": "module:uiServices.navController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.navController\"><code>$scope</code></a>. </p>\n<p>Encapsulates  Back button functionality.</p>",
    "scope": "static",
    "longname": "module:uiServices.navController.$scope.back",
    "$href": "module:uiServices.navController.$scope.back",
    "$id": "T000002R000160"
  },
  {
    "kind": "member",
    "name": "go",
    "params": [
      {
        "name": "no-argument"
      }
    ],
    "memberof": "module:uiServices.navController.$scope.back",
    "description": "<p>Redirect's to <code>createdit</code> template </p>\n<p>Using <code>$location</code> service</p>",
    "scope": "static",
    "longname": "module:uiServices.navController.$scope.back.go",
    "$href": "module:uiServices.navController.$scope.back#go",
    "$id": "T000002R000162"
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
    "name": "userController",
    "memberof": "module:uiServices",
    "description": "<p>Controls the data that are appended and the functionality on navigation item  at the top right on of the header.</p>",
    "requires": [
      "module:$scope",
      "module:$location",
      "module:Session+module:authModule.uiServices.Session"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.userController",
    "jsConcept": true,
    "$href": "module:uiServices.userController",
    "$id": "T000002R000164"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.userController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.userController.$scope",
    "$href": "module:uiServices.userController.$scope",
    "$id": "T000002R000165"
  },
  {
    "kind": "class",
    "name": "user",
    "memberof": "module:uiServices.userController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.userController\"><code>$scope</code></a>. </p>\n<p>Encapsulates  Header visibility.</p>",
    "scope": "static",
    "longname": "module:uiServices.userController.$scope.user",
    "$href": "module:uiServices.userController.$scope.user",
    "$id": "T000002R000166"
  },
  {
    "kind": "member",
    "name": "name",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.userController.$scope.user",
    "description": "<p>Stores User Name using <code>Session</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.userController.$scope.user.name",
    "$href": "module:uiServices.userController.$scope.user#name",
    "$id": "T000002R000168"
  },
  {
    "kind": "member",
    "name": "panel",
    "memberof": "module:uiServices.userController.$scope.user",
    "params": [
      {
        "name": "no-argument"
      }
    ],
    "description": "<p>Use's <code>$location</code> to redirects to <code>editproject</code> template.</p>",
    "scope": "static",
    "longname": "module:uiServices.userController.$scope.user.panel",
    "$href": "module:uiServices.userController.$scope.user#panel",
    "$id": "T000002R000170"
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
    "name": "heatMapOpacity",
    "memberof": "module:uiServices",
    "description": "<p>On heatmap opacity change, new heatMap opacity is been applied to the map.</p>",
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
    "longname": "module:uiServices.heatMapOpacity",
    "jsConcept": true,
    "$href": "module:uiServices.heatMapOpacity",
    "$id": "T000002R000172"
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
    "memberof": "module:uiServices.heatMapOpacity",
    "description": "<p>Watching <code>mapcontrols</code></p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapOpacity.anonymous",
    "$href": "module:uiServices.heatMapOpacity#anonymous",
    "$id": "T000002R000173"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.heatMapOpacity.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapOpacity.anonymous.scope",
    "$href": "module:uiServices.heatMapOpacity.anonymous.scope",
    "$id": "T000002R000175"
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
        "name": "heatMapOpacity"
      }
    ],
    "memberof": "module:uiServices.heatMapOpacity.anonymous.scope",
    "description": "<p>When heatmap opacity changes, <code>heatMap.setRadius</code> API service is been used to apply new opacity to the map.</p>\n<p>If timeline is on,  <code>timeline.bindMaptoTimeline</code> API service is been used to apply new opacity to the map timeline.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapOpacity.anonymous.scope.event:$watch",
    "$href": "module:uiServices.heatMapOpacity.anonymous.scope#$watch",
    "$id": "T000002R000176"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.heatMapOpacity",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "longname": "module:uiServices.heatMapOpacity.return",
    "$href": "module:uiServices.heatMapOpacity#return",
    "$id": "T000002R000177"
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
    "$id": "T000002R000182"
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
    "$id": "T000002R000183"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.heatMapRadius.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapRadius.anonymous.scope",
    "$href": "module:uiServices.heatMapRadius.anonymous.scope",
    "$id": "T000002R000185"
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
    "$id": "T000002R000186"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.heatMapRadius",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "$id": "T000002R000187"
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
    "name": "heatMapVisibility",
    "memberof": "module:uiServices",
    "description": "<p>Sets the heatMap  visibility.</p>",
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
    "longname": "module:uiServices.heatMapVisibility",
    "jsConcept": true,
    "$href": "module:uiServices.heatMapVisibility",
    "$id": "T000002R000192"
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
    "memberof": "module:uiServices.heatMapVisibility",
    "description": "<p>Sets the heatMap  visibility.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapVisibility.anonymous",
    "$href": "module:uiServices.heatMapVisibility#anonymous",
    "$id": "T000002R000193"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.heatMapVisibility.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapVisibility.anonymous.scope",
    "$href": "module:uiServices.heatMapVisibility.anonymous.scope",
    "$id": "T000002R000195"
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
        "name": "showHeatMap"
      }
    ],
    "memberof": "module:uiServices.heatMapVisibility.anonymous.scope",
    "description": "<p>When heatmap visibility changes, <code>heatMap.toggleView</code> API service to toggles on/off heatMap.</p>\n<p>If timeline is on,  <code>timeline.bindMaptoTimeline</code> API service is been used to toggles on/off the heatMap to map timeline.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapVisibility.anonymous.scope.event:$watch",
    "$href": "module:uiServices.heatMapVisibility.anonymous.scope#$watch",
    "$id": "T000002R000196"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.heatMapVisibility",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "longname": "module:uiServices.heatMapVisibility.return",
    "$href": "module:uiServices.heatMapVisibility#return",
    "$id": "T000002R000197"
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
    "$id": "T000002R000202"
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
    "$id": "T000002R000203"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.kmlLayer.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.kmlLayer.anonymous.scope",
    "$href": "module:uiServices.kmlLayer.anonymous.scope",
    "$id": "T000002R000205"
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
        "name": "kmlLayer"
      }
    ],
    "memberof": "module:uiServices.kmlLayer.anonymous.scope",
    "description": "<p>When kmkl layer is selected, <code>kmlLayer.set</code> API service is been used to apply new kml to the map.</p>",
    "scope": "static",
    "longname": "module:uiServices.kmlLayer.anonymous.scope.event:$watch",
    "$href": "module:uiServices.kmlLayer.anonymous.scope#$watch",
    "$id": "T000002R000206"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.kmlLayer",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "$id": "T000002R000207"
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
    "name": "setMapPosition",
    "memberof": "module:uiServices",
    "description": "<p>Sets map position.</p>",
    "requires": [
      "module:gMap+module:mapModule.gMap"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.setMapPosition",
    "jsConcept": true,
    "$href": "module:uiServices.setMapPosition",
    "$id": "T000002R000212"
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
    "memberof": "module:uiServices.setMapPosition",
    "scope": "static",
    "longname": "module:uiServices.setMapPosition.anonymous",
    "$href": "module:uiServices.setMapPosition#anonymous",
    "$id": "T000002R000213"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.setMapPosition.anonymous",
    "classdesc": "<p>Directive's local scope: <code>mapcontrols</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.setMapPosition.anonymous.scope",
    "$href": "module:uiServices.setMapPosition.anonymous.scope",
    "$id": "T000002R000215"
  },
  {
    "kind": "member",
    "name": "setMapPosition",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "DOMElement"
      }
    ],
    "memberof": "module:uiServices.setMapPosition.anonymous.scope",
    "description": "<p>Updates  Lat/Lot of the map and to <code>mapcontrols</code> Object according to user interaction with UI.</p>",
    "scope": "static",
    "longname": "module:uiServices.setMapPosition.anonymous.scope.setMapPosition",
    "$href": "module:uiServices.setMapPosition.anonymous.scope#setMapPosition",
    "$id": "T000002R000216"
  },
  {
    "kind": "member",
    "name": "resetPosition",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:uiServices.setMapPosition.anonymous.scope",
    "description": "<p>Resets Lat/Lot of Map using  <code>gMap.reset</code> API service.</p>",
    "scope": "static",
    "longname": "module:uiServices.setMapPosition.anonymous.scope.resetPosition",
    "$href": "module:uiServices.setMapPosition.anonymous.scope#resetPosition",
    "$id": "T000002R000224"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.setMapPosition",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "longname": "module:uiServices.setMapPosition.return",
    "$href": "module:uiServices.setMapPosition#return",
    "$id": "T000002R000226"
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
    "name": "zoomHandler",
    "memberof": "module:uiServices",
    "description": "<p>Sets the zoom level of the map.</p>",
    "requires": [
      "module:gMap+module:mapModule.gMap"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.zoomHandler",
    "jsConcept": true,
    "$href": "module:uiServices.zoomHandler",
    "$id": "T000002R000232"
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
    "memberof": "module:uiServices.zoomHandler",
    "scope": "static",
    "longname": "module:uiServices.zoomHandler.anonymous",
    "$href": "module:uiServices.zoomHandler#anonymous",
    "$id": "T000002R000233"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.zoomHandler.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.zoomHandler.anonymous.scope",
    "$href": "module:uiServices.zoomHandler.anonymous.scope",
    "$id": "T000002R000235"
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
        "name": "zoom"
      }
    ],
    "memberof": "module:uiServices.zoomHandler.anonymous.scope",
    "description": "<p>Updates  zoom of the map and to <code>gMap.set</code> Object according to user interaction with UI.</p>",
    "scope": "static",
    "longname": "module:uiServices.zoomHandler.anonymous.scope.event:$watch",
    "$href": "module:uiServices.zoomHandler.anonymous.scope#$watch",
    "$id": "T000002R000236"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.zoomHandler",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "longname": "module:uiServices.zoomHandler.return",
    "$href": "module:uiServices.zoomHandler#return",
    "$id": "T000002R000237"
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
    "name": "markersVisibility",
    "memberof": "module:uiServices",
    "description": "<p>Toggle map's markers visibility.</p>",
    "requires": [
      "module:markers+module:mapModule.markers",
      "module:timeline+module:mapModule.timeline"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.markersVisibility",
    "jsConcept": true,
    "$href": "module:uiServices.markersVisibility",
    "$id": "T000002R000243"
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
    "memberof": "module:uiServices.markersVisibility",
    "description": "<p>Watching <code>map</code></p>",
    "scope": "static",
    "longname": "module:uiServices.markersVisibility.anonymous",
    "$href": "module:uiServices.markersVisibility#anonymous",
    "$id": "T000002R000244"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.markersVisibility.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.markersVisibility.anonymous.scope",
    "$href": "module:uiServices.markersVisibility.anonymous.scope",
    "$id": "T000002R000246"
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
        "name": "showMarkers"
      }
    ],
    "memberof": "module:uiServices.markersVisibility.anonymous.scope",
    "description": "<p>When user set vissibility of the markers from UI, <code>markers.toggleView</code> API service is been invocted.</p>\n<p>If timeline is on,  <code>timeline.clearTimeMachine</code> API service will be invocted also to rebind the change of the TimLine.</p>",
    "scope": "static",
    "longname": "module:uiServices.markersVisibility.anonymous.scope.event:$watch",
    "$href": "module:uiServices.markersVisibility.anonymous.scope#$watch",
    "$id": "T000002R000247"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.markersVisibility",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "longname": "module:uiServices.markersVisibility.return",
    "$href": "module:uiServices.markersVisibility#return",
    "$id": "T000002R000248"
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
      "module:errorHandler+module:mapModule.errorHandler"
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
    "$id": "T000002R000254"
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
    "$id": "T000002R000255"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.publish.anonymous",
    "classdesc": "<p>Directive's local scope: <code>mapcontrols</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.publish.anonymous.scope",
    "$href": "module:uiServices.publish.anonymous.scope",
    "$id": "T000002R000257"
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
    "description": "<p>Filter's the attributes of  <code>mapcontrols.settings</code> Object to cretae a url with nesesacry variables by for embading the map into iframe.</p>\n<p>Use of <code>errorHandler.settingsParseJson</code> API service to validate that the produced json,</p>\n<p>that was produced by the filtering the   <code>mapcontrols.settings</code> is valid, so as to be stringnified to produce the final  URL  </p>\n<p>Use of <a href=\"#!/module:uiServices.popUp\"><code> popUp.populate</code></a> API service to make availiable the URL to the  USER throught modal window.</p>",
    "scope": "static",
    "longname": "module:uiServices.publish.anonymous.scope.publish",
    "kind": "member",
    "$href": "module:uiServices.publish.anonymous.scope#publish",
    "$id": "T000002R000258"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.publish",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "longname": "module:uiServices.publish.return",
    "$href": "module:uiServices.publish#return",
    "$id": "T000002R000260"
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
    "name": "timeIndicator",
    "memberof": "module:uiServices",
    "description": "<p>Sets throught ranged bar the view of the selected  timeStamp in map's timeLine</p>",
    "requires": [
      "module:timeline+module:mapModule.timeline"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.timeIndicator",
    "jsConcept": true,
    "$href": "module:uiServices.timeIndicator",
    "$id": "T000002R000272"
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
    "memberof": "module:uiServices.timeIndicator",
    "description": "<p>Watching <code>mapcontrols</code></p>",
    "scope": "static",
    "longname": "module:uiServices.timeIndicator.anonymous",
    "$href": "module:uiServices.timeIndicator#anonymous",
    "$id": "T000002R000273"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.timeIndicator.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.timeIndicator.anonymous.scope",
    "$href": "module:uiServices.timeIndicator.anonymous.scope",
    "$id": "T000002R000275"
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
        "name": "indicator"
      }
    ],
    "memberof": "module:uiServices.timeIndicator.anonymous.scope",
    "description": "<p>Map view is been updated as the USER interacts with the timeline range bar.</p>\n<p>Timeline range bar indicator represent the current time stamp of the map.</p>\n<p>As the value of the indecator is been increased and decresed accordingly  by the user,</p>\n<p>indicator's value is been used to determine what  view  will be append  on the map for the selected timestamp.</p>\n<p>Two time indicators are been used:</p>\n<ul>\n<li><p><code>indicator</code> : that represent the new selected timestamp and is been watched by the Directive.</p>\n</li>\n<li><p><code>cashedIndicator</code> : that represent the timestamp that the map view was set since the last USER interaction with timeline range bar.</p>\n</li>\n</ul>\n<p><code>timeline.timeMachine</code>: takes as argumets <code>indicator</code> and <code>cashedIndicator</code> and implements the alternation of the views, between these ywo timestamp.</p>",
    "scope": "static",
    "longname": "module:uiServices.timeIndicator.anonymous.scope.event:$watch",
    "$href": "module:uiServices.timeIndicator.anonymous.scope#$watch",
    "$id": "T000002R000276"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.timeIndicator",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "longname": "module:uiServices.timeIndicator.return",
    "$href": "module:uiServices.timeIndicator#return",
    "$id": "T000002R000277"
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
    "name": "timeLineVisibility",
    "memberof": "module:uiServices",
    "description": "<p>Toggles on/off the TimeLine functionality.</p>",
    "requires": [
      "module:markers+module:mapModule.markers",
      "module:timeline+module:mapModule.timeline",
      "module:heatMap+module:mapModule.heatMap"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.timeLineVisibility",
    "jsConcept": true,
    "$href": "module:uiServices.timeLineVisibility",
    "$id": "T000002R000286"
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
    "memberof": "module:uiServices.timeLineVisibility",
    "description": "<p>Watching <code>mapcontrols</code></p>",
    "scope": "static",
    "longname": "module:uiServices.timeLineVisibility.anonymous",
    "$href": "module:uiServices.timeLineVisibility#anonymous",
    "$id": "T000002R000287"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.timeLineVisibility.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.timeLineVisibility.anonymous.scope",
    "$href": "module:uiServices.timeLineVisibility.anonymous.scope",
    "$id": "T000002R000289"
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
        "name": "showtimeline"
      }
    ],
    "memberof": "module:uiServices.timeLineVisibility.anonymous.scope",
    "description": "<p>As user sets on/off the timeline functionality</p>\n<p>Directive make's usage of <code>markers</code>, <code>heatMap</code>,  <code>timeline</code> API's to: </p>\n<ul>\n<li><p>Initialize Timeline if the timeline was not active.</p>\n</li>\n<li><p>Activate Timeline if it was deactivated but initialized.</p>\n</li>\n<li><p>Deactivate Timeline if it was active.</p>\n</li>\n</ul>",
    "scope": "static",
    "longname": "module:uiServices.timeLineVisibility.anonymous.scope.event:$watch",
    "$href": "module:uiServices.timeLineVisibility.anonymous.scope#$watch",
    "$id": "T000002R000290"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.timeLineVisibility",
    "type": {
      "names": [
        "statement"
      ]
    },
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
    "longname": "module:uiServices.timeLineVisibility.return",
    "$href": "module:uiServices.timeLineVisibility#return",
    "$id": "T000002R000291"
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
    "name": "uiAnimation",
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
    "longname": "module:uiServices.uiAnimation",
    "jsConcept": true,
    "$href": "module:uiServices.uiAnimation",
    "$id": "T000002R000300"
  },
  {
    "kind": "class",
    "name": "animation",
    "memberof": "module:uiServices.uiAnimation",
    "classdesc": "<p>Encapulates animation functionality</p>",
    "scope": "static",
    "longname": "module:uiServices.uiAnimation.animation",
    "$href": "module:uiServices.uiAnimation.animation",
    "$id": "T000002R000301"
  },
  {
    "kind": "member",
    "name": "inisiate",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:uiServices.uiAnimation.animation",
    "description": "<p>Each time <code>animation.linear</code> will be invoced</p>\n<p><code>inisiate</code> will be assigned with $interval function that will make itteration throught time by doing:</p>\n<ul>\n<li>INCREASE or DECREASE a given CSS attribute by a give value called <code>step</code> up untill it reach a given ending value</li>\n<li><p>Assign the value new CSS value to a given DOMElement</p>\n</li>\n<li><p>CHECK if interval should be cancelled by compering the new CSS value with the given ending value</p>\n</li>\n</ul>",
    "scope": "static",
    "longname": "module:uiServices.uiAnimation.animation.inisiate",
    "$href": "module:uiServices.uiAnimation.animation#inisiate",
    "$id": "T000002R000303"
  },
  {
    "kind": "member",
    "tags": [
      {
        "originalTitle": "calulateVelocity",
        "title": "calulatevelocity",
        "text": ""
      }
    ],
    "memberof": "module:uiServices.uiAnimation.animation",
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
    "name": "animation.calulateVelocity",
    "longname": "module:uiServices.uiAnimation.animation.animation.calulateVelocity",
    "scope": "static",
    "$href": "module:uiServices.uiAnimation.animation#animation.calulateVelocity",
    "$id": "T000002R000305"
  },
  {
    "kind": "member",
    "name": "operation",
    "memberof": "module:uiServices.uiAnimation.animation",
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
    "scope": "static",
    "longname": "module:uiServices.uiAnimation.animation.operation",
    "$href": "module:uiServices.uiAnimation.animation#operation",
    "$id": "T000002R000306"
  },
  {
    "kind": "member",
    "name": "linear",
    "memberof": "module:uiServices.uiAnimation.animation",
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
    "description": "<p>Trigers a linear animation by invocing:</p>\n<ul>\n<li><p><code>operation</code></p>\n</li>\n<li><p><code>velocity</code></p>\n</li>\n<li><p>Assign $interval function to <a href=\"#!/module:uiServices.uiAnimation.animation\"><code> animation.inisiate</code></a></p>\n</li>\n</ul>",
    "scope": "static",
    "longname": "module:uiServices.uiAnimation.animation.linear",
    "$href": "module:uiServices.uiAnimation.animation#linear",
    "$id": "T000002R000308"
  },
  {
    "kind": "function",
    "name": "linear",
    "memberof": "module:uiServices.uiAnimation",
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
    "access": "public",
    "scope": "static",
    "description": "<p>Triger CSS animation using <a href=\"#!/module:uiServices.uiAnimation.animation#linear\"><code>animation.linear</code></a>.</p>",
    "longname": "module:uiServices.uiAnimation.linear",
    "$href": "module:uiServices.uiAnimation#linear",
    "$id": "T000002R000318"
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
    "name": "deleteHeadScripts",
    "memberof": "module:uiServices",
    "description": "<p>Delete's all head scripts exept given.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.deleteHeadScripts",
    "jsConcept": true,
    "$href": "module:uiServices.deleteHeadScripts",
    "$id": "T000002R000320"
  },
  {
    "kind": "class",
    "name": "script",
    "memberof": "module:uiServices.deleteHeadScripts",
    "classdesc": "<p>Encapulates delete HeadScripts functionality</p>",
    "scope": "static",
    "longname": "module:uiServices.deleteHeadScripts.script",
    "$href": "module:uiServices.deleteHeadScripts.script",
    "$id": "T000002R000321"
  },
  {
    "kind": "member",
    "name": "selectedElements",
    "type": {
      "names": [
        "array"
      ]
    },
    "description": "<p>DOM selection of all head scripts</p>",
    "memberof": "module:uiServices.deleteHeadScripts.script",
    "scope": "static",
    "longname": "module:uiServices.deleteHeadScripts.script.selectedElements",
    "$href": "module:uiServices.deleteHeadScripts.script#selectedElements",
    "$id": "T000002R000323"
  },
  {
    "kind": "member",
    "name": "filterSelectedElements",
    "memberof": "module:uiServices.deleteHeadScripts.script",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "exclude"
      }
    ],
    "description": "<p>much the scipt from a given name with the script in  the array   <a href=\"#!/module:uiServices.deleteHeadScripts.script\"><code>script.selectedElements</code></a> and removes it.</p>\n<p>Invoke <code>script.deleteSelectedElements</code></p>",
    "scope": "static",
    "longname": "module:uiServices.deleteHeadScripts.script.filterSelectedElements",
    "$href": "module:uiServices.deleteHeadScripts.script#filterSelectedElements",
    "$id": "T000002R000325"
  },
  {
    "kind": "member",
    "name": "deleteSelectedElements",
    "memberof": "module:uiServices.deleteHeadScripts.script",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "description": "<p>Removes all head script that are inside  {@link module:uiServices.deleteHeadScripts.script script.selectedElements</p>",
    "scope": "static",
    "longname": "module:uiServices.deleteHeadScripts.script.deleteSelectedElements",
    "$href": "module:uiServices.deleteHeadScripts.script#deleteSelectedElements",
    "$id": "T000002R000332"
  },
  {
    "kind": "function",
    "name": "linear",
    "memberof": "module:uiServices.deleteHeadScripts",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "exclude"
      }
    ],
    "access": "public",
    "scope": "static",
    "description": "<p>Triger the removal of the Head Scripts exept the <code>exclude</code>.</p>",
    "longname": "module:uiServices.deleteHeadScripts.linear",
    "$href": "module:uiServices.deleteHeadScripts#linear",
    "$id": "T000002R000336"
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
    "name": "popUp",
    "memberof": "module:uiServices",
    "requires": [
      "module:uiAnimation+module:uiServices.uiAnimation"
    ],
    "description": "<p>Reusable modal window.</p>\n<p>By decleraring the function <a href=\"#!/module:uiServices.mainAppController\"><code>popUp.togglePopUp()</code></a> under the <a href=\"#!/module:uiServices.mainAppController\"><code>mainAppController</code></a> we made availiable to the hole App the modal window.</p>",
    "examples": [
      "-\r// Attache the popUp.togglePopUp() that is availiable in all App throught mainAppController. \r// Attache a custom  customPopulateMyModal() that will invoke popUp.populate(content)  etc..\r// The customPopulateMyModal() can be decleared in directives or controllers with injecting popUp service\r\r<button ng-click='popUp.togglePopUp();populateMyModal();'></button>"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.popUp",
    "jsConcept": true,
    "$href": "module:uiServices.popUp",
    "$id": "T000002R000338"
  },
  {
    "kind": "function",
    "name": "populate",
    "memberof": "module:uiServices.popUp",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "content"
      }
    ],
    "access": "public",
    "scope": "static",
    "description": "<p>Poplulates modal window with content If the modal has no error class</p>",
    "longname": "module:uiServices.popUp.populate",
    "$href": "module:uiServices.popUp#populate",
    "$id": "T000002R000339"
  },
  {
    "kind": "function",
    "name": "populate",
    "memberof": "module:uiServices.popUp",
    "params": [
      {
        "name": "no-argument"
      }
    ],
    "access": "public",
    "scope": "static",
    "description": "<p>Emptie's modal content</p>",
    "longname": "module:uiServices.popUp.populate",
    "$href": "module:uiServices.popUp#populate",
    "$id": "T000002R000341"
  },
  {
    "kind": "function",
    "name": "togglePopUp",
    "memberof": "module:uiServices.popUp",
    "params": [
      {
        "type": {
          "names": [
            "DOMElement"
          ]
        },
        "name": "element"
      }
    ],
    "access": "public",
    "scope": "static",
    "description": "<p>Emptie's modal content show/hide modal by toggling activePopUp class</p>",
    "longname": "module:uiServices.popUp.togglePopUp",
    "$href": "module:uiServices.popUp#togglePopUp",
    "$id": "T000002R000343"
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
    "$id": "T000002R000346"
  },
  {
    "kind": "class",
    "name": "UiAnimation",
    "memberof": "module:uiServices.UiAnimation",
    "classdesc": "<p>Encapulates animation functionality</p>",
    "scope": "static",
    "longname": "module:uiServices.UiAnimation.UiAnimation",
    "$href": "module:uiServices.UiAnimation.UiAnimation",
    "$id": "T000002R000347"
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
    "$id": "T000002R000348"
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
    "$id": "T000002R000350"
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
    "$id": "T000002R000352"
  }
]);})();