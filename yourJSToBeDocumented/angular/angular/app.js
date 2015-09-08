/*global angular*/

/**
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
* @description Conetains App. 
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9   
*/



// when not run throught server
var windows = 'file:///C:/Users/michalis.tsougkranis/Desktop/mapsApp-master',
	bracets = 'http://127.0.0.1:51723',
	mac = '/Users/mikenats/Documents/Dev/github/mapsApp/',
	templateUrl = bracets,
	
	app = angular.module('app', ['ngRoute', 'ngAnimate', 'mapModule', 'ui.router', 'uiServices', 'authModule']).run(['$rootScope', '$state', '$stateParams', '$q', 'AUTH_EVENTS', 'authService', 'isSateInitialized', 'gMap', function ($rootScope, $state, $stateParams, $q, AUTH_EVENTS, authService, isSateInitialized, gMap) {

        /**   
        * @framework angular 
        * @kind jsConcept
        * @type initializer        
        * @name run
        * @memberof module:app
        * @requires $rootScope
        * @requires $state
        * @requires $stateParams
        * @requires $q
        * @requires isSateInitialized
        * @requires authModule+module:authModule.AUTH_EVENTS 
        * @requires authModule+module:authModule.authService
        * @requires mapModule+module:mapModule.gMap 
		* @Description Events before templates are been loaded
        */
         
        "use strict";
        /**
        * @class 
        * @name $rootScope  
        * @memberof module:app.run
        * @public
        * @classdesc  Encapulates events before template loads
        */
        
		$rootScope.$state = $state;
        
        /** 
        * @member
        * @name $state
        * @memberof module:app.run.$rootScope
        * @public 
        * @Description  Makes availiable {@link $state} to the hole App.
        */
		$rootScope.$stateParams = $stateParams;
        
        /** 
        * @event
        * @name $stateChangeStart 
        * @type {listener}
        * @memberof module:app.run.$rootScope
        * @param {Object} event
        * @param {Object} toState
        * @param {Object} toParams
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
        * @event
        * @name $stateChangeSuccess
        * @type {listener}
        * @memberof module:app.run.$rootScope
        * @param {Object} event
        * @param {Object} toState
        * @param {Object} toParams
        * @Description  When state changes a promise is been fulfied.
        */
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
			
			/** Header visibility **/
			isSateInitialized.done(toState);
		
		});
	
	}]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		
		"use strict";
        
        /**   
        * @framework angular 
        * @kind jsConcept
        * @type configuration        
        * @name config
        * @memberof module:app
        * @requires $stateProvide
        * @requires $urlRouterProvider
        * @Description Routing of the App
        */
		
		$urlRouterProvider.otherwise('/log-in');
		
		// Home //
		$stateProvider.state("index", {
			
			url: "/log-in",
			templateUrl: 'views/logIn-View.html',
			data : {
				
				requireLogin : false
				
			}
 
        }).state("select-action", {
			
			url: "/select-action",
			views: {
				"userCredentialSlot": { templateUrl: "views/userCredentials-Slot.html" },
				"createEditProjectView": { templateUrl: "views/select-action-View.html" }
			},
			data : {
				
				requireLogin : true
			}
			
		}).state("create-project", {
			
			url: "/create-project",
			views: {
				"navView": { templateUrl: "views/navTemplate.html" },
				"userCredentialSlot": { templateUrl: "views/userCredentials-Slot.html" },
				"createProjectView": { templateUrl: "views/create-project-View.html" }
			},
			data : {
				
				requireLogin : true
				
			}
		
		}).state("edit-project", {
			
			url: "/edit-project",
			views: {
				"navView": { templateUrl: "views/navTemplate.html" },
				"userCredentialSlot": { templateUrl: "views/userCredentials-Slot.html" },
				"editProjectView": { templateUrl: "views/edit-project-View.html" }
			},
			data : {
				
				requireLogin : true
				
			}
		
		}).state("custom-visualization", {
			
			url: "/custom-visualization/*path",
			views: {
				"navView": { templateUrl: "views/navTemplate.html" },
				"userCredentialSlot": { templateUrl: "views/userCredentials-Slot.html" },
				"visualizationView": { templateUrl: "views/custom-visualization-View.html" }
			},
			data : {
				requireLogin : true
			}
 
        }).state("published-visualization", {
 
			url: "/visualization/*path",
			templateUrl: 'views/pupblished-visualization-View.html',
			data : {
				requireLogin : false
			}
		});
	}]);





