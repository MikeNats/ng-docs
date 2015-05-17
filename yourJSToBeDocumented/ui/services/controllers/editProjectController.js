/*global uiServices */

/**
 * <b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> <br /><br/>
 * <b>Parent Module:</b> {@link module:uiServicesModule uiServices} <br /> <br /> 
 * <b>Description:</b> Use {@link module:authModule.module:Session Session} to makes availiabe through scope userData. {@link editProjectTemplate.html} binds the data. <br /><br/>
 * @module  editProjectController                           
 * @memberof module:uiServicesModule  
 * @requires $scope+https://docs.angularjs.org/guide/scope+external
 * @requires Session+../documentation/index.html#!/module:authModule.module:Session+internal  
 * @type controller
 */

uiServices.controller('editProjectController', ['$scope', 'Session', function ($scope, Session) {
	
	"use strict";
    
	 /**  
	 * scope variable.
	 * @member userData
	 */
	
	$scope.userData = Session.projects;
	
}]);




