(function() {angular.module('jsDocNG-Data', []).constant('$title',   "Maps App Documentation").constant('$readme',  "<h1>Google Maps App </h1><p>Responsive single page application for non BI users.<br />\nProvide the ability to non technical user's to visualize data using Google maps having as source a CSV file. </p>\n<h4>Technologies:</h4>\n\n<ul>\n<li>HTML 5   </li>\n<li>Zurd Foundation v5.5</li>\n<li>CSS 2/3</li>\n<li>SASS</li>\n<li>Angular JS v1.3.9</li>\n<li>Grunt JS</li>\n<li>Google Maps API v1.3</li>\n<li>PostCode Everywhere API</li>\n<li>Java/JSP v 6.0</li>\n<li>Oracle DB</li>\n</ul>\n<h2>Front End Architecture</h2><p><h4><strong>HTML</strong></h4>\nThe Application makes use of JavaScript MVVC framework, Angular.<br />\nThe HTML of the app is <strong>not</strong> delivered by any server side scripting language. <br />\nIts been loaded to client when the app is loaded and delivered dynamically, through the MVC Logic of Angular.<br /></p>\n<p>The HTML is been deviated to templates/views. <br />\nThe templates/views are been appended into the index.html with the help of the router. <br /><br />\nEvery template/view comes with a controller that defines a local scope for that template/view.<br />\nWith the help of the local scopes that controllers define and with the usage of Directives and Services that access these scopes, a two way data binding is been achieved, creating an interactive UI.<br /></p>\n<p>The templates/views that are been used are: <br /></p>\n<h3 class='docExample'>createEditTemplate</h3>\n<h3 class='docExample'>createProjectTemplate</h3>\n<h3 class='docExample'>editProjectTemplate </h3>\n<h3 class='docExample'> logInTemplate </h3>\n<h3 class='docExample'> mapTemplate </h3>\n<h3 class='docExample'> navTemplate</h3>\n<h3 class='docExample'>userTemplate </h3>\n<h3 class='docExample'>viewMapTemplate </h3>\n\n\n\n<h2><h4><strong>CSS</strong></h4>  </h2><p>The app is been built with the usage of Zurb Foundation and SASS to created a responsive and easy to maintain app.<br />\nThe SASS files divided in three main folders: <br /></p>\n<h3 class='docExample'> Fonts</h3>\n<h3 class='docExample'> Navigation</h3>\n<h3 class='docExample'> Left Panel</h3>\n<h3 class='docExample'>  Right Panel</h3>\n\n\n\n<h2><h4><strong>JavaScript</strong></h4></h2><p>The Application is been divided into four modules:</p>\n<p>The <a href=\"#!/module:app\">app</a> module is on the top level of the hierarchy. The rest three modules are dependencies of the App.</p>\n<p>That modular approach makes the application scalable and easy to be tested as the functionalities are decoupled.</p>\n<p><h3 class='literal'><span class='kind'>module</span> <span><a href=\"#!/module:app\">app</a></span></h3>\nBootstraps the app and defines.</p>\n<ul>\n<li>Implements the routing of the app.</li>\n<li>Executes user authentication using the services of <a href=\"#!/module:authModule\">authModule</a></li>\n</ul>\n<p><h3 class='literal'><span class='kind'>module</span> <span><a href=\"#!/module:authModule\">authModule</a></span></h3>\nProvides authentication services:</p>\n<ul>\n<li>Authenticate a user</li>\n<li>Create a session</li>\n</ul>\n<p><h3 class='literal'><span class='kind'>module</span> <span><a href=\"#!/module:mapModule\">mapModule</a></span></h3> \nProvides  Google maps services:</p>\n<ul>\n<li>Google Map Library</li>\n<li>Map positioning</li>\n<li>Markers</li>\n<li>Heat Map</li>\n<li>KML layers</li>\n<li>Time line</li>\n<li>CSV to Json conversion</li>\n<li>Postcode to Lat/lot conversion</li>\n</ul>\n<p><h3 class='literal'><span class='kind'>module</span> <span><a href=\"#!/module:uiService\">uiService</a></span></h3> \nProvides all the intermediate services to achieve communication between UI and <a href=\"#!/module:mapModule\">mapModule</a></p>\n<ul>\n<li>Tigers :<br />\n  Google Map Library<br />\n  Map positioning<br />\n  Markers<br />\n  Heat Map<br />\n  KML layers<br />\n  Time line<br />\n  CSV to Json conversion<br />\n  Postcode to Lat/lot conversion</li>\n<li>popUp</li>\n<li>animations</li>\n</ul>\n<h2>Maintenance of the App</h2><p><h4>About</h4> \nThe development environment of the app is consisted from the below folders:</p>\n<ul>\n<li><p><strong>app </strong><br /> \n  Contains the minified version of the app. The folder is been updated dynamical from automated build that are defined to Grunt.js file. All the files of the app are been included automatically from the development environment. That folder should be then uploaded in the server as it is. </p>\n</li>\n<li><p><strong>bower_components </strong><br /> \n  Contains all the necessary files for foundation</p>\n</li>\n<li><p><strong>css </strong><br /> \n  Contains the minified development version of the css. Its been produces dynamical from automated build that are defined to Grunt.js file</p>\n</li>\n<li><p><strong>js </strong><br /> \n  Contains the JavaScripts for the  development environment    </p>\n</li>\n<li><p><strong>scss </strong><br /> \n  Contains the SASS files</p>\n</li>\n<li><p><strong>node_modules </strong><br /> \n  Contains the node modules that are needed from the Grunt to implement the automated builds</p>\n</li>\n<li><p><strong>view </strong><br /> \n  Contains the views of the App. In the development environment use of unminified.</p>\n</li>\n<li><p><strong>Grunt.js </strong><br /> \n  Task manager for automated builds</p>\n</li>\n<li><p><strong>index.html </strong><br /> \n  The index page of the app.</p>\n</li>\n</ul>\n<p><br/></p>\n<p><h4>Grunt</h4><br>The Development environment of the app is been automated with Grunt.<br/>\nEvery time that a change is been applied, Grunt will validated the code, minified and extract the resulted app into the app folder.<br/>\nBefore any change is been applied to the development files, <strong>Grunt must be triggered</strong>.</p>\n<p>To triger Grunt open CMD:<br /></p>\n<pre class=\"prettyprint source lang-bash\"><code>cd pathToTheDevelopmentStack</code></pre><pre class=\"prettyprint source lang-bash\"><code>grunt watch</code></pre>").constant('$doclets', [
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
    "description": "<p>$http request to check user credentials on success sets user session with the recived user data.\nMothd is been invocted from <a href=\"#!/module:authModule.authService\"><code>login(credentials)</code></a></p>",
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
        "text": "mapModule",
        "value": "mapModule"
      }
    ],
    "kind": "module",
    "name": "mapModule",
    "access": "public",
    "scope": "static",
    "description": "<p>Conetains Map Services &amp; functionality.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "longname": "module:mapModule",
    "$href": "module:mapModule",
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
        "factory"
      ]
    },
    "name": "gMapsLib",
    "memberof": "module:mapModule",
    "description": "<p>fulfieds that a google map canvas has been successfully loaded.</p>",
    "requires": [
      "module:$q",
      "module:$window"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:mapModule.gMapsLib",
    "jsConcept": true,
    "$href": "module:mapModule.gMapsLib",
    "$id": "T000002R000118"
  },
  {
    "kind": "class",
    "name": "mapsDefer",
    "memberof": "module:mapModule.gMapsLib",
    "classdesc": "<p>Promise that a google map canvas has been successfully loaded</p>",
    "scope": "static",
    "longname": "module:mapModule.gMapsLib.mapsDefer",
    "$href": "module:mapModule.gMapsLib.mapsDefer",
    "$id": "T000002R000119"
  },
  {
    "kind": "function",
    "name": "asyncLoad",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "asyncUrl"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "callbackName"
      }
    ],
    "memberof": "module:mapModule.gMapsLib",
    "description": "<p>Appends Google Maps Head Script with a callback function \n<a href=\"#!/module:mapModule.gMapsLib.mapsDefer\"><code>googleMapsInitialized</code></a></p>",
    "scope": "static",
    "longname": "module:mapModule.gMapsLib.asyncLoad",
    "$href": "module:mapModule.gMapsLib#asyncLoad",
    "$id": "T000002R000122"
  },
  {
    "kind": "member",
    "name": "googleMapsInitialized",
    "params": [
      {
        "name": "no-param"
      }
    ],
    "memberof": "module:mapModule.gMapsLib.mapsDefer",
    "description": "<p>Use of <code>$window</code> to triger the call back function that has been appended from <a href=\"#!/module:mapModule.gMapsLib\"><code>asyncLoad</code></a>\nWhen after callback runs <a href=\"#!/module:mapModule.gMapsLib.mapsDefer\"><code>mapsDefer</code></a>  is been resolved.</p>",
    "scope": "static",
    "longname": "module:mapModule.gMapsLib.mapsDefer.googleMapsInitialized",
    "$href": "module:mapModule.gMapsLib.mapsDefer#googleMapsInitialized",
    "$id": "T000002R000128"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:mapModule.gMapsLib",
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "promise"
          ]
        }
      }
    ],
    "description": "<p>Promise fullfield after <a href=\"#!/module:mapModule.gMapsLib.mapsDefer#googleMapsInitialized\"><code>googleMapsInitialized</code></a> runs</p>",
    "scope": "static",
    "longname": "module:mapModule.gMapsLib.return",
    "$href": "module:mapModule.gMapsLib#return",
    "$id": "T000002R000130"
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
        "errorHandler"
      ]
    },
    "name": "errorHandler",
    "memberof": "module:mapModule",
    "description": "<p>Checks CSV and <code> mapcontrols.settings</code>   for errors and populates a pop up with the relevant errors</p>",
    "requires": [
      "module:popUp+module:uiServices.popUp"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:mapModule.errorHandler",
    "jsConcept": true,
    "$href": "module:mapModule.errorHandler",
    "$id": "T000002R000132"
  },
  {
    "kind": "class",
    "name": "handler",
    "memberof": "module:mapModule.errorHandler",
    "classdesc": "<p>Encapulates <a href=\"#!/module:mapModule.errorHandler\"><code>errorHandler</code></a> functionality</p>",
    "scope": "static",
    "longname": "module:mapModule.errorHandler.handler",
    "$href": "module:mapModule.errorHandler.handler",
    "$id": "T000002R000133"
  },
  {
    "kind": "member",
    "name": "csvData",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "input"
      },
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "recordNo"
      }
    ],
    "memberof": "module:mapModule.errorHandler.handler",
    "exceptions": [
      {
        "description": "<p><code>CSV-Error-POSTCODE</code></p>"
      },
      {
        "description": "<p><code>CSV-Error-SUBCATEGORY</code></p>"
      }
    ],
    "description": "<p>Chek's if  POSTCODE and SUBCATEGORY CSV columns are empty string, ignores white spaces.</p>",
    "scope": "static",
    "longname": "module:mapModule.errorHandler.handler.csvData",
    "$href": "module:mapModule.errorHandler.handler#csvData",
    "$id": "T000002R000135"
  },
  {
    "kind": "member",
    "name": "addErrorClass",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:mapModule.errorHandler.handler",
    "description": "<p>Add's class: error to modal Window:</p>\n<blockquote>\n<p> class will apply warning styles to the modal\n class will not allow new content to be appeneded to modal up ultill the class is been removed (ERROR is been fixed).</p>\n</blockquote>",
    "scope": "static",
    "longname": "module:mapModule.errorHandler.handler.addErrorClass",
    "$href": "module:mapModule.errorHandler.handler#addErrorClass",
    "$id": "T000002R000143"
  },
  {
    "kind": "member",
    "name": "removeErrorClass",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:mapModule.errorHandler.handler",
    "description": "<p>Remove class: error from the modal window.</p>",
    "scope": "static",
    "longname": "module:mapModule.errorHandler.handler.removeErrorClass",
    "$href": "module:mapModule.errorHandler.handler#removeErrorClass",
    "$id": "T000002R000145"
  },
  {
    "kind": "function",
    "name": "csv",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "input"
      },
      {
        "type": {
          "names": [
            "Interger"
          ]
        },
        "name": "recordNo"
      }
    ],
    "memberof": "module:mapModule.errorHandler",
    "access": "public",
    "description": "<p>Validateds CVS record .\nIf ERROR detected, EXEPTION is thrown and is published throught modal</p>",
    "scope": "static",
    "longname": "module:mapModule.errorHandler.csv",
    "$href": "module:mapModule.errorHandler#csv",
    "$id": "T000002R000147"
  },
  {
    "kind": "function",
    "name": "settingsParseJson",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "input"
      }
    ],
    "memberof": "module:mapModule.errorHandler",
    "access": "public",
    "description": "<p>Validateds <code> mapcontrols.settings</code> .\nIf ERROR detected, EXEPTION is thrown and is published throught modal.</p>",
    "scope": "static",
    "longname": "module:mapModule.errorHandler.settingsParseJson",
    "$href": "module:mapModule.errorHandler#settingsParseJson",
    "$id": "T000002R000149"
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
    "name": "fetchDataFromCsvFactory",
    "memberof": "module:mapModule",
    "description": "<p>Gets CSV with  XMLHttpRequest and  convert it to JSON.</p>",
    "requires": [
      "module:$http",
      "module:popUp+module:uiServices.popUp"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:mapModule.fetchDataFromCsvFactory",
    "jsConcept": true,
    "$href": "module:mapModule.fetchDataFromCsvFactory",
    "$id": "T000002R000153"
  },
  {
    "kind": "class",
    "name": "parse",
    "memberof": "module:mapModule.fetchDataFromCsvFactory",
    "classdesc": "<p>Encapsulate parse CSV to JSON functionality.</p>",
    "scope": "static",
    "longname": "module:mapModule.fetchDataFromCsvFactory.parse",
    "$href": "module:mapModule.fetchDataFromCsvFactory.parse",
    "$id": "T000002R000154"
  },
  {
    "kind": "member",
    "name": "CsvToJson",
    "memberof": "module:mapModule.fetchDataFromCsvFactory.parse",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "response"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>JSON</p>"
      }
    ],
    "description": "<p>Converts CSV to JSON.</p>",
    "scope": "static",
    "longname": "module:mapModule.fetchDataFromCsvFactory.parse.CsvToJson",
    "$href": "module:mapModule.fetchDataFromCsvFactory.parse#CsvToJson",
    "$id": "T000002R000156"
  },
  {
    "kind": "member",
    "name": "get",
    "memberof": "module:mapModule.fetchDataFromCsvFactory",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "path"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>CSV to JSON format.</p>"
      }
    ],
    "description": "<p>Gets as input the path of the CVS.\nImplements an xhttprequest to recice the CVS\nInvoke's <a href=\"#!/module:mapModule.fetchDataFromCsvFactory.parse\"><code> parse.CsvToJson</code></a>\nOn success returns the rsponse\nOn failure informs user with modal.</p>",
    "scope": "static",
    "longname": "module:mapModule.fetchDataFromCsvFactory.get",
    "$href": "module:mapModule.fetchDataFromCsvFactory#get",
    "$id": "T000002R000158"
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
    "name": "heatMap",
    "memberof": "module:mapModule",
    "description": "<p>HeatMap services.</p>",
    "requires": [
      "module:popUp+module:uiServices.popUp"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:mapModule.heatMap",
    "jsConcept": true,
    "$href": "module:mapModule.heatMap",
    "$id": "T000002R000182"
  },
  {
    "kind": "class",
    "name": "heatMap",
    "memberof": "module:mapModule.heatMap",
    "classdesc": "<p>Encapsulate parse Heat Map functionality.</p>",
    "scope": "static",
    "longname": "module:mapModule.heatMap.heatMap",
    "$href": "module:mapModule.heatMap.heatMap",
    "$id": "T000002R000183"
  },
  {
    "kind": "member",
    "name": "construct",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "coordinates"
      }
    ],
    "memberof": "module:mapModule.heatMap.heatMap",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>google map</p>"
      }
    ],
    "description": "<p>Instanciate and initialize google map</p>",
    "scope": "static",
    "longname": "module:mapModule.heatMap.heatMap.construct",
    "$href": "module:mapModule.heatMap.heatMap#construct",
    "$id": "T000002R000185"
  },
  {
    "kind": "member",
    "name": "getCoord",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "memberof": "module:mapModule.heatMap.heatMap",
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "<p>coordinates</p>"
      }
    ],
    "description": "<p>Returns a array of google.maps.LatLng Object based on the given CSV as input for constructing the Heat Map.</p>",
    "scope": "static",
    "longname": "module:mapModule.heatMap.heatMap.getCoord",
    "$href": "module:mapModule.heatMap.heatMap#getCoord",
    "$id": "T000002R000189"
  },
  {
    "kind": "member",
    "name": "construct",
    "memberof": "module:mapModule.heatMap",
    "access": "public",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "coord"
      }
    ],
    "description": "<p>Return a new Heatmap Layer.\nInvoked when the Heat Map is loaded first time.</p>",
    "scope": "static",
    "longname": "module:mapModule.heatMap.construct",
    "$href": "module:mapModule.heatMap#construct",
    "$id": "T000002R000193"
  },
  {
    "kind": "member",
    "name": "disConstruct",
    "memberof": "module:mapModule.heatMap",
    "access": "public",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "description": "<p>Disconstruct the given Heatmap Layer</p>",
    "scope": "static",
    "longname": "module:mapModule.heatMap.disConstruct",
    "$href": "module:mapModule.heatMap#disConstruct",
    "$id": "T000002R000195"
  },
  {
    "kind": "member",
    "name": "get",
    "memberof": "module:mapModule.heatMap",
    "access": "public",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "description": "<p>Disconstruct the given Heatmap Layer\nInvoked when the Heat Map is loaded dynamically with resticted coordinates.\n{@see module:mapModule.timeline services}</p>",
    "scope": "static",
    "longname": "module:mapModule.heatMap.get",
    "$href": "module:mapModule.heatMap#get",
    "$id": "T000002R000197"
  },
  {
    "kind": "member",
    "name": "setRadius",
    "memberof": "module:mapModule.heatMap",
    "access": "public",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "description": "<p>Set the radius of the Heatmap Layer</p>",
    "scope": "static",
    "longname": "module:mapModule.heatMap.setRadius",
    "$href": "module:mapModule.heatMap#setRadius",
    "$id": "T000002R000199"
  },
  {
    "kind": "member",
    "name": "setOpacity",
    "memberof": "module:mapModule.heatMap",
    "access": "public",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "description": "<p>Set the opacity of the Heatmap Layer</p>",
    "scope": "static",
    "longname": "module:mapModule.heatMap.setOpacity",
    "$href": "module:mapModule.heatMap#setOpacity",
    "$id": "T000002R000201"
  },
  {
    "kind": "member",
    "name": "toggleView",
    "memberof": "module:mapModule.heatMap",
    "access": "public",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "description": "<p>show/hide Heatmap Layer</p>",
    "scope": "static",
    "longname": "module:mapModule.heatMap.toggleView",
    "$href": "module:mapModule.heatMap#toggleView",
    "$id": "T000002R000203"
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
    "name": "kmlLayer",
    "memberof": "module:mapModule",
    "description": "<p>Appends KML layer using FusionTables.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:mapModule.kmlLayer",
    "jsConcept": true,
    "$href": "module:mapModule.kmlLayer",
    "$id": "T000002R000205"
  },
  {
    "kind": "class",
    "name": "kml",
    "memberof": "module:mapModule.kmlLayer",
    "classdesc": "<p>Encapsulate's KML Layer functionality</p>",
    "scope": "static",
    "longname": "module:mapModule.kmlLayer.kml",
    "$href": "module:mapModule.kmlLayer.kml",
    "$id": "T000002R000206"
  },
  {
    "kind": "member",
    "name": "options",
    "memberof": "module:mapModule.kmlLayer.kml",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>KMLsettings</p>"
      }
    ],
    "description": "<p>kml settings</p>",
    "scope": "static",
    "longname": "module:mapModule.kmlLayer.kml.options",
    "$href": "module:mapModule.kmlLayer.kml#options",
    "$id": "T000002R000208"
  },
  {
    "kind": "function",
    "name": "get",
    "memberof": "module:mapModule.kmlLayer",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>KMLLayer</p>"
      }
    ],
    "description": "<p>Returns an instance of a KML layer using  <code>google.maps.FusionTablesLayer</code> API</p>",
    "scope": "static",
    "longname": "module:mapModule.kmlLayer.get",
    "$href": "module:mapModule.kmlLayer#get",
    "$id": "T000002R000216"
  },
  {
    "kind": "function",
    "name": "set",
    "memberof": "module:mapModule.kmlLayer",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "access": "public",
    "description": "<p>Sette for a KMLlayer instance using  <code>settings.layerObject.setOptions</code> API</p>",
    "scope": "static",
    "longname": "module:mapModule.kmlLayer.set",
    "$href": "module:mapModule.kmlLayer#set",
    "$id": "T000002R000218"
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
    "name": "gMap",
    "memberof": "module:mapModule",
    "description": "<p>Appends a google maps and trigers its features.</p>",
    "requires": [
      "module:$q",
      "module:fetchDataFromCsvFactory+module:mapModule.fetchDataFromCsvFactory",
      "module:machPostCodeTo+module:mapModule.machPostCodeTo",
      "module:kmlLayer+module:mapModule.kmlLayer",
      "module:markers+module:mapModule.markers",
      "module:heatMap+module:mapModule.heatMap",
      "module:errorHandler+module.mapModule.errorHandler",
      "module:timeline+module:mapModule.timeline"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:mapModule.gMap",
    "jsConcept": true,
    "$href": "module:mapModule.gMap",
    "$id": "T000002R000220"
  },
  {
    "kind": "class",
    "name": "map",
    "memberof": "module:mapModule.gMap",
    "classdesc": "<p>Encapsulate Google Map functionality.</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.map",
    "$href": "module:mapModule.gMap.map",
    "$id": "T000002R000221"
  },
  {
    "kind": "member",
    "name": "mapLong",
    "type": {
      "names": [
        "Float"
      ]
    },
    "memberof": "module:mapModule.gMap.map",
    "description": "<p>lontitude for UK</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.map.mapLong",
    "$href": "module:mapModule.gMap.map#mapLong",
    "$id": "T000002R000223"
  },
  {
    "kind": "member",
    "name": "mapLang",
    "type": {
      "names": [
        "Float"
      ]
    },
    "memberof": "module:mapModule.gMap.map",
    "description": "<p>latitude for UK</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.map.mapLang",
    "$href": "module:mapModule.gMap.map#mapLang",
    "$id": "T000002R000225"
  },
  {
    "kind": "class",
    "name": "mapOptions",
    "memberof": "module:mapModule.gMap.map",
    "description": "<p>Maps Options</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.map.mapOptions",
    "$href": "module:mapModule.gMap.map.mapOptions",
    "$id": "T000002R000227"
  },
  {
    "kind": "member",
    "name": "zoom",
    "memberof": "module:mapModule.gMap.map.mapOptions",
    "description": "<p>Maps Zoom default value 6</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.map.mapOptions.zoom",
    "$href": "module:mapModule.gMap.map.mapOptions#zoom",
    "$id": "T000002R000229"
  },
  {
    "kind": "member",
    "name": "center",
    "memberof": "module:mapModule.gMap.map.mapOptions",
    "description": "<p>Maps Zoom default value 6</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.map.mapOptions.center",
    "$href": "module:mapModule.gMap.map.mapOptions#center",
    "$id": "T000002R000231"
  },
  {
    "kind": "member",
    "name": "set",
    "memberof": "module:mapModule.gMap.map",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>MapOptions</p>"
      }
    ],
    "description": "<p>Returns an maps option Object with given settings</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.map.set",
    "$href": "module:mapModule.gMap.map#set",
    "$id": "T000002R000233"
  },
  {
    "kind": "function",
    "name": "append",
    "memberof": "module:mapModule.gMap",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>settings</p>"
      }
    ],
    "description": "<p>Create a new intsance of a Map, and returns the updated settings.</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.append",
    "$href": "module:mapModule.gMap#append",
    "$id": "T000002R000237"
  },
  {
    "kind": "function",
    "name": "reset",
    "memberof": "module:mapModule.gMap",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>DefaultMapOptions</p>"
      }
    ],
    "description": "<p>Use the default map option to reset the Map.</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.reset",
    "$href": "module:mapModule.gMap#reset",
    "$id": "T000002R000240"
  },
  {
    "kind": "function",
    "name": "set",
    "memberof": "module:mapModule.gMap",
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "zoom"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>MapOptions</p>"
      }
    ],
    "description": "<p>Sets the options of the current Map instance</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.set",
    "$href": "module:mapModule.gMap#set",
    "$id": "T000002R000244"
  },
  {
    "kind": "function",
    "name": "removeMap",
    "memberof": "module:mapModule.gMap",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "access": "public",
    "description": "<p>Removes the google map lybrary.</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.removeMap",
    "$href": "module:mapModule.gMap#removeMap",
    "$id": "T000002R000248"
  },
  {
    "kind": "function",
    "name": "features",
    "memberof": "module:mapModule.gMap",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>settings</p>"
      }
    ],
    "description": "<p>Trigers the features of the google map according to the settings values..</p>",
    "scope": "static",
    "longname": "module:mapModule.gMap.features",
    "$href": "module:mapModule.gMap#features",
    "$id": "T000002R000251"
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
    "name": "markers",
    "memberof": "module:mapModule",
    "description": "<p>Appends markers on the google map.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:mapModule.markers",
    "jsConcept": true,
    "$href": "module:mapModule.markers",
    "$id": "T000002R000264"
  },
  {
    "kind": "class",
    "name": "markersToolSet",
    "memberof": "module:mapModule.markers",
    "classdesc": "<p>Encapsulate Markers functionality.</p>",
    "scope": "static",
    "longname": "module:mapModule.markers.markersToolSet",
    "$href": "module:mapModule.markers.markersToolSet",
    "$id": "T000002R000265"
  },
  {
    "kind": "member",
    "name": "markersToolSet",
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "recordNo"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "isUniqueCategory"
      }
    ],
    "memberof": "module:mapModule.markers.markersToolSet",
    "description": "<p>Finds diffrent categories of the Markers</p>",
    "scope": "static",
    "longname": "module:mapModule.markers.markersToolSet.markersToolSet",
    "$href": "module:mapModule.markers.markersToolSet#markersToolSet",
    "$id": "T000002R000267"
  },
  {
    "kind": "member",
    "name": "initializeMarkerImage",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "memberof": "module:mapModule.markers.markersToolSet",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>GoogleMapsImageOptions</p>"
      }
    ],
    "description": "<p>Returns default options for the dimentions of the images of the markers.</p>",
    "scope": "static",
    "longname": "module:mapModule.markers.markersToolSet.initializeMarkerImage",
    "$href": "module:mapModule.markers.markersToolSet#initializeMarkerImage",
    "$id": "T000002R000273"
  },
  {
    "kind": "member",
    "name": "initializeMarkerinfoWindow",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:mapModule.markers.markersToolSet",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>GoogleMapsInfoWindowContent</p>"
      }
    ],
    "scope": "static",
    "longname": "module:mapModule.markers.markersToolSet.initializeMarkerinfoWindow",
    "$href": "module:mapModule.markers.markersToolSet#initializeMarkerinfoWindow",
    "$id": "T000002R000278"
  },
  {
    "kind": "member",
    "name": "buildMarker",
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "recordNo"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "image"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "infowindow"
      }
    ],
    "memberof": "module:mapModule.markers.markersToolSet",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>marker</p>"
      }
    ],
    "description": "<p>for each given set of goordination appends a marker with an event listner that trigers a popup   that contains  given html.</p>",
    "scope": "static",
    "longname": "module:mapModule.markers.markersToolSet.buildMarker",
    "$href": "module:mapModule.markers.markersToolSet#buildMarker",
    "$id": "T000002R000281"
  },
  {
    "kind": "function",
    "name": "get",
    "memberof": "module:mapModule.markers",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>settings.</p>"
      }
    ],
    "description": "<p>returns settings extended with  markers array that contains all the nesesary data for the markers.</p>",
    "scope": "static",
    "longname": "module:mapModule.markers.get",
    "$href": "module:mapModule.markers#get",
    "$id": "T000002R000291"
  },
  {
    "kind": "function",
    "name": "toggleView",
    "memberof": "module:mapModule.markers",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "access": "public",
    "description": "<p>show/hide Markers.</p>",
    "scope": "static",
    "longname": "module:mapModule.markers.toggleView",
    "$href": "module:mapModule.markers#toggleView",
    "$id": "T000002R000296"
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
    "name": "machPostCodeTo",
    "memberof": "module:mapModule",
    "description": "<p>maches postcodes with LatLot.</p>",
    "requires": [
      "module:errorHandler+module:mapModule.errorHandler"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:mapModule.machPostCodeTo",
    "jsConcept": true,
    "$href": "module:mapModule.machPostCodeTo",
    "$id": "T000002R000299"
  },
  {
    "kind": "class",
    "name": "coordination",
    "memberof": "module:mapModule.machPostCodeTo",
    "classdesc": "<p>Encapsulate postcode to LAT/LOT functionality.</p>",
    "scope": "static",
    "longname": "module:mapModule.machPostCodeTo.coordination",
    "$href": "module:mapModule.machPostCodeTo.coordination",
    "$id": "T000002R000300"
  },
  {
    "kind": "member",
    "name": "handleErrors",
    "memberof": "module:mapModule.machPostCodeTo.coordination",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "response"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "<p>response</p>"
      }
    ],
    "description": "<p>Checks the csv for wrong data</p>",
    "scope": "static",
    "longname": "module:mapModule.machPostCodeTo.coordination.handleErrors",
    "$href": "module:mapModule.machPostCodeTo.coordination#handleErrors",
    "$id": "T000002R000302"
  },
  {
    "kind": "member",
    "name": "toLatLon",
    "memberof": "module:mapModule.machPostCodeTo.coordination",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "apiResponse"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "response"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "<p>response</p>"
      }
    ],
    "description": "<p>Matches postcode with coordinations</p>",
    "scope": "static",
    "longname": "module:mapModule.machPostCodeTo.coordination.toLatLon",
    "$href": "module:mapModule.machPostCodeTo.coordination#toLatLon",
    "$id": "T000002R000308"
  },
  {
    "kind": "member",
    "name": "get",
    "memberof": "module:mapModule.machPostCodeTo.coordination",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "apiResponse"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "response"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "<p>response.</p>"
      }
    ],
    "description": "<p>Returns an array of LatLot</p>",
    "scope": "static",
    "longname": "module:mapModule.machPostCodeTo.coordination.get",
    "$href": "module:mapModule.machPostCodeTo.coordination#get",
    "$id": "T000002R000310"
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
    "name": "timeline",
    "memberof": "module:mapModule",
    "requires": [
      "module:$interval",
      "module:popUp+module:uiServices.popUp",
      "module:heatMap+module:mapModule.heatMap"
    ],
    "description": "<p>Provides all the functionality of timeline</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:mapModule.timeline",
    "jsConcept": true,
    "$href": "module:mapModule.timeline",
    "$id": "T000002R000320"
  },
  {
    "kind": "class",
    "name": "timeline",
    "memberof": "module:mapModule.timeline",
    "classdesc": "<p>Encapsulate Timeline functionality.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline",
    "$href": "module:mapModule.timeline.timeline",
    "$id": "T000002R000321"
  },
  {
    "kind": "member",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "name": "indicator",
    "memberof": "module:mapModule.timeline.timeline",
    "description": "<p>Current time stamp</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.indicator",
    "$href": "module:mapModule.timeline.timeline#indicator",
    "$id": "T000002R000323"
  },
  {
    "kind": "member",
    "type": {
      "names": [
        "Boolean"
      ]
    },
    "name": "clicked",
    "memberof": "module:mapModule.timeline.timeline",
    "description": "<p>Timeline is animating</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.clicked",
    "$href": "module:mapModule.timeline.timeline#clicked",
    "$id": "T000002R000325"
  },
  {
    "kind": "member",
    "type": {
      "names": [
        "Array"
      ]
    },
    "name": "acceptableCoords",
    "memberof": "module:mapModule.timeline.timeline",
    "description": "<p>Domain of coordination that are vissible in the current time stamp.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.acceptableCoords",
    "$href": "module:mapModule.timeline.timeline#acceptableCoords",
    "$id": "T000002R000327"
  },
  {
    "kind": "member",
    "type": {
      "names": [
        "Interger"
      ]
    },
    "name": "cashedIndicator",
    "memberof": "module:mapModule.timeline.timeline",
    "description": "<p>Previous Time stamp</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.cashedIndicator",
    "$href": "module:mapModule.timeline.timeline#cashedIndicator",
    "$id": "T000002R000329"
  },
  {
    "kind": "class",
    "name": "timelineMemory",
    "memberof": "module:mapModule.timeline",
    "classdesc": "<p>Encapsulate Timeline Memory functionality.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timelineMemory",
    "$href": "module:mapModule.timeline.timelineMemory",
    "$id": "T000002R000334"
  },
  {
    "kind": "member",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "name": "minMonth",
    "memberof": "module:mapModule.timeline.timeline.dates",
    "description": "<p>minMonth of the timeline</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.dates.minMonth",
    "$href": "module:mapModule.timeline.timeline.dates#minMonth",
    "$id": "T000002R000336"
  },
  {
    "kind": "member",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "name": "minYear",
    "memberof": "module:mapModule.timeline.timeline.dates",
    "description": "<p>minYear of the timeline</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.dates.minYear",
    "$href": "module:mapModule.timeline.timeline.dates#minYear",
    "$id": "T000002R000338"
  },
  {
    "kind": "member",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "name": "maxMonth",
    "memberof": "module:mapModule.timeline.timeline.dates",
    "description": "<p>maxMonth of the timeline</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.dates.maxMonth",
    "$href": "module:mapModule.timeline.timeline.dates#maxMonth",
    "$id": "T000002R000340"
  },
  {
    "kind": "member",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "name": "maxYear",
    "memberof": "module:mapModule.timeline.timeline.dates",
    "description": "<p>maxYear of the timeline</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.dates.maxYear",
    "$href": "module:mapModule.timeline.timeline.dates#maxYear",
    "$id": "T000002R000342"
  },
  {
    "kind": "member",
    "name": "findZeroBasedMonth",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "month"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Float"
          ]
        },
        "description": "<p>month</p>"
      }
    ],
    "description": "<p>Returns month in  zerobased format if month is earliear than Octombers</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.findZeroBasedMonth",
    "$href": "module:mapModule.timeline.timeline#findZeroBasedMonth",
    "$id": "T000002R000344"
  },
  {
    "kind": "member",
    "name": "currentIndicator",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "description": "<p>currentIndicator</p>"
      }
    ],
    "description": "<p>Given the current date that is represented on the map Returns an integer represantation of the month having as a domain the spectrum of starting and ending date.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.currentIndicator",
    "$href": "module:mapModule.timeline.timeline#currentIndicator",
    "$id": "T000002R000348"
  },
  {
    "kind": "member",
    "name": "incrementTimeIndicator",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "mapcontrols"
      }
    ],
    "description": "<p>Uses $interval to automaticlly increment the TimeIndicator up untill it reach the final date of the domain.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.incrementTimeIndicator",
    "$href": "module:mapModule.timeline.timeline#incrementTimeIndicator",
    "$id": "T000002R000365"
  },
  {
    "kind": "member",
    "name": "incrementTimeIndicatorFromCurrentTimeStampToEnd",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "DOMElement"
          ]
        },
        "name": "$event"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "mapcontrols"
      }
    ],
    "description": "<p>Uses $interval to automaticlly increment the TimeIndicator up untill it reach the final date.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.incrementTimeIndicatorFromCurrentTimeStampToEnd",
    "$href": "module:mapModule.timeline.timeline#incrementTimeIndicatorFromCurrentTimeStampToEnd",
    "$id": "T000002R000371"
  },
  {
    "kind": "member",
    "name": "findMinMaxDates",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "currentDate"
      }
    ],
    "description": "<p>Finds the earliest &amp; latest date.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.findMinMaxDates",
    "$href": "module:mapModule.timeline.timeline#findMinMaxDates",
    "$id": "T000002R000376"
  },
  {
    "kind": "member",
    "name": "errorHandler",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "date"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "recordNo"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>date</p>"
      }
    ],
    "description": "<p>Validates that the date is in the right format</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.errorHandler",
    "$href": "module:mapModule.timeline.timeline#errorHandler",
    "$id": "T000002R000380"
  },
  {
    "kind": "member",
    "name": "setMinMaxDates",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "response"
      }
    ],
    "description": "<p>Sets min max Dates</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.setMinMaxDates",
    "$href": "module:mapModule.timeline.timeline#setMinMaxDates",
    "$id": "T000002R000384"
  },
  {
    "kind": "class",
    "name": "dates",
    "memberof": "module:mapModule.timeline.timeline",
    "description": "<p>Initializatioin of max min dates</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.dates",
    "$href": "module:mapModule.timeline.timeline.dates",
    "$id": "T000002R000387"
  },
  {
    "kind": "member",
    "name": "totalMonth",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "maxYear"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "maxMonth"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "currentYear"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "currentMonth"
      }
    ],
    "description": "<p>Finds and returns as integer the number of the total number of months.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.totalMonth",
    "$href": "module:mapModule.timeline.timeline#totalMonth",
    "$id": "T000002R000392"
  },
  {
    "kind": "member",
    "name": "monthAsNumber",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "currentYear"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "currentMonth"
      }
    ],
    "description": "<p>Given a month inside the timeline range returns its position.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.monthAsNumber",
    "$href": "module:mapModule.timeline.timeline#monthAsNumber",
    "$id": "T000002R000400"
  },
  {
    "kind": "member",
    "name": "resetHeatMapMemory",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "description": "<p>As timeline is been implemented, multiple heatmap layers are been apeended on map. Its reference of these layers are been stored in 2 tables: cashedHeatMapsBackrward, cashedHeatMapsForward accorting with how the timeline is been accessed. resetHeatMapMemory deletes the heatmaps by setting them with null</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.resetHeatMapMemory",
    "$href": "module:mapModule.timeline.timeline#resetHeatMapMemory",
    "$id": "T000002R000402"
  },
  {
    "kind": "member",
    "name": "visibleCoords",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "response"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "timeIndicator"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "description": "<p>Given a current timestamp itterates all the dates and ditermibnes witch set of LatLot should be visible.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.visibleCoords",
    "$href": "module:mapModule.timeline.timeline#visibleCoords",
    "$id": "T000002R000409"
  },
  {
    "kind": "member",
    "name": "animate",
    "memberof": "module:mapModule.timeline.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "response"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "timeIndicator"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "direction"
      }
    ],
    "description": "<p>Constract and dDescontract multiple heatmap and markers layers as the timeline Indicator is moving forword and backword.</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeline.animate",
    "$href": "module:mapModule.timeline.timeline#animate",
    "$id": "T000002R000414"
  },
  {
    "kind": "function",
    "name": "get",
    "memberof": "module:mapModule.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "response"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>CSV to JSON format.</p>"
      }
    ],
    "description": "<p>sets and initialize the timeline object and all the map layers for timeline implementation</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.get",
    "$href": "module:mapModule.timeline#get",
    "$id": "T000002R000424"
  },
  {
    "kind": "function",
    "name": "get",
    "memberof": "module:mapModule.timeline",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>Timeline.</p>"
      }
    ],
    "description": "<p>Returns timeline object</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.get",
    "$href": "module:mapModule.timeline#get",
    "$id": "T000002R000427"
  },
  {
    "kind": "function",
    "name": "clearTimeMachine",
    "memberof": "module:mapModule.timeline",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "access": "public",
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "<p>HeatMapMemory.</p>"
      }
    ],
    "description": "<p>All timline map layers are been disconstracted</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.clearTimeMachine",
    "$href": "module:mapModule.timeline#clearTimeMachine",
    "$id": "T000002R000429"
  },
  {
    "kind": "function",
    "name": "timeMachine",
    "memberof": "module:mapModule.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "response"
      },
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "timeIndicator"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "direction"
      }
    ],
    "access": "public",
    "description": "<p>Timeline is been moved to given timestamp</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.timeMachine",
    "$href": "module:mapModule.timeline#timeMachine",
    "$id": "T000002R000431"
  },
  {
    "kind": "function",
    "name": "zeroBasedMonth",
    "memberof": "module:mapModule.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "month"
      }
    ],
    "access": "public",
    "tags": [
      {
        "originalTitle": "reurn",
        "title": "reurn",
        "text": "{Float}",
        "value": "{Float}"
      }
    ],
    "description": "<p>Returns a 2 digit representation of a month if month &lt; Octomber</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.zeroBasedMonth",
    "$href": "module:mapModule.timeline#zeroBasedMonth",
    "$id": "T000002R000433"
  },
  {
    "kind": "function",
    "name": "clearTimeMachine",
    "memberof": "module:mapModule.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      }
    ],
    "access": "public",
    "tags": [
      {
        "originalTitle": "reurn",
        "title": "reurn",
        "text": "{Float} date",
        "value": "{Float} date"
      }
    ],
    "description": "<p>Much indicator integer value to a date</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.clearTimeMachine",
    "$href": "module:mapModule.timeline#clearTimeMachine",
    "$id": "T000002R000435"
  },
  {
    "kind": "function",
    "name": "moveInTimeByIncrementTimeIndicator",
    "memberof": "module:mapModule.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "mapcontrolsObj"
      }
    ],
    "access": "public",
    "tags": [
      {
        "originalTitle": "reurn",
        "title": "reurn",
        "text": "{Float} date",
        "value": "{Float} date"
      }
    ],
    "description": "<p>Indicator is moving one timestamp backwords or forwords</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.moveInTimeByIncrementTimeIndicator",
    "$href": "module:mapModule.timeline#moveInTimeByIncrementTimeIndicator",
    "$id": "T000002R000437"
  },
  {
    "kind": "function",
    "name": "moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd",
    "memberof": "module:mapModule.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "mapcontrolsObj"
      },
      {
        "type": {
          "names": [
            "DOMElement"
          ]
        },
        "name": "mapcontrolsObj"
      }
    ],
    "access": "public",
    "description": "<p>Indicator is moving one timestamp  forwords  till the last timestamp</p>",
    "scope": "static",
    "longname": "module:mapModule.timeline.moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd",
    "$href": "module:mapModule.timeline#moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd",
    "$id": "T000002R000439"
  },
  {
    "kind": "function",
    "name": "bindMaptoTimeline",
    "memberof": "module:mapModule.timeline",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "settings"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "name": "resetHetMap"
      }
    ],
    "access": "public",
    "description": "<p>Timeline must be reinisialized when map attributes is changed.\nTimeline animation appends multiple heatMap layers.\nHeatMap layers are stored in an object array in timeline service under timelineMemory object.\nTimeline reinitialization is been achived by:</p>\n<blockquote>\n<p>Setting null the Heatmap objects in timelineMemory array &amp; clearng the timelineMemory array\nSetting null the Heatmap objects in settings,\nSettings current month as 0 (first in the range of timeline),\nSet a new timeline with a new heatMap based on the given radius.</p>\n</blockquote>",
    "scope": "static",
    "longname": "module:mapModule.timeline.bindMaptoTimeline",
    "$href": "module:mapModule.timeline#bindMaptoTimeline",
    "$id": "T000002R000441"
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
    "$id": "T000002R000444"
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
    "$id": "T000002R000446"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.createEditController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.createEditController.$scope",
    "$href": "module:uiServices.createEditController.$scope",
    "$id": "T000002R000447"
  },
  {
    "kind": "class",
    "name": "project",
    "memberof": "module:uiServices.createEditController.$scope",
    "classdesc": "<p>Object attached to controllers <a href=\"#!/module:uiServices.createEditController\"><code>$scope</code></a>.\nEncapsulates redirect functionality.</p>",
    "scope": "static",
    "longname": "module:uiServices.createEditController.$scope.project",
    "$href": "module:uiServices.createEditController.$scope.project",
    "$id": "T000002R000448"
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
    "$id": "T000002R000450"
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
    "$id": "T000002R000452"
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
    "name": "createProjectController",
    "memberof": "module:uiServices",
    "description": "<p>Handles the creation of a new project.</p>",
    "requires": [
      "module:$scope",
      "module:$location",
      "module:Session+module:authModule.Session",
      "module:projectSettings+module:uiServices.projectSettings",
      "module:errorHandler+module:mapModule.errorHandler"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.createProjectController",
    "jsConcept": true,
    "$href": "module:uiServices.createProjectController",
    "$id": "T000002R000454"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.createProjectController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.createProjectController.$scope",
    "$href": "module:uiServices.createProjectController.$scope",
    "$id": "T000002R000455"
  },
  {
    "kind": "class",
    "name": "projects",
    "memberof": "module:uiServices.createProjectController.$scope",
    "classdesc": "<p>Encapsulates USER projects</p>",
    "scope": "static",
    "longname": "module:uiServices.createProjectController.$scope.projects",
    "$href": "module:uiServices.createProjectController.$scope.projects",
    "$id": "T000002R000456"
  },
  {
    "kind": "class",
    "name": "project",
    "memberof": "module:uiServices.createProjectController.$scope",
    "classdesc": "<p>Encapsulates new project functionallity.</p>",
    "scope": "static",
    "longname": "module:uiServices.createProjectController.$scope.project",
    "$href": "module:uiServices.createProjectController.$scope.project",
    "$id": "T000002R000458"
  },
  {
    "tags": [
      {
        "originalTitle": "memeber",
        "title": "memeber",
        "text": ""
      }
    ],
    "name": "data,",
    "type": {
      "names": [
        "Object"
      ]
    },
    "memberof": "module:uiServices.createProjectController.$scope.project",
    "description": "<p>Nesesary data for the creation of a project fetched from (@link module:uiServices.projectSettings projectSettings)</p>",
    "scope": "static",
    "longname": "module:uiServices.createProjectController.$scope.project.data,",
    "kind": "member",
    "$href": "module:uiServices.createProjectController.$scope.project#data,",
    "$id": "T000002R000460"
  },
  {
    "kind": "member",
    "name": "validation",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:uiServices.createProjectController.$scope.project",
    "description": "<p>Validates name;</p>",
    "scope": "static",
    "longname": "module:uiServices.createProjectController.$scope.project.validation",
    "$href": "module:uiServices.createProjectController.$scope.project#validation",
    "$id": "T000002R000463"
  },
  {
    "kind": "member",
    "name": "emptyValue",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:uiServices.createProjectController.$scope.project",
    "description": "<p>On focus out emptys the value of name input</p>",
    "scope": "static",
    "longname": "module:uiServices.createProjectController.$scope.project.emptyValue",
    "$href": "module:uiServices.createProjectController.$scope.project#emptyValue",
    "$id": "T000002R000467"
  },
  {
    "kind": "member",
    "name": "create",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:uiServices.createProjectController.$scope.project",
    "description": "<p>If validation pass. Update's USER data Object and executes the map.</p>",
    "scope": "static",
    "longname": "module:uiServices.createProjectController.$scope.project.create",
    "$href": "module:uiServices.createProjectController.$scope.project#create",
    "$id": "T000002R000470"
  },
  {
    "kind": "member",
    "name": "generateProjectId",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:uiServices.createProjectController.$scope.project",
    "description": "<p>Generates Random unique project ID.</p>",
    "scope": "static",
    "longname": "module:uiServices.createProjectController.$scope.project.generateProjectId",
    "$href": "module:uiServices.createProjectController.$scope.project#generateProjectId",
    "$id": "T000002R000472"
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
      "module:$compile",
      "module:Session+module:authModule.Session",
      "module:popUp+module:uiServices.popUp"
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
    "$id": "T000002R000481"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.editProjectController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.editProjectController.$scope",
    "$href": "module:uiServices.editProjectController.$scope",
    "$id": "T000002R000482"
  },
  {
    "kind": "class",
    "name": "userData",
    "memberof": "module:uiServices.editProjectController.$scope",
    "description": "<p>Encapsulates functionality to edit projects.</p>",
    "scope": "static",
    "longname": "module:uiServices.editProjectController.$scope.userData",
    "$href": "module:uiServices.editProjectController.$scope.userData",
    "$id": "T000002R000483"
  },
  {
    "kind": "member",
    "name": "projects",
    "type": {
      "names": [
        "array"
      ]
    },
    "memberof": "module:uiServices.editProjectController.$scope.userData",
    "description": "<p>Array of objects attached to controllers <code>$scope</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.editProjectController.$scope.userData.projects",
    "$href": "module:uiServices.editProjectController.$scope.userData#projects",
    "$id": "T000002R000485"
  },
  {
    "kind": "member",
    "name": "toDelete",
    "params": [
      {
        "type": {
          "names": [
            "DOMElement"
          ]
        },
        "name": "$event"
      }
    ],
    "memberof": "module:uiServices.editProjectController.$scope.userData",
    "description": "<p>Triger modal with warning message</p>",
    "scope": "static",
    "longname": "module:uiServices.editProjectController.$scope.userData.toDelete",
    "$href": "module:uiServices.editProjectController.$scope.userData#toDelete",
    "$id": "T000002R000487"
  },
  {
    "kind": "member",
    "name": "deleteProject",
    "params": [
      {
        "type": {
          "names": [
            "Integer"
          ]
        },
        "name": "project"
      }
    ],
    "memberof": "module:uiServices.editProjectController.$scope.userData",
    "description": "<p>Delete's project from the view and from <code>$scope</code>.\n    close the modal</p>",
    "scope": "static",
    "longname": "module:uiServices.editProjectController.$scope.userData.deleteProject",
    "$href": "module:uiServices.editProjectController.$scope.userData#deleteProject",
    "$id": "T000002R000494"
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
    "$id": "T000002R000496"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.logInController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.logInController.$scope",
    "$href": "module:uiServices.logInController.$scope",
    "$id": "T000002R000497"
  },
  {
    "kind": "class",
    "name": "credentials",
    "memberof": "module:uiServices.logInController.$scope",
    "classdesc": "<p>Object attached to controllers <a href=\"#!/module:uiServices.logInController\"><code>$scope</code></a>.</p>\n<p>Encapsulates  credentials and login function.</p>",
    "scope": "static",
    "longname": "module:uiServices.logInController.$scope.credentials",
    "$href": "module:uiServices.logInController.$scope.credentials",
    "$id": "T000002R000498"
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
    "$id": "T000002R000500"
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
    "$id": "T000002R000501"
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
    "$id": "T000002R000502"
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
    "$id": "T000002R000504"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.mainAppController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope",
    "$href": "module:uiServices.mainAppController.$scope",
    "$id": "T000002R000505"
  },
  {
    "kind": "class",
    "name": "header",
    "memberof": "module:uiServices.mainAppController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.mainAppController\"><code>$scope</code></a>. \nEncapsulates  Header visibility.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.header",
    "$href": "module:uiServices.mainAppController.$scope.header",
    "$id": "T000002R000506"
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
    "$id": "T000002R000508"
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
    "description": "<p>Setter for <a href=\"#!/module:uiServices.mainAppController.$scope.header\"><code>show</code></a>. </p>\n<p>Promise <a href=\"#!/module:uiServices.isSateInitialized\"><code>isSateInitialized</code></a> that is been fulfield when the state of the page is not index, when  the user succesfully login's.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.header.checkVisibility",
    "$href": "module:uiServices.mainAppController.$scope.header#checkVisibility",
    "$id": "T000002R000510"
  },
  {
    "kind": "class",
    "name": "popUp",
    "memberof": "module:uiServices.mainAppController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.mainAppController\"><code>$scope</code></a>. </p>\n<p>Encapsulates  Modal Window.</p>",
    "scope": "static",
    "longname": "module:uiServices.mainAppController.$scope.popUp",
    "$href": "module:uiServices.mainAppController.$scope.popUp",
    "$id": "T000002R000514"
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
    "$id": "T000002R000516"
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
    "$id": "T000002R000518"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.mapController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.mapController.$scope",
    "$href": "module:uiServices.mapController.$scope",
    "$id": "T000002R000519"
  },
  {
    "kind": "member",
    "name": "urlVariables",
    "memberof": "module:uiServices.mapController.$scope",
    "description": "<p>varriables fetched from <code>$stateParams.path</code></p>",
    "scope": "static",
    "longname": "module:uiServices.mapController.$scope.urlVariables",
    "$href": "module:uiServices.mapController.$scope#urlVariables",
    "$id": "T000002R000520"
  },
  {
    "kind": "class",
    "name": "map",
    "memberof": "module:uiServices.mapController.$scope",
    "classdesc": "<p>Object attached to controllers <code>$scope</code>.</p>\n<p>Encapsulates map data.</p>\n<p>The most important Object in the App.</p>\n<p>In that Object settings and the cutom view of the map is been stored, and is the one that is been stringified and turned into url for publishing the map.</p>",
    "scope": "static",
    "longname": "module:uiServices.mapController.$scope.map",
    "$href": "module:uiServices.mapController.$scope.map",
    "$id": "T000002R000522"
  },
  {
    "properties": [
      null
    ],
    "name": "settings",
    "memberof": "module:uiServices.mapController.$scope.map",
    "description": "<p>settings of the map initialy are been fetched throught URL  </p>\n<p>Using <code>$stateParams</code> service</p>",
    "scope": "static",
    "longname": "module:uiServices.mapController.$scope.map.settings",
    "kind": "member",
    "$href": "module:uiServices.mapController.$scope.map#settings",
    "$id": "T000002R000525"
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
    "description": "<p>Promise is been fulfilled  when google Maps script is appended.\nWhen the Promised is been fulfied:</p>\n<blockquote>\n<p>Google Map is been appeded with the use of <a href=\"#!/module:mapModule.gMap\"><code>gMap.append</code></a> API.</p>\n<p>Google Maps features are been initialized with the use of <a href=\"#!/module:mapModule.gMap\"><code>gMap.features</code></a> API.  </p>\n<p>Settings <code>$scope.map.settings</code> are been updated.</p>\n</blockquote>",
    "scope": "static",
    "longname": "module:uiServices.mapController.mapsInitialized",
    "$href": "module:uiServices.mapController#mapsInitialized",
    "$id": "T000002R000527"
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
    "description": "<p>on $stateChangeStart &amp;&amp; curent template is customap:</p>\n<blockquote>\n<p>Using <a href=\"#!/module:uiServices.deleteHeadScripts\"><code> deleteHeadScripts.exclude</code></a> service API clears Google Map Script</p>\n<p>Deletes #map-canvas <code>HTML-tag</code></p>\n<p>Reinitialize <code>$scope.map.settings.map</code> Object</p>\n</blockquote>",
    "scope": "static",
    "longname": "module:uiServices.mapController.event:$stateChangeStart",
    "$href": "module:uiServices.mapController#$stateChangeStart",
    "$id": "T000002R000529"
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
    "$id": "T000002R000532"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.mapUiController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.mapUiController.$scope",
    "$href": "module:uiServices.mapUiController.$scope",
    "$id": "T000002R000533"
  },
  {
    "kind": "class",
    "name": "accordeon",
    "memberof": "module:uiServices.mapUiController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.mapUiController\"><code>$scope</code></a>. </p>\n<p>Encapsulates Accordeon Functionality in <code>mapView</code> template.</p>",
    "scope": "static",
    "longname": "module:uiServices.mapUiController.$scope.accordeon",
    "$href": "module:uiServices.mapUiController.$scope.accordeon",
    "$id": "T000002R000534"
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
    "$id": "T000002R000536"
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
      "module:$location",
      "module:$rootScope"
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
    "$id": "T000002R000538"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.navController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.navController.$scope",
    "$href": "module:uiServices.navController.$scope",
    "$id": "T000002R000539"
  },
  {
    "kind": "class",
    "name": "button",
    "memberof": "module:uiServices.navController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.navController\"><code>$scope</code></a>. </p>\n<p>Encapsulates  Button functionality.</p>",
    "scope": "static",
    "longname": "module:uiServices.navController.$scope.button",
    "$href": "module:uiServices.navController.$scope.button",
    "$id": "T000002R000540"
  },
  {
    "kind": "member",
    "name": "set",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:uiServices.navController.$scope.button",
    "description": "<p>Setter of <a href=\"#!/module:uiServices.navController.$scope.button\"><code>button</code></a> attributes.</p>",
    "scope": "static",
    "longname": "module:uiServices.navController.$scope.button.set",
    "$href": "module:uiServices.navController.$scope.button#set",
    "$id": "T000002R000542"
  },
  {
    "kind": "member",
    "name": "name",
    "type": {
      "names": [
        "Sting"
      ]
    },
    "memberof": "module:uiServices.navController.$scope.button",
    "description": "<p>Name Of the button. Is set dynamically from <a href=\"#!/module:uiServices.navController\"><code>set</code></a></p>",
    "scope": "static",
    "longname": "module:uiServices.navController.$scope.button.name",
    "$href": "module:uiServices.navController.$scope.button#name",
    "$id": "T000002R000544"
  },
  {
    "kind": "member",
    "name": "path",
    "type": {
      "names": [
        "Sting"
      ]
    },
    "memberof": "module:uiServices.navController.$scope.button",
    "description": "<p>Url Of the button. Is set dynamically from <a href=\"#!/module:uiServices.navController\"><code>set</code></a></p>",
    "scope": "static",
    "longname": "module:uiServices.navController.$scope.button.path",
    "$href": "module:uiServices.navController.$scope.button#path",
    "$id": "T000002R000546"
  },
  {
    "kind": "member",
    "name": "go",
    "params": [
      {
        "name": "no-argument"
      }
    ],
    "memberof": "module:uiServices.navController.$scope.button",
    "description": "<p>Redirects to <code>$scope.button.path</code></p>\n<p>Using <code>$location</code> service</p>",
    "scope": "static",
    "longname": "module:uiServices.navController.$scope.button.go",
    "$href": "module:uiServices.navController.$scope.button#go",
    "$id": "T000002R000548"
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
    "$id": "T000002R000550"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:uiServices.userController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:uiServices.userController.$scope",
    "$href": "module:uiServices.userController.$scope",
    "$id": "T000002R000551"
  },
  {
    "kind": "class",
    "name": "user",
    "memberof": "module:uiServices.userController.$scope",
    "classdesc": "<p>Objects attached to controllers <a href=\"#!/module:uiServices.userController\"><code>$scope</code></a>. </p>\n<p>Encapsulates  Header visibility.</p>",
    "scope": "static",
    "longname": "module:uiServices.userController.$scope.user",
    "$href": "module:uiServices.userController.$scope.user",
    "$id": "T000002R000552"
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
    "$id": "T000002R000554"
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
    "$id": "T000002R000556"
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
    "name": "viewMapController",
    "memberof": "module:uiServices",
    "description": "<p>Initialize an Instance of GooleMaps and its features according to settings object fetched from url</p>",
    "requires": [
      "module:$scope",
      "module:$stateParams",
      "module:gMapsLib+module:mapModule.gMapsLib",
      "module:gMap+module:mapModule.gMap"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.viewMapController",
    "jsConcept": true,
    "$href": "module:uiServices.viewMapController",
    "$id": "T000002R000558"
  },
  {
    "kind": "class",
    "name": "$scope",
    "memberof": "module:mapModule.viewMapController",
    "classdesc": "<p>Controller's local scope.</p>",
    "scope": "static",
    "longname": "module:mapModule.viewMapController.$scope",
    "$href": "module:mapModule.viewMapController.$scope",
    "$id": "T000002R000559"
  },
  {
    "kind": "class",
    "name": "map",
    "memberof": "module:uiServices.viewMapController.$scope",
    "classdesc": "<p>Object attached to controllers <code>$scope</code>.</p>\n<p>Encapsulates map data.</p>\n<p>The most important Object in the App.</p>\n<p>In that Object settings and the cutom view of the map is been stored, and is the one that is been stringified and turned into url for publishing the map.</p>",
    "scope": "static",
    "longname": "module:uiServices.viewMapController.$scope.map",
    "$href": "module:uiServices.viewMapController.$scope.map",
    "$id": "T000002R000560"
  },
  {
    "properties": [
      null
    ],
    "name": "settings",
    "memberof": "module:uiServices.viewMapController.$scope.map",
    "description": "<p>settings of the map initialy are been fetched throught URL  </p>\n<p>Using <code>$stateParams</code> service</p>",
    "scope": "static",
    "longname": "module:uiServices.viewMapController.$scope.map.settings",
    "kind": "member",
    "$href": "module:uiServices.viewMapController.$scope.map#settings",
    "$id": "T000002R000562"
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
    "memberof": "module:uiServices.viewMapController",
    "description": "<p>Promise is been fulfilled  when google Maps script is appended.\nWhen the Promised is been fulfied:</p>\n<blockquote>\n<p>Google Map is been appeded with the use of <a href=\"#!/module:mapModule.gMap\"><code>gMap.append</code></a> API.</p>\n<p>Google Maps features are been initialized with the use of <a href=\"#!/module:mapModule.gMap\"><code>gMap.features</code></a> API.  </p>\n<p>Settings <code>$scope.map.settings</code> are been updated.</p>\n</blockquote>",
    "scope": "static",
    "longname": "module:uiServices.viewMapController.mapsInitialized",
    "$href": "module:uiServices.viewMapController#mapsInitialized",
    "$id": "T000002R000564"
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
    "$id": "T000002R000566"
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
    "$id": "T000002R000567"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.heatMapOpacity.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapOpacity.anonymous.scope",
    "$href": "module:uiServices.heatMapOpacity.anonymous.scope",
    "$id": "T000002R000569"
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
    "description": "<p>When heatmap opacity changes, <a href=\"#!/module:mapModule.heatMap\"><code>heatMap.setRadius</code></a> API service is been used to apply new opacity to the map.</p>\n<p>If timeline is on,  <a href=\"#!/module:mapModule.timeline\"><code>timeline.bindMaptoTimeline</code></a> API service is been used to apply new opacity to the map timeline.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapOpacity.anonymous.scope.event:$watch",
    "$href": "module:uiServices.heatMapOpacity.anonymous.scope#$watch",
    "$id": "T000002R000570"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.heatMapOpacity",
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
    "$id": "T000002R000571"
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
    "$id": "T000002R000576"
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
    "$id": "T000002R000577"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.heatMapRadius.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapRadius.anonymous.scope",
    "$href": "module:uiServices.heatMapRadius.anonymous.scope",
    "$id": "T000002R000579"
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
    "description": "<p>When heatmap radius changes, <a href=\"#!/module:mapModule.heatMap\"><code>heatMap.setRadius</code></a> API service is been used to apply new radius to the map.</p>\n<p>If timeline is on,  <a href=\"#!/module:mapModule.timeline\"><code>timeline.bindMaptoTimeline</code></a> API service is been used to apply new radius to the map timeline.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapRadius.anonymous.scope.event:$watch",
    "$href": "module:uiServices.heatMapRadius.anonymous.scope#$watch",
    "$id": "T000002R000580"
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
    "$id": "T000002R000581"
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
    "$id": "T000002R000586"
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
    "$id": "T000002R000587"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.heatMapVisibility.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapVisibility.anonymous.scope",
    "$href": "module:uiServices.heatMapVisibility.anonymous.scope",
    "$id": "T000002R000589"
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
    "description": "<p>When heatmap visibility changes, <a href=\"#!/module:mapModule.heatMap\"><code>heatMap.toggleView</code></a> API service to toggles on/off heatMap.</p>\n<p>If timeline is on,  <a href=\"#!/module:mapModule.timeline\"><code>timeline.bindMaptoTimeline</code></a> API service is been used to toggles on/off the heatMap to map timeline.</p>",
    "scope": "static",
    "longname": "module:uiServices.heatMapVisibility.anonymous.scope.event:$watch",
    "$href": "module:uiServices.heatMapVisibility.anonymous.scope#$watch",
    "$id": "T000002R000590"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.heatMapVisibility",
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
    "$id": "T000002R000591"
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
    "$id": "T000002R000596"
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
    "$id": "T000002R000597"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.kmlLayer.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.kmlLayer.anonymous.scope",
    "$href": "module:uiServices.kmlLayer.anonymous.scope",
    "$id": "T000002R000599"
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
    "description": "<p>When a kml layer is selected from UI, <a href=\"#!/module:mapModule.heatMap\"><code>kmlLayer.set</code></a> API service is been used to apply the new kml to the map.</p>",
    "scope": "static",
    "longname": "module:uiServices.kmlLayer.anonymous.scope.event:$watch",
    "$href": "module:uiServices.kmlLayer.anonymous.scope#$watch",
    "$id": "T000002R000600"
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
    "$id": "T000002R000601"
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
    "$id": "T000002R000606"
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
    "$id": "T000002R000607"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.setMapPosition.anonymous",
    "classdesc": "<p>Directive's local scope: <code>mapcontrols</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.setMapPosition.anonymous.scope",
    "$href": "module:uiServices.setMapPosition.anonymous.scope",
    "$id": "T000002R000609"
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
    "$id": "T000002R000610"
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
    "description": "<p>Resets Lat/Lot of Map using  <a href=\"#!/module:mapModule.gMap\"><code>gMap.reset</code></a> API service.</p>",
    "scope": "static",
    "longname": "module:uiServices.setMapPosition.anonymous.scope.resetPosition",
    "$href": "module:uiServices.setMapPosition.anonymous.scope#resetPosition",
    "$id": "T000002R000618"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.setMapPosition",
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
    "$id": "T000002R000620"
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
    "$id": "T000002R000626"
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
    "$id": "T000002R000627"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.zoomHandler.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.zoomHandler.anonymous.scope",
    "$href": "module:uiServices.zoomHandler.anonymous.scope",
    "$id": "T000002R000629"
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
    "description": "<p>Updates  zoom of the map and to <a href=\"#!/module:mapModule.gMap\"><code>gMap.set</code></a> Object according to user interaction with UI.</p>",
    "scope": "static",
    "longname": "module:uiServices.zoomHandler.anonymous.scope.event:$watch",
    "$href": "module:uiServices.zoomHandler.anonymous.scope#$watch",
    "$id": "T000002R000630"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.zoomHandler",
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
    "$id": "T000002R000631"
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
    "$id": "T000002R000637"
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
    "$id": "T000002R000638"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.markersVisibility.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.markersVisibility.anonymous.scope",
    "$href": "module:uiServices.markersVisibility.anonymous.scope",
    "$id": "T000002R000640"
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
    "description": "<p>When user set vissibility of the markers from UI, <a href=\"#!/module:mapModule.markers\"><code>markers.toggleView</code></a> API service is been invocted.</p>\n<p>If timeline is on,  <a href=\"#!/module:mapModule.timeline\"><code>timeline.clearTimeMachine</code></a> API service will be invocted also to rebind the change of the TimLine.</p>",
    "scope": "static",
    "longname": "module:uiServices.markersVisibility.anonymous.scope.event:$watch",
    "$href": "module:uiServices.markersVisibility.anonymous.scope#$watch",
    "$id": "T000002R000641"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.markersVisibility",
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
    "$id": "T000002R000642"
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
    "$id": "T000002R000648"
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
    "$id": "T000002R000649"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.publish.anonymous",
    "classdesc": "<p>Directive's local scope: <code>mapcontrols</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.publish.anonymous.scope",
    "$href": "module:uiServices.publish.anonymous.scope",
    "$id": "T000002R000651"
  },
  {
    "tags": [
      {
        "originalTitle": "memeber",
        "title": "memeber",
        "text": ""
      }
    ],
    "name": "updateSession",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "updateMap"
      }
    ],
    "memberof": "module:uiServices.publish.anonymous.scope",
    "description": "<p>Updates User data</p>",
    "scope": "static",
    "longname": "module:uiServices.publish.anonymous.scope.updateSession",
    "kind": "member",
    "$href": "module:uiServices.publish.anonymous.scope#updateSession",
    "$id": "T000002R000652"
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
    "description": "<p>Filter's the attributes of  <code>mapcontrols.settings</code> Object to cretae a url with nesesacry variables by for embading the map into iframe.</p>\n<p>Use of <a href=\"#!/module:mapModule.errorHandler\"><code>errorHandler.settingsParseJson</code></a> API service to validate that the produced json,</p>\n<p>that was produced by the filtering the   <code>mapcontrols.settings</code> is valid, so as to be stringnified to produce the final  URL  </p>\n<p>Use of <a href=\"#!/module:uiServices.popUp\"><code> popUp.populate</code></a> API service to make availiable the URL to the  USER throught modal window.</p>",
    "scope": "static",
    "longname": "module:uiServices.publish.anonymous.scope.publish",
    "kind": "member",
    "$href": "module:uiServices.publish.anonymous.scope#publish",
    "$id": "T000002R000656"
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
    "$id": "T000002R000658"
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
    "name": "googleMaps",
    "memberof": "module:uiServices",
    "description": "<p>handles the timeline UI.</p>",
    "requires": [
      "module:timeline+module:mapModule.timeline"
    ],
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.googleMaps",
    "jsConcept": true,
    "$href": "module:uiServices.googleMaps",
    "$id": "T000002R000670"
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
    "memberof": "module:uiServices.googleMaps",
    "description": "<p>Extends <code>mapcontrols</code> with two function to wire the UI with the <a href=\"#!/module:mapModule.timeline\"><code>timeline</code></a> API</p>",
    "scope": "static",
    "longname": "module:uiServices.googleMaps.anonymous",
    "$href": "module:uiServices.googleMaps#anonymous",
    "$id": "T000002R000671"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.googleMaps.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.googleMaps.anonymous.scope",
    "$href": "module:uiServices.googleMaps.anonymous.scope",
    "$id": "T000002R000673"
  },
  {
    "kind": "member",
    "name": "currentIndecatorDate",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "memberof": "module:uiServices.googleMaps.anonymous.scope",
    "description": "<p>Updates the Current Date that user see on the map by using <a href=\"#!/module:mapModule.timeline\"><code>timeline.currentIndecatorDate</code></a>  API</p>",
    "scope": "static",
    "longname": "module:uiServices.googleMaps.anonymous.scope.currentIndecatorDate",
    "$href": "module:uiServices.googleMaps.anonymous.scope#currentIndecatorDate",
    "$id": "T000002R000674"
  },
  {
    "kind": "member",
    "name": "trigertimeMachineFromUi",
    "params": [
      {
        "type": {
          "names": [
            "DOMElement"
          ]
        },
        "name": "$event"
      }
    ],
    "memberof": "module:uiServices.googleMaps.anonymous.scope",
    "description": "<p>Use of <a href=\"#!/module:mapModule.timeline\"><code>timeline.moveInTimeByIncrementTimeIndicatorFromCurrentTimeStampToEnd</code></a>  API</p>",
    "scope": "static",
    "longname": "module:uiServices.googleMaps.anonymous.scope.trigertimeMachineFromUi",
    "$href": "module:uiServices.googleMaps.anonymous.scope#trigertimeMachineFromUi",
    "$id": "T000002R000677"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.googleMaps",
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
    "longname": "module:uiServices.googleMaps.return",
    "$href": "module:uiServices.googleMaps#return",
    "$id": "T000002R000679"
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
    "$id": "T000002R000684"
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
    "$id": "T000002R000685"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.timeIndicator.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.timeIndicator.anonymous.scope",
    "$href": "module:uiServices.timeIndicator.anonymous.scope",
    "$id": "T000002R000687"
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
    "description": "<p>Map view is been updated as the USER interacts with the timeline range bar.</p>\n<p>Timeline range bar indicator represent the current time stamp of the map.</p>\n<p>As the value of the indecator is been increased and decresed accordingly  by the user,</p>\n<p>indicator's value is been used to determine what  view  will be append  on the map for the selected timestamp.</p>\n<p>Two time indicators are been used:</p>\n<ul>\n<li><p><code>indicator</code> : that represent the new selected timestamp and is been watched by the Directive.</p>\n</li>\n<li><p><code>cashedIndicator</code> : that represent the timestamp that the map view was set since the last USER interaction with timeline range bar.</p>\n</li>\n</ul>\n<p><a href=\"#!/module:mapModule.timeline\"><code>timeline.timeMachine</code></a>: takes as argumets <code>indicator</code> and <code>cashedIndicator</code> and implements the alternation of the views, between these ywo timestamp.</p>",
    "scope": "static",
    "longname": "module:uiServices.timeIndicator.anonymous.scope.event:$watch",
    "$href": "module:uiServices.timeIndicator.anonymous.scope#$watch",
    "$id": "T000002R000688"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.timeIndicator",
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
    "$id": "T000002R000689"
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
    "$id": "T000002R000698"
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
    "$id": "T000002R000699"
  },
  {
    "kind": "class",
    "name": "scope",
    "memberof": "module:uiServices.timeLineVisibility.anonymous",
    "classdesc": "<p>Directive's local scope: <code>map</code>.</p>",
    "scope": "static",
    "longname": "module:uiServices.timeLineVisibility.anonymous.scope",
    "$href": "module:uiServices.timeLineVisibility.anonymous.scope",
    "$id": "T000002R000701"
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
    "description": "<p>As user sets on/off the timeline functionality</p>\n<p>Directive make's usage of <a href=\"#!/module:mapModule.markers\"><code>markers</code></a>, <a href=\"#!/module:mapModule.heatMap\"><code>heatMap</code></a>,  <a href=\"#!/module:mapModule.timeline\"><code>timeline</code></a> API's to: </p>\n<ul>\n<li><p>Initialize Timeline if the timeline was not active.</p>\n</li>\n<li><p>Activate Timeline if it was deactivated but initialized.</p>\n</li>\n<li><p>Deactivate Timeline if it was active.</p>\n</li>\n</ul>",
    "scope": "static",
    "longname": "module:uiServices.timeLineVisibility.anonymous.scope.event:$watch",
    "$href": "module:uiServices.timeLineVisibility.anonymous.scope#$watch",
    "$id": "T000002R000702"
  },
  {
    "kind": "member",
    "name": "return",
    "memberof": "module:uiServices.timeLineVisibility",
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
    "$id": "T000002R000703"
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
    "$id": "T000002R000719"
  },
  {
    "kind": "class",
    "name": "script",
    "memberof": "module:uiServices.deleteHeadScripts",
    "classdesc": "<p>Encapulates delete HeadScripts functionality</p>",
    "scope": "static",
    "longname": "module:uiServices.deleteHeadScripts.script",
    "$href": "module:uiServices.deleteHeadScripts.script",
    "$id": "T000002R000720"
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
    "$id": "T000002R000722"
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
    "$id": "T000002R000724"
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
    "$id": "T000002R000731"
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
    "$id": "T000002R000735"
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
    "name": "isSateInitialized",
    "memberof": "module:uiServices",
    "requires": [
      "module:isSateInitialized",
      "module:$q"
    ],
    "description": "<p>page state promise</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.isSateInitialized",
    "jsConcept": true,
    "$href": "module:uiServices.isSateInitialized",
    "$id": "T000002R000737"
  },
  {
    "kind": "class",
    "name": "isStateInit",
    "memberof": "module:uiServices.isSateInitialized",
    "classdesc": "<p>Promise that page changed succesfully</p>",
    "scope": "static",
    "longname": "module:uiServices.isSateInitialized.isStateInit",
    "$href": "module:uiServices.isSateInitialized.isStateInit",
    "$id": "T000002R000738"
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
    "$id": "T000002R000746"
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
    "$id": "T000002R000747"
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
    "$id": "T000002R000749"
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
    "$id": "T000002R000751"
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
    "name": "projectSettings",
    "memberof": "module:uiServices",
    "description": "<p>Provide's Object for new project.</p>",
    "author": [
      "Michail Tsougkranis"
    ],
    "version": "1.0",
    "since": "Angular.1.3.9",
    "scope": "static",
    "longname": "module:uiServices.projectSettings",
    "jsConcept": true,
    "$href": "module:uiServices.projectSettings",
    "$id": "T000002R000754"
  },
  {
    "kind": "class",
    "name": "project",
    "memberof": "module:uiServices.projectSettings",
    "classdesc": "<p>Encapsulates all the nessdesary attributes to initialize a google maps project.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project",
    "$href": "module:uiServices.projectSettings.project",
    "$id": "T000002R000755"
  },
  {
    "properties": [
      null
    ],
    "name": "projectId",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project",
    "description": "<p>Unique identifier of the specific project.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.projectId",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project#projectId",
    "$id": "T000002R000757"
  },
  {
    "properties": [
      null
    ],
    "name": "projectName",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project",
    "description": "<p>Project name.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.projectName",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project#projectName",
    "$id": "T000002R000759"
  },
  {
    "kind": "class",
    "name": "settings",
    "memberof": "module:uiServices.projectSettings.project",
    "description": "<p>Encapulates all the attributes that are nessesary to triger a new google map\nAs the user is further customizing the view of the map. The {@settings} is been extented with new attributes: timeline etc..</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings",
    "$href": "module:uiServices.projectSettings.project.settings",
    "$id": "T000002R000761"
  },
  {
    "properties": [
      null
    ],
    "name": "response",
    "type": {
      "names": [
        "Array"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Data fethed from CSV.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.response",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#response",
    "$id": "T000002R000763"
  },
  {
    "properties": [
      null
    ],
    "name": "mapLang",
    "type": {
      "names": [
        "Float"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Map Latitude.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.mapLang",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#mapLang",
    "$id": "T000002R000765"
  },
  {
    "properties": [
      null
    ],
    "name": "mapLong",
    "type": {
      "names": [
        "Float"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Map Longitude.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.mapLong",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#mapLong",
    "$id": "T000002R000767"
  },
  {
    "properties": [
      null
    ],
    "name": "zoom",
    "type": {
      "names": [
        "Float"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Map zoom.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.zoom",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#zoom",
    "$id": "T000002R000769"
  },
  {
    "properties": [
      null
    ],
    "name": "zoom",
    "type": {
      "names": [
        "Float"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Marker image width.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.zoom",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#zoom",
    "$id": "T000002R000771"
  },
  {
    "properties": [
      null
    ],
    "name": "allow",
    "type": {
      "names": [
        "Bolean"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>For performace reason's set true after map has been initialized.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.allow",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#allow",
    "$id": "T000002R000773"
  },
  {
    "properties": [
      null
    ],
    "name": "map",
    "type": {
      "names": [
        "Object"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>google map Object</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.map",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#map",
    "$id": "T000002R000775"
  },
  {
    "properties": [
      null
    ],
    "name": "heatMapRadius",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Heat Map Radius</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.heatMapRadius",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#heatMapRadius",
    "$id": "T000002R000777"
  },
  {
    "properties": [
      null
    ],
    "name": "heatMapOpacity",
    "type": {
      "names": [
        "Integer"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Heat Map Opacity</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.heatMapOpacity",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#heatMapOpacity",
    "$id": "T000002R000779"
  },
  {
    "properties": [
      null
    ],
    "name": "heatmap",
    "type": {
      "names": [
        "Object"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Heat Map layers</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.heatmap",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#heatmap",
    "$id": "T000002R000781"
  },
  {
    "properties": [
      null
    ],
    "name": "markers",
    "type": {
      "names": [
        "Object"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Markers</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.markers",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#markers",
    "$id": "T000002R000783"
  },
  {
    "properties": [
      null
    ],
    "name": "layerObject",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Selected KML layer.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.layerObject",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#layerObject",
    "$id": "T000002R000785"
  },
  {
    "properties": [
      null
    ],
    "name": "layers",
    "type": {
      "names": [
        "Object"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Availiable KML layer's.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.layers",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#layers",
    "$id": "T000002R000787"
  },
  {
    "properties": [
      null
    ],
    "name": "timeline",
    "type": {
      "names": [
        "Object"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Availiable KML layer's.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.timeline",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#timeline",
    "$id": "T000002R000792"
  },
  {
    "properties": [
      null
    ],
    "name": "selectedLayer",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Selected KML layer.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.selectedLayer",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#selectedLayer",
    "$id": "T000002R000796"
  },
  {
    "properties": [
      null
    ],
    "name": "subCatergoryName",
    "type": {
      "names": [
        "Array"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Subcatecory names of Markers.</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.subCatergoryName",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#subCatergoryName",
    "$id": "T000002R000798"
  },
  {
    "properties": [
      null
    ],
    "name": "showMarkers",
    "type": {
      "names": [
        "Bolean"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Show/Hide Markers</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.showMarkers",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#showMarkers",
    "$id": "T000002R000800"
  },
  {
    "properties": [
      null
    ],
    "name": "showHeatMap",
    "type": {
      "names": [
        "Bolean"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Show/Hide HeatMap</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.showHeatMap",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#showHeatMap",
    "$id": "T000002R000802"
  },
  {
    "properties": [
      null
    ],
    "name": "showTimeLine",
    "type": {
      "names": [
        "Bolean"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Show/Hide TimeLine</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.showTimeLine",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#showTimeLine",
    "$id": "T000002R000804"
  },
  {
    "properties": [
      null
    ],
    "name": "userImgPath",
    "type": {
      "names": [
        "Array"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Path's for the Marker Images</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.userImgPath",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#userImgPath",
    "$id": "T000002R000806"
  },
  {
    "tags": [
      {
        "originalTitle": "path",
        "title": "path",
        "text": ""
      }
    ],
    "name": "path",
    "type": {
      "names": [
        "String"
      ]
    },
    "memberof": "module:uiServices.projectSettings.project.settings",
    "description": "<p>Path's for the CSV</p>",
    "scope": "static",
    "longname": "module:uiServices.projectSettings.project.settings.path",
    "kind": "member",
    "$href": "module:uiServices.projectSettings.project.settings#path",
    "$id": "T000002R000808"
  },
  {
    "kind": "function",
    "name": "get",
    "memberof": "module:uiServices.projectSettings.project",
    "params": [
      {
        "name": "no-arguments"
      }
    ],
    "access": "public",
    "scope": "static",
    "description": "<p>Retures a new instance of project.</p>",
    "longname": "module:uiServices.projectSettings.project.get",
    "$href": "module:uiServices.projectSettings.project#get",
    "$id": "T000002R000810"
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
    "$id": "T000002R000812"
  },
  {
    "kind": "class",
    "name": "UiAnimation",
    "memberof": "module:uiServices.UiAnimation",
    "classdesc": "<p>Encapulates animation functionality</p>",
    "scope": "static",
    "longname": "module:uiServices.UiAnimation.UiAnimation",
    "$href": "module:uiServices.UiAnimation.UiAnimation",
    "$id": "T000002R000813"
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
    "$id": "T000002R000814"
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
    "$id": "T000002R000816"
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
    "$id": "T000002R000818"
  }
]);})();