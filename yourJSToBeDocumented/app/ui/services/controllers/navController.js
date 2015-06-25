/*global uiServices*/


/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name navController
* @memberof module:uiServices
* @Description Controls Back Button (top left on the header).
* @requires $scope
* @requires $location
* @requires $rootScope
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/


/*global uiServices */



uiServices.controller('navController', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
	
	"use strict";

    /** 
    * @class
    * @name $scope  
    * @memberof module:uiServices.navController
    * @classdesc  Controller's local scope.
    */
   
    /** 
    * @class 
    * @name button 
    * @memberof module:uiServices.navController.$scope
    * @classdesc Objects attached to controllers {@link module:uiServices.navController $scope}. 
    *
    * Encapsulates  Button functionality.
    */
    
	$scope.button = {};
	
	 /** 
	* @member 
	* @name set
	* @param no-arguments
	* @memberof module:uiServices.navController.$scope.button
	* @Description  Setter of {@link module:uiServices.navController.$scope.button button} attributes.
	*/
	
	$scope.button.set = function () {
        		
		if ($location.$$path === "/editproject") {
			
			return ['Create New Project', '/createproject'];
			
		} else if ($location.$$path === '/createproject') {
		
			return ['Edit Projects', '/editproject'];
						
		} else {
		
			return ['Home', '/createdit'];
				
		}
		
    };
	
	 /** 
	* @member 
	* @name name
	* @type {Sting}
	* @memberof module:uiServices.navController.$scope.button
	* @Description  Name Of the button. Is set dynamically from {@link module:uiServices.navController set} 
	*/
	$scope.button.name = $scope.button.set()[0];
	
	 /** 
	* @member 
	* @name path
	* @type {Sting}
	* @memberof module:uiServices.navController.$scope.button
	* @Description  Url Of the button. Is set dynamically from {@link module:uiServices.navController set} 
	*/
	$scope.button.path = $scope.button.set()[1];
	
    /** 
    * @member 
    * @name go
    * @param no-argument
    * @memberof module:uiServices.navController.$scope.button
    * @Description  Redirects to {@link $scope.button.path}
    *
    * Using {@link $location} service 
    */
	$scope.button.go = function () {
		
		$location.path($scope.button.path);

		
	};
}]);
