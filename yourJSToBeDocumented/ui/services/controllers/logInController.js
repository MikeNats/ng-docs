


/*global uiServices */

/**
 * <b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> <br /><br/>
 * <b>Parent Module:</b> {@link module:uiServicesModule uiServices} <br /> <br /> 
 * <b>Description:</b> Use {@link module:authModule.module:authService authService.login(credentials)} to triger user authentication, <br/> <br />on success redirects to {@link createEditProjectTemplate.html} <br /><br/>
 *
 * @module  logInController                           
 * @memberof module:uiServicesModule 
 * @requires $scope+https://docs.angularjs.org/guide/scope+external
 * @requires $location+https://docs.angularjs.org/guide/$location+external
 * @requires authService+../documentation/index.html#!/module:authModule.module:authService+internal  
 * @type controller
 */


/**
 * Controller logInController : .
 *

 * 
 * @Dependancies  authService:  factories under auth module.
 * @Dependancies $location
 *
 * @see credentials : scope variable.
 *
 * @param credentials.login(credentials) : trigers authetication.
 * @param authService.login : promises on sucess of user authentication

 */




uiServices.controller('logInController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
	"use strict";
	
	/**  
	 * @class credentials
     * @public
     * @classdesc
     * <b>Type:</b>  Scope variable of {@link module:module:uiServicesModule.module:logInController logInController } <br/> <br/>
	 * <b>Description: </b> Two way data binding. On login form submit  to triger authentication.
	 */
	/** @namespace */
    $scope.credentials = {
		/**  
		 * Stores user name
		 * @property  userName
		 * @type {String}
		 * @inner
	     * @memberof module:uiServicesModule.module:logInController~credentials
		 */
		userName : '',
		/**  
		 * Stores password
		 * @property  password
		 * @type {String}
		 * @memberof module:uiServicesModule.module:logInController~credentials
		 */
		password : ''
		
    };
	
	/**  
	 * Trigers authetication promise  {@link module:authModule.module:authService authService.login(credentials)}  on success  redirects to {@link createEditProjectTemplate.html} 
	 * @function login
	 * @memberof module:uiServicesModule.module:logInController~credentials
	 * @param {object} credentials
	 */
	$scope.credentials.login = function (credentials) {
		
		authService.login(credentials).then(function () {
			
			$location.path('/createdit');
			
		});
	};
}]);


 
 