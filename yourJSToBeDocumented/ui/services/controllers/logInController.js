/*global uiServices*/


/**   
*
* @framework angular  
* @kind jsConcept  
* @type controller
* @name logInController
* @memberof module:uiServices
*
* @Description Triger auth, on success redirects to createdit template.
*
* @requires $scope
* @requires $location
* @requires authService+module:authModule.authService
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



uiServices.controller('logInController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {
    
	"use strict";
    
    /**
    *   
    * @class
    * @name $scope  
    * @memberof module:uiServices.logInController
    *
    * @classdesc  Controller's local scope.
    * 
    */
     
    
    /**
    *   
    * @class
    * @name credentials  
    * @memberof module:uiServices.logInController.$scope
    *
    * @classdesc  Object attached to controllers {@link module:uiServices.logInController $scope}.
    *
    * Encapsulates  credentials and login function.
    * 
    */
    
    $scope.credentials = {
        
        /**
        * @property userName
        * @memberof module:uiServices.logInController.$scope.credentials
        *
        * @Description Encapsulates userName, provided from the view.
        */
        
		userName : '',
        
        /**
        * @property password
        * @memberof module:uiServices.logInController.$scope.credentials
        *
        * @Description Encapsulates password, provided from the view.
        */
        
		password : ''
		
    };
	
    /**
    *   
    * @member 
    * @name login  
    * @memberof module:uiServices.logInController.$scope.credentials
    * @param {object} credentials
    *
    * @Description  Xhttprequest using {@link module:authModule.authService authService.login(credentials)} 
    *
    * Trigers authentication functionality. On success redirects to {@link createdit} template
    * 
    */
    
	$scope.credentials.login = function (credentials) { //xhttprequest using authService API 
		
		authService.login(credentials).then(function () { //On success, user login   
			
			$location.path('/createdit');
			
		});
	};
}]);


 
 