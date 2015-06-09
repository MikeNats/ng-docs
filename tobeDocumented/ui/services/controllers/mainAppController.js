/*global uiServices */

/**
*
* <b>Type:</b> <a href='https://docs.angularjs.org/guide/controller' target='_blank'> angular.controller</a> 
*
* <b>Parent Module:</b> {@link module:uiServicesModule uiServices} 
*
* <b>Description:</b> Handles Header Visibility and provide global access to popUp.
*
*
*
* @module  mainAppController                           
* @memberof module:uiServicesModule 
* @requires $scope+https://docs.angularjs.org/guide/scope+external
* @requires popUp+../documentation/index.html#!/module:authModule.module:authService+internal  
* @requires isSateInitialized+../documentation/index.html#!/module:authModule.module:authService+internal  
* @type controller
*
*/



uiServices.controller('mainAppController', ['$scope', 'isSateInitialized', 'popUp', function ($scope, isSateInitialized, popUp) {
	
	"use strict";
	
	/** 
    *
    * @class 
	* @name header
    * @type {Object}
	* @inner
    * @classdesc
    *
    * <b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.
    *
	* <b>Description:</b> Store header visibility status.
    *
    */
	
	$scope.header = {
        
		/**  
        *
        * Stores header visibility 
        *
        * @property  show
        * @type {Bolean}
        * @inner
        * @memberof module:uiServicesModule.module:mainAppController~header
        *
        */
		
		show : false
        
	};
	
	
	/**  
    *
    * Calls {@link isSateInitialized.watching} that is been trigered when route state changes when user is authenticated.
    *
	* On success  header is visible
    *
    * @member checkVisibility
    * @type function
    * @inner
    * @memberof module:uiServicesModule.module:mainAppController~header
    * @param no-arguments
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
	
	//Trigers $scope.header.checkVisibility();
	$scope.header.checkVisibility();
	
    
	/** 
    *
    * @class 
	* @name popUp
    * @type {Object}
	* @inner
    * @classdesc
    *
    * <b>Type:</b> Object attached to <a href='https://docs.angularjs.org/guide/scope' target='_blank' title='$scope' >$scope</a>.  
    *
	* <b>Description:</b> Initialize pop up.
    *
    */
	
	$scope.popUp = {};
		 
	
    /**  
    *
	* Method is been attched to DOM element's. Onclick popUp is toggled.
    *
    * @member togglePopUp
    * @type function
    * @inner
    * @memberof module:uiServicesModule.module:mainAppController~popUp
    * @param {Object} DOMelement
    *
    */
	
	$scope.popUp.togglePopUp = function (element) {
		
		popUp.togglePopUp(element);
		
	};
}]);
