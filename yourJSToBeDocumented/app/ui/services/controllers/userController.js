/*global uiServices*/


/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name userController
* @memberof module:uiServices
* @Description Controls the data that are appended and the functionality on navigation item  at the top right on of the header.
* @requires $scope
* @requires $location
* @requires Session+module:authModule.uiServices.Session
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


uiServices.controller('userController', ['$scope', '$location', 'Session', function ($scope, $location, Session) {
	
	"use strict";

    /**   
    * @class
    * @name $scope  
    * @memberof module:uiServices.userController
    * @classdesc  Controller's local scope.
    */
    
    /**  
    * @class 
    * @name user 
    * @memberof module:uiServices.userController.$scope
    * @classdesc Objects attached to controllers {@link module:uiServices.userController $scope}. 
    *
    * Encapsulates  Header visibility.
    */
    
	$scope.user =  {
	
        /**  
        * @member 
        * @name name 
        * @type {String}
        * @memberof module:uiServices.userController.$scope.user
        * @Description  Stores User Name using {@link module:authModule.uiServices.Session Session}.
        */
        
		name: Session.name
	};

    
    /**   
    * @member 
    * @name panel 
    * @memberof module:uiServices.userController.$scope.user
    * @param no-argument
    * @Description  Use's {@link $location} to redirects to {@link editproject} template. 
    */
    
	$scope.user.panel =  function () {
		
		$location.path('/editproject');
		
	};
}]);
