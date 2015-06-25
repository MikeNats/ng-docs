/*global uiServices*/
/*global angular*/

/**
*Controller for the create new page. *
**/

/**   
* @framework angular  
* @kind jsConcept     
* @type controller
* @name createProjectController
* @memberof module:uiServices
* @Description Handles the creation of a new project.
* @requires $scope
* @requires $location
* @requires Session+module:authModule.Session
* @requires projectSettings+module:uiServices.projectSettings
* @requires errorHandler+module:mapModule.errorHandler
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/

uiServices.controller('createProjectController', ['$scope', '$location', 'Session', 'projectSettings', 'errorHandler', function ($scope, $location, Session, projectSettings, errorHandler) {
     
    "use strict";
    
    /** 
    * @class
    * @name $scope  
    * @memberof module:uiServices.createProjectController
    * @classdesc  Controller's local scope.
    */

    /** 
    * @class 
    * @name projects 
    * @memberof module:uiServices.createProjectController.$scope
    * @classdesc Encapsulates USER projects
    */
        
    $scope.projects = Session.projects;
 
    /** 
    * @class 
    * @name project 
    * @memberof module:uiServices.createProjectController.$scope
    * @classdesc Encapsulates new project functionallity.
    */
    
    $scope.project = {
 
		/** 
		* @memeber
		* @name data,
		* @type {Object}
		* @memberof module:uiServices.createProjectController.$scope.project
		* @Description Nesesary data for the creation of a project fetched from (@link module:uiServices.projectSettings projectSettings)
		*/
        data : null

    
    };
	
    $scope.project.data = projectSettings.get();
	
    /** 
    * @member 
    * @name validation 
    * @param no-arguments
    * @memberof module:uiServices.createProjectController.$scope.project
    * @Description Validates name;
    */
    
    $scope.validation = function () {
        
        var projectName;
			
        if ($scope.project.data.projectName === '') {//If project name ''
            
            angular.element(document.getElementById('projectName')).addClass('error');
           
            return false;//validation fail
        }
        
        for (projectName in $scope.projects) {//If project name already exist's
            
            if ($scope.projects.hasOwnProperty(projectName)) {
				
                if ($scope.project.data.settingsprojectName === $scope.projects[projectName].projectName) {
                
                    angular.element(document.getElementById('projectName')).addClass('error');
                    angular.element(document.getElementById('projectName')).append('error');
					
                    $scope.project.data.projectName = 'Project name all ready exists';
                    
                    return false;//validation fail
                
                }

            }
        }
        
        angular.element(document.getElementById('projectName')).removeClass('error');
        
        return true;//validation pass
    };
 
    
    /** 
    * @member 
    * @name emptyValue 
    * @param no-arguments
    * @memberof module:uiServices.createProjectController.$scope.project
    * @Description On focus out emptys the value of name input
    */
    
    $scope.project.emptyValue = function () {
        
        $scope.project.data.projectName = '';
    
    };
 
    /** 
    * @member 
    * @name create 
    * @param no-arguments
    * @memberof module:uiServices.createProjectController.$scope.project
    * @Description If validation pass. Update's USER data Object and executes the map.
    */
    
    $scope.project.create = function () {
        
        if ($scope.validation()) {
			
			$scope.project.generateProjectId();
			
            $scope.projects.push($scope.project.data);
	
            $location.path('/customap/' + errorHandler.settingsParseJson($scope.project.data).replace('}', '') + ',"settings":' + errorHandler.settingsParseJson($scope.project.data.settings) + '}');
        }
     
    };
	
    /** 
    * @member 
    * @name generateProjectId 
    * @param no-arguments
    * @memberof module:uiServices.createProjectController.$scope.project
    * @Description Generates Random unique project ID.
    */
	$scope.project.generateProjectId = function () {
		
		var project,
			projectid,
			projectIdExist = true;
		
		while (projectIdExist) {
			
			projectid = Math.floor(Math.random() * 100000) + 1;
				
			for (project in $scope.projects) {//If project name already exist's

				if ($scope.projects.hasOwnProperty(project)) {

					if (projectid === $scope.projects[project].projectid) {

						projectIdExist = true;
						
					} else {
						
						projectIdExist = false;
						
					}

				}
			}
		}
		$scope.project.data.projectId =  projectid;
	};
       

}]);

