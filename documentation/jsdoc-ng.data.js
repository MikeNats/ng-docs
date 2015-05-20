(function() {angular.module('jsDocNG-Data', []).constant('$title',   "Maps App API").constant('$readme',  '').constant('$doclets', [
  {
    "kind": "module",
    "name": "authModule",
    "type": {
      "names": [
        "angularModule"
      ]
    },
    "tags": [
      {
        "originalTitle": "assignedToVariable",
        "title": "assignedtovariable",
        "text": "auth",
        "value": "auth"
      }
    ],
    "access": "public",
    "scope": "static",
    "description": "<p>Contains user authentication services.</p>",
    "longname": "module:authModule",
    "$href": "module:authModule",
    "$id": "T000002R000002"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#constant-recipe' target='_blank'> angular.constant </a></p>\n<p><b>Parent Module:</b> <a href=\"#!/module:authModule\"><code>authModule</code></a> </p>\n<p><b>Description:</b> Contains authentication status messages.</p>",
    "kind": "angularConcept",
    "type": {
      "names": [
        "Constant"
      ]
    },
    "name": "AUTH_EVENTS",
    "memberof": "module:authModule",
    "scope": "static",
    "longname": "module:authModule.AUTH_EVENTS",
    "$href": "module:authModule.angularConcept:AUTH_EVENTS",
    "$id": "T000002R000004"
  },
  {
    "kind": "member",
    "name": "loginSuccess",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "loginSuccess",
    "$href": "#loginSuccess",
    "$id": "T000002R000005"
  },
  {
    "kind": "member",
    "name": "loginSuccess",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "loginSuccess",
    "$href": "#loginSuccess",
    "$id": "T000002R000007"
  },
  {
    "kind": "member",
    "name": "logoutSuccess",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "logoutSuccess",
    "$href": "#logoutSuccess",
    "$id": "T000002R000009"
  },
  {
    "kind": "member",
    "name": "sessionTimeout",
    "scope": "static",
    "access": "public",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "sessionTimeout",
    "$href": "#sessionTimeout",
    "$id": "T000002R000011"
  },
  {
    "kind": "member",
    "name": "notAuthenticated",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "notAuthenticated",
    "$href": "#notAuthenticated",
    "$id": "T000002R000013"
  },
  {
    "kind": "member",
    "name": "notAuthorized",
    "access": "public",
    "scope": "static",
    "type": {
      "names": [
        "String"
      ]
    },
    "longname": "notAuthorized",
    "$href": "#notAuthorized",
    "$id": "T000002R000015"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#factory-recipe' target='_blank'> angular.factory </a></p>\n<p><b>Parent Module:</b> <a href=\"#!/module:authModule\"><code>authModule</code></a></p>\n<p><b>Description:</b>  Singleton with a closure that implemets user authentication. On success sets user Session.</p>",
    "kind": "angularConcept",
    "type": {
      "names": [
        "Factory"
      ]
    },
    "name": "authService",
    "memberof": "module:authModule",
    "requires": [
      "module:$http+https://docs.angularjs.org/api/ng/service/$http+external",
      "module:AUTH_EVENTS+../documentation/index.html#!/module:authModule.module:AUTH_EVENTS+internal",
      "module:Session+../documentation/index.html#!/module:authModule.module:Session+internal"
    ],
    "scope": "static",
    "longname": "module:authModule.authService",
    "$href": "module:authModule.angularConcept:authService",
    "$id": "T000002R000017"
  },
  {
    "kind": "class",
    "name": "auth",
    "access": "public",
    "classdesc": "<p><b>Type:</b>  Private Object of <code>factory.authService </code> <br/> <br/>\n<b>Description: </b> Implements user authenticantion.</p>",
    "longname": "auth",
    "scope": "global",
    "$href": "auth",
    "$id": "T000002R000018"
  },
  {
    "description": "<p>Default value: auth-not-authenticated.</p>",
    "kind": "member",
    "name": "authenticatited",
    "type": {
      "names": [
        "private",
        "String"
      ]
    },
    "scope": "inner",
    "memberof": "module:authModule.module:authService~auth",
    "longname": "module:authModule.module:authService~auth~authenticatited",
    "$href": "#authenticatited",
    "$id": "T000002R000020"
  },
  {
    "description": "<p>$http request when user submit his credentials on success sets user session. Method is been triggered from public <code>login(credentials)</code></p>",
    "kind": "member",
    "name": "user",
    "type": {
      "names": [
        "private",
        "method"
      ]
    },
    "scope": "inner",
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
    "longname": "module:authModule.module:authService~auth~user",
    "$href": "#user",
    "$id": "T000002R000023"
  },
  {
    "description": "<p>Setter for  <code>auth.authenticatited</code></p>",
    "kind": "member",
    "name": "setAuthentication",
    "type": {
      "names": [
        "private",
        "method"
      ]
    },
    "scope": "inner",
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
    "longname": "module:authModule.module:authService~auth~setAuthentication",
    "$href": "#setAuthentication",
    "$id": "T000002R000025"
  },
  {
    "description": "<p>Triger user authentication promise using <code>auth.user(credentials)</code>.</p>",
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
    "name": "login",
    "longname": "login",
    "kind": "function",
    "scope": "global",
    "$href": "#login",
    "$id": "T000002R000028"
  },
  {
    "description": "<p>Returns status message of authentication.</p>",
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
    "name": "isAuthenticated",
    "longname": "isAuthenticated",
    "kind": "function",
    "scope": "global",
    "$href": "#isAuthenticated",
    "$id": "T000002R000029"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/providers#service-recipe' target='_blank'> angular.service </a> </p>\n<p><b>Parent Module:</b> <a href=\"#!/module:authModule\"><code>authModule</code></a></p>\n<p><b>Description:</b> Store user data by returning in an  instance of the function object.</p>",
    "kind": "angularConcept",
    "type": {
      "names": [
        "Service"
      ]
    },
    "name": "Session",
    "memberof": "module:authModule",
    "scope": "static",
    "longname": "module:authModule.Session",
    "$href": "module:authModule.angularConcept:Session",
    "$id": "T000002R000030"
  },
  {
    "description": "<p>Sets user credeltials.</p>",
    "kind": "member",
    "name": "create",
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
    "longname": "create",
    "scope": "global",
    "$href": "#create",
    "$id": "T000002R000031"
  },
  {
    "description": "<p>Destroy user credentials, sets data to null.</p>",
    "kind": "member",
    "name": "destroy",
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
    "longname": "destroy",
    "scope": "global",
    "$href": "#destroy",
    "$id": "T000002R000037"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/module' target='_blank'> angular.module </a> </p>\n<p><b>Description:</b> Conetains User Interface Services. </p>\n<blockquote>\n<p><h4>Controllers</h4></p>\n<ul>\n  <li><a href=\"#!/module:uiServicesModule.module:createEditController\"><code>createEditController</code></a><br />&nbsp;</li>\n  <li><a href=\"#!/module:uiServicesModule.module:editProjectController\"><code>editProjectController</code></a><br />&nbsp;</li>\n  <li><a href=\"#!/module:uiServicesModule.module:logInController\"><code>logInController</code></a><br />&nbsp;</li>\n  <li><a href=\"#!/module:uiServicesModule.module:navController\"><code>navController</code></a><br />&nbsp;</li>\n  <li><a href=\"#!/module:uiServicesModule.module:userController\"><code>userController</code></a><br />&nbsp;</li>\n  <li><a href=\"#!/module:uiServicesModule.module:mainAppController\"><code>mainAppController</code></a><br />&nbsp;</li>\n  <li><a href=\"#!/module:uiServicesModule.module:mapUiController\"><code>mapUiController</code></a><br />&nbsp;</li>\n</ul></blockquote>",
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
    "description": "<p><b>Type:</b> <a href=\"https://docs.angularjs.org/guide/controller\">angular.controller</a> </p>\n<p><b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> </p>\n<p><b>Description:</b> Redirects user to  Create Map or Edit Map template</p>",
    "kind": "module",
    "name": "createEditController",
    "memberof": "module:uiServicesModule",
    "requires": [
      "module:$scope+https://docs.angularjs.org/guide/scope+external",
      "module:$location+https://docs.angularjs.org/guide/$location+external",
      "module:Session+../documentation/index.html#!/module:authModule.module:Session+internal"
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
    "type": {
      "names": [
        "Object"
      ]
    },
    "scope": "inner",
    "classdesc": "<p><b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.</p>\n<p><b>Description: </b> Redirection to <code>createProjectTemplate.html</code> or <code>createProjectTemplate.html</code> according to user action.</p>",
    "longname": "module:uiServicesModule.module:createEditController~project",
    "memberof": "module:uiServicesModule.module:createEditController",
    "$href": "module:uiServicesModule.module:createEditController~project",
    "$id": "T000002R000047"
  },
  {
    "description": "<p>Redirect user to <code>createProjectTemplate.html</code></p>",
    "kind": "member",
    "name": "create",
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
    "memberof": "module:uiServicesModule.module:createEditController~project",
    "scope": "inner",
    "longname": "module:uiServicesModule.module:createEditController~project~create",
    "$href": "module:uiServicesModule.module:createEditController~project#create",
    "$id": "T000002R000049"
  },
  {
    "description": "<p>Redirect user to <code>createProjectTemplate.html</code></p>",
    "kind": "member",
    "name": "edit",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "type": {
      "names": [
        "function"
      ]
    },
    "memberof": "module:uiServicesModule.module:createEditController~project",
    "scope": "inner",
    "longname": "module:uiServicesModule.module:createEditController~project~edit",
    "$href": "module:uiServicesModule.module:createEditController~project#edit",
    "$id": "T000002R000051"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> </p>\n<p><b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> </p>\n<p><b>Description:</b> Use <code>Session</code> to makes availiabe through scope userData. <code>editProjectTemplate.html</code> binds the data.</p>",
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
    "kind": "class",
    "name": "userData",
    "type": {
      "names": [
        "Object"
      ]
    },
    "scope": "inner",
    "classdesc": "<p><b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.</p>\n<p><b>Description:</b> Stores user projects data using <code>Session.project</code> for data to be bind into <code>editProjectTeplate.html</code>.</p>",
    "longname": "module:uiServicesModule.module:editProjectController~userData",
    "memberof": "module:uiServicesModule.module:editProjectController",
    "$href": "module:uiServicesModule.module:editProjectController~userData",
    "$id": "T000002R000054"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> </p>\n<p><b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> </p>\n<p><b>Description:</b> Use <code>authService.login(credentials)</code> to triger user authentication, \non success redirects to <code>createEditProjectTemplate.html</code> <br /><br/></p>",
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
    "type": {
      "names": [
        "Object"
      ]
    },
    "scope": "inner",
    "classdesc": "<p><b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a></p>\n<p><b>Description: </b></p>",
    "longname": "module:uiServicesModule.module:logInController~credentials",
    "memberof": "module:uiServicesModule.module:logInController",
    "$href": "module:uiServicesModule.module:logInController~credentials",
    "$id": "T000002R000057"
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
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:logInController~credentials",
    "name": "password",
    "longname": "module:uiServicesModule.module:logInController~credentials~password",
    "kind": "member",
    "$href": "module:uiServicesModule.module:logInController~credentials#password",
    "$id": "T000002R000060"
  },
  {
    "description": "<p>Calls <code>authService.login(credentials)</code> to triger authentication  to triger authenticanion proceess</p>\n<p>On success  redirects to <code>createEditProjectTemplate.html</code></p>",
    "kind": "member",
    "name": "login",
    "type": {
      "names": [
        "function"
      ]
    },
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:logInController~credentials",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>input from user: userName, password.</p>",
        "name": "credentials"
      }
    ],
    "longname": "module:uiServicesModule.module:logInController~credentials~login",
    "$href": "module:uiServicesModule.module:logInController~credentials#login",
    "$id": "T000002R000061"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> </p>\n<p><b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> </p>\n<p><b>Description:</b> Handles Header Visibility and provide global access to popUp.</p>",
    "kind": "module",
    "name": "mainAppController",
    "memberof": "module:uiServicesModule",
    "requires": [
      "module:$scope+https://docs.angularjs.org/guide/scope+external",
      "module:popUp+../documentation/index.html#!/module:authModule.module:authService+internal",
      "module:isSateInitialized+../documentation/index.html#!/module:authModule.module:authService+internal"
    ],
    "type": {
      "names": [
        "controller"
      ]
    },
    "scope": "static",
    "longname": "module:uiServicesModule.module:mainAppController",
    "$href": "module:uiServicesModule.module:mainAppController",
    "$id": "T000002R000063"
  },
  {
    "kind": "class",
    "name": "header",
    "type": {
      "names": [
        "Object"
      ]
    },
    "scope": "inner",
    "classdesc": "<p><b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.</p>\n<p><b>Description:</b> Store header visibility status.</p>",
    "longname": "module:uiServicesModule.module:mainAppController~header",
    "memberof": "module:uiServicesModule.module:mainAppController",
    "$href": "module:uiServicesModule.module:mainAppController~header",
    "$id": "T000002R000064"
  },
  {
    "description": "<p>Stores header visibility</p>",
    "properties": [
      {
        "name": "show"
      }
    ],
    "type": {
      "names": [
        "Bolean"
      ]
    },
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:mainAppController~header",
    "name": "show",
    "longname": "module:uiServicesModule.module:mainAppController~header~show",
    "kind": "member",
    "$href": "module:uiServicesModule.module:mainAppController~header#show",
    "$id": "T000002R000066"
  },
  {
    "description": "<p>Calls <code>isSateInitialized.watching</code> that is been trigered when route state changes when user is authenticated.</p>\n<p>On success  header is visible</p>",
    "kind": "member",
    "name": "checkVisibility",
    "type": {
      "names": [
        "function"
      ]
    },
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:mainAppController~header",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "longname": "module:uiServicesModule.module:mainAppController~header~checkVisibility",
    "$href": "module:uiServicesModule.module:mainAppController~header#checkVisibility",
    "$id": "T000002R000067"
  },
  {
    "kind": "class",
    "name": "popUp",
    "type": {
      "names": [
        "Object"
      ]
    },
    "scope": "inner",
    "classdesc": "<p><b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.  </p>\n<p><b>Description:</b> Initialize pop up.</p>",
    "longname": "module:uiServicesModule.module:mainAppController~popUp",
    "memberof": "module:uiServicesModule.module:mainAppController",
    "$href": "module:uiServicesModule.module:mainAppController~popUp",
    "$id": "T000002R000071"
  },
  {
    "description": "<p>Method is been attched to DOM element's. Onclick popUp is toggled.</p>",
    "kind": "member",
    "name": "togglePopUp",
    "type": {
      "names": [
        "function"
      ]
    },
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:mainAppController~popUp",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "DOMelement"
      }
    ],
    "longname": "module:uiServicesModule.module:mainAppController~popUp~togglePopUp",
    "$href": "module:uiServicesModule.module:mainAppController~popUp#togglePopUp",
    "$id": "T000002R000073"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> </p>\n<p><b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> </p>\n<p><b>Description:</b> Controls UI Accordeon.</p>",
    "kind": "module",
    "name": "mapUiController",
    "memberof": "module:uiServicesModule",
    "requires": [
      "module:$scope+https://docs.angularjs.org/guide/scope+external"
    ],
    "type": {
      "names": [
        "controller"
      ]
    },
    "scope": "static",
    "longname": "module:uiServicesModule.module:mapUiController",
    "$href": "module:uiServicesModule.module:mapUiController",
    "$id": "T000002R000075"
  },
  {
    "kind": "class",
    "name": "accordeon",
    "type": {
      "names": [
        "Object"
      ]
    },
    "scope": "inner",
    "classdesc": "<p><b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.</p>\n<p><b>Description:</b>Holds accordeon functionality.</p>",
    "longname": "module:uiServicesModule.module:mapUiController~accordeon",
    "memberof": "module:uiServicesModule.module:mapUiController",
    "$href": "module:uiServicesModule.module:mapUiController~accordeon",
    "$id": "T000002R000076"
  },
  {
    "description": "<p>Trigers Accordeon functionality by detecting adding class colapse if clicked element has not colapse class.</p>\n<p>On success  header is visible</p>",
    "kind": "member",
    "name": "activeTab",
    "type": {
      "names": [
        "function"
      ]
    },
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:mapUiController~accordeon",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "DOMelement"
      }
    ],
    "longname": "module:uiServicesModule.module:mapUiController~accordeon~activeTab",
    "$href": "module:uiServicesModule.module:mapUiController~accordeon#activeTab",
    "$id": "T000002R000078"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> </p>\n<p><b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> </p>\n<p><b>Description:</b> Controls Back Button (top left on the header).</p>",
    "kind": "module",
    "name": "navController",
    "memberof": "module:uiServicesModule",
    "requires": [
      "module:$scope+https://docs.angularjs.org/guide/scope+external",
      "module:$location+https://docs.angularjs.org/guide/$location+external",
      "module:$rootScope+https://docs.angularjs.org/api/ng/service/$rootScope+external"
    ],
    "type": {
      "names": [
        "controller"
      ]
    },
    "scope": "static",
    "longname": "module:uiServicesModule.module:navController",
    "$href": "module:uiServicesModule.module:navController",
    "$id": "T000002R000080"
  },
  {
    "kind": "class",
    "name": "back",
    "type": {
      "names": [
        "Object"
      ]
    },
    "scope": "inner",
    "classdesc": "<p><b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.</p>\n<p><b>Description:</b> Defines the functionality for back button.</p>",
    "longname": "module:uiServicesModule.module:navController~back",
    "memberof": "module:uiServicesModule.module:navController",
    "$href": "module:uiServicesModule.module:navController~back",
    "$id": "T000002R000081"
  },
  {
    "description": "<p>Redirects to <code>createEditProjectTemplate.html</code></p>",
    "kind": "member",
    "name": "go",
    "type": {
      "names": [
        "function"
      ]
    },
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:navController~back",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "longname": "module:uiServicesModule.module:navController~back~go",
    "$href": "module:uiServicesModule.module:navController~back#go",
    "$id": "T000002R000083"
  },
  {
    "description": "<p><b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> </p>\n<p><b>Parent Module:</b> <a href=\"#!/module:uiServicesModule\"><code>uiServices</code></a> </p>\n<p><b>Description:</b> Controls the data that are appended and the functionality on navigation item  at the top right on of the header.</p>",
    "kind": "module",
    "name": "userController",
    "memberof": "module:uiServicesModule",
    "requires": [
      "module:$scope+https://docs.angularjs.org/guide/scope+external",
      "module:$location+https://docs.angularjs.org/guide/$location+external",
      "module:Session+../documentation/index.html#!/module:authModule.module:Session+internal"
    ],
    "type": {
      "names": [
        "controller"
      ]
    },
    "scope": "static",
    "longname": "module:uiServicesModule.module:userController",
    "$href": "module:uiServicesModule.module:userController",
    "$id": "T000002R000085"
  },
  {
    "kind": "class",
    "name": "user",
    "type": {
      "names": [
        "Object"
      ]
    },
    "scope": "inner",
    "classdesc": "<p><b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.</p>\n<p><b>Description:</b> Redirects to <code>editProjectTemplate.html</code></p>",
    "longname": "module:uiServicesModule.module:userController~user",
    "memberof": "module:uiServicesModule.module:userController",
    "$href": "module:uiServicesModule.module:userController~user",
    "$id": "T000002R000086"
  },
  {
    "description": "<p>Stores user name using <code>Session</code>.</p>",
    "kind": "member",
    "name": "authenticatited",
    "type": {
      "names": [
        "String"
      ]
    },
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:userController~user",
    "longname": "module:uiServicesModule.module:userController~user~authenticatited",
    "$href": "module:uiServicesModule.module:userController~user#authenticatited",
    "$id": "T000002R000088"
  },
  {
    "description": "<p>Redirects to <code>editProjectTemplate.html</code></p>",
    "kind": "member",
    "name": "panel",
    "type": {
      "names": [
        "function"
      ]
    },
    "scope": "inner",
    "memberof": "module:uiServicesModule.module:userController~user",
    "params": [
      {
        "name": "no-argumants"
      }
    ],
    "longname": "module:uiServicesModule.module:userController~user~panel",
    "$href": "module:uiServicesModule.module:userController~user#panel",
    "$id": "T000002R000090"
  }
]);})();