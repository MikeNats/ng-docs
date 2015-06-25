/*global uiServices*/
/*global angular*/


/**   
* @framework angular  
* @kind jsConcept     
* @type controller
* @name editProjectController
* @memberof module:uiServices
* @Description Gets userData from Session service and makes it availiable to the {@link editProjectView}.
* @requires $scope
* @requires $compile
* @requires Session+module:authModule.Session
* @requires popUp+module:uiServices.popUp
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



uiServices.controller('editProjectController', ['$scope', 'Session', 'popUp', '$compile', function ($scope, Session, popUp, $compile) {
	
	"use strict";
   
    /** 
    * @class
    * @name $scope  
    * @memberof module:uiServices.editProjectController
    * @classdesc  Controller's local scope.
    */
    
    /** 
    * @class 
    * @name userData 
    * @memberof module:uiServices.editProjectController.$scope
    * @Description Encapsulates functionality to edit projects.
    */
    
    $scope.userData = {};

    /** 
    * @member 
    * @name projects 
    * @type {array}
    * @memberof module:uiServices.editProjectController.$scope.userData
    * @Description Array of objects attached to controllers {@link module:uiServices.editProjectController.projects $scope}. 
    *
    */
    
    $scope.userData.projects = Session.projects;

    /** 
    * @member 
    * @name toDelete 
    * @param {DOMElement} $event
    * @memberof module:uiServices.editProjectController.$scope.userData
    * @Description  Triger modal with warning message
    *
    */
	$scope.userData.toDelete = function ($event) {
    
        var projectID,
            project,
            content;
        
        projectID = angular.element($event.currentTarget).attr('id');
        
        
        for (project in $scope.userData.projects) {
                    
            if ($scope.userData.projects.hasOwnProperty(project)) {
                
                if ($scope.userData.projects[project].projectId === +projectID) {
                    
                    popUp.togglePopUp();
                    
                    content = $compile('<p>Are you sure you want to delete the project: <strong>' +  $scope.userData.projects[project].projectName + '</strong></p>' +
                                   '<button ng-click="userData.deleteProject(' + project + ');" class="small left large-5 medium-5 small-16">Yes</button> <button class="small right large-5 medium-5 small-16" ng-click="popUp.togglePopUp();" >No</button>')($scope);
                    
                    popUp.populate(content);
                   
                    
                     
                }

            }
        
        }
 
    };
    
    /** 
    * @member 
    * @name deleteProject 
    * @param {Integer} project
    * @memberof module:uiServices.editProjectController.$scope.userData
    * @Description   Delete's project from the view and from {@link module:uiServices.editProjectController.projects $scope}.
    close the modal
    *
    */
   
    $scope.userData.deleteProject = function (project) {
        
        $scope.userData.projects.splice(project, 1);
        
        popUp.togglePopUp();
    };
    
    
    

}]);




