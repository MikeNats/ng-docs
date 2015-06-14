/*global angular*/

/**
* 
* @framework angular 
* @kind module
* @name app 
* @variable app 
* @public
* @static

* @requires ngRoute
* @requires ngAnimate
* @requires routeSateModule
* @requires ui.router
* @requires authModule+module:authModule 
* @requires mapModule+module:mapModule 
* @requires uiServices+module:uiServices
*
* @description Conetains App. 
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9
*
*/



//* @run $rootScope $state $stateParams $q {@link module:authModule.AUTH_EVENTS AUTH_EVENTS} {@link module:authModule.authService authService} isSateInitialized {@link module:mapModule.gMap gMap}

// when not run throught server
var windows = 'file:///C:/Users/michalis.tsougkranis/Desktop/map',
	bracets = 'http://127.0.0.1:52379/',
	mac = '/Users/mikenats/Documents/Dev/github/mapsApp/',
	templateUrl = windows,
	
	app = angular.module('app', ['ngRoute', 'ngAnimate', 'mapModule', 'ui.router', 'uiServices', 'authModule', 'routeSateModule']).run(['$rootScope', '$state', '$stateParams', '$q', 'AUTH_EVENTS', 'authService', 'isSateInitialized', 'gMap', function ($rootScope, $state, $stateParams, $q, AUTH_EVENTS, authService, isSateInitialized, gMap) {

        /**   
        *
        * @framework angular 
        * @kind jsConcept
        * @type initializer        
        * @name run
        * @memberof module:app
        *
        *
        * @requires $rootScope
        * @requires $state
        * @requires $stateParams
        * @requires $q
        * @requires isSateInitialized
        * @requires authModule+module:authModule.AUTH_EVENTS 
        * @requires authModule+module:authModule.authService
        * @requires mapModule+module:mapModule.gMap 
        *
        *
        * @Description  Custom implementation of Jquery animate.
        *     
        */
         
        "use strict";
        /**
        *   
        * @class 
        * @name $rootScope  
        * @memberof module:app.run
        * @public
        * @classdesc  Encapulates events before template loads
        * 
        */
        
		$rootScope.$state = $state;
        
        /** 
        *
        * @property
        * @name $state 
        * @memberof module:app.run.$rootScope
        * @public 
        *
        * @Description  Makes availiable {@link $state} to the hole App.
        */
		$rootScope.$stateParams = $stateParams;
        
        /** 
        *
        * @event
        * @name $on 
        * @type {$stateChangeStart}
        * @memberof module:app.run.$rootScope
        *
        * @param {Object} event
        * @param {Object} toState
        * @param {Object} toParams
        *
        * @Description  Before the state of the App changes authentican check is been implemented.
        * with the use of {@link module:authModule.authService authService.isAuthenticated()}
        *
        */
        
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
			
			/** Authentication  **/
			var requireLogin = toState.data.requireLogin;
			if (requireLogin && authService.isAuthenticated() !== AUTH_EVENTS.loginSuccess) {
				
				event.preventDefault();
				$state.go('index');
			}
			
			/** Navigation  **/
			$rootScope.previousPage = $state.current.url;
		
		});
        /** 
        *
        * @event
        * @name $on
        * @type {$stateChangeSuccess}
        * @memberof module:app.run.$rootScope
        *
        * @param {Object} event
        * @param {Object} toState
        * @param {Object} toParams
        *
        * @Description  When state changes a promise is been fulfied.
        *
        */
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
			
			/** Header visibility **/
			isSateInitialized.done(toState);
		
		});
	
	}]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		
		"use strict";
        
        /**   
        *
        * @framework angular 
        * @kind jsConcept
        * @type configuration        
        * @name config
        * @memberof module:app
        *
        *
        * @requires $stateProvide
        * @requires $urlRouterProvider
        *
        *
        * @Description App state are been decreared
        * 
        * @example -
        *    /////////////////////////////
        *    // Redirects and Otherwise //
        *    /////////////////////////////
        *
        *    $urlRouterProvider.otherwise('/index');
        *
        *    //////////////////////////
        *    // State Configurations //
        *    //////////////////////////
        *
        *    // Home //
        *    $stateProvider.state("index", {
        *    
        *        url: "/index",
        *        templateUrl: 'views/logInTemplate.html',
        *        data : { requireLogin : false}
        *
        *    }).state("createdit", {
        *    
        *        url: "/createdit",
        *        views: {
        *            "userView": { templateUrl: "views/userTemplate.html" },
        *            "createEditProjectView": { templateUrl: "views/createEditTemplate.html" }
        *        },
        *        data : { requireLogin : true}
        *
        *    }).state("createproject", {
        *    
        *        url: "/createproject",
        *        views: {
        *            "navView": { templateUrl: "views/navTemplate.html" },
        *            "userView": { templateUrl: "views/userTemplate.html" },
        *            "createProjectView": { templateUrl: "views/createProjectTemplate.html" }
        *        },
        *        data : { requireLogin : true}
        *
        *    }).state("editproject", {
        *        url: "/editproject",
        *        views: {
        *            "navView": { templateUrl: "views/navTemplate.html" },
        *            "userView": { templateUrl: "views/userTemplate.html" },
        *            "editProjectView": { templateUrl: "views/editProjectTemplate.html" }
        *        },
        *        data : {requireLogin : true}
        *
        *    }).state("customap", {
        *        url: "/customap/path",
        *        views: {
        *            "navView": { templateUrl: "views/navTemplate.html" },
        *            "userView": { templateUrl: "views/userTemplate.html" },
        *            "mapView": { templateUrl: "views/mapTemplate.html" }
        *        },
        *        data : {requireLogin : true}
        *
        *    }).state("map", {
        *        url: "/map/path",
        *        templateUrl: 'views/viewMapTemplate.html',
        *        data : {requireLogin : false}
        *    });
        */
        
		/////////////////////////////
		// Redirects and Otherwise //
		/////////////////////////////
		
		$urlRouterProvider.otherwise('/index');
		
		//////////////////////////
		// State Configurations //
		//////////////////////////
		
		// Home //
		$stateProvider.state("index", {
			
			url: "/index",
			templateUrl: 'views/logInTemplate.html',
			data : {
				
				requireLogin : false
				
			}
 
        }).state("createdit", {
			
			url: "/createdit",
			views: {
				"userView": { templateUrl: "views/userTemplate.html" },
				"createEditProjectView": { templateUrl: "views/createEditTemplate.html" }
			},
			data : {
				
				requireLogin : true
			}
			
		}).state("createproject", {
			
			url: "/createproject",
			views: {
				"navView": { templateUrl: "views/navTemplate.html" },
				"userView": { templateUrl: "views/userTemplate.html" },
				"createProjectView": { templateUrl: "views/createProjectTemplate.html" }
			},
			data : {
				
				requireLogin : true
				
			}
		
		}).state("editproject", {
			
			url: "/editproject",
			views: {
				"navView": { templateUrl: "views/navTemplate.html" },
				"userView": { templateUrl: "views/userTemplate.html" },
				"editProjectView": { templateUrl: "views/editProjectTemplate.html" }
			},
			data : {
				
				requireLogin : true
				
			}
		
		}).state("customap", {
			
			url: "/customap/*path",
			views: {
				"navView": { templateUrl: "views/navTemplate.html" },
				"userView": { templateUrl: "views/userTemplate.html" },
				"mapView": { templateUrl: "views/mapTemplate.html" }
			},
			data : {
				requireLogin : true
			}
 
        }).state("map", {
 
			url: "/map/*path",
			templateUrl: 'views/viewMapTemplate.html',
			data : {
				requireLogin : false
			}
		});
	}]);




