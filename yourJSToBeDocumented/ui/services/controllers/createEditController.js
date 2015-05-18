/*global angular */
/*global uiServices*/

/** 
*
* <b>Type:</b> {@link https://docs.angularjs.org/guide/controller angular.controller} 
*
* <b>Parent Module:</b> {@link module:uiServicesModule uiServices} 
*
* <b>Description:</b> Redirects user to  Create Map or Edit Map template  
*
*
*
* @module  createEditController                            
* @memberof module:uiServicesModule 
* @requires $scope+https://docs.angularjs.org/guide/scope+external
* @requires $location+https://docs.angularjs.org/guide/$location+external
* @requires Session+../documentation/index.html#!/module:authModule.module:Session+internal 
* @type controller
*
*/

uiServices.controller('createEditController', ['$scope', '$location', 'Session', function ($scope, $location, Session) {
	
    "use strict";
  
    /**
    *
    * @class 
    * @name project
	* @type {Object}
    * @inner
    * @classdesc
    *
    * <b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.
	*
    * <b>Description: </b> Redirection to {@link createProjectTemplate.html} or {@link createProjectTemplate.html} according to user action.
    *
    */

    $scope.project = {};

    /**
    *
    * Redirect user to {@link createProjectTemplate.html}
    *
    * @member  create
    * @type function
	* @param no-arguments
    * @memberof module:uiServicesModule.module:createEditController~project
	* @inner
    *
    */
	
	$scope.project.create = function () {
		
		$location.path('/createproject');
		
	};
    
    
   /**
   *
   * Redirect user to {@link createProjectTemplate.html}
   *
   * @member  edit
   * @param no-arguments
   * @type function
   * @memberof module:uiServicesModule.module:createEditController~project
   * @inner  
   *
   */
	
	$scope.project.edit = function () {
		
		$location.path('/editproject');
		
	};
}]);


