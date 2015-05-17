/**
 * Controller mainAppController : Handles Header Visibility and provide global access to popUp.
 *
 * @Module uiServices.
 * 
 * @Dependancies  popUp :  factory under auth uiServices module.
 * @Dependancies isSateInitialized : factory under auth auth module.
 *
 * @see header : scope variable.
 * @see header : scope popUp.
 *
 * @param header.checkVisibility : if user loged in succesfully header visibility is on.
 * @param popUp.togglePopUp : global Access to popo up
 *
 * @author : Michail Tsougkranis.
 * @version : 1.0.
 * @since : 1.3.9.
 */

/*global uiServices */


uiServices.controller('mainAppController', ['$scope', 'isSateInitialized', 'popUp', function ($scope, isSateInitialized, popUp) {
	
	"use strict";
	
	$scope.header = {
        
		show : false
        
	};
	
	$scope.header.checkVisibility = function () {
		
		isSateInitialized.watching().then(function () { //if stateChangeSuccess
			
			var currentState = isSateInitialized.getState();
            
			if (currentState.name !== 'index') {
                
				$scope.header.show = true;
                
			}
			
		});
	};
	$scope.header.checkVisibility();
	
	$scope.popUp = {};
	
	$scope.popUp.togglePopUp = function (element) {
		
		popUp.togglePopUp(element);
		
	};
}]);
