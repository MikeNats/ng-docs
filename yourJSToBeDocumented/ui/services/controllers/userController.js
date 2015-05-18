/*global uiServices */
/*global angular */

/**
*
* <b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> 
*
* <b>Parent Module:</b> {@link module:uiServicesModule uiServices} 
*
* <b>Description:</b> Controls the data that are appended and the functionality on navigation item  at the top right on of the header.  
*
*
*
* @module  userController                           
* @memberof module:uiServicesModule  
* @requires $scope+https://docs.angularjs.org/guide/scope+external
* @requires $location+https://docs.angularjs.org/guide/$location+external
* @requires Session+../documentation/index.html#!/module:authModule.module:Session+internal 
* @type controller
*
*/



uiServices.controller('userController', ['$scope', '$location', 'Session', function ($scope, $location, Session) {
	
	"use strict";
	
	/** 
    *
    * @class 
	* @name user
    * @type {Object}
	* @inner
    * @classdesc
    *
    * <b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.
    *
	* <b>Description:</b> Redirects to {@link editProjectTemplate.html}
    *
    */
	
	$scope.user =  {
		
		/** 
        *
        * Stores user name using {@link module:authModule.module:Session Session}.
        *
        * @member authenticatited
        * @type {String}  
		* @inner		
        * @memberof module:uiServicesModule.module:userController~user
        *
        */
		
		name: Session.name
	};
	
    /**  
    *
	* Redirects to {@link editProjectTemplate.html} 
    *
    * @member panel
    * @type function
    * @inner
    * @memberof module:uiServicesModule.module:userController~user
    * @param no-argumants
    *
    */
	
	$scope.user.panel =  function () {
		
		$location.path('/editproject');
		
	};
}]);
