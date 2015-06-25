/*global uiServices*/
/*global angular */


/**   
* @framework angular  
* @kind jsConcept  
* @type controller
* @name mapUiController
* @memberof module:uiServices
* @Description Controls Accordeon of ui.
* @requires $scope
* @author Michail Tsougkranis
* @version 1.0
* @since Angular.1.3.9     
*/




uiServices.controller('mapUiController', ['$scope', function ($scope) {
	
	"use strict";
	
    /** 
    * @class
    * @name $scope  
    * @memberof module:uiServices.mapUiController
    * @classdesc  Controller's local scope.
    */

    /**  
    * @class 
    * @name accordeon 
    * @memberof module:uiServices.mapUiController.$scope
    * @classdesc Objects attached to controllers {@link module:uiServices.mapUiController $scope}. 
    *
    * Encapsulates Accordeon Functionality in {@link mapView} template.
    * 
    */
    
	$scope.accordeon = {//Accordeon
		
        /**
        * @member 
        * @name activeTab 
        * @param {object } DOMElement
        * @memberof module:uiServices.mapUiController.$scope.accordeon
        *
        * @Description toggle's colapse class to the  clicked  DOMElement.
        */
        
		activeTab : function ($event) {
			
			if (angular.element($event.currentTarget).parent().hasClass('colapse')) {
				
				angular.element($event.currentTarget).parent().removeClass('colapse');
				
			} else {
				
				angular.element(document.querySelectorAll('.accTitle')).removeClass('colapse');
				angular.element($event.currentTarget).parent().addClass('colapse');
			}
		}
		
	};
	
}]);
