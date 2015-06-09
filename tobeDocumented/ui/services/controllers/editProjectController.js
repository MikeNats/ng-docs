/*global uiServices */

/**
*
* <b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> 
*
* <b>Parent Module:</b> {@link module:uiServicesModule uiServices} 
*
* <b>Description:</b> Use {@link module:authModule.module:Session Session} to makes availiabe through scope userData. {@link editProjectTemplate.html} binds the data. 
*
*
*
* @module  editProjectController                           
* @memberof module:uiServicesModule  
* @requires $scope+https://docs.angularjs.org/guide/scope+external
* @requires Session+../documentation/index.html#!/module:authModule.module:Session+internal  
* @type controller
*
*/

uiServices.controller('editProjectController', ['$scope', 'Session', function ($scope, Session) {
	
	"use strict";
    	
	/** 
    *
    * @class 
	* @name userData
    * @type {Object}
	* @inner
    * @classdesc
    *
    * <b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.
    *
	* <b>Description:</b> Stores user projects data using {@link module:authModule.module:Session#create Session.project} for data to be bind into {@link editProjectTeplate.html}. 
    *
    */
	
	$scope.userData = Session.projects;
	
}]);




