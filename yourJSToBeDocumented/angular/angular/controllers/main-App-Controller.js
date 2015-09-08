/*global uiServices*/
/*global angular*/


/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name mainAppController
* @memberof module:uiServices
* @Description Handles Header Visibility and provide global access to popUp.
* @requires $scope
* @requires $http
* @requires popUp+module:authModule.uiServices.popUp
* @requires isSateInitialized+module:uiServices.isSateInitialized
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/



uiServices.controller('mainAppController', ['$rootScope', '$scope', '$http', 'isSateInitialized', 'popUp', 'Session', 'commit', function ($rootScope, $scope, $http,  isSateInitialized, popUp, Session, commit) {
	
	"use strict";

    /**  
    * @class
    * @name $scope  
    * @memberof module:uiServices.mainAppController
    * @classdesc  Controller's local scope.
    */
   
    /**  
    * @class 
    * @name header 
    * @memberof module:uiServices.mainAppController.$scope
    * @classdesc Objects attached to controllers {@link module:uiServices.mainAppController $scope}. 
    * Encapsulates  Header visibility.
    */
    
	$scope.header = {
    
        /**  
        * @member 
        * @name show 
        * @type boolean
        * @memberof module:uiServices.mainAppController.$scope.header
        * @Description  Sets header visibiliti. Hides header on logIn
        */
        
		show : false
        
	};
    
    /**  
    * @member 
    * @name checkVisibility 
    * @memberof module:uiServices.mainAppController.$scope.header
    * @param no-argument
    * @Description  Setter for {@link module:uiServices.mainAppController.$scope.header show}. 
    *
    * Promise {@link module:uiServices.isSateInitialized isSateInitialized} that is been fulfield when the state of the page is not index, when  the user succesfully login's.
    * 
    */
	
	$scope.header.checkVisibility = function () {
		
		isSateInitialized.watching().then(function () { //if stateChangeSuccess
			
			var currentState = isSateInitialized.getState();
            
			if (currentState.name !== 'index') {
                
				$scope.header.show = true;
                
			}
			
		});
	};
    
    //invoaction of the checkVisibility 
	$scope.header.checkVisibility();
	
    /**
    * @class 
    * @name popUp 
    * @memberof  module:uiServices.mainAppController.$scope
    * @classdesc Objects attached to controllers {@link module:uiServices.mainAppController $scope}. 
    * 
    * Encapsulates  Modal Window.
    */
    
	$scope.popUp = {};

    
    /**  
    * @member  
    * @name togglePopUp 
    * @memberof module:uiServices.mainAppController.$scope.popUp
    * @param {object} DOMElement
    * @Description  The function is been attached to diffrent html elements for modul window functionality invocation. 
    *
    * Promise {@link isSateInitialized+module:uiServices.isSateInitialized isSateInitialized} that is been fulfield when the 
    * 
    * More information for the modal window: {@link module:authModule.uiServices.popUp popUp}.
    */
    
	$scope.popUp.togglePopUp = function (element) {
		
		popUp.togglePopUp(element);
		
	};
	
   //a simple model to bind to and send to the server
    $scope.model = Session;
    
    
    //an array of files selected
    $scope.file  = null;

    //listen for the file selected event
    $scope.$on("UpdateModel", function (event, args) {
		
        $scope.$apply(function () {
			var projectToSave = {};
            //add the file object to the scope's files collection
            $scope.file = args.file[0];
            projectToSave.name = Session.name;
            projectToSave.passWord = Session.pass;
            projectToSave.project = args.project;
            commit.data($scope.file, args.fileName, projectToSave);
            
            /*commit.data($scope.file,  args.project).then(function(){
        
                $rootScope.$broadcast('refresh-Map');
                
            }).error(function () {

            //populate pop up with a warning message

        });;*/
       
        });
    });
    
    $scope.refresh = function () {
        
        $rootScope.$broadcast('refresh-Map');
          
    };

	
	
}]);
