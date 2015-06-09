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
        "originalTitle": "variablename",
        "title": "variablename",
        "text": "auth",
        "value": "auth"
      }
    ],
    "kind": "module",
    "name": "authModule",
    "access": "public",
    "description": "<p>Contains user authentication services.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:authModule",
    "$href": "module:authModule",
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
    "$id": "T000002R000004"
  },
  {
    "kind": "member",
    "name": "loginSuccess",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "module:authModule.AUTH_EVENTS.loginSuccess",
    "$href": "module:authModule.AUTH_EVENTS#loginSuccess",
    "$id": "T000002R000005"
  },
  {
    "kind": "member",
    "name": "loginSuccess",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "module:authModule.AUTH_EVENTS.loginSuccess",
    "$href": "module:authModule.AUTH_EVENTS#loginSuccess",
    "$id": "T000002R000007"
  },
  {
    "kind": "member",
    "name": "logoutSuccess",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "module:authModule.AUTH_EVENTS.logoutSuccess",
    "$href": "module:authModule.AUTH_EVENTS#logoutSuccess",
    "$id": "T000002R000009"
  },
  {
    "kind": "member",
    "name": "sessionTimeout",
    "memberof": "module:authModule.AUTH_EVENTS",
    "scope": "static",
    "access": "public",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "module:authModule.AUTH_EVENTS.sessionTimeout",
    "$href": "module:authModule.AUTH_EVENTS#sessionTimeout",
    "$id": "T000002R000011"
  },
  {
    "kind": "member",
    "name": "notAuthenticated",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "module:authModule.AUTH_EVENTS.notAuthenticated",
    "$href": "module:authModule.AUTH_EVENTS#notAuthenticated",
    "$id": "T000002R000013"
  },
  {
    "kind": "member",
    "name": "notAuthorized",
    "memberof": "module:authModule.AUTH_EVENTS",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "module:authModule.AUTH_EVENTS.notAuthorized",
    "$href": "module:authModule.AUTH_EVENTS#notAuthorized",
    "$id": "T000002R000015"
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
    "description": "<p>Singleton with a closure that implemets user authentication. On success sets user Session.</p>",
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
    "$id": "T000002R000017"
  },
  {
    "kind": "class",
    "name": "auth",
    "access": "public",
    "classdesc": "<p>Implements user authenticantion</p>",
    "memberof": "module:authModule.authService",
    "scope": "static",
    "longname": "module:authModule.authService.auth",
    "$href": "module:authModule.authService.auth",
    "$id": "T000002R000018"
  },
  {
    "kind": "member",
    "name": "authenticatited",
    "type": {
      "names": [
        "String"
      ]
    },
    "scope": "inner",
    "memberof": "module:authModule.authService.auth",
    "summary": "Default value: auth-not-authenticated.",
    "longname": "module:authModule.authService.auth~authenticatited",
    "$href": "module:authModule.authService.auth#authenticatited",
    "$id": "T000002R000020"
  },
  {
    "kind": "member",
    "name": "user",
    "type": {
      "names": [
        "method"
      ]
    },
    "scope": "inner",
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
    "summary": "$http request when user submit his credentials on success sets user session. Method is been triggered from public <code>login(credentials)</code>",
    "longname": "module:authModule.authService.auth~user",
    "$href": "module:authModule.authService.auth#user",
    "$id": "T000002R000023"
  },
  {
    "kind": "member",
    "name": "setAuthentication",
    "type": {
      "names": [
        "method"
      ]
    },
    "scope": "inner",
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
    "summary": "Setter for  <a href=\"#!/module:authModule.authService.auth\"><code>auth.authenticatited</code></a>",
    "longname": "module:authModule.authService.auth~setAuthentication",
    "$href": "module:authModule.authService.auth#setAuthentication",
    "$id": "T000002R000025"
  },
  {
    "kind": "function",
    "name": "isAuthenticated",
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
    "returns": [
      {
        "type": {
          "names": [
            "xhttprequest"
          ]
        }
      }
    ],
    "summary": "Triger user authentication promise using <a href=\"#!/module:authModule.authService.auth\"><code>auth.user(credentials)</code></a>.",
    "scope": "static",
    "longname": "module:authModule.authService.isAuthenticated",
    "$href": "module:authModule.authService#isAuthenticated",
    "$id": "T000002R000028"
  },
  {
    "kind": "function",
    "name": "isAuthenticated",
    "memberof": "module:authModule.authService",
    "access": "public",
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
    "summary": "Returns status message of authentication.",
    "scope": "static",
    "longname": "module:authModule.authService.isAuthenticated",
    "$href": "module:authModule.authService#isAuthenticated",
    "$id": "T000002R000030"
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
    "description": "<p>Stores user data by returning in an  instance of the function object.</p>",
    "requires": [
      "module:$http"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:authModule.Session",
    "jsConcept": true,
    "$href": "module:authModule.Session",
    "$id": "T000002R000032"
  },
  {
    "kind": "member",
    "name": "create",
    "memberof": "module:authModule.Session",
    "access": "public",
    "type": {
      "names": [
        "function"
      ]
    },
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
    "summary": "Sets user credeltials.",
    "scope": "static",
    "longname": "module:authModule.Session.create",
    "$href": "module:authModule.Session#create",
    "$id": "T000002R000033"
  },
  {
    "kind": "member",
    "name": "destroy",
    "memberof": "module:authModule.Session",
    "access": "public",
    "type": {
      "names": [
        "function"
      ]
    },
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "summary": "Destroy user credentials, sets data to null.",
    "scope": "static",
    "longname": "module:authModule.Session.destroy",
    "$href": "module:authModule.Session#destroy",
    "$id": "T000002R000039"
  }
]);})();