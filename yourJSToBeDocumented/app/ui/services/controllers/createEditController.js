/*global angular*/
/*global uiServices*/


/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name createEditController
* @memberof module:uiServices
* @Description Redirect  to createproject or editproject template.
* @requires $scope
* @requires $location
* @requires Session+module:authModule.Session
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/




uiServices.controller('createEditController', ['$scope', '$location', 'Session', function ($scope, $location, Session) {
	
    "use strict";

    /**  
    * @class
    * @name $scope  
    * @memberof module:uiServices.createEditController
    * @classdesc  Controller's local scope.
    */
    
    
    /** 
    * @class 
    * @name project  
    * @memberof module:uiServices.createEditController.$scope
    * @classdesc  Object attached to controllers {@link module:uiServices.createEditController $scope}.
    * Encapsulates redirect functionality.
    */
    
    $scope.project = { };
	
    
    /**
    * @member create
    * @memberof module:uiServices.createEditController.$scope.project
    * @param no-arguments
    * @Description Redirects to {@link createproject} template by using {@link $location} service.
    */
    
	$scope.project.create = function () {
		
		$location.path('/createproject');
		
	};
   
    
    /**
    * @member edit
    * @memberof module:uiServices.createEditController.$scope.project
    * @param no-arguments
    * @Description Redirects to {@link editproject} template by using {@link $location} service.
    */
    
	$scope.project.edit = function () {
		
		$location.path('/editproject');
		
	};
}]);


