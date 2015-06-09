/*global uiServices */

/**
*
* <b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> 
*
* <b>Parent Module:</b> {@link module:uiServicesModule uiServices} 
*
* <b>Description:</b> Use {@link module:authModule.module:authService authService.login(credentials)} to triger user authentication, 
* on success redirects to {@link createEditProjectTemplate.html} <br /><br/>
*
*
*
* @module  logInController                           
* @memberof module:uiServicesModule 
* @requires $scope+https://docs.angularjs.org/guide/scope+external
* @requires $location+https://docs.angularjs.org/guide/$location+external
* @requires authService+../documentation/index.html#!/module:authModule.module:authService+internal  
* @type controller
*
*/





uiServices.controller('logInController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
	"use strict";
	
    /** 
    *
    * @class 
	* @name credentials
    * @type {Object}
	* @inner
    * @classdesc
    *
    * <b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>
    *
    * <b>Description: </b> 
    *
    */
    
    $scope.credentials = {
                          
        /**  
        *
        * Stores user name 
        *
        * @property  userName
        * @type {String}
        * @inner
        * @memberof module:uiServicesModule.module:logInController~credentials
        *
        */
        
		userName : '',
        
        /**  
        *
        * Stores password
        *
        * @property  password
        * @type {String}
        * @inner
        * @memberof module:uiServicesModule.module:logInController~credentials
        *
        */
		password : ''
		
    };
	
    
    /**  
    *
    * Calls {@link module:authModule.module:authService authService.login(credentials)} to triger authentication  to triger authenticanion proceess
    *
	* On success  redirects to {@link createEditProjectTemplate.html} 
    *
    * @member login
    * @type function
    * @inner
    * @memberof module:uiServicesModule.module:logInController~credentials
    * @param {Object} credentials input from user: userName, password.
    *
    */
    
	$scope.credentials.login = function (credentials) {
		
		authService.login(credentials).then(function () {
			
			$location.path('/createdit');
			
		});
	};
}]);


 
 