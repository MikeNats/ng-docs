(function() {angular.module('jsDocNG-Data', []).constant('$title',   "Maps App API").constant('$readme',  '').constant('$doclets', [
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/module' target='_blank'> angular.module </a>\n <br /><br/>\n<b>Description:</b> Conatins Authentication Services: <br /> <br /></p>\n<ul><li><a href=\"#!/module:authModule.module:AUTH_EVENTS\"><code>Constant: AUTH_EVENTS</code></a><br />&nbsp;</li>\n  <li><a href=\"#!/module:authModule.module:authService\"><code>Factory: authService</code></a><br />&nbsp;</li>\n  <li><a href=\"#!/module:authModule.module:Session\"><code>service: Session</code></a></li> \n </ul>",
    "kind": "module",
    "name": "authModule",
    "type": {
      "names": [
        "module"
      ]
    },
    "longname": "module:authModule",
    "$href": "module:authModule",
    "$id": "T000002R000002"
  },
  {
    "kind": "member",
    "name": "auth",
    "type": {
      "names": [
        "angular.module"
      ]
    },
    "longname": "module:authModule~auth",
    "scope": "inner",
    "memberof": "module:authModule",
    "$href": "module:authModule#auth",
    "$id": "T000002R000003"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#constant-recipe' target='_blank'> angular.constant </a>\n <br /><br/><br><b>Parent Module:</b> <a href=\"#!/module:authModule\"><code>authModule</code></a> <br /> <br /> \n<b>Description:</b> Contains authentication status messages.   <br /><br/></p>",
    "kind": "module",
    "name": "AUTH_EVENTS",
    "memberof": "module:authModule",
    "type": {
      "names": [
        "Constant"
      ]
    },
    "scope": "static",
    "longname": "module:authModule.module:AUTH_EVENTS",
    "$href": "module:authModule.module:AUTH_EVENTS",
    "$id": "T000002R000005"
  },
  {
    "kind": "member",
    "name": "loginSuccess",
    "access": "public",
    "scope": "static",
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "<p>auth-login-success</p>"
      }
    ],
    "longname": "module:authModule.module:AUTH_EVENTS.loginSuccess",
    "memberof": "module:authModule.module:AUTH_EVENTS",
    "$href": "module:authModule.module:AUTH_EVENTS#loginSuccess",
    "$id": "T000002R000006"
  },
  {
    "kind": "member",
    "name": "loginSuccess",
    "access": "public",
    "scope": "static",
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "<p>auth-login-failed</p>"
      }
    ],
    "longname": "module:authModule.module:AUTH_EVENTS.loginSuccess",
    "memberof": "module:authModule.module:AUTH_EVENTS",
    "$href": "module:authModule.module:AUTH_EVENTS#loginSuccess",
    "$id": "T000002R000008"
  },
  {
    "kind": "member",
    "name": "logoutSuccess",
    "access": "public",
    "scope": "static",
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "<p>auth-logout-success</p>"
      }
    ],
    "longname": "module:authModule.module:AUTH_EVENTS.logoutSuccess",
    "memberof": "module:authModule.module:AUTH_EVENTS",
    "$href": "module:authModule.module:AUTH_EVENTS#logoutSuccess",
    "$id": "T000002R000010"
  },
  {
    "kind": "member",
    "name": "sessionTimeout",
    "scope": "static",
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "<p>auth-session-timeout</p>"
      }
    ],
    "longname": "module:authModule.module:AUTH_EVENTS.sessionTimeout",
    "memberof": "module:authModule.module:AUTH_EVENTS",
    "$href": "module:authModule.module:AUTH_EVENTS#sessionTimeout",
    "$id": "T000002R000012"
  },
  {
    "kind": "member",
    "name": "notAuthenticated",
    "access": "public",
    "scope": "static",
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "<p>auth-not-authenticated</p>"
      }
    ],
    "longname": "module:authModule.module:AUTH_EVENTS.notAuthenticated",
    "memberof": "module:authModule.module:AUTH_EVENTS",
    "$href": "module:authModule.module:AUTH_EVENTS#notAuthenticated",
    "$id": "T000002R000014"
  },
  {
    "kind": "member",
    "name": "notAuthorized",
    "access": "public",
    "scope": "static",
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "<p>auth-not-authorized</p>"
      }
    ],
    "longname": "module:authModule.module:AUTH_EVENTS.notAuthorized",
    "memberof": "module:authModule.module:AUTH_EVENTS",
    "$href": "module:authModule.module:AUTH_EVENTS#notAuthorized",
    "$id": "T000002R000016"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#factory-recipe' target='_blank'> angular.factory </a> <br /><br/> \n<b>Parent Module:</b> <a href=\"#!/module:authModule\"><code>authModule</code></a> <br /> <br /> \n<b>Description:</b>  Singleton with a closure that implemets user authentication. On success sets user Session.  <br /><br/></p>",
    "kind": "module",
    "name": "authService",
    "memberof": "module:authModule",
    "requires": [
      "module:$http+https://docs.angularjs.org/api/ng/service/$http+external",
      "module:AUTH_EVENTS+../documentation/index.html#!/module:authModule.module:AUTH_EVENTS+internal",
      "module:Session+../documentation/index.html#!/module:authModule.module:Session+internal"
    ],
    "type": {
      "names": [
        "Factory"
      ]
    },
    "scope": "static",
    "longname": "module:authModule.module:authService",
    "$href": "module:authModule.module:authService",
    "$id": "T000002R000018"
  },
  {
    "kind": "class",
    "name": "auth",
    "access": "public",
    "classdesc": "<p><b>Type:</b>  Private Object of <a href=\"#!/module:authModule.module:authService\"><code>factory.authService </code></a> <br/> <br/>\n<b>Description: </b> Implements user authenticantion.</p>",
    "longname": "module:authModule.module:authService~auth",
    "scope": "inner",
    "memberof": "module:authModule.module:authService",
    "$href": "module:authModule.module:authService~auth",
    "$id": "T000002R000019"
  },
  {
    "description": "<p>Default value: auth-not-authenticated</p>",
    "properties": [
      {
        "type": {
          "names": [
            "private",
            "String"
          ]
        },
        "name": "authenticatited"
      }
    ],
    "memberof": "module:authModule.module:authService~auth",
    "name": "authenticatited",
    "longname": "module:authModule.module:authService~auth.authenticatited",
    "kind": "member",
    "scope": "static",
    "$href": "module:authModule.module:authService~auth#authenticatited",
    "$id": "T000002R000021"
  },
  {
    "description": "<p>$http request when user submit his credentials on success sets user session.</p>",
    "kind": "function",
    "name": "user",
    "memberof": "module:authModule.module:authService~auth",
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
    "scope": "static",
    "longname": "module:authModule.module:authService~auth.user",
    "$href": "module:authModule.module:authService~auth#user",
    "$id": "T000002R000023"
  },
  {
    "description": "<p>Setter for   <code>authenticatited</code></p>",
    "kind": "function",
    "name": "setAuthentication",
    "memberof": "module:authModule.module:authService~auth",
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
    "scope": "static",
    "longname": "module:authModule.module:authService~auth.setAuthentication",
    "$href": "module:authModule.module:authService~auth#setAuthentication",
    "$id": "T000002R000025"
  },
  {
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
        },
        "description": "<p>.</p>"
      }
    ],
    "name": "login",
    "longname": "module:authModule.module:authService~login",
    "kind": "function",
    "scope": "inner",
    "memberof": "module:authModule.module:authService",
    "$href": "module:authModule.module:authService#login",
    "$id": "T000002R000028"
  },
  {
    "access": "public",
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
    "name": "isAuthenticated",
    "longname": "module:authModule.module:authService~isAuthenticated",
    "kind": "function",
    "scope": "inner",
    "memberof": "module:authModule.module:authService",
    "$href": "module:authModule.module:authService#isAuthenticated",
    "$id": "T000002R000029"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#service-recipe' target='_blank'> angular.service </a> <br /><br/><br><b>Parent Module:</b> <a href=\"#!/module:authModule\"><code>authModule</code></a> <br /> <br /> \n<b>Description:</b> Store user data by returning in an  instance of the function object.</p>",
    "kind": "module",
    "name": "Session",
    "memberof": "module:authModule",
    "type": {
      "names": [
        "Service"
      ]
    },
    "scope": "static",
    "longname": "module:authModule.module:Session",
    "$href": "module:authModule.module:Session",
    "$id": "T000002R000030"
  },
  {
    "description": "<p>Sets user credeltials.</p>",
    "kind": "function",
    "name": "create",
    "access": "public",
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
            "String"
          ]
        },
        "name": "userProjects"
      }
    ],
    "longname": "module:authModule.module:Session~create",
    "scope": "inner",
    "memberof": "module:authModule.module:Session",
    "$href": "module:authModule.module:Session#create",
    "$id": "T000002R000031"
  },
  {
    "description": "<p>Destroy user credentials.</p>",
    "kind": "function",
    "name": "destroy",
    "access": "public",
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
    "longname": "module:authModule.module:Session~destroy",
    "scope": "inner",
    "memberof": "module:authModule.module:Session",
    "$href": "module:authModule.module:Session#destroy",
    "$id": "T000002R000037"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/module' target='_blank'> angular.module </a> <br /><br/>\n<b>Description:</b> Conetains User Interface Services: <br /> <br /></p>\n<ul><li><a href=\"#!/module:uiServicesModule.module:createEditController\"><code>Controller: createEditController</code></a><br />&nbsp;</li>\n\n </ul>",
    "kind": "module",
    "name": "uiServicesModule",
    "type": {
      "names": [
        "module"
      ]
    },
    "longname": "module:uiServicesModule",
    "$href": "module:uiServicesModule",
    "$id": "T000002R000043"
  },
  {
    "kind": "member",
    "name": "uiServices",
    "type": {
      "names": [
        "angular.module"
      ]
    },
    "longname": "module:uiServicesModule~uiServices",
    "scope": "inner",
    "memberof": "module:uiServicesModule",
    "$href": "module:uiServicesModule#uiServices",
    "$id": "T000002R000044"
  },
  {
    "description": "<p><b>Type:</b> <a href=\"https://docs.angularjs.org/guide/controller\">angular.controller</a> <br /><br/>\n<b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> <br /> <br /> \n<b>Description:</b> Redirects user to  Create Map or Edit Map template  <br /><br/></p>",
    "kind": "module",
    "name": "createEditController",
    "memberof": "module:uiServicesModule",
    "requires": [
      "module:$scope",
      "module:$location",
      "module:Session"
    ],
    "type": {
      "names": [
        "controller"
      ]
    },
    "scope": "static",
    "longname": "module:uiServicesModule.module:createEditController",
    "$href": "module:uiServicesModule.module:createEditController",
    "$id": "T000002R000046"
  },
  {
    "kind": "class",
    "name": "project",
    "access": "public",
    "classdesc": "<p><b>Type:</b>  Object  attached to  <code>$scope</code> <br/> <br/>\n<b>Description: </b> Implements  redirection to Create Map or Edit Map templates.</p>",
    "longname": "module:uiServicesModule.module:createEditController~project",
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:createEditController",
    "$href": "module:uiServicesModule.module:createEditController~project",
    "$id": "T000002R000047"
  },
  {
    "description": "<p>Redirect user to Create Map template.</p>",
    "kind": "function",
    "name": "create",
    "longname": "module:uiServicesModule.module:createEditController~create",
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:createEditController",
    "$href": "module:uiServicesModule.module:createEditController#create",
    "$id": "T000002R000049"
  },
  {
    "description": "<p>Redirect user to Edit Map template.</p>",
    "kind": "function",
    "name": "edit",
    "longname": "module:uiServicesModule.module:createEditController~edit",
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:createEditController",
    "$href": "module:uiServicesModule.module:createEditController#edit",
    "$id": "T000002R000051"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> <br /><br/>\n<b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> <br /> <br /> \n<b>Description:</b> Use <a href=\"#!/module:authModule.module:Session\"><code>Session</code></a> to makes availiabe through scope userData. <code>editProjectTemplate.html</code> binds the data. <br /><br/></p>",
    "kind": "module",
    "name": "editProjectController",
    "memberof": "module:uiServicesModule",
    "requires": [
      "module:$scope+https://docs.angularjs.org/guide/scope+external",
      "module:Session+../documentation/index.html#!/module:authModule.module:Session+internal"
    ],
    "type": {
      "names": [
        "controller"
      ]
    },
    "scope": "static",
    "longname": "module:uiServicesModule.module:editProjectController",
    "$href": "module:uiServicesModule.module:editProjectController",
    "$id": "T000002R000053"
  },
  {
    "description": "<p>scope variable.</p>",
    "kind": "member",
    "name": "userData",
    "longname": "module:uiServicesModule.module:editProjectController~userData",
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:editProjectController",
    "$href": "module:uiServicesModule.module:editProjectController#userData",
    "$id": "T000002R000054"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> <br /><br/>\n<b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> <br /> <br /> \n<b>Description:</b> Use <a href=\"#!/module:authModule.module:authService\"><code>authService.login(credentials)</code></a> to triger user authentication, <br/> <br />on success redirects to <code>createEditProjectTemplate.html</code> <br /><br/></p>",
    "kind": "module",
    "name": "logInController",
    "memberof": "module:uiServicesModule",
    "requires": [
      "module:$scope+https://docs.angularjs.org/guide/scope+external",
      "module:$location+https://docs.angularjs.org/guide/$location+external",
      "module:authService+../documentation/index.html#!/module:authModule.module:authService+internal"
    ],
    "type": {
      "names": [
        "controller"
      ]
    },
    "scope": "static",
    "longname": "module:uiServicesModule.module:logInController",
    "$href": "module:uiServicesModule.module:logInController",
    "$id": "T000002R000056"
  },
  {
    "kind": "class",
    "name": "credentials",
    "access": "public",
    "classdesc": "<p><b>Type:</b>  Scope variable of <code>logInController </code> <br/> <br/>\n<b>Description: </b> Two way data binding. On login form submit  to triger authentication.</p>",
    "longname": "module:uiServicesModule.module:logInController~credentials",
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:logInController",
    "$href": "module:uiServicesModule.module:logInController~credentials",
    "$id": "T000002R000057"
  },
  {
    "kind": "namespace",
    "name": "credentials",
    "longname": "module:uiServicesModule.module:logInController~$scope.credentials",
    "scope": "static",
    "memberof": "module:uiServicesModule.module:logInController~$scope",
    "$href": "module:uiServicesModule.module:logInController~$scope.credentials",
    "$id": "T000002R000058"
  },
  {
    "description": "<p>Stores user name</p>",
    "properties": [
      {
        "name": "userName"
      }
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:logInController~credentials",
    "name": "userName",
    "longname": "module:uiServicesModule.module:logInController~credentials~userName",
    "kind": "member",
    "$href": "module:uiServicesModule.module:logInController~credentials#userName",
    "$id": "T000002R000059"
  },
  {
    "description": "<p>Stores password</p>",
    "properties": [
      {
        "name": "password"
      }
    ],
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServicesModule.module:logInController~credentials",
    "name": "password",
    "longname": "module:uiServicesModule.module:logInController~credentials.password",
    "kind": "member",
    "scope": "static",
    "$href": "module:uiServicesModule.module:logInController~credentials#password",
    "$id": "T000002R000060"
  },
  {
    "description": "<p>Trigers authetication promise  <a href=\"#!/module:authModule.module:authService\"><code>authService.login(credentials)</code></a>  on success  redirects to <code>createEditProjectTemplate.html</code></p>",
    "kind": "function",
    "name": "login",
    "memberof": "module:uiServicesModule.module:logInController~credentials",
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
    "scope": "static",
    "longname": "module:uiServicesModule.module:logInController~credentials.login",
    "$href": "module:uiServicesModule.module:logInController~credentials#login",
    "$id": "T000002R000061"
  }
]);})();