/*global uiServices*/


/**   
*
* @framework angular  
* @kind jsConcept     
* @type controller
* @name editProjectController
* @memberof module:uiServices
*
* @Description Gets userData from Session service and makes it availiable to the {@link editProjectView}.
*
* @requires $scope
* @requires Session+module:authModule.Session
*
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



uiServices.controller('editProjectController', ['$scope', 'Session', function ($scope, Session) {
	
	"use strict";
   
    /**
    *   
    * @class
    * @name $scope  
    * @memberof module:uiServices.editProjectController
    *
    * @classdesc  Controller's local scope.
    * 
    */
    
    /**
    *   
    * @member 
    * @name userData 
    * @type {array}
    * @memberof module:uiServices.editProjectController.$scope
    *
    * @Description Array of objects attached to controllers {@link module:uiServices.editProjectController $scope}. 
    *
    * Encapsulates  user projects data by storing projects data using {@link module:authModule.Session Session.projects}
    * 
    */
    
	$scope.userData = Session.projects;
	
}]);




