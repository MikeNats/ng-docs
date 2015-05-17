/*global angular */

/**
 * <b>Type:</b> <a href='https://docs.angularjs.org/guide/module' target='_blank'> angular.module </a> <br /><br/>
 * <b>Description:</b> Conetains User Interface Services: <br /> <br />
 * <ul><li>{@link module:uiServicesModule.module:createEditController Controller: createEditController}<br />&nbsp;</li>

 </ul>                           
* @module uiServicesModule   
* @type module 
*/

/**  
 * @var uiServices
 * @type {angular.module} 
*/


var uiServices =  angular.module('uiServicesModule', []);


   
/**
 * <b>Type:</b> {@link https://docs.angularjs.org/guide/controller angular.controller} <br /><br/>
 * <b>Parent Module:</b> {@link module:uiServicesModule uiServices} <br /> <br /> 
 * <b>Description:</b> Redirects user to  Create Map or Edit Map template  <br /><br/>
 * @module  createEditController                           
 * @memberof module:uiServicesModule 
 * @requires $scope 
 * @requires $location   
 * @requires Session 
 * @type controller
 */


uiServices.controller('createEditController', ['$scope', '$location', 'Session', function ($scope, $location, Session) {
	
    "use strict";
   
	
	 /**
     * @class project
     * @public
     * @classdesc
     * <b>Type:</b>  Object  attached to  {@link $scope } <br/> <br/>
	 * <b>Description: </b> Implements  redirection to Create Map or Edit Map templates.
     */
    
	

    $scope.project = { };
	
   /**
    * Redirect user to Create Map template.
    * @function  create 
   */
	
	$scope.project.create = function () {
		
		$location.path('/createproject');
		
	};
    
   /**
    * Redirect user to Edit Map template.
    * @function  edit 
   */
	
	$scope.project.edit = function () {
		
		$location.path('/editproject');
		
	};
}]);


