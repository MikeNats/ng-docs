/**
 * Controller navController : Controls Back Button (top left on the header).
 *
 * @Module uiServices.
 *
 * @Dependancies $rootScope, $location.
 *
 * @see back : scope variable.
 *
 * @param back.go : redirects to createdit template.
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */
/*global angular */


uiServices.controller('navController', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
	
	"use strict";
	$scope.back = {};
	
	$scope.back.go = function () {
		
		$location.path('/createdit');
		
	};
}]);
