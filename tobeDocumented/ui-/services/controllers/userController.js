/**
 * Controller userController : Controls the data that are appended and the functionality on navigation item  at the top right on of the header.
 *
 * @Module uiServices.
 *
 * @Dependancies Session : factory under auth module.
 * @Dependancies $rootScope, $location.
 *
 * @see user : scope variable.
 *
 * @param back.panel : redirects to editproject template.
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */
/*global angular */


uiServices.controller('userController', ['$scope', '$location', 'Session', function ($scope, $location, Session) {
	
	"use strict";
	$scope.user =  {
		
		name: Session.name
	};
	
	$scope.user.panel =  function () {
		
		$location.path('/editproject');
		
	};
}]);
