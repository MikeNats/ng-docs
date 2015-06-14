/*global uiServices*/


/**   
*
* @framework angular  
* @kind jsConcept  
* @type controller
* @name navController
* @memberof module:uiServices
*
* @Description Controls Back Button (top left on the header).
*
* @requires $scope
* @requires $location
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



/**
 *
 *
 * @param back.go : .

 */

/*global uiServices */



uiServices.controller('navController', ['$scope', '$location', function ($scope, $location) {
	
	"use strict";

    /**
    *   
    * @class
    * @name $scope  
    * @memberof module:uiServices.navController
    *
    * @classdesc  Controller's local scope.
    * 
    */
   
    /**
    *   
    * @class 
    * @name back 
    * @memberof module:uiServices.navController.$scope
    *
    * @classdesc Objects attached to controllers {@link module:uiServices.navController $scope}. 
    *
    * Encapsulates  Back button functionality.
    * 
    */
    
	$scope.back = {};

    /**
    *   
    * @member 
    * @name go
    * @param no-argument
    * @memberof module:uiServices.navController.$scope.back
    *
    * @Description  Redirect's to {@link createdit} template 
    *
    * Using {@link $location} service
    * 
    */
    
	$scope.back.go = function () {
		
		$location.path('/createdit');
		
	};
}]);
