/*global uiServices */
/*global angular */

/**
*
* <b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> 
*
* <b>Parent Module:</b> {@link module:uiServicesModule uiServices} 
*
* <b>Description:</b> Controls Back Button (top left on the header).  
*
*
*
* @module  navController                           
* @memberof module:uiServicesModule  
* @requires $scope+https://docs.angularjs.org/guide/scope+external
* @requires $location+https://docs.angularjs.org/guide/$location+external
* @requires $rootScope+https://docs.angularjs.org/api/ng/service/$rootScope+external
* @type controller
*
*/

uiServices.controller('navController', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
	
	"use strict";
	
	/** 
    *
    * @class 
	* @name back
    * @type {Object}
	* @inner
    * @classdesc
    *
    * <b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.
    *
	* <b>Description:</b> Defines the functionality for back button. 
    *
    */
	
	$scope.back = {};
	
	
	/**  
    *
	* Redirects to {@link createEditProjectTemplate.html} 
    *
    * @member go
    * @type function
    * @inner
    * @memberof module:uiServicesModule.module:navController~back
    * @param no-arguments
    *
    */
		
	$scope.back.go = function () {
		
		$location.path('/createdit');
		
	};
}]);
